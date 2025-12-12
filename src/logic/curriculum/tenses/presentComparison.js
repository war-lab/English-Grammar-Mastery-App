
export const presentComparison = {
  id: 'tense-present-comparison',
  isEnabled: true,
  title: '現在形 vs 現在進行形 (Simple Present vs Present Progressive)',
  description: 'ふだんのことと今していることの違いを理解しましょう。',
  explanation: `
    <div class="explanation-section">
      <p>現在形と現在進行形は、<strong>どちらも「現在」に関することを表しますが、意味が大きく異なります</strong>。この違いを理解することは英語学習の重要なポイントです。</p>
      
      <div class="diagram-container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center; padding: 1.5rem; background: rgba(255, 100, 100, 0.1); border-radius: 1rem;">
            <div style="font-size: 2rem;">📅</div>
            <div style="font-weight: bold; color: var(--primary); font-size: 1.2rem;">現在形</div>
            <div style="margin-top: 0.5rem;">ふだんのこと</div>
            <div style="margin-top: 0.5rem; font-size: 0.9rem;">I <strong>play</strong> tennis.</div>
            <div style="margin-top: 0.3rem; font-size: 0.8rem; color: var(--text-muted);">（習慣として）テニスをします</div>
          </div>
          <div style="text-align: center; padding: 1.5rem; background: rgba(100, 100, 255, 0.1); border-radius: 1rem;">
            <div style="font-size: 2rem;">🏃💨</div>
            <div style="font-weight: bold; color: var(--secondary); font-size: 1.2rem;">現在進行形</div>
            <div style="margin-top: 0.5rem;">今していること</div>
            <div style="margin-top: 0.5rem; font-size: 0.9rem;">I <strong>am playing</strong> tennis.</div>
            <div style="margin-top: 0.3rem; font-size: 0.8rem; color: var(--text-muted);">（今まさに）テニスをしています</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">基本的な違い</h3>

      <div class="concept-box">
        <h4>📅 現在形（Simple Present）</h4>
        <p><strong>形式</strong>: 動詞の原形（三人称単数は -s/-es）</p>
        <p><strong>意味</strong>:</p>
        <ul class="check-list">
          <li>✓ ふだんの習慣「いつも〜する」</li>
          <li>✓ 繰り返す動作「毎日〜する」</li>
          <li>✓ 一般的な事実「〜である」</li>
          <li>✓ 状態「〜が好きだ」「〜を知っている」</li>
        </ul>
        <div class="example-grid" style="margin-top: 1rem;">
          <div class="example-item"><strong>I play tennis every Sunday.</strong><br>（毎週日曜にテニスをする）</div>
          <div class="example-item"><strong>She speaks English.</strong><br>（彼女は英語を話す）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🏃 現在進行形（Present Progressive）</h4>
        <p><strong>形式</strong>: am/is/are + 動詞の-ing形</p>
        <p><strong>意味</strong>:</p>
        <ul class="check-list">
          <li>✓ 今まさにしていること「今〜している」</li>
          <li>✓ 一時的な状況「最近〜している」</li>
          <li>✓ 進行中の動作</li>
        </ul>
        <div class="example-grid" style="margin-top: 1rem;">
          <div class="example-item"><strong>I am playing tennis now.</strong><br>（今テニスをしている）</div>
          <div class="example-item"><strong>She is speaking English.</strong><br>（彼女は（今）英語を話している）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">対比例文で理解しよう</h3>

      <div class="example-box">
        <p class="example-sentence">📅 I study English every day. (現在形)</p>
        <p class="example-translation">私は毎日英語を勉強します。</p>
        <p class="example-note">→ ふだんの習慣を表す。毎日繰り返している。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">🏃 I am studying English now. (現在進行形)</p>
        <p class="example-translation">私は今英語を勉強しています。</p>
        <p class="example-note">→ 今この瞬間にしていること。今だけの動作。</p>
      </div>

      <div style="border-top: 2px solid rgba(255,255,255,0.1); margin: 2rem 0;"></div>

      <div class="example-box">
        <p class="example-sentence">📅 He plays soccer. (現在形)</p>
        <p class="example-translation">彼はサッカーをします。</p>
        <p class="example-note">→ ふだんサッカーをする習慣がある。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">🏃 He is playing soccer. (現在進行形)</p>
        <p class="example-translation">彼はサッカーをしています。</p>
        <p class="example-note">→ 今まさにサッカーをしている最中。</p>
      </div>

      <div style="border-top: 2px solid rgba(255,255,255,0.1); margin: 2rem 0;"></div>

      <div class="example-box">
        <p class="example-sentence">📅 We live in Tokyo. (現在形)</p>
        <p class="example-translation">私たちは東京に住んでいます。</p>
        <p class="example-note">→ ふだんの状態。いつも東京に住んでいる。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">🏃 We are living in a hotel. (現在進行形)</p>
        <p class="example-translation">私たちはホテルに滞在しています。</p>
        <p class="example-note">→ 一時的な状況。今だけホテルにいる。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">進行形にできない動詞</h3>

      <div class="concept-box">
        <p>状態を表す動詞は、<strong>通常進行形にしません</strong>。これらは現在形で使います。</p>
        <div class="example-grid">
          <div class="example-item">❌ <strong>know</strong> (知っている)<br>⭕ I know him. / ❌ I am knowing him.</div>
          <div class="example-item">❌ <strong>like</strong> (好きだ)<br>⭕ I like music. / ❌ I am liking music.</div>
          <div class="example-item">❌ <strong>love</strong> (愛している)<br>⭕ I love you. / ❌ I am loving you.</div>
          <div class="example-item">❌ <strong>want</strong> (欲しい)<br>⭕ I want a car. / ❌ I am wanting a car.</div>
          <div class="example-item">❌ <strong>have</strong> (持っている)<br>⭕ I have a dog. / ❌ I am having a dog.</div>
          <div class="example-item">❌ <strong>understand</strong> (理解している)<br>⭕ I understand. / ❌ I am understanding.</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">時間表現で見分ける</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
        <div class="concept-box">
          <h4 style="color: var(--primary);">📅 現在形でよく使う</h4>
          <ul class="check-list">
            <li>✓ every day/week (毎日/毎週)</li>
            <li>✓ always (いつも)</li>
            <li>✓ usually (たいてい)</li>
            <li>✓ often (よく)</li>
            <li>✓ sometimes (ときどき)</li>
          </ul>
        </div>
        <div class="concept-box">
          <h4 style="color: var(--secondary);">🏃 現在進行形でよく使う</h4>
          <ul class="check-list">
            <li>✓ now (今)</li>
            <li>✓ right now (たった今)</li>
            <li>✓ at this moment (この瞬間)</li>
            <li>✓ at present (現在)</li>
            <li>✓ Look! / Listen! (見て！/聞いて！)</li>
          </ul>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>現在形</strong>：ふだんのこと、習慣、事実</li>
        <li>✓ <strong>現在進行形</strong>：今していること、一時的な状況</li>
        <li>✓ 時間表現（every day vs now）で見分ける</li>
        <li>✓ 状態動詞（know, like, wantなど）は進行形にしない</li>
        <li>✓ 迷ったら「今この瞬間か？」を考える</li>
      </ul>
    </div>
  `,
  examples: [
    'I play tennis. / I am playing tennis now.',
    'She studies English. / She is studying English.',
    'We live in Tokyo. / We are living in a hotel.',
    'He speaks Japanese. / He is speaking Japanese.',
    'They work here. / They are working on a project.'
  ],
  quiz: [
    {
      question: '「私は毎日英語を勉強します」を英語で表すと？',
      options: ['I study English every day.', 'I am studying English every day.', 'I studied English every day.', 'I will study English every day.'],
      answer: 'I study English every day.',
      explanation: '「毎日」という習慣を表すので現在形を使います。every day があるときは現在形です。'
    },
    {
      question: '「彼は今テレビを見ています」を英語で表すと？',
      options: ['He watches TV now.', 'He is watching TV now.', 'He watched TV now.', 'He watch TV now.'],
      answer: 'He is watching TV now.',
      explanation: '「今」していることなので現在進行形（is watching）を使います。now があるときは進行形です。'
    },
    {
      question: '次のうち、状態を表す動詞で進行形にできないのはどれですか？',
      options: ['play', 'study', 'know', 'watch'],
      answer: 'know',
      explanation: 'know（知っている）は状態を表す動詞なので、通常進行形にしません。「I know」は正しいですが「I am knowing」は誤りです。'
    },
    {
      question: '「彼女は英語を話します」（ふだん話せる）を英語で表すと？',
      options: ['She speaks English.', 'She is speaking English.', 'She spoke English.', 'She will speak English.'],
      answer: 'She speaks English.',
      explanation: '「ふだん話せる」という能力・習慣を表すので現在形を使います。She（三人称単数）なので speaks になります。'
    },
    {
      question: '現在形でよく使う時間表現はどれですか？',
      options: ['now', 'every day', 'yesterday', 'tomorrow'],
      answer: 'every day',
      explanation: 'every day（毎日）は習慣を表すので現在形でよく使います。now（今）は現在進行形、yesterday（昨日）は過去形で使います。'
    },
    {
      question: '「私は今音楽が好きです」を英語で表すと？',
      options: ['I like music.', 'I am liking music.', 'I liked music.', 'I will like music.'],
      answer: 'I like music.',
      explanation: 'like（好きだ）は状態を表す動詞なので、「今」であっても現在形を使います。進行形にはしません。'
    },
    {
      question: '現在進行形が表すのはどれですか？',
      options: ['ふだんの習慣', '今まさにしていること', '一般的な事実', '過去のこと'],
      answer: '今まさにしていること',
      explanation: '現在進行形は「今まさにしていること」や「一時的な状況」を表します。ふだんの習慣は現在形で表します。'
    },
    {
      question: '「彼は毎週サッカーをします」を英語で表すと？',
      options: ['He plays soccer every week.', 'He is playing soccer every week.', 'He played soccer every week.', 'He play soccer every week.'],
      answer: 'He plays soccer every week.',
      explanation: '「毎週」という習慣なので現在形を使います。He（三人称単数）なので plays になります。'
    },
    {
      question: '次のうち、正しい文はどれですか？',
      options: ['I am knowing the answer.', 'I know the answer.', 'I knowing the answer.', 'I knows the answer.'],
      answer: 'I know the answer.',
      explanation: 'know（知っている）は状態動詞なので進行形にせず、現在形で使います。「I know」が正しい形です。'
    },
    {
      question: '「彼女は今日、一日中勉強しています」を英語で表すと？',
      options: ['She studies all day today.', 'She is studying all day today.', 'She studied all day today.', 'She study all day today.'],
      answer: 'She is studying all day today.',
      explanation: '「今日」という今の一時的な状況を表すので現在進行形を使います。習慣ではなく、今日だけの特別な状況です。'
    }
  ]
};
