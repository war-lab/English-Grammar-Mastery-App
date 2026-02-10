import { generateQuiz } from '../../geminiService.js';

export const generatePassiveVoiceQuiz = (level = 1, isAIMode = false) => {
  const templates = [
    {
      q: '受動態の基本形は？',
      o: ['be + Vpp', 'have + Vpp', 'be + Ving', 'do + V'],
      a: 'be + Vpp',
      exp: '受動態は「be動詞 + 過去分詞(Vpp)」で作ります。'
    },
    {
      q: '「手紙が書かれた」を英語で？',
      o: ['The letter was written.', 'The letter wrote.', 'The letter was writing.', 'The letter is write.'],
      a: 'The letter was written.',
      exp: '過去のことなのでwas、受け身なのでwrittenを使います。'
    },
    {
      q: '「その窓は彼によって壊された」: The window ___ ___ ___ him.',
      o: ['was broken by', 'is broken by', 'was break with', 'did break of'],
      a: 'was broken by',
      exp: '過去の受動態なのでwas broken、動作主を示すのでbyを使います。'
    },
    {
      q: '能動態 "They build the house." を受動態にすると？',
      o: ['The house is built by them.', 'The house was built by them.', 'The house builds by them.', 'The house is builded by them.'],
      a: 'The house is built by them.',
      exp: 'build(現在形) → is built(現在受動態)。buildの過去分詞はbuiltです。'
    },
    {
      q: '受動態で動作主を示す前置詞は通常どれ？',
      o: ['by', 'to', 'for', 'with'],
      a: 'by',
      exp: '動作主は通常「by + 人/物」で表します。'
    },
    // Future
    {
      q: '「その橋は来年建設されるでしょう」',
      o: ['will be built', 'will built', 'will be build', 'is built'],
      a: 'will be built',
      exp: '未来の受動態は will be + Vpp です。'
    },
    {
      q: '「それは明日終わるでしょう」: It ___ ___ finished tomorrow.',
      o: ['will be', 'will is', 'is will', 'will been'],
      a: 'will be',
      exp: 'It will be finished tomorrow.'
    },
    // Auxiliary
    {
      q: '「これは簡単になされ得る」: This ___ ___ done easily.',
      o: ['can be', 'can do', 'can is', 'is can'],
      a: 'can be',
      exp: '助動詞 can + be + Vpp の形です。'
    },
    {
      q: '「そのドアはロックされなければならない」',
      o: ['must be locked', 'must lock', 'must be lock', 'must is locked'],
      a: 'must be locked',
      exp: '義務 must + be + Vpp (locked) です。'
    },
    // Perfect
    {
      q: '「私の自転車が盗まれてしまった」',
      o: ['has been stolen', 'has stolen', 'is stolen', 'was stolen'],
      a: 'has been stolen',
      exp: '完了の意味（してしまった）を含む受動態は has been + Vpp です。'
    },
    {
      q: '現在完了の受動態の基本形は？',
      o: ['have/has been + Vpp', 'have/has + Vpp', 'have/has be + Vpp', 'be + Vpp'],
      a: 'have/has been + Vpp',
      exp: '完了形の have + 過去分詞(been) + 受動態の be + Vpp が組み合わさります。'
    }
  ];

  // For now, just return a random question from the fixed pool
  const index = Math.floor(Math.random() * templates.length);
  const t = templates[index];

  return {
    question: t.q,
    options: t.o,
    answer: t.a,
    explanation: t.exp
  };
};

/**
 * Generates an AI-powered quiz for Passive Voice.
 * @param {number} level - Difficulty level (1-10).
 * @param {AbortSignal} signal - Abort signal for cancellation.
 * @returns {Promise<Object>} Quiz object.
 */
export const generateAIQuiz = async (level = 1, signal) => {
  const types = ['active-to-passive', 'passive-to-active', 'fill-blank-passive'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  let prompt = '';

  if (selectedType === 'active-to-passive') {
    prompt = `Generate 1 active-to-passive transformation question.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の能動態の文を受動態に書き換えなさい：\\n\\n能動態: \\"[Active Sentence]\\"\\n(意味: [Japanese Translation])", "japaneseTranslation":"[Japanese Translation]", "activeSentence":"[Active Sentence]", "answer":"[Passive Sentence]", "options":["[Passive Sentence]","[Wrong Opt1]","[Wrong Opt2]","[Wrong Opt3]"], "explanation":"[Concise explanation in Japanese]"}
Note: Check verb tense carefully.`;
  }
  else if (selectedType === 'passive-to-active') {
    prompt = `Generate 1 passive-to-active transformation question.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の受動態の文を能動態に書き換えなさい：\\n\\n受動態: \\"[Passive Sentence]\\"\\n(意味: [Japanese Translation])", "japaneseTranslation":"[Japanese Translation]", "passiveSentence":"[Passive Sentence]", "answer":"[Active Sentence]", "options":["[Active Sentence]","[Wrong Opt1]","[Wrong Opt2]","[Wrong Opt3]"], "explanation":"[Concise explanation in Japanese]"}
Note: If no agent (by ...) is present, use specific subjects like 'Someone', 'They', 'People'.`;
  }
  else if (selectedType === 'fill-blank-passive') {
    prompt = `Generate 1 fill-in-the-blank question testing passive voice structure.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文を受動態にするために、（　）内の動詞を適切な形にして空欄を埋めなさい（選択肢から選んでください）：\\n\\n\\"[Sentence Start] ___ [Sentence End] (base verb: [Verb])\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete Passive Sentence]", "blank":"[Answer Phrase]", "answer":"[Answer Phrase]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]"], "explanation":"[Concise explanation in Japanese]"}
Note: Can include auxiliary verbs or progressive forms if level is high.`;
  }

  const result = await generateQuiz({
    prompt,
    temperature: 0.8,
    responseMimeType: 'application/json',
    signal
  });

  // Validation
  if (!result || typeof result !== 'object') throw new Error('Invalid response format');
  if (!result.question || typeof result.question !== 'string') throw new Error('Missing question field');
  if (!Array.isArray(result.options) || result.options.length < 2) throw new Error('Invalid options array');
  if (!result.answer || !result.options.includes(result.answer)) throw new Error('Answer not found in options');

  // Trim
  result.question = result.question.trim();
  result.answer = result.answer.trim();
  result.options = result.options.map(o => o.trim()).filter(o => o.length > 0);

  return result;
};
