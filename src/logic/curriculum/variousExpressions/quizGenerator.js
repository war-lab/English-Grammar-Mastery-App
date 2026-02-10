
export const generateVariousExpressionsQuiz = (level = 1) => {
  const problems = [
    // Imperative Sentences
    {
      sentence: '{blank} the window, please.',
      options: ['Open', 'Opens', 'Opening', 'Opened'],
      answer: 'Open',
      explanation: '命令文は動詞の原形で始めます。Pleaseをつけると丁寧な依頼になります。',
      translation: '窓を開けてください。'
    },
    {
      sentence: '{blank} run in the hallway.',
      options: ["Don't", "Doesn't", "Not", "Isn't"],
      answer: "Don't",
      explanation: "否定の命令文は「Don't + 動詞の原形」で表します。",
      translation: '廊下で走ってはいけません。'
    },
    {
      sentence: 'Study hard, {blank} you will pass the exam.',
      options: ['and', 'or', 'but', 'so'],
      answer: 'and',
      explanation: '「命令文 + and」は「〜すれば...だ」という条件と結果を表します。',
      translation: '一生懸命勉強しなさい、そうすれば試験に合格します。'
    },
    // Impersonal It
    {
      sentence: 'What time {blank}?',
      options: ['is it', 'it is', 'are it', 'it are'],
      answer: 'is it',
      explanation: '時間を尋ねる疑問文は「What time is it?」です。',
      translation: '今何時ですか？'
    },
    {
      sentence: "{blank} sunny today.",
      options: ["It's", "It", "Its", "There is"],
      answer: "It's",
      explanation: "天気を表すときは非人称のitを使います。「It's + 形容詞」の形です。",
      translation: '今日は晴れています。'
    },
    {
      sentence: 'It {blank} a lot in summer.',
      options: ['rains', 'rainy', 'rain', 'raining'],
      answer: 'rains',
      explanation: 'rainは動詞です。三人称単数現在形にsをつけます。',
      translation: '夏にはたくさん雨が降ります。'
    },
    // There is/are
    {
      sentence: '{blank} a book on the desk.',
      options: ['There is', 'There are', 'It is', 'They are'],
      answer: 'There is',
      explanation: '「〜がある」という存在を表すときはThere is/areを使います。単数なのでisです。',
      translation: '机の上に本があります。'
    },
    {
      sentence: '{blank} many people in the park.',
      options: ['There are', 'There is', 'It is', 'They are'],
      answer: 'There are',
      explanation: '複数（many people）なのでThere areを使います。',
      translation: '公園にはたくさんの人がいます。'
    },
    {
      sentence: '{blank} a post office near here?',
      options: ['Is there', 'Are there', 'There is', 'There are'],
      answer: 'Is there',
      explanation: '疑問文はIs there/Are there の語順になります。単数なのでIs thereです。',
      translation: 'この近くに郵便局がありますか？'
    },
    // Quantity Expressions
    {
      sentence: 'I have {blank} books.',
      options: ['many', 'much', 'little', 'a little'],
      answer: 'many',
      explanation: 'booksは数えられる名詞なのでmanyを使います。',
      translation: '私はたくさんの本を持っています。'
    },
    {
      sentence: "She doesn't have {blank} time.",
      options: ['much', 'many', 'few', 'a few'],
      answer: 'much',
      explanation: 'timeは数えられない名詞なのでmuchを使います。',
      translation: '彼女はあまり時間がありません。'
    },
    {
      sentence: 'There are {blank} students in the classroom.',
      options: ['a lot of', 'a lot', 'much', 'little'],
      answer: 'a lot of',
      explanation: 'a lot ofは数えられる名詞にも使える万能表現です。',
      translation: '教室にはたくさんの生徒がいます。'
    },
    {
      sentence: 'I have {blank} friends here.',
      options: ['a few', 'a little', 'much', 'many of'],
      answer: 'a few',
      explanation: 'friendsは数えられる名詞で「少しいる」という肯定的な意味なのでa fewを使います。',
      translation: 'ここには少し友達がいます。'
    },
    {
      sentence: 'There is {blank} water in the bottle.',
      options: ['little', 'few', 'a few', 'many'],
      answer: 'little',
      explanation: 'waterは数えられない名詞で「ほとんどない」という否定的な意味なのでlittleを使います。',
      translation: '瓶にはほとんど水がありません。'
    },
    {
      question: '「静かにしてください」を英語で表すと？',
      options: ['Be quiet, please.', 'Do quiet, please.', 'Quiet, please.', 'Is quiet, please.'],
      answer: 'Be quiet, please.',
      explanation: 'quietは形容詞なので、命令文ではbe動詞の原形Beを使います。'
    },
    {
      question: '「暗くなってきました」を英語で表すと？',
      options: ["It's getting dark.", "It's becoming dark.", 'The dark is coming.', 'There is dark.'],
      answer: "It's getting dark.",
      explanation: '明暗を表すときも非人称のitを使います。get darkで「暗くなる」です。'
    },
    {
      question: '「冷蔵庫に牛乳がありますか？」を英語で表すと？',
      options: ['Is there any milk in the fridge?', 'Are there any milk in the fridge?', 'Is there many milk in the fridge?', 'Does there milk in the fridge?'],
      answer: 'Is there any milk in the fridge?',
      explanation: 'milkは数えられない名詞なのでIs thereを使います。疑問文ではanyを使います。'
    },
    {
      question: 'I don\'t have {blank} money.',
      options: ['much', 'many', 'a few', 'few'],
      answer: 'much',
      explanation: 'moneyは数えられない名詞で、否定文なのでmuchを使います。'
    }
  ];

  // Select a問題ランダムに選択
  const problem = problems[Math.floor(Math.random() * problems.length)];

  return {
    question: `次の空所に当てはまる適切な語句を選びなさい。\\n\\n\"${problem.sentence.replace('{blank}', '____')}\"`,
    options: problem.options.sort(() => 0.5 - Math.random()),
    answer: problem.answer,
    explanation: `正解は **${problem.answer}** です。${problem.explanation}\\n\\n訳：${problem.translation}`
  };
};
