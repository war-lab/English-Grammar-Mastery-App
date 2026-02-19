
export const whenWhere = {
  id: 'qw-when-where',
  isEnabled: true,
  title: 'When / Where の使い方',
  description: '時と場所を尋ねる疑問詞の使い方と、前置詞＋名詞の塊を置き換えるルールを学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>When</strong>は「いつ」、<strong>Where</strong>は「どこ」を尋ねる疑問詞です。どちらも<strong>前置詞＋名詞の塊</strong>を置き換えて使います。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem;">
            <div style="font-size: 1.3rem; font-weight: bold; color: var(--secondary);">When</div>
            <div style="font-size: 0.9rem;">on Monday → <strong>when</strong></div>
          </div>
          <div style="font-size: 1.5rem;">🔄</div>
          <div style="text-align: center; padding: 1rem; background: rgba(34, 197, 94, 0.15); border-radius: 0.75rem;">
            <div style="font-size: 1.3rem; font-weight: bold; color: #22c55e;">Where</div>
            <div style="font-size: 0.9rem;">in the park → <strong>where</strong></div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">When（いつ）</h3>

      <div class="concept-box">
        <h4>📅 前置詞＋時の名詞 → When に置き換える</h4>
        <p>時を表す「<strong>前置詞＋名詞</strong>」の塊を、まるごと When に置き換えます。</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>元の文：</strong><br>
            The meeting is <strong>on Monday</strong>.<br>
            → <strong>When</strong> is the meeting?<br>
            （会議はいつですか？）
          </div>
          <div class="example-item">
            <strong>元の文：</strong><br>
            She arrives <strong>at 3 o'clock</strong>.<br>
            → <strong>When</strong> does she arrive?<br>
            （彼女はいつ到着しますか？）
          </div>
          <div class="example-item">
            <strong>元の文：</strong><br>
            They left <strong>in the morning</strong>.<br>
            → <strong>When</strong> did they leave?<br>
            （彼らはいつ出発しましたか？）
          </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>「on Monday」「at 3 o'clock」「in the morning」はそれぞれ前置詞＋名詞で一つの塊です。この塊全体がwhenに置き換わります。</p>
      </div>

      <div class="concept-box">
        <h4>⏰ 未来の話でも現在形を使うケース</h4>
        <p>確定した<strong>スケジュール・時刻表・予定</strong>について尋ねるときは、未来の話でも<strong>現在形</strong>を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>When does the train leave?</strong><br>（電車はいつ出発しますか？）<br>← 時刻表に基づく確定した予定</div>
          <div class="example-item"><strong>When does the store open?</strong><br>（お店はいつ開きますか？）<br>← 営業時間の確定情報</div>
          <div class="example-item"><strong>When does the movie start?</strong><br>（映画はいつ始まりますか？）<br>← 上映スケジュール</div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ 注意：</strong>willは「未確定」のニュアンスがあるので、確定した予定には使いません。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">Where（どこ）</h3>

      <div class="concept-box">
        <h4>📍 前置詞＋場所の名詞 → Where に置き換える</h4>
        <p>場所を表す「<strong>前置詞＋名詞</strong>」の塊を、まるごと Where に置き換えます。</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>元の文：</strong><br>
            I can find the documents <strong>in the office</strong>.<br>
            → <strong>Where</strong> can I find the documents?<br>
            （書類はどこで見つけられますか？）
          </div>
          <div class="example-item">
            <strong>元の文：</strong><br>
            She lives <strong>in Tokyo</strong>.<br>
            → <strong>Where</strong> does she live?<br>
            （彼女はどこに住んでいますか？）
          </div>
          <div class="example-item">
            <strong>元の文：</strong><br>
            They went <strong>to the park</strong>.<br>
            → <strong>Where</strong> did they go?<br>
            （彼らはどこに行きましたか？）
          </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>「in the office」「in Tokyo」「to the park」は前置詞＋名詞の塊です。whereに置き換えると前置詞も消えます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">When is your birthday?</p>
        <p class="example-breakdown"><span class="tag">When</span> <span class="tag v-tag">is</span> <span class="tag s-tag">your birthday</span>?</p>
        <p class="example-translation">あなたの誕生日はいつですか？</p>
        <p class="example-note">be動詞の疑問文なので、do/doesは使いません。whenが前置詞＋日付の塊を置き換えています。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Where can I find the documents?</p>
        <p class="example-breakdown"><span class="tag">Where</span> <span class="tag v-tag">can</span> <span class="tag s-tag">I</span> <span class="tag v-tag">find</span> <span class="tag o-tag">the documents</span>?</p>
        <p class="example-translation">書類はどこで見つけられますか？</p>
        <p class="example-note">元の文は「I can find the documents in XX」。「in XX」がwhereに置き換わっています。助動詞canがあるのでdoは不要です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Where do you come from?</p>
        <p class="example-breakdown"><span class="tag">Where</span> <span class="tag v-tag">do</span> <span class="tag s-tag">you</span> <span class="tag v-tag">come</span> from?</p>
        <p class="example-translation">あなたはどこの出身ですか？</p>
        <p class="example-note">「from + 場所」の「場所」部分がwhereに置き換わりますが、fromは文末に残ります。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>When</strong> = 前置詞＋時の名詞（on Monday, at 3等）を置き換える</li>
        <li>✓ <strong>Where</strong> = 前置詞＋場所の名詞（in the park, to XX等）を置き換える</li>
        <li>✓ 基本的に<strong>前置詞＋名詞</strong>のセットが疑問詞に置き換わる</li>
        <li>✓ 確定した予定・スケジュール → <strong>未来の話でも現在形</strong>を使う</li>
        <li>✓ 助動詞（can, willなど）がある場合は do/does は不要</li>
      </ul>
    </div>
  `,
  examples: [
    'When is the meeting? — On Monday.',
    'When does the train leave?',
    'Where can I find the documents?',
    'Where does she live? — In Tokyo.',
    'Where do you come from?',
    'When did they arrive?'
  ],
  quiz: [
    {
      question: '「会議はいつですか？」を英語で表すと？',
      options: ['When is the meeting?', 'When does the meeting?', 'When the meeting is?', 'What time the meeting?'],
      answer: 'When is the meeting?',
      explanation: 'be動詞の疑問文なので「When + is + 主語」の語順です。doは不要です。'
    },
    {
      question: '「彼女はどこに住んでいますか？」を英語で表すと？',
      options: ['Where does she live?', 'Where she lives?', 'Where is she live?', 'Where do she live?'],
      answer: 'Where does she live?',
      explanation: 'sheは三人称単数なのでdoesを使います。「in Tokyo」の部分がwhereに置き換わっています。'
    },
    {
      question: 'When / Where は基本的に何を置き換えますか？',
      options: ['前置詞＋名詞の塊', '主語のみ', '動詞のみ', '形容詞'],
      answer: '前置詞＋名詞の塊',
      explanation: '「on Monday」「in the park」のような前置詞＋名詞の塊がwhen/whereに置き換わります。'
    },
    {
      question: '「電車はいつ出発しますか？」を英語で表すと？（時刻表に基づく質問）',
      options: ['When does the train leave?', 'When will the train leave?', 'When is the train leaving?', 'When did the train leave?'],
      answer: 'When does the train leave?',
      explanation: '時刻表に基づく確定した予定は、未来の話でも現在形を使います。'
    },
    {
      question: '「書類はどこで見つけられますか？」を英語で表すと？',
      options: ['Where can I find the documents?', 'Where I can find the documents?', 'Where do I can find the documents?', 'Where does I find the documents?'],
      answer: 'Where can I find the documents?',
      explanation: '助動詞canがあるのでdoは不要です。Where + can + 主語 + 動詞の原形の語順です。'
    },
    {
      question: '「When does the store open?」が未来形を使わない理由は？',
      options: ['確定した予定は現在形で表すから', '過去の出来事だから', 'Whenは現在形しか使えないから', 'doesは未来形の一種だから'],
      answer: '確定した予定は現在形で表すから',
      explanation: '営業時間のような確定した予定は現在形で表します。willは未確定のニュアンスがあるため使いません。'
    },
    {
      question: '「彼らはいつ出発しましたか？」を英語で表すと？',
      options: ['When did they leave?', 'When they left?', 'When does they leave?', 'When are they leave?'],
      answer: 'When did they leave?',
      explanation: '過去の出来事を尋ねているのでdidを使います。動詞は原形（leave）に戻ります。'
    },
    {
      question: '「Where do you come from?」の意味は？',
      options: ['あなたはどこの出身ですか？', 'あなたはどこに来ますか？', 'あなたはどこから来ましたか？', 'あなたはどこに行きますか？'],
      answer: 'あなたはどこの出身ですか？',
      explanation: '「come from」は「〜の出身である」という意味です。fromの場所の部分がwhereに置き換わっています。'
    },
    {
      question: '次の空所に入る適切な語は？ "____ is the nearest station?"',
      options: ['Where', 'When', 'What', 'Who'],
      answer: 'Where',
      explanation: '最寄りの駅の「場所」を尋ねているのでWhereを使います。'
    },
    {
      question: '「あなたの誕生日はいつですか？」を英語で表すと？',
      options: ['When is your birthday?', 'When does your birthday?', 'When your birthday is?', 'Where is your birthday?'],
      answer: 'When is your birthday?',
      explanation: '時を尋ねるWhenの疑問文です。be動詞を使うので「When is your birthday?」が正解です。'
    }
  ]
};
