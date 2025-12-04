
export const preposition = {
  id: 'pos-preposition',
  isEnabled: true,
  title: '前置詞 (Preposition)',
  description: '名詞の前に置いて、場所や時などの関係を表す言葉です。',
  explanation: `
    <h3>前置詞 (Preposition) とは？</h3>
    <p>前置詞は、名詞（または代名詞）の前に置いて、他の言葉との関係（場所、時、方向など）を表します。</p>
    
    <h3>主な前置詞</h3>
    <ul>
      <li><strong>場所</strong>: in (中に), on (上に), at (地点に), under (下に)</li>
      <li><strong>時</strong>: in (〜に), on (〜に), at (〜に), before (前に), after (後に)</li>
      <li><strong>方向</strong>: to (〜へ), from (〜から)</li>
    </ul>

    <h3>例文</h3>
    <p><em>The book is <strong>on</strong> the desk.</em> (本は机の<strong>上に</strong>ある)</p>
    <p><em>I go to school <strong>at</strong> 8:00.</em> (私は8時<strong>に</strong>学校へ行く)</p>
  `,
  examples: ['in', 'on', 'at', 'to', 'for', 'with'],
  quiz: [
    { question: '次のうち、前置詞はどれですか？', options: ['apple', 'run', 'in', 'big'], answer: 'in' },
    { question: '「机の下に」を英語で言うと？', options: ['on the desk', 'under the desk', 'in the desk', 'at the desk'], answer: 'under the desk' }
  ]
};
