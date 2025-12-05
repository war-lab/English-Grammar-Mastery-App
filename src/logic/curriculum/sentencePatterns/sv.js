
export const sv = {
  id: 'sentence-pattern-1-sv',
  isEnabled: true,
  title: '第1文型 (SV) - Subject + Verb',
  description: '主語と動詞だけで完結する文型。目的語も補語もない構造です。',
  explanation: `
    <div class="explanation-section">
      <h3 class="section-title">第1文型（SV）とは？</h3>
      <p>第1文型は英語の文型の中で最もシンプルな形です。<strong>主語（S）と動詞（V）</strong>だけで意味が完結します。</p>
      <p>この文型では、<strong>目的語（O）も補語（C）も必要ありません</strong>。動詞が自動詞（目的語を必要としない動詞）である場合に使われます。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Subject">S</div>
        <div class="diagram-arrow">V</div>
        <div class="diagram-box" data-label="Verb">V</div>
        <div class="diagram-example">Birds fly.</div>
      </div>
      
      <div class="concept-box">
        <h4>基本構造</h4>
        <p><strong>主語 (S) + 動詞 (V)</strong></p>
        <p>多くの場合、場所や時間を表す修飾語句（M）が付きますが、文型の本質的な要素ではありません。</p>
      </div>
      
      <h3 class="section-title">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">The sun rises.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The sun <span class="tag v-tag">V</span> rises</p>
        <p class="example-translation">太陽が昇る。</p>
        <p class="example-note">「昇る」という動作に目的語は必要ありません。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She smiled.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> smiled</p>
        <p class="example-translation">彼女は微笑んだ。</p>
        <p class="example-note">「微笑む」は自動詞で、目的語を取りません。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">I go to school every day.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> go <span class="tag m-tag">(M)</span> to school <span class="tag m-tag">(M)</span> every day</p>
        <p class="example-translation">私は毎日学校へ行く。</p>
        <p class="example-note">「to school」は場所を表す修飾語句（M）で、文型の要素ではありません。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Birds fly in the sky.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> Birds <span class="tag v-tag">V</span> fly <span class="tag m-tag">(M)</span> in the sky</p>
        <p class="example-translation">鳥が空を飛ぶ。</p>
      </div>

      <h3 class="section-title">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 動詞の後に「何を」「どうなる」が<strong>不要</strong></li>
        <li>✓ 自動詞のみが使われる</li>
        <li>✓ 場所・時間などの修飾語があっても文型は変わらない</li>
        <li>✓ VOは含まれない</li>
      </ul>
    </div>
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
