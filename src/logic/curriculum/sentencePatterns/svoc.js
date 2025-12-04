
export const svoc = {
  id: 'sentence-pattern-5-svoc',
  isEnabled: true,
  title: '第5文型 (SVOC) - Subject + Verb + Object + Complement',
  description: '目的語の状態や性質を補語で説明する文型。O = C の関係が成り立ちます。',
  explanation: `
    <h3>第5文型（SVOC）とは？</h3>
    <p>第5文型は<strong>主語（S）+ 動詞（V）+ 目的語（O）+ 補語（C）</strong>の構造です。</p>
    <p>この文型は<strong>「S が O を C にする/C だと思う」</strong>という意味になります。</p>
    <p>最大の特徴は、<strong>O = C</strong>の関係が成り立つことです。補語（C）は目的語（O）の状態や性質を説明します。</p>
    
    <div class="diagram-container">
      <div class="diagram-box" data-label="Subject">S</div>
      <div class="diagram-arrow">V</div>
      <div class="diagram-box" data-label="Verb">V</div>
      <div class="diagram-arrow"></div>
      <div class="diagram-box" data-label="Object">O</div>
      <div class="diagram-operator">=</div>
      <div class="diagram-box" data-label="Complement">C</div>
      <div class="diagram-example">We call him Mike. (him = Mike)</div>
    </div>

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

    <h3>詳細な例文と解説</h3>
    <p><em>We call him Mike.</em></p>
    <ul>
      <li>S = We（私たちは）</li>
      <li>V = call（呼ぶ）</li>
      <li>O = him（彼を）</li>
      <li>C = Mike（マイクと）</li>
      <li>関係：him = Mike</li>
      <li>意味：私たちは彼をマイクと呼ぶ。</li>
    </ul>

    <p><em>The news made me happy.</em></p>
    <ul>
      <li>S = The news（そのニュースは）</li>
      <li>V = made（した）</li>
      <li>O = me（私を）</li>
      <li>C = happy（幸せに）</li>
      <li>関係：me = happy</li>
      <li>意味：そのニュースは私を幸せにした。</li>
    </ul>

    <p><em>Please keep the room clean.</em></p>
    <ul>
      <li>S = (You)（あなたは）</li>
      <li>V = keep（保つ）</li>
      <li>O = the room（部屋を）</li>
      <li>C = clean（きれいに）</li>
      <li>関係：the room = clean</li>
      <li>意味：部屋をきれいにしておいてください。</li>
    </ul>

    <p><em>I found the book interesting.</em></p>
    <ul>
      <li>S = I（私は）</li>
      <li>V = found（わかった/思った）</li>
      <li>O = the book（その本が）</li>
      <li>C = interesting（面白いと）</li>
      <li>関係：the book = interesting</li>
      <li>意味：私はその本が面白いとわかった。</li>
    </ul>

    <p><em>They named the baby Sakura.</em></p>
    <ul>
      <li>S = They（彼らは）</li>
      <li>V = named（名付けた）</li>
      <li>O = the baby（その赤ちゃんを）</li>
      <li>C = Sakura（サクラと）</li>
      <li>関係：the baby = Sakura</li>
      <li>意味：彼らはその赤ちゃんをサクラと名付けた。</li>
    </ul>

    <h3>覚えておくべきポイント</h3>
    <ul>
      <li>✓ <strong>O = C</strong> の関係が成り立つ</li>
      <li>✓ 補語（C）は目的語（O）を説明する</li>
      <li>✓ 「O を C にする」「O を C と呼ぶ」などの意味</li>
    </ul>

    <h3>第4文型との違い</h3>
    <p>第4文型（SVOO）：He made me a cake.（私 ≠ ケーキ）← O1 ≠ O2</p>
    <p>第5文型（SVOC）：He made me happy.（私 = 幸せ）← O = C</p>
  `,
  examples: [
    'We elected him captain.',
    'She painted the wall white.',
    'I believe him honest.',
    'Don\'t leave the door open.',
    'He made his parents proud.',
    'I saw him running.',
    'We consider the plan impossible.'
  ],
  quiz: [
    {
      question: '次の文で第5文型 (SVOC) はどれですか？',
      options: ['I gave him a book.', 'She made me happy.', 'He bought a car.', 'They are students.'],
      answer: 'She made me happy.'
    },
    {
      question: '第5文型の文を完成させてください：Please keep the door ___.',
      options: ['open', 'opens', 'opening', 'to open'],
      answer: 'open'
    },
    {
      question: '「私たちは彼をトムと呼ぶ」を英語で表すと？',
      options: ['We call Tom him.', 'We call him Tom.', 'We call to him Tom.', 'We call for him Tom.'],
      answer: 'We call him Tom.'
    },
    {
      question: '次のうち、O = C の関係が成り立つのはどれですか？',
      options: ['He made me lunch.', 'She calls me Ken.', 'I bought him a pen.', 'They showed us photos.'],
      answer: 'She calls me Ken.'
    },
    {
      question: '「その知らせは彼女を悲しませた」を英語で表すと？',
      options: ['The news made her sad.', 'The news made sad her.', 'The news made to her sad.', 'The news made for her sad.'],
      answer: 'The news made her sad.'
    },
    {
      question: '次のうち、第5文型で使える動詞はどれですか？',
      options: ['keep', 'give', 'buy', 'send'],
      answer: 'keep'
    }
  ]
};
