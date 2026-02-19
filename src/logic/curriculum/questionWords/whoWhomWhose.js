
export const whoWhomWhose = {
  id: 'qw-who-whom-whose',
  isEnabled: true,
  title: 'Who / Whom / Whose の使い方',
  description: '「誰」を尋ねる疑問詞と、主語になる場合・前置詞の直後・所有を尋ねる場合の使い分けを学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>Who / Whom / Whose</strong>はすべて「誰」に関する疑問詞ですが、文中での役割によって使い分けます。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1.5rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem;">
            <div style="font-size: 1.3rem; font-weight: bold; color: var(--secondary);">Who</div>
            <div style="font-size: 0.9rem;">誰が / 誰を</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: rgba(244, 63, 94, 0.15); border-radius: 0.75rem;">
            <div style="font-size: 1.3rem; font-weight: bold; color: #f43f5e;">Whom</div>
            <div style="font-size: 0.9rem;">前置詞の直後</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: rgba(34, 197, 94, 0.15); border-radius: 0.75rem;">
            <div style="font-size: 1.3rem; font-weight: bold; color: #22c55e;">Whose</div>
            <div style="font-size: 0.9rem;">誰の</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Who が主語になる場合</h3>

      <div class="concept-box">
        <h4>👤 Who = 主語 → do/does 不要！</h4>
        <p>Whoが<strong>主語（〜は）</strong>として使われる場合、do/doesは使いません。動詞は<strong>三人称単数</strong>扱いになります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Who loves him?</strong><br>（誰が彼を愛しているの？）<br>✅ 正しい</div>
          <div class="example-item"><strong>Who do love him?</strong><br>❌ ブロークンイングリッシュ<br>（do は不要！）</div>
          <div class="example-item"><strong>Who likes cats?</strong><br>（誰が猫を好きなの？）<br>← likes（三単現のs）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ なぜ do/does を使わない？</strong><br>
        疑問文で do/does を使うのは「主語がすでに分かっている」ときです。Who が主語の場合、尋ねているのが主語そのものなので、do/does で倒置する必要がありません。</p>
      </div>

      <div class="concept-box">
        <h4>🔄 Who = 目的語 → do/does が必要</h4>
        <p>Whoが<strong>目的語（〜を）</strong>の場合は、通常の疑問文と同じく do/does/did を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Who do you like?</strong><br>（あなたは誰が好きですか？）</div>
          <div class="example-item"><strong>Who did you meet?</strong><br>（誰に会いましたか？）</div>
          <div class="example-item"><strong>Who did you call?</strong><br>（誰に電話しましたか？）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Whom（前置詞の直後）</h3>

      <div class="concept-box">
        <h4>📝 Whom = 前置詞の直後に使う</h4>
        <p>Whomは日常会話ではあまり使いませんが、<strong>前置詞の直後</strong>に置く場合はWhomを使います。</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>元の文：</strong><br>
            Did you get that book <strong>from Tom</strong>?<br>
            （トムからその本をもらったの？）
          </div>
          <div class="example-item">
            <strong>Whoで聞く場合：</strong><br>
            <strong>Who</strong> did you get that book <strong>from</strong>?<br>
            （誰からその本をもらったの？）
          </div>
          <div class="example-item">
            <strong>Whomで聞く場合：</strong><br>
            <strong>From whom</strong> did you get that book?<br>
            （前置詞の直後 → Whom）
          </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>「from Tom」が一つの塊です。Tomを疑問詞に変えるとき、fromを文末に残せばWho、fromの直後に置くならWhomを使います。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Whose（誰の）</h3>

      <div class="concept-box">
        <h4>🏷️ Whose = 所有を尋ねる</h4>
        <p>Whoseは「<strong>誰の</strong>」と所有者を尋ねるときに使います。</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>Whose book is this?</strong><br>
            （これは誰の本ですか？）<br>
            → This book is <strong>his</strong>.
          </div>
          <div class="example-item">
            <strong>Whose is this book?</strong><br>
            （この本は誰のですか？）<br>
            → It is <strong>mine</strong>.
          </div>
          <div class="example-item">
            <strong>Whose pen did you borrow?</strong><br>
            （誰のペンを借りたの？）
          </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>答えは所有代名詞（his, mine, hers など）や人の名前で答えます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">Who broke the window?</p>
        <p class="example-breakdown"><span class="tag s-tag">Who</span> <span class="tag v-tag">broke</span> <span class="tag o-tag">the window</span>?</p>
        <p class="example-translation">誰が窓を割ったのですか？</p>
        <p class="example-note">Whoが主語なので、did は不要。broke はbreakの過去形です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">From whom did you receive this letter?</p>
        <p class="example-breakdown"><span class="tag">From whom</span> <span class="tag v-tag">did</span> <span class="tag s-tag">you</span> <span class="tag v-tag">receive</span> <span class="tag o-tag">this letter</span>?</p>
        <p class="example-translation">誰からこの手紙を受け取ったのですか？</p>
        <p class="example-note">前置詞（from）の直後なのでwhomを使います。フォーマルな表現です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>Who</strong>が主語 → do/does 不要、動詞は<strong>三人称単数</strong>扱い</li>
        <li>✓ <strong>Who</strong>が目的語 → do/does/did + 主語 + 動詞の原形</li>
        <li>✓ <strong>Whom</strong> = 前置詞の直後に使う（フォーマル）</li>
        <li>✓ <strong>Whose</strong> = 「誰の」と所有を尋ねる</li>
        <li>✓ "Who do love him?" はブロークンイングリッシュ。正しくは "Who loves him?"</li>
      </ul>
    </div>
  `,
  examples: [
    'Who loves him? — She does.',
    'Who did you meet yesterday?',
    'From whom did you get that book?',
    'Whose book is this? — It is mine.',
    'Who broke the window?',
    'Whose is this pen?'
  ],
  quiz: [
    {
      question: '「誰が彼を愛しているの？」を英語で表すと？',
      options: ['Who loves him?', 'Who do love him?', 'Who does love him?', 'Whom loves him?'],
      answer: 'Who loves him?',
      explanation: 'Whoが主語の場合、do/doesは不要です。動詞は三人称単数扱いになります（loves）。"Who do love him?"はブロークンイングリッシュです。'
    },
    {
      question: 'Whoが主語になるとき、動詞はどう扱いますか？',
      options: ['三人称単数扱い', '原形のまま', '過去形', '複数形'],
      answer: '三人称単数扱い',
      explanation: 'Whoが主語のとき、動詞は三人称単数扱いです。例：Who likes cats?（likeではなくlikes）'
    },
    {
      question: '「誰に会いましたか？」を英語で表すと？',
      options: ['Who did you meet?', 'Who you met?', 'Who met you?', 'Whom you meet?'],
      answer: 'Who did you meet?',
      explanation: 'Whoが目的語（「誰を」）の場合はdid + 主語 + 動詞の原形の語順です。'
    },
    {
      question: '「誰からその本をもらったの？」のフォーマルな表現は？',
      options: ['From whom did you get that book?', 'From who did you get that book?', 'Who from did you get that book?', 'Whose did you get that book from?'],
      answer: 'From whom did you get that book?',
      explanation: '前置詞（from）の直後に置く場合はWhomを使います。これはフォーマルな表現です。'
    },
    {
      question: '「これは誰の本ですか？」を英語で表すと？',
      options: ['Whose book is this?', 'Who book is this?', 'Whom book is this?', 'Who is this book?'],
      answer: 'Whose book is this?',
      explanation: '所有（「誰の」）を尋ねるときはWhoseを使います。Whose + 名詞の形になります。'
    },
    {
      question: '次のうち、文法的に正しいものは？',
      options: ['Who broke the window?', 'Who did break the window?', 'Who does broke the window?', 'Whom broke the window?'],
      answer: 'Who broke the window?',
      explanation: 'Whoが主語（「誰が割った？」）なので、do/didは不要です。brokeはbreakの過去形です。'
    },
    {
      question: 'Whomはどのような場合に使いますか？',
      options: ['前置詞の直後に使う', '主語として使う', '所有を表すときに使う', '場所を尋ねるときに使う'],
      answer: '前置詞の直後に使う',
      explanation: 'Whomは前置詞の直後に置きます。例：From whom, To whom, With whom など。日常会話ではWhoで代用されることが多いです。'
    },
    {
      question: '「この本は誰のですか？」を英語で表すと？',
      options: ['Whose is this book?', 'Who is this book?', 'Whom is this book?', 'Whose this book is?'],
      answer: 'Whose is this book?',
      explanation: '「誰のものか」を尋ねるときはWhoseを使います。Whose is + 名詞の語順です。'
    },
    {
      question: '「Who did you get that book from?」と同じ意味のフォーマルな文は？',
      options: ['From whom did you get that book?', 'From who did you get that book?', 'Whom did you get that book from?', 'Whose did you get that book from?'],
      answer: 'From whom did you get that book?',
      explanation: '前置詞fromを文頭に持ってくる場合、直後の疑問詞はWhomになります。これはよりフォーマルな表現です。'
    },
    {
      question: '次の空所に入る適切な語は？ "____ pen did you borrow?"',
      options: ['Whose', 'Who', 'Whom', 'Which'],
      answer: 'Whose',
      explanation: '「誰のペンを借りたの？」と所有を尋ねているので、Whoseが正解です。'
    }
  ]
};
