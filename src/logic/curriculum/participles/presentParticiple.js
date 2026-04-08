// 現在分詞の形容詞的用法（〜ing で名詞を修飾）のレッスン定義
export const presentParticiple = {
  id: 'part-present-participle',
  isEnabled: true,
  title: '現在分詞の形容詞的用法 (~ing)',
  description: '動詞の-ing形を形容詞として使い、名詞を修飾する方法を学びます。前置修飾と後置修飾の違いも押さえましょう。',
  explanation: `
    <div class="explanation-section">
      <p><strong>分詞</strong>とは、動詞を変形させて形容詞や副詞の働きをさせる文法テクニックです。英語には<strong>「1文1動詞の原則」</strong>がありますが、分詞を使えば動詞の意味を残したまま名詞を修飾できます。</p>
      <p>まずは<strong>現在分詞（〜ing形）</strong>の形容詞的用法から始めましょう。現在分詞は「〜している」「〜させる」という<strong>能動的・進行中</strong>のニュアンスを名詞に加えます。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.2rem; font-weight: bold;"><span style="color: var(--primary);">動詞 + ing</span> → 「〜している」「〜させる」として名詞を修飾</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">能動的・進行中のイメージ</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">前置修飾（名詞の前に置く）</h3>

      <div class="concept-box">
        <h4>📘 1語の現在分詞は名詞の前</h4>
        <p>現在分詞が単独で名詞を修飾する場合、<strong>名詞の前</strong>に置きます。普通の形容詞と同じ位置です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>a sleeping baby</strong><br>（眠っている赤ちゃん）</div>
          <div class="example-item"><strong>the running water</strong><br>（流れている水）</div>
          <div class="example-item"><strong>a boring movie</strong><br>（退屈な映画）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">後置修飾（名詞の後に置く）</h3>

      <div class="concept-box">
        <h4>📗 2語以上のかたまりは名詞の後ろ</h4>
        <p>現在分詞が目的語や修飾語を伴って2語以上になる場合、<strong>名詞の後ろ</strong>に置きます。これは関係代名詞の省略と考えることもできます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>The boy running in the park</strong> is my brother.<br>（公園で走っている少年は私の兄です）<br>→ The boy <strong>who is running</strong> in the park</div>
          <div class="example-item"><strong>The woman talking on the phone</strong> is Ms. Tanaka.<br>（電話で話している女性は田中さんです）</div>
          <div class="example-item"><strong>I saw a cat sleeping on the bench.</strong><br>（ベンチで眠っている猫を見た）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">補語としての用法（SVC / SVOC）</h3>

      <div class="concept-box">
        <h4>📙 現在分詞が補語になる</h4>
        <p>現在分詞は文の補語（C）としても使えます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>The movie was exciting.</strong><br>（その映画はワクワクさせるものだった）<br>→ SVC: 主語の状態を説明</div>
          <div class="example-item"><strong>I kept him waiting.</strong><br>（彼を待たせ続けた）<br>→ SVOC: 目的語の状態を説明</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">to不定詞との違い</h3>

      <div class="concept-box">
        <h4>💡 to = これから（未来） vs ~ing = 今まさに（現在）</h4>
        <p>to不定詞も名詞を修飾できますが、ニュアンスが異なります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>something to drink</strong><br>（これから飲むための何か）<br>→ to のイメージ = 矢印 →「未来志向」</div>
          <div class="example-item"><strong>a sleeping baby</strong><br>（今まさに眠っている赤ちゃん）<br>→ -ing のイメージ =「今まさに進行中」</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">~ing の見分け方：動名詞 vs 現在分詞 vs 進行形</h3>

      <div class="concept-box">
        <h4>⚠️ 同じ ~ing でも文中の位置で役割が違う！</h4>
        <div class="example-grid">
          <div class="example-item"><strong>動名詞</strong>（名詞の仕事）<br>Swimming is fun.<br>→ 主語の位置にいる＝名詞</div>
          <div class="example-item"><strong>現在分詞</strong>（形容詞の仕事）<br>a swimming dog<br>→ 名詞を修飾する位置＝形容詞</div>
          <div class="example-item"><strong>進行形</strong>（動詞の一部）<br>She is running.<br>→ be + ~ing で動詞として機能</div>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(99, 102, 241, 0.1); border-radius: 0.5rem;">
          <p style="margin: 0;"><strong>判断基準：</strong>名詞の場所（主語・目的語・補語）→ 動名詞、名詞を修飾 → 現在分詞、be動詞とセット → 進行形</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 現在分詞は「〜している」「〜させる」という<strong>能動的</strong>な意味</li>
        <li>✓ <strong>1語なら前置</strong>修飾、<strong>2語以上なら後置</strong>修飾</li>
        <li>✓ 後置修飾は関係代名詞 who is / which is の省略と考えられる</li>
        <li>✓ 補語（C）として SVC・SVOC の構文でも使える</li>
        <li>✓ to不定詞は「未来」、現在分詞は「現在進行」のニュアンス</li>
        <li>✓ ~ing は文中の位置で動名詞・現在分詞・進行形を見分ける</li>
      </ul>
    </div>
  `,
  examples: [
    'a sleeping baby — 眠っている赤ちゃん',
    'The boy running in the park is my brother. — 公園で走っている少年は私の兄です。',
    'I saw a cat sleeping on the bench. — ベンチで眠っている猫を見た。',
    'The movie was exciting. — その映画はワクワクさせるものだった。',
    'I kept him waiting. — 彼を待たせ続けた。',
    'Do you know the girl playing the piano? — ピアノを弾いている女の子を知っていますか？'
  ],
  quiz: [
    {
      question: '「眠っている赤ちゃん」を英語にすると？',
      options: ['a sleeping baby', 'a slept baby', 'a sleep baby', 'a baby sleeping'],
      answer: 'a sleeping baby',
      explanation: '1語の現在分詞は名詞の前に置きます。sleep → sleeping で「眠っている」という能動的な意味になります。'
    },
    {
      question: '「公園で走っている少年」を英語にすると？',
      options: ['the boy running in the park', 'the running in the park boy', 'the boy run in the park', 'the ran boy in the park'],
      answer: 'the boy running in the park',
      explanation: '2語以上の分詞のかたまり（running in the park）は名詞の後ろに置きます。'
    },
    {
      question: '空所に入る適切な語は？ "I saw a bird ____ in the sky."',
      options: ['flying', 'fly', 'flew', 'flown'],
      answer: 'flying',
      explanation: '知覚動詞 see + 目的語 + 現在分詞で「〜しているのを見る」という意味になります。'
    },
    {
      question: '次の文の現在分詞はどれですか？ "The woman talking on the phone is my mother."',
      options: ['talking', 'woman', 'phone', 'mother'],
      answer: 'talking',
      explanation: 'talking は talk の現在分詞形で、the woman を後ろから修飾しています。「電話で話している女性」'
    },
    {
      question: '空所に入る適切な語は？ "Look at the ____ leaves."',
      options: ['falling', 'fallen', 'fall', 'fell'],
      answer: 'falling',
      explanation: '「落ちている途中の葉」は能動・進行中のイメージなので、現在分詞 falling を使います。fallen は「すでに落ちた」。'
    },
    {
      question: '「彼を待たせ続けた」を英語にすると？',
      options: ['I kept him waiting.', 'I kept him waited.', 'I kept him to wait.', 'I kept him wait.'],
      answer: 'I kept him waiting.',
      explanation: 'keep + 目的語 + 現在分詞で「〜し続けさせる」の意味。SVOCの構文で現在分詞が補語になっています。'
    },
    {
      question: '次のうち、後置修飾の文として正しいものはどれ？',
      options: ['The man standing at the door is my father.', 'The standing at the door man is my father.', 'The man stand at the door is my father.', 'The man stood at the door is my father.'],
      answer: 'The man standing at the door is my father.',
      explanation: '2語以上の分詞句（standing at the door）は名詞の後ろに置きます。'
    },
    {
      question: '空所に入る適切な語は？ "Do you know the girl ____ the piano?"',
      options: ['playing', 'played', 'play', 'plays'],
      answer: 'playing',
      explanation: 'the girl を後ろから修飾する現在分詞 playing が適切。「ピアノを弾いている女の子」'
    },
    {
      question: '「沸騰しているお湯」を英語にすると？',
      options: ['boiling water', 'boiled water', 'boil water', 'water boiling'],
      answer: 'boiling water',
      explanation: '1語の現在分詞は名詞の前に。boiling water は「沸騰している（最中の）水」。boiled water は「沸騰させた（済みの）水」。'
    },
    {
      question: '次の書き換えで正しいものは？ "The boy who is reading a book is Tom."',
      options: ['The boy reading a book is Tom.', 'The reading a book boy is Tom.', 'The boy read a book is Tom.', 'The boy is reading a book is Tom.'],
      answer: 'The boy reading a book is Tom.',
      explanation: '関係代名詞 who is を省略して、現在分詞 reading a book を名詞の後ろに置きます。'
    }
  ]
};
