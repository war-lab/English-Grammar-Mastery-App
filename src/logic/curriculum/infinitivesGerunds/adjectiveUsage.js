// to不定詞の形容詞的用法（〜するための）のレッスン定義
export const adjectiveUsage = {
  id: 'inf-adjective-usage',
  isEnabled: true,
  title: 'to不定詞：形容詞的用法 (〜するための)',
  description: '名詞を後ろから修飾する形容詞的用法と、抽象名詞＋to不定詞の頻出パターンを学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>形容詞的用法</strong>では、to不定詞が名詞を<strong>後ろから修飾</strong>して「〜するための」「〜すべき」という意味を添えます。日本語とは逆に、英語では名詞の<strong>後ろ</strong>にto不定詞を置くのがポイントです。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.2rem; font-weight: bold;">名詞 + <span style="color: var(--primary);">to + 動詞の原形</span></div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">「〜するための名詞」「〜すべき名詞」</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">基本パターン</h3>

      <div class="concept-box">
        <h4>📝 名詞を後ろから修飾</h4>
        <p>to不定詞が直前の名詞を説明します。「〜するための」「〜すべき」と訳せます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I have a lot of homework to do.</strong><br>（やるべき宿題がたくさんある）<br>→ homework ← to do が修飾</div>
          <div class="example-item"><strong>I need a book to read on the train.</strong><br>（電車で読むための本が必要だ）<br>→ book ← to read が修飾</div>
          <div class="example-item"><strong>He is the first person to arrive.</strong><br>（彼は到着した最初の人だ）<br>→ person ← to arrive が修飾</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">something / anything + 形容詞 + to不定詞</h3>

      <div class="concept-box">
        <h4>🧩 代名詞の修飾語順に注意！</h4>
        <p>something, anything, nothing などの<strong>代名詞</strong>は、形容詞で前から修飾できません。形容詞もto不定詞も<strong>後ろ</strong>に置きます。</p>
        <div class="example-grid">
          <div class="example-item"><span style="color: #22c55e;">⭕ <strong>something cold to drink</strong></span><br>（何か冷たい飲み物）<br>→ something ← cold ← to drink</div>
          <div class="example-item"><span style="color: #ef4444;">❌ cold something to drink</span><br>（代名詞は前から形容詞で修飾できない）</div>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(99, 102, 241, 0.1); border-radius: 0.5rem;">
          <p style="margin: 0;"><strong>語順：</strong>-thing/-one/-body + 形容詞 + to不定詞</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">抽象名詞 + to不定詞</h3>

      <div class="concept-box">
        <h4>🎯 「説明を欲しがる名詞」パターン</h4>
        <p>opportunity（機会）、ability（能力）、way（方法）、plan（計画）などの<strong>抽象名詞</strong>は、具体的な説明を必要とします。to不定詞がその説明を補います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I had no opportunity to talk to her.</strong><br>（彼女と話す<strong>機会</strong>がなかった）</div>
          <div class="example-item"><strong>He has the ability to solve the problem.</strong><br>（彼はその問題を解決する<strong>能力</strong>がある）</div>
          <div class="example-item"><strong>There is no way to fix this.</strong><br>（これを直す<strong>方法</strong>はない）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 TOEICの穴埋めでも頻出！</strong>抽象名詞の後ろにto不定詞が来る構造を見抜くだけで解ける問題が多数あります。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 形容詞的用法は名詞を<strong>後ろから修飾</strong>する</li>
        <li>✓ 「〜するための」「〜すべき」と訳せる</li>
        <li>✓ something/anything + <strong>形容詞 + to不定詞</strong>の語順に注意</li>
        <li>✓ 抽象名詞（opportunity, ability, way, plan）+ to不定詞は頻出</li>
        <li>✓ the first / the last / the only + 名詞 + to不定詞 も形容詞的用法</li>
      </ul>
    </div>
  `,
  examples: [
    'I have a lot of homework to do. — やるべき宿題がたくさんある。',
    'I need a book to read on the train. — 電車で読むための本が必要だ。',
    'He is the first person to arrive. — 彼は到着した最初の人だ。',
    'I want something cold to drink. — 何か冷たい飲み物がほしい。',
    'She had no opportunity to speak. — 彼女には話す機会がなかった。',
    'He has the ability to solve the problem. — 彼には問題を解決する能力がある。'
  ],
  quiz: [
    {
      question: '「やるべき宿題がたくさんある」を英語にすると？',
      options: ['I have a lot of homework to do.', 'I have a lot of to do homework.', 'I have a lot of homework doing.', 'I have to do a lot of homework.'],
      answer: 'I have a lot of homework to do.',
      explanation: '形容詞的用法では名詞（homework）の後ろにto不定詞を置いて修飾します。「すべき宿題」= homework to do。'
    },
    {
      question: '「何か冷たい飲み物」を英語にすると？',
      options: ['something cold to drink', 'cold something to drink', 'something to drink cold', 'to drink something cold'],
      answer: 'something cold to drink',
      explanation: '-thingで終わる代名詞は前から形容詞で修飾できません。something + cold + to drink の語順になります。'
    },
    {
      question: '次の文で to read はどの用法ですか？ "I need a book to read."',
      options: ['形容詞的用法', '名詞的用法', '副詞的用法', '動名詞'],
      answer: '形容詞的用法',
      explanation: 'to read は直前の名詞 book を修飾して「読むための本」という意味を添えています。名詞の後ろから修飾するのが形容詞的用法です。'
    },
    {
      question: '空所に入る適切な語句は？ "He is the first person ____ the summit."',
      options: ['to reach', 'reaching', 'reached', 'to reaching'],
      answer: 'to reach',
      explanation: 'the first / the last / the only + 名詞 の後ろには to不定詞を使います。「頂上に到達した最初の人」。'
    },
    {
      question: '「彼女と話す機会がなかった」を英語にすると？',
      options: ['I had no opportunity to talk to her.', 'I had no opportunity talking to her.', 'I had no to talk opportunity to her.', 'I had no opportunity of talk to her.'],
      answer: 'I had no opportunity to talk to her.',
      explanation: '抽象名詞 opportunity の後ろに to不定詞を置いて「話す機会」と説明します。抽象名詞 + to不定詞の頻出パターンです。'
    },
    {
      question: '次のうち、文法的に正しい文はどれ？',
      options: ['Is there anything interesting to do here?', 'Is there interesting anything to do here?', 'Is there anything to do interesting here?', 'Is there to do anything interesting here?'],
      answer: 'Is there anything interesting to do here?',
      explanation: 'anything + interesting（形容詞）+ to do（to不定詞）の語順です。代名詞は形容詞を後置します。'
    },
    {
      question: '空所に入る適切な語句は？ "He has the ability ____ complex problems."',
      options: ['to solve', 'solving', 'to solving', 'solve'],
      answer: 'to solve',
      explanation: 'ability（能力）は抽象名詞で、to不定詞で具体的な内容を説明します。「解決する能力」= ability to solve。'
    },
    {
      question: '「住む場所を探している」を英語にすると？',
      options: ['I am looking for a place to live.', 'I am looking for a place living.', 'I am looking for to live a place.', 'I am looking for a place to live in.'],
      answer: 'I am looking for a place to live.',
      explanation: '形容詞的用法で place を修飾しています。「住むための場所」= a place to live。口語では前置詞 in は省略されることが多いです。'
    },
    {
      question: '次の文の to buy はどの用法？ "I have no money to buy the book."',
      options: ['形容詞的用法', '副詞的用法', '名詞的用法', '動名詞'],
      answer: '形容詞的用法',
      explanation: 'to buy は直前の名詞 money を修飾して「本を買うためのお金」という意味を添えています。名詞の後ろから修飾する形容詞的用法です。'
    },
    {
      question: '空所に入る適切な語句は？ "She needs time ____ about it."',
      options: ['to think', 'thinking', 'to thinking', 'think'],
      answer: 'to think',
      explanation: '抽象名詞 time の後ろに to不定詞を置いて「考えるための時間」と説明します。time + to不定詞の頻出パターンです。'
    }
  ]
};
