
export const interjection = {
  id: 'pos-interjection',
  isEnabled: true,
  title: '間投詞 (Interjection)',
  description: '感情や呼びかけを表す言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>間投詞は、驚き、喜び、悲しみなどの<strong>感情</strong>や、<strong>呼びかけ</strong>、<strong>挨拶</strong>などを表す言葉です。</p>
      <p>文の他の要素とは独立して使われます。</p>
      
      <div class="diagram-container">
        <div style="font-size: 3rem;">😲</div>
        <div style="font-size: 2rem; font-weight: bold; margin-left: 1rem;">Wow!</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">感情別・間投詞リスト</h3>

      <div class="concept-box">
        <h4>😲 驚き (Surprise)</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Wow!</strong><br>(わあ！)</div>
          <div class="example-item"><strong>Oh!</strong><br>(おや！まあ！)</div>
          <div class="example-item"><strong>Really?</strong><br>(本当に？)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>👋 挨拶・呼びかけ (Greeting)</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Hi! / Hello!</strong><br>(やあ！こんにちは！)</div>
          <div class="example-item"><strong>Hey!</strong><br>(ねえ！)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>😢 痛み・悲しみ (Pain/Sadness)</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Ouch!</strong><br>(痛っ！)</div>
          <div class="example-item"><strong>Oh no...</strong><br>(なんてことだ...)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>👍 同意・否定 (Agreement)</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Yes / Yeah</strong><br>(はい、うん)</div>
          <div class="example-item"><strong>No</strong><br>(いいえ)</div>
          <div class="example-item"><strong>OK</strong><br>(わかった)</div>
        </div>
      </div>
    </div>
  `,
  examples: ['Oh', 'Wow', 'Hi', 'Ouch', 'Yes'],
  quiz: [
    {
      question: '次のうち、間投詞はどれですか？',
      options: ['run', 'Wow', 'big', 'in'],
      answer: 'Wow',
      explanation: '「Wow！（わあ！）」は驚きの感情を表す間投詞です。run（走る）は動詞、big（大きい）は形容詞、in（～の中に）は前置詞です。'
    },
    {
      question: '痛いときに使う言葉は？',
      options: ['Hello', 'Ouch', 'Yes', 'Good'],
      answer: 'Ouch',
      explanation: '「Ouch！（痛っ！）」は痛みを感じたときに使う間投詞です。Hello（こんにちは）、Yes（はい）、Good（良い）とは意味が異なります。'
    },
    {
      question: '挨拶の言葉はどれですか？',
      options: ['Hi', 'Yes', 'Oh', 'Really'],
      answer: 'Hi',
      explanation: '「Hi！（やあ！）」は挨拶の間投詞です。Yes（はい）、Oh（おや）、Really（本当に）とは役割が異なります。'
    },
    {
      question: '驚いたときに使う言葉は？',
      options: ['Yes', 'No', 'Wow', 'OK'],
      answer: 'Wow',
      explanation: '「Wow！（わあ！）」は驚きや感動を表す間投詞です。Yes（はい）、No（いいえ）、OK（わかった）とは意味が異なります。'
    },
    {
      question: '同意するときに使う言葉は？',
      options: ['No', 'Yeah', 'Ouch', 'Hey'],
      answer: 'Yeah',
      explanation: '「Yeah（うん）」は同意や肯定を表す間投詞で、Yesのカジュアルな形です。No（いいえ）、Ouch（痛っ）、Hey（ねえ）とは意味が異なります。'
    },
    {
      question: '「まあ！」と驚きや落胆を表す言葉は？',
      options: ['Oh', 'Yes', 'Hi', 'OK'],
      answer: 'Oh',
      explanation: '「Oh！（おや！まあ！）」は驚きや落胆など様々な感情を表す万能な間投詞です。Yes（はい）、Hi（やあ）、OK（わかった）とは役割が異なります。'
    },
    {
      question: '呼びかけるときに使う言葉は？',
      options: ['Hey', 'Ouch', 'Yes', 'No'],
      answer: 'Hey',
      explanation: '「Hey！（ねえ！）」は人を呼びかけるときに使う間投詞です。Ouch（痛っ）、Yes（はい）、No（いいえ）とは役割が異なります。'
    },
    {
      question: '「うーん」と考え込むときの言葉は？',
      options: ['Hmm', 'Wow', 'Hi', 'Yes'],
      answer: 'Hmm',
      explanation: '「Hmm（うーん）」は考え込むときや迷っているときに使う間投詞です。Wow（わあ）、Hi（やあ）、Yes（はい）とは意味が異なります。'
    },
    {
      question: '失敗したときに「しまった！」と言う言葉は？',
      options: ['Oops', 'Yes', 'Hi', 'Good'],
      answer: 'Oops',
      explanation: '「Oops！（おっと！しまった！）」は失敗やミスをしたときに使う間投詞です。Yes（はい）、Hi（やあ）、Good（良い）とは意味が異なります。'
    },
    {
      question: '「わかった」と承諾する言葉は？',
      options: ['OK', 'No', 'Ouch', 'Wow'],
      answer: 'OK',
      explanation: '「OK（わかった）」は承諾や了解を表す間投詞です。No（いいえ）、Ouch（痛っ）、Wow（わあ）とは意味が異なります。'
    }
  ]
};
