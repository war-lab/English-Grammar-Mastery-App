
export const whyHow = {
  id: 'qw-why-how',
  isEnabled: true,
  title: 'Why / How の使い方',
  description: '理由を尋ねるWhyと方法・程度を尋ねるHowの使い方、日本語との微妙なズレを学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>Why</strong>は「なぜ」、<strong>How</strong>は「どのように・どのくらい」を尋ねる疑問詞です。日本語の「どう」との微妙なズレに注意が必要です。</p>
      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Why（なぜ）</h3>
      <div class="concept-box">
        <h4>❓ Why → Because で答える</h4>
        <p>Whyで尋ねた質問には、基本的に<strong>Because</strong>で答えます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Why do you like him?</strong><br>→ <strong>Because he is kind.</strong></div>
          <div class="example-item"><strong>Why were you late?</strong><br>→ <strong>Because I missed the train.</strong></div>
        </div>
      </div>
      <div class="concept-box">
        <h4>⚠️ Because の使い方に注意！</h4>
        <p>Becauseは<strong>単独で文を始めることができません</strong>。前の文に続ける形で使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I like him because he is kind.</strong> ✅<br>← becauseで文をつなぐ</div>
          <div class="example-item"><strong>I like him. Because he is kind.</strong> ❌<br>← becauseだけで文を始めるのは不適切</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>Whyの質問に答えるときは例外的に「Because ...」で文を始められますが、通常の文章ではBecauseで文を区切りません。</p>
      </div>
      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">How（どのように・どのくらい）</h3>
      <div class="concept-box">
        <h4>🛠️ How = 「どのように」方法を尋ねる</h4>
        <div class="example-grid">
          <div class="example-item"><strong>How can we get to the bus stop?</strong><br>（バス停にはどうやって行けますか？）</div>
          <div class="example-item"><strong>How do you make this cake?</strong><br>（このケーキはどうやって作りますか？）</div>
        </div>
      </div>
      <div class="concept-box">
        <h4>📊 How + 形容詞/副詞 = 「どのくらい」</h4>
        <div class="example-grid">
          <div class="example-item"><strong>How often</strong> do you go to the park?<br>（頻度）</div>
          <div class="example-item"><strong>How much</strong> is it?<br>（不可算名詞の量・値段）</div>
          <div class="example-item"><strong>How many</strong> books do you have?<br>（可算名詞の数）</div>
          <div class="example-item"><strong>How old</strong> are you?<br>（年齢）</div>
          <div class="example-item"><strong>How long</strong> does it take?<br>（時間の長さ）</div>
          <div class="example-item"><strong>How far</strong> is it from here?<br>（距離）</div>
        </div>
      </div>
      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">⚠️ 日本語の「どう」とのズレ</h3>
      <div class="concept-box">
        <h4>🚫 How do you think ... ? は間違い！</h4>
        <p>日本語で「どう思いますか？」と言いますが、英語では<strong>Howではなく What</strong>を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>What do you think of him?</strong> ✅<br>（彼のことをどう思いますか？）</div>
          <div class="example-item"><strong>How do you think of him?</strong> △<br>← 「どのような<strong>やり方で</strong>思うか？」という不自然な意味に</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>日本語の「どう思う？」は意見（What）を聞いています。Howは方法やプロセスを聞く言葉です。</p>
      </div>
      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Why don't you ~?（提案表現）</h3>
      <div class="concept-box">
        <h4>💡 Why don't you ~? = 「〜したらどう？」</h4>
        <p>直訳は「なぜ〜しないの？」ですが、転じて<strong>提案・アドバイス</strong>の表現になります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Why don't you try it?</strong><br>（やってみたら？）</div>
          <div class="example-item"><strong>Why don't we go together?</strong><br>（一緒に行こうよ）← Let's的な誘い</div>
          <div class="example-item"><strong>Why not?</strong><br>（いいじゃん / なぜダメ？）← 短縮形</div>
        </div>
      </div>
      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>Why</strong> → <strong>Because</strong> で答える（但し because で文を区切らない）</li>
        <li>✓ <strong>How</strong> = 方法（どのように）or 程度（どのくらい）</li>
        <li>✓ 「どう思う？」は <strong>What do you think of ~?</strong>（How ではない！）</li>
        <li>✓ <strong>How much</strong> = 不可算名詞、<strong>How many</strong> = 可算名詞</li>
        <li>✓ <strong>Why don't you ~?</strong> = 提案、<strong>Why don't we ~?</strong> = 誘い</li>
      </ul>
    </div>
  `,
  examples: [
    'Why do you like him? — Because he is kind.',
    'How can we get to the bus stop?',
    'How often do you go to the park?',
    'How much is it?',
    'What do you think of him?',
    "Why don't you try it?"
  ],
  quiz: [
    {
      question: 'Whyの質問に答えるとき、通常何で答えますか？',
      options: ['Because', 'How', 'What', 'When'],
      answer: 'Because',
      explanation: 'Whyで「なぜ？」と聞かれたら、Becauseで「〜だから」と理由を答えます。'
    },
    {
      question: '次のうち、文法的に正しいものは？',
      options: ['I like him because he is kind.', 'I like him. Because he is kind.', 'I like him, because.', 'Because he is kind, like him.'],
      answer: 'I like him because he is kind.',
      explanation: 'becauseは2つの文を接続する接続詞です。ピリオドで区切って使うのは文法的に不適切です。'
    },
    {
      question: '「バス停にはどうやって行けますか？」を英語で表すと？',
      options: ['How can we get to the bus stop?', 'What can we get to the bus stop?', 'Why can we get to the bus stop?', 'Where can we get to the bus stop?'],
      answer: 'How can we get to the bus stop?',
      explanation: '方法（どうやって）を尋ねるときはHowを使います。'
    },
    {
      question: '「彼のことをどう思いますか？」を英語で正しく表すと？',
      options: ['What do you think of him?', 'How do you think of him?', 'Why do you think of him?', 'Which do you think of him?'],
      answer: 'What do you think of him?',
      explanation: '「どう思う？」は意見を聞いているのでWhatを使います。Howだと「どのような方法で思うか」という不自然な意味になります。'
    },
    {
      question: '「How much is it?」のmuchが使われる理由は？',
      options: ['金額は不可算だから', '金額は可算だから', 'howの後は常にmuchだから', 'itは不可算名詞だから'],
      answer: '金額は不可算だから',
      explanation: 'money（お金）や価格は不可算なのでmuchを使います。可算名詞にはmanyを使います。'
    },
    {
      question: '"Why don\'t you try it?" の意味は？',
      options: ['やってみたら？（提案）', 'なぜやらないの？（非難）', 'やってはいけない（禁止）', 'やったことがない（経験）'],
      answer: 'やってみたら？（提案）',
      explanation: '「Why don\'t you ~?」は「〜してみたら？」という提案の表現です。'
    },
    {
      question: '"Why don\'t we go together?" の意味として最も近いのは？',
      options: ['一緒に行こうよ（誘い）', 'なぜ一緒に行かないの？（質問）', '一緒に行くべきだ（義務）', '一緒に行った（過去）'],
      answer: '一緒に行こうよ（誘い）',
      explanation: '「Why don\'t we ~?」は「〜しよう」という誘いの表現です。Let\'sと似た意味です。'
    },
    {
      question: '「どのくらいの頻度で公園に行きますか？」を英語で表すと？',
      options: ['How often do you go to the park?', 'How much do you go to the park?', 'How many do you go to the park?', 'How long do you go to the park?'],
      answer: 'How often do you go to the park?',
      explanation: '頻度を尋ねるときは「How often」を使います。'
    },
    {
      question: 'How far の意味は？',
      options: ['どのくらい遠い（距離）', 'どのくらい長い（時間）', 'どのくらい多い（数）', 'どのくらい古い（年齢）'],
      answer: 'どのくらい遠い（距離）',
      explanation: 'How far は距離を尋ねます。例：How far is it from here?（ここからどのくらい遠い？）'
    },
    {
      question: '"Why not?" はどのような意味ですか？',
      options: ['いいじゃん / なぜダメ？', 'ダメです', 'なぜですか？', '違います'],
      answer: 'いいじゃん / なぜダメ？',
      explanation: '「Why not?」はカジュアルな提案・賛同の表現です。'
    }
  ]
};
