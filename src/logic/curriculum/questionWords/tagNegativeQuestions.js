
export const tagNegativeQuestions = {
  id: 'qw-tag-negative',
  isEnabled: true,
  title: '付加疑問・否定疑問 (Tag & Negative Questions)',
  description: '付加疑問文・否定疑問文の作り方と、英語のYes/Noの答え方（日本語とのズレ）を学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>付加疑問文</strong>は文末に「〜ですよね？」とちょこっと疑問をつける表現、<strong>否定疑問文</strong>は「〜ではないの？」という聞き方です。英語と日本語で<strong>Yes/Noの答え方が逆</strong>になるのが最大のポイントです。</p>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">付加疑問文（Tag Questions）</h3>

      <div class="concept-box">
        <h4>🏷️ 肯定文 + 否定タグ / 否定文 + 肯定タグ</h4>
        <p>文の末尾に<strong>真逆</strong>のミニ疑問文をつけます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>You like dogs, don't you?</strong><br>（犬が好きですよね？）<br>← 肯定文 + 否定タグ</div>
          <div class="example-item"><strong>You are kind, aren't you?</strong><br>（あなたは親切ですよね？）<br>← be動詞の付加疑問</div>
          <div class="example-item"><strong>You don't like dogs, do you?</strong><br>（犬が好きじゃないですよね？）<br>← 否定文 + 肯定タグ</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ルール：</strong>肯定文なら否定のタグ、否定文なら肯定のタグをつけます。常に<strong>真逆</strong>のものが使えます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">⚠️ Yes/No の答え方（最重要！）</h3>

      <div class="concept-box">
        <h4>🔄 英語は「事実」ベースで答える</h4>
        <p>日本語では「はい / いいえ」で答えますが、英語では<strong>事実がYesかNoか</strong>で答えます。日本語の感覚とズレるので注意！</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>You don't like dogs, do you?</strong><br>
            好き → <strong>Yes, I do.</strong>（いや、好きだよ）<br>
            嫌い → <strong>No, I don't.</strong>（はい、好きじゃない）
          </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 キモ：</strong>日本語の「はい/いいえ」は忘れましょう！<strong>事実が肯定ならYes、否定ならNo</strong>です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">否定疑問文（Negative Questions）</h3>

      <div class="concept-box">
        <h4>❓ 否定疑問文の答え方</h4>
        <p>否定疑問文でも答え方は同じ。<strong>動詞を肯定するか否定するか</strong>だけです。</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>Don't you love me?</strong><br>（愛していないの？）<br>
            愛してる → <strong>Yes, I do.</strong><br>
            愛してない → <strong>No, I don't.</strong>
          </div>
          <div class="example-item">
            <strong>Can't you hear me?</strong><br>（聞こえないの？）<br>
            聞こえる → <strong>Yes, I can.</strong><br>
            聞こえない → <strong>No, I can't.</strong>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Do you mind ~?（要注意表現）</h3>

      <div class="concept-box">
        <h4>🪤 Do you mind if I sit here?</h4>
        <p>mindは「<strong>気にする・嫌がる</strong>」という意味です。直訳は「ここに座ることを気にしますか？」</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>いいよ（OK）の場合：</strong><br>
            <strong>No, I don't.</strong> / <strong>Not at all.</strong> / <strong>Of course not.</strong><br>
            ← 「気にしないよ」= No
          </div>
          <div class="example-item">
            <strong>ダメな場合：</strong><br>
            <strong>Yes, I do.</strong> / <strong>I'm sorry, but...</strong><br>
            ← 「気にする」= Yes
          </div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ 注意：</strong>YesだとダメでNoだとOK！mindは「気にする？」と聞いているので、「気にしないよ」= Noで許可になります。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 付加疑問 = <strong>肯定文 + 否定タグ</strong> or <strong>否定文 + 肯定タグ</strong></li>
        <li>✓ 英語のYes/Noは<strong>事実ベース</strong>（日本語の「はい/いいえ」とズレる）</li>
        <li>✓ 事実が肯定 → <strong>Yes</strong>、事実が否定 → <strong>No</strong></li>
        <li>✓ Do you mind ~? → OKなら<strong>No</strong>（気にしない）、ダメなら<strong>Yes</strong>（気にする）</li>
        <li>✓ キモは<strong>動詞を肯定するか否定するか</strong></li>
      </ul>
    </div>
  `,
  examples: [
    "You like dogs, don't you?",
    "You are kind, aren't you?",
    "You don't like dogs, do you?",
    "Don't you love me? — Yes, I do.",
    "Can't you hear me? — Yes, I can.",
    "Do you mind if I sit here? — No, not at all."
  ],
  quiz: [
    {
      question: '"You like dogs, don\'t you?" の付加疑問タグとして正しいのは？',
      options: ["don't you", "do you", "aren't you", "isn't it"],
      answer: "don't you",
      explanation: '肯定文（You like dogs）には否定のタグ（don\'t you）をつけます。一般動詞なのでdon\'tを使います。'
    },
    {
      question: '"You are kind, ____?" の空所に入るのは？',
      options: ["aren't you", "don't you", "are you", "isn't you"],
      answer: "aren't you",
      explanation: 'be動詞の肯定文にはbe動詞の否定タグをつけます。You are → aren\'t you です。'
    },
    {
      question: '"You don\'t like dogs, do you?" に対して「好き」と答える場合は？',
      options: ['Yes, I do.', 'No, I do.', 'Yes, I don\'t.', 'No, I don\'t.'],
      answer: 'Yes, I do.',
      explanation: '英語は事実ベースで答えます。好きという事実が肯定なのでYes, I do.です。日本語では「いいえ、好きです」になるのでズレに注意。'
    },
    {
      question: '"Don\'t you love me?" に対して「愛してる」と答える場合は？',
      options: ['Yes, I do.', 'No, I do.', 'Yes, I don\'t.', 'No, I don\'t.'],
      answer: 'Yes, I do.',
      explanation: '愛しているという事実が肯定なのでYes, I do.です。否定疑問でも答え方は同じです。'
    },
    {
      question: '"Can\'t you hear me?" に対して「聞こえない」と答える場合は？',
      options: ["No, I can't.", "Yes, I can't.", "No, I can.", "Yes, I can."],
      answer: "No, I can't.",
      explanation: '聞こえないという事実が否定なのでNo, I can\'t.です。'
    },
    {
      question: '"Do you mind if I sit here?" に対して「いいよ」と答える場合は？',
      options: ['No, not at all.', 'Yes, please.', 'Yes, I do.', 'Sure, I mind.'],
      answer: 'No, not at all.',
      explanation: 'mindは「気にする」です。「気にしないよ」= No で許可を表します。Yesと答えると「気にする」= ダメになります。'
    },
    {
      question: '付加疑問文のルールとして正しいのは？',
      options: ['肯定文には否定タグ、否定文には肯定タグ', '肯定文には肯定タグ', '否定文には否定タグ', 'どちらでも同じタグ'],
      answer: '肯定文には否定タグ、否定文には肯定タグ',
      explanation: '付加疑問は常に真逆のタグをつけます。肯定→否定、否定→肯定です。'
    },
    {
      question: '英語のYes/Noの答え方の原則は？',
      options: ['事実が肯定ならYes、否定ならNo', '質問が肯定ならYes', '日本語と同じ', '質問に合わせる'],
      answer: '事実が肯定ならYes、否定ならNo',
      explanation: '英語は事実ベースで答えます。質問が否定でも肯定でも、答える内容が肯定ならYes、否定ならNoです。'
    },
    {
      question: '"Do you mind if I sit here?" でYesと答えたらどうなる？',
      options: ['座ってはダメ（嫌だ）', '座ってOK', '質問を聞き返す', '特に意味はない'],
      answer: '座ってはダメ（嫌だ）',
      explanation: 'mind（気にする）にYesと答えると「気にする＝嫌だ」となり、座ることを拒否する意味になります。'
    },
    {
      question: '"She can swim, ____?" の空所に入るのは？',
      options: ["can't she", "can she", "doesn't she", "isn't she"],
      answer: "can't she",
      explanation: '肯定文（She can swim）に対して否定のタグ（can\'t she）をつけます。助動詞canの否定形can\'tを使います。'
    }
  ]
};
