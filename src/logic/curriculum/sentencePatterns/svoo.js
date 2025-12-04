
export const svoo = {
  id: 'sentence-pattern-4-svoo',
  isEnabled: true,
  title: '第4文型 (SVOO) - Subject + Verb + Object + Object',
  description: '「誰に」「何を」を表す2つの目的語を持つ文型です。',
  explanation: `
    <h3>第4文型（SVOO）とは？</h3>
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

    <h3>基本構造</h3>
    <p><strong>主語 (S) + 動詞 (V) + 目的語1 (O1: 人) + 目的語2 (O2: 物・事)</strong></p>
    <p><strong>意味：「S が O1 に O2 を V する」</strong></p>
    
    <h3>第4文型で使われる主な動詞（授与動詞）</h3>
    <ul>
      <li><strong>与える系</strong>：
        <ul>
          <li>give（与える）</li>
          <li>pass（渡す）</li>
          <li>hand（手渡す）</li>
          <li>lend（貸す）</li>
          <li>bring（持ってくる）</li>
          <li>send（送る）</li>
          <li>offer（提供する）</li>
        </ul>
      </li>
      <li><strong>伝える系</strong>：
        <ul>
          <li>tell（伝える、話す）</li>
          <li>teach（教える）</li>
          <li>show（見せる）</li>
          <li>ask（尋ねる）</li>
        </ul>
      </li>
      <li><strong>作る系</strong>：
        <ul>
          <li>make（作る）</li>
          <li>buy（買う）</li>
          <li>cook（料理する）</li>
          <li>get（手に入れる）</li>
          <li>find（見つける）</li>
        </ul>
      </li>
    </ul>

    <h3>第3文型への書き換え</h3>
    <p>第4文型は第3文型に書き換えることができます：</p>
    <p><strong>SVOO → SVO (前置詞) O</strong></p>
    <ul>
      <li>give/pass/hand/lend/send → to を使う</li>
      <li>buy/make/cook/get/find → for を使う</li>
    </ul>

    <h3>詳細な例文と解説</h3>
    <p><em>I gave him a present.</em></p>
    <ul>
      <li>S = I（私は）</li>
      <li>V = gave（与えた）</li>
      <li>O1 = him（彼に）← 人</li>
      <li>O2 = a present（プレゼントを）← 物</li>
      <li>意味：私は彼にプレゼントをあげた。</li>
      <li>書き換え：I gave a present <strong>to</strong> him.</li>
    </ul>

    <p><em>She taught me English.</em></p>
    <ul>
      <li>S = She（彼女は）</li>
      <li>V = taught（教えた）</li>
      <li>O1 = me（私に）← 人</li>
      <li>O2 = English（英語を）← 物</li>
      <li>意味：彼女は私に英語を教えた。</li>
      <li>書き換え：She taught English <strong>to</strong> me.</li>
    </ul>

    <p><em>My mother made me lunch.</em></p>
    <ul>
      <li>S = My mother（母は）</li>
      <li>V = made（作った）</li>
      <li>O1 = me（私に）← 人</li>
      <li>O2 = lunch（昼食を）← 物</li>
      <li>意味：母は私に昼食を作った。</li>
      <li>書き換え：My mother made lunch <strong>for</strong> me.</li>
    </ul>

    <p><em>He showed us his new car.</em></p>
    <ul>
      <li>S = He（彼は）</li>
      <li>V = showed（見せた）</li>
      <li>O1 = us（私たちに）← 人</li>
      <li>O2 = his new car（彼の新車を）← 物</li>
      <li>意味：彼は私たちに新車を見せた。</li>
      <li>書き換え：He showed his new car <strong>to</strong> us.</li>
    </ul>

    <p><em>Tom sent Mary a letter.</em></p>
    <ul>
      <li>S = Tom（トムは）</li>
      <li>V = sent（送った）</li>
      <li>O1 = Mary（メアリーに）← 人</li>
      <li>O2 = a letter（手紙を）← 物</li>
      <li>意味：トムはメアリーに手紙を送った。</li>
      <li>書き換え：Tom sent a letter <strong>to</strong> Mary.</li>
    </ul>

    <p><em>She bought her daughter a doll.</em></p>
    <ul>
      <li>S = She（彼女は）</li>
      <li>V = bought（買った）</li>
      <li>O1 = her daughter（彼女の娘に）← 人</li>
      <li>O2 = a doll（人形を）← 物</li>
      <li>意味：彼女は娘に人形を買った。</li>
      <li>書き換え：She bought a doll <strong>for</strong> her daughter.</li>
    </ul>

    <h3>覚えておくべきポイント</h3>
    <ul>
      <li>✓ <strong>目的語が2つ並ぶ</strong>（SVOO）</li>
      <li>✓ O1（最初）= 人、O2（2番目）= 物・事</li>
      <li>✓ 「S が O1 に O2 を V する」の意味</li>
      <li>✓ 第3文型に書き換え可能（to または for を使う）</li>
      <li>✓ give系の動詞は <strong>to</strong>、make系の動詞は <strong>for</strong> を使う</li>
    </ul>

    <h3>toとforの使い分け</h3>
    <table border="1" style="border-collapse: collapse; width: 100%;">
      <tr>
        <th style="padding: 8px; background-color: #555500;">to を使う動詞</th>
        <th style="padding: 8px; background-color: #555500;">for を使う動詞</th>
      </tr>
      <tr>
        <td style="padding: 8px;">give, lend, send, pass, hand, show, teach, tell</td>
        <td style="padding: 8px;">buy, make, cook, get, find</td>
      </tr>
      <tr>
        <td style="padding: 8px;">「渡す・伝える」イメージ</td>
        <td style="padding: 8px;">「作る・得る」イメージ</td>
      </tr>
    </table>
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
      answer: 'She gave me a gift.'
    },
    {
      question: '「私は彼に本をあげた」を英語で表すと？',
      options: ['I gave a book him.', 'I gave him a book.', 'I gave to him a book.', 'I gave a book to he.'],
      answer: 'I gave him a book.'
    },
    {
      question: '第4文型を第3文型に書き換えたとき、"She made me a cake." はどうなりますか？',
      options: ['She made a cake to me.', 'She made a cake for me.', 'She made a cake with me.', 'She made a cake by me.'],
      answer: 'She made a cake for me.'
    },
    {
      question: '次のうち、第4文型で使える授与動詞はどれですか？',
      options: ['go', 'become', 'teach', 'run'],
      answer: 'teach'
    },
    {
      question: ' "He sent a letter to Mary." を第4文型に書き換えると？',
      options: ['He sent Mary a letter.', 'He sent to Mary a letter.', 'He sent a letter Mary.', 'He sent for Mary a letter.'],
      answer: 'He sent Mary a letter.'
    },
    {
      question: '「母は私に新しいドレスを買ってくれた」を英語で表すと？',
      options: ['My mother bought to me a new dress.', 'My mother bought me a new dress.', 'My mother bought for me a new dress.', 'My mother bought a new dress me.'],
      answer: 'My mother bought me a new dress.'
    },
    {
      question: '次のうち、書き換えるときに "to" を使う動詞はどれですか？',
      options: ['make', 'buy', 'show', 'cook'],
      answer: 'show'
    }
  ]
};
