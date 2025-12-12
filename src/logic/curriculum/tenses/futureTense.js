
export const futureTense = {
  id: 'tense-future',
  isEnabled: true,
  title: '未来形 (Future Tense)',
  description: 'これから起こることや未来の予定を表す時制です。',
  explanation: `
    <div class="explanation-section">
      <p>未来形は、<strong>これから起こること、未来の予定や意志</strong>を表現する時制です。「〜するだろう」「〜する予定だ」という意味になります。</p>
      
      <div style="padding: 1rem; background: rgba(100, 150, 255, 0.1); border-left: 4px solid var(--secondary); border-radius: 0.5rem; margin: 1rem 0;">
        <p style="margin: 0; font-weight: bold;">📚 中学生の学習ポイント</p>
        <p style="margin: 0.5rem 0; font-size: 0.9rem;"><strong>重点：</strong> will と be going to の使い分けをしっかり理解しましょう。</p>
        <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;"><strong>発展：</strong> 現在進行形・現在形による未来は「こういう表現もある」程度で大丈夫です。</p>
      </div>
      
      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center;">
            <div style="font-size: 1.5rem;">⬇️</div>
            <div style="font-weight: bold; color: var(--text-muted);">現在 (Present)</div>
            <div style="font-size: 0.8rem;">play / go</div>
          </div>
          <div style="text-align: center; opacity: 0.5;">
            <div style="font-size: 2rem;">➡️</div>
            <div style="font-weight: bold; color: var(--secondary);">未来 (Future)</div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem;">will play / will go</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">【必須】基本の未来形</h3>

      <div class="concept-box">
        <h4>🔮 1. will + 動詞の原形</h4>
        <p>最も基本的な未来表現。<strong>will</strong> の後は必ず動詞の原形を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I will play</strong><br>（私は〜するだろう）</div>
          <div class="example-item"><strong>She will go</strong><br>（彼女は〜するだろう）</div>
          <div class="example-item"><strong>They will study</strong><br>（彼らは〜するだろう）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>短縮形：</strong></p>
        <ul class="check-list">
          <li>✓ I will → I'll / She will → She'll</li>
          <li>✓ will not → won't（否定形）</li>
        </ul>
      </div>

      <div class="concept-box">
        <h4>📅 2. be going to + 動詞の原形</h4>
        <p><strong>予定や計画</strong>を表す未来表現。「〜する予定だ」「〜しようとしている」</p>
        <div class="example-grid">
          <div class="example-item"><strong>I am going to play</strong><br>（私は〜する予定だ）</div>
          <div class="example-item"><strong>He is going to study</strong><br>（彼は〜する予定だ）</div>
          <div class="example-item"><strong>We are going to visit</strong><br>（私たちは〜する予定だ）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 will と be going to の使い分け（重要！）</strong></p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 0.5rem;">
          <div style="padding: 0.75rem; background: rgba(255, 100, 100, 0.1); border-radius: 0.5rem;">
            <p style="margin: 0; font-weight: bold;">🔮 will</p>
            <ul class="check-list" style="margin-top: 0.5rem;">
              <li>✓ その場で決めた意志</li>
              <li>✓ 予測・推量</li>
              <li>✓ 「今思いついた」感覚</li>
            </ul>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; font-style: italic;">例：のどが渇いた。水を買おう。<br>→ I will buy water.</p>
          </div>
          <div style="padding: 0.75rem; background: rgba(100, 100, 255, 0.1); border-radius: 0.5rem;">
            <p style="margin: 0; font-weight: bold;">📅 be going to</p>
            <ul class="check-list" style="margin-top: 0.5rem;">
              <li>✓ 以前から決めていた予定</li>
              <li>✓ 計画していたこと</li>
              <li>✓ 根拠のある予測</li>
            </ul>
            <p style="margin-top: 0.5rem; font-size: 0.85rem; font-style: italic;">例：週末の計画を話す<br>→ I'm going to visit my grandma.</p>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">【発展】その他の未来表現</h3>
      
      <div style="padding: 1rem; background: rgba(150, 150, 150, 0.1); border-radius: 0.5rem; margin-bottom: 1rem;">
        <p style="margin: 0; font-size: 0.9rem;">💡 <strong>学習のヒント：</strong> 以下の表現は「こういう使い方もある」程度で覚えておけば十分です。テストでは will と be going to の使い分けが中心です。</p>
      </div>

      <div class="concept-box">
        <h4>🏃 現在進行形で未来を表す</h4>
        <p>近い未来の<strong>確定した予定</strong>（約束・予約など）に使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I'm meeting him tomorrow.</strong><br>（明日彼に会う予定だ）<br>→ すでに約束している</div>
          <div class="example-item"><strong>We're having a party next week.</strong><br>（来週パーティーをします）<br>→ もう決まっている</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>📅 現在形で未来を表す</h4>
        <p>時刻表やスケジュールなど、<strong>確定した予定</strong>に使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>The train leaves at 8.</strong><br>（電車は8時に出発する）<br>→ 時刻表の予定</div>
          <div class="example-item"><strong>The concert starts at 7 PM.</strong><br>（コンサートは午後7時に始まる）<br>→ 公式スケジュール</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I will study English tomorrow.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(未来)</span> will study <span class="tag o-tag">O</span> English <span class="tag m-tag">(M)</span> tomorrow</p>
        <p class="example-translation">私は明日英語を勉強するつもりです。</p>
        <p class="example-note">will + 動詞の原形で未来を表します。tomorrowは未来を示す時間表現です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She is going to visit Tokyo next week.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V(未来)</span> is going to visit <span class="tag o-tag">O</span> Tokyo <span class="tag m-tag">(M)</span> next week</p>
        <p class="example-translation">彼女は来週東京を訪れる予定です。</p>
        <p class="example-note">be going toは以前から計画していた予定を表します。next weekは「来週」という未来の時間表現です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">It will be sunny tomorrow.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> It <span class="tag v-tag">V(未来)</span> will be <span class="tag c-tag">C</span> sunny <span class="tag m-tag">(M)</span> tomorrow</p>
        <p class="example-translation">明日は晴れるでしょう。</p>
        <p class="example-note">天気予報などの予測を表すときはwillを使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">We won't go to school next Monday.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> We <span class="tag v-tag">V(未来否定)</span> won't go <span class="tag m-tag">(M)</span> to school next Monday</p>
        <p class="example-translation">私たちは来週の月曜日学校に行きません。</p>
        <p class="example-note">won't は will not の短縮形で、未来の否定を表します。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">未来形でよく使う時間表現</h3>
      <div class="concept-box">
        <div class="example-grid">
          <div class="example-item">⏰ <strong>tomorrow</strong> (明日)</div>
          <div class="example-item">⏰ <strong>next week/month/year</strong> (来週/来月/来年)</div>
          <div class="example-item">⏰ <strong>soon</strong> (すぐに)</div>
          <div class="example-item">⏰ <strong>in the future</strong> (将来)</div>
          <div class="example-item">⏰ <strong>later</strong> (後で)</div>
          <div class="example-item">⏰ <strong>someday</strong> (いつか)</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 未来のことには<strong>will</strong>または<strong>be going to</strong>を使う</li>
        <li>✓ will/be going to の後は<strong>必ず動詞の原形</strong></li>
        <li>✓ willはその場で決めた意志、be going toは計画していた予定</li>
        <li>✓ 否定形は won't（will not）</li>
        <li>✓ 時刻表などの確定した予定は現在形でも表せる</li>
      </ul>
    </div>
  `,
  examples: [
    'I will go to Japan next year.',
    'She is going to buy a new car.',
    'It will rain tomorrow.',
    "We won't be late.",
    'The concert starts at 7 PM tonight.'
  ],
  quiz: [
    {
      question: '未来形の文を作るとき、willの後に来る動詞の形は？',
      options: ['過去形', '原形', '現在形（三単現のs）', '進行形'],
      answer: '原形',
      explanation: 'willの後は必ず動詞の原形を使います。will play, will go のように、動詞は変化させません。'
    },
    {
      question: '「私は明日テニスをします」を英語で表すと？',
      options: ['I play tennis tomorrow.', 'I will play tennis tomorrow.', 'I played tennis tomorrow.', 'I playing tennis tomorrow.'],
      answer: 'I will play tennis tomorrow.',
      explanation: 'tomorrow（明日）は未来を表すので、will + 動詞の原形を使います。現在形や過去形は誤りです。'
    },
    {
      question: 'will notの短縮形は？',
      options: ["willn't", "won't", "willn't", "wouldn't"],
      answer: "won't",
      explanation: "will notの短縮形はwon'tです。wouldn'tはwould notの短縮形で、過去の推量や丁寧な依頼に使います。"
    },
    {
      question: '「彼女は来週東京に行く予定です」を英語で表すと？（以前から決めていた予定）',
      options: ['She will go to Tokyo next week.', 'She is going to go to Tokyo next week.', 'She goes to Tokyo next week.', 'She went to Tokyo next week.'],
      answer: 'She is going to go to Tokyo next week.',
      explanation: '以前から計画していた予定を表すときは be going to を使います。willも使えますが、be going toの方がより計画性を強調します。'
    },
    {
      question: '次のうち、未来を表す時間表現はどれですか？',
      options: ['yesterday', 'last week', 'tomorrow', 'ago'],
      answer: 'tomorrow',
      explanation: 'tomorrow（明日）は未来を表す時間表現です。yesterday（昨日）、last week（先週）、ago（〜前）は過去を表します。'
    },
    {
      question: '「明日は雨が降るでしょう」を英語で表すと？',
      options: ['It rains tomorrow.', 'It rained tomorrow.', 'It will rain tomorrow.', 'It is rain tomorrow.'],
      answer: 'It will rain tomorrow.',
      explanation: '天気予報などの予測にはwillを使います。「It will rain」で「雨が降るでしょう」という意味になります。'
    },
    {
      question: 'willとbe going toの使い分けで正しいのは？',
      options: ['willは過去、be going toは未来', '両方とも全く同じ意味で使い分けはない', 'willはその場の決定、be going toは計画していた予定', 'willは疑問文、be going toは否定文'],
      answer: 'willはその場の決定、be going toは計画していた予定',
      explanation: 'willはその場で決めた意志や予測に使い、be going toは以前から計画していた予定や確実な予測に使います。ニュアンスの違いがあります。'
    },
    {
      question: '「私たちは明日学校に行きません」を英語で表すと？',
      options: ["We don't go to school tomorrow.", "We won't go to school tomorrow.", "We didn't go to school tomorrow.", "We aren't go to school tomorrow."],
      answer: "We won't go to school tomorrow.",
      explanation: '未来の否定はwon\'t（will not）を使います。tomorrow（明日）があるので未来形が必要です。'
    },
    {
      question: '次のうち、未来の予定を表すのに適切でない文はどれですか？',
      options: ['I will visit Tokyo.', 'I am going to visit Tokyo.', 'I am visiting Tokyo tomorrow.', 'I visited Tokyo tomorrow.'],
      answer: 'I visited Tokyo tomorrow.',
      explanation: 'visited（過去形）とtomorrow（未来）は矛盾するので誤りです。他の3つはすべて未来の予定を表す正しい表現です。'
    },
    {
      question: '「電車は8時に出発します」のように時刻表の予定を表すときは？',
      options: ['過去形を使う', '現在形を使うことができる', '必ずwillを使う', '必ずbe going toを使う'],
      answer: '現在形を使うことができる',
      explanation: '時刻表やスケジュールなどの確定した予定は現在形で表すことができます。「The train leaves at 8.」のように使います。'
    }
  ]
};
