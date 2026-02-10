
export const imperativeSentence = {
  id: 'various-imperative',
  isEnabled: true,
  title: '命令文 (Imperative Sentences)',
  description: '相手に何かをするように指示したり、命令したり、依頼したりする文型です。',
  explanation: `
    <div class="explanation-section">
      <p>命令文は、<strong>相手に何かをするように指示・命令・依頼</strong>するときに使う文型です。「〜しなさい」「〜してください」という意味になります。</p>
      
      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center;">
            <div style="font-size: 1.5rem;">📣</div>
            <div style="font-weight: bold; color: var(--secondary);">命令文の基本構造</div>
            <div style="font-size: 1rem; margin-top: 0.5rem;"><strong>動詞の原形</strong> + ...</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">基本の命令文</h3>

      <div class="concept-box">
        <h4>📣 動詞の原形で始める</h4>
        <p>命令文は<strong>主語を省略</strong>し、<strong>動詞の原形</strong>で文を始めます。主語のYouは言わなくても分かるので省略します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Open the window.</strong><br>（窓を開けなさい）</div>
          <div class="example-item"><strong>Close the door.</strong><br>（ドアを閉めなさい）</div>
          <div class="example-item"><strong>Sit down.</strong><br>（座りなさい）</div>
          <div class="example-item"><strong>Stand up.</strong><br>（立ちなさい）</div>
          <div class="example-item"><strong>Listen to me.</strong><br>（私の話を聞きなさい）</div>
          <div class="example-item"><strong>Come here.</strong><br>（ここに来なさい）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>主語は省略し、動詞の原形で始めます。三単現のsはつけません。</p>
      </div>

      <div class="concept-box">
        <h4>🙏 丁寧な命令文（依頼）</h4>
        <p><strong>Please</strong>をつけると、命令文が丁寧な依頼表現になります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Please open the window.</strong><br>（窓を開けてください）</div>
          <div class="example-item"><strong>Open the window, please.</strong><br>（窓を開けてください）</div>
          <div class="example-item"><strong>Please sit down.</strong><br>（座ってください）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>注意：</strong>Pleaseは文頭または文末に置きます。文末の場合はカンマをつけます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">否定の命令文</h3>

      <div class="concept-box">
        <h4>❌ Don't + 動詞の原形</h4>
        <p>「〜してはいけない」という禁止を表すときは、<strong>Don't</strong>を文頭に置きます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Don't run.</strong><br>（走ってはいけません）</div>
          <div class="example-item"><strong>Don't be late.</strong><br>（遅刻してはいけません）</div>
          <div class="example-item"><strong>Don't worry.</strong><br>（心配しないで）</div>
          <div class="example-item"><strong>Don't touch it.</strong><br>（それに触れないで）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">命令文 + and / or</h3>

      <div class="concept-box">
        <h4>✅ 命令文 + and 〜（〜すれば...だ）</h4>
        <p><strong>「命令文 + and 〜」</strong>は「〜しなさい、そうすれば...」という意味になります。条件と結果の関係を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Study hard, and you will pass.</strong><br>（一生懸命勉強しなさい、そうすれば合格します）</div>
          <div class="example-item"><strong>Hurry up, and you will catch the train.</strong><br>（急ぎなさい、そうすれば電車に間に合います）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>andの前にはカンマをつけます。If you study hard, you will pass. と同じ意味です。</p>
      </div>

      <div class="concept-box">
        <h4>⚠️ 命令文 + or 〜（〜しないと...だ）</h4>
        <p><strong>「命令文 + or 〜」</strong>は「〜しなさい、さもないと...」という意味になります。警告を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Study hard, or you will fail.</strong><br>（一生懸命勉強しなさい、さもないと失敗します）</div>
          <div class="example-item"><strong>Hurry up, or you will miss the train.</strong><br>（急ぎなさい、さもないと電車に乗り遅れます）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>orの前にはカンマをつけます。If you don't study hard, you will fail. と同じ意味です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">Open your book to page 10.</p>
        <p class="example-breakdown"><span class="tag v-tag">V</span> Open <span class="tag o-tag">O</span> your book to page 10</p>
        <p class="example-translation">教科書の10ページを開きなさい。</p>
        <p class="example-note">命令文は動詞の原形で始まります。主語(You)は省略されています。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Don't forget your homework.</p>
        <p class="example-breakdown"><span class="tag">Don't</span> + <span class="tag v-tag">V</span> forget <span class="tag o-tag">O</span> your homework</p>
        <p class="example-translation">宿題を忘れないでください。</p>
        <p class="example-note">否定の命令文はDon'tで始めます。forgetは動詞の原形です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Please be quiet.</p>
        <p class="example-breakdown"><span class="tag">Please</span> + <span class="tag v-tag">V</span> be <span class="tag c-tag">C</span> quiet</p>
        <p class="example-translation">静かにしてください。</p>
        <p class="example-note">Pleaseをつけると丁寧な依頼になります。be動詞も原形を使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Get up early, and you will have time for breakfast.</p>
        <p class="example-breakdown">命令文 + <span class="tag">and</span> + 結果</p>
        <p class="example-translation">早起きしなさい、そうすれば朝食の時間があります。</p>
        <p class="example-note">「命令文 + and」で「〜すれば...だ」という条件と結果を表します。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Work hard, or you will lose your job.</p>
        <p class="example-breakdown">命令文 + <span class="tag">or</span> + 警告</p>
        <p class="example-translation">一生懸命働きなさい、さもないと仕事を失います。</p>
        <p class="example-note">「命令文 + or」で「〜しないと...だ」という警告を表します。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 命令文は<strong>動詞の原形</strong>で始める（主語のYouは省略）</li>
        <li>✓ 三単現のsはつけない</li>
        <li>✓ 否定形は<strong>Don't + 動詞の原形</strong></li>
        <li>✓ Pleaseをつけると丁寧な依頼になる</li>
        <li>✓ 命令文 + <strong>and</strong> = 〜すれば...だ（条件）</li>
        <li>✓ 命令文 + <strong>or</strong> = 〜しないと...だ（警告）</li>
      </ul>
    </div>
  `,
  examples: [
    'Open the door.',
    'Please sit down.',
    "Don't run in the hallway.",
    'Study hard, and you will succeed.',
    'Hurry up, or you will be late.'
  ],
  quiz: [
    {
      question: '命令文を作るとき、動詞はどの形を使いますか？',
      options: ['原形', '過去形', '現在形（三単現のs）', '進行形'],
      answer: '原形',
      explanation: '命令文は動詞の原形で始めます。主語は省略され、動詞に三単現のsもつけません。'
    },
    {
      question: '「窓を開けなさい」を英語で表すと？',
      options: ['Opens the window.', 'Open the window.', 'Opening the window.', 'Opened the window.'],
      answer: 'Open the window.',
      explanation: '命令文は動詞の原形で始めます。「Open the window.」が正解です。'
    },
    {
      question: '否定の命令文「走ってはいけません」を英語で表すと？',
      options: ["Not run.", "Don't run.", "Doesn't run.", "Didn't run."],
      answer: "Don't run.",
      explanation: "否定の命令文は「Don't + 動詞の原形」で表します。"
    },
    {
      question: '「静かにしてください」を丁寧に英語で表すと？',
      options: ['Quiet!', 'Be quiet.', 'Please be quiet.', 'You be quiet.'],
      answer: 'Please be quiet.',
      explanation: 'Pleaseをつけることで丁寧な依頼表現になります。「Please be quiet.」が最も丁寧です。'
    },
    {
      question: '命令文で主語は何ですか？',
      options: ['I', 'You（省略される）', 'We', 'They'],
      answer: 'You（省略される）',
      explanation: '命令文の主語は相手を指すYouですが、省略されます。'
    },
    {
      question: '「Study hard, and you will pass.」の意味は？',
      options: ['勉強してはいけない、合格する', '一生懸命勉強しなさい、そうすれば合格します', '一生懸命勉強した、そして合格した', '勉強するか合格する'],
      answer: '一生懸命勉強しなさい、そうすれば合格します',
      explanation: '「命令文 + and」は「〜しなさい、そうすれば...」という条件と結果を表します。'
    },
    {
      question: '「Hurry up, or you will be late.」の意味は？',
      options: ['急いで、そうすれば遅刻する', '急いではいけない、遅刻する', '急ぎなさい、さもないと遅刻します', '急いだ、または遅刻した'],
      answer: '急ぎなさい、さもないと遅刻します',
      explanation: '「命令文 + or」は「〜しなさい、さもないと...」という警告を表します。'
    },
    {
      question: '命令文 + andの意味として正しいものは？',
      options: ['禁止', '条件と結果', '過去の事実', '質問'],
      answer: '条件と結果',
      explanation: '「命令文 + and」は条件と結果の関係を表し、「〜すれば...だ」という意味になります。'
    },
    {
      question: '「宿題を忘れないで」を英語で表すと？',
      options: ["Not forget your homework.", "Don't forget your homework.", "Don't forgets your homework.", "Doesn't forget your homework."],
      answer: "Don't forget your homework.",
      explanation: "否定の命令文は「Don't + 動詞の原形」です。forgetに三単現のsはつけません。"
    },
    {
      question: 'Pleaseはどこに置くことができますか？',
      options: ['文頭のみ', '文末のみ', '文頭または文末', '動詞の前のみ'],
      answer: '文頭または文末',
      explanation: 'Pleaseは文頭または文末に置くことができます。文末の場合はカンマをつけます。「Please open the door.」または「Open the door, please.」'
    }
  ]
};
