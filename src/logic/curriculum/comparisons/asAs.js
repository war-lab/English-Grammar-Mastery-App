// 原級比較 (as ~ as) のレッスン定義
export const asAs = {
  id: 'comp-as-as',
  isEnabled: true,
  title: '原級比較 (as ~ as)',
  description: '「AはBと同じくらい〜」という同等比較の表現と、その否定形・応用表現を学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>原級比較</strong>とは、2つのものが「同じくらい」であることを表す表現です。形容詞・副詞の<strong>原級（元の形）</strong>をそのまま使うのが特徴です。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.2rem; font-weight: bold;">A + be動詞 + <span style="color: var(--primary);">as</span> + 形容詞 + <span style="color: var(--primary);">as</span> + B</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">AはBと同じくらい〜だ</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">基本の as ~ as</h3>

      <div class="concept-box">
        <h4>🟰 「同じくらい〜」を表す</h4>
        <p>2つのものを比べて「同じくらい」であることを表します。<strong>as</strong> と <strong>as</strong> の間には形容詞・副詞の<strong>原級</strong>（変化させない元の形）を入れます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Tom is as tall as Ken.</strong><br>（トムはケンと同じくらい背が高い）</div>
          <div class="example-item"><strong>She runs as fast as her brother.</strong><br>（彼女は兄と同じくらい速く走る）</div>
          <div class="example-item"><strong>This book is as interesting as that one.</strong><br>（この本はあの本と同じくらい面白い）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>as ~ as の間に入るのは必ず<strong>原級</strong>です。taller や more interesting は入りません。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">否定形 not as ~ as</h3>

      <div class="concept-box">
        <h4>📉 「〜ほど○○ではない」を表す</h4>
        <p><strong>not as ~ as</strong> は「BほどAは〜ではない」という意味になります。日本語の「ほど〜ない」に対応する重要な表現です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Tom is not as tall as Ken.</strong><br>（トムはケンほど背が高くない）<br>＝ ケンの方が背が高い</div>
          <div class="example-item"><strong>This movie is not as exciting as that one.</strong><br>（この映画はあの映画ほどワクワクしない）</div>
          <div class="example-item"><strong>I can't run as fast as you.</strong><br>（私はあなたほど速く走れない）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ 注意：</strong>「not as ~ as」は<strong>比較級で書き換え可能</strong>です。<br>
        Tom is not as tall as Ken. = <strong>Ken is taller than Tom.</strong></p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">as ~ as possible / as ~ as S can</h3>

      <div class="concept-box">
        <h4>🏃 「できるだけ〜」を表す</h4>
        <p><strong>as ~ as possible</strong> と <strong>as ~ as 主語 can</strong> はどちらも「できるだけ〜」という意味の重要な慣用表現です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Please come as soon as possible.</strong><br>（できるだけ早く来てください）</div>
          <div class="example-item"><strong>Run as fast as you can.</strong><br>（できるだけ速く走りなさい）</div>
          <div class="example-item"><strong>I studied as hard as I could.</strong><br>（私はできるだけ一生懸命勉強した）<br>※過去形なら could を使う</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong><strong>as ~ as possible</strong> = <strong>as ~ as S can/could</strong>。どちらも同じ意味で書き換え可能です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">数量の as ~ as</h3>

      <div class="concept-box">
        <h4>🔢 as many / as much を使う</h4>
        <p>数えられる名詞には <strong>as many ~ as</strong>、数えられない名詞には <strong>as much ~ as</strong> を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I have as many books as you.</strong><br>（私はあなたと同じくらい多くの本を持っている）</div>
          <div class="example-item"><strong>He doesn't drink as much water as she does.</strong><br>（彼は彼女ほど水を飲まない）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">My sister is as old as your brother.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> My sister <span class="tag v-tag">V</span> is <span style="color: var(--primary); font-weight: bold;">as</span> old <span style="color: var(--primary); font-weight: bold;">as</span> your brother.</p>
        <p class="example-translation">私の姉はあなたのお兄さんと同い年です。</p>
        <p class="example-note">be動詞の後に as + 原級 + as の形が続きます。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">English is not as difficult as I thought.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> English <span class="tag v-tag">V</span> is <strong>not as</strong> difficult <strong>as</strong> I thought.</p>
        <p class="example-translation">英語は思っていたほど難しくない。</p>
        <p class="example-note">「思っていたほど〜ない」= not as ~ as S thought は頻出パターンです。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>as ~ as</strong> の間には形容詞・副詞の<strong>原級</strong>（元の形）を入れる</li>
        <li>✓ <strong>not as ~ as</strong> = 「〜ほど○○ではない」（比較級で書き換え可能）</li>
        <li>✓ <strong>as ~ as possible</strong> = <strong>as ~ as S can</strong> =「できるだけ〜」</li>
        <li>✓ 数えられる名詞 → <strong>as many</strong>、数えられない名詞 → <strong>as much</strong></li>
        <li>✓ 過去の文では can → <strong>could</strong> に変える</li>
      </ul>
    </div>
  `,
  examples: [
    'Tom is as tall as Ken. — トムはケンと同じくらい背が高い。',
    'She is not as old as she looks. — 彼女は見た目ほど歳をとっていない。',
    'Please come as soon as possible. — できるだけ早く来てください。',
    'Run as fast as you can. — できるだけ速く走りなさい。',
    'I have as many books as you. — 私はあなたと同じくらい本を持っている。',
    'English is not as difficult as I thought. — 英語は思ったほど難しくない。'
  ],
  quiz: [
    {
      question: '「トムはケンと同じくらい背が高い」を英語にすると？',
      options: ['Tom is as tall as Ken.', 'Tom is taller as Ken.', 'Tom is as taller as Ken.', 'Tom is so tall as Ken.'],
      answer: 'Tom is as tall as Ken.',
      explanation: 'as ~ as の間には形容詞の原級（tall）を入れます。taller（比較級）は入りません。'
    },
    {
      question: '「この映画はあの映画ほど面白くない」を英語にすると？',
      options: ['This movie is not as interesting as that one.', 'This movie is not more interesting as that one.', 'This movie is as not interesting as that one.', 'This movie is not as interesting than that one.'],
      answer: 'This movie is not as interesting as that one.',
      explanation: '「〜ほど○○ではない」は not as ~ as で表します。not の位置は as の前です。'
    },
    {
      question: '「できるだけ早く来てください」を英語にすると？',
      options: ['Please come as soon as possible.', 'Please come as sooner as possible.', 'Please come more soon as possible.', 'Please come as soon as can.'],
      answer: 'Please come as soon as possible.',
      explanation: '「できるだけ〜」は as + 原級 + as possible で表します。soon の原級をそのまま使います。'
    },
    {
      question: 'as ~ as possible と同じ意味の表現は？（主語が I の場合）',
      options: ['as ~ as I can', 'as ~ as I do', 'as ~ as I am', 'as ~ as I will'],
      answer: 'as ~ as I can',
      explanation: 'as ~ as possible = as ~ as 主語 can です。「できるだけ〜」という同じ意味になります。'
    },
    {
      question: '次の英文の意味として正しいのは？ "She is not as young as she looks."',
      options: ['彼女は見た目ほど若くない。', '彼女は見た目より若い。', '彼女は若く見える。', '彼女は見た目と同じくらい若い。'],
      answer: '彼女は見た目ほど若くない。',
      explanation: 'not as ~ as は「〜ほど○○ではない」という意味です。見た目（looks）ほど若く（young）ないという意味になります。'
    },
    {
      question: '空所に入る適切な語は？ "I have as ____ books as you."',
      options: ['many', 'much', 'more', 'most'],
      answer: 'many',
      explanation: 'books は数えられる名詞なので as many ~ as を使います。much は数えられない名詞に使います。'
    },
    {
      question: '「私はできるだけ一生懸命勉強した」を英語にすると？',
      options: ['I studied as hard as I could.', 'I studied as hard as I can.', 'I studied as harder as I could.', 'I studied as hard as possible I could.'],
      answer: 'I studied as hard as I could.',
      explanation: '過去の文なので can ではなく could を使います。as hard as I could = できるだけ一生懸命。'
    },
    {
      question: '"Tom is not as tall as Ken." を比較級で書き換えると？',
      options: ['Ken is taller than Tom.', 'Tom is taller than Ken.', 'Ken is not taller than Tom.', 'Tom is as tall as Ken.'],
      answer: 'Ken is taller than Tom.',
      explanation: '「トムはケンほど背が高くない」= 「ケンはトムより背が高い」。not as ~ as は比較級で書き換え可能です。'
    },
    {
      question: '空所に入る適切な語は？ "He doesn\'t earn as ____ money as his wife."',
      options: ['much', 'many', 'more', 'most'],
      answer: 'much',
      explanation: 'money は数えられない名詞なので as much ~ as を使います。many は数えられる名詞に使います。'
    },
    {
      question: '次のうち、文法的に正しい文はどれ？',
      options: ['She sings as beautifully as a professional.', 'She sings as more beautifully as a professional.', 'She sings as beautiful as a professional.', 'She sings so beautifully as a professional.'],
      answer: 'She sings as beautifully as a professional.',
      explanation: 'sings（動詞）を修飾するので副詞 beautifully の原級を as ~ as の間に入れます。形容詞 beautiful は不可。'
    }
  ]
};
