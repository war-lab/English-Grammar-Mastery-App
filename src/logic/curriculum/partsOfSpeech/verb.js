
export const verb = {
  id: 'pos-verb',
  isEnabled: true,
  title: '動詞 (Verb)',
  description: '動作や状態を表す言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>動詞は、主語の<strong>動作</strong>や<strong>状態</strong>を表す言葉です。英語の文の心臓部であり、必ず必要です。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Action">🏃</div>
        <div class="diagram-arrow">vs</div>
        <div class="diagram-box" data-label="State">🧘</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">動詞の2大分類</h3>

      <div class="concept-box">
        <h4>🔄 be動詞 (Be Verbs)</h4>
        <p>「〜です」「〜にいる」という状態や存在を表します。イコール記号（＝）のような働きをします。</p>
        <div class="example-grid">
          <div class="example-item">I <strong>am</strong> happy. (私 ＝ 幸せ)</div>
          <div class="example-item">She <strong>is</strong> a student. (彼女 ＝ 生徒)</div>
          <div class="example-item">They <strong>are</strong> in the park. (彼ら ＝ 公園にいる)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🏃 一般動詞 (Action/State Verbs)</h4>
        <p>be動詞以外のすべての動詞。具体的な動作や心の状態を表します。</p>
        <div class="example-grid">
          <div class="example-item">I <strong>run</strong> fast. (走る - 動作)</div>
          <div class="example-item">She <strong>eats</strong> lunch. (食べる - 動作)</div>
          <div class="example-item">He <strong>likes</strong> music. (好き - 状態)</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">時制（Time）のイメージ</h3>
      
      <div class="concept-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 2rem 0; position: relative;">
          <div style="position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--text-muted); z-index: 0;"></div>
          
          <div style="z-index: 1; text-align: center; background: var(--surface); padding: 0.5rem;">
            <div style="font-size: 1.5rem;">⬅️</div>
            <div style="font-weight: bold; color: var(--text-muted);">過去 (Past)</div>
            <div style="font-size: 0.8rem;">played / went</div>
          </div>

          <div style="z-index: 1; text-align: center; background: var(--surface); padding: 0.5rem; border: 2px solid var(--primary); border-radius: 0.5rem;">
            <div style="font-size: 2rem;">⬇️</div>
            <div style="font-weight: bold; color: var(--primary);">現在 (Present)</div>
            <div style="font-size: 0.8rem;">play / go</div>
          </div>

          <div style="z-index: 1; text-align: center; background: var(--surface); padding: 0.5rem;">
            <div style="font-size: 1.5rem;">➡️</div>
            <div style="font-weight: bold; color: var(--secondary);">未来 (Future)</div>
            <div style="font-size: 0.8rem;">will play / will go</div>
          </div>
        </div>
        <p style="text-align: center;">動詞の形を変えることで、「いつ」の話かを表せます。</p>
      </div>
    </div>
  `,
  examples: ['run', 'eat', 'is', 'have', 'study'],
  quiz: [
    {
      question: '次のうち、動詞はどれですか？',
      options: ['beautiful', 'eat', 'desk', 'slowly'],
      answer: 'eat',
      explanation: '「eat（食べる）」は動作を表す動詞です。beautiful（美しい）は形容詞、desk（机）は名詞、slowly（ゆっくり）は副詞です。'
    },
    {
      question: 'be動詞はどれですか？',
      options: ['play', 'am', 'go', 'like'],
      answer: 'am',
      explanation: '「am」はbe動詞の一つで、主語が「I」のときに使います。play、go、likeは一般動詞です。'
    },
    {
      question: '「勉強する」を意味する動詞は？',
      options: ['student', 'study', 'studious', 'studio'],
      answer: 'study',
      explanation: '「study」は「勉強する」という動作を表す動詞です。student（学生）は名詞、studious（勉強熱心な）は形容詞、studio（スタジオ）は名詞です。'
    },
    {
      question: '過去形の動詞はどれですか？',
      options: ['play', 'played', 'playing', 'plays'],
      answer: 'played',
      explanation: '「played」は過去形の動詞で、-edをつけて作ります。play（原形）、playing（現在分詞/動名詞）、plays（3人称単数現在形）は過去形ではありません。'
    },
    {
      question: '3人称単数現在形（三単現）のsがついているのは？',
      options: ['go', 'going', 'goes', 'gone'],
      answer: 'goes',
      explanation: '「goes」は3人称単数（he/she/it）の現在形で、動詞の語尾に-esをつけた形です。go（原形）、going（現在分詞）、gone（過去分詞）は三単現ではありません。'
    },
    {
      question: '「楽しむ」を意味する動詞は？',
      options: ['joy', 'enjoy', 'fun', 'happy'],
      answer: 'enjoy',
      explanation: '「enjoy」は「楽しむ」という動作を表す動詞です。joy（喜び）とfun（楽しみ）は名詞、happy（幸せな）は形容詞です。'
    },
    {
      question: '助動詞（動詞を助ける言葉）はどれですか？',
      options: ['can', 'run', 'big', 'cat'],
      answer: 'can',
      explanation: '「can（できる）」は助動詞で、動詞の前に置いて意味を加えます。run（走る）は一般動詞、big（大きい）は形容詞、cat（猫）は名詞です。'
    },
    {
      question: '不規則動詞の過去形として正しいのは？ (go -> ?)',
      options: ['goed', 'gone', 'went', 'going'],
      answer: 'went',
      explanation: '「go」の過去形は不規則変化で「went」です。規則変化(-ed)ではありません。gone（過去分詞）、going（現在分詞）は過去形ではありません。'
    },
    {
      question: '「食べる」の現在進行形は？',
      options: ['eat', 'ate', 'eating', 'eaten'],
      answer: 'eating',
      explanation: '現在進行形は「be動詞 + 動詞の-ing形」で作ります。「eating」がeat（食べる）の-ing形です。eat（原形）、ate（過去形）、eaten（過去分詞）は進行形ではありません。'
    },
    {
      question: '状態動詞（動作ではなく状態を表す動詞）はどれですか？',
      options: ['run', 'know', 'hit', 'jump'],
      answer: 'know',
      explanation: '「know（知っている）」は状態を表す動詞で、通常進行形にしません。run（走る）、hit（打つ）、jump（跳ぶ）は動作を表す動詞です。'
    }
  ]
};
