// 最上級 (-est / most ~ in/of) のレッスン定義
export const superlative = {
  id: 'comp-superlative',
  isEnabled: true,
  title: '最上級 (-est / most ~ in/of)',
  description: '「〜の中で一番○○だ」という最上級の作り方と、in/ofの使い分け、不規則変化を学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>最上級</strong>は、3つ以上のものの中で「一番〜だ」と言いたいときに使います。形容詞・副詞の前には必ず <strong>the</strong> をつけます。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.1rem; font-weight: bold;">短い語: A + be動詞 + <span style="color: var(--primary);">the</span> + 形容詞<span style="color: var(--primary);">-est</span> + <span style="color: var(--secondary);">in / of</span> ~</div>
            <div style="font-size: 1.1rem; font-weight: bold; margin-top: 0.5rem;">長い語: A + be動詞 + <span style="color: var(--primary);">the most</span> + 形容詞 + <span style="color: var(--secondary);">in / of</span> ~</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">Aは〜の中で一番○○だ</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">the -est（短い形容詞）</h3>

      <div class="concept-box">
        <h4>🏆 1〜2音節の短い形容詞</h4>
        <p>短い形容詞は語尾に <strong>-est</strong> をつけ、前に <strong>the</strong> をつけて最上級にします。</p>
        <div class="example-grid">
          <div class="example-item"><strong>tall → the tallest</strong><br>Tom is <strong>the tallest</strong> in the class.<br>（トムはクラスで一番背が高い）</div>
          <div class="example-item"><strong>young → the youngest</strong><br>She is <strong>the youngest</strong> of the three.<br>（彼女は3人の中で一番若い）</div>
          <div class="example-item"><strong>fast → the fastest</strong><br>He runs <strong>the fastest</strong> in our team.<br>（彼はチームで一番速く走る）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>最上級には必ず <strong>the</strong> がつきます。the tallest, the fastest のように。</p>
      </div>

      <div class="concept-box">
        <h4>✏️ スペル変化のルール（比較級と同じ）</h4>
        <div class="example-grid">
          <div class="example-item"><strong>語尾が e</strong> → st だけつける<br>large → large<strong>st</strong></div>
          <div class="example-item"><strong>短母音 + 子音字</strong> → 子音字を重ねる<br>big → bi<strong>ggest</strong><br>hot → ho<strong>ttest</strong></div>
          <div class="example-item"><strong>語尾が y</strong> → y を i に変える<br>happy → happ<strong>iest</strong><br>easy → eas<strong>iest</strong></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">the most ~（長い形容詞）</h3>

      <div class="concept-box">
        <h4>📖 3音節以上の長い形容詞</h4>
        <p>長い形容詞は前に <strong>the most</strong> をつけて最上級にします。</p>
        <div class="example-grid">
          <div class="example-item"><strong>beautiful → the most beautiful</strong><br>She is <strong>the most beautiful</strong> girl in our school.<br>（彼女は学校で一番美しい女の子だ）</div>
          <div class="example-item"><strong>popular → the most popular</strong><br>This is <strong>the most popular</strong> song of the year.<br>（これは今年一番人気の曲だ）</div>
          <div class="example-item"><strong>difficult → the most difficult</strong><br>That was <strong>the most difficult</strong> test of all.<br>（あれは全部の中で一番難しいテストだった）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">in と of の使い分け</h3>

      <div class="concept-box">
        <h4>📍 in = 場所・集団 / of = 数・全体</h4>
        <p>最上級の後に「〜の中で」を表すとき、<strong>in</strong> と <strong>of</strong> を使い分けます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>in + 場所・集団</strong><br>the tallest <strong>in the class</strong><br>the best <strong>in Japan</strong><br>the fastest <strong>in our team</strong></div>
          <div class="example-item"><strong>of + 数・全体</strong><br>the youngest <strong>of the three</strong><br>the best <strong>of all</strong><br>the tallest <strong>of the five students</strong></div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 覚え方：</strong><br>
        ・<strong>in</strong> → 「〜の<strong>中</strong>」に入れる感覚（場所・グループ）<br>
        ・<strong>of</strong> → 「〜の<strong>うち</strong>」から選ぶ感覚（数を示す）</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">不規則変化（暗記必須！）</h3>

      <div class="concept-box">
        <h4>⚡ 原級 → 比較級 → 最上級</h4>
        <div class="example-grid">
          <div class="example-item"><strong>good / well</strong><br>→ better → <strong>best</strong></div>
          <div class="example-item"><strong>bad / badly</strong><br>→ worse → <strong>worst</strong></div>
          <div class="example-item"><strong>many / much</strong><br>→ more → <strong>most</strong></div>
          <div class="example-item"><strong>little</strong><br>→ less → <strong>least</strong></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">one of the -est + 複数名詞</h3>

      <div class="concept-box">
        <h4>🌟 「最も〜なもののひとつ」</h4>
        <p><strong>one of the + 最上級 + 複数名詞</strong> で「最も〜なもののひとつ」を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>one of the tallest buildings</strong><br>This is one of the tallest buildings in Tokyo.<br>（これは東京で最も高い建物のひとつだ）</div>
          <div class="example-item"><strong>one of the most famous singers</strong><br>She is one of the most famous singers in the world.<br>（彼女は世界で最も有名な歌手のひとりだ）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ 注意：</strong>one of の後は必ず<strong>複数名詞</strong>です。one of the tallest building<strong>s</strong>（×building）。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">Mt. Fuji is the highest mountain in Japan.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> Mt. Fuji <span class="tag v-tag">V</span> is <strong>the highest</strong> mountain <strong>in</strong> Japan.</p>
        <p class="example-translation">富士山は日本で一番高い山です。</p>
        <p class="example-note">Japan は「場所」なので in を使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She is the best student of all.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> is <strong>the best</strong> student <strong>of</strong> all.</p>
        <p class="example-translation">彼女は全員の中で一番優秀な生徒です。</p>
        <p class="example-note">of all = 「全員のうち」。good の最上級は best（不規則変化）。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 最上級には必ず <strong>the</strong> をつける</li>
        <li>✓ 短い語 → <strong>the -est</strong> / 長い語 → <strong>the most ~</strong></li>
        <li>✓ <strong>in</strong> = 場所・集団 / <strong>of</strong> = 数・全体</li>
        <li>✓ <strong>good → best, bad → worst, many/much → most</strong>（不規則変化）</li>
        <li>✓ <strong>one of the + 最上級 + 複数名詞</strong>（「最も〜なもののひとつ」）</li>
        <li>✓ スペル変化のルールは比較級と同じ（big → biggest, happy → happiest）</li>
      </ul>
    </div>
  `,
  examples: [
    'Tom is the tallest in the class. — トムはクラスで一番背が高い。',
    'She is the youngest of the three. — 彼女は3人の中で一番若い。',
    'Mt. Fuji is the highest mountain in Japan. — 富士山は日本で一番高い山だ。',
    'This is the most popular song of the year. — これは今年一番人気の曲だ。',
    'She is the best student of all. — 彼女は全員の中で一番優秀な生徒だ。',
    'This is one of the most famous buildings in Tokyo. — これは東京で最も有名な建物のひとつだ。'
  ],
  quiz: [
    {
      question: '「トムはクラスで一番背が高い」を英語にすると？',
      options: ['Tom is the tallest in the class.', 'Tom is tallest in the class.', 'Tom is the most tall in the class.', 'Tom is the taller in the class.'],
      answer: 'Tom is the tallest in the class.',
      explanation: '最上級には必ず the がつきます。tall は短い形容詞なので the tallest。class は場所なので in を使います。'
    },
    {
      question: '「彼女は3人の中で一番若い」の "3人の中で" は in / of どちら？',
      options: ['of the three', 'in the three', 'of three', 'in three'],
      answer: 'of the three',
      explanation: '数を示す表現（the three）には of を使います。in は場所や集団に使います。'
    },
    {
      question: 'good の最上級は？',
      options: ['best', 'goodest', 'most good', 'better'],
      answer: 'best',
      explanation: 'good は不規則変化する形容詞です。good → better（比較級）→ best（最上級）。'
    },
    {
      question: '「これは今年一番人気の曲だ」を英語にすると？',
      options: ['This is the most popular song of the year.', 'This is the popularest song of the year.', 'This is most popular song of the year.', 'This is the more popular song of the year.'],
      answer: 'This is the most popular song of the year.',
      explanation: 'popular は3音節の長い形容詞なので the most popular。the year は全体を示すので of を使います。'
    },
    {
      question: 'big の最上級として正しいのは？',
      options: ['biggest', 'bigest', 'most big', 'the biger'],
      answer: 'biggest',
      explanation: 'big は「短母音 + 子音字」で終わるので、子音字を重ねて biggest にします。'
    },
    {
      question: '空所に入る適切な前置詞は？ "She is the best player ____ our team."',
      options: ['in', 'of', 'at', 'from'],
      answer: 'in',
      explanation: 'our team は「チーム」という集団・場所なので in を使います。of は数を示す場合に使います。'
    },
    {
      question: 'bad の最上級は？',
      options: ['worst', 'baddest', 'most bad', 'worse'],
      answer: 'worst',
      explanation: 'bad は不規則変化する形容詞です。bad → worse（比較級）→ worst（最上級）。'
    },
    {
      question: '「これは東京で最も高い建物のひとつだ」を英語にすると？',
      options: ['This is one of the tallest buildings in Tokyo.', 'This is one of the tallest building in Tokyo.', 'This is one of tallest buildings in Tokyo.', 'This is one of the taller buildings in Tokyo.'],
      answer: 'This is one of the tallest buildings in Tokyo.',
      explanation: 'one of the + 最上級 + 複数名詞の形です。building は複数形 buildings にします。'
    },
    {
      question: 'happy の最上級として正しいのは？',
      options: ['happiest', 'happyest', 'most happy', 'happist'],
      answer: 'happiest',
      explanation: '語尾が y の形容詞は、y を i に変えて -est をつけます。happy → happiest。'
    },
    {
      question: '次のうち、文法的に正しい文はどれ？',
      options: ['This is the most difficult test of all.', 'This is most difficult test of all.', 'This is the more difficult test of all.', 'This is the difficultest test of all.'],
      answer: 'This is the most difficult test of all.',
      explanation: 'difficult は3音節以上の長い形容詞なので the most difficult。最上級には the が必須です。'
    }
  ]
};
