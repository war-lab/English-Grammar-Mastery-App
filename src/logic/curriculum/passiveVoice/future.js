
export const passiveFuture = {
  id: 'passive-voice-future',
  isEnabled: true,
  title: '未来の受動態 (Future Passive)',
  description: '「〜されるでしょう」という未来の受け身を表します。',
  explanation: `
    <div class="explanation-section">
      <h3 class="section-title">未来の受動態の形</h3>
      
      <div class="concept-box">
        <h4>📝 will + be + 過去分詞</h4>
        <p>未来を表す助動詞 <strong>will</strong> の後ろに <strong>be + Vpp</strong> を続けます。</p>
        <div class="example-grid">
          <div class="example-item">
            <strong>will be cooked</strong><br>（料理されるでしょう）
          </div>
          <div class="example-item">
            <strong>will be finished</strong><br>（終わるでしょう）
          </div>
        </div>
      </div>

      <div class="concept-box">
        <h4>📝 be going to + be + 過去分詞</h4>
        <p><strong>be going to</strong> を使うこともできます。</p>
        <div class="example-grid">
           <div class="example-item">
            <strong>is going to be held</strong><br>（開催される予定です）
          </div>
        </div>
      </div>

      <div class="example-box">
        <p class="example-sentence">The new station will be opened next month.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The new station <span class="tag v-tag">will be + Vpp</span> will be opened <span class="tag m-tag">M</span> next month</p>
        <p class="example-translation">新しい駅は来月開業するでしょう（開業されます）。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">The letter will be sent tomorrow.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The letter <span class="tag v-tag">will be + Vpp</span> will be sent <span class="tag m-tag">M</span> tomorrow</p>
        <p class="example-translation">その手紙は明日送られるでしょう。</p>
      </div>
      
      <h3 class="section-title">否定と疑問</h3>
      <ul class="check-list">
        <li>❌ 否定: will <strong>not</strong> be + Vpp (won't be ...)</li>
        <li>❓ 疑問: <strong>Will</strong> + S + be + Vpp?</li>
      </ul>
    </div>
  `,
  examples: [
    'The problem will be solved soon.',
    'The decision will be made by the manager.',
    'It won\'t be forgotten.',
    'Will the party be held outside?',
    'The room is going to be cleaned.'
  ],
  quiz: [
    {
      question: '未来の受動態の正しい語順は？',
      options: ['will be Vpp', 'will Vpp', 'be will Vpp', 'will been Vpp'],
      answer: 'will be Vpp',
      explanation: '助動詞 will の後ろは動詞の原形(be)になり、その後に過去分詞(Vpp)が続きます。'
    },
    {
      question: '「その橋は来年建設されるでしょう」',
      options: ['The bridge will build next year.', 'The bridge will be built next year.', 'The bridge built next year.', 'The bridge will be build next year.'],
      answer: 'The bridge will be built next year.',
      explanation: '未来の受動態は will be + Vpp (built) です。buildは原形なので不適切です。'
    },
    {
      question: '否定文「それは忘れられないでしょう」',
      options: ['It will not be forgotten.', 'It will not forgotten.', 'It not will be forgotten.', 'It be not forgotten.'],
      answer: 'It will not be forgotten.',
      explanation: '否定のnotはwillの直後に入れます：will not be + Vpp。'
    },
    {
      question: '次の文を未来の受動態にしなさい： "They will clean the room."',
      options: ['The room will clean by them.', 'The room will be cleaned by them.', 'The room is cleaned by them.', 'The room will be clean by them.'],
      answer: 'The room will be cleaned by them.',
      explanation: 'will clean → will be cleaned に変化します。'
    }
  ]
};
