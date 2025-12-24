
export const passiveBasics = {
  id: 'passive-voice-basics',
  isEnabled: true,
  title: '受動態 (Passive Voice)',
  description: '「〜される」という受け身の意味を表す表現です。',
  explanation: `
    <div class="explanation-section">
      <p>受動態（Passive Voice）は、主語が動作を「する」のではなく、動作を<strong>「される」</strong>側・<strong>「受ける」</strong>側であることを表す文です。</p>
      
      <div class="diagram-container">
        <h3 style="text-align: center; color: var(--text-muted); margin-bottom: 1rem;">能動態と受動態の関係</h3>
        <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center; padding: 1rem;">
          
          <!-- Active -->
          <div style="display: flex; align-items: center; gap: 1rem;">
             <div class="diagram-box" style="background:var(--primary-light); color:var(--background);">Tom</div>
             <div class="diagram-arrow">writes</div>
             <div class="diagram-box" style="background:var(--secondary-light); color:var(--background);">the letter</div>
          </div>

          <div style="font-size: 2rem; color: var(--text-muted);">⬇️</div>

          <!-- Passive -->
          <div style="display: flex; align-items: center; gap: 1rem;">
             <div class="diagram-box" style="background:var(--secondary-light); color:var(--background);">The letter</div>
             <div class="diagram-arrow">is written</div>
             <div style="display: flex; align-items: center; gap: 0.5rem;">
               <span style="font-size: 0.9rem;">by</span>
               <div class="diagram-box" style="background:var(--primary-light); color:var(--background);">Tom</div>
             </div>
          </div>
          
        </div>
      </div>

      <h3 class="section-title">基本構造</h3>
      
      <div class="concept-box">
        <h4>📝 受動態の形</h4>
        <p style="font-size: 1.5rem; text-align: center; margin: 1.5rem 0; color: var(--primary);"><strong>be動詞 + 過去分詞 (Vpp)</strong></p>
        <p>「〜によって」と動作主を示す場合は <strong>by + 動作主</strong> を付け加えます。</p>
        <div style="background: rgba(0,0,0,0.1); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
           <p><strong>例: clean (掃除する)</strong></p>
           <ul style="list-style: none; padding: 0;">
             <li>現在: is cleaned / are cleaned</li>
             <li>過去: was cleaned / were cleaned</li>
           </ul>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔄 能動態から受動態への書き換え</h4>
        <p>能動態の<strong>目的語(O)</strong>が、受動態の<strong>主語(S)</strong>になります。</p>
        
        <div class="example-grid" style="grid-template-columns: 1fr; gap: 1.5rem;">
          <div class="example-item">
            <div style="margin-bottom: 0.5rem; font-weight: bold; color: var(--text-muted);">能動態 (Active):</div>
            <div style="font-size: 1.1rem;">Some people speak English.</div>
            <div style="font-size: 0.8rem; color: #888;">（一部の人々は英語を話します。）</div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
               <span class="tag s-tag">S</span> Some people
               <span class="tag v-tag">V</span> speak
               <span class="tag o-tag">O</span> English
            </div>
          </div>
          
          <div style="text-align: center; font-size: 1.5rem;">⬇️</div>

          <div class="example-item">
            <div style="margin-bottom: 0.5rem; font-weight: bold; color: var(--primary);">受動態 (Passive):</div>
            <div style="font-size: 1.1rem;">English is spoken by some people.</div>
            <div style="font-size: 0.8rem; color: #888;">（英語は一部の人々によって話されます。）</div>
             <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
               <span class="tag s-tag">S</span> English
               <span class="tag v-tag">be+Vpp</span> is spoken
               <span class="tag m-tag">M</span> by some people
            </div>
          </div>
        </div>
      </div>

      <h3 class="section-title">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">This room is cleaned every day.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> This room <span class="tag v-tag">be+Vpp</span> is cleaned <span class="tag m-tag">M</span> every day</p>
        <p class="example-translation">この部屋は毎日掃除されます。</p>
        <p class="example-note">動作主（誰が掃除するか）が重要でない場合、by〜は省略されます。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">The book was written by Natsume Soseki.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The book <span class="tag v-tag">be+Vpp</span> was written <span class="tag m-tag">M</span> by Natsume Soseki</p>
        <p class="example-translation">その本は夏目漱石によって書かれました。</p>
        <p class="example-note">過去のことなので、be動詞は was になっています。</p>
      </div>

      <h3 class="section-title">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 基本は <strong>be動詞 + 過去分詞</strong></li>
        <li>✓ 「〜によって」は <strong>by ...</strong> で表す</li>
        <li>✓ 一般的な人々が動作主の場合などは by ... を省略できる</li>
        <li>✓ 時制は be動詞 を変化させて表す（is / was / will be 等）</li>
      </ul>
    </div>
  `,
  examples: [
    'English is spoken in many countries.',
    'This cake was made by my mother.',
    'The letter was written yesterday.',
    'These photos were taken in Kyoto.',
    'Dinner is served at 7 p.m.'
  ],
  quiz: [
    {
      question: '受動態の正しい形はどれですか？',
      options: ['be + Ving', 'be + Vpp (過去分詞)', 'have + Vpp', 'do + V'],
      answer: 'be + Vpp (過去分詞)',
      explanation: '受動態の基本形は「be動詞 + 過去分詞」です。be + Vingは進行形、have + Vppは完了形です。'
    },
    {
      question: '「この車は日本で作られました」を英語にすると？',
      options: ['This car made in Japan.', 'This car was made in Japan.', 'This car is made in Japan.', 'This car makes in Japan.'],
      answer: 'This car was made in Japan.',
      explanation: '「作られました」と過去のことなので、be動詞は過去形の was を使います。made は過去分詞です。is made だと現在の事実になります。'
    },
    {
      question: '次の能動態の文を受動態に変えなさい： "She writes the email."',
      options: ['The email writes by her.', 'The email is written by her.', 'The email was written by her.', 'The email is wrote by her.'],
      answer: 'The email is written by her.',
      explanation: 'writes は現在形なので be動詞は is を使い、writeの過去分詞 written を合わせます。動作主は by her となります。'
    },
    {
      question: '「その窓はトムによって割られた」の空欄に入るのは？ The window ___ ___ by Tom.',
      options: ['was broken', 'is broken', 'did break', 'were broken'],
      answer: 'was broken',
      explanation: '窓（The window）は単数で、過去の出来事なので was を使い、break の過去分詞 broken を続けます。'
    },
    {
      question: '受動態の文で、動作主（〜によって）を表す前置詞は？',
      options: ['of', 'to', 'by', 'with'],
      answer: 'by',
      explanation: '受動態の動作主は通常 by を使って表します（例：by Tom）。'
    }
  ]
};
