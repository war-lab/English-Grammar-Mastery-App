// 感情動詞の分詞（interesting vs interested）のレッスン定義
export const emotionParticiples = {
  id: 'part-emotion-participles',
  isEnabled: true,
  title: '感情動詞の分詞 (interesting vs interested)',
  description: '感情を表す動詞の現在分詞と過去分詞の使い分けを学びます。「〜させる」と「〜している（感じている）」の違いを押さえましょう。',
  explanation: `
    <div class="explanation-section">
      <p>英語には<strong>「人に感情を引き起こす」動詞</strong>がたくさんあります。interest, excite, surprise, bore, tire, amaze, disappoint, confuse など。これらの動詞から作る<strong>現在分詞と過去分詞</strong>は、意味が大きく異なります。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(34, 197, 94, 0.15); border-radius: 0.75rem; border: 1px solid rgba(34, 197, 94, 0.3);">
            <div style="font-size: 1.1rem; font-weight: bold; color: #22c55e;">~ing（現在分詞）</div>
            <div style="margin-top: 0.5rem;">「〜させる」<br>原因・もの側を説明</div>
          </div>
          <div style="font-size: 2rem;">⇔</div>
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(239, 68, 68, 0.15); border-radius: 0.75rem; border: 1px solid rgba(239, 68, 68, 0.3);">
            <div style="font-size: 1.1rem; font-weight: bold; color: #ef4444;">~ed（過去分詞）</div>
            <div style="margin-top: 0.5rem;">「〜している（感じている）」<br>感情を受ける人側を説明</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">基本ルール</h3>

      <div class="concept-box">
        <h4>📘 ~ing = 原因（もの・こと）を説明</h4>
        <p>「〜させるような」「〜を引き起こす」という意味。主に<strong>もの・こと</strong>を説明します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>The movie is interesting.</strong><br>（その映画は面白い＝興味を引き起こす）</div>
          <div class="example-item"><strong>The news was surprising.</strong><br>（そのニュースは驚くべきものだった）</div>
          <div class="example-item"><strong>The book is boring.</strong><br>（その本は退屈だ＝退屈させる）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>📗 ~ed = 感情を受ける人を説明</h4>
        <p>「〜している」「〜と感じている」という意味。主に<strong>人</strong>の気持ちを説明します。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I am interested in science.</strong><br>（私は科学に興味がある＝興味を持たされている）</div>
          <div class="example-item"><strong>She was surprised at the result.</strong><br>（彼女はその結果に驚いた）</div>
          <div class="example-item"><strong>He looks bored.</strong><br>（彼は退屈しているようだ）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">主な感情動詞の分詞一覧</h3>

      <div class="concept-box">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.5rem;">
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>interest</strong> → interesting / interested（興味深い / 興味がある）</div>
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>excite</strong> → exciting / excited（ワクワクさせる / ワクワクしている）</div>
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>surprise</strong> → surprising / surprised（驚くべき / 驚いている）</div>
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>bore</strong> → boring / bored（退屈させる / 退屈している）</div>
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>tire</strong> → tiring / tired（疲れさせる / 疲れている）</div>
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>amaze</strong> → amazing / amazed（驚嘆させる / 驚嘆している）</div>
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>disappoint</strong> → disappointing / disappointed（がっかりさせる / がっかりしている）</div>
          <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 0.5rem;"><strong>confuse</strong> → confusing / confused（混乱させる / 混乱している）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">よくある間違い</h3>

      <div class="concept-box">
        <h4>⚠️ 人に ~ing を使うミス</h4>
        <div class="example-grid">
          <div class="example-item"><span style="color: #ef4444;">❌ I am interesting in science.</span><br>（私は興味を引き起こす存在…？）</div>
          <div class="example-item"><span style="color: #22c55e;">⭕ I am interested in science.</span><br>（私は科学に興味がある）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>判断のコツ：</strong>主語が「人」で「感情を感じている」なら → ~ed、主語が「もの」で「感情を引き起こす」なら → ~ing</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>~ing = 原因側</strong>（〜させるような）→ 主にもの・ことを説明</li>
        <li>✓ <strong>~ed = 感情を受ける側</strong>（〜している）→ 主に人を説明</li>
        <li>✓ 主語が「人」のときは通常 ~ed を使う</li>
        <li>✓ interested <strong>in</strong>, surprised <strong>at</strong>, excited <strong>about</strong> など前置詞とセットで覚える</li>
        <li>✓ 「人に~ingを使わない」のが基本だが、"He is boring." は「彼は退屈な人だ」の意味でありうる</li>
      </ul>
    </div>
  `,
  examples: [
    'The movie is interesting. — その映画は面白い。',
    'I am interested in science. — 私は科学に興味がある。',
    'The news was surprising. — そのニュースは驚くべきものだった。',
    'She was surprised at the result. — 彼女はその結果に驚いた。',
    'The game is exciting. — その試合はワクワクする。',
    'We are excited about the trip. — 私たちは旅行にワクワクしている。'
  ],
  quiz: [
    {
      question: '空所に入る適切な語は？ "The movie was very ____."',
      options: ['exciting', 'excited', 'excite', 'excites'],
      answer: 'exciting',
      explanation: '映画（もの）が「ワクワクさせる」という意味なので、原因側を表す現在分詞 exciting を使います。'
    },
    {
      question: '空所に入る適切な語は？ "I am ____ in Japanese culture."',
      options: ['interested', 'interesting', 'interest', 'interests'],
      answer: 'interested',
      explanation: '人（I）が「興味を持っている」ので、感情を受ける側を表す過去分詞 interested を使います。be interested in ～で覚えましょう。'
    },
    {
      question: '「その試合は退屈だった」を英語にすると？',
      options: ['The game was boring.', 'The game was bored.', 'The game was bore.', 'The game was bores.'],
      answer: 'The game was boring.',
      explanation: '試合（もの）が「退屈させる」原因なので、現在分詞 boring を使います。'
    },
    {
      question: '空所に入る適切な語は？ "She was ____ at the news."',
      options: ['surprised', 'surprising', 'surprise', 'surprises'],
      answer: 'surprised',
      explanation: '人（She）が「驚いている」ので、過去分詞 surprised を使います。be surprised at ～で覚えましょう。'
    },
    {
      question: '次のうち、正しい文はどれ？',
      options: ['The result was disappointing.', 'The result was disappointed.', 'The result was disappoint.', 'The result was disappoints.'],
      answer: 'The result was disappointing.',
      explanation: '結果（もの）が「がっかりさせる」原因なので、現在分詞 disappointing を使います。'
    },
    {
      question: '空所に入る適切な語は？ "He looked ____ after the long meeting."',
      options: ['tired', 'tiring', 'tire', 'tires'],
      answer: 'tired',
      explanation: '人（He）が「疲れている」ので、過去分詞 tired を使います。tiring は「疲れさせる」。'
    },
    {
      question: '「その問題は混乱させるものだった」を英語にすると？',
      options: ['The problem was confusing.', 'The problem was confused.', 'The problem was confuse.', 'The problem was confuses.'],
      answer: 'The problem was confusing.',
      explanation: '問題（もの）が「混乱させる」原因なので、現在分詞 confusing を使います。'
    },
    {
      question: '空所に入る適切な語は？ "We are ____ about the school trip."',
      options: ['excited', 'exciting', 'excite', 'excites'],
      answer: 'excited',
      explanation: '人（We）が「ワクワクしている」ので、過去分詞 excited を使います。be excited about ～。'
    },
    {
      question: '次のうち、間違っている文はどれ？',
      options: ['I am interesting in music.', 'The concert was amazing.', 'She was disappointed with the score.', 'This book is boring.'],
      answer: 'I am interesting in music.',
      explanation: '人が「興味を持っている」場合は interested を使います。interesting は「興味を引き起こす」で、もの側に使います。正しくは I am interested in music.'
    },
    {
      question: '空所に入る適切な語は？ "The view from the mountain was ____."',
      options: ['amazing', 'amazed', 'amaze', 'amazes'],
      answer: 'amazing',
      explanation: '景色（もの）が「驚嘆させる」原因なので、現在分詞 amazing を使います。'
    }
  ]
};
