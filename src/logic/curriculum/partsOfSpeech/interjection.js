
export const interjection = {
  id: 'pos-interjection',
  isEnabled: true,
  title: '間投詞 (Interjection)',
  description: '感情や呼びかけを表す言葉です。',
  explanation: `
    <h3>間投詞 (Interjection) とは？</h3>
    <p>間投詞は、驚き、喜び、悲しみなどの<strong>感情</strong>や、<strong>呼びかけ</strong>、<strong>挨拶</strong>などを表す言葉です。文の他の要素とは独立して使われます。</p>
    
    <h3>主な間投詞</h3>
    <ul>
      <li>Oh (あっ、おや)</li>
      <li>Wow (わあ)</li>
      <li>Hi / Hello (やあ、こんにちは)</li>
      <li>Ouch (痛っ)</li>
      <li>Yes / No (はい / いいえ)</li>
    </ul>

    <h3>例文</h3>
    <p><em><strong>Wow</strong>, that's great!</em> (<strong>わあ</strong>、それはすごい！)</p>
    <p><em><strong>Oh</strong>, I didn't know that.</em> (<strong>おや</strong>、それは知らなかった)</p>
  `,
  examples: ['Oh', 'Wow', 'Hi', 'Ouch', 'Yes'],
  quiz: [
    { question: '次のうち、間投詞はどれですか？', options: ['run', 'Wow', 'big', 'in'], answer: 'Wow' },
    { question: '痛いときに使う言葉は？', options: ['Hello', 'Ouch', 'Yes', 'Good'], answer: 'Ouch' }
  ]
};
