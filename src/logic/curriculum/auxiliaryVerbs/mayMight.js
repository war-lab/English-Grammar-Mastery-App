
export const mayMight = {
  id: 'aux-may-might',
  isEnabled: true,
  title: 'may / might',
  description: '許可、可能性、推量を表す助動詞です。',
  explanation: `
    <div class="explanation-section">
      <p><strong>may</strong>は「〜してもよい（許可）」や「〜かもしれない（推量）」を、<strong>might</strong>はより控えめな推量（ひょっとしたら〜かもしれない）を表します。</p>
      
      <div class="concept-box">
        <h4>🔓 1. 許可「〜してもよい」</h4>
        <p>may は can よりもフォーマルで丁寧な許可の表現です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>May I come in?</strong><br>（入ってもよろしいですか？）</div>
          <div class="example-item"><strong>You may use this pen.</strong><br>（このペンを使ってよいですよ）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🤔 2. 推量「〜かもしれない」</h4>
        <p>確信が半分くらいの推測を表します。might はさらに可能性が低いときに使われます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>It may rain tonight.</strong><br>（今夜は雨かもしれない）</div>
          <div class="example-item"><strong>He might be at home.</strong><br>（彼はひょっとしたら家にいるかも）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">May I ask a question?</p>
        <p class="example-breakdown"><span class="tag v-tag">V</span> May <span class="tag s-tag">S</span> I ask <span class="tag o-tag">O</span> a question</p>
        <p class="example-translation">質問してもよろしいですか？</p>
        <p class="example-note">May I...? は、先生や目上の人、見知らぬ人に対して許可を求めるときに非常に丁寧に聞こえます。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She might come to the party.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> might come <span class="tag m-tag">M</span> to the party</p>
        <p class="example-translation">彼女はひょっとしたらパーティーに来るかもしれません。</p>
        <p class="example-note">might を使うことで、来る可能性がそれほど高くないことを示唆します。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ may, mightの後は動詞の原形</li>
        <li>✓ <strong>May I...?</strong> は非常に丁寧な許可の求め方</li>
        <li>✓ 推量では might よりも may の方が可能性が高い</li>
        <li>✓ 否定形は <strong>may not</strong> / <strong>might not</strong></li>
      </ul>
    </div>
  `,
  examples: [
    'May I sit here?',
    'You may go now.',
    'It may be true.',
    'He might be late.',
    'I might not go there.'
  ],
  quiz: [
    {
      question: '「入ってもよろしいですか？」というフォーマルで丁寧な表現は？',
      options: ['May I come in?', 'Can I come in?', 'Do I come in?', 'Will I come in?'],
      answer: 'May I come in?',
      explanation: 'May I...? は Can I...? よりもフォーマルで丁寧な許可の求め方になります。'
    },
    {
      question: '「それは本当かもしれません」を英語で？',
      options: ['It may be true.', 'It may true.', 'It maybe true.', 'It mays be true.'],
      answer: 'It may be true.',
      explanation: '推量の may（〜かもしれない）の後に be 動詞の原形 be を使います。'
    },
    {
      question: 'may と might で可能性がより低い（ひょっとしたら〜かも）なのは？',
      options: ['may', 'might', '両方同じ', 'can'],
      answer: 'might',
      explanation: 'might は may よりもさらに可能性が低い推量を表すときに使われます。'
    },
    {
      question: '「今夜は雨が降るかもしれません」を英語で？',
      options: ['It may rain tonight.', 'It may rains tonight.', 'It may raining tonight.', 'It may to rain tonight.'],
      answer: 'It may rain tonight.',
      explanation: 'may（助動詞）の後は必ず動詞の原形を使います。'
    },
    {
      question: '「あなたはここを使ってもよいです」という許可の文は？',
      options: ['You may use here.', 'You may using here.', 'You might using here.', 'You mays use here.'],
      answer: 'You may use here.',
      explanation: '「〜してもよい」という許可には may を使います。'
    }
  ]
};
