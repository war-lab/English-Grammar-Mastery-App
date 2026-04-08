// 分詞構文（副詞句として使う分詞）のレッスン定義
export const participialConstruction = {
  id: 'part-participial-construction',
  isEnabled: true,
  title: '分詞構文 (Participial Construction)',
  description: '接続詞＋主語を省略し、分詞で副詞句を作る「分詞構文」を学びます。時・理由・条件・付帯状況を表す用法を押さえましょう。',
  explanation: `
    <div class="explanation-section">
      <p><strong>分詞構文</strong>とは、接続詞と主語を省略し、動詞を分詞（~ing / ~ed）に変えて<strong>副詞句</strong>を作る構文です。書き言葉でよく使われ、文を簡潔にする効果があります。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3); max-width: 500px;">
            <div style="font-size: 1rem; margin-bottom: 0.5rem;"><strong>When</strong> I <strong>walked</strong> along the street, I met an old friend.</div>
            <div style="font-size: 1.5rem;">↓ 接続詞と主語を省略、動詞を~ingに</div>
            <div style="font-size: 1rem; margin-top: 0.5rem; color: var(--primary);"><strong>Walking</strong> along the street, I met an old friend.</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">分詞構文の作り方</h3>

      <div class="concept-box">
        <h4>📘 3ステップで作る</h4>
        <div style="padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem; margin-bottom: 1rem;">
          <p><strong>① 接続詞を取る</strong>（when, because, if, while など）</p>
          <p><strong>② 主語を取る</strong>（主節の主語と同じ場合）</p>
          <p><strong>③ 動詞を ~ing に変える</strong></p>
        </div>
        <div class="example-grid">
          <div class="example-item"><strong>Because I was tired,</strong> I went to bed early.<br>↓<br><strong>Being tired,</strong> I went to bed early.<br>（疲れていたので、早く寝た）</div>
          <div class="example-item"><strong>If you turn right,</strong> you will find the station.<br>↓<br><strong>Turning right,</strong> you will find the station.<br>（右に曲がれば、駅が見つかる）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">分詞構文の4つの意味</h3>

      <div class="concept-box">
        <h4>📗 ① 時（〜する時、〜しながら）</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Walking along the street,</strong> I met an old friend.<br>（通りを歩いていた時、旧友に会った）</div>
          <div class="example-item"><strong>Hearing the news,</strong> she started to cry.<br>（その知らせを聞いた時、彼女は泣き出した）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>📗 ② 理由（〜なので）</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Not knowing what to do,</strong> I asked my teacher for help.<br>（何をすべきかわからなかったので、先生に助けを求めた）</div>
          <div class="example-item"><strong>Being sick,</strong> he stayed home.<br>（病気だったので、家にいた）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>📗 ③ 条件（〜すれば）</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Turning left,</strong> you will see the library.<br>（左に曲がれば、図書館が見えます）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>📗 ④ 付帯状況（〜しながら、そして〜）</h4>
        <div class="example-grid">
          <div class="example-item"><strong>He sat on the sofa, reading a book.</strong><br>（彼はソファに座って本を読んでいた）</div>
          <div class="example-item"><strong>She left the room, saying nothing.</strong><br>（彼女は何も言わずに部屋を出た）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">否定の分詞構文</h3>

      <div class="concept-box">
        <h4>⚠️ Not を分詞の前に置く</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Not knowing the answer,</strong> I kept silent.<br>（答えがわからなかったので、黙っていた）</div>
          <div class="example-item"><strong>Not having a car,</strong> he walked to work.<br>（車を持っていなかったので、歩いて通勤した）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">受動態の分詞構文</h3>

      <div class="concept-box">
        <h4>📙 Being + 過去分詞 → 過去分詞で始められる</h4>
        <p>受動態の分詞構文では Being を省略して過去分詞から始めることが多いです。</p>
        <div class="example-grid">
          <div class="example-item"><strong>(Being) Written in simple English,</strong> this book is easy to read.<br>（やさしい英語で書かれているので、この本は読みやすい）</div>
          <div class="example-item"><strong>(Being) Seen from the hill,</strong> the town looks beautiful.<br>（丘から見ると、その町は美しく見える）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 分詞構文 = 接続詞＋主語を省略、動詞を ~ing に</li>
        <li>✓ 4つの意味：<strong>時・理由・条件・付帯状況</strong></li>
        <li>✓ 否定は <strong>Not + ~ing</strong> の語順</li>
        <li>✓ 受動態は <strong>(Being) + 過去分詞</strong>（Being省略可）</li>
        <li>✓ 分詞構文の主語は主節の主語と一致するのが原則</li>
      </ul>
    </div>
  `,
  examples: [
    'Walking along the street, I met an old friend. — 通りを歩いていた時、旧友に会った。',
    'Being tired, I went to bed early. — 疲れていたので、早く寝た。',
    'Turning left, you will see the library. — 左に曲がれば、図書館が見えます。',
    'He sat on the sofa, reading a book. — 彼はソファに座って本を読んでいた。',
    'Not knowing what to do, I asked my teacher. — 何をすべきかわからず、先生に聞いた。',
    'Written in simple English, this book is easy to read. — やさしい英語で書かれているので、この本は読みやすい。'
  ],
  quiz: [
    {
      question: '次の文を分詞構文に書き換えると？ "When I walked along the street, I met an old friend."',
      options: ['Walking along the street, I met an old friend.', 'Walked along the street, I met an old friend.', 'To walk along the street, I met an old friend.', 'Having walk along the street, I met an old friend.'],
      answer: 'Walking along the street, I met an old friend.',
      explanation: '接続詞 When と主語 I を省略し、動詞 walked を ~ing（Walking）に変えます。'
    },
    {
      question: '次の文を分詞構文に書き換えると？ "Because he was sick, he stayed home."',
      options: ['Being sick, he stayed home.', 'Sick being, he stayed home.', 'Having sick, he stayed home.', 'To be sick, he stayed home.'],
      answer: 'Being sick, he stayed home.',
      explanation: '接続詞 Because と主語 he を省略し、was を Being に変えます。理由を表す分詞構文。'
    },
    {
      question: '「答えがわからなかったので、黙っていた」を分詞構文で表すと？',
      options: ['Not knowing the answer, I kept silent.', 'Knowing not the answer, I kept silent.', 'Not known the answer, I kept silent.', 'Didn\'t knowing the answer, I kept silent.'],
      answer: 'Not knowing the answer, I kept silent.',
      explanation: '否定の分詞構文は Not を分詞の前に置きます。Not + ~ing の語順です。'
    },
    {
      question: '空所に入る適切な語は？ "____ in simple English, this book is easy to read."',
      options: ['Written', 'Writing', 'Wrote', 'Write'],
      answer: 'Written',
      explanation: 'この本は「書かれた」側なので受動態の分詞構文。Being Written → Being を省略して Written から始めます。'
    },
    {
      question: '「彼はソファに座って、本を読んでいた」を英語にすると？',
      options: ['He sat on the sofa, reading a book.', 'He sat on the sofa, read a book.', 'He sat on the sofa, to read a book.', 'He sat on the sofa, having read a book.'],
      answer: 'He sat on the sofa, reading a book.',
      explanation: '付帯状況（〜しながら）を表す分詞構文です。文末に , ~ing を置きます。'
    },
    {
      question: '次の分詞構文の意味として最も適切なものは？ "Turning right, you will find the station."',
      options: ['条件（右に曲がれば）', '理由（右に曲がったので）', '時（右に曲がった時）', '付帯状況（右に曲がりながら）'],
      answer: '条件（右に曲がれば）',
      explanation: '道案内の文脈なので「〜すれば」という条件を表す分詞構文です。= If you turn right, ...'
    },
    {
      question: '次の文を分詞構文に書き換えると？ "As she didn\'t have an umbrella, she got wet."',
      options: ['Not having an umbrella, she got wet.', 'Not had an umbrella, she got wet.', 'Having not an umbrella, she got wet.', 'Didn\'t have an umbrella, she got wet.'],
      answer: 'Not having an umbrella, she got wet.',
      explanation: '否定は Not を先頭に。接続詞 As と主語 she を省略し、didn\'t have → Not having に。'
    },
    {
      question: '空所に入る適切な語は？ "____ from the top of the mountain, the city looks tiny."',
      options: ['Seen', 'Seeing', 'Saw', 'To see'],
      answer: 'Seen',
      explanation: '街は「見られる側」なので受動態の分詞構文。(Being) Seen の Being を省略した形。'
    },
    {
      question: '次の分詞構文の意味として最も適切なものは？ "Hearing the bell, the students stood up."',
      options: ['時（ベルを聞いた時）', '理由（ベルを聞いたので）', '条件（ベルを聞けば）', '付帯状況（ベルを聞きながら）'],
      answer: '時（ベルを聞いた時）',
      explanation: 'ベルが鳴り、学生が立ち上がったという時間の流れを表す分詞構文。= When they heard the bell, ...'
    },
    {
      question: '「何も言わずに部屋を出た」を英語にすると？',
      options: ['She left the room, saying nothing.', 'She left the room, said nothing.', 'She left the room, not say.', 'She left the room, to say nothing.'],
      answer: 'She left the room, saying nothing.',
      explanation: '付帯状況の分詞構文。文末に , saying nothing を置いて「何も言わずに」を表します。'
    }
  ]
};
