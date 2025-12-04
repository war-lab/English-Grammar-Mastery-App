
export const conjunction = {
  id: 'pos-conjunction',
  isEnabled: true,
  title: '接続詞 (Conjunction)',
  description: '語と語、文と文をつなぐ言葉です。',
  explanation: `
    <h3>接続詞 (Conjunction) とは？</h3>
    <p>接続詞は、言葉と言葉、または文と文を<strong>つなぐ（接続する）</strong>言葉です。</p>
    
    <div class="diagram-container">
      <div class="diagram-box" data-label="A">A</div>
      <div class="diagram-operator" style="font-size: 1rem;">+ and +</div>
      <div class="diagram-box" data-label="B">B</div>
    </div>

    <h3>主な接続詞</h3>
    <ul>
      <li>and (〜と、そして)</li>
      <li>but (しかし)</li>
      <li>or (または)</li>
      <li>so (だから)</li>
      <li>because (なぜなら)</li>
    </ul>

    <h3>例文</h3>
    <p><em>I like dogs <strong>and</strong> cats.</em> (私は犬<strong>と</strong>猫が好きです)</p>
    <p><em>I am tired, <strong>but</strong> I am happy.</em> (私は疲れている、<strong>しかし</strong>幸せだ)</p>
  `,
  examples: ['and', 'but', 'or', 'so', 'because'],
  quiz: [
    { question: '次のうち、接続詞はどれですか？', options: ['in', 'and', 'the', 'happy'], answer: 'and' },
    { question: '「私はりんごが好きだが、バナナは嫌いだ」の「が」にあたる英語は？', options: ['and', 'so', 'but', 'or'], answer: 'but' }
  ]
};
