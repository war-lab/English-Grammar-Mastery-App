// to不定詞 vs 動名詞の使い分けレッスン定義
export const infinitiveVsGerund = {
  id: 'inf-vs-gerund',
  isEnabled: true,
  title: 'to不定詞 vs 動名詞の使い分け',
  description: 'to不定詞のみ・動名詞のみ・両方取れて意味が変わる動詞の使い分けと語法を学びます。',
  explanation: `
    <div class="explanation-section">
      <p>動詞の中には、目的語として<strong>to不定詞だけ</strong>取るもの、<strong>動名詞だけ</strong>取るもの、そして<strong>両方取れるが意味が変わる</strong>ものがあります。「未来 vs 過去」のイメージだけでは覚えきれない例外もあるため、最終的には<strong>語法（セットで暗記）</strong>が最も確実です。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1rem;">
              <span style="color: var(--primary); font-weight: bold;">to不定詞</span>「未来・前向き」← → <span style="color: var(--secondary); font-weight: bold;">動名詞</span>「過去・事実・反復」
            </div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">ただし例外あり → 最終的には語法で暗記！</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">to不定詞しか取れない動詞</h3>

      <div class="concept-box">
        <h4>🔮 「これからやること」を表すイメージ</h4>
        <p>未来志向・前向きな動詞が多いです。</p>
        <div class="example-grid">
          <div class="example-item"><strong>want to do</strong>：〜したい<br><em>I want to travel abroad.</em></div>
          <div class="example-item"><strong>decide to do</strong>：〜することに決める<br><em>She decided to quit her job.</em></div>
          <div class="example-item"><strong>hope to do</strong>：〜することを望む<br><em>I hope to see you again.</em></div>
          <div class="example-item"><strong>plan to do</strong>：〜する計画を立てる<br><em>We plan to visit Kyoto.</em></div>
          <div class="example-item"><strong>promise to do</strong>：〜することを約束する<br><em>He promised to call me.</em></div>
          <div class="example-item"><strong>refuse to do</strong>：〜することを拒否する<br><em>She refused to answer.</em></div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 refuse は要注意：</strong>「拒否する」は一見ネガティブですが、「対象に意識が向いた（to）上での拒絶」と考えます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">動名詞しか取れない動詞</h3>

      <div class="concept-box">
        <h4>🔄 「反復・事実・過去」を表すイメージ</h4>
        <p>すでに行っていること、反復的な行為に関する動詞が多いです。</p>
        <div class="example-grid">
          <div class="example-item"><strong>enjoy ~ing</strong>：〜を楽しむ<br><em>I enjoy cooking.</em></div>
          <div class="example-item"><strong>finish ~ing</strong>：〜し終える<br><em>He finished eating lunch.</em></div>
          <div class="example-item"><strong>give up ~ing</strong>：〜を諦める<br><em>She gave up studying law.</em></div>
          <div class="example-item"><strong>practice ~ing</strong>：〜を練習する<br><em>I practice playing the guitar.</em></div>
          <div class="example-item"><strong>escape ~ing</strong>：〜を逃れる<br><em>He escaped being caught.</em></div>
          <div class="example-item"><strong>deny ~ing</strong>：〜を否定する<br><em>She denied stealing the money.</em></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">両方取れて意味が変わる動詞 ★超重要</h3>

      <div class="concept-box">
        <h4>🔑 remember / forget / try / stop</h4>
        <p>これらの動詞は to不定詞と動名詞の両方を取れますが、<strong>意味が変わります</strong>。ここでは「未来 vs 過去」のイメージがぴったり当てはまります。</p>

        <div style="overflow-x: auto; margin-top: 1rem;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem;">
            <thead>
              <tr style="background: rgba(99, 102, 241, 0.15);">
                <th style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1); text-align: left;">動詞</th>
                <th style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1); text-align: left;">to不定詞（未来）</th>
                <th style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1); text-align: left;">動名詞（過去）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);"><strong>remember</strong></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">remember to do<br><em>（これから）〜するのを覚えている</em></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">remember doing<br><em>（過去に）〜したことを覚えている</em></td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);"><strong>forget</strong></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">forget to do<br><em>（これから）〜するのを忘れる</em></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">forget doing<br><em>（過去に）〜したことを忘れる</em></td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);"><strong>try</strong></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">try to do<br><em>〜しようと試みる（努力）</em></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">try doing<br><em>試しに〜してみる（実験）</em></td>
              </tr>
              <tr>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);"><strong>stop</strong></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">stop to do<br><em>〜するために立ち止まる</em></td>
                <td style="padding: 0.75rem; border: 1px solid rgba(255,255,255,0.1);">stop doing<br><em>〜することをやめる</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">語法で覚えるのが最強</h3>

      <div class="concept-box">
        <h4>🧠 イメージに頼りすぎない</h4>
        <p>「未来 vs 過去」のイメージは便利ですが、refuse（to不定詞）や escape（動名詞）のように例外もあります。最終的には<strong>動詞ごとの「型（語法）」をセットで覚える</strong>のが確実です。</p>
        <div class="example-grid">
          <div class="example-item"><span style="color: #ef4444;">❌ 意味だけで覚える</span><br>enjoy = 楽しむ<br>→ doing であることを忘れてしまう！</div>
          <div class="example-item"><span style="color: #22c55e;">⭕ 語法で覚える</span><br>enjoy ~ing<br>→ 単語と文法パターンをセットで暗記！</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>to不定詞のみ：</strong>want, decide, hope, plan, promise, refuse</li>
        <li>✓ <strong>動名詞のみ：</strong>enjoy, finish, give up, practice, mind, avoid, deny, escape</li>
        <li>✓ <strong>意味が変わる：</strong>remember, forget, try, stop</li>
        <li>✓ remember to do（これから）vs remember doing（過去の記憶）</li>
        <li>✓ stop to do（〜するために止まる）vs stop doing（〜をやめる）</li>
        <li>✓ イメージは参考に、最終的には<strong>語法で暗記</strong>するのが最強</li>
      </ul>
    </div>
  `,
  examples: [
    'I want to travel abroad. — 海外旅行がしたい。（to不定詞のみ）',
    'I enjoy cooking. — 料理を楽しんでいる。（動名詞のみ）',
    'Remember to lock the door. — ドアの鍵をかけるのを忘れないで。（未来）',
    'I remember meeting her before. — 以前彼女に会ったことを覚えている。（過去）',
    'He stopped smoking. — 彼はタバコを吸うのをやめた。（やめる）',
    'He stopped to smoke. — 彼はタバコを吸うために立ち止まった。（目的）'
  ],
  quiz: [
    {
      question: '空所に入る適切な語句は？ "I want ____ abroad."',
      options: ['to travel', 'traveling', 'to traveling', 'travel'],
      answer: 'to travel',
      explanation: 'want は to不定詞のみを目的語に取る動詞です。want to do「〜したい」。'
    },
    {
      question: '「ドアの鍵をかけるのを忘れないで」を英語にすると？',
      options: ['Remember to lock the door.', 'Remember locking the door.', 'Remember lock the door.', 'Remember to locking the door.'],
      answer: 'Remember to lock the door.',
      explanation: 'remember to do は「（これから）〜するのを覚えている/忘れないで」です。未来のことなので to不定詞。'
    },
    {
      question: '"I remember meeting her before." の意味は？',
      options: ['以前彼女に会ったことを覚えている', 'これから彼女に会うことを覚えている', '彼女に会うのを忘れた', '彼女に会うのが楽しかった'],
      answer: '以前彼女に会ったことを覚えている',
      explanation: 'remember doing は「（過去に）〜したことを覚えている」です。動名詞は過去の事実を表します。'
    },
    {
      question: '"He stopped smoking." の意味は？',
      options: ['彼はタバコを吸うのをやめた', '彼はタバコを吸うために立ち止まった', '彼はタバコを吸い始めた', '彼はタバコを吸うのを楽しんだ'],
      answer: '彼はタバコを吸うのをやめた',
      explanation: 'stop doing は「〜することをやめる」。stop to do は「〜するために立ち止まる」。意味が全く違います。'
    },
    {
      question: '空所に入る適切な語句は？ "She decided ____ her job."',
      options: ['to quit', 'quitting', 'to quitting', 'quit'],
      answer: 'to quit',
      explanation: 'decide は to不定詞のみを目的語に取る動詞です。decide to do「〜することに決める」。'
    },
    {
      question: '空所に入る適切な語句は？ "He denied ____ the money."',
      options: ['stealing', 'to steal', 'steal', 'to stealing'],
      answer: 'stealing',
      explanation: 'deny は動名詞のみを目的語に取る動詞です。deny ~ing「〜したことを否定する」。'
    },
    {
      question: '"She tried to open the door." と "She tried opening the door." の違いは？',
      options: ['try to do = 開けようと努力した / try doing = 試しに開けてみた', 'try to do = 試しに開けてみた / try doing = 開けようと努力した', '意味は同じ', 'try to do = 過去 / try doing = 未来'],
      answer: 'try to do = 開けようと努力した / try doing = 試しに開けてみた',
      explanation: 'try to do は「〜しようと試みる（努力）」、try doing は「試しに〜してみる（実験的に）」です。'
    },
    {
      question: '空所に入る適切な語句は？ "She refused ____ the question."',
      options: ['to answer', 'answering', 'answer', 'to answering'],
      answer: 'to answer',
      explanation: 'refuse は to不定詞のみを目的語に取ります。「拒否する」は一見ネガティブですが、対象に意識が向いた上での拒絶なので to不定詞です。'
    },
    {
      question: '「彼はその罰を逃れた」を英語にすると？',
      options: ['He escaped being punished.', 'He escaped to be punished.', 'He escaped be punished.', 'He escaped to being punished.'],
      answer: 'He escaped being punished.',
      explanation: 'escape は動名詞のみを目的語に取る動詞です。逃れる対象（すでに存在するもの）なので動名詞。'
    },
    {
      question: '"I\'ll never forget visiting Paris." の意味は？',
      options: ['パリを訪れたことを決して忘れない', 'パリを訪れるのを忘れないようにする', 'パリを訪れるのを諦めた', 'パリを訪れることを決めた'],
      answer: 'パリを訪れたことを決して忘れない',
      explanation: 'forget doing は「（過去に）〜したことを忘れる」です。パリを訪れた過去の記憶を忘れないという意味です。'
    }
  ]
};
