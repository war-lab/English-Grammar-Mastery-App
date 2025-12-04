
export const adverb = {
  id: 'pos-adverb',
  isEnabled: true,
  title: '副詞 (Adverb)',
  description: '動詞、形容詞、他の副詞を修飾する言葉です。',
  explanation: `
    <h3>副詞 (Adverb) とは？</h3>
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

    <h3>例文</h3>
    <p><em>He runs <strong>fast</strong>.</em> (彼は<strong>速く</strong>走る) - 動詞を修飾</p>
    <p><em>She is <strong>very</strong> kind.</em> (彼女は<strong>とても</strong>親切だ) - 形容詞を修飾</p>
    <p><em>I study English <strong>hard</strong>.</em> (私は英語を<strong>一生懸命</strong>勉強する)</p>
  `,
  examples: ['very', 'fast', 'slowly', 'here', 'yesterday'],
  quiz: [
    { question: '次のうち、副詞はどれですか？', options: ['dog', 'run', 'very', 'good'], answer: 'very' },
    { question: '"She speaks slowly." の副詞はどれ？', options: ['She', 'speaks', 'slowly', 'なし'], answer: 'slowly' }
  ]
};
