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
