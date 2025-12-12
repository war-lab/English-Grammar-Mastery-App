
export const presentPerfectProgressive = {
  id: 'tense-present-perfect-progressive',
  isEnabled: true,
  title: '現在完了進行形 (Present Perfect Progressive)',
  description: '過去から現在まで継続している動作を詳しく表現します。【チャレンジレベル】',
  explanation: `
    <div class="explanation-section">
      <p>現在完了進行形は、<strong>過去のある時点から現在まで継続している動作</strong>を表す時制です。現在完了形よりも「動作が続いている」ことを強調します。</p>
      
      <div style="padding: 1rem; background: rgba(255, 150, 0, 0.1); border-left: 4px solid var(--accent); border-radius: 0.5rem; margin: 1rem 0;">
        <p style="margin: 0; font-weight: bold;">🎯 チャレンジレベル</p>
        <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem;">このレッスンは応用レベルです。現在完了形をしっかり理解してから取り組みましょう。</p>
      </div>

      <div class="diagram-container">
        <div style="text-align: center; margin: 2rem 0;">
          <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
            <div class="diagram-box" data-label="過去">⬅️</div>
            <div class="diagram-arrow">────🏃💨────</div>
            <div class="diagram-box" data-label="現在" style="border: 2px solid var(--primary);">📍</div>
          </div>
          <div style="margin-top: 1rem; font-weight: bold;">have/has been + V-ing</div>
          <div style="font-size: 0.9rem; color: var(--text-muted);">ずっと〜し続けている</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">現在完了進行形の作り方</h3>

      <div class="concept-box">
        <h4>📐 基本形：have/has been + 動詞の-ing形</h4>
        <p>現在完了進行形は<strong>have/has been + 動詞の-ing形</strong>で作ります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I have been studying</strong><br>（私はずっと勉強し続けている）</div>
          <div class="example-item"><strong>She has been working</strong><br>（彼女はずっと働き続けている）</div>
          <div class="example-item"><strong>They have been waiting</strong><br>（彼らはずっと待ち続けている）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>主語による使い分け：</strong></p>
        <ul class="check-list">
          <li>✓ I/You/We/They → <strong>have been</strong> + V-ing</li>
          <li>✓ He/She/It → <strong>has been</strong> + V-ing</li>
        </ul>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">現在完了形との違い</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
        <div class="concept-box">
          <h4 style="color: var(--primary);">現在完了形</h4>
          <p><strong>形式</strong>: have/has + 過去分詞</p>
          <p><strong>意味</strong>: 完了・経験・継続（状態）</p>
          <div class="example-box" style="margin-top: 1rem;">
            <p class="example-sentence">I have lived here for 5 years.</p>
            <p class="example-translation">私はここに5年間住んでいます。</p>
            <p class="example-note">→ 住んでいる<strong>状態</strong>が5年間継続</p>
          </div>
        </div>
        <div class="concept-box">
          <h4 style="color: var(--secondary);">現在完了進行形</h4>
          <p><strong>形式</strong>: have/has been + V-ing</p>
          <p><strong>意味</strong>: 継続（動作の進行）</p>
          <div class="example-box" style="margin-top: 1rem;">
            <p class="example-sentence">I have been studying for 5 hours.</p>
            <p class="example-translation">私は5時間勉強し続けています。</p>
            <p class="example-note">→ 勉強という<strong>動作</strong>が5時間継続</p>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">使い分けのポイント</h3>

      <div class="concept-box">
        <h4>🔑 継続の種類で使い分ける</h4>
        
        <p style="margin-top: 1rem;"><strong>1️⃣ 動作動詞（action verbs）の継続 → 現在完了進行形</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>study, work, play, wait, rain</strong> など<br>→ 動作が続いている</div>
        </div>
        <div class="example-box" style="margin-top: 0.5rem;">
          <p class="example-sentence">It has been raining since morning.</p>
          <p class="example-translation">朝からずっと雨が降り続けています。</p>
        </div>
        
        <p style="margin-top: 1.5rem;"><strong>2️⃣ 状態動詞（state verbs）の継続 → 現在完了形</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>live, know, have, be</strong> など<br>→ 状態が続いている</div>
        </div>
        <div class="example-box" style="margin-top: 0.5rem;">
          <p class="example-sentence">I have known him for 10 years.</p>
          <p class="example-translation">私は彼を10年間知っています。</p>
          <p class="example-note">※ know は状態動詞なので進行形にしない</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">I have been studying English for three hours.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(現在完了進行)</span> have been studying <span class="tag o-tag">O</span> English <span class="tag m-tag">(M)</span> for three hours</p>
        <p class="example-translation">私は3時間英語を勉強し続けています。</p>
        <p class="example-note">勉強という動作が3時間ずっと続いている。今もまだ勉強中。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She has been working here since 2020.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V(現在完了進行)</span> has been working <span class="tag m-tag">(M)</span> here since 2020</p>
        <p class="example-translation">彼女は2020年からここで働き続けています。</p>
        <p class="example-note">2020年から今まで働くという動作が続いている。She なので has been を使う。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">They have been waiting for two hours.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> They <span class="tag v-tag">V(現在完了進行)</span> have been waiting <span class="tag m-tag">(M)</span> for two hours</p>
        <p class="example-translation">彼らは2時間待ち続けています。</p>
        <p class="example-note">待つという動作が2時間継続。for（期間）とよく使う。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">He looks tired because he has been running.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V</span> looks tired <span class="tag m-tag">because</span> he has been running</p>
        <p class="example-translation">彼は走り続けているので疲れて見えます。</p>
        <p class="example-note">走るという動作の継続が、今の状態（疲れている）の原因になっている。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">for と since の復習</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
        <div class="concept-box">
          <h4 style="color: var(--primary);">📏 for（期間）</h4>
          <p>「〜の間」という<strong>期間</strong>を表します</p>
          <ul class="check-list">
            <li>✓ for 3 hours（3時間）</li>
            <li>✓ for 2 days（2日間）</li>
            <li>✓ for a long time（長い間）</li>
          </ul>
        </div>
        <div class="concept-box">
          <h4 style="color: var(--secondary);">📅 since（起点）</h4>
          <p>「〜以来」という<strong>起点</strong>を表します</p>
          <ul class="check-list">
            <li>✓ since 2020（2020年から）</li>
            <li>✓ since yesterday（昨日から）</li>
            <li>✓ since morning（朝から）</li>
          </ul>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 形式は<strong>have/has been + 動詞のing形</strong></li>
        <li>✓ 過去から現在まで<strong>動作が継続</strong>していることを表す</li>
        <li>✓ 現在完了形より「動き続けている感」が強い</li>
        <li>✓ 動作動詞（study, work, play など）でよく使う</li>
        <li>✓ 状態動詞（know, live など）は現在完了形を使う</li>
        <li>✓ for（期間）、since（起点）とよく使う</li>
      </ul>
    </div>
  `,
  examples: [
    'I have been studying for 3 hours.',
    'She has been working here since 2020.',
    'It has been raining all day.',
    'They have been waiting for a long time.',
    'He has been playing tennis since morning.'
  ],
  quiz: [
    {
      question: '現在完了進行形の形式は？',
      options: ['have/has + 過去分詞', 'have/has been + -ing形', 'am/is/are + -ing形', 'was/were + -ing形'],
      answer: 'have/has been + -ing形',
      explanation: '現在完了進行形は have/has been + 動詞の-ing形 で作ります。I have been studying, She has been working のように使います。'
    },
    {
      question: '主語が \"She\" のとき、現在完了進行形で使うのは？',
      options: ['have been', 'has been', 'had been', 'will have been'],
      answer: 'has been',
      explanation: '主語が三人称単数（He/She/It）のときは has been を使います。それ以外（I/You/We/They）は have been を使います。'
    },
    {
      question: '「私は3時間勉強し続けています」を英語で表すと？',
      options: ['I study for 3 hours.', 'I have studied for 3 hours.', 'I have been studying for 3 hours.', 'I am studying for 3 hours.'],
      answer: 'I have been studying for 3 hours.',
      explanation: '過去から現在まで動作が継続していることを強調するので現在完了進行形を使います。have been studying が正しい形です。'
    },
    {
      question: '現在完了進行形が表すのはどれですか？',
      options: ['完了した過去の動作', '過去から現在まで継続している動作', 'ふだんの習慣', '未来の予定'],
      answer: '過去から現在まで継続している動作',
      explanation: '現在完了進行形は「過去から現在まで動作が継続していること」を表します。動き続けている感じを強調します。'
    },
    {
      question: '次のうち、現在完了進行形でよく使う動詞はどれですか？',
      options: ['know（知っている）', 'like（好きだ）', 'study（勉強する）', 'be（〜である）'],
      answer: 'study（勉強する）',
      explanation: 'study は動作動詞なので現在完了進行形でよく使います。know, like, be は状態動詞なので通常は現在完了形を使います。'
    },
    {
      question: '「彼女は2020年からここで働き続けています」を英語で表すと？',
      options: ['She works here since 2020.', 'She has worked here since 2020.', 'She has been working here since 2020.', 'She is working here since 2020.'],
      answer: 'She has been working here since 2020.',
      explanation: '働くという動作が2020年から今まで続いているので現在完了進行形を使います。She なので has been working です。'
    },
    {
      question: '「朝からずっと雨が降り続けています」を英語で表すと？',
      options: ['It rains since morning.', 'It has rained since morning.', 'It has been raining since morning.', 'It is raining since morning.'],
      answer: 'It has been raining since morning.',
      explanation: '雨が降るという動作が朝から継続しているので現在完了進行形を使います。rain は動作動詞なので進行形にできます。'
    },
    {
      question: '次のうち、正しい文はどれですか？',
      options: ['I have been knowing him for 10 years.', 'I have known him for 10 years.', 'I am knowing him for 10 years.', 'I know him for 10 years.'],
      answer: 'I have known him for 10 years.',
      explanation: 'know は状態動詞なので進行形にしません。状態の継続は現在完了形（have known）で表します。'
    },
    {
      question: '現在完了形と現在完了進行形の使い分けで正しいのは？',
      options: ['両方とも全く同じ意味', '動作動詞の継続は現在完了進行形、状態動詞の継続は現在完了形', '現在完了進行形の方が古い表現', '主語によって使い分ける'],
      answer: '動作動詞の継続は現在完了進行形、状態動詞の継続は現在完了形',
      explanation: '動作動詞（study, work など）の継続は現在完了進行形、状態動詞（know, live など）の継続は現在完了形を使います。'
    },
    {
      question: '「彼らは長い間待ち続けています」を英語で表すと？',
      options: ['They wait for a long time.', 'They have waited for a long time.', 'They have been waiting for a long time.', 'They are waiting for a long time.'],
      answer: 'They have been waiting for a long time.',
      explanation: '待つという動作が長い間継続しているので現在完了進行形を使います。They なので have been waiting です。'
    }
  ]
};
