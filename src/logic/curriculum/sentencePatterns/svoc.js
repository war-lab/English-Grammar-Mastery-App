
export const svoc = {
  id: 'sentence-pattern-5-svoc',
  isEnabled: true,
  title: '第5文型 (SVOC) - Subject + Verb + Object + Complement',
  description: '目的語の状態や性質を補語で説明する文型。O = C の関係が成り立ちます。',
  explanation: `
    <div class="explanation-section">
      <h3 class="section-title">第5文型（SVOC）とは？</h3>
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

      <div class="concept-box">
        <h4>基本構造</h4>
        <p><strong>主語 (S) + 動詞 (V) + 目的語 (O) + 補語 (C)</strong></p>
        <p><strong>重要：O = C の関係が成り立つ</strong></p>
      </div>
      
      <h3 class="section-title">第5文型で使われる主な動詞</h3>
      <ul class="check-list">
        <li><strong>「〜にする」系</strong>：make, keep, leave, paint, turn</li>
        <li><strong>「〜と呼ぶ」系</strong>：call, name</li>
        <li><strong>「〜だと思う」系</strong>：think, believe, consider, find</li>
        <li><strong>知覚動詞</strong>：see, hear, watch, feel</li>
      </ul>

      <h3 class="section-title">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">We call him Mike.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> We <span class="tag v-tag">V</span> call <span class="tag o-tag">O</span> him <span class="tag c-tag">C</span> Mike</p>
        <p class="example-translation">私たちは彼をマイクと呼ぶ。</p>
        <p class="example-note">him = Mike の関係が成り立ちます。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">The news made me happy.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The news <span class="tag v-tag">V</span> made <span class="tag o-tag">O</span> me <span class="tag c-tag">C</span> happy</p>
        <p class="example-translation">そのニュースは私を幸せにした。</p>
        <p class="example-note">me = happy（私 = 幸せ）の関係。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Please keep the room clean.</p>
        <p class="example-breakdown"><span class="tag v-tag">V</span> Keep <span class="tag o-tag">O</span> the room <span class="tag c-tag">C</span> clean</p>
        <p class="example-translation">部屋をきれいにしておいてください。</p>
        <p class="example-note">the room = clean の関係。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">I found the book interesting.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> found <span class="tag o-tag">O</span> the book <span class="tag c-tag">C</span> interesting</p>
        <p class="example-translation">私はその本が面白いとわかった。</p>
        <p class="example-note">the book = interesting の関係。</p>
      </div>

      <h3 class="section-title">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>O = C</strong> の関係が成り立つ</li>
        <li>✓ 補語（C）は目的語（O）を説明する</li>
        <li>✓ 「O を C にする」「O を C と呼ぶ」などの意味</li>
      </ul>
    </div>
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
