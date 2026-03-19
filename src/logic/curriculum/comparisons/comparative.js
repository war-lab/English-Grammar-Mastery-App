// 比較級 (-er than / more ~ than) のレッスン定義
export const comparative = {
  id: 'comp-comparative',
  isEnabled: true,
  title: '比較級 (-er than / more ~ than)',
  description: '「AはBより〜だ」という比較級の作り方、スペルの変化ルール、不規則変化を学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>比較級</strong>は、2つのものを比べて「AはBより〜だ」と言いたいときに使います。形容詞・副詞の形を変えて <strong>than</strong> と一緒に使います。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.1rem; font-weight: bold;">短い語: A + be動詞 + 形容詞<span style="color: var(--primary);">-er</span> + <span style="color: var(--primary);">than</span> + B</div>
            <div style="font-size: 1.1rem; font-weight: bold; margin-top: 0.5rem;">長い語: A + be動詞 + <span style="color: var(--secondary);">more</span> + 形容詞 + <span style="color: var(--primary);">than</span> + B</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">AはBより〜だ</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">-er than（短い形容詞）</h3>

      <div class="concept-box">
        <h4>📏 1〜2音節の短い形容詞</h4>
        <p>短い形容詞は語尾に <strong>-er</strong> をつけて比較級にします。</p>
        <div class="example-grid">
          <div class="example-item"><strong>tall → taller</strong><br>Tom is <strong>taller than</strong> Ken.<br>（トムはケンより背が高い）</div>
          <div class="example-item"><strong>old → older</strong><br>My car is <strong>older than</strong> yours.<br>（私の車はあなたのより古い）</div>
          <div class="example-item"><strong>fast → faster</strong><br>She runs <strong>faster than</strong> me.<br>（彼女は私より速く走る）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>✏️ スペル変化のルール</h4>
        <p>-er をつけるときのスペル変化に注意しましょう。</p>
        <div class="example-grid">
          <div class="example-item"><strong>語尾が e</strong> → r だけつける<br>large → large<strong>r</strong><br>nice → nice<strong>r</strong></div>
          <div class="example-item"><strong>短母音 + 子音字</strong> → 子音字を重ねる<br>big → bi<strong>gg</strong>er<br>hot → ho<strong>tt</strong>er</div>
          <div class="example-item"><strong>語尾が y</strong> → y を i に変える<br>happy → happ<strong>ier</strong><br>easy → eas<strong>ier</strong></div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">more ~ than（長い形容詞）</h3>

      <div class="concept-box">
        <h4>📖 3音節以上の長い形容詞</h4>
        <p>長い形容詞は語尾を変えず、前に <strong>more</strong> をつけて比較級にします。</p>
        <div class="example-grid">
          <div class="example-item"><strong>beautiful → more beautiful</strong><br>This flower is <strong>more beautiful than</strong> that one.<br>（この花はあの花より美しい）</div>
          <div class="example-item"><strong>expensive → more expensive</strong><br>This bag is <strong>more expensive than</strong> mine.<br>（このバッグは私のより高い）</div>
          <div class="example-item"><strong>interesting → more interesting</strong><br>This book is <strong>more interesting than</strong> that one.<br>（この本はあの本より面白い）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 判断基準：</strong>目安として<strong>3音節以上</strong>（beau-ti-ful = 3音節）なら more を使います。2音節でも -ful, -ous, -ing, -ed で終わる語は more を使うことが多いです。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">不規則変化（暗記必須！）</h3>

      <div class="concept-box">
        <h4>⚡ ルールに従わない特別な変化</h4>
        <p>以下の形容詞・副詞は不規則に変化します。丸ごと暗記しましょう。</p>
        <div class="example-grid">
          <div class="example-item"><strong>good / well → better</strong><br>She is <strong>better</strong> at math than me.<br>（彼女は私より数学が得意だ）</div>
          <div class="example-item"><strong>bad / badly → worse</strong><br>The weather is <strong>worse</strong> today than yesterday.<br>（今日は昨日より天気が悪い）</div>
          <div class="example-item"><strong>many / much → more</strong><br>I need <strong>more</strong> time than you.<br>（私はあなたより多くの時間が必要だ）</div>
          <div class="example-item"><strong>little → less</strong><br>He has <strong>less</strong> money than his friend.<br>（彼は友人よりお金が少ない）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ 注意：</strong>good の比較級は <strong>gooder ではなく better</strong> です！不規則変化は試験で頻出です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">否定的な比較</h3>

      <div class="concept-box">
        <h4>🚫 「〜より○○というわけではない」</h4>
        <p>比較級の否定は「〜より○○<strong>というわけではない</strong>」というニュアンスになります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>He is not taller than me.</strong><br>（彼は私より背が高い<strong>というわけではない</strong>）<br>※ 同じくらいか、私の方が高い</div>
          <div class="example-item"><strong>This is not more expensive than that.</strong><br>（これはあれより高い<strong>というわけではない</strong>）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 比較：</strong><br>
        ・<strong>not as ~ as</strong> = 「〜ほど○○ではない」（差がある）<br>
        ・<strong>not -er than</strong> = 「〜より○○というわけではない」（差がないかもしれない）</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">My brother is three years older than me.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> My brother <span class="tag v-tag">V</span> is <strong>three years older than</strong> me.</p>
        <p class="example-translation">兄は私より3歳年上です。</p>
        <p class="example-note">「数量 + 比較級 + than」で差を具体的に表現できます。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">This problem is much more difficult than the last one.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> This problem <span class="tag v-tag">V</span> is <strong>much more difficult than</strong> the last one.</p>
        <p class="example-translation">この問題は前のよりずっと難しい。</p>
        <p class="example-note">much / a lot / far を比較級の前につけると「ずっと〜」と差を強調できます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 短い語（1〜2音節）→ <strong>-er than</strong></li>
        <li>✓ 長い語（3音節以上）→ <strong>more ~ than</strong></li>
        <li>✓ <strong>big → bigger</strong>（短母音+子音字は子音を重ねる）</li>
        <li>✓ <strong>happy → happier</strong>（y → ier）</li>
        <li>✓ <strong>good → better, bad → worse, many/much → more</strong>（不規則変化）</li>
        <li>✓ <strong>much / a lot + 比較級</strong> で差を強調（「ずっと〜」）</li>
      </ul>
    </div>
  `,
  examples: [
    'Tom is taller than Ken. — トムはケンより背が高い。',
    'This flower is more beautiful than that one. — この花はあの花より美しい。',
    'She is better at math than me. — 彼女は私より数学が得意だ。',
    'The weather is worse today than yesterday. — 今日は昨日より天気が悪い。',
    'My brother is three years older than me. — 兄は私より3歳年上だ。',
    'This problem is much more difficult than the last one. — この問題は前のよりずっと難しい。'
  ],
  quiz: [
    {
      question: '「トムはケンより背が高い」を英語にすると？',
      options: ['Tom is taller than Ken.', 'Tom is more tall than Ken.', 'Tom is tall than Ken.', 'Tom is as tall than Ken.'],
      answer: 'Tom is taller than Ken.',
      explanation: 'tall は短い形容詞（1音節）なので -er をつけて taller than にします。more tall は不正確です。'
    },
    {
      question: 'big の比較級として正しいのは？',
      options: ['bigger', 'biger', 'more big', 'bigest'],
      answer: 'bigger',
      explanation: 'big は「短母音 + 子音字」で終わるので、子音字 g を重ねて bigger にします。'
    },
    {
      question: '「この本はあの本より面白い」を英語にすると？',
      options: ['This book is more interesting than that one.', 'This book is interestinger than that one.', 'This book is most interesting than that one.', 'This book is interesting more than that one.'],
      answer: 'This book is more interesting than that one.',
      explanation: 'interesting は3音節以上の長い形容詞なので、more をつけて比較級にします。-er はつけません。'
    },
    {
      question: 'good の比較級は？',
      options: ['better', 'gooder', 'more good', 'best'],
      answer: 'better',
      explanation: 'good は不規則変化する形容詞です。比較級は better、最上級は best になります。'
    },
    {
      question: 'bad の比較級は？',
      options: ['worse', 'badder', 'more bad', 'worst'],
      answer: 'worse',
      explanation: 'bad は不規則変化する形容詞です。比較級は worse、最上級は worst になります。'
    },
    {
      question: 'happy の比較級として正しいのは？',
      options: ['happier', 'happyer', 'more happy', 'hapier'],
      answer: 'happier',
      explanation: '語尾が y の形容詞は、y を i に変えて -er をつけます。happy → happier。'
    },
    {
      question: '「この問題は前のよりずっと難しい」の "ずっと" にあたる英語は？',
      options: ['much', 'very', 'so', 'too'],
      answer: 'much',
      explanation: '比較級を強調するには much / a lot / far を使います。very は原級の強調に使い、比較級には使いません。'
    },
    {
      question: '次の文の意味として正しいのは？ "He is not taller than me."',
      options: ['彼は私より背が高いというわけではない。', '彼は私ほど背が高くない。', '彼は私より背が高い。', '彼は私と同じ身長だ。'],
      answer: '彼は私より背が高いというわけではない。',
      explanation: 'not + 比較級 + than は「〜より○○というわけではない」という意味です。同じかそれ以下の可能性を含みます。'
    },
    {
      question: '「兄は私より3歳年上です」を英語にすると？',
      options: ['My brother is three years older than me.', 'My brother is older three years than me.', 'My brother is more three years old than me.', 'My brother is three year older than me.'],
      answer: 'My brother is three years older than me.',
      explanation: '「数量 + 比較級 + than」の語順で差を具体的に表現します。three years older than me が正しい形です。'
    },
    {
      question: '次のうち、文法的に正しい文はどれ？',
      options: ['She is more careful than her sister.', 'She is carefuller than her sister.', 'She is more careful as her sister.', 'She is careful more than her sister.'],
      answer: 'She is more careful than her sister.',
      explanation: 'careful は2音節で -ful で終わる形容詞なので more を使います。比較の接続詞は than です。'
    }
  ]
};
