
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
    { question: '次のうち、間投詞はどれですか？', options: ['run', 'Wow', 'big', 'in'], answer: 'Wow' },
    { question: '痛いときに使う言葉は？', options: ['Hello', 'Ouch', 'Yes', 'Good'], answer: 'Ouch' }
  ]
};
