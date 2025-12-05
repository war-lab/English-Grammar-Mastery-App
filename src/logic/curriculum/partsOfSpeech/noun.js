
export const noun = {
  id: 'pos-noun',
  isEnabled: true,
  title: '名詞 (Noun)',
  description: '人、物、場所、概念などの名前を表す言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>名詞は、<strong>人・物・場所・概念</strong>などの名前を表す言葉です。文の主語や目的語として使われます。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="名詞">🏷️ Noun</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">名詞の3大分類</h3>

      <div class="concept-box">
        <h4>1️⃣ 普通名詞 (Common Noun)</h4>
        <p>一般的な人や物の名前。小文字で始まります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>dog</strong> 🐶<br>(犬)</div>
          <div class="example-item"><strong>book</strong> 📚<br>(本)</div>
          <div class="example-item"><strong>city</strong> 🏙️<br>(都市)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>2️⃣ 固有名詞 (Proper Noun)</h4>
        <p>特定の人や場所の名前。<strong>必ず大文字</strong>で始まります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Tokyo</strong> 🗼<br>(東京)</div>
          <div class="example-item"><strong>Mary</strong> 👩<br>(メアリー)</div>
          <div class="example-item"><strong>Japan</strong> 🇯🇵<br>(日本)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>3️⃣ 抽象名詞 (Abstract Noun)</h4>
        <p>形のない概念や感情を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>love</strong> ❤️<br>(愛)</div>
          <div class="example-item"><strong>happiness</strong> 😊<br>(幸せ)</div>
          <div class="example-item"><strong>peace</strong> ☮️<br>(平和)</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">可算・不可算の区別</h3>
      
      <div class="concept-box">
        <h4>📊 可算名詞 (Countable)</h4>
        <p>数えられる名詞。複数形（-s/-es）があります。</p>
        <p>例: book → <strong>books</strong>, child → <strong>children</strong></p>
      </div>

      <div class="concept-box">
        <h4>💧 不可算名詞 (Uncountable)</h4>
        <p>数えられない名詞。複数形にできません。</p>
        <p>例: water, air, information, music</p>
      </div>
    </div>
  `,
  examples: ['apple', 'Tokyo', 'happiness', 'water', 'student'],
  quiz: [
    {
      question: '次のうち、名詞はどれですか？',
      options: ['run', 'happy', 'apple', 'quickly'],
      answer: 'apple',
      explanation: '「apple（りんご）」は物の名前を表す名詞です。run（走る）は動詞、happy（幸せな）は形容詞、quickly（速く）は副詞です。'
    },
    {
      question: '不可算名詞（数えられない名詞）はどれですか？',
      options: ['book', 'water', 'pen', 'dog'],
      answer: 'water',
      explanation: '「water（水）」は液体で数えられない不可算名詞です。book、pen、dogは形のあるものなので可算名詞です。'
    },
    {
      question: '固有名詞（大文字で始まる名詞）はどれですか？',
      options: ['city', 'tokyo', 'Tokyo', 'country'],
      answer: 'Tokyo',
      explanation: '固有名詞は特定の人や場所の名前で、必ず大文字で始まります。「Tokyo（東京）」が正しい固有名詞の形です。'
    },
    {
      question: '「愛」を表す抽象名詞はどれですか？',
      options: ['love', 'lovely', 'lover', 'loving'],
      answer: 'love',
      explanation: '「love」は形のない概念（愛）を表す抽象名詞です。lovely（愛らしい）は形容詞、lover（恋人）は人を表す名詞、loving（愛情深い）は形容詞です。'
    },
    {
      question: '複数形が正しいものはどれですか？',
      options: ['childs', 'children', 'childes', 'childrens'],
      answer: 'children',
      explanation: '「child（子供）」の複数形は不規則変化で「children」です。-s/-esをつける規則変化ではありません。'
    },
    {
      question: '「情報」という意味の不可算名詞は？',
      options: ['informations', 'inform', 'information', 'informative'],
      answer: 'information',
      explanation: '「information（情報）」は不可算名詞なので複数形にできません。informationsは誤りです。inform（知らせる）は動詞、informative（有益な）は形容詞です。'
    },
    {
      question: '次の文の主語（名詞）はどれですか？ "The cat sleeps."',
      options: ['The', 'cat', 'sleeps', 'none'],
      answer: 'cat',
      explanation: '主語は「誰が/何が」に当たる部分で、この文では「cat（猫）」が主語の名詞です。The（冠詞）、sleeps（動詞）は名詞ではありません。'
    },
    {
      question: '「平和」を意味する名詞は？',
      options: ['peace', 'piece', 'peaceful', 'pace'],
      answer: 'peace',
      explanation: '「peace」は「平和」という概念を表す抽象名詞です。piece（断片）も名詞ですが意味が違います。peaceful（平和な）は形容詞、pace（ペース）は別の意味の名詞です。'
    },
    {
      question: '集合名詞（グループを表す名詞）はどれですか？',
      options: ['student', 'family', 'member', 'person'],
      answer: 'family',
      explanation: '「family（家族）」は複数の人をまとめて1つのグループとして表す集合名詞です。student、member、personは個人を表す名詞です。'
    },
    {
      question: '次のうち、可算名詞はどれですか？',
      options: ['milk', 'rice', 'cup', 'air'],
      answer: 'cup',
      explanation: '「cup（カップ）」は形のある物で数えられる可算名詞です。milk（牛乳）、rice（米）、air（空気）は不可算名詞です。'
    }
  ]
};
