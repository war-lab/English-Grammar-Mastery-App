import { generateQuiz } from '../../geminiService.js';

/**
 * 時制マスター用の100問クイズジェネレーター
 * @param {number} level - 問題のレベル (1-10)
 * @param {boolean} isAIMode - AIモード（最高難易度）
 * @returns {Object} 問題オブジェクト {question, options, answer, explanation}
 */
export const generateTenseQuiz = (level = 1, isAIMode = false) => {
  const tenses = [
    { id: 'past', label: '過去形 (Past Tense)' },
    { id: 'future', label: '未来形 (Future Tense)' },
    { id: 'progressive', label: '進行形 (Progressive Tense)' },
    { id: 'perfect', label: '完了形 (Perfect Tense)' }
  ];

  let targetTense;
  let complexity = 1; // 1: Basic, 2: Intermediate, 3: Advanced

  // --- Granular Level Logic (1-10) ---
  if (level === 1) targetTense = 'past';
  else if (level === 2) targetTense = 'future';
  else if (level === 3) targetTense = 'progressive';
  else if (level === 4) targetTense = 'perfect';
  else {
    // Levels 5-10: Mixed tenses, increasing complexity
    targetTense = tenses[Math.floor(Math.random() * tenses.length)].id;
    if (level <= 7) complexity = 1;
    else if (level <= 9) complexity = 2;
    else complexity = 3;
  }

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // Data pools for sentence generation
  // Level 1: Basic
  const subjectsL1 = ['I', 'You', 'He', 'She', 'We', 'They'];
  const verbsL1 = {
    base: ['play', 'eat', 'go', 'study', 'watch', 'make', 'have'],
    past: ['played', 'ate', 'went', 'studied', 'watched', 'made', 'had'],
    pastParticiple: ['played', 'eaten', 'gone', 'studied', 'watched', 'made', 'had'],
    ing: ['playing', 'eating', 'going', 'studying', 'watching', 'making', 'having']
  };
  const objectsL1 = ['tennis', 'lunch', 'school', 'English', 'TV', 'a cake', 'a dog'];
  const timeExpressionsL1 = {
    past: ['yesterday', 'last night', 'last week'],
    future: ['tomorrow', 'next week', 'soon'],
    progressive: ['now', 'right now', 'at this moment'],
    perfect: ['already', 'just', 'ever', 'never', 'for 5 years']
  };

  // Level 2: Intermediate
  const subjectsL2 = ['My brother', 'The students', 'Our teacher', 'Everyone'];
  const verbsL2 = {
    base: ['visit', 'finish', 'start', 'write', 'read', 'speak'],
    past: ['visited', 'finished', 'started', 'wrote', 'read', 'spoke'],
    pastParticiple: ['visited', 'finished', 'started', 'written', 'read', 'spoken'],
    ing: ['visiting', 'finishing', 'starting', 'writing', 'reading', 'speaking']
  };
  const objectsL2 = ['the homework', 'the project', 'a letter', 'Japanese', 'the book'];
  const timeExpressionsL2 = {
    past: ['two days ago', 'in 2020', 'this morning'],
    future: ['next month', 'in the future', 'later'],
    progressive: ['at 8 PM', 'when I called'],
    perfect: ['since Monday', 'for three months', 'before']
  };

  // Level 3: Advanced
  const subjectsL3 = ['The company', 'Scientists', 'The government', 'Many people'];
  const verbsL3 = {
    base: ['develop', 'discover', 'announce', 'complete', 'achieve'],
    past: ['developed', 'discovered', 'announced', 'completed', 'achieved'],
    pastParticiple: ['developed', 'discovered', 'announced', 'completed', 'achieved'],
    ing: ['developing', 'discovering', 'announcing', 'completing', 'achieving']
  };
  const objectsL3 = ['new technology', 'a cure', 'the plan', 'the mission', 'their goals'];
  const timeExpressionsL3 = {
    past: ['a decade ago', 'during the pandemic'],
    future: ['by next year', 'in the coming months'],
    progressive: ['during the meeting', 'while working'],
    perfect: ['since 2010', 'for a long time', 'recently']
  };

  // Select pools based on complexity
  let subjects, verbs, objects, timeExpressions;

  if (complexity === 1) {
    subjects = subjectsL1;
    verbs = verbsL1;
    objects = objectsL1;
    timeExpressions = timeExpressionsL1;
  } else if (complexity === 2) {
    subjects = [...subjectsL1, ...subjectsL2];
    verbs = {
      base: [...verbsL1.base, ...verbsL2.base],
      past: [...verbsL1.past, ...verbsL2.past],
      pastParticiple: [...verbsL1.pastParticiple, ...verbsL2.pastParticiple],
      ing: [...verbsL1.ing, ...verbsL2.ing]
    };
    objects = [...objectsL1, ...objectsL2];
    timeExpressions = {
      past: [...timeExpressionsL1.past, ...timeExpressionsL2.past],
      future: [...timeExpressionsL1.future, ...timeExpressionsL2.future],
      progressive: [...timeExpressionsL1.progressive, ...timeExpressionsL2.progressive],
      perfect: [...timeExpressionsL1.perfect, ...timeExpressionsL2.perfect]
    };
  } else {
    subjects = [...subjectsL1, ...subjectsL2, ...subjectsL3];
    verbs = {
      base: [...verbsL1.base, ...verbsL2.base, ...verbsL3.base],
      past: [...verbsL1.past, ...verbsL2.past, ...verbsL3.past],
      pastParticiple: [...verbsL1.pastParticiple, ...verbsL2.pastParticiple, ...verbsL3.pastParticiple],
      ing: [...verbsL1.ing, ...verbsL2.ing, ...verbsL3.ing]
    };
    objects = [...objectsL1, ...objectsL2, ...objectsL3];
    timeExpressions = {
      past: [...timeExpressionsL1.past, ...timeExpressionsL2.past, ...timeExpressionsL3.past],
      future: [...timeExpressionsL1.future, ...timeExpressionsL2.future, ...timeExpressionsL3.future],
      progressive: [...timeExpressionsL1.progressive, ...timeExpressionsL2.progressive, ...timeExpressionsL3.progressive],
      perfect: [...timeExpressionsL1.perfect, ...timeExpressionsL2.perfect, ...timeExpressionsL3.perfect]
    };
  }

  // Generate sentence based on target tense
  let sentence = '';
  let subject = getRandom(subjects);
  const verbIndex = Math.floor(Math.random() * verbs.base.length);
  const obj = getRandom(objects);

  // Helper function for subject-verb agreement
  const isThirdPersonSingular = (subj) => {
    return ['He', 'She', 'It', 'The company', 'The government', 'My brother', 'Our teacher', 'Everyone'].includes(subj);
  };

  switch (targetTense) {
    case 'past':
      {
        const timeExp = getRandom(timeExpressions.past);
        sentence = `${subject} ${verbs.past[verbIndex]} ${obj} ${timeExp}.`;
      }
      break;

    case 'future':
      {
        const timeExp = getRandom(timeExpressions.future);
        if (Math.random() > 0.5) {
          // will
          sentence = `${subject} will ${verbs.base[verbIndex]} ${obj} ${timeExp}.`;
        } else {
          // be going to
          const beVerb = isThirdPersonSingular(subject) ? 'is' : (subject === 'I' ? 'am' : 'are');
          sentence = `${subject} ${beVerb} going to ${verbs.base[verbIndex]} ${obj} ${timeExp}.`;
        }
      }
      break;

    case 'progressive':
      {
        const timeExp = getRandom(timeExpressions.progressive);
        const tenseType = Math.random();

        if (tenseType < 0.4) {
          // Present Progressive
          const beVerb = isThirdPersonSingular(subject) ? 'is' : (subject === 'I' ? 'am' : 'are');
          sentence = `${subject} ${beVerb} ${verbs.ing[verbIndex]} ${obj} ${timeExp}.`;
        } else if (tenseType < 0.7) {
          // Past Progressive
          const beVerb = (isThirdPersonSingular(subject) || subject === 'I') ? 'was' : 'were';
          sentence = `${subject} ${beVerb} ${verbs.ing[verbIndex]} ${obj} ${timeExp}.`;
        } else {
          // Future Progressive
          sentence = `${subject} will be ${verbs.ing[verbIndex]} ${obj} ${timeExp}.`;
        }
      }
      break;

    case 'perfect':
      {
        const timeExp = getRandom(timeExpressions.perfect);
        const haveVerb = isThirdPersonSingular(subject) ? 'has' : 'have';
        sentence = `${subject} ${haveVerb} ${verbs.pastParticiple[verbIndex]} ${obj} ${timeExp}.`;
      }
      break;
  }

  // Clean up sentence (basic fixes)
  sentence = sentence.replace(/\s+/g, ' ').trim();

  // Create question
  const question = `次の英文の時制を答えなさい：\n\n"${sentence}"`;

  // Create options (all tense labels)
  const options = tenses.map(t => t.label);

  // Find the correct answer
  const answer = tenses.find(t => t.id === targetTense).label;

  // Generate explanation
  let explanation = '';
  switch (targetTense) {
    case 'past':
      explanation = `この文は過去形です。動詞が過去形（${verbs.past[verbIndex]}）になっており、過去の出来事を表しています。`;
      break;
    case 'future':
      explanation = sentence.includes('will') ?
        `この文は未来形です。will + 動詞の原形で、未来のことを表しています。` :
        `この文は未来形です。be going to + 動詞の原形で、未来の予定を表しています。`;
      break;
    case 'progressive':
      if (sentence.includes('is ') || sentence.includes('am ') || sentence.includes('are ')) {
        explanation = `この文は現在進行形です。be動詞 + 動詞のing形で、現在進行中の動作を表しています。`;
      } else if (sentence.includes('was ') || sentence.includes('were ')) {
        explanation = `この文は過去進行形です。be動詞の過去形 + 動詞のing形で、過去のある時点で進行中だった動作を表しています。`;
      } else {
        explanation = `この文は未来進行形です。will be + 動詞のing形で、未来のある時点で進行中であろう動作を表しています。`;
      }
      break;
    case 'perfect':
      explanation = `この文は完了形です。have/has + 過去分詞で、過去から現在までの完了・経験・継続を表しています。`;
      break;
  }

  return {
    question,
    options,
    answer,
    explanation
  };
};

