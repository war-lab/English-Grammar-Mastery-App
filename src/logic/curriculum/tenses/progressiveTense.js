
export const progressiveTense = {
  id: 'tense-progressive',
  isEnabled: true,
  title: '進行形 (Progressive Tense)',
  description: '動作が進行中であることを表す時制です。「〜している」という意味になります。',
  explanation: `
    <div class="explanation-section">
      <p>進行形は、<strong>ある時点で動作が進行中である</strong>ことを表現する時制です。「〜している最中だ」「〜していた」という意味になります。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="進行中！">🏃💨</div>
        <div class="diagram-arrow">be動詞 + -ing</div>
        <div class="diagram-box" data-label="継続中">is running</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">進行形の作り方</h3>

      <div class="concept-box">
        <h4>📐 基本形：be動詞 + 動詞の-ing形</h4>
        <p>進行形は<strong>be動詞 + 動詞の-ing形</strong>で作ります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I am playing</strong><br>（私は〜している）</div>
          <div class="example-item"><strong>She is studying</strong><br>（彼女は〜している）</div>
          <div class="example-item"><strong>They are running</strong><br>（彼らは〜している）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>✏️ -ing形の作り方</h4>
        <p>動詞の語尾によって、-ingのつけ方が変わります。</p>
        
        <p style="margin-top: 1rem;"><strong>1️⃣ 基本：動詞 + -ing</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>play → playing</strong></div>
          <div class="example-item"><strong>read → reading</strong></div>
          <div class="example-item"><strong>go → going</strong></div>
        </div>
        
        <p style="margin-top: 1rem;"><strong>2️⃣ eで終わる動詞：e を取って -ing</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>make → making</strong></div>
          <div class="example-item"><strong>write → writing</strong></div>
          <div class="example-item"><strong>dance → dancing</strong></div>
        </div>
        
        <p style="margin-top: 1rem;"><strong>3️⃣ 短母音+子音：子音を重ねて -ing</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>run → running</strong></div>
          <div class="example-item"><strong>swim → swimming</strong></div>
          <div class="example-item"><strong>sit → sitting</strong></div>
        </div>
        
        <p style="margin-top: 1rem;"><strong>4️⃣ ieで終わる動詞：ie → y + ing</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>lie → lying</strong></div>
          <div class="example-item"><strong>die → dying</strong></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">進行形の種類</h3>

      <div class="concept-box">
        <h4>🕐 現在進行形（Present Progressive）</h4>
        <p><strong>今まさに行っている動作</strong>を表します。</p>
        <p><strong>形式：am/is/are + 動詞の-ing形</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>I am eating now.</strong><br>（私は今食べている）</div>
          <div class="example-item"><strong>She is reading a book.</strong><br>（彼女は本を読んでいる）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>⏰ 過去進行形（Past Progressive）</h4>
        <p><strong>過去のある時点で行っていた動作</strong>を表します。</p>
        <p><strong>形式：was/were + 動詞の-ing形</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>I was studying at 8.</strong><br>（私は8時に勉強していた）</div>
          <div class="example-item"><strong>They were playing soccer.</strong><br>（彼らはサッカーをしていた）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔮 未来進行形（Future Progressive）</h4>
        <p><strong>未来のある時点で行っているであろう動作</strong>を表します。</p>
        <p><strong>形式：will be + 動詞の-ing形</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>I will be sleeping at 11.</strong><br>（私は11時に寝ているだろう）</div>
          <div class="example-item"><strong>She will be working tomorrow.</strong><br>（彼女は明日働いているだろう）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I am watching TV now.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(現在進行)</span> am watching <span class="tag o-tag">O</span> TV <span class="tag m-tag">(M)</span> now</p>
        <p class="example-translation">私は今テレビを見ています。</p>
        <p class="example-note">現在進行形（am + watching）で「今まさに見ている」という進行中の動作を表します。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She was cooking dinner at 6 PM.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V(過去進行)</span> was cooking <span class="tag o-tag">O</span> dinner <span class="tag m-tag">(M)</span> at 6 PM</p>
        <p class="example-translation">彼女は午後6時に夕食を作っていました。</p>
        <p class="example-note">過去進行形（was + cooking）で「6時の時点で作っている最中だった」ことを表します。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">They are running in the park.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> They <span class="tag v-tag">V(現在進行)</span> are running <span class="tag m-tag">(M)</span> in the park</p>
        <p class="example-translation">彼らは公園で走っています。</p>
        <p class="example-note">run は短母音+子音なので、n を重ねて running になります。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">He is making a cake.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V(現在進行)</span> is making <span class="tag o-tag">O</span> a cake</p>
        <p class="example-translation">彼はケーキを作っています。</p>
        <p class="example-note">make は e で終わるので、e を取って making になります。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">進行形にできない動詞</h3>
      <div class="concept-box">
        <p>状態を表す動詞は、通常進行形にしません。</p>
        <div class="example-grid">
          <div class="example-item">❌ <strong>know</strong> (知っている)</div>
          <div class="example-item">❌ <strong>like</strong> (好きだ)</div>
          <div class="example-item">❌ <strong>love</strong> (愛している)</div>
          <div class="example-item">❌ <strong>want</strong> (欲しい)</div>
          <div class="example-item">❌ <strong>have</strong> (持っている)</div>
          <div class="example-item">❌ <strong>understand</strong> (理解している)</div>
        </div>
        <p style="margin-top: 1rem;">これらは「I know it.」のように単純形で使います。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 進行形は<strong>be動詞 + 動詞の-ing形</strong></li>
        <li>✓ 現在進行形：am/is/are -ing（今〜している）</li>
        <li>✓ 過去進行形：was/were -ing（〜していた）</li>
        <li>✓ 未来進行形：will be -ing（〜しているだろう）</li>
        <li>✓ 状態動詞（know, like, wantなど）は進行形にしない</li>
        <li>✓ -ing形の作り方に注意（e を取る、子音を重ねるなど）</li>
      </ul>
    </div>
  `,
  examples: [
    'She is singing a song.',
    'I was sleeping at midnight.',
    'They are playing soccer now.',
    'He was reading a book.',
    'We will be waiting for you.'
  ],
  quiz: [
    {
      question: '進行形を作るときの基本形は？',
      options: ['have + 過去分詞', 'be動詞 + -ing形', 'will + 動詞の原形', 'do + 動詞の原形'],
      answer: 'be動詞 + -ing形',
      explanation: '進行形は「be動詞 + 動詞の-ing形」で作ります。am playing, is running のように使います。'
    },
    {
      question: '動詞 "play" の-ing形は？',
      options: ['plaing', 'playing', 'playying', 'plaied'],
      answer: 'playing',
      explanation: '基本的には動詞の語尾に -ing をつけるだけです。play → playing となります。'
    },
    {
      question: '動詞 "make" の-ing形は？',
      options: ['makeing', 'making', 'makeying', 'maked'],
      answer: 'making',
      explanation: 'e で終わる動詞は、e を取ってから -ing をつけます。make → making となります。'
    },
    {
      question: '動詞 "run" の-ing形は？',
      options: ['runing', 'running', 'runeing', 'runn'],
      answer: 'running',
      explanation: '短母音+子音で終わる動詞は、最後の子音を重ねて -ing をつけます。run → running となります。'
    },
    {
      question: '「私は今テレビを見ています」を英語で表すと？',
      options: ['I watch TV now.', 'I am watching TV now.', 'I watched TV now.', 'I will watch TV now.'],
      answer: 'I am watching TV now.',
      explanation: '「今〜している」は現在進行形で表します。am/is/are + -ing形を使います。'
    },
    {
      question: '過去進行形の文として正しいのはどれですか？',
      options: ['She is studying.', 'She was studying.', 'She will be studying.', 'She studies.'],
      answer: 'She was studying.',
      explanation: '過去進行形は was/were + -ing形で作ります。「〜していた」という意味になります。'
    },
    {
      question: '次のうち、進行形にできない動詞はどれですか？',
      options: ['play', 'run', 'know', 'eat'],
      answer: 'know',
      explanation: 'know（知っている）は状態を表す動詞なので、通常進行形にしません。「I know it.」のように単純形で使います。'
    },
    {
      question: '「彼らは公園でサッカーをしていました」を英語で表すと？',
      options: ['They play soccer in the park.', 'They are playing soccer in the park.', 'They were playing soccer in the park.', 'They played soccer in the park.'],
      answer: 'They were playing soccer in the park.',
      explanation: '「〜していました」は過去進行形で表します。They（複数）なので were playing を使います。'
    },
    {
      question: '未来進行形の構造として正しいのは？',
      options: ['will + 動詞の原形', 'will be + -ing形', 'am/is/are + -ing形', 'was/were + -ing形'],
      answer: 'will be + -ing形',
      explanation: '未来進行形は will be + -ing形で作ります。「（未来のある時点で）〜しているだろう」という意味です。'
    },
    {
      question: '動詞 "write" の-ing形は？',
      options: ['writeing', 'writing', 'writting', 'writen'],
      answer: 'writing',
      explanation: 'e で終わる動詞は、e を取ってから -ing をつけます。write → writing となります。writtingは誤りです。'
    }
  ]
};
