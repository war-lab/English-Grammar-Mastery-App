
export const svc = {
  id: 'sentence-pattern-2-svc',
  isEnabled: true,
  title: '第2文型 (SVC) - Subject + Verb + Complement',
  description: '主語と補語をイコールで結ぶ文型。「S = C」の関係が成り立ちます。',
  explanation: `
    <h3>第2文型（SVC）とは？</h3>
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

    <h3>基本構造</h3>
    <p><strong>主語 (S) + 動詞 (V) + 補語 (C)</strong></p>
    <p><strong>重要：S = C の関係</strong></p>
    
    <h3>第2文型で使われる主な動詞</h3>
    <ul>
      <li><strong>be動詞</strong>：am, is, are, was, were（〜である、〜です）</li>
      <li><strong>状態を表す動詞</strong>：
        <ul>
          <li>look（〜に見える）</li>
          <li>seem / appear（〜のようだ）</li>
          <li>sound（〜に聞こえる）</li>
          <li>smell（〜の匂いがする）</li>
          <li>taste（〜の味がする）</li>
          <li>feel（〜と感じる）</li>
        </ul>
      </li>
      <li><strong>変化を表す動詞</strong>：
        <ul>
          <li>become（〜になる）</li>
          <li>get（〜になる）</li>
          <li>grow（〜になる）</li>
          <li>turn（〜になる）</li>
          <li>go（〜になる）</li>
        </ul>
      </li>
      <li><strong>状態の維持</strong>：
        <ul>
          <li>remain（〜のままである）</li>
          <li>keep（〜のままである）</li>
          <li>stay（〜のままでいる）</li>
        </ul>
      </li>
    </ul>

    <h3>補語（C）になれるもの</h3>
    <ul>
      <li><strong>名詞</strong>：I am a student. （私は学生です）</li>
      <li><strong>形容詞</strong>：She is beautiful. （彼女は美しい）</li>
    </ul>

    <h3>詳細な例文と解説</h3>
    <p><em>He is a doctor.</em></p>
    <ul>
      <li>S = He（彼は）</li>
      <li>V = is（〜である）</li>
      <li>C = a doctor（医者）</li>
      <li>関係：He = a doctor（彼 = 医者）</li>
      <li>意味：彼は医者です。</li>
    </ul>

    <p><em>The cake smells good.</em></p>
    <ul>
      <li>S = The cake（そのケーキは）</li>
      <li>V = smells（〜の匂いがする）</li>
      <li>C = good（良い）</li>
      <li>関係：The cake = good smell（ケーキ = 良い匂い）</li>
      <li>意味：そのケーキは良い匂いがする。</li>
    </ul>

    <p><em>She became a teacher.</em></p>
    <ul>
      <li>S = She（彼女は）</li>
      <li>V = became（〜になった）</li>
      <li>C = a teacher（教師）</li>
      <li>関係：She = a teacher（彼女 = 教師）</li>
      <li>意味：彼女は教師になった。</li>
    </ul>

    <p><em>The story sounds interesting.</em></p>
    <ul>
      <li>S = The story（その話は）</li>
      <li>V = sounds（〜に聞こえる）</li>
      <li>C = interesting（面白い）</li>
      <li>意味：その話は面白そうだ。</li>
    </ul>

    <p><em>The leaves turn red in autumn.</em></p>
    <ul>
      <li>S = The leaves（葉は）</li>
      <li>V = turn（〜になる）</li>
      <li>C = red（赤い）</li>
      <li>意味：秋には葉が赤くなる。</li>
    </ul>

    <h3>覚えておくべきポイント</h3>
    <ul>
      <li>✓ <strong>S = C</strong> の関係が成り立つ</li>
      <li>✓ 補語（C）は主語を説明する</li>
      <li>✓ 目的語（O）は含まれない</li>
      <li>✓ 動詞の後に「どんな状態か」「何であるか」が来る</li>
    </ul>

    <h3>第1文型との違い</h3>
    <p>第1文型：Birds fly.（鳥が飛ぶ）← 動詞だけで完結</p>
    <p>第2文型：Birds are beautiful.（鳥は美しい）← 補語が必要</p>
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
