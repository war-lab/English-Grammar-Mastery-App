
export const mustShould = {
  id: 'aux-must-should',
  isEnabled: true,
  title: 'must / should',
  description: '義務、禁止、忠告、当然の推量を表す助動詞です。',
  explanation: `
    <div class="explanation-section">
      <p><strong>must</strong>は「〜しなければならない」という強い義務を、<strong>should</strong>は「〜すべきだ」というアドバイスや提案を表します。</p>
      
      <div class="concept-box">
        <h4>🚨 1. must 「〜しなければならない / 〜に違いない」</h4>
        <p>強い義務や、強い確信（推量）を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>You must study hard.</strong><br>（一生懸命勉強しなければならない）</div>
          <div class="example-item"><strong>He must be tired.</strong><br>（彼は疲れているに違いない）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🚫 2. must not 「〜してはいけない」</h4>
        <p>「〜してはいけない」という強い禁止を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>You must not smoke here.</strong><br>（ここでタバコを吸ってはいけない）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>💡 3. should 「〜すべきだ」</h4>
        <p>義務よりも少し弱い、アドバイスや「〜した方がいい」という提案です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>You should see a doctor.</strong><br>（医者に診てもらった方がいいよ）</div>
          <div class="example-item"><strong>We should go now.</strong><br>（もう行った方がいいね）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I must finish this work today.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> must finish <span class="tag o-tag">O</span> this work <span class="tag m-tag">M</span> today</p>
        <p class="example-translation">私は今日、この仕事を終わらせなければなりません。</p>
        <p class="example-note">自分に対する強い義務を表しています。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Should I bring my umbrella?</p>
        <p class="example-breakdown"><span class="tag v-tag">V</span> Should <span class="tag s-tag">S</span> I bring <span class="tag o-tag">O</span> my umbrella</p>
        <p class="example-translation">傘を持っていくべきですか？</p>
        <p class="example-note">相手にアドバイスを求めています。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ must, shouldの後は動詞の原形</li>
        <li>✓ <strong>must not</strong> は「禁止（〜してはいけない）」を表す</li>
        <li>✓ 「〜しなくてよい（不必要）」は <strong>don't have to</strong> を使う</li>
        <li>✓ should は must よりも柔らかい表現（アドバイス）</li>
      </ul>
    </div>
  `,
  examples: [
    'I must go now.',
    'You must not touch this.',
    'He must be a teacher.',
    'You should brush your teeth.',
    'We should eat more vegetables.'
  ],
  quiz: [
    {
      question: '「あなたは今すぐここを出なければなりません」を英語で？',
      options: ['You must leave here right now.', 'You must leaving here right now.', 'You must left here right now.', 'You must to leave here right now.'],
      answer: 'You must leave here right now.',
      explanation: 'must（助動詞）の後は必ず動詞の原形を使います。'
    },
    {
      question: '「ここで遊んではいけません」という強い禁止は？',
      options: ['You must not play here.', 'You should not play here.', 'You do not play here.', 'You are not play here.'],
      answer: 'You must not play here.',
      explanation: 'must not は「〜してはいけない」という強い禁止を表します。'
    },
    {
      question: '「あなたはもっと野菜を食べるべきだ」というアドバイスは？',
      options: ['You must eat more vegetables.', 'You should eat more vegetables.', 'You can eat more vegetables.', 'You would eat more vegetables.'],
      answer: 'You should eat more vegetables.',
      explanation: '「〜すべきだ」「〜した方がいい」というアドバイスには should を使います。'
    },
    {
      question: 'must be ... の意味は？（推量のとき）',
      options: ['〜しなければならない', '〜に違いない', '〜すべきだ', '〜かもしれない'],
      answer: '〜に違いない',
      explanation: 'must be ... は「〜に違いない」という強い確信を伴う推量を表すことがあります。'
    },
    {
      question: '「私は何をすべきですか？」を英語で？',
      options: ['What must I do?', 'What should I do?', 'What do I do?', 'What will I do?'],
      answer: 'What should I do?',
      explanation: '相手にアドバイスや助言を求めるときは What should I do? と言います。'
    }
  ]
};
