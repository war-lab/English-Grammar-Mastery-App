// 動名詞（〜ing）のレッスン定義
export const gerunds = {
  id: 'inf-gerunds',
  isEnabled: true,
  title: '動名詞 (〜ing)',
  description: '動名詞の4つの使い方（主語・目的語・補語・前置詞の後）と、動名詞しか取れない動詞を学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>動名詞</strong>とは、動詞の原形に <strong>-ing</strong> をつけて名詞として働かせる準動詞です。その名の通り「名詞」として働くので、文中で置ける場所が決まっています。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.2rem; font-weight: bold;"><span style="color: var(--primary);">動詞の原形 + ing</span> → 「〜すること」として名詞の働きをする</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">主語・目的語・補語・前置詞の目的語に置ける</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">主語になる</h3>

      <div class="concept-box">
        <h4>📘 「〜することは…」を表す</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Playing tennis is fun.</strong><br>（テニスをすることは楽しい）</div>
          <div class="example-item"><strong>Reading books every day is a good habit.</strong><br>（毎日読書することは良い習慣だ）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">目的語になる</h3>

      <div class="concept-box">
        <h4>📗 「〜することを…する」を表す</h4>
        <p>enjoy, finish, give up, practice などの後ろに動名詞を置きます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I enjoy playing tennis.</strong><br>（私はテニスをすることを楽しんでいる）</div>
          <div class="example-item"><strong>She finished reading the book.</strong><br>（彼女はその本を読み終えた）</div>
          <div class="example-item"><strong>He gave up smoking.</strong><br>（彼はタバコを吸うのをやめた）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">補語になる</h3>

      <div class="concept-box">
        <h4>📙 「〜することです」を表す</h4>
        <div class="example-grid">
          <div class="example-item"><strong>My hobby is playing tennis.</strong><br>（私の趣味はテニスをすることです）</div>
          <div class="example-item"><strong>His job is teaching English.</strong><br>（彼の仕事は英語を教えることです）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">前置詞の後に置く ★重要</h3>

      <div class="concept-box">
        <h4>⭐ 動名詞だけの「特権」</h4>
        <p>前置詞の後ろには<strong>名詞</strong>しか置けません。to不定詞は名詞の働きをしますが、前置詞の後ろには使えません。そのため<strong>前置詞の後は必ず動名詞</strong>です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I'm good at playing tennis.</strong><br>（テニスが得意だ）<br>→ at（前置詞）+ playing（動名詞）</div>
          <div class="example-item"><strong>Thank you for helping me.</strong><br>（手伝ってくれてありがとう）<br>→ for（前置詞）+ helping（動名詞）</div>
          <div class="example-item"><strong>She is interested in learning English.</strong><br>（英語を学ぶことに興味がある）<br>→ in（前置詞）+ learning（動名詞）</div>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(239, 68, 68, 0.1); border-radius: 0.5rem; border: 1px solid rgba(239, 68, 68, 0.3);">
          <p style="margin: 0;"><strong>⚠️ よくある間違い：</strong><br>
          ❌ I'm good at <strong>to play</strong> tennis.<br>
          ⭕ I'm good at <strong>playing</strong> tennis.<br>
          前置詞の後にto不定詞は置けません！</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">動名詞しか取れない動詞</h3>

      <div class="concept-box">
        <h4>📋 セットで暗記すべき動詞</h4>
        <p>「反復・事実・過去」を表すイメージの動詞が多いですが、覚え方として<strong>語法（動詞 + ~ing）</strong>でセット暗記するのが最も確実です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>enjoy ~ing</strong>：〜を楽しむ<br><em>I enjoy reading novels.</em></div>
          <div class="example-item"><strong>finish ~ing</strong>：〜し終える<br><em>She finished writing the report.</em></div>
          <div class="example-item"><strong>give up ~ing</strong>：〜を諦める<br><em>He gave up trying.</em></div>
          <div class="example-item"><strong>practice ~ing</strong>：〜を練習する<br><em>She practices speaking English.</em></div>
          <div class="example-item"><strong>mind ~ing</strong>：〜を気にする<br><em>Do you mind opening the window?</em></div>
          <div class="example-item"><strong>avoid ~ing</strong>：〜を避ける<br><em>He avoids eating junk food.</em></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 動名詞は<strong>主語・目的語・補語・前置詞の後</strong>の4箇所に置ける</li>
        <li>✓ <strong>前置詞の後は必ず動名詞</strong>（to不定詞は不可）</li>
        <li>✓ enjoy, finish, give up, practice, mind, avoid は<strong>動名詞のみ</strong>を取る</li>
        <li>✓ 語法（動詞 + ~ing）でセット暗記するのが最も確実</li>
        <li>✓ 動名詞は進行形（be + ~ing）と形は同じだが働きが違う</li>
      </ul>
    </div>
  `,
  examples: [
    'Playing tennis is fun. — テニスをすることは楽しい。',
    'I enjoy playing tennis. — テニスをすることを楽しんでいる。',
    'My hobby is playing tennis. — 私の趣味はテニスをすることです。',
    'I\'m good at playing tennis. — テニスが得意だ。',
    'She finished reading the book. — 彼女はその本を読み終えた。',
    'Thank you for helping me. — 手伝ってくれてありがとう。'
  ],
  quiz: [
    {
      question: '空所に入る適切な語句は？ "I enjoy ____ novels."',
      options: ['reading', 'to read', 'read', 'to reading'],
      answer: 'reading',
      explanation: 'enjoy は動名詞のみを目的語に取る動詞です。enjoy ~ing「〜することを楽しむ」の形になります。'
    },
    {
      question: '「手伝ってくれてありがとう」を英語にすると？',
      options: ['Thank you for helping me.', 'Thank you for to help me.', 'Thank you for help me.', 'Thank you to helping me.'],
      answer: 'Thank you for helping me.',
      explanation: '前置詞 for の後ろには動名詞を置きます。前置詞の後にto不定詞は置けません。'
    },
    {
      question: '次の文で Playing tennis はどの働きをしていますか？ "Playing tennis is fun."',
      options: ['主語', '目的語', '補語', '前置詞の目的語'],
      answer: '主語',
      explanation: 'Playing tennis は文頭に置かれ、動詞 is の前にあるので主語として働いています。'
    },
    {
      question: '空所に入る適切な語句は？ "She is interested in ____ Japanese."',
      options: ['learning', 'to learn', 'learn', 'to learning'],
      answer: 'learning',
      explanation: '前置詞 in の後ろには動名詞を置きます。be interested in ~ing「〜することに興味がある」。'
    },
    {
      question: '「彼はタバコを吸うのをやめた」を英語にすると？',
      options: ['He gave up smoking.', 'He gave up to smoke.', 'He gave up smoke.', 'He gave up to smoking.'],
      answer: 'He gave up smoking.',
      explanation: 'give up は動名詞のみを目的語に取ります。give up ~ing「〜することを諦める・やめる」。'
    },
    {
      question: '次のうち、文法的に正しい文はどれ？',
      options: ['Do you mind opening the window?', 'Do you mind to open the window?', 'Do you mind open the window?', 'Do you mind to opening the window?'],
      answer: 'Do you mind opening the window?',
      explanation: 'mind は動名詞のみを目的語に取る動詞です。mind ~ing「〜することを気にする」。'
    },
    {
      question: '空所に入る適切な語句は？ "She practices ____ English every day."',
      options: ['speaking', 'to speak', 'speak', 'to speaking'],
      answer: 'speaking',
      explanation: 'practice は動名詞のみを目的語に取る動詞です。practice ~ing「〜することを練習する」。'
    },
    {
      question: '「彼の仕事は英語を教えることです」を英語にすると？',
      options: ['His job is teaching English.', 'His job is teach English.', 'His job is to teaching English.', 'His job teaching is English.'],
      answer: 'His job is teaching English.',
      explanation: 'be動詞の後ろに動名詞を置いて補語にしています。「教えること」= teaching。'
    },
    {
      question: '次の文で eating はどの働き？ "He avoids eating junk food."',
      options: ['目的語', '主語', '補語', '前置詞の目的語'],
      answer: '目的語',
      explanation: 'avoid の後ろに置かれているので、動詞の目的語として働いています。avoid ~ing「〜することを避ける」。'
    },
    {
      question: '空所に入る適切な語句は？ "I\'m good ____ cooking."',
      options: ['at', 'to', 'for', 'in'],
      answer: 'at',
      explanation: 'be good at ~ing「〜が得意だ」の形です。前置詞 at の後に動名詞が来ます。'
    }
  ]
};
