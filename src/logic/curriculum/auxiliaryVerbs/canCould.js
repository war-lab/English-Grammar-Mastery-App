
export const canCould = {
  id: 'aux-can-could',
  isEnabled: true,
  title: 'can / could',
  description: '能力、許可、依頼、可能性を表す助動詞です。',
  explanation: `
    <div class="explanation-section">
      <p><strong>can/could</strong>は、「〜できる（能力）」だけでなく、「〜してもよい（許可）」や「〜してくれますか（依頼）」など、日常会話で非常によく使われる助動詞です。</p>
      
      <div class="concept-box">
        <h4>💪 1. 能力「〜できる」</h4>
        <p>何かができる能力やスキルを表します。過去の能力は <strong>could</strong> を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I can swim.</strong><br>（泳げます）</div>
          <div class="example-item"><strong>I could swim.</strong><br>（泳げました）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🙏 2. 依頼「〜してくれますか？」</h4>
        <p>相手に何かをお願いするときに使います。<strong>Could you...?</strong> の方がより丁寧です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Can you help me?</strong><br>（手伝ってくれる？）</div>
          <div class="example-item"><strong>Could you help me?</strong><br>（手伝っていただけますか？）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔓 3. 許可「〜してもよい」</h4>
        <p>許可を与えたり求めたりします。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Can I use this?</strong><br>（これ使ってもいい？）</div>
          <div class="example-item"><strong>You can go home.</strong><br>（帰ってもいいですよ）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I can speak English a little.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> can speak <span class="tag o-tag">O</span> English <span class="tag m-tag">M</span> a little</p>
        <p class="example-translation">私は少し英語を話すことができます。</p>
        <p class="example-note">can + 動詞の原形で現在の能力を表します。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Could you open the window, please?</p>
        <p class="example-breakdown"><span class="tag v-tag">V</span> Could <span class="tag s-tag">S</span> you open <span class="tag o-tag">O</span> the window</p>
        <p class="example-translation">窓を開けていただけますか？</p>
        <p class="example-note">Could you...? は Can you...? よりも丁寧な依頼の表現です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 助動詞（can/could）の後は<strong>必ず動詞の原形</strong></li>
        <li>✓ 否定形は <strong>cannot (can't)</strong> / <strong>could not (couldn't)</strong></li>
        <li>✓ 過去のことを言うときは <strong>could</strong> を使う</li>
        <li>✓ 丁寧にお願いするときは <strong>Could you...?</strong></li>
      </ul>
    </div>
  `,
  examples: [
    'I can play the piano.',
    'He could run fast when he was young.',
    'Can I open the door?',
    'Could you tell me the way to the station?',
    "I can't hear you."
  ],
  quiz: [
    {
      question: '「彼は上手にギターを弾くことができます」を英語で？',
      options: ['He can plays the guitar well.', 'He can play the guitar well.', 'He can playing the guitar well.', 'He cans play the guitar well.'],
      answer: 'He can play the guitar well.',
      explanation: 'can（助動詞）の後は必ず動詞の原形を使います。主語がHeでもplaysにはなりません。'
    },
    {
      question: '「手伝っていただけますか？」という丁寧な表現は？',
      options: ['Can you help me?', 'Could you help me?', 'Do you help me?', 'Are you help me?'],
      answer: 'Could you help me?',
      explanation: 'Could you...? は Can you...? よりも丁寧な依頼の表現になります。'
    },
    {
      question: 'can not の最も一般的な短縮形は？',
      options: ["cann't", "can't", "don't can", "not can"],
      answer: "can't",
      explanation: 'can not の短縮形は can\'t です。'
    },
    {
      question: '「私は子供の頃、速く走ることができました」を英語で？',
      options: ['I can run fast when I was a child.', 'I could run fast when I was a child.', 'I can ran fast when I was a child.', 'I could ran fast when I was a child.'],
      answer: 'I could run fast when I was a child.',
      explanation: '「〜できた」という過去の能力を表すには can の過去形 could を使います。助動詞の後は原形なので could run となります。'
    },
    {
      question: '「中に入ってもいいですか？」という許可を求める表現は？',
      options: ['Can I come in?', 'Do I come in?', 'Am I come in?', 'Will I come in?'],
      answer: 'Can I come in?',
      explanation: 'Can I...? で「〜してもいいですか？」という許可を求めることができます。'
    }
  ]
};
