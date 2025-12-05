
export const adverb = {
  id: 'pos-adverb',
  isEnabled: true,
  title: '副詞 (Adverb)',
  description: '動詞、形容詞、他の副詞を修飾する言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>副詞は、<strong>名詞以外</strong>（動詞、形容詞、他の副詞、文全体）を詳しく説明（修飾）する言葉です。</p>
      <p>「いつ」「どこで」「どのように」「どのくらい」といった情報を加えます。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Adverb" style="background-color: #f59e0b;">Adv</div>
        <div class="diagram-arrow">修飾</div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div class="diagram-box" data-label="Verb" style="width: 50px; height: 50px; font-size: 0.8rem;">Verb</div>
          <div class="diagram-box" data-label="Adj" style="width: 50px; height: 50px; font-size: 0.8rem; background-color: var(--secondary);">Adj</div>
          <div class="diagram-box" data-label="Adv" style="width: 50px; height: 50px; font-size: 0.8rem; background-color: #f59e0b;">Adv</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">副詞の4つの役割</h3>

      <div class="concept-box">
        <h4>1. 動詞を修飾する (How?)</h4>
        <p>「どのように」動作するかを説明します。</p>
        <div class="example-grid">
          <div class="example-item">He runs <strong>fast</strong>. 🏃💨<br>(彼は速く走る)</div>
          <div class="example-item">She speaks <strong>slowly</strong>. 🐢<br>(彼女はゆっくり話す)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>2. 形容詞を修飾する (How much?)</h4>
        <p>「どのくらい」の状態かを説明します。</p>
        <div class="example-grid">
          <div class="example-item">It is <strong>very</strong> hot. ☀️🔥<br>(とても暑い)</div>
          <div class="example-item">She is <strong>really</strong> kind. 😊<br>(彼女は本当に親切だ)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>3. 他の副詞を修飾する</h4>
        <p>副詞の程度をさらに強めます。</p>
        <div class="example-grid">
          <div class="example-item">He runs <strong>very</strong> fast. 🏃💨💨<br>(彼はとても速く走る)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>4. 時や場所を表す (When? Where?)</h4>
        <p>文全体に情報を追加します。</p>
        <div class="example-grid">
          <div class="example-item">I met him <strong>yesterday</strong>. 📅<br>(昨日彼に会った)</div>
          <div class="example-item">Come <strong>here</strong>. 👇<br>(ここに来て)</div>
        </div>
      </div>
    </div>
  `,
  examples: ['very', 'fast', 'slowly', 'here', 'yesterday'],
  quiz: [
    { question: '次のうち、副詞はどれですか？', options: ['dog', 'run', 'very', 'good'], answer: 'very' },
    { question: '"She speaks slowly." の副詞はどれ？', options: ['She', 'speaks', 'slowly', 'なし'], answer: 'slowly' }
  ]
};
