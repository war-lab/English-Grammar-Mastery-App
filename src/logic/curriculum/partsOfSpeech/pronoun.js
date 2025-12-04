
export const pronoun = {
  id: 'pos-pronoun',
  isEnabled: true,
  title: '代名詞 (Pronoun)',
  description: '名詞の代わりに使われる言葉です。',
  explanation: `
    <h3>代名詞 (Pronoun) とは？</h3>
    <p>代名詞は、一度出てきた名詞の繰り返しを避けるために、<strong>名詞の代わり</strong>に使われる言葉です。</p>
    
    <div class="diagram-container">
      <div class="diagram-box" data-label="Noun">Tom</div>
      <div class="diagram-arrow">代わり</div>
      <div class="diagram-box" data-label="Pronoun" style="background-color: #8b5cf6;">He</div>
    </div>

    <h3>主な代名詞</h3>
    <ul>
      <li><strong>人称代名詞</strong>: I, you, he, she, it, we, they</li>
      <li><strong>指示代名詞</strong>: this, that, these, those</li>
    </ul>

    <h3>例文</h3>
    <p><em><strong>She</strong> is my friend.</em> (<strong>彼女は</strong>私の友達です)</p>
    <p><em>I like <strong>it</strong>.</em> (私は<strong>それが</strong>好きです)</p>
  `,
  examples: ['I', 'you', 'he', 'she', 'it', 'this'],
  quiz: [
    { question: '次のうち、代名詞はどれですか？', options: ['Tom', 'he', 'boy', 'student'], answer: 'he' },
    { question: '"This is a pen." の代名詞は？', options: ['This', 'is', 'a', 'pen'], answer: 'This' }
  ]
};
