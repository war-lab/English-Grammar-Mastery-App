
export const pastTense = {
  id: 'tense-past',
  isEnabled: true,
  title: '過去形 (Past Tense)',
  description: '過去に起こった出来事や状態を表す時制です。',
  explanation: `
    <div class="explanation-section">
      <p>過去形は、<strong>過去に起こった動作や状態</strong>を表現する時制です。「〜した」「〜だった」という意味になります。</p>
      
      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center; opacity: 0.5;">
            <div style="font-size: 2rem;">⬅️</div>
            <div style="font-weight: bold; color: var(--primary);">過去 (Past)</div>
            <div style="font-size: 0.9rem; margin-top: 0.5rem;">played / went</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 1.5rem;">⬇️</div>
            <div style="font-weight: bold; color: var(--text-muted);">現在 (Present)</div>
            <div style="font-size: 0.8rem;">play / go</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">過去形の作り方</h3>

      <div class="concept-box">
        <h4>📝 規則動詞（Regular Verbs）</h4>
        <p>動詞の原形に <strong>-ed</strong> をつけます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>play → played</strong><br>（遊ぶ → 遊んだ）</div>
          <div class="example-item"><strong>walk → walked</strong><br>（歩く → 歩いた）</div>
          <div class="example-item"><strong>work → worked</strong><br>（働く → 働いた）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>注意点：</strong></p>
        <ul class="check-list">
          <li>✓ eで終わる動詞は -d のみ追加（love → loved）</li>
          <li>✓ 子音+yで終わる動詞は y を i に変えて -ed（study → studied）</li>
          <li>✓ 短母音+子音で終わる動詞は子音を重ねる（stop → stopped）</li>
        </ul>
      </div>

      <div class="concept-box">
        <h4>🔄 不規則動詞（Irregular Verbs）</h4>
        <p>決まった形に変化します。覚える必要があります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>go → went</strong><br>（行く → 行った）</div>
          <div class="example-item"><strong>eat → ate</strong><br>（食べる → 食べた）</div>
          <div class="example-item"><strong>see → saw</strong><br>（見る → 見た）</div>
          <div class="example-item"><strong>make → made</strong><br>（作る → 作った）</div>
          <div class="example-item"><strong>have → had</strong><br>（持つ → 持っていた）</div>
          <div class="example-item"><strong>come → came</strong><br>（来る → 来た）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔵 be動詞の過去形</h4>
        <p>主語によって形が変わります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I/He/She/It → was</strong></div>
          <div class="example-item"><strong>You/We/They → were</strong></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I played tennis yesterday.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(過去)</span> played <span class="tag o-tag">O</span> tennis <span class="tag m-tag">(M)</span> yesterday</p>
        <p class="example-translation">私は昨日テニスをしました。</p>
        <p class="example-note">規則動詞 play に -ed をつけて過去形に。yesterdayは過去を示す時間表現です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She went to school this morning.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V(過去)</span> went <span class="tag m-tag">(M)</span> to school this morning</p>
        <p class="example-translation">彼女は今朝学校へ行きました。</p>
        <p class="example-note">不規則動詞 go の過去形は went。「今朝」というのは現在より前の時間なので過去形を使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">He was a teacher ten years ago.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V(過去)</span> was <span class="tag c-tag">C</span> a teacher <span class="tag m-tag">(M)</span> ten years ago</p>
        <p class="example-translation">彼は10年前、教師でした。</p>
        <p class="example-note">be動詞の過去形。He/She/Itの主語には was を使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">They studied English last night.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> They <span class="tag v-tag">V(過去)</span> studied <span class="tag o-tag">O</span> English <span class="tag m-tag">(M)</span> last night</p>
        <p class="example-translation">彼らは昨夜英語を勉強しました。</p>
        <p class="example-note">study は子音+y で終わるので、y を i に変えて -ed をつけます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">過去形でよく使う時間表現</h3>
      <div class="concept-box">
        <div class="example-grid">
          <div class="example-item">⏰ <strong>yesterday</strong> (昨日)</div>
          <div class="example-item">⏰ <strong>last night/week/month/year</strong> (昨夜/先週/先月/去年)</div>
          <div class="example-item">⏰ <strong>ago</strong> (〜前)</div>
          <div class="example-item">⏰ <strong>in 2020</strong> (2020年に)</div>
          <div class="example-item">⏰ <strong>this morning</strong> (今朝)</div>
          <div class="example-item">⏰ <strong>when I was young</strong> (若い頃)</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 過去の出来事には<strong>過去形</strong>を使う</li>
        <li>✓ 規則動詞は -ed をつける</li>
        <li>✓ 不規則動詞は形を覚える必要がある</li>
        <li>✓ 時間を表す言葉（yesterday, last week など）と一緒に使うことが多い</li>
        <li>✓ be動詞の過去形は was/were の2種類</li>
      </ul>
    </div>
  `,
  examples: [
    'I watched TV last night.',
    'She visited Tokyo last year.',
    'We were happy yesterday.',
    'He made a cake this morning.',
    'They came to Japan in 2020.'
  ],
  quiz: [
    {
      question: '動詞 "play" の過去形は？',
      options: ['plaied', 'played', 'playd', 'plays'],
      answer: 'played',
      explanation: '規則動詞 play は -ed をつけて played になります。plaiedやplaydは誤りです。playsは3人称単数現在形です。'
    },
    {
      question: '不規則動詞 "go" の過去形は？',
      options: ['goed', 'went', 'gone', 'going'],
      answer: 'went',
      explanation: 'go の過去形は不規則変化で went です。goedは存在しません。goneは過去分詞、goingは現在分詞/動名詞です。'
    },
    {
      question: '次の文で正しい過去形はどれですか？ "I ___ a book yesterday."',
      options: ['read', 'readed', 'reads', 'reading'],
      answer: 'read',
      explanation: 'read の過去形は read です（発音は異なりますが綴りは同じ）。readedという形は存在しません。readsは3人称単数現在形、readingは現在分詞です。'
    },
    {
      question: 'be動詞の過去形で、主語が "I" のときは？',
      options: ['am', 'is', 'was', 'were'],
      answer: 'was',
      explanation: 'I の過去形は was です。am は現在形、is は3人称単数現在形、were は複数形または you の過去形です。'
    },
    {
      question: '「彼らは昨日幸せでした」を英語で表すと？',
      options: ['They are happy yesterday.', 'They was happy yesterday.', 'They were happy yesterday.', 'They be happy yesterday.'],
      answer: 'They were happy yesterday.',
      explanation: '主語が They（複数）の場合、be動詞の過去形は were です。yesterdayがあるので過去形を使います。wasは単数形、areは現在形です。'
    },
    {
      question: '動詞 "study" の過去形は？',
      options: ['studyed', 'studied', 'studyd', 'studies'],
      answer: 'studied',
      explanation: 'study は子音+y で終わるので、y を i に変えて -ed をつけ studied になります。studyedやstudydは誤りです。studiesは3人称単数現在形です。'
    },
    {
      question: '次のうち、過去形として正しい文はどれですか？',
      options: ['I go to school yesterday.', 'I goed to school yesterday.', 'I went to school yesterday.', 'I going to school yesterday.'],
      answer: 'I went to school yesterday.',
      explanation: 'yesterday（昨日）があるので過去形を使います。go の過去形は went です。goは現在形、goedは不規則動詞なので誤り、goingは現在分詞です。'
    },
    {
      question: '「彼女は先週映画を見ました」を英語で表すと？',
      options: ['She see a movie last week.', 'She saw a movie last week.', 'She seen a movie last week.', 'She sees a movie last week.'],
      answer: 'She saw a movie last week.',
      explanation: 'see の過去形は不規則変化で saw です。last week（先週）があるので過去形を使います。seenは過去分詞、seeは現在形、seesは3人称単数現在形です。'
    },
    {
      question: '動詞 "stop" の過去形は？',
      options: ['stoped', 'stopped', 'stopd', 'stops'],
      answer: 'stopped',
      explanation: 'stop は短母音+子音で終わるので、最後の p を重ねて -ed をつけ stopped になります。stopedは誤りです。stopsは3人称単数現在形です。'
    },
    {
      question: '次のうち、不規則動詞の過去形として正しいのはどれですか？',
      options: ['maked', 'maded', 'made', 'makes'],
      answer: 'made',
      explanation: 'make の過去形は不規則変化で made です。makedやmadedという形は存在しません。makesは3人称単数現在形です。'
    }
  ]
};
