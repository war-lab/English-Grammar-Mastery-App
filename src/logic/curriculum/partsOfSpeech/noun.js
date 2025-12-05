
export const noun = {
  id: 'pos-noun',
  isEnabled: true,
  title: '名詞 (Noun)',
  description: '人、物、場所、概念などの名前を表す言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>名詞は、<strong>人、物、場所、考え（概念）</strong>などの名前を表す言葉です。</p>
      <p>文の中で<strong>主語 (S)</strong>、<strong>目的語 (O)</strong>、<strong>補語 (C)</strong> になることができます。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Person">👨‍🎓</div>
        <div class="diagram-box" data-label="Thing">🍎</div>
        <div class="diagram-box" data-label="Place">🏫</div>
        <div class="diagram-box" data-label="Idea">💡</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">名詞の重要な分類</h3>

      <div class="concept-box">
        <h4>🍎 可算名詞 (Countable Nouns)</h4>
        <p>数えられる名詞。1つ、2つと数えることができ、単数形と複数形があります。</p>
        <div class="example-grid">
          <div class="example-item">one apple 🍎</div>
          <div class="example-item">two apples 🍎🍎</div>
          <div class="example-item">many dogs 🐕🐕🐕</div>
        </div>
        <div class="grammar-point">
          <strong>Point:</strong> 単数のときは "a" や "an" をつけます。<br>
          例: a cat, an apple
        </div>
      </div>

      <div class="concept-box">
        <h4>💧 不可算名詞 (Uncountable Nouns)</h4>
        <p>数えられない名詞。形が決まっていないものや、概念などは数えられません。</p>
        <div class="example-grid">
          <div class="example-item">water 💧 (× a water)</div>
          <div class="example-item">music 🎵 (× two musics)</div>
          <div class="example-item">money 💰 (× many moneys)</div>
        </div>
        <div class="grammar-point">
          <strong>Point:</strong> 常に単数扱いで、"a/an" はつきません。<br>
          量を表すときは "a cup of water" のように単位を使います。
        </div>
      </div>

      <div class="concept-box">
        <h4>🏛️ 固有名詞 (Proper Nouns)</h4>
        <p>特定の人、場所、組織などの名前。世界に一つしかないもの。</p>
        <div class="example-grid">
          <div class="example-item">Tokyo 🗼</div>
          <div class="example-item">Mount Fuji 🗻</div>
          <div class="example-item">Sunday 📅</div>
        </div>
        <div class="grammar-point">
          <strong>Point:</strong> 文のどこにあっても、最初の文字は大文字にします。
        </div>
      </div>
    </div>
  `,
  examples: ['apple', 'Tokyo', 'happiness', 'water', 'student'],
  quiz: [
    { question: '次のうち、名詞はどれですか？', options: ['run', 'happy', 'apple', 'quickly'], answer: 'apple' },
    { question: '不可算名詞（数えられない名詞）はどれですか？', options: ['book', 'water', 'pen', 'dog'], answer: 'water' },
    { question: '固有名詞（大文字で始まる名詞）はどれですか？', options: ['city', 'tokyo', 'Tokyo', 'country'], answer: 'Tokyo' },
    { question: '「愛」を表す抽象名詞はどれですか？', options: ['love', 'lovely', 'lover', 'loving'], answer: 'love' },
    { question: '複数形が正しいものはどれですか？', options: ['childs', 'children', 'childes', 'childrens'], answer: 'children' },
    { question: '「情報」という意味の不可算名詞は？', options: ['informations', 'inform', 'information', 'informative'], answer: 'information' },
    { question: '次の文の主語（名詞）はどれですか？ "The cat sleeps."', options: ['The', 'cat', 'sleeps', 'none'], answer: 'cat' },
    { question: '「平和」を意味する名詞は？', options: ['peace', 'piece', 'peaceful', 'pace'], answer: 'peace' },
    { question: '集合名詞（グループを表す名詞）はどれですか？', options: ['student', 'family', 'member', 'person'], answer: 'family' },
    { question: '次のうち、可算名詞はどれですか？', options: ['milk', 'rice', 'cup', 'air'], answer: 'cup' }
  ]
};
