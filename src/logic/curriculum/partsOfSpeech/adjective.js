
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
    {
      question: '次のうち、形容詞はどれですか？',
      options: ['run', 'book', 'happy', 'very'],
      answer: 'happy',
      explanation: '「happy（幸せな）」は状態を表す形容詞です。run（走る）は動詞、book（本）は名詞、very（とても）は副詞です。'
    },
    {
      question: '「美しい花」を英語にすると？',
      options: ['flower beautiful', 'beautiful flower', 'beauty flower', 'flower beauty'],
      answer: 'beautiful flower',
      explanation: '英語では形容詞は名詞の前に置きます。「beautiful（美しい）+ flower（花）」の順です。日本語とは語順が逆です。'
    },
    {
      question: '「大きい」の比較級（より大きい）は？',
      options: ['more big', 'biger', 'bigger', 'biggest'],
      answer: 'bigger',
      explanation: '短い形容詞の比較級は「-er」をつけて作ります。「big（大きい）」は最後の子音字を重ねて「bigger」になります。biggest（最上級）、biger（スペルミス）は誤りです。'
    },
    {
      question: '「興味深い本」は "an ( ? ) book"',
      options: ['interest', 'interested', 'interesting', 'interestingly'],
      answer: 'interesting',
      explanation: '「interesting（興味深い）」は物を修飾する形容詞です。interest（興味）は名詞、interested（興味を持っている）は人の気持ちを表す形容詞、interestingly（興味深いことに）は副詞です。'
    },
    {
      question: '「彼は背が高い」を英語にすると？',
      options: ['He is high.', 'He is tall.', 'He is big.', 'He is height.'],
      answer: 'He is tall.',
      explanation: '人の背の高さは「tall」を使います。high（高い）は建物などに使い、big（大きい）は体格、height（高さ）は名詞です。'
    },
    {
      question: '最上級（一番〜）を作る時につける語尾は？',
      options: ['-er', '-est', '-ing', '-ed'],
      answer: '-est',
      explanation: '最上級は「-est」をつけて作ります（例：tallest, biggest）。-er（比較級）、-ing（現在分詞）、-ed（過去形/過去分詞）は最上級ではありません。'
    },
    {
      question: '「忙しい」を意味する形容詞は？',
      options: ['busy', 'business', 'busily', 'bus'],
      answer: 'busy',
      explanation: '「busy」は「忙しい」という状態を表す形容詞です。business（仕事）は名詞、busily（忙しく）は副詞、bus（バス）は名詞です。'
    },
    {
      question: '「私の父は有名です」 "My father is ( ? )."',
      options: ['fame', 'famous', 'famously', 'famed'],
      answer: 'famous',
      explanation: '「famous（有名な）」は状態を表す形容詞です。fame（名声）は名詞、famously（有名に）は副詞、famed（名高い）も形容詞ですがfamousの方が一般的です。'
    },
    {
      question: '色の名前（red, blueなど）は何詞？',
      options: ['名詞', '動詞', '形容詞', '副詞'],
      answer: '形容詞',
      explanation: '色の名前（red, blue, greenなど）は名詞を修飾するため形容詞です。「a red car（赤い車）」のように使います。'
    },
    {
      question: '「わくわくしている」人の気持ちを表すのは？',
      options: ['exciting', 'excited', 'excite', 'excitement'],
      answer: 'excited',
      explanation: '人の気持ちは「-ed形」で表します。「excited（わくわくしている）」が正解です。exciting（わくわくさせる）は物を表し、excite（わくわくさせる）は動詞、excitement（興奮）は名詞です。'
    }
  ]
};
