export const curriculum = [
  {
    id: 'jhs-1',
    year: 1,
    title: 'Junior High School 1st Year',
    topics: [
      {
        id: 'be-verbs',
        title: 'Be Verbs (am, is, are)',
        description: 'Learn how to use am, is, and are to describe things.',
        explanation: `
          <h3>Be動詞とは？</h3>
          <p>Be動詞は、主語の状態、身分、場所を説明するために使います。主語と追加情報を等号（=）のように結びつける働きをします。</p>
          
          <h3>形</h3>
          <ul>
            <li><strong>I am</strong> (I'm) - 私は〜です</li>
            <li><strong>You are</strong> (You're) - あなたは〜です</li>
            <li><strong>He/She/It is</strong> (He's/She's/It's) - 彼/彼女/それは〜です</li>
            <li><strong>We/They are</strong> (We're/They're) - 私たちは/彼らは〜です</li>
          </ul>

          <h3>例文</h3>
          <p><em>I am a student.</em> （身分：私は学生です）</p>
          <p><em>She is happy.</em> （状態：彼女は幸せです）</p>
          <p><em>They are in the park.</em> （場所：彼らは公園にいます）</p>
        `,
        examples: ['I am a student.', 'He is a teacher.', 'They are happy.'],
        quiz: [
          { question: 'I ___ a student.', options: ['am', 'is', 'are'], answer: 'am' },
          { question: 'She ___ my friend.', options: ['am', 'is', 'are'], answer: 'is' },
          { question: 'We ___ ready.', options: ['am', 'is', 'are'], answer: 'are' }
        ]
      },
      {
        id: 'general-verbs',
        title: 'General Verbs (Present Tense)',
        description: 'Learn how to use action verbs like play, eat, and study.',
        explanation: `
          <h3>一般動詞とは？</h3>
          <p>一般動詞は「be動詞」以外の動作や状態を表す動詞です。例：<em>play（遊ぶ）、eat（食べる）、run（走る）、study（勉強する）、like（好き）</em>など。</p>
          
          <h3>三人称単数の「s」</h3>
          <p>現在形で主語が<strong>he（彼）、she（彼女）、it（それ）</strong>の場合、動詞に<strong>-s</strong>または<strong>-es</strong>をつけます。</p>
          
          <h3>ルール</h3>
          <ul>
            <li>I/You/We/They play. （変化なし）</li>
            <li>He/She/It play<strong>s</strong>. （sをつける）</li>
          </ul>
        `,
        examples: ['I play soccer.', 'She eats lunch.', 'We study English.'],
        quiz: [
          { question: 'I ___ tennis.', options: ['play', 'plays', 'playing'], answer: 'play' },
          { question: 'He ___ to school.', options: ['go', 'goes', 'going'], answer: 'goes' }
        ]
      },
      {
        id: 'can',
        title: 'Auxiliary Verb "Can"',
        description: 'Express ability using "can".',
        explanation: `
          <h3>「Can」の使い方</h3>
          <p>「Can」は助動詞で、能力（できること）を表すために使います。動詞の前に置きます。</p>
          
          <h3>ルール</h3>
          <ul>
            <li>動詞は必ず<strong>原形</strong>（元の形）を使います。</li>
            <li>「Can」はhe/she/itでも形が変わりません（sをつけない）。</li>
          </ul>
          
          <h3>構造</h3>
          <p><strong>主語 + can + 動詞（原形）</strong></p>
          <p><em>I can swim.</em> （私は泳ぐことができます）</p>
        `,
        examples: ['I can swim.', 'She can speak English.'],
        quiz: [
          { question: 'I ___ swim.', options: ['can', 'cans', 'canning'], answer: 'can' },
          { question: '___ you help me?', options: ['Can', 'Are', 'Do'], answer: 'Can' }
        ]
      }
    ]
  },
  {
    id: 'jhs-2',
    year: 2,
    title: 'Junior High School 2nd Year',
    topics: [
      {
        id: 'past-tense',
        title: 'Past Tense (Be-verbs & General Verbs)',
        description: 'Talk about the past using was/were and -ed forms.',
        explanation: `
          <h3>Be動詞（過去形）</h3>
          <ul>
            <li>am / is → <strong>was</strong></li>
            <li>are → <strong>were</strong></li>
          </ul>
          
          <h3>一般動詞（過去形）</h3>
          <p>規則動詞は語尾に<strong>-ed</strong>をつけます。</p>
          <ul>
            <li>play → played</li>
            <li>watch → watched</li>
          </ul>
          <p>不規則動詞は形が完全に変わります（例：go → went、eat → ate）。</p>
        `,
        examples: ['I was busy yesterday.', 'He played baseball.'],
        quiz: [
          { question: 'I ___ at home yesterday.', options: ['was', 'were', 'am'], answer: 'was' },
          { question: 'They ___ soccer last week.', options: ['play', 'played', 'playing'], answer: 'played' }
        ]
      },
      {
        id: 'future-tense',
        title: 'Future Tense (will / be going to)',
        description: 'Talk about the future.',
        explanation: `
          <h3>Will</h3>
          <p>未来の予測や急な決断を表すときに使います。</p>
          <p><strong>主語 + will + 動詞（原形）</strong></p>
          
          <h3>Be going to</h3>
          <p>計画された未来の行動を表すときに使います。</p>
          <p><strong>主語 + be動詞 (am/is/are) + going to + 動詞（原形）</strong></p>
        `,
        examples: ['I will study tomorrow.', 'I am going to visit my grandma.'],
        quiz: [
          { question: 'I ___ call you later.', options: ['will', 'am', 'do'], answer: 'will' },
          { question: 'She is ___ to buy a car.', options: ['go', 'going', 'goes'], answer: 'going' }
        ]
      }
    ]
  },
  {
    id: 'sentence-patterns',
    year: 2.5,
    title: '5つの文型（Five Sentence Patterns）',
    topics: [
      {
        id: 'sentence-pattern-1-sv',
        title: '第1文型 (SV) - Subject + Verb',
        description: '主語と動詞だけで完結する文型。目的語も補語もない構造です。',
        explanation: `
          <h3>第1文型（SV）とは？</h3>
          <p>第1文型は英語の文型の中で最もシンプルな形です。<strong>主語（S）と動詞（V）</strong>だけで意味が完結します。</p>
          <p>この文型では、<strong>目的語（O）も補語（C）も必要ありません</strong>。動詞が自動詞（目的語を必要としない動詞）である場合に使われます。</p>
          
          <h3>基本構造</h3>
          <p><strong>主語 (S) + 動詞 (V)</strong></p>
          <p>多くの場合、場所や時間を表す修飾語句（M）が付きますが、文型の本質的な要素ではありません。</p>
          
          <h3>第1文型で使われる主な動詞</h3>
          <ul>
            <li><strong>移動を表す動詞</strong>：go（行く）、come（来る）、run（走る）、walk（歩く）、arrive（到着する）</li>
            <li><strong>存在を表す動詞</strong>：exist（存在する）、live（住む）、stay（滞在する）</li>
            <li><strong>状態を表す動詞</strong>：sleep（眠る）、sit（座る）、stand（立つ）、lie（横たわる）</li>
            <li><strong>自然現象</strong>：rain（雨が降る）、snow（雪が降る）、shine（輝く）</li>
          </ul>

          <h3>詳細な例文と解説</h3>
          <p><em>The sun rises.</em></p>
          <ul>
            <li>S = The sun（太陽が）</li>
            <li>V = rises（昇る）</li>
            <li>意味：太陽が昇る。</li>
            <li>解説：「昇る」という動作に目的語は必要ありません。</li>
          </ul>

          <p><em>She smiled.</em></p>
          <ul>
            <li>S = She（彼女が）</li>
            <li>V = smiled（微笑んだ）</li>
            <li>意味：彼女は微笑んだ。</li>
            <li>解説：「微笑む」は自動詞で、目的語を取りません。</li>
          </ul>

          <p><em>I go to school every day.</em></p>
          <ul>
            <li>S = I（私は）</li>
            <li>V = go（行く）</li>
            <li>M = to school（学校へ）every day（毎日）</li>
            <li>意味：私は毎日学校へ行く。</li>
            <li>解説：「to school」は場所を表す修飾語句（M）で、文型の要素ではありません。</li>
          </ul>

          <p><em>Birds fly in the sky.</em></p>
          <ul>
            <li>S = Birds（鳥が）</li>
            <li>V = fly（飛ぶ）</li>
            <li>M = in the sky（空を）</li>
            <li>意味：鳥が空を飛ぶ。</li>
          </ul>

          <h3>覚えておくべきポイント</h3>
          <ul>
            <li>✓ 動詞の後に「何を」「どうなる」が<strong>不要</strong></li>
            <li>✓ 自動詞のみが使われる</li>
            <li>✓ 場所・時間などの修飾語があっても文型は変わらない</li>
            <li>✓ VOは含まれない</li>
          </ul>
        `,
        examples: [
          'The baby cried.',
          'He works hard.',
          'The train arrived at the station.',
          'Time flies.',
          'My heart beats fast.'
        ],
        quiz: [
          {
            question: '次の文で第1文型 (SV) はどれですか？',
            options: ['I am happy.', 'She runs fast.', 'He plays tennis.', 'We are students.'],
            answer: 'She runs fast.'
          },
          {
            question: '第1文型の文を完成させてください：Birds ___ in the sky.',
            options: ['are', 'fly', 'beautiful', 'like'],
            answer: 'fly'
          },
          {
            question: '「太陽が輝いている」を第1文型で表すと？',
            options: ['The sun is bright.', 'The sun shines.', 'The sun has light.', 'The sun makes light.'],
            answer: 'The sun shines.'
          },
          {
            question: '次のうち、第1文型で使える自動詞はどれですか？',
            options: ['make', 'have', 'exist', 'give'],
            answer: 'exist'
          }
        ]
      },
      {
        id: 'sentence-pattern-2-svc',
        title: '第2文型 (SVC) - Subject + Verb + Complement',
        description: '主語と補語をイコールで結ぶ文型。「S = C」の関係が成り立ちます。',
        explanation: `
          <h3>第2文型（SVC）とは？</h3>
          <p>第2文型は<strong>主語（S）+ 動詞（V）+ 補語（C）</strong>の構造です。</p>
          <p>最大の特徴は、<strong>S = C</strong>の関係が成り立つことです。補語（C）は主語を説明したり、主語の状態を示します。</p>
          <p>この文型では<strong>目的語（O）は含まれません</strong>。動詞は主に「be動詞」や「〜になる」「〜に見える」などの意味を持つ動詞（不完全自動詞）が使われます。</p>
          
          <h3>基本構造</h3>
          <p><strong>主語 (S) + 動詞 (V) + 補語 (C)</strong></p>
          <p><strong>重要：S = C の関係</strong></p>
          
          <h3>第2文型で使われる主な動詞</h3>
          <ul>
            <li><strong>be動詞</strong>：am, is, are, was, were（〜である、〜です）</li>
            <li><strong>状態を表す動詞</strong>：
              <ul>
                <li>look（〜に見える）</li>
                <li>seem / appear（〜のようだ）</li>
                <li>sound（〜に聞こえる）</li>
                <li>smell（〜の匂いがする）</li>
                <li>taste（〜の味がする）</li>
                <li>feel（〜と感じる）</li>
              </ul>
            </li>
            <li><strong>変化を表す動詞</strong>：
              <ul>
                <li>become（〜になる）</li>
                <li>get（〜になる）</li>
                <li>grow（〜になる）</li>
                <li>turn（〜になる）</li>
                <li>go（〜になる）</li>
              </ul>
            </li>
            <li><strong>状態の維持</strong>：
              <ul>
                <li>remain（〜のままである）</li>
                <li>keep（〜のままである）</li>
                <li>stay（〜のままでいる）</li>
              </ul>
            </li>
          </ul>

          <h3>補語（C）になれるもの</h3>
          <ul>
            <li><strong>名詞</strong>：I am a student. （私は学生です）</li>
            <li><strong>形容詞</strong>：She is beautiful. （彼女は美しい）</li>
          </ul>

          <h3>詳細な例文と解説</h3>
          <p><em>He is a doctor.</em></p>
          <ul>
            <li>S = He（彼は）</li>
            <li>V = is（〜である）</li>
            <li>C = a doctor（医者）</li>
            <li>関係：He = a doctor（彼 = 医者）</li>
            <li>意味：彼は医者です。</li>
          </ul>

          <p><em>The cake smells good.</em></p>
          <ul>
            <li>S = The cake（そのケーキは）</li>
            <li>V = smells（〜の匂いがする）</li>
            <li>C = good（良い）</li>
            <li>関係：The cake = good smell（ケーキ = 良い匂い）</li>
            <li>意味：そのケーキは良い匂いがする。</li>
          </ul>

          <p><em>She became a teacher.</em></p>
          <ul>
            <li>S = She（彼女は）</li>
            <li>V = became（〜になった）</li>
            <li>C = a teacher（教師）</li>
            <li>関係：She = a teacher（彼女 = 教師）</li>
            <li>意味：彼女は教師になった。</li>
          </ul>

          <p><em>The story sounds interesting.</em></p>
          <ul>
            <li>S = The story（その話は）</li>
            <li>V = sounds（〜に聞こえる）</li>
            <li>C = interesting（面白い）</li>
            <li>意味：その話は面白そうだ。</li>
          </ul>

          <p><em>The leaves turn red in autumn.</em></p>
          <ul>
            <li>S = The leaves（葉は）</li>
            <li>V = turn（〜になる）</li>
            <li>C = red（赤い）</li>
            <li>意味：秋には葉が赤くなる。</li>
          </ul>

          <h3>覚えておくべきポイント</h3>
          <ul>
            <li>✓ <strong>S = C</strong> の関係が成り立つ</li>
            <li>✓ 補語（C）は主語を説明する</li>
            <li>✓ 目的語（O）は含まれない</li>
            <li>✓ 動詞の後に「どんな状態か」「何であるか」が来る</li>
          </ul>

          <h3>第1文型との違い</h3>
          <p>第1文型：Birds fly.（鳥が飛ぶ）← 動詞だけで完結</p>
          <p>第2文型：Birds are beautiful.（鳥は美しい）← 補語が必要</p>
        `,
        examples: [
          'I am happy.',
          'She looks tired.',
          'The soup tastes delicious.',
          'He became famous.',
          'The weather remains cold.',
          'You seem worried.',
          'The milk went bad.'
        ],
        quiz: [
          {
            question: '次の文で S = C の関係が成り立つのはどれですか？',
            options: ['I play tennis.', 'She is kind.', 'He reads books.', 'They go home.'],
            answer: 'She is kind.'
          },
          {
            question: '第2文型の文を完成させてください：The flower ___ beautiful.',
            options: ['has', 'makes', 'is', 'does'],
            answer: 'is'
          },
          {
            question: '「彼は疲れているように見える」を英語で表すと？',
            options: ['He sees tired.', 'He looks tired.', 'He watches tired.', 'He is look tired.'],
            answer: 'He looks tired.'
          },
          {
            question: '次のうち、第2文型で使われる動詞はどれですか？',
            options: ['eat', 'become', 'have', 'play'],
            answer: 'become'
          },
          {
            question: '「この料理は美味しい味がする」を英語で表すと？',
            options: ['This dish has delicious.', 'This dish tastes delicious.', 'This dish makes delicious.', 'This dish eats delicious.'],
            answer: 'This dish tastes delicious.'
          }
        ]
      },
      {
        id: 'sentence-pattern-3-svo',
        title: '第3文型 (SVO) - Subject + Verb + Object',
        description: '動作が目的語に及ぶ文型。VO構造の基本形です。',
        explanation: `
          <h3>第3文型（SVO）とは？</h3>
          <p>第3文型は<strong>主語（S）+ 動詞（V）+ 目的語（O）</strong>の構造です。</p>
          <p>この文型は<strong>「S が O を V する」</strong>という意味になり、動作が目的語（O）に及びます。これが<strong>VO構造の基本形</strong>です。</p>
          <p>第3文型では<strong>補語（C）は含まれず、S ≠ O</strong>の関係になります。動詞は他動詞（目的語を必要とする動詞）が使われます。</p>
          
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
            answer: 'He plays soccer.'
          },
          {
            question: '第3文型の文を完成させてください：I ___ pizza.',
            options: ['am', 'like', 'happy', 'tired'],
            answer: 'like'
          },
          {
            question: '「彼女は毎日英語を勉強する」を英語で表すと？',
            options: ['She is English every day.', 'She becomes English every day.', 'She studies English every day.', 'She seems English every day.'],
            answer: 'She studies English every day.'
          },
          {
            question: '次のうち、S ≠ O の関係なのはどれですか？',
            options: ['He is a doctor.', 'She seems kind.', 'I read books.', 'They are students.'],
            answer: 'I read books.'
          },
          {
            question: '「私たちは音楽を楽しむ」を英語で表すと？',
            options: ['We are music.', 'We enjoy music.', 'We become music.', 'We seem music.'],
            answer: 'We enjoy music.'
          },
          {
            question: '次のうち、第3文型で使える他動詞はどれですか？',
            options: ['go', 'become', 'write', 'seem'],
            answer: 'write'
          }
        ]
      },
      {
        id: 'sentence-pattern-4-svoo',
        title: '第4文型 (SVOO) - Subject + Verb + Object + Object',
        description: '「誰に」「何を」を表す2つの目的語を持つ文型です。',
        explanation: `
          <h3>第4文型（SVOO）とは？</h3>
          <p>第4文型は<strong>主語（S）+ 動詞（V）+ 目的語1（O1）+ 目的語2（O2）</strong>の構造です。</p>
          <p>この文型は<strong>「S が O1（人）に O2（物・事）を V する」</strong>という意味になります。</p>
          <p><strong>2つの目的語が並ぶ</strong>のが特徴で、最初の目的語（O1）は通常「人」、2番目の目的語（O2）は「物・事」を表します。</p>
          
          <h3>基本構造</h3>
          <p><strong>主語 (S) + 動詞 (V) + 目的語1 (O1: 人) + 目的語2 (O2: 物・事)</strong></p>
          <p><strong>意味：「S が O1 に O2 を V する」</strong></p>
          
          <h3>第4文型で使われる主な動詞（授与動詞）</h3>
          <ul>
            <li><strong>与える系</strong>：
              <ul>
                <li>give（与える）</li>
                <li>pass（渡す）</li>
                <li>hand（手渡す）</li>
                <li>lend（貸す）</li>
                <li>bring（持ってくる）</li>
                <li>send（送る）</li>
                <li>offer（提供する）</li>
              </ul>
            </li>
            <li><strong>伝える系</strong>：
              <ul>
                <li>tell（伝える、話す）</li>
                <li>teach（教える）</li>
                <li>show（見せる）</li>
                <li>ask（尋ねる）</li>
              </ul>
            </li>
            <li><strong>作る系</strong>：
              <ul>
                <li>make（作る）</li>
                <li>buy（買う）</li>
                <li>cook（料理する）</li>
                <li>get（手に入れる）</li>
                <li>find（見つける）</li>
              </ul>
            </li>
          </ul>

          <h3>第3文型への書き換え</h3>
          <p>第4文型は第3文型に書き換えることができます：</p>
          <p><strong>SVOO → SVO (前置詞) O</strong></p>
          <ul>
            <li>give/pass/hand/lend/send → to を使う</li>
            <li>buy/make/cook/get/find → for を使う</li>
          </ul>

          <h3>詳細な例文と解説</h3>
          <p><em>I gave him a present.</em></p>
          <ul>
            <li>S = I（私は）</li>
            <li>V = gave（与えた）</li>
            <li>O1 = him（彼に）← 人</li>
            <li>O2 = a present（プレゼントを）← 物</li>
            <li>意味：私は彼にプレゼントをあげた。</li>
            <li>書き換え：I gave a present <strong>to</strong> him.</li>
          </ul>

          <p><em>She taught me English.</em></p>
          <ul>
            <li>S = She（彼女は）</li>
            <li>V = taught（教えた）</li>
            <li>O1 = me（私に）← 人</li>
            <li>O2 = English（英語を）← 物</li>
            <li>意味：彼女は私に英語を教えた。</li>
            <li>書き換え：She taught English <strong>to</strong> me.</li>
          </ul>

          <p><em>My mother made me lunch.</em></p>
          <ul>
            <li>S = My mother（母は）</li>
            <li>V = made（作った）</li>
            <li>O1 = me（私に）← 人</li>
            <li>O2 = lunch（昼食を）← 物</li>
            <li>意味：母は私に昼食を作った。</li>
            <li>書き換え：My mother made lunch <strong>for</strong> me.</li>
          </ul>

          <p><em>He showed us his new car.</em></p>
          <ul>
            <li>S = He（彼は）</li>
            <li>V = showed（見せた）</li>
            <li>O1 = us（私たちに）← 人</li>
            <li>O2 = his new car（彼の新車を）← 物</li>
            <li>意味：彼は私たちに新車を見せた。</li>
            <li>書き換え：He showed his new car <strong>to</strong> us.</li>
          </ul>

          <p><em>Tom sent Mary a letter.</em></p>
          <ul>
            <li>S = Tom（トムは）</li>
            <li>V = sent（送った）</li>
            <li>O1 = Mary（メアリーに）← 人</li>
            <li>O2 = a letter（手紙を）← 物</li>
            <li>意味：トムはメアリーに手紙を送った。</li>
            <li>書き換え：Tom sent a letter <strong>to</strong> Mary.</li>
          </ul>

          <p><em>She bought her daughter a doll.</em></p>
          <ul>
            <li>S = She（彼女は）</li>
            <li>V = bought（買った）</li>
            <li>O1 = her daughter（彼女の娘に）← 人</li>
            <li>O2 = a doll（人形を）← 物</li>
            <li>意味：彼女は娘に人形を買った。</li>
            <li>書き換え：She bought a doll <strong>for</strong> her daughter.</li>
          </ul>

          <h3>覚えておくべきポイント</h3>
          <ul>
            <li>✓ <strong>目的語が2つ並ぶ</strong>（SVOO）</li>
            <li>✓ O1（最初）= 人、O2（2番目）= 物・事</li>
            <li>✓ 「S が O1 に O2 を V する」の意味</li>
            <li>✓ 第3文型に書き換え可能（to または for を使う）</li>
            <li>✓ give系の動詞は <strong>to</strong>、make系の動詞は <strong>for</strong> を使う</li>
          </ul>

          <h3>toとforの使い分け</h3>
          <table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
              <th style="padding: 8px; background-color: #f0f0f0;">to を使う動詞</th>
              <th style="padding: 8px; background-color: #f0f0f0;">for を使う動詞</th>
            </tr>
            <tr>
              <td style="padding: 8px;">give, lend, send, pass, hand, show, teach, tell</td>
              <td style="padding: 8px;">buy, make, cook, get, find</td>
            </tr>
            <tr>
              <td style="padding: 8px;">「渡す・伝える」イメージ</td>
              <td style="padding: 8px;">「作る・得る」イメージ</td>
            </tr>
          </table>
        `,
        examples: [
          'I will give you this book.',
          'He told me the truth.',
          'She bought her son a bike.',
          'Please pass me the salt.',
          'Dad made us dinner.',
          'The teacher showed the students the answer.',
          'I sent him an email.'
        ],
        quiz: [
          {
            question: '次の文で第4文型 (SVOO) はどれですか？',
            options: ['I like music.', 'She gave me a gift.', 'He is kind.', 'They study hard.'],
            answer: 'She gave me a gift.'
          },
          {
            question: '「私は彼に本をあげた」を英語で表すと？',
            options: ['I gave a book him.', 'I gave him a book.', 'I gave to him a book.', 'I gave a book to he.'],
            answer: 'I gave him a book.'
          },
          {
            question: '第4文型を第3文型に書き換えたとき、"She made me a cake." はどうなりますか？',
            options: ['She made a cake to me.', 'She made a cake for me.', 'She made a cake with me.', 'She made a cake by me.'],
            answer: 'She made a cake for me.'
          },
          {
            question: '次のうち、第4文型で使える授与動詞はどれですか？',
            options: ['go', 'become', 'teach', 'run'],
            answer: 'teach'
          },
          {
            question: '"He sent a letter to Mary." を第4文型に書き換えると？',
            options: ['He sent Mary a letter.', 'He sent to Mary a letter.', 'He sent a letter Mary.', 'He sent for Mary a letter.'],
            answer: 'He sent Mary a letter.'
          },
          {
            question: '「母は私に新しいドレスを買ってくれた」を英語で表すと？',
            options: ['My mother bought to me a new dress.', 'My mother bought me a new dress.', 'My mother bought for me a new dress.', 'My mother bought a new dress me.'],
            answer: 'My mother bought me a new dress.'
          },
          {
            question: '次のうち、書き換えるときに "to" を使う動詞はどれですか？',
            options: ['make', 'buy', 'show', 'cook'],
            answer: 'show'
          }
        ]
      },
      {
        id: 'sentence-pattern-5-svoc',
        title: '第5文型 (SVOC) - Subject + Verb + Object + Complement',
        description: '目的語の状態や性質を補語で説明する文型。O = C の関係が成り立ちます。',
        explanation: `
          <h3>第5文型（SVOC）とは？</h3>
          <p>第5文型は<strong>主語（S）+ 動詞（V）+ 目的語（O）+ 補語（C）</strong>の構造です。</p>
          <p>この文型は<strong>「S が O を C にする/C だと思う」</strong>という意味になります。</p>
          <p>最大の特徴は、<strong>O = C</strong>の関係が成り立つことです。補語（C）は目的語（O）の状態や性質を説明します。</p>
          
          <h3>基本構造</h3>
          <p><strong>主語 (S) + 動詞 (V) + 目的語 (O) + 補語 (C)</strong></p>
          <p><strong>重要：O = C の関係が成り立つ</strong></p>
          
          <h3>第5文型で使われる主な動詞</h3>
          <ul>
            <li><strong>「〜にする」系（使役・変化）</strong>：
              <ul>
                <li>make（〜にする）</li>
                <li>keep（〜のままにする）</li>
                <li>leave（〜のままにしておく）</li>
                <li>paint（〜を塗る）</li>
                <li>turn（〜にする）</li>
              </ul>
            </li>
            <li><strong>「〜と呼ぶ/名付ける」系</strong>：
              <ul>
                <li>call（〜と呼ぶ）</li>
                <li>name（〜と名付ける）</li>
              </ul>
            </li>
            <li><strong>「〜だと思う/考える」系（知覚・思考）</strong>：
              <ul>
                <li>think（〜だと思う）</li>
                <li>believe（〜だと信じる）</li>
                <li>consider（〜だと考える）</li>
                <li>find（〜だとわかる）</li>
              </ul>
            </li>
            <li><strong>知覚動詞（〜が…するのを見る/聞く）</strong>：
              <ul>
                <li>see（〜が…するのを見る）</li>
                <li>hear（〜が…するのを聞く）</li>
                <li>watch（〜が…するのを見る）</li>
                <li>feel（〜が…するのを感じる）</li>
              </ul>
            </li>
          </ul>

          <h3>補語（C）になれるもの</h3>
          <ul>
            <li><strong>名詞</strong>：We call him Tom.（私たちは彼をトムと呼ぶ）</li>
            <li><strong>形容詞</strong>：She made me happy.（彼女は私を幸せにした）</li>
            <li><strong>動詞の原形</strong>（知覚動詞・使役動詞の後）：I saw him run.（私は彼が走るのを見た）</li>
            <li><strong>現在分詞 (-ing)</strong>：I heard her singing.（私は彼女が歌っているのを聞いた）</li>
            <li><strong>過去分詞 (-ed)</strong>：I had my hair cut.（私は髪を切ってもらった）</li>
          </ul>

          <h3>詳細な例文と解説</h3>
          <p><em>We call him Mike.</em></p>
          <ul>
            <li>S = We（私たちは）</li>
            <li>V = call（呼ぶ）</li>
            <li>O = him（彼を）</li>
            <li>C = Mike（マイク）</li>
            <li>関係：him = Mike（彼 = マイク）</li>
            <li>意味：私たちは彼をマイクと呼ぶ。</li>
          </ul>

          <p><em>The news made her sad.</em></p>
          <ul>
            <li>S = The news（そのニュースは）</li>
            <li>V = made（〜にした）</li>
            <li>O = her（彼女を）</li>
            <li>C = sad（悲しい）</li>
            <li>関係：her = sad（彼女 = 悲しい状態）</li>
            <li>意味：そのニュースは彼女を悲しくさせた。</li>
          </ul>

          <p><em>I found the book interesting.</em></p>
          <ul>
            <li>S = I（私は）</li>
            <li>V = found（わかった）</li>
            <li>O = the book（その本が）</li>
            <li>C = interesting（面白い）</li>
            <li>関係：the book = interesting（本 = 面白い）</li>
            <li>意味：私はその本が面白いとわかった。</li>
          </ul>

          <p><em>I saw him play soccer.</em></p>
          <ul>
            <li>S = I（私は）</li>
            <li>V = saw（見た）</li>
            <li>O = him（彼が）</li>
            <li>C = play soccer（サッカーをする）← 動詞の原形</li>
            <li>意味：私は彼がサッカーをするのを見た。</li>
            <li>解説：知覚動詞の後は動詞の原形を使います。</li>
          </ul>

          <p><em>She kept the room clean.</em></p>
          <ul>
            <li>S = She（彼女は）</li>
            <li>V = kept（保った）</li>
            <li>O = the room（部屋を）</li>
            <li>C = clean（きれいな）</li>
            <li>関係：the room = clean（部屋 = きれい）</li>
            <li>意味：彼女は部屋をきれいに保った。</li>
          </ul>

          <p><em>They elected him president.</em></p>
          <ul>
            <li>S = They（彼らは）</li>
            <li>V = elected（選んだ）</li>
            <li>O = him（彼を）</li>
            <li>C = president（大統領に）</li>
            <li>関係：him = president（彼 = 大統領）</li>
            <li>意味：彼らは彼を大統領に選んだ。</li>
          </ul>

          <p><em>I heard someone calling my name.</em></p>
          <ul>
            <li>S = I（私は）</li>
            <li>V = heard（聞いた）</li>
            <li>O = someone（誰かが）</li>
            <li>C = calling my name（私の名前を呼んでいる）← 現在分詞</li>
            <li>意味：私は誰かが私の名前を呼んでいるのを聞いた。</li>
          </ul>

          <h3>覚えておくべきポイント</h3>
          <ul>
            <li>✓ <strong>O = C の関係</strong>が成り立つ</li>
            <li>✓ 補語（C）は目的語（O）を説明する</li>
            <li>✓ 「S が O を C にする」または「S が O を C だと思う」の意味</li>
            <li>✓ 知覚動詞・使役動詞の後は原形/現在分詞/過去分詞が来る</li>
          </ul>

          <h3>第4文型との違い</h3>
          <p>第4文型（SVOO）：I gave him a book.（him ≠ a book）← 2つの別々の物</p>
          <p>第5文型（SVOC）：We call him Mike.（him = Mike）← O = C の関係</p>

          <h3>知覚動詞・使役動詞の補語（C）の形</h3>
          <table border="1" style="border-collapse: collapse; width: 100%;">
            <tr>
              <th style="padding: 8px; background-color: #f0f0f0;">補語の形</th>
              <th style="padding: 8px; background-color: #f0f0f0;">意味</th>
              <th style="padding: 8px; background-color: #f0f0f0;">例文</th>
            </tr>
            <tr>
              <td style="padding: 8px;">動詞の原形</td>
              <td style="padding: 8px;">動作全体を見た</td>
              <td style="padding: 8px;">I saw him <strong>cross</strong> the street.</td>
            </tr>
            <tr>
              <td style="padding: 8px;">現在分詞 (-ing)</td>
              <td style="padding: 8px;">動作の途中を見た</td>
              <td style="padding: 8px;">I saw him <strong>crossing</strong> the street.</td>
            </tr>
            <tr>
              <td style="padding: 8px;">過去分詞 (-ed)</td>
              <td style="padding: 8px;">受け身の状態</td>
              <td style="padding: 8px;">I saw the window <strong>broken</strong>.</td>
            </tr>
          </table>
        `,
        examples: [
          'I found the test difficult.',
          'She made me happy.',
          'We named our cat Momo.',
          'I saw her dancing.',
          'He kept the door open.',
          'They consider him honest.',
          'She left the window closed.'
        ],
        quiz: [
          {
            question: '次の文で O = C の関係が成り立つのはどれですか？',
            options: ['I gave him a book.', 'She is a teacher.', 'We call her Lisa.', 'He plays tennis.'],
            answer: 'We call her Lisa.'
          },
          {
            question: '「そのニュースは私を幸せにした」を英語で表すと？',
            options: ['The news was me happy.', 'The news made me happy.', 'The news gave me happy.', 'The news became me happy.'],
            answer: 'The news made me happy.'
          },
          {
            question: '第5文型で "I found the movie ___." を完成させてください。',
            options: ['watch', 'to watch', 'interesting', 'watched'],
            answer: 'interesting'
          },
          {
            question: '次のうち、第5文型で使える動詞はどれですか？',
            options: ['go', 'give', 'find', 'arrive'],
            answer: 'find'
          },
          {
            question: '「私は彼が走るのを見た」を英語で表すと？',
            options: ['I saw him runs.', 'I saw him to run.', 'I saw him run.', 'I saw him running.'],
            answer: 'I saw him run.'
          },
          {
            question: '"She kept the room clean." の文で、O = C の関係を表しているのは？',
            options: ['She = the room', 'the room = clean', 'She = clean', 'kept = clean'],
            answer: 'the room = clean'
          },
          {
            question: '「彼らは彼をリーダーに選んだ」を英語で表すと？',
            options: ['They elected him leader.', 'They elected him to leader.', 'They elected him for leader.', 'They elected to him leader.'],
            answer: 'They elected him leader.'
          },
          {
            question: '知覚動詞 "see" の後で「〜が歌っているのを見た」と表現したい場合、正しい形は？',
            options: ['see someone sing', 'see someone singing', 'see someone to sing', 'see someone sung'],
            answer: 'see someone singing'
          }
        ]
      }
    ]
  },
  {
    id: 'jhs-3',
    year: 3,
    title: 'Junior High School 3rd Year',
    topics: [
      {
        id: 'present-perfect',
        title: 'Present Perfect',
        description: 'Express experiences or continuing states (have + p.p.).',
        explanation: `
          <h3>構造</h3>
          <p><strong>主語 + have/has + 過去分詞 (p.p.)</strong></p>
          
          <h3>用法</h3>
          <ol>
            <li><strong>経験</strong>：「I have been to Paris.」（パリに行ったことがあります）</li>
            <li><strong>継続</strong>：「I have lived here for 10 years.」（10年間ここに住んでいます）</li>
            <li><strong>完了</strong>：「I have just finished lunch.」（ちょうど昼食を終えたところです）</li>
          </ol>
        `,
        examples: ['I have been to Kyoto.', 'She has lived here for 3 years.'],
        quiz: [
          { question: 'I ___ seen that movie.', options: ['have', 'has', 'had'], answer: 'have' },
          { question: 'He ___ finished his homework.', options: ['have', 'has', 'having'], answer: 'has' }
        ]
      },
      {
        id: 'passive-voice',
        title: 'Passive Voice',
        description: 'Focus on the object of the action (be + p.p.).',
        explanation: `
          <h3>いつ使う？</h3>
          <p>動作の主体よりも、動作そのものや対象に焦点を当てたい時に受動態を使います。</p>
          
          <h3>構造</h3>
          <p><strong>主語 + be動詞 + 過去分詞 (p.p.)</strong></p>
          <p><em>The letter was written by Tom.</em> （その手紙はトムによって書かれました）</p>
        `,
        examples: ['This letter was written by him.', 'English is spoken in many countries.'],
        quiz: [
          { question: 'This cake ___ made by my mother.', options: ['was', 'were', 'is'], answer: 'was' },
          { question: 'These books ___ read by many people.', options: ['are', 'is', 'was'], answer: 'are' }
        ]
      }
    ]
  }
];
