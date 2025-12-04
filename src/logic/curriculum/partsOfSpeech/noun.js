
export const noun = {
  id: 'pos-noun',
  isEnabled: true,
  title: '名詞 (Noun)',
  description: '人、物、場所、概念などの名前を表す言葉です。',
  explanation: `
    <h3>名詞 (Noun) とは？</h3>
    <p>名詞は、<strong>人、物、場所、考え（概念）</strong>などの名前を表す言葉です。</p>
    <p>文の中で<strong>主語 (S)</strong>、<strong>目的語 (O)</strong>、<strong>補語 (C)</strong> になることができます。</p>
    
    <h3>名詞の種類</h3>
    <ul>
      <li><strong>可算名詞 (Countable Nouns)</strong>: 数えられる名詞（例: apple, dog, book）。単数形と複数形があります。</li>
      <li><strong>不可算名詞 (Uncountable Nouns)</strong>: 数えられない名詞（例: water, music, happiness）。常に単数扱いです。</li>
      <li><strong>固有名詞 (Proper Nouns)</strong>: 特定の人や場所の名前（例: Tokyo, John）。常に大文字で始めます。</li>
    </ul>

    <h3>例文</h3>
    <p><em>The <strong>cat</strong> is sleeping.</em> (猫は眠っている) - 主語</p>
    <p><em>I like <strong>music</strong>.</em> (私は音楽が好きだ) - 目的語</p>
    <p><em>He is a <strong>teacher</strong>.</em> (彼は先生です) - 補語</p>
  `,
  examples: ['apple', 'Tokyo', 'happiness', 'water', 'student'],
  quiz: [
    { question: '次のうち、名詞はどれですか？', options: ['run', 'happy', 'apple', 'quickly'], answer: 'apple' },
    { question: '不可算名詞（数えられない名詞）はどれですか？', options: ['book', 'water', 'pen', 'dog'], answer: 'water' }
  ]
};
