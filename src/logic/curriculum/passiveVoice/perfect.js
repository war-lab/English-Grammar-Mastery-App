
export const passivePerfect = {
  id: 'passive-voice-perfect',
  isEnabled: true,
  title: '完了形の受動態 (Perfect Passive)',
  description: '「（すでに）〜されてしまった」「〜され続けている」などを表します。',
  explanation: `
    <div class="explanation-section">
      <h3 class="section-title">完了形 + 受動態</h3>
      <p>完了形 (have/has + Vpp) と受動態 (be + Vpp) を組み合わせた形です。</p>
      
      <div class="concept-box">
        <h4>📝 have/has + been + 過去分詞</h4>
        <div class="diagram-container">
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 2rem; flex-wrap: wrap; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
             <div class="diagram-box" style="background:var(--primary); color:white; font-weight:bold;">have / has</div>
            <div style="font-size: 1.5rem; color: var(--text-muted);">+</div>
            <div class="diagram-box" style="background:var(--secondary); color:white; font-weight:bold;">been</div>
            <div style="font-size: 1.5rem; color: var(--text-muted);">+</div>
            <div class="diagram-box" style="background:var(--accent); color:white; font-weight:bold;">Vpp</div>
          </div>
          <p style="text-align: center; margin-top: 1rem;">完了の意味（be動詞の過去分詞 <strong style="color: var(--secondary);">been</strong> が必須）</p>
        </div>
        <p style="text-align: center; font-size: 1.2rem;"><strong>have/has been + Vpp</strong></p>
        <p>be動詞の過去分詞 <strong>been</strong> がポイントです。</p>
        <div class="example-grid">
          <div class="example-item"><strong>has been cleaned</strong><br>（掃除されてしまった / 掃除され続けている）</div>
          <div class="example-item"><strong>have been invited</strong><br>（招待されたことがある）</div>
        </div>
      </div>

      <div class="example-box">
        <p class="example-sentence">The car has already been washed.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The car <span class="tag v-tag">has been + Vpp</span> has already been washed</p>
        <p class="example-translation">その車はもう洗われました（完了）。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">This song has been loved for many years.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> This song <span class="tag v-tag">has been + Vpp</span> has been loved <span class="tag m-tag">M</span> for many years</p>
        <p class="example-translation">この歌は長年愛され続けています（継続）。</p>
      </div>
    </div>
  `,
  examples: [
    'My wallet has been stolen!',
    'The tickets have been sold out.',
    'Have you ever been bitten by a dog?',
    'The house has been built recently.',
    'Everything has been prepared.'
  ],
  quiz: [
    {
      question: '現在完了の受動態の形は？',
      options: ['have been Vpp', 'have be Vpp', 'have being Vpp', 'had be Vpp'],
      answer: 'have been Vpp',
      explanation: 'have + be動詞の過去分詞(been) + Vpp の形になります。'
    },
    {
      question: '「私の財布が盗まれた（盗まれてしまった）」',
      options: ['My wallet is stolen.', 'My wallet has stolen.', 'My wallet has been stolen.', 'My wallet stole.'],
      answer: 'My wallet has been stolen.',
      explanation: '完了の意味を持つ受動態なので has been stolen が適切です。has stolenだと「財布が（何かを）盗んだ」という意味になります。'
    },
    {
      question: '「その部屋はまだ掃除されていない」',
      options: ['The room has not cleaned yet.', 'The room has not been cleaned yet.', 'The room does not clean yet.', 'The room not been cleaned yet.'],
      answer: 'The room has not been cleaned yet.',
      explanation: '否定文は has not been cleaned となります。'
    },
    {
      question: '「犬に噛まれたことはありますか？」',
      options: ['Have you ever bitten by a dog?', 'Have you ever been bitten by a dog?', 'Did you ever bitten by a dog?', 'Are you ever been bitten by a dog?'],
      answer: 'Have you ever been bitten by a dog?',
      explanation: '経験を問う完了形の受動態です。Have you ever been + Vpp?'
    }
  ]
};
