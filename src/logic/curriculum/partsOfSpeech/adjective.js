
export const adjective = {
  id: 'pos-adjective',
  isEnabled: true,
  title: '形容詞 (Adjective)',
  description: '名詞を修飾（説明）する言葉です。',
  explanation: `
    <h3>形容詞 (Adjective) とは？</h3>
    <p>形容詞は、<strong>名詞の状態や性質を詳しく説明（修飾）</strong>する言葉です。</p>
    
    <h3>使い方の2パターン</h3>
    <ul>
      <li><strong>名詞の前に置く</strong>: a <strong>red</strong> apple (赤いりんご)</li>
      <li><strong>補語 (C) になる</strong>: The flower is <strong>beautiful</strong>. (その花は美しい)</li>
    </ul>

    <h3>例文</h3>
    <p><em>This is a <strong>good</strong> book.</em> (これは良い本です)</p>
    <p><em>He looks <strong>tired</strong>.</em> (彼は疲れているようだ)</p>
  `,
  examples: ['big', 'red', 'happy', 'beautiful', 'tall'],
  quiz: [
    { question: '次のうち、形容詞はどれですか？', options: ['run', 'book', 'happy', 'very'], answer: 'happy' },
    { question: '「美しい花」を英語にすると？', options: ['flower beautiful', 'beautiful flower', 'beauty flower', 'flower beauty'], answer: 'beautiful flower' }
  ]
};