// --- New AI Quiz Generator ---

/**
 * Generates an AI-powered quiz for Tenses.
 * @param {number} level - Difficulty level (1-10).
 * @param {AbortSignal} signal - Abort signal for cancellation.
 * @returns {Promise<Object>} Quiz object.
 */
export const generateAIQuiz = async (level = 1, signal) => {
  const types = ['tense-id', 'fill-blank-tense', 'rewrite-tense'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  let prompt = '';

  if (selectedType === 'tense-id') {
    prompt = `Generate 1 English sentence identifying its tense (Past, Future, Progressive, Perfect).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の英文の時制を答えなさい：\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "answer":"[Tense Label]", "options":["過去形 (Past Tense)","未来形 (Future Tense)","進行形 (Progressive Tense)","完了形 (Perfect Tense)"], "explanation":"[Concise explanation in Japanese]"}
Note: The sentence must clearly demonstrate the target tense.`;
  }
  else if (selectedType === 'fill-blank-tense') {
    prompt = `Generate 1 fill-in-the-blank question testing verb tenses.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の（　）内の動詞を適切な形にして、空欄を埋めなさい（選択肢から選んでください）：\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer Verb Form]", "answer":"[Answer Verb Form]", "options":["[Form 1]","[Form 2]","[Form 3]","[Form 4]"], "explanation":"[Concise explanation in Japanese]"}
Note: Options should be different conjugations of the same verb (e.g. go, went, gone, going).`;
  }
  else if (selectedType === 'rewrite-tense') {
    prompt = `Generate 1 tense rewrite question.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文を指定された時制に書き換えなさい：\\n\\n元の文: \\"[Original Sentence]\\"\\n指示: [Target Tense]にする", "japaneseTranslation":"[Japanese Translation]", "originalSentence":"[Original Sentence]", "targetTense":"[Target Tense]", "answer":"[Transformed Sentence]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]"], "explanation":"[Concise explanation in Japanese]"}
Note: Options should be full sentences. Ensure the transformation is logical.`;
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

