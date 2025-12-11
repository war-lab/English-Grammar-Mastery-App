
export const presentSimple = {
  id: 'tense-present-simple',
  isEnabled: true,
  title: '現在形 (Simple Present)',
  description: 'ふだんの習慣や一般的な事実を表す時制です。',
  explanation: `
    <div class="explanation-section">
      <p>現在形は、<strong>ふだんの習慣、繰り返す動作、一般的な事実</strong>を表現する時制です。「〜する」「〜である」という意味になります。</p>
      
      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center;">
            <div style="font-size: 2rem;">📅</div>
            <div style="font-weight: bold; color: var(--primary);">現在形 (Present)</div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem;">ふだんのこと・事実</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 1.5rem;">🔄</div>
            <div style="font-weight: bold;">習慣・繰り返し</div>
            <div style="font-size: 0.8rem;">I play tennis every day.</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">現在形の使い方</h3>

      <div class="concept-box">
        <h4>🏃 1. ふだんの習慣・繰り返す動作</h4>
        <p>毎日のこと、よくすることを表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I play tennis every day.</strong><br>（私は毎日テニスをします）</div>
          <div class="example-item"><strong>She studies English.</strong><br>（彼女は英語を勉強します）</div>
          <div class="example-item"><strong>We go to school.</strong><br>（私たちは学校に行きます）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🌍 2. 一般的な事実・真理</h4>
        <p>いつでも正しいこと、変わらない事実を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>The sun rises in the east.</strong><br>（太陽は東から昇る）</div>
          <div class="example-item"><strong>Water boils at 100°C.</strong><br>（水は100度で沸騰する）</div>
          <div class="example-item"><strong>Cats like fish.</strong><br>（猫は魚が好きだ）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>💭 3. 状態・感情</h4>
        <p>今の状態や気持ちを表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I like music.</strong><br>（私は音楽が好きです）</div>
          <div class="example-item"><strong>He knows her.</strong><br>（彼は彼女を知っています）</div>
          <div class="example-item"><strong>They live in Tokyo.</strong><br>（彼らは東京に住んでいます）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">三人称単数の -s</h3>

      <div class="concept-box">
        <h4>📝 主語が He/She/It のとき</h4>
        <p>主語が<strong>三人称単数（He/She/It）</strong>のとき、動詞に <strong>-s</strong> または <strong>-es</strong> をつけます。</p>
        
        <p style="margin-top: 1rem;"><strong>1️⃣ 基本：動詞 + -s</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>play → plays</strong></div>
          <div class="example-item"><strong>eat → eats</strong></div>
          <div class="example-item"><strong>run → runs</strong></div>
        </div>
        
        <p style="margin-top: 1rem;"><strong>2️⃣ s/sh/ch/x/oで終わる動詞：-es</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>pass → passes</strong></div>
          <div class="example-item"><strong>wash → washes</strong></div>
          <div class="example-item"><strong>teach → teaches</strong></div>
          <div class="example-item"><strong>go → goes</strong></div>
        </div>
        
        <p style="margin-top: 1rem;"><strong>3️⃣ 子音+yで終わる動詞：y → ies</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>study → studies</strong></div>
          <div class="example-item"><strong>fly → flies</strong></div>
          <div class="example-item"><strong>cry → cries</strong></div>
        </div>
        
        <p style="margin-top: 1rem;"><strong>4️⃣ 不規則変化</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>have → has</strong></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I play tennis every Sunday.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(現在)</span> play <span class="tag o-tag">O</span> tennis <span class="tag m-tag">(M)</span> every Sunday</p>
        <p class="example-translation">私は毎週日曜日にテニスをします。</p>
        <p class="example-note">習慣を表す現在形。every Sunday（毎週日曜日）は繰り返しを示す表現です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She goes to school by bus.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V(現在)</span> goes <span class="tag m-tag">(M)</span> to school by bus</p>
        <p class="example-translation">彼女はバスで学校に行きます。</p>
        <p class="example-note">主語が She（三人称単数）なので、go に -es をつけて goes になります。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">He studies English every day.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V(現在)</span> studies <span class="tag o-tag">O</span> English <span class="tag m-tag">(M)</span> every day</p>
        <p class="example-translation">彼は毎日英語を勉強します。</p>
        <p class="example-note">study は子音+y で終わるので、y を i に変えて -es をつけ studies になります。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">The earth goes around the sun.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The earth <span class="tag v-tag">V(現在)</span> goes <span class="tag m-tag">(M)</span> around the sun</p>
        <p class="example-translation">地球は太陽の周りを回ります。</p>
        <p class="example-note">一般的な事実・真理を表す現在形。いつでも正しいことを述べています。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">現在形でよく使う表現</h3>
      <div class="concept-box">
        <div class="example-grid">
          <div class="example-item">🕐 <strong>every day/week/month/year</strong> (毎日/毎週/毎月/毎年)</div>
          <div class="example-item">🕐 <strong>always</strong> (いつも)</div>
          <div class="example-item">🕐 <strong>usually</strong> (たいてい)</div>
          <div class="example-item">🕐 <strong>often</strong> (よく)</div>
          <div class="example-item">🕐 <strong>sometimes</strong> (ときどき)</div>
          <div class="example-item">🕐 <strong>never</strong> (決して〜ない)</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 現在形は<strong>ふだんの習慣</strong>や<strong>一般的な事実</strong>を表す</li>
        <li>✓ 主語が三人称単数（He/She/It）なら動詞に <strong>-s/-es</strong> をつける</li>
        <li>✓ 「今まさにしていること」は現在進行形を使う（次のレッスンで学習）</li>
        <li>✓ every day, always, usually などと一緒によく使う</li>
        <li>✓ 状態を表す動詞（like, know, liveなど）は現在形で使う</li>
      </ul>
    </div>
  `,
  examples: [
    'I watch TV every night.',
    'She plays the piano.',
    'We live in Japan.',
    'He studies math.',
    'The sun rises in the east.'
  ],
  quiz: [
    {
      question: '現在形が表すのはどれですか？',
      options: ['今まさにしていること', 'ふだんの習慣や一般的な事実', '過去のこと', '未来のこと'],
      answer: 'ふだんの習慣や一般的な事実',
      explanation: '現在形は「ふだんの習慣」「繰り返す動作」「一般的な事実」を表します。「今まさにしていること」は現在進行形で表します。'
    },
    {
      question: '主語が \"She\" のとき、動詞 \"play\" はどうなりますか？',
      options: ['play', 'plays', 'played', 'playing'],
      answer: 'plays',
      explanation: '主語が三人称単数（He/She/It）のとき、動詞に -s をつけます。play → plays になります。'
    },
    {
      question: '動詞 \"study\" の三人称単数形は？',
      options: ['studys', 'studies', 'studyes', 'studied'],
      answer: 'studies',
      explanation: 'study は子音+y で終わるので、y を i に変えて -es をつけ studies になります。'
    },
    {
      question: '「私は毎日英語を勉強します」を英語で表すと？',
      options: ['I study English every day.', 'I am studying English every day.', 'I studied English every day.', 'I studies English every day.'],
      answer: 'I study English every day.',
      explanation: 'ふだんの習慣を表すので現在形を使います。主語が I なので動詞は原形の study です。'
    },
    {
      question: '主語が \"He\" のとき、動詞 \"go\" はどうなりますか？',
      options: ['go', 'gos', 'goes', 'going'],
      answer: 'goes',
      explanation: 'go は o で終わるので、-es をつけて goes になります。三人称単数の形です。'
    },
    {
      question: '次のうち、現在形として正しい文はどれですか？',
      options: ['She play tennis.', 'She plays tennis.', 'She playing tennis.', 'She played tennis.'],
      answer: 'She plays tennis.',
      explanation: '主語が She（三人称単数）なので、play に -s をつけて plays にします。'
    },
    {
      question: '動詞 \"have\" の三人称単数形は？',
      options: ['haves', 'has', 'havees', 'having'],
      answer: 'has',
      explanation: 'have は不規則変化で、三人称単数形は has になります。'
    },
    {
      question: '「太陽は東から昇ります」を英語で表すと？',
      options: ['The sun is rising in the east.', 'The sun rose in the east.', 'The sun rises in the east.', 'The sun will rise in the east.'],
      answer: 'The sun rises in the east.',
      explanation: '一般的な事実・真理を表すときは現在形を使います。The sun（三人称単数）なので rises になります。'
    },
    {
      question: '次のうち、現在形でよく使う時間表現はどれですか？',
      options: ['yesterday', 'every day', 'tomorrow', 'last week'],
      answer: 'every day',
      explanation: 'every day（毎日）は習慣を表す現在形でよく使います。yesterday（昨日）やlast week（先週）は過去形、tomorrow（明日）は未来形で使います。'
    },
    {
      question: '「彼女はいつも学校に遅刻します」を英語で表すと？',
      options: ['She always is late for school.', 'She is always late for school.', 'She always late for school.', 'She was always late for school.'],
      answer: 'She is always late for school.',
      explanation: '習慣を表す現在形です。be動詞の文では、頻度を表す副詞（always）は be動詞の後に置きます。'
    }
  ]
};
