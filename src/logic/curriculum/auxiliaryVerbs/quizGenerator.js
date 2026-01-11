import { generateQuiz } from '../../geminiService.js';

export const generateAuxiliaryVerbQuiz = (level = 1) => {
  const problems = [
    {
      sentence: 'I {blank} play the piano when I was five.',
      options: ['can', 'could', 'must', 'should'],
      answer: 'could',
      explanation: '過去の能力を表すには could を使います。',
      translation: '私は5歳のときピアノを弾くことができました。'
    },
    {
      sentence: 'It {blank} rain tomorrow.',
      options: ['will', 'shall', 'must not', 'should not'],
      answer: 'will',
      explanation: '未来の予測には will を使います。',
      translation: '明日は雨が降るでしょう。'
    },
    {
      sentence: '{blank} I use your pen?',
      options: ['May', 'Must', 'Should', 'Will'],
      answer: 'May',
      explanation: '丁寧な許可を求めるときは May I ...? を使います。',
      translation: 'あなたのペンを使ってもよろしいですか？'
    },
    {
      sentence: 'You {blank} brush your teeth after meals.',
      options: ['should', 'might', 'would', 'could'],
      answer: 'should',
      explanation: '「〜すべきだ」というアドバイスには should を使います。',
      translation: '食後は歯を磨くべきです。'
    },
    {
      sentence: 'He {blank} be at home now.',
      options: ['must', 'will', 'should', 'can'],
      answer: 'must',
      explanation: '「〜に違いない」という強い推量には must を使います。',
      translation: '彼は今、家にいるに違いありません。'
    },
    {
      sentence: 'You {blank} not smoke here.',
      options: ['must', 'may', 'should', 'could'],
      answer: 'must',
      explanation: '「〜してはいけない」という禁止には must not を使います。',
      translation: 'ここでタバコを吸ってはいけません。'
    },
    {
      sentence: '{blank} you like some coffee?',
      options: ['Would', 'Will', 'Can', 'Should'],
      answer: 'Would',
      explanation: '丁寧な勧誘には Would you like ...? を使います。',
      translation: 'コーヒーはいかがですか？'
    },
    {
      sentence: 'I {blank} do my best.',
      options: ['will', 'may', 'could', 'should'],
      answer: 'will',
      explanation: '自分の意志を表すには will を使います。',
      translation: '最善を尽くします。'
    },
    {
      sentence: '{blank} you open the window, please?',
      options: ['Could', 'Must', 'Should', 'May'],
      answer: 'Could',
      explanation: '丁寧な依頼には Could you ...? を使います。',
      translation: '窓を開けていただけますか？'
    },
    {
      sentence: 'We {blank} not be late for school.',
      options: ['must', 'might', 'could', 'would'],
      answer: 'must',
      explanation: '「遅れてはいけない」という義務・禁止には must not を使います。',
      translation: '学校に遅れてはいけません。'
    }
  ];

  // Select a random problem from the pool based on level or just random for now
  // For a 100-question quiz, we should have more variety, but this is a start.
  const problem = problems[Math.floor(Math.random() * problems.length)];

  return {
    question: `次の空所に当てはまる適切な助動詞を選びなさい。\n\n"${problem.sentence.replace('{blank}', '____')}"`,
    options: problem.options.sort(() => 0.5 - Math.random()),
    answer: problem.answer,
    explanation: `正解は **${problem.answer}** です。${problem.explanation}\n\n訳：${problem.translation}`
  };
};

/**
 * Generates an AI-powered quiz for Auxiliary Verbs.
 * @param {number} level - Difficulty level (1-10).
 * @param {AbortSignal} signal - Abort signal for cancellation.
 * @returns {Promise<Object>} Quiz object.
 */
export const generateAIQuiz = async (level = 1, signal) => {
  const types = ['fill-blank-aux', 'choose-nuance', 'rewrite-polite'];
  const selectedType = types[Math.floor(Math.random() * types.length)];

  let prompt = '';

  if (selectedType === 'fill-blank-aux') {
    prompt = `Generate 1 fill-in-the-blank question testing auxiliary verbs (can, could, may, might, must, should, will, would).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な助動詞を選びなさい：\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer Auxiliary Verb]", "answer":"[Answer Auxiliary Verb]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]"], "explanation":"[Concise explanation in Japanese]"}
Note: Context must clearly determine the correct auxiliary verb.`;
  }
  else if (selectedType === 'choose-nuance') {
    prompt = `Generate 1 nuance/meaning identification question for auxiliary verbs.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の助動詞 [Auxiliary Verb] が表す意味として最も適切なものを選びなさい：\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "targetAux":"[Auxiliary Verb]", "answer":"[Correct Nuance (Japanese)]", "options":["[Nuance 1]","[Nuance 2]","[Nuance 3]","[Nuance 4]"], "explanation":"[Concise explanation in Japanese]"}
Note: Options should be Japanese meanings (e.g. 許可, 義務, 推量, 能力).`;
  }
  else if (selectedType === 'rewrite-polite') {
    prompt = `Generate 1 polite rewrite question using auxiliary verbs.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文をより丁寧な表現に書き換えなさい：\\n\\n元の文: \\"[Original Sentence]\\"\\n指示: [Instruction, e.g. use Could]", "japaneseTranslation":"[Japanese Translation]", "originalSentence":"[Original Sentence]", "answer":"[Polite Sentence]", "options":["[Polite Sentence]","[Wrong Opt1]","[Wrong Opt2]","[Wrong Opt3]"], "explanation":"[Concise explanation in Japanese]"}
Note: Focus on politeness (Can -> Could, Will -> Would, etc).`;
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
