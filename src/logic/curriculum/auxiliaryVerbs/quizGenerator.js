
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
