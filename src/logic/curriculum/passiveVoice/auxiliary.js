
export const passiveAuxiliary = {
  id: 'passive-voice-auxiliary',
  isEnabled: true,
  title: '助動詞の受動態 (Passive with Auxiliaries)',
  description: 'can, must, should などを使った受動態です。',
  explanation: `
    <div class="explanation-section">
      <h3 class="section-title">助動詞 + be + 過去分詞</h3>
      <p>will以外の助動詞（can, must, should, may）も同じルールで使えます。</p>
      
      <div class="concept-box">
        <h4>📝 基本パターン</h4>
        <div class="diagram-container">
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; flex-wrap: wrap;">
            <div class="diagram-box" style="background:var(--primary-light); color:var(--background); min-width: 80px;">can / must</div>
            <div style="font-size: 1.5rem;">+</div>
            <div class="diagram-box" style="background:var(--secondary-light); color:var(--background);">be</div>
            <div style="font-size: 1.5rem;">+</div>
            <div class="diagram-box" style="background:var(--accent-light); color:var(--background);">Vpp</div>
          </div>
          <p style="text-align: center; margin-top: 1rem;">助動詞の意味 + 受け身</p>
        </div>
        <p style="text-align: center; font-size: 1.2rem;"><strong>助動詞 + be + Vpp</strong></p>
        <div class="example-grid">
          <div class="example-item"><strong>can be seen</strong><br>（見られることができる＝見られる）</div>
          <div class="example-item"><strong>must be done</strong><br>（なされなければならない）</div>
          <div class="example-item"><strong>should be kept</strong><br>（保たれるべきだ）</div>
        </div>
      </div>

      <div class="example-box">
        <p class="example-sentence">The stars can be seen tonight.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The stars <span class="tag v-tag">can be + Vpp</span> can be seen <span class="tag m-tag">M</span> tonight</p>
        <p class="example-translation">今夜は星が見えます（見られる可能性があります）。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">This rule must be obeyed.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> This rule <span class="tag v-tag">must be + Vpp</span> must be obeyed</p>
        <p class="example-translation">このルールは守られなければなりません。</p>
      </div>
    
      <h3 class="section-title">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 助動詞の後ろは常に <strong>be</strong> (原形)</li>
        <li>✓ 文の意味は助動詞の意味（可能、義務など）＋受け身</li>
      </ul>
    </div>
  `,
  examples: [
    'It can be done easily.',
    'Children should be protected.',
    'The door must be locked.',
    'This problem cannot be solved.',
    'Answers may be written in pencil.'
  ],
  quiz: [
    {
      question: '「それは簡単になされ得る（できる）」',
      options: ['It can be done easily.', 'It can do easily.', 'It can be do easily.', 'It is can done easily.'],
      answer: 'It can be done easily.',
      explanation: 'can + be + Vpp (done) の形を使います。'
    },
    {
      question: '「この宿題は今日提出されなければならない」',
      options: ['This homework must submit today.', 'This homework must be submitted today.', 'This homework must be submit today.', 'This homework submitted today.'],
      answer: 'This homework must be submitted today.',
      explanation: '義務のmust + 受動態be submittedを使います。'
    },
    {
      question: '「その窓は開けてはいけない（開けられてはならない）」',
      options: ['The window must not open.', 'The window must not be opened.', 'The window not be opened.', 'The window don\'t opened.'],
      answer: 'The window must not be opened.',
      explanation: '禁止のmust not + 受動態be openedを使います。'
    },
    {
      question: '正しい形はどれ？',
      options: ['should be kept', 'should kept', 'should be keep', 'should is kept'],
      answer: 'should be kept',
      explanation: '助動詞shouldの後ろは原形be、その後に過去分詞keptが続きます。'
    }
  ]
};
