
export const verb = {
  id: 'pos-verb',
  isEnabled: true,
  title: '動詞 (Verb)',
  description: '動作や状態を表す言葉です。',
  explanation: `
    <h3>動詞 (Verb) とは？</h3>
    <p>動詞は、主語の<strong>動作</strong>や<strong>状態</strong>を表す言葉です。英語の文には必ず動詞が必要です。</p>
    
    <h3>動詞の種類</h3>
    <ul>
      <li><strong>be動詞</strong>: 状態や存在を表す (am, is, are, was, were)。「〜です」「〜にいる」</li>
      <li><strong>一般動詞</strong>: 具体的な動作や状態を表す (run, eat, like, study)。</li>
    </ul>

    <h3>例文</h3>
    <p><em>I <strong>run</strong> every day.</em> (私は毎日走る) - 動作</p>
    <p><em>She <strong>is</strong> happy.</em> (彼女は幸せです) - 状態</p>
  `,
  examples: ['run', 'eat', 'is', 'have', 'study'],
  quiz: [
    { question: '次のうち、動詞はどれですか？', options: ['beautiful', 'eat', 'desk', 'slowly'], answer: 'eat' },
    { question: 'be動詞はどれですか？', options: ['play', 'am', 'go', 'like'], answer: 'am' }
  ]
};
