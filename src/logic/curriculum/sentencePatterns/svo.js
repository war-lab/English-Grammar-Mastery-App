
export const svo = {
  id: 'sentence-pattern-3-svo',
  isEnabled: true,
  title: '第3文型 (SVO) - Subject + Verb + Object',
  description: '動作が目的語に及ぶ文型。VO構造の基本形です。',
  explanation: `
    <h3>第3文型（SVO）とは？</h3>
    <p>第3文型は<strong>主語（S）+ 動詞（V）+ 目的語（O）</strong>の構造です。</p>
    <p>この文型は<strong>「S が O を V する」</strong>という意味になり、動作が目的語（O）に及びます。これが<strong>VO構造の基本形</strong>です。</p>
    <p>第3文型では<strong>補語（C）は含まれず、S ≠ O</strong>の関係になります。動詞は他動詞（目的語を必要とする動詞）が使われます。</p>
    
    <div class="diagram-container">
      <div class="diagram-box" data-label="Subject">S</div>
      <div class="diagram-arrow">V</div>
      <div class="diagram-box" data-label="Verb">V</div>
      <div class="diagram-operator">≠</div>
      <div class="diagram-box" data-label="Object">O</div>
      <div class="diagram-example">I play tennis. (I ≠ tennis)</div>
    </div>

    <h3>基本構造</h3>
    <p><strong>主語 (S) + 動詞 (V) + 目的語 (O)</strong></p>
    <p><strong>重要：S ≠ O の関係（S と O は別のもの）</strong></p>
    
    <h3>第3文型で使われる主な動詞</h3>
    <ul>
      <li><strong>持つ・所有</strong>：have（持っている）、own（所有する）</li>
      <li><strong>作る・創造</strong>：make（作る）、create（創造する）、build（建てる）</li>
      <li><strong>使う</strong>：use（使う）、spend（費やす）</li>
      <li><strong>学ぶ・知る</strong>：learn（学ぶ）、know（知っている）、understand（理解する）</li>
      <li><strong>見る・聞く</strong>：see（見る）、watch（見る）、hear（聞く）、listen to（聞く）</li>
      <li><strong>食べる・飲む</strong>：eat（食べる）、drink（飲む）</li>
      <li><strong>好き・嫌い</strong>：like（好き）、love（大好き）、hate（嫌い）、enjoy（楽しむ）</li>
      <li><strong>言う・話す</strong>：say（言う）、speak（話す）、tell（伝える）</li>
      <li><strong>読む・書く</strong>：read（読む）、write（書く）</li>
    </ul>

    <h3>詳細な例文と解説</h3>
    <p><em>I study English.</em></p>
    <ul>
      <li>S = I（私は）</li>
      <li>V = study（勉強する）</li>
      <li>O = English（英語を）</li>
      <li>意味：私は英語を勉強する。</li>
      <li>解説：「勉強する」という動作が「英語」に及んでいます。</li>
    </ul>

    <p><em>She plays the piano.</em></p>
    <ul>
      <li>S = She（彼女は）</li>
      <li>V = plays（演奏する）</li>
      <li>O = the piano（ピアノを）</li>
      <li>意味：彼女はピアノを演奏する。</li>
      <li>解説：She ≠ the piano（彼女とピアノは別のもの）</li>
    </ul>

    <p><em>He loves music.</em></p>
    <ul>
      <li>S = He（彼は）</li>
      <li>V = loves（愛している）</li>
      <li>O = music（音楽を）</li>
      <li>意味：彼は音楽が大好きだ。</li>
    </ul>

    <p><em>We watched a movie last night.</em></p>
    <ul>
      <li>S = We（私たちは）</li>
      <li>V = watched（見た）</li>
      <li>O = a movie（映画を）</li>
      <li>意味：私たちは昨夜、映画を見た。</li>
    </ul>

    <p><em>They built a new house.</em></p>
    <ul>
      <li>S = They（彼らは）</li>
      <li>V = built（建てた）</li>
      <li>O = a new house（新しい家を）</li>
      <li>意味：彼らは新しい家を建てた。</li>
    </ul>

    <h3>覚えておくべきポイント</h3>
    <ul>
      <li>✓ 「S が O を V する」という意味</li>
      <li>✓ <strong>S ≠ O</strong>（主語と目的語は別のもの）</li>
      <li>✓ 動詞の後に「何を」が来る</li>
      <li>✓ 他動詞が使われる</li>
      <li>✓ これが<strong>VO構造の基本形</strong></li>
    </ul>

    <h3>第2文型との違い</h3>
    <p>第2文型（SVC）：He is a teacher.（彼 = 教師）← S = C</p>
    <p>第3文型（SVO）：He teaches English.（彼 ≠ 英語）← S ≠ O</p>
    
    <h3>目的語の見分け方</h3>
    <p>動詞の後に「〜を」「〜に」をつけて意味が通れば目的語です。</p>
    <ul>
      <li>I like apples. → 「りんご<strong>を</strong>好き」✓</li>
      <li>She is happy. → 「幸せ<strong>を</strong>」✗（補語）</li>
    </ul>
  `,
  examples: [
    'I eat breakfast every day.',
    'She speaks three languages.',
    'He wrote a letter.',
    'We enjoy sports.',
    'They have two cats.',
    'Tom reads books.',
    'Mary knows the answer.'
  ],
  quiz: [
    {
      question: '次の文で第3文型 (SVO) はどれですか？',
      options: ['I am a student.', 'She looks happy.', 'He plays soccer.', 'They are tired.'],
      answer: 'He plays soccer.',
      explanation: '「He plays soccer」は主語(He)と動詞(plays)と目的語(soccer)から構成される第3文型です。他の選択肢は第2文型(SVC)です。'
    },
    {
      question: '第3文型の文を完成させてください：I ___ pizza.',
      options: ['am', 'like', 'happy', 'tired'],
      answer: 'like',
      explanation: '「like」は他動詞で目的語（pizza）を取ります。「I like pizza（私はピザが好きです）」という第3文型の文になります。'
    },
    {
      question: '「彼女は毎日英語を勉強する」を英語で表すと？',
      options: ['She is English every day.', 'She becomes English every day.', 'She studies English every day.', 'She seems English every day.'],
      answer: 'She studies English every day.',
      explanation: '「study」は他動詞で目的語（English）を取ります。「She studies English（彼女は英語を勉強する）」という第3文型の文です。'
    },
    {
      question: '次のうち、S ≠ O の関係なのはどれですか？',
      options: ['He is a doctor.', 'She seems kind.', 'I read books.', 'They are students.'],
      answer: 'I read books.',
      explanation: '第3文型では主語と目的語は別のものです（S ≠ O）。「I read books」では「I（私）」と「books（本）」は異なるものです。他の選択肢は第2文型でS = Cの関係です。'
    },
    {
      question: '「私たちは音楽を楽しむ」を英語で表すと？',
      options: ['We are music.', 'We enjoy music.', 'We become music.', 'We seem music.'],
      answer: 'We enjoy music.',
      explanation: '「enjoy」は他動詞で目的語（music）を取ります。「We enjoy music（私たちは音楽を楽しむ）」という第3文型の文です。'
    },
    {
      question: '次のうち、第3文型で使える他動詞はどれですか？',
      options: ['go', 'become', 'write', 'seem'],
      answer: 'write',
      explanation: '「write（書く）」は他動詞で目的語を必要とします。go（行く）は自動詞、become（～になる）とseem（～のようだ）は第2文型で使われる連絡動詞です。'
    }
  ]
};
