
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
    {
      question: '次のうち、接続詞はどれですか？',
      options: ['in', 'and', 'the', 'happy'],
      answer: 'and',
      explanation: '「and（そして）」は言葉や文をつなぐ接続詞です。in（～の中に）は前置詞、the（その）は冠詞、happy（幸せな）は形容詞です。'
    },
    {
      question: '「私はりんごが好きだが、バナナは嫌いだ」の「が」にあたる英語は？',
      options: ['and', 'so', 'but', 'or'],
      answer: 'but',
      explanation: '「but（しかし）」は逆接の接続詞で、前の内容と反対のことを言うときに使います。and（そして）、so（だから）、or（または）とは意味が異なります。'
    },
    {
      question: '「コーヒーか紅茶」 "coffee ( ? ) tea"',
      options: ['and', 'but', 'or', 'so'],
      answer: 'or',
      explanation: '「or（または）」は選択の接続詞で、どちらか一方を選ぶときに使います。and（そして）、but（しかし）、so（だから）とは意味が異なります。'
    },
    {
      question: '「雨が降っていたので、家にいた」 "It was raining, ( ? ) I stayed home."',
      options: ['because', 'but', 'so', 'or'],
      answer: 'so',
      explanation: '「so（だから）」は結果を表す接続詞で、理由→結果の順で使います。because（なぜなら）は結果→理由の順、but（しかし）、or（または）とは意味が異なります。'
    },
    {
      question: '「もし〜なら」を表す接続詞は？',
      options: ['when', 'if', 'because', 'so'],
      answer: 'if',
      explanation: '「if（もし～なら）」は条件を表す接続詞です。when（～するとき）、because（なぜなら）、so（だから）とは意味が異なります。'
    },
    {
      question: '「〜するとき」を表す接続詞は？',
      options: ['where', 'who', 'when', 'which'],
      answer: 'when',
      explanation: '「when（～するとき）」は時を表す接続詞です。where（どこで）、who（誰が）、which（どちらが）とは意味が異なります。'
    },
    {
      question: '「〜だから」理由を表す接続詞は？',
      options: ['so', 'because', 'but', 'and'],
      answer: 'because',
      explanation: '「because（なぜなら）」は理由を表す接続詞で、結果→理由の順で使います。so（だから）は理由→結果の順、but（しかし）、and（そして）とは意味が異なります。'
    },
    {
      question: '「〜よりも」比較を表す接続詞は？',
      options: ['then', 'than', 'that', 'this'],
      answer: 'than',
      explanation: '「than（～よりも）」は比較の接続詞で、比較級と一緒に使います（例：taller than）。then（そのとき）、that（あれ）、this（これ）とは意味が異なります。'
    },
    {
      question: '「〜ということを知っている」 "I know ( ? ) he is kind."',
      options: ['what', 'that', 'if', 'so'],
      answer: 'that',
      explanation: '「that」は名詞節を導く接続詞で、「～ということ」という意味です。what（何）、if（もし）、so（だから）とは役割が異なります。'
    },
    {
      question: '「〜する前に」を表す接続詞は？',
      options: ['after', 'before', 'when', 'while'],
      answer: 'before',
      explanation: '「before（～する前に）」は時の順序を表す接続詞です。after（～した後に）は逆の意味、when（～するとき）、while（～している間）とは異なります。'
    }
  ]
};
