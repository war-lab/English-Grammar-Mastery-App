
export const pronoun = {
  id: 'pos-pronoun',
  isEnabled: true,
  title: '代名詞 (Pronoun)',
  description: '名詞の代わりに使われる言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>代名詞は、一度出てきた名詞の繰り返しを避けるために、<strong>名詞の代わり</strong>に使われる言葉です。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Noun">Tom</div>
        <div class="diagram-arrow">代わり</div>
        <div class="diagram-box" data-label="Pronoun" style="background-color: #8b5cf6;">He</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">代名詞の格変化表</h3>

      <div class="concept-box">
        <p>文の中での役割（主語、所有、目的語）によって形が変わります。</p>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem;">
            <thead>
              <tr style="border-bottom: 2px solid var(--text-muted);">
                <th style="padding: 0.5rem; text-align: left;">主格 (S)<br><span style="font-weight: normal; font-size: 0.8em;">〜は/が</span></th>
                <th style="padding: 0.5rem; text-align: left;">所有格<br><span style="font-weight: normal; font-size: 0.8em;">〜の</span></th>
                <th style="padding: 0.5rem; text-align: left;">目的格 (O)<br><span style="font-weight: normal; font-size: 0.8em;">〜を/に</span></th>
                <th style="padding: 0.5rem; text-align: left;">所有代名詞<br><span style="font-weight: normal; font-size: 0.8em;">〜のもの</span></th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.5rem; color: var(--primary); font-weight: bold;">I</td>
                <td style="padding: 0.5rem;">my</td>
                <td style="padding: 0.5rem;">me</td>
                <td style="padding: 0.5rem;">mine</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.5rem; color: var(--primary); font-weight: bold;">you</td>
                <td style="padding: 0.5rem;">your</td>
                <td style="padding: 0.5rem;">you</td>
                <td style="padding: 0.5rem;">yours</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.5rem; color: var(--primary); font-weight: bold;">he</td>
                <td style="padding: 0.5rem;">his</td>
                <td style="padding: 0.5rem;">him</td>
                <td style="padding: 0.5rem;">his</td>
              </tr>
              <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <td style="padding: 0.5rem; color: var(--primary); font-weight: bold;">she</td>
                <td style="padding: 0.5rem;">her</td>
                <td style="padding: 0.5rem;">her</td>
                <td style="padding: 0.5rem;">hers</td>
              </tr>
              <tr>
                <td style="padding: 0.5rem; color: var(--primary); font-weight: bold;">it</td>
                <td style="padding: 0.5rem;">its</td>
                <td style="padding: 0.5rem;">it</td>
                <td style="padding: 0.5rem;">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="concept-box">
        <h4>👉 指示代名詞 (Demonstrative Pronouns)</h4>
        <p>「これ」「あれ」など、物を指し示す言葉です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>This</strong> 👇<br>(これ - 近く)</div>
          <div class="example-item"><strong>That</strong> 👉<br>(あれ - 遠く)</div>
        </div>
      </div>
    </div>
  `,
  examples: ['I', 'you', 'he', 'she', 'it', 'this'],
  quiz: [
    { question: '次のうち、代名詞はどれですか？', options: ['Tom', 'he', 'boy', 'student'], answer: 'he' },
    { question: '"This is a pen." の代名詞は？', options: ['This', 'is', 'a', 'pen'], answer: 'This' }
  ]
};
