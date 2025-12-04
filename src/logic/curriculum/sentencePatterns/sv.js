
export const sv = {
  id: 'sentence-pattern-1-sv',
  isEnabled: true,
  title: '第1文型 (SV) - Subject + Verb',
  description: '主語と動詞だけで完結する文型。目的語も補語もない構造です。',
  explanation: `
    <h3>第1文型（SV）とは？</h3>
    <p>第1文型は英語の文型の中で最もシンプルな形です。<strong>主語（S）と動詞（V）</strong>だけで意味が完結します。</p>
    <p>この文型では、<strong>目的語（O）も補語（C）も必要ありません</strong>。動詞が自動詞（目的語を必要としない動詞）である場合に使われます。</p>
    
    <div class="diagram-container">
      <div class="diagram-box" data-label="Subject">S</div>
      <div class="diagram-arrow">V</div>
      <div class="diagram-box" data-label="Verb">V</div>
      <div class="diagram-example">Birds fly.</div>
    </div>
    
    <h3>基本構造</h3>
    <p><strong>主語 (S) + 動詞 (V)</strong></p>
    <p>多くの場合、場所や時間を表す修飾語句（M）が付きますが、文型の本質的な要素ではありません。</p>
    
    <h3>第1文型で使われる主な動詞</h3>
    <ul>
      <li><strong>移動を表す動詞</strong>：go（行く）、come（来る）、run（走る）、walk（歩く）、arrive（到着する）</li>
      <li><strong>存在を表す動詞</strong>：exist（存在する）、live（住む）、stay（滞在する）</li>
      <li><strong>状態を表す動詞</strong>：sleep（眠る）、sit（座る）、stand（立つ）、lie（横たわる）</li>
      <li><strong>自然現象</strong>：rain（雨が降る）、snow（雪が降る）、shine（輝く）</li>
    </ul>

    <h3>詳細な例文と解説</h3>
    <p><em>The sun rises.</em></p>
    <ul>
      <li>S = The sun（太陽が）</li>
      <li>V = rises（昇る）</li>
      <li>意味：太陽が昇る。</li>
      <li>解説：「昇る」という動作に目的語は必要ありません。</li>
    </ul>

    <p><em>She smiled.</em></p>
    <ul>
      <li>S = She（彼女が）</li>
      <li>V = smiled（微笑んだ）</li>
      <li>意味：彼女は微笑んだ。</li>
      <li>解説：「微笑む」は自動詞で、目的語を取りません。</li>
    </ul>

    <p><em>I go to school every day.</em></p>
    <ul>
      <li>S = I（私は）</li>
      <li>V = go（行く）</li>
      <li>M = to school（学校へ）every day（毎日）</li>
      <li>意味：私は毎日学校へ行く。</li>
      <li>解説：「to school」は場所を表す修飾語句（M）で、文型の要素ではありません。</li>
    </ul>

    <p><em>Birds fly in the sky.</em></p>
    <ul>
      <li>S = Birds（鳥が）</li>
      <li>V = fly（飛ぶ）</li>
      <li>M = in the sky（空を）</li>
      <li>意味：鳥が空を飛ぶ。</li>
    </ul>

    <h3>覚えておくべきポイント</h3>
    <ul>
      <li>✓ 動詞の後に「何を」「どうなる」が<strong>不要</strong></li>
      <li>✓ 自動詞のみが使われる</li>
      <li>✓ 場所・時間などの修飾語があっても文型は変わらない</li>
      <li>✓ VOは含まれない</li>
    </ul>
  `,
  examples: [
    'The baby cried.',
    'He works hard.',
    'The train arrived at the station.',
    'Time flies.',
    'My heart beats fast.'
  ],
  quiz: [
    {
      question: '次の文で第1文型 (SV) はどれですか？',
      options: ['I am happy.', 'She runs fast.', 'He plays tennis.', 'We are students.'],
      answer: 'She runs fast.'
    },
    {
      question: '第1文型の文を完成させてください：Birds ___ in the sky.',
      options: ['are', 'fly', 'beautiful', 'like'],
      answer: 'fly'
    },
    {
      question: '「太陽が輝いている」を第1文型で表すと？',
      options: ['The sun is bright.', 'The sun shines.', 'The sun has light.', 'The sun makes light.'],
      answer: 'The sun shines.'
    },
    {
      question: '次のうち、第1文型で使える自動詞はどれですか？',
      options: ['make', 'have', 'exist', 'give'],
      answer: 'exist'
    }
  ]
};
