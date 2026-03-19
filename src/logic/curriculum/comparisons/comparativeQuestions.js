// 比較の疑問文と慣用表現のレッスン定義
export const comparativeQuestions = {
  id: 'comp-questions-idioms',
  isEnabled: true,
  title: '比較の疑問文と慣用表現',
  description: 'Which is longer? Who is taller? などの比較疑問文と、比較を使った重要な慣用表現を学びます。',
  explanation: `
    <div class="explanation-section">
      <p>比較級や最上級は疑問文でも頻出します。<strong>Which / Who / What</strong> と組み合わせた疑問文のパターンと、試験に出る慣用表現をまとめて学びましょう。</p>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">比較級の疑問文</h3>

      <div class="concept-box">
        <h4>🔀 Which is + 比較級, A or B?</h4>
        <p>2つのものを比べて「どちらが〜ですか？」と尋ねる疑問文です。答え方は比較級で答えます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Which is longer, the Amazon or the Nile?</strong><br>（アマゾン川とナイル川、どちらが長いですか？）<br>— The Nile is longer.</div>
          <div class="example-item"><strong>Which is more popular, soccer or baseball?</strong><br>（サッカーと野球、どちらが人気ですか？）<br>— Soccer is more popular.</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>Which は「もの」を比べるとき、選択肢が限られているときに使います。</p>
      </div>

      <div class="concept-box">
        <h4>👤 Who is + 比較級, A or B?</h4>
        <p>「人」を比べるときは <strong>Who</strong> を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Who is taller, Tom or Ken?</strong><br>（トムとケン、どちらが背が高いですか？）<br>— Tom is taller.</div>
          <div class="example-item"><strong>Who runs faster, you or your sister?</strong><br>（あなたとお姉さん、どちらが速く走りますか？）<br>— My sister runs faster.</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">最上級の疑問文</h3>

      <div class="concept-box">
        <h4>🌍 What is the + 最上級 ~?</h4>
        <p>「一番〜なものは何ですか？」と尋ねるときは <strong>What</strong> を使います。<strong>広い範囲から尋ねる</strong>ときは What が自然です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>What is the longest river in Japan?</strong><br>（日本で一番長い川は何ですか？）<br>— The Shinano River is.</div>
          <div class="example-item"><strong>What is the most popular sport in the world?</strong><br>（世界で一番人気のスポーツは何ですか？）<br>— Soccer is.</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔀 Which is the + 最上級 ~?（選択肢ありの場合）</h4>
        <p><strong>選択肢が目の前にある</strong>場合は Which を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Which is the tallest of the three buildings?</strong><br>（3つの建物の中でどれが一番高いですか？）</div>
          <div class="example-item"><strong>Which is the best of these three cakes?</strong><br>（この3つのケーキの中でどれが一番おいしいですか？）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 What vs Which の使い分け：</strong><br>
        ・<strong>What</strong> = 選択肢が決まっていない、広い範囲から尋ねる（What is the longest river in Japan?）<br>
        ・<strong>Which</strong> = 選択肢が決まっている、限られた中から選ぶ（Which is the tallest of these three?）</p>
      </div>

      <div class="concept-box">
        <h4>👤 Who is the + 最上級 ~?</h4>
        <p>「一番〜な人は誰ですか？」と尋ねるときは <strong>Who</strong> を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Who is the tallest in your family?</strong><br>（あなたの家族で一番背が高いのは誰ですか？）</div>
          <div class="example-item"><strong>Who is the best singer of the three?</strong><br>（3人の中で一番歌がうまいのは誰ですか？）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">比較の慣用表現</h3>

      <div class="concept-box">
        <h4>📈 more and more（ますます〜）</h4>
        <p>「ますます〜になる」という変化を表す表現です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>It is getting colder and colder.</strong><br>（ますます寒くなっている）<br>※短い語: 比較級 + and + 比較級</div>
          <div class="example-item"><strong>English is becoming more and more important.</strong><br>（英語はますます重要になっている）<br>※長い語: more and more + 原級</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🔗 the 比較級, the 比較級（〜すればするほど…）</h4>
        <p>「〜すればするほど、ますます…」という関係を表します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>The more you study, the smarter you become.</strong><br>（勉強すればするほど、賢くなる）</div>
          <div class="example-item"><strong>The sooner, the better.</strong><br>（早ければ早いほどよい）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>⏳ sooner or later（遅かれ早かれ）</h4>
        <p>比較級を使った重要な慣用句です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Sooner or later, you will understand.</strong><br>（遅かれ早かれ、あなたは理解するでしょう）</div>
          <div class="example-item"><strong>more than ~ = 〜以上</strong><br>More than 100 people came.<br>（100人以上が来た）</div>
          <div class="example-item"><strong>less than ~ = 〜未満</strong><br>It costs less than 1,000 yen.<br>（それは1,000円未満です）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">What is the highest mountain in the world?</p>
        <p class="example-breakdown"><span class="tag">What</span> <span class="tag v-tag">is</span> <strong>the highest</strong> mountain <strong>in</strong> the world?</p>
        <p class="example-translation">世界で一番高い山は何ですか？</p>
        <p class="example-note">Whatは広い範囲で尋ねています。the world は場所なので in を使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">The more you practice, the better you get.</p>
        <p class="example-breakdown"><strong>The more</strong> you practice, <strong>the better</strong> you get.</p>
        <p class="example-translation">練習すればするほど、上達する。</p>
        <p class="example-note">「the + 比較級, the + 比較級」の構文です。better は good の比較級。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ もの → <strong>Which</strong>（選択肢あり）/ <strong>What</strong>（広い範囲）</li>
        <li>✓ 人 → <strong>Who</strong></li>
        <li>✓ <strong>比較級 + and + 比較級</strong> = 「ますます〜」</li>
        <li>✓ <strong>the + 比較級, the + 比較級</strong> = 「〜すればするほど…」</li>
        <li>✓ <strong>sooner or later</strong> = 「遅かれ早かれ」</li>
        <li>✓ <strong>more than ~</strong> = 「〜以上」/ <strong>less than ~</strong> = 「〜未満」</li>
      </ul>
    </div>
  `,
  examples: [
    'Which is longer, the Amazon or the Nile? — アマゾン川とナイル川、どちらが長い？',
    'Who is taller, Tom or Ken? — トムとケン、どちらが背が高い？',
    'What is the longest river in Japan? — 日本で一番長い川は何？',
    'The more you study, the smarter you become. — 勉強すればするほど賢くなる。',
    'Sooner or later, you will understand. — 遅かれ早かれ理解するでしょう。',
    'More than 100 people came. — 100人以上が来た。'
  ],
  quiz: [
    {
      question: '「トムとケン、どちらが背が高いですか？」を英語にすると？',
      options: ['Who is taller, Tom or Ken?', 'Which is taller, Tom or Ken?', 'What is taller, Tom or Ken?', 'Who is the tallest, Tom or Ken?'],
      answer: 'Who is taller, Tom or Ken?',
      explanation: '人を比べるときは Who を使います。2人の比較なので比較級 taller を使います（最上級ではない）。'
    },
    {
      question: '「日本で一番長い川は何ですか？」を英語にすると？',
      options: ['What is the longest river in Japan?', 'Which is the longest river in Japan?', 'What is the longer river in Japan?', 'What is longest river in Japan?'],
      answer: 'What is the longest river in Japan?',
      explanation: '広い範囲（日本の全ての川）から尋ねるので What を使います。最上級なので the longest。'
    },
    {
      question: '「サッカーと野球、どちらが人気ですか？」を英語にすると？',
      options: ['Which is more popular, soccer or baseball?', 'What is more popular, soccer or baseball?', 'Who is more popular, soccer or baseball?', 'Which is most popular, soccer or baseball?'],
      answer: 'Which is more popular, soccer or baseball?',
      explanation: '2つのもの（選択肢がある）を比べるので Which を使います。2つの比較なので比較級 more popular。'
    },
    {
      question: '「ますます寒くなっている」を英語にすると？',
      options: ['It is getting colder and colder.', 'It is getting more and more cold.', 'It is getting more colder.', 'It is getting the coldest.'],
      answer: 'It is getting colder and colder.',
      explanation: '短い形容詞の「ますます〜」は「比較級 + and + 比較級」です。cold → colder and colder。'
    },
    {
      question: '「勉強すればするほど賢くなる」を英語にすると？',
      options: ['The more you study, the smarter you become.', 'More you study, smarter you become.', 'The most you study, the smartest you become.', 'If more you study, more smart you become.'],
      answer: 'The more you study, the smarter you become.',
      explanation: '「〜すればするほど…」は「the + 比較級, the + 比較級」の構文で表します。'
    },
    {
      question: '"sooner or later" の意味は？',
      options: ['遅かれ早かれ', 'もっと早く', 'より遅く', 'できるだけ早く'],
      answer: '遅かれ早かれ',
      explanation: 'sooner or later は「遅かれ早かれ（いつかは）」という意味の慣用句です。'
    },
    {
      question: '"more than 100 people" の意味は？',
      options: ['100人以上', '100人未満', 'ちょうど100人', '100人ほど'],
      answer: '100人以上',
      explanation: 'more than ~ は「〜以上」「〜より多い」という意味です。less than ~ は「〜未満」。'
    },
    {
      question: '次のうち What を使うのが適切なのは？',
      options: ['What is the tallest building in the world?', 'What is taller, A or B?', 'What is the best of these two?', 'What boy is taller?'],
      answer: 'What is the tallest building in the world?',
      explanation: 'Whatは広い範囲から尋ねるときに使います。「世界で一番高い建物」は選択肢が限定されていないので What が適切です。'
    },
    {
      question: '「英語はますます重要になっている」を英語にすると？',
      options: ['English is becoming more and more important.', 'English is becoming importanter and importanter.', 'English is becoming the most important.', 'English is becoming more important and important.'],
      answer: 'English is becoming more and more important.',
      explanation: '長い形容詞の「ますます〜」は「more and more + 原級」です。important は長い形容詞なので more and more important。'
    },
    {
      question: '「あなたの家族で一番背が高いのは誰ですか？」を英語にすると？',
      options: ['Who is the tallest in your family?', 'What is the tallest in your family?', 'Which is the tallest in your family?', 'Who is the taller in your family?'],
      answer: 'Who is the tallest in your family?',
      explanation: '人を尋ねるので Who、3人以上の中で一番なので最上級 the tallest、family は集団なので in を使います。'
    }
  ]
};
