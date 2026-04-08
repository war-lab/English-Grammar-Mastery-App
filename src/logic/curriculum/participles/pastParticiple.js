// 過去分詞の形容詞的用法（〜された・〜された状態の）のレッスン定義
export const pastParticiple = {
  id: 'part-past-participle',
  isEnabled: true,
  title: '過去分詞の形容詞的用法 (~ed/不規則)',
  description: '動詞の過去分詞形を形容詞として使い、「〜された」「〜された状態の」という受動的な意味で名詞を修飾する方法を学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>過去分詞</strong>は、動詞の変化形の一つで、<strong>「〜された」「〜された状態の」</strong>という<strong>受動的・完了</strong>のニュアンスを名詞に加えます。現在分詞が「〜している（能動）」なら、過去分詞は「〜された（受動）」です。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.2rem; font-weight: bold;"><span style="color: var(--primary);">過去分詞（~ed / 不規則変化）</span> → 「〜された」として名詞を修飾</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">受動的・完了のイメージ</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">前置修飾（名詞の前に置く）</h3>

      <div class="concept-box">
        <h4>📘 1語の過去分詞は名詞の前</h4>
        <p>過去分詞が単独で名詞を修飾する場合、<strong>名詞の前</strong>に置きます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>a broken window</strong><br>（壊された窓）</div>
          <div class="example-item"><strong>a used car</strong><br>（中古車＝使われた車）</div>
          <div class="example-item"><strong>frozen food</strong><br>（冷凍食品＝凍らされた食品）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">後置修飾（名詞の後に置く）</h3>

      <div class="concept-box">
        <h4>📗 2語以上のかたまりは名詞の後ろ</h4>
        <p>過去分詞が修飾語を伴って2語以上になる場合、<strong>名詞の後ろ</strong>に置きます。関係代名詞 + be動詞の省略と考えられます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>The language spoken in Brazil</strong> is Portuguese.<br>（ブラジルで話されている言語はポルトガル語です）<br>→ which is spoken in Brazil</div>
          <div class="example-item"><strong>The cake made by my mother</strong> was delicious.<br>（母が作ったケーキはおいしかった）</div>
          <div class="example-item"><strong>I read a book written in English.</strong><br>（英語で書かれた本を読んだ）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">現在分詞 vs 過去分詞</h3>

      <div class="concept-box">
        <h4>💡 能動 vs 受動の判断がカギ！</h4>
        <p>修飾される名詞が「する側」なら現在分詞、「される側」なら過去分詞を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>boiling water</strong>（沸騰している水）<br>→ 水が自ら沸騰している（能動）</div>
          <div class="example-item"><strong>boiled water</strong>（沸騰させた水）<br>→ 水が沸騰させられた（受動・完了）</div>
          <div class="example-item"><strong>falling leaves</strong>（落ちている葉）<br>→ 葉が自ら落ちている途中（能動）</div>
          <div class="example-item"><strong>fallen leaves</strong>（落ち葉）<br>→ 落ちてしまった葉（完了）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 過去分詞は「〜された」「〜された状態の」という<strong>受動的</strong>な意味</li>
        <li>✓ <strong>1語なら前置</strong>修飾、<strong>2語以上なら後置</strong>修飾（現在分詞と同じルール）</li>
        <li>✓ 後置修飾は関係代名詞 which is / who was の省略と考えられる</li>
        <li>✓ 名詞が「する側」→ 現在分詞、「される側」→ 過去分詞</li>
        <li>✓ 不規則変化の過去分詞（broken, written, spoken, frozen など）に注意</li>
      </ul>
    </div>
  `,
  examples: [
    'a broken window — 壊された窓',
    'a used car — 中古車（使われた車）',
    'The language spoken in Brazil is Portuguese. — ブラジルで話されている言語はポルトガル語です。',
    'I read a book written in English. — 英語で書かれた本を読んだ。',
    'The cake made by my mother was delicious. — 母が作ったケーキはおいしかった。',
    'fallen leaves — 落ち葉'
  ],
  quiz: [
    {
      question: '「壊された窓」を英語にすると？',
      options: ['a broken window', 'a breaking window', 'a broke window', 'a window broken'],
      answer: 'a broken window',
      explanation: '窓は「壊される側」なので過去分詞 broken を使います。1語なので名詞の前に置きます。'
    },
    {
      question: '「ブラジルで話されている言語」を英語にすると？',
      options: ['the language spoken in Brazil', 'the spoken in Brazil language', 'the language speaking in Brazil', 'the language spoke in Brazil'],
      answer: 'the language spoken in Brazil',
      explanation: '2語以上の過去分詞句（spoken in Brazil）は名詞の後ろに置きます。言語は「話される側」なので過去分詞。'
    },
    {
      question: '空所に入る適切な語は？ "I read a book ____ in English."',
      options: ['written', 'writing', 'wrote', 'write'],
      answer: 'written',
      explanation: '本は「書かれる側」なので過去分詞 written を使います。a book の後ろに置く後置修飾。'
    },
    {
      question: '「中古車」を英語にすると？',
      options: ['a used car', 'a using car', 'a use car', 'a car used'],
      answer: 'a used car',
      explanation: '車は「使われた側」なので過去分詞 used を使います。1語なので名詞の前に置きます。'
    },
    {
      question: '次のうち、過去分詞の形容詞的用法として正しいものは？',
      options: ['frozen food', 'freezing food', 'froze food', 'freeze food'],
      answer: 'frozen food',
      explanation: '食品は「凍らされた側」なので過去分詞 frozen を使います。freezing food なら「凍えるような食品」（能動）。'
    },
    {
      question: '「母が作ったケーキ」を英語にすると？',
      options: ['the cake made by my mother', 'the made by my mother cake', 'the cake making by my mother', 'the cake make by my mother'],
      answer: 'the cake made by my mother',
      explanation: '2語以上の過去分詞句（made by my mother）は名詞の後ろに。ケーキは「作られる側」なので過去分詞。'
    },
    {
      question: '空所に入る適切な語は？ "The window ____ by the boy was very expensive."',
      options: ['broken', 'breaking', 'broke', 'break'],
      answer: 'broken',
      explanation: '窓は「壊される側」なので過去分詞 broken。by the boy があるので2語以上→後置修飾。'
    },
    {
      question: '「沸騰させた水」を英語にすると？現在分詞との違いに注意！',
      options: ['boiled water', 'boiling water', 'boil water', 'water boiled'],
      answer: 'boiled water',
      explanation: 'boiled water は「沸騰させた（済みの）水」（受動・完了）。boiling water は「今沸騰している水」（能動・進行）。'
    },
    {
      question: '次の書き換えで正しいものは？ "The letter which was sent yesterday arrived today."',
      options: ['The letter sent yesterday arrived today.', 'The sent yesterday letter arrived today.', 'The letter sending yesterday arrived today.', 'The letter send yesterday arrived today.'],
      answer: 'The letter sent yesterday arrived today.',
      explanation: 'which was を省略して過去分詞 sent yesterday を名詞の後ろに置きます。手紙は「送られる側」→ 過去分詞。'
    },
    {
      question: '空所に入る適切な語は？ "English is a language ____ all over the world."',
      options: ['spoken', 'speaking', 'spoke', 'speak'],
      answer: 'spoken',
      explanation: '言語は「話される側」なので過去分詞 spoken。all over the world を伴うので後置修飾。'
    }
  ]
};
