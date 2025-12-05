
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
    {
      question: '次のうち、代名詞はどれですか？',
      options: ['Tom', 'he', 'boy', 'student'],
      answer: 'he',
      explanation: '「he（彼は）」は人の名前の代わりに使う代名詞です。Tom（トム）、boy（少年）、student（学生）は名詞です。'
    },
    {
      question: '"This is a pen." の代名詞は？',
      options: ['This', 'is', 'a', 'pen'],
      answer: 'This',
      explanation: '「This（これは）」は指示代名詞で、物を指し示します。is（be動詞）、a（冠詞）、pen（名詞）は代名詞ではありません。'
    },
    {
      question: '「私の」を表す代名詞（所有格）は？',
      options: ['I', 'me', 'my', 'mine'],
      answer: 'my',
      explanation: '「my（私の）」は所有格の代名詞で、名詞の前に置きます。I（主格）、me（目的格）、mine（所有代名詞・～のもの）とは役割が異なります。'
    },
    {
      question: '「彼を」知っていますか？ "Do you know ( ? )?"',
      options: ['he', 'his', 'him', "he's"],
      answer: 'him',
      explanation: '「him」は目的格の代名詞で、動詞の目的語として使います。he（主格）、his（所有格）、he\'s（he is）とは異なります。'
    },
    {
      question: '「彼女のもの」を表す代名詞は？',
      options: ['she', 'her', 'hers', "she's"],
      answer: 'hers',
      explanation: '「hers（彼女のもの）」は所有代名詞で、名詞なしで単独で使えます。she（主格）、her（所有格/目的格）、she\'s（she is）とは異なります。'
    },
    {
      question: '「それ」を表す代名詞は？',
      options: ['that', 'it', 'this', 'what'],
      answer: 'it',
      explanation: '「it（それ）」は物や動物を指す代名詞です。that（あれ）は指示代名詞、this（これ）は近くのもの、what（何）は疑問詞です。'
    },
    {
      question: '「私たち」は学生です。" ( ? ) are students."',
      options: ['We', 'Us', 'Our', 'Ours'],
      answer: 'We',
      explanation: '「We（私たちは）」は主格の代名詞で、文の主語として使います。Us（目的格）、Our（所有格）、Ours（所有代名詞）とは役割が異なります。'
    },
    {
      question: '「あれ」は私の車です。" ( ? ) is my car."',
      options: ['This', 'That', 'It', 'There'],
      answer: 'That',
      explanation: '「That（あれは）」は遠くのものを指す指示代名詞です。This（これは・近く）、It（それは）、There（そこに）とは使い分けが異なります。'
    },
    {
      question: '「彼ら」を表す代名詞は？',
      options: ['they', 'them', 'their', 'theirs'],
      answer: 'they',
      explanation: '「they（彼らは）」は主格の代名詞で、文の主語として使います。them（目的格）、their（所有格）、theirs（所有代名詞）とは役割が異なります。'
    },
    {
      question: '再帰代名詞（自分自身）はどれ？',
      options: ['myself', 'me', 'my', 'mine'],
      answer: 'myself',
      explanation: '「myself（私自身）」は再帰代名詞で、「自分自身」を強調したり、動作が自分に返ってくることを表します。me（目的格）、my（所有格）、mine（所有代名詞）とは異なります。'
    }
  ]
};
