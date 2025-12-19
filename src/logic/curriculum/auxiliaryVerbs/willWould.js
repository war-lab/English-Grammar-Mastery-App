
export const willWould = {
  id: 'aux-will-would',
  isEnabled: true,
  title: 'will / would',
  description: '意志、未来、丁寧な依頼を表す助動詞です。',
  explanation: `
    <div class="explanation-section">
      <p><strong>will/would</strong>は、未来のことや自分の意志を伝えるだけでなく、相手に丁寧に何かを頼むときにも使われます。</p>
      
      <div class="concept-box">
        <h4>🔮 1. 意志・未来「〜するつもりだ / 〜だろう」</h4>
        <p>その場で決めた意志や、未来の予測を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I will call you later.</strong><br>（後で電話するね）</div>
          <div class="example-item"><strong>It will rain tomorrow.</strong><br>（明日は雨だろう）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>☕ 2. 勧誘・依頼「〜しませんか？ / 〜してくれますか？」</h4>
        <p>相手に何かを勧めたり、頼んだりします。<strong>Would you...?</strong> の方がより丁寧です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Will you have some coffee?</strong><br>（コーヒーはいかが？）</div>
          <div class="example-item"><strong>Would you like some tea?</strong><br>（お茶はいかがですか？）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🕊️ 3. 丁寧な依頼「〜していただけますか？」</h4>
        <p><strong>Would you...?</strong> は、<strong>Will you...?</strong> よりも距離を置いた、非常に丁寧な響きになります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Would you open the door?</strong><br>（ドアを開けていただけますか？）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I'll do my best.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> 'll do <span class="tag o-tag">O</span> my best</p>
        <p class="example-translation">最善を尽くします。</p>
        <p class="example-note">I'll は I will の短縮形です。強い意志を表します。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Would you like to join us?</p>
        <p class="example-breakdown"><span class="tag v-tag">V</span> Would <span class="tag s-tag">S</span> you like to join <span class="tag o-tag">O</span> us</p>
        <p class="example-translation">私たちに参加しませんか？</p>
        <p class="example-note">Would you like to...? は「〜したいですか？（丁寧）」という勧誘の定番表現です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ willの後は動詞の原形</li>
        <li>✓ 否定形は <strong>will not (won't)</strong> / <strong>would not (wouldn't)</strong></li>
        <li>✓ 丁寧な勧誘には <strong>Would you like...?</strong></li>
        <li>✓ 丁寧な依頼には <strong>Would you...?</strong></li>
      </ul>
    </div>
  `,
  examples: [
    'I will help you.',
    'It will be fine tomorrow.',
    'Will you pass me the salt?',
    'Would you mind waiting a moment?',
    'I would like a cup of coffee.'
  ],
  quiz: [
    {
      question: '「私は明日あなたを訪ねるつもりです」を英語で？',
      options: ['I will visiting you tomorrow.', 'I will visit you tomorrow.', 'I would visit you tomorrow.', 'I visits you tomorrow.'],
      answer: 'I will visit you tomorrow.',
      explanation: '未来の意志を表すには will + 動詞の原形を使います。'
    },
    {
      question: '「お茶はいかがですか？」という丁寧な勧誘表現は？',
      options: ['Will you like some tea?', 'Would you like some tea?', 'Do you like any tea?', 'Are you like some tea?'],
      answer: 'Would you like some tea?',
      explanation: 'Would you like ...? は（丁寧な）「〜はいかがですか？」という勧誘の表現です。'
    },
    {
      question: 'will not の短縮形は？',
      options: ["willn't", "won't", "don't will", "not will"],
      answer: "won't",
      explanation: 'will not の短縮形は won\'t です。'
    },
    {
      question: '「ドアを閉めていただけますか？」という非常に丁寧な依頼は？',
      options: ['Will you close the door?', 'Would you close the door?', 'Can you close the door?', 'Are you close the door?'],
      answer: 'Would you close the door?',
      explanation: 'Would you...? は Will you...? よりもさらに丁寧な依頼の表現になります。'
    },
    {
      question: '「私は〜したいです」という丁寧な表現は？',
      options: ['I would like to...', 'I will like to...', 'I am like to...', 'I want like to...'],
      answer: 'I would like to...',
      explanation: 'I would like to ... は I want to ... の丁寧な言い方です。'
    }
  ]
};
