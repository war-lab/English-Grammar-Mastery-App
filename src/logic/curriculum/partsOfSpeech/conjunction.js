
export const conjunction = {
  id: 'pos-conjunction',
  isEnabled: true,
  title: '接続詞 (Conjunction)',
  description: '語と語、文と文をつなぐ言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>接続詞は、言葉と言葉、または文と文を<strong>つなぐ（接続する）</strong>言葉です。文の接着剤のような役割です。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="A">A</div>
        <div class="diagram-operator" style="font-size: 1rem; background: var(--primary); color: white; padding: 0.5rem; border-radius: 50%;">+</div>
        <div class="diagram-box" data-label="B">B</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">よく使う接続詞</h3>

      <div class="concept-box">
        <h4>🤝 and (そして、〜と)</h4>
        <p>順接。前と後ろを対等につなぎます。</p>
        <div class="example-grid">
          <div class="example-item">dogs <strong>and</strong> cats<br>(犬と猫)</div>
          <div class="example-item">I ate lunch, <strong>and</strong> I slept.<br>(昼食を食べて、そして寝た)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🤔 but (しかし、でも)</h4>
        <p>逆接。前の内容と反対のことを言います。</p>
        <div class="example-grid">
          <div class="example-item">I like apples, <strong>but</strong> I hate bananas.<br>(りんごは好きだが、バナナは嫌いだ)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>⚖️ or (または、あるいは)</h4>
        <p>選択。どちらか一方を選びます。</p>
        <div class="example-grid">
          <div class="example-item">coffee <strong>or</strong> tea<br>(コーヒーか紅茶か)</div>
          <div class="example-item">Do you like it <strong>or</strong> not?<br>(好きなの、嫌いなの？)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>💡 so / because (だから / なぜなら)</h4>
        <p>因果関係。理由と結果をつなぎます。</p>
        <div class="example-grid">
          <div class="example-item">It was raining, <strong>so</strong> I stayed home.<br>(雨だった、だから家にいた)</div>
          <div class="example-item">I stayed home <strong>because</strong> it was raining.<br>(家にいた、なぜなら雨だったから)</div>
        </div>
      </div>
    </div>
  `,
  examples: ['and', 'but', 'or', 'so', 'because'],
  quiz: [
    { question: '次のうち、接続詞はどれですか？', options: ['in', 'and', 'the', 'happy'], answer: 'and' },
    { question: '「私はりんごが好きだが、バナナは嫌いだ」の「が」にあたる英語は？', options: ['and', 'so', 'but', 'or'], answer: 'but' }
  ]
};
