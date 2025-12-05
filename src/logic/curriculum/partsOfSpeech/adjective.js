
export const adjective = {
  id: 'pos-adjective',
  isEnabled: true,
  title: '形容詞 (Adjective)',
  description: '名詞を修飾（説明）する言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>形容詞は、<strong>名詞の状態や性質を詳しく説明（修飾）</strong>する言葉です。「どんな〜」を表します。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Adjective" style="background-color: var(--secondary);">Adj</div>
        <div class="diagram-arrow">修飾</div>
        <div class="diagram-box" data-label="Noun">Noun</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">形容詞の2つのポジション</h3>

      <div class="concept-box">
        <h4>1. 名詞の前に置く (限定用法)</h4>
        <p>名詞にくっついて、直接説明します。</p>
        <div class="example-grid">
          <div class="example-item">a <strong>red</strong> apple 🍎<br>(赤いりんご)</div>
          <div class="example-item">a <strong>tall</strong> tree 🌲<br>(高い木)</div>
          <div class="example-item">a <strong>happy</strong> dog 🐕<br>(幸せな犬)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>2. be動詞の後ろに置く (叙述用法)</h4>
        <p>主語がどんな状態かを説明します（補語になる）。</p>
        <div class="example-grid">
          <div class="example-item">The apple is <strong>red</strong>.<br>(そのりんごは赤い)</div>
          <div class="example-item">The tree is <strong>tall</strong>.<br>(その木は高い)</div>
          <div class="example-item">The dog looks <strong>happy</strong>.<br>(その犬は幸せそうだ)</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">比較の表現</h3>
      
      <div class="concept-box">
        <div style="display: flex; justify-content: space-around; align-items: flex-end; text-align: center; gap: 1rem;">
          <div>
            <div style="font-size: 2rem;">🐻</div>
            <div style="font-weight: bold;">Big</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">原級</div>
          </div>
          <div>
            <div style="font-size: 3rem;">🐻</div>
            <div style="font-weight: bold; color: var(--primary);">Bigger</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">比較級 (-er)</div>
          </div>
          <div>
            <div style="font-size: 4rem;">🐻</div>
            <div style="font-weight: bold; color: var(--secondary);">Biggest</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">最上級 (-est)</div>
          </div>
        </div>
        <p style="margin-top: 1rem; text-align: center;">「より〜」「一番〜」と言いたいときは形が変わります。</p>
      </div>
    </div>
  `,
  examples: ['big', 'red', 'happy', 'beautiful', 'tall'],
  quiz: [
    { question: '次のうち、形容詞はどれですか？', options: ['run', 'book', 'happy', 'very'], answer: 'happy' },
    { question: '「美しい花」を英語にすると？', options: ['flower beautiful', 'beautiful flower', 'beauty flower', 'flower beauty'], answer: 'beautiful flower' },
    { question: '「大きい」の比較級（より大きい）は？', options: ['more big', 'biger', 'bigger', 'biggest'], answer: 'bigger' },
    { question: '「興味深い本」は "an ( ? ) book"', options: ['interest', 'interested', 'interesting', 'interestingly'], answer: 'interesting' },
    { question: '「彼は背が高い」を英語にすると？', options: ['He is high.', 'He is tall.', 'He is big.', 'He is height.'], answer: 'He is tall.' },
    { question: '最上級（一番〜）を作る時につける語尾は？', options: ['-er', '-est', '-ing', '-ed'], answer: '-est' },
    { question: '「忙しい」を意味する形容詞は？', options: ['busy', 'business', 'busily', 'bus'], answer: 'busy' },
    { question: '「私の父は有名です」 "My father is ( ? )."', options: ['fame', 'famous', 'famously', 'famed'], answer: 'famous' },
    { question: '色の名前（red, blueなど）は何詞？', options: ['名詞', '動詞', '形容詞', '副詞'], answer: '形容詞' },
    { question: '「わくわくしている」人の気持ちを表すのは？', options: ['exciting', 'excited', 'excite', 'excitement'], answer: 'excited' }
  ]
};
