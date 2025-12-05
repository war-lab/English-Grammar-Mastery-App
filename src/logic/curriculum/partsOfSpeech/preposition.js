
export const preposition = {
  id: 'pos-preposition',
  isEnabled: true,
  title: '前置詞 (Preposition)',
  description: '名詞の前に置いて、場所や時などの関係を表す言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>前置詞は、名詞（または代名詞）の前に置いて、他の言葉との関係（場所、時、方向など）を表します。</p>
      
      <div class="diagram-container">
        <div style="position: relative; width: 120px; height: 120px; border: 2px solid rgba(255,255,255,0.2); border-radius: 1rem; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05);">
          <div style="font-size: 3rem;">📦</div>
          <div style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); color: var(--secondary); font-weight: bold;">under</div>
          <div style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); color: var(--secondary); font-weight: bold;">on</div>
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--primary); font-weight: bold; text-shadow: 0 0 5px black;">in</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">前置詞の3つのイメージ</h3>

      <div class="concept-box">
        <h4>1. 場所 (Place)</h4>
        <p>「どこに」あるかを表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>in</strong> the box 📦<br>(箱の中に)</div>
          <div class="example-item"><strong>on</strong> the desk 🪑<br>(机の上に)</div>
          <div class="example-item"><strong>at</strong> the station 🚉<br>(駅という地点に)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>2. 時 (Time)</h4>
        <p>「いつ」を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>at</strong> 8:00 🕗<br>(8時に - 点)</div>
          <div class="example-item"><strong>on</strong> Sunday 📅<br>(日曜日に - 日)</div>
          <div class="example-item"><strong>in</strong> 2023 🗓️<br>(2023年に - 期間)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>3. 方向 (Direction)</h4>
        <p>「どこへ」向かうかを表します。</p>
        <div class="example-grid">
          <div class="example-item">go <strong>to</strong> school 🏫<br>(学校へ - 到達点)</div>
          <div class="example-item">leave <strong>for</strong> Tokyo 🗼<br>(東京へ向けて - 方向)</div>
        </div>
      </div>
    </div>
  `,
  examples: ['in', 'on', 'at', 'to', 'for', 'with'],
  quiz: [
    { question: '次のうち、前置詞はどれですか？', options: ['apple', 'run', 'in', 'big'], answer: 'in' },
    { question: '「机の下に」を英語で言うと？', options: ['on the desk', 'under the desk', 'in the desk', 'at the desk'], answer: 'under the desk' },
    { question: '「8時に」 " ( ? ) 8:00"', options: ['on', 'in', 'at', 'to'], answer: 'at' },
    { question: '「東京に住んでいます」 "I live ( ? ) Tokyo."', options: ['at', 'on', 'in', 'to'], answer: 'in' },
    { question: '「学校へ行く」 "go ( ? ) school"', options: ['at', 'for', 'to', 'on'], answer: 'to' },
    { question: '「日曜日」の前につく前置詞は？', options: ['in', 'at', 'on', 'with'], answer: 'on' },
    { question: '「友達と一緒に」 " ( ? ) my friend"', options: ['by', 'with', 'for', 'to'], answer: 'with' },
    { question: '「箱の中に」 " ( ? ) the box"', options: ['on', 'at', 'in', 'under'], answer: 'in' },
    { question: '「あなたへのプレゼント」 "a present ( ? ) you"', options: ['to', 'for', 'of', 'by'], answer: 'for' },
    { question: '「壁にかかっている」 " ( ? ) the wall"', options: ['in', 'at', 'on', 'to'], answer: 'on' }
  ]
};
