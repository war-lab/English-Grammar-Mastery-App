
export const svoo = {
  id: 'sentence-pattern-4-svoo',
  isEnabled: true,
  title: '第4文型 (SVOO) - Subject + Verb + Object + Object',
  description: '「誰に」「何を」を表す2つの目的語を持つ文型です。',
  explanation: `
    <div class="explanation-section">
      <h3 class="section-title">第4文型（SVOO）とは？</h3>
      <p>第4文型は<strong>主語（S）+ 動詞（V）+ 目的語1（O1）+ 目的語2（O2）</strong>の構造です。</p>
      <p>この文型は<strong>「S が O1（人）に O2（物・事）を V する」</strong>という意味になります。</p>
      <p><strong>2つの目的語が並ぶ</strong>のが特徴で、最初の目的語（O1）は通常「人」、2番目の目的語（O2）は「物・事」を表します。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Subject">S</div>
        <div class="diagram-arrow">V</div>
        <div class="diagram-box" data-label="Verb">V</div>
        <div class="diagram-arrow">to</div>
        <div class="diagram-box" data-label="Object 1">O₁</div>
        <div class="diagram-arrow"></div>
        <div class="diagram-box" data-label="Object 2">O₂</div>
        <div class="diagram-example">I gave him a gift.</div>
      </div>

      <div class="concept-box">
        <h4>基本構造</h4>
        <p><strong>主語 (S) + 動詞 (V) + 目的語1 (O1: 人) + 目的語2 (O2: 物・事)</strong></p>
        <p><strong>意味：「S が O1 に O2 を V する」</strong></p>
      </div>
      
      <h3 class="section-title">第4文型で使われる主な動詞（授与動詞）</h3>
      <ul class="check-list">
        <li><strong>与える系</strong>：give, pass, hand, lend, send, offer</li>
        <li><strong>伝える系</strong>：tell, teach, show, ask</li>
        <li><strong>作る系</strong>：make, buy, cook, get, find</li>
      </ul>

      <h3 class="section-title">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I gave him a present.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> gave <span class="tag o-tag">O1</span> him <span class="tag o-tag">O2</span> a present</p>
        <p class="example-translation">私は彼にプレゼントをあげた。</p>
        <p class="example-note">書き換え：I gave a present <strong>to</strong> him.</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She taught me English.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> taught <span class="tag o-tag">O1</span> me <span class="tag o-tag">O2</span> English</p>
        <p class="example-translation">彼女は私に英語を教えた。</p>
        <p class="example-note">書き換え：She taught English <strong>to</strong> me.</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">My mother made me lunch.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> My mother <span class="tag v-tag">V</span> made <span class="tag o-tag">O1</span> me <span class="tag o-tag">O2</span> lunch</p>
        <p class="example-translation">母は私に昼食を作った。</p>
        <p class="example-note">書き換え：My mother made lunch <strong>for</strong> me.</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">He showed us his new car.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V</span> showed <span class="tag o-tag">O1</span> us <span class="tag o-tag">O2</span> his new car</p>
        <p class="example-translation">彼は私たちに新車を見せた。</p>
      </div>

      <h3 class="section-title">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>目的語が2つ並ぶ</strong>（SVOO）</li>
        <li>✓ O1（最初）= 人、O2（2番目）= 物・事</li>
        <li>✓ 「S が O1 に O2 を V する」の意味</li>
        <li>✓ 第3文型に書き換え可能（to または for を使う）</li>
      </ul>

      <h3 class="section-title">toとforの使い分け</h3>
      <table class="comparison-table">
        <tr>
          <th>to を使う動詞</th>
          <th>for を使う動詞</th>
        </tr>
        <tr>
          <td>give, lend, send, pass, hand, show, teach, tell</td>
          <td>buy, make, cook, get, find</td>
        </tr>
        <tr>
          <td>「渡す・伝える」イメージ</td>
          <td>「作る・得る」イメージ</td>
        </tr>
      </table>
    </div>
  `,
  examples: [
    'I will give you this book.',
    'He told me the truth.',
    'She bought her son a bike.',
    'Please pass me the salt.',
    'Dad made us dinner.',
    'The teacher showed the students the answer.',
    'I sent him an email.'
  ],
  quiz: [
    {
      question: '次の文で第4文型 (SVOO) はどれですか？',
      options: ['I like music.', 'She gave me a gift.', 'He is kind.', 'They study hard.'],
      answer: 'She gave me a gift.',
      explanation: '「She gave me a gift」は主語(She)、動詞(gave)、間接目的語(me)、直接目的語(a gift)から構成される第4文型です。他の選択肢は第1、第2、第3文型です。'
    },
    {
      question: '「私は彼に本をあげた」を英語で表すと？',
      options: ['I gave a book him.', 'I gave him a book.', 'I gave to him a book.', 'I gave a book to he.'],
      answer: 'I gave him a book.',
      explanation: '第4文型では「S + V + O1(人) + O2(もの)」の順序です。「I gave him a book」で、himが間接目的語、a bookが直接目的語です。'
    },
    {
      question: '第4文型を第3文型に書き換えたとき、"She made me a cake." はどうなりますか？',
      options: ['She made a cake to me.', 'She made a cake for me.', 'She made a cake with me.', 'She made a cake by me.'],
      answer: 'She made a cake for me.',
      explanation: 'make、buy、cookなどの動詞では、第3文型に書き換えるときは「for」を使います。「She made a cake for me（彼女は私のためにケーキを作った）」となります。'
    },
    {
      question: '次のうち、第4文型で使える授与動詞はどれですか？',
      options: ['go', 'become', 'teach', 'run'],
      answer: 'teach',
      explanation: '「teach（教える）」は第4文型で使われる授与動詞で、「teach + 人 + もの」の形で使います。goとrunは自動詞、becomeは第2文型で使われる連絡動詞です。'
    },
    {
      question: ' "He sent a letter to Mary." を第4文型に書き換えると？',
      options: ['He sent Mary a letter.', 'He sent to Mary a letter.', 'He sent a letter Mary.', 'He sent for Mary a letter.'],
      answer: 'He sent Mary a letter.',
      explanation: '第3文型「He sent a letter to Mary」を第4文型に書き換えると「He sent Mary a letter」となります。toを取り、間接目的語(Mary)を直接目的語(a letter)の前に置きます。'
    },
    {
      question: '「母は私に新しいドレスを買ってくれた」を英語で表すと？',
      options: ['My mother bought to me a new dress.', 'My mother bought me a new dress.', 'My mother bought for me a new dress.', 'My mother bought a new dress me.'],
      answer: 'My mother bought me a new dress.',
      explanation: '第4文型では「S + V + O1(人) + O2(もの)」の順序で、前置詞は不要です。「My mother bought me a new dress」が正しい第4文型の形です。'
    },
    {
      question: '次のうち、書き換えるときに "to" を使う動詞はどれですか？',
      options: ['make', 'buy', 'show', 'cook'],
      answer: 'show'
    }
  ]
};
