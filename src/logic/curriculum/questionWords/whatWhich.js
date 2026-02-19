
export const whatWhich = {
  id: 'qw-what-which',
  isEnabled: true,
  title: 'What / Which の使い方',
  description: '「何」「どれ」を尋ねる疑問詞の使い方と、主語・目的語の位置の入れ替わりを学びます。',
  explanation: `
    <div class="explanation-section">
      <p>疑問詞は「何？」「誰？」「いつ？」のように、<strong>具体的な情報を尋ねる</strong>ための言葉です。Yes/Noでは答えられない質問を作ります。このレッスンでは<strong>What</strong>と<strong>Which</strong>を学びます。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center;">
            <div style="font-size: 1.5rem;">❓</div>
            <div style="font-weight: bold; color: var(--secondary);">疑問詞の基本ルール</div>
            <div style="font-size: 1rem; margin-top: 0.5rem;"><strong>疑問詞</strong> + do/does/did + 主語 + 動詞の原形 ...?</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">What（何）</h3>

      <div class="concept-box">
        <h4>🔍 目的語を尋ねる What</h4>
        <p>元の文の<strong>目的語</strong>を What に置き換え、文頭に移動させます。一般動詞の場合は<strong>do/does/did</strong>を使って疑問文にします。</p>
        <div class="example-grid">
          <div class="example-item"><strong>You like cats.</strong><br>→ <strong>What do you like?</strong><br>（何が好きですか？）</div>
          <div class="example-item"><strong>She reads books.</strong><br>→ <strong>What does she read?</strong><br>（彼女は何を読みますか？）</div>
          <div class="example-item"><strong>They ate pizza.</strong><br>→ <strong>What did they eat?</strong><br>（彼らは何を食べましたか？）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>目的語（cats, books, pizza）が What に置き換わり、文頭に移動します。残りの文は疑問文の語順（do/does/did + 主語 + 動詞の原形）になります。</p>
      </div>

      <div class="concept-box">
        <h4>⏰ What + 名詞（What time / What kind ...）</h4>
        <p>What の後に名詞をつけて、より具体的に尋ねることができます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>What time does the meeting start?</strong><br>（会議は何時に始まりますか？）</div>
          <div class="example-item"><strong>What color do you like?</strong><br>（何色が好きですか？）</div>
          <div class="example-item"><strong>What kind of music do you listen to?</strong><br>（どんな種類の音楽を聴きますか？）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ 注意：</strong>「What time does the meeting start?」は<strong>未来の予定</strong>の話ですが、<strong>現在形</strong>を使います。スケジュールや時刻表など「確定した予定」は現在形で表現するのが英語のルールです。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Which（どれ・どちら）</h3>

      <div class="concept-box">
        <h4>🔀 選択肢がある場合に使う Which</h4>
        <p>Whatは広い範囲で「何？」と聞くのに対し、Whichは<strong>限られた選択肢の中から「どれ？」</strong>と聞くときに使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Which would you like, coffee or tea?</strong><br>（コーヒーと紅茶、どちらがいいですか？）</div>
          <div class="example-item"><strong>Which one is your car?</strong><br>（どれがあなたの車ですか？）</div>
          <div class="example-item"><strong>Which color do you prefer, red or blue?</strong><br>（赤と青、どちらの色が好きですか？）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 What vs Which の使い分け：</strong><br>
        ・<strong>What</strong> = 選択肢が決まっていない（何でもあり得る）<br>
        ・<strong>Which</strong> = 選択肢が限られている（AかBか）</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">主語を尋ねる場合</h3>

      <div class="concept-box">
        <h4>🎯 疑問詞が主語になる場合</h4>
        <p>疑問詞が<strong>主語の位置</strong>にくる場合は、do/does/did を使わず、<strong>そのまま主語として文に入れます</strong>。</p>
        <div class="example-grid">
          <div class="example-item"><strong>What happened?</strong><br>（何が起きたの？）<br>× What did happen?</div>
          <div class="example-item"><strong>What made you cry?</strong><br>（何があなたを泣かせたの？）</div>
          <div class="example-item"><strong>Which team won?</strong><br>（どちらのチームが勝ったの？）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 判断基準：</strong>疑問詞が「〜は」（主語）なら do/does 不要。「〜を」（目的語）なら do/does が必要。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">What do you do on weekends?</p>
        <p class="example-breakdown"><span class="tag">What</span> <span class="tag v-tag">do</span> <span class="tag s-tag">you</span> <span class="tag v-tag">do</span> on weekends?</p>
        <p class="example-translation">週末は何をしますか？</p>
        <p class="example-note">最初のdoは疑問文を作るためのdo、2つ目のdoは「する」という動詞です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Which bus goes to the station?</p>
        <p class="example-breakdown"><span class="tag">Which bus</span> <span class="tag v-tag">goes</span> to the station?</p>
        <p class="example-translation">どのバスが駅に行きますか？</p>
        <p class="example-note">Which busが主語なので、do/doesは不要。動詞はそのまま三人称単数形（goes）を使います。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>What</strong> = 広い範囲で「何？」と尋ねる</li>
        <li>✓ <strong>Which</strong> = 限られた選択肢から「どれ？」と尋ねる</li>
        <li>✓ 目的語を尋ねる → do/does/did + 主語 + 動詞の原形</li>
        <li>✓ 主語を尋ねる → do/does 不要、疑問詞がそのまま主語になる</li>
        <li>✓ What time ...? など「確定した予定」は<strong>未来でも現在形</strong>を使う</li>
      </ul>
    </div>
  `,
  examples: [
    'What do you like? — I like cats.',
    'What time does the meeting start?',
    'What happened yesterday?',
    'Which would you like, coffee or tea?',
    'Which one is your car?',
    'What kind of music do you listen to?'
  ],
  quiz: [
    {
      question: '「あなたは何が好きですか？」を英語で表すと？',
      options: ['What do you like?', 'What you like?', 'What are you like?', 'What did you like?'],
      answer: 'What do you like?',
      explanation: '目的語を尋ねるWhatの疑問文は「What + do/does + 主語 + 動詞の原形」の語順です。'
    },
    {
      question: '「会議は何時に始まりますか？」を英語で表すと？',
      options: ['What time does the meeting start?', 'What time will the meeting start?', 'What time is the meeting start?', 'What time do the meeting start?'],
      answer: 'What time does the meeting start?',
      explanation: 'スケジュールなど確定した予定は未来の話でも現在形を使います。meetingは三人称単数なのでdoesを使います。'
    },
    {
      question: '「何が起きたの？」を英語で表すと？',
      options: ['What happened?', 'What did happen?', 'What does happen?', 'What is happened?'],
      answer: 'What happened?',
      explanation: 'Whatが主語の場合、do/did は不要です。疑問詞がそのまま主語として機能します。'
    },
    {
      question: 'What と Which の使い分けとして正しいのは？',
      options: ['Whichは選択肢がある場合に使う', 'Whatは選択肢がある場合に使う', 'WhichとWhatは同じ意味', 'Whichは過去形で使う'],
      answer: 'Whichは選択肢がある場合に使う',
      explanation: 'Whatは広い範囲で「何？」と聞き、Whichは限られた選択肢の中から「どれ？」と聞くときに使います。'
    },
    {
      question: '「コーヒーと紅茶、どちらがいいですか？」を英語で表すと？',
      options: ['Which would you like, coffee or tea?', 'What would you like, coffee or tea?', 'Which do you want coffee or tea?', 'What is you like, coffee or tea?'],
      answer: 'Which would you like, coffee or tea?',
      explanation: '選択肢（coffee or tea）が示されているのでWhichを使います。wouldを使うと丁寧な表現になります。'
    },
    {
      question: '次の文の空所に入る適切な語は？ "____ team won the game?"',
      options: ['Which', 'What', 'Who', 'Whom'],
      answer: 'Which',
      explanation: 'チーム（限定された選択肢）について尋ねているのでWhichが適切です。Which teamが主語なのでdidは不要です。'
    },
    {
      question: '「あなたは週末に何をしますか？」を英語で表すと？',
      options: ['What do you do on weekends?', 'What you do on weekends?', 'What are you do on weekends?', 'What does you do on weekends?'],
      answer: 'What do you do on weekends?',
      explanation: '目的語を尋ねるWhat疑問文です。主語がyouなのでdoを使います。最初のdoは疑問文用、2つ目は動詞「する」です。'
    },
    {
      question: '次のうち、文法的に正しいものはどれ？',
      options: ['What made you angry?', 'What did make you angry?', 'What does made you angry?', 'What do make you angry?'],
      answer: 'What made you angry?',
      explanation: 'Whatが主語（「何があなたを怒らせた？」）なので、do/didは使いません。madeはmakeの過去形です。'
    },
    {
      question: '「どれがあなたの車ですか？」を英語で表すと？',
      options: ['Which one is your car?', 'What one is your car?', 'Which car is you?', 'What is your car one?'],
      answer: 'Which one is your car?',
      explanation: '目の前にある車の中から選ぶので、限定された選択肢を指すWhichを使います。'
    },
    {
      question: 'What time does the meeting start? が現在形を使う理由は？',
      options: ['確定した予定は現在形で表すため', '過去の出来事だから', 'What timeは常に現在形だから', 'doesは未来形だから'],
      answer: '確定した予定は現在形で表すため',
      explanation: 'スケジュールや時刻表など確定した未来の予定は、英語では未来形ではなく現在形で表現します。'
    }
  ]
};
