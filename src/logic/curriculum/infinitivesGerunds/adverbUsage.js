// to不定詞の副詞的用法（〜するために）のレッスン定義
export const adverbUsage = {
  id: 'inf-adverb-usage',
  isEnabled: true,
  title: 'to不定詞：副詞的用法 (〜するために)',
  description: '目的・感情の原因・結果を表す副詞的用法と、前置詞toの「方向」イメージを学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>副詞的用法</strong>では、to不定詞が動詞や形容詞を修飾して「目的」「感情の原因」「結果」などの意味を添えます。一見たくさんの意味があって覚えにくいですが、前置詞 to の<strong>「方向（→）」のイメージ</strong>を持つだけでスッキリ理解できます。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.2rem; font-weight: bold;">to = <span style="color: var(--primary);">→（方向）</span>のイメージ</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">ある地点から、その動作に「向かっていく」感覚</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">① 目的「〜するために」</h3>

      <div class="concept-box">
        <h4>🎯 最も基本的な副詞的用法</h4>
        <p>「何のためにその行動をしたのか」を説明します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I went to the park to play soccer.</strong><br>（サッカーを<strong>するために</strong>公園に行った）<br>→ 公園に行った → サッカーする方向に</div>
          <div class="example-item"><strong>She studied hard to pass the exam.</strong><br>（試験に受かる<strong>ために</strong>一生懸命勉強した）</div>
          <div class="example-item"><strong>He saved money to buy a car.</strong><br>（車を買う<strong>ために</strong>お金を貯めた）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>in order to do / so as to do と書き換え可能（よりフォーマル）。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">② 感情の原因「〜して」</h3>

      <div class="concept-box">
        <h4>😊 感情を表す形容詞の後で理由を示す</h4>
        <p>happy, glad, sad, surprised, sorry などの感情を表す形容詞の後ろで、その感情の<strong>原因</strong>を説明します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I am happy to see you.</strong><br>（あなたに会え<strong>て</strong>うれしい）</div>
          <div class="example-item"><strong>She was surprised to hear the news.</strong><br>（その知らせを聞い<strong>て</strong>驚いた）</div>
          <div class="example-item"><strong>I'm sorry to hear that.</strong><br>（それを聞い<strong>て</strong>残念です）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">③ 結果「その結果〜した」</h3>

      <div class="concept-box">
        <h4>📈 行動の結果を表す</h4>
        <p>主に grow up to be ~（成長して〜になった）、live to be ~（〜歳まで生きた）などの定型表現で使われます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>He grew up to be a doctor.</strong><br>（彼は成長して医者に<strong>なった</strong>）<br>→ 成長して → 医者になる方向に</div>
          <div class="example-item"><strong>She lived to be 100 years old.</strong><br>（彼女は100歳まで<strong>生きた</strong>）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">読解での見分け方</h3>

      <div class="concept-box">
        <h4>🧠 ネイティブの読み方</h4>
        <p>ネイティブは文を<strong>左から右へ</strong>読み進めます。to不定詞の用法は<strong>位置</strong>で見分けられます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>文頭のto不定詞</strong><br>→ 副詞的用法（目的）の可能性が高い<br><em>To meet the deadline, he worked overtime.</em></div>
          <div class="example-item"><strong>感情の形容詞の後</strong><br>→ 副詞的用法（原因）<br><em>I am glad to meet you.</em></div>
          <div class="example-item"><strong>動詞の直後</strong><br>→ 名詞的用法（目的語）<br><em>He decided to go.</em></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 副詞的用法は<strong>目的・感情の原因・結果</strong>の3つを覚える</li>
        <li>✓ to のコアイメージは<strong>「方向（→）」</strong>で統一的に理解できる</li>
        <li>✓ 「〜するために」= in order to do / so as to do で書き換え可能</li>
        <li>✓ 感情の形容詞（happy, sad, surprised）の後ろは<strong>原因</strong></li>
        <li>✓ grow up to be ~, live to be ~ は<strong>結果</strong>の定型表現</li>
      </ul>
    </div>
  `,
  examples: [
    'I went to the park to play soccer. — サッカーをするために公園に行った。',
    'She studied hard to pass the exam. — 試験に受かるために一生懸命勉強した。',
    'I am happy to see you. — あなたに会えてうれしい。',
    'He grew up to be a doctor. — 彼は成長して医者になった。',
    'She was surprised to hear the news. — そのニュースを聞いて驚いた。',
    'To meet the deadline, he worked overtime. — 締め切りに間に合わせるために残業した。'
  ],
  quiz: [
    {
      question: '「サッカーをするために公園に行った」を英語にすると？',
      options: ['I went to the park to play soccer.', 'I went to the park for play soccer.', 'I went to the park playing soccer.', 'I went to the park to playing soccer.'],
      answer: 'I went to the park to play soccer.',
      explanation: '目的を表す副詞的用法です。「〜するために」= to + 動詞の原形。for の後に動詞の原形は置けません。'
    },
    {
      question: '次の文で to see you はどんな意味？ "I am glad to see you."',
      options: ['あなたに会えて（感情の原因）', 'あなたに会うために（目的）', 'あなたに会うこと（名詞的用法）', 'あなたに会うための（形容詞的用法）'],
      answer: 'あなたに会えて（感情の原因）',
      explanation: '感情を表す形容詞 glad の後ろの to不定詞は、その感情の原因を表します。「会えてうれしい」。'
    },
    {
      question: '「彼は成長して医者になった」を英語にすると？',
      options: ['He grew up to be a doctor.', 'He grew up to being a doctor.', 'He grew up for be a doctor.', 'He grew up being a doctor.'],
      answer: 'He grew up to be a doctor.',
      explanation: 'grow up to be ~ は結果を表す副詞的用法の定型表現です。to の後は動詞の原形（be）です。'
    },
    {
      question: '空所に入る適切な語句は？ "She studied hard ____ pass the exam."',
      options: ['to', 'for', 'for to', 'to be'],
      answer: 'to',
      explanation: '目的「〜するために」を表す副詞的用法です。to + 動詞の原形の形です。for to は誤りです。'
    },
    {
      question: '「そのニュースを聞いて驚いた」を英語にすると？',
      options: ['I was surprised to hear the news.', 'I was surprised hearing the news.', 'I was surprised for hear the news.', 'I surprised to hear the news.'],
      answer: 'I was surprised to hear the news.',
      explanation: '感情の形容詞 surprised の後ろに to不定詞を置いて原因を表します。受動態（was surprised）にも注意。'
    },
    {
      question: '"in order to" と書き換えられる表現は？',
      options: ['to（目的の副詞的用法）', 'to（名詞的用法）', 'to（形容詞的用法）', 'to（結果の副詞的用法）'],
      answer: 'to（目的の副詞的用法）',
      explanation: '「〜するために」という目的の副詞的用法は in order to do / so as to do と書き換え可能です。'
    },
    {
      question: '次の文頭の To meet はどの用法？ "To meet the deadline, the manager worked overtime."',
      options: ['副詞的用法（目的）', '名詞的用法（主語）', '形容詞的用法', '副詞的用法（結果）'],
      answer: '副詞的用法（目的）',
      explanation: '文頭のto不定詞の後にカンマがあり、主節の動詞（worked）を修飾しているので、「締め切りに間に合わせるために」という目的の副詞的用法です。'
    },
    {
      question: '空所に入る適切な語句は？ "I\'m sorry ____ that you are sick."',
      options: ['to hear', 'hearing', 'to hearing', 'for hear'],
      answer: 'to hear',
      explanation: '感情の形容詞 sorry の後ろに to不定詞を置いて原因を表します。「聞いて残念です」。'
    },
    {
      question: '次のうち、「結果」を表す副詞的用法の文はどれ？',
      options: ['She lived to be 90 years old.', 'She went to the store to buy milk.', 'She is happy to see her friends.', 'She wants to be a singer.'],
      answer: 'She lived to be 90 years old.',
      explanation: 'live to be ~ は「〜歳まで生きた」という結果の副詞的用法です。目的や感情の原因ではなく、行動の結果を表します。'
    },
    {
      question: '「お金を貯めるために一生懸命働いた」を英語にすると？',
      options: ['He worked hard to save money.', 'He worked hard saving money.', 'He worked hard for save money.', 'He worked hard to saving money.'],
      answer: 'He worked hard to save money.',
      explanation: '目的「〜するために」を表す副詞的用法です。to + 動詞の原形（save）の形になります。'
    }
  ]
};
