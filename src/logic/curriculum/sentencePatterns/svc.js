
export const svc = {
  id: 'sentence-pattern-2-svc',
  isEnabled: true,
  title: '第2文型 (SVC) - Subject + Verb + Complement',
  description: '主語と補語をイコールで結ぶ文型。「S = C」の関係が成り立ちます。',
  explanation: `
    <div class="explanation-section">
      <h3 class="section-title">第2文型（SVC）とは？</h3>
      <p>第2文型は<strong>主語（S）+ 動詞（V）+ 補語（C）</strong>の構造です。</p>
      <p>最大の特徴は、<strong>S = C</strong>の関係が成り立つことです。補語（C）は主語を説明したり、主語の状態を示します。</p>
      <p>この文型では<strong>目的語（O）は含まれません</strong>。動詞は主に「be動詞」や「〜になる」「〜に見える」などの意味を持つ動詞（不完全自動詞）が使われます。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Subject">S</div>
        <div class="diagram-arrow">V</div>
        <div class="diagram-box" data-label="Verb">V</div>
        <div class="diagram-operator">=</div>
        <div class="diagram-box" data-label="Complement">C</div>
        <div class="diagram-example">She is happy. (She = happy)</div>
      </div>

      <div class="concept-box">
        <h4>基本構造</h4>
        <p><strong>主語 (S) + 動詞 (V) + 補語 (C)</strong></p>
        <p><strong>重要：S = C の関係</strong></p>
      </div>
      
      <h3 class="section-title">第2文型で使われる主な動詞</h3>
      <ul class="check-list">
        <li><strong>be動詞</strong>：am, is, are, was, were（〜である、〜です）</li>
        <li><strong>状態を表す動詞</strong>：look, seem, sound, smell, taste, feel</li>
        <li><strong>変化を表す動詞</strong>：become, get, grow, turn, go</li>
        <li><strong>状態の維持</strong>：remain, keep, stay</li>
      </ul>

      <h3 class="section-title">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">He is a doctor.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V</span> is <span class="tag c-tag">C</span> a doctor</p>
        <p class="example-translation">彼は医者です。</p>
        <p class="example-note">He = a doctor（彼 = 医者）の関係が成り立ちます。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">The cake smells good.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The cake <span class="tag v-tag">V</span> smells <span class="tag c-tag">C</span> good</p>
        <p class="example-translation">そのケーキは良い匂いがする。</p>
        <p class="example-note">The cake = good smell（ケーキ = 良い匂い）</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She became a teacher.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> became <span class="tag c-tag">C</span> a teacher</p>
        <p class="example-translation">彼女は教師になった。</p>
        <p class="example-note">She = a teacher（彼女 = 教師）</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">The leaves turn red in autumn.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The leaves <span class="tag v-tag">V</span> turn <span class="tag c-tag">C</span> red <span class="tag m-tag">(M)</span> in autumn</p>
        <p class="example-translation">秋には葉が赤くなる。</p>
      </div>

      <h3 class="section-title">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>S = C</strong> の関係が成り立つ</li>
        <li>✓ 補語（C）は主語を説明する</li>
        <li>✓ 目的語（O）は含まれない</li>
        <li>✓ 動詞の後に「どんな状態か」「何であるか」が来る</li>
      </ul>
    </div>
  `,
  examples: [
    'I am happy.',
    'She looks tired.',
    'The soup tastes delicious.',
    'He became famous.',
    'The weather remains cold.',
    'You seem worried.',
    'The milk went bad.'
  ],
  quiz: [
    {
      question: '次の文で S = C の関係が成り立つのはどれですか？',
      options: ['I play tennis.', 'She is kind.', 'He reads books.', 'They go home.'],
      answer: 'She is kind.'
    },
    {
      question: '第2文型の文を完成させてください：The flower ___ beautiful.',
      options: ['has', 'makes', 'is', 'does'],
      answer: 'is'
    },
    {
      question: '「彼は疲れているように見える」を英語で表すと？',
      options: ['He sees tired.', 'He looks tired.', 'He watches tired.', 'He is look tired.'],
      answer: 'He looks tired.'
    },
    {
      question: '次のうち、第2文型で使われる動詞はどれですか？',
      options: ['eat', 'become', 'have', 'play'],
      answer: 'become'
    },
    {
      question: '「この料理は美味しい味がする」を英語で表すと？',
      options: ['This dish has delicious.', 'This dish tastes delicious.', 'This dish makes delicious.', 'This dish eats delicious.'],
      answer: 'This dish tastes delicious.'
    }
  ]
};
