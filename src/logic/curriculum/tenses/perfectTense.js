
export const perfectTense = {
  id: 'tense-perfect',
  isEnabled: true,
  title: '完了形 (Perfect Tense)',
  description: '過去から現在までの完了・経験・継続を表す時制です。',
  explanation: `
    <div class="explanation-section">
      <p>完了形は、<strong>過去のある時点から特定の時点までの動作や状態</strong>を表現する時制です。「〜したことがある」「〜してしまった」「〜し続けている」という意味になります。</p>
      
      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0;">
          <div class="diagram-box" data-label="過去">⬅️</div>
          <div class="diagram-arrow">────────</div>
          <div class="diagram-box" data-label="現在" style="border: 2px solid var(--primary);">📍</div>
          <div style="text-align: center; margin-left: 1rem;">
            <div style="font-weight: bold;">have/has + 過去分詞</div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">過去から現在への繋がり</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">完了形の作り方</h3>

      <div class="concept-box">
        <h4>📐 基本形：have/has + 過去分詞</h4>
        <p>完了形は<strong>have/has + 動詞の過去分詞形</strong>で作ります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I have played</strong><br>（私は〜したことがある）</div>
          <div class="example-item"><strong>She has finished</strong><br>（彼女は〜し終えた）</div>
          <div class="example-item"><strong>They have lived</strong><br>（彼らは〜住んでいる）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>主語による使い分け：</strong></p>
        <ul class="check-list">
          <li>✓ I/You/We/They → <strong>have</strong></li>
          <li>✓ He/She/It → <strong>has</strong></li>
        </ul>
      </div>

      <div class="concept-box">
        <h4>✏️ 過去分詞の作り方</h4>
        
        <p style="margin-top: 1rem;"><strong>1️⃣ 規則動詞：-ed をつける（過去形と同じ）</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>play → played</strong></div>
          <div class="example-item"><strong>finish → finished</strong></div>
          <div class="example-item"><strong>visit → visited</strong></div>
        </div>
        
        <p style="margin-top: 1rem;"><strong>2️⃣ 不規則動詞：独自の形（暗記が必要）</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>go → gone</strong></div>
          <div class="example-item"><strong>eat → eaten</strong></div>
          <div class="example-item"><strong>see → seen</strong></div>
          <div class="example-item"><strong>make → made</strong></div>
          <div class="example-item"><strong>take → taken</strong></div>
          <div class="example-item"><strong>write → written</strong></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">完了形の3つの意味</h3>

      <div class="concept-box">
        <h4>✅ 1. 完了（〜してしまった / 〜し終えた）</h4>
        <p>動作がすでに<strong>完了している</strong>ことを表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I have finished my homework.</strong><br>（私は宿題を終えました）<br>→ もう完了している</div>
          <div class="example-item"><strong>She has already left.</strong><br>（彼女はもう出発しました）<br>→ 出発が完了</div>
        </div>
        <p style="margin-top: 0.5rem;">よく使う語：<strong>just</strong>（ちょうど）、<strong>already</strong>（すでに）、<strong>yet</strong>（まだ/もう）</p>
      </div>

      <div class="concept-box">
        <h4>🌍 2. 経験（〜したことがある）</h4>
        <p>過去の<strong>経験</strong>を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I have been to Tokyo.</strong><br>（私は東京に行ったことがある）<br>→ 経験がある</div>
          <div class="example-item"><strong>He has never seen snow.</strong><br>（彼は雪を見たことがない）<br>→ 経験がない</div>
        </div>
        <p style="margin-top: 0.5rem;">よく使う語：<strong>ever</strong>（今までに）、<strong>never</strong>（一度も〜ない）、<strong>once/twice</strong>（一度/二度）、<strong>before</strong>（以前に）</p>
      </div>

      <div class="concept-box">
        <h4>⏱️ 3. 継続（〜し続けている）</h4>
        <p>過去から現在まで<strong>継続している状態</strong>を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I have lived here for 5 years.</strong><br>（私はここに5年間住んでいます）<br>→ 5年前から今も継続</div>
          <div class="example-item"><strong>She has known him since 2010.</strong><br>（彼女は2010年から彼を知っている）<br>→ 2010年から今も継続</div>
        </div>
        <p style="margin-top: 0.5rem;">よく使う語：<strong>for</strong>（〜間）、<strong>since</strong>（〜以来、〜から）</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I have just finished my homework.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(現在完了)</span> have finished <span class="tag o-tag">O</span> my homework</p>
        <p class="example-translation">私はちょうど宿題を終えたところです。</p>
        <p class="example-note">完了の意味。justは「ちょうど」という意味で、完了したばかりであることを強調します。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She has visited Tokyo three times.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V(現在完了)</span> has visited <span class="tag o-tag">O</span> Tokyo <span class="tag m-tag">(M)</span> three times</p>
        <p class="example-translation">彼女は東京を3回訪れたことがあります。</p>
        <p class="example-note">経験の意味。three times（3回）は経験の回数を表します。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">They have lived in Japan for ten years.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> They <span class="tag v-tag">V(現在完了)</span> have lived <span class="tag m-tag">(M)</span> in Japan <span class="tag m-tag">(M)</span> for ten years</p>
        <p class="example-translation">彼らは日本に10年間住んでいます。</p>
        <p class="example-note">継続の意味。for ten years（10年間）は期間を表し、今も住み続けています。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">He has never eaten sushi.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V(現在完了)</span> has eaten <span class="tag o-tag">O</span> sushi</p>
        <p class="example-translation">彼は寿司を食べたことがありません。</p>
        <p class="example-note">経験の否定。never（一度も〜ない）で経験がないことを表します。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">for と since の使い分け</h3>
      <div class="concept-box">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div>
            <h4 style="color: var(--primary);">📏 for（期間）</h4>
            <p>「〜の間」という<strong>期間</strong>を表します</p>
            <ul class="check-list">
              <li>✓ for 5 years（5年間）</li>
              <li>✓ for three months（3ヶ月間）</li>
              <li>✓ for a long time（長い間）</li>
            </ul>
          </div>
          <div>
            <h4 style="color: var(--secondary);">📅 since（起点）</h4>
            <p>「〜以来」という<strong>起点</strong>を表します</p>
            <ul class="check-list">
              <li>✓ since 2020（2020年から）</li>
              <li>✓ since last year（去年から）</li>
              <li>✓ since I was young（若い頃から）</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 完了形は<strong>have/has + 過去分詞</strong></li>
        <li>✓ 3つの意味：<strong>完了・経験・継続</strong></li>
        <li>✓ 主語が3人称単数（He/She/It）なら has</li>
        <li>✓ 過去分詞は規則動詞なら -ed、不規則動詞は暗記</li>
        <li>✓ for は期間、since は起点</li>
        <li>✓ just, already, yet, ever, never などと一緒によく使う</li>
      </ul>
    </div>
  `,
  examples: [
    'I have visited Kyoto twice.',
    'She has already finished her work.',
    'We have lived here since 2015.',
    'He has never been to America.',
    'They have just arrived.'
  ],
  quiz: [
    {
      question: '現在完了形の基本形は？',
      options: ['have/has + 過去形', 'have/has + 過去分詞', 'be動詞 + -ing形', 'will + 動詞の原形'],
      answer: 'have/has + 過去分詞',
      explanation: '現在完了形は have/has + 過去分詞 で作ります。I have played, She has finished のように使います。'
    },
    {
      question: '主語が "She" のとき、現在完了形で使うのは？',
      options: ['have', 'has', 'had', 'having'],
      answer: 'has',
      explanation: '主語が3人称単数（He/She/It）のときは has を使います。それ以外（I/You/We/They）は have を使います。'
    },
    {
      question: '動詞 "go" の過去分詞形は？',
      options: ['went', 'goed', 'gone', 'going'],
      answer: 'gone',
      explanation: 'go の過去分詞は不規則変化で gone です。went は過去形、going は現在分詞/動名詞です。'
    },
    {
      question: '「私は東京に行ったことがあります」を英語で表すと？',
      options: ['I went to Tokyo.', 'I go to Tokyo.', 'I have been to Tokyo.', 'I am going to Tokyo.'],
      answer: 'I have been to Tokyo.',
      explanation: '「〜したことがある」という経験を表すには現在完了形を使います。have been to で「〜に行ったことがある」という意味です。'
    },
    {
      question: '次のうち、「期間」を表すのはどれですか？',
      options: ['since 2020', 'for 5 years', 'since last year', 'since yesterday'],
      answer: 'for 5 years',
      explanation: 'for は「〜の間」という期間を表します。since は「〜以来」という起点を表します。'
    },
    {
      question: '「彼女はもう宿題を終えました」を英語で表すと？',
      options: ['She finished her homework already.', 'She has already finished her homework.', 'She is finishing her homework already.', 'She will finish her homework already.'],
      answer: 'She has already finished her homework.',
      explanation: '「もう〜してしまった」という完了の意味を表すには現在完了形を使います。already（すでに）は完了を強調する語です。'
    },
    {
      question: '動詞 "eat" の過去分詞形は？',
      options: ['ate', 'eated', 'eaten', 'eating'],
      answer: 'eaten',
      explanation: 'eat の過去分詞は不規則変化で eaten です。ate は過去形、eating は現在分詞/動名詞です。'
    },
    {
      question: '「私は5年間ここに住んでいます」を英語で表すと？',
      options: ['I live here for 5 years.', 'I lived here for 5 years.', 'I have lived here for 5 years.', 'I am living here for 5 years.'],
      answer: 'I have lived here for 5 years.',
      explanation: '過去から現在まで継続していることを表すには現在完了形を使います。for 5 years（5年間）は期間を表します。'
    },
    {
      question: '次のうち、経験を表す現在完了形として正しいのは？',
      options: ['I have seen that movie three times.', 'I see that movie three times.', 'I saw that movie three times.', 'I will see that movie three times.'],
      answer: 'I have seen that movie three times.',
      explanation: '「〜したことがある」という経験を表すには現在完了形を使います。three times（3回）は経験の回数です。'
    },
    {
      question: '「彼は一度も雪を見たことがない」を英語で表すと？',
      options: ['He never sees snow.', 'He never saw snow.', 'He has never seen snow.', 'He will never see snow.'],
      answer: 'He has never seen snow.',
      explanation: '「一度も〜したことがない」という経験の否定を表すには、現在完了形 + never を使います。'
    }
  ]
};
