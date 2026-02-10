
export const quantityExpressions = {
  id: 'various-quantity',
  isEnabled: true,
  title: '数量表現 (Quantity Expressions)',
  description: '「たくさん」「少し」などの数や量を表す表現を学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>数量表現</strong>は、「どのくらいの量か」「どのくらいの数か」を表す言葉です。英語では<strong>数えられる名詞</strong>と<strong>数えられない名詞</strong>で使い分けが必要です。</p>
      
      <div style="padding: 1rem; background: rgba(255, 150, 100, 0.1); border-left: 4px solid var(--primary); border-radius: 0.5rem; margin: 1rem 0;">
        <p style="margin: 0; font-weight: bold;">⚠️ 最重要ポイント</p>
        <p style="margin: 0.5rem 0; font-size: 0.9rem;">数量表現は名詞が<strong>数えられるか</strong>、<strong>数えられないか</strong>で使い分けます。</p>
      </div>
      
      <div class="diagram-container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0;">
          <div style="text-align: center; padding: 1.5rem; background: rgba(100, 200, 255, 0.1); border-radius: 0.5rem;">
            <div style="font-size: 1.5rem;">📚</div>
            <div style="font-weight: bold; margin-top: 0.5rem;">数えられる名詞</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">形があり、1つ2つと数えられる</div>
            <div style="font-size: 0.9rem; margin-top: 0.75rem;">books, apples, dogs</div>
          </div>
          <div style="text-align: center; padding: 1.5rem; background: rgba(255, 200, 100, 0.1); border-radius: 0.5rem;">
            <div style="font-size: 1.5rem;">💧</div>
            <div style="font-weight: bold; margin-top: 0.5rem;">数えられない名詞</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">形がなく、1つ2つと数えられない</div>
            <div style="font-size: 0.9rem; margin-top: 0.75rem;">water, music, money</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">many と much の違い</h3>

      <div class="concept-box">
        <h4>📚 many（数えられる名詞）</h4>
        <p><strong>many</strong>は数えられる名詞に使い、「たくさんの」という意味です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>many books</strong><br>（たくさんの本）</div>
          <div class="example-item"><strong>many students</strong><br>（たくさんの生徒）</div>
          <div class="example-item"><strong>many apples</strong><br>（たくさんのりんご）</div>
          <div class="example-item"><strong>many people</strong><br>（たくさんの人々）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>manyの後には複数形の名詞が来ます。</p>
      </div>

      <div class="concept-box">
        <h4>💧 much（数えられない名詞）</h4>
        <p><strong>much</strong>は数えられない名詞に使い、「たくさんの」という意味です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>much water</strong><br>（たくさんの水）</div>
          <div class="example-item"><strong>much money</strong><br>（たくさんのお金）</div>
          <div class="example-item"><strong>much time</strong><br>（たくさんの時間）</div>
          <div class="example-item"><strong>much information</strong><br>（たくさんの情報）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>muchの後には単数形の数えられない名詞が来ます。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">a lot of（万能表現）</h3>

      <div class="concept-box">
        <h4>🌟 a lot of（数えられる・数えられない両方OK）</h4>
        <p><strong>a lot of</strong>は数えられる名詞にも数えられない名詞にも使える便利な表現です。「たくさんの」という意味です。</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
          <div style="padding: 1rem; background: rgba(100, 200, 255, 0.1); border-radius: 0.5rem;">
            <p style="margin: 0; font-weight: bold; margin-bottom: 0.5rem;">数えられる名詞と一緒に：</p>
            <ul class="check-list">
              <li>✓ a lot of books（たくさんの本）</li>
              <li>✓ a lot of students（たくさんの生徒）</li>
              <li>✓ a lot of apples（たくさんのりんご）</li>
            </ul>
          </div>
          <div style="padding: 1rem; background: rgba(255, 200, 100, 0.1); border-radius: 0.5rem;">
            <p style="margin: 0; font-weight: bold; margin-bottom: 0.5rem;">数えられない名詞と一緒に：</p>
            <ul class="check-list">
              <li>✓ a lot of water（たくさんの水）</li>
              <li>✓ a lot of money（たくさんのお金）</li>
              <li>✓ a lot of time（たくさんの時間）</li>
            </ul>
          </div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>a lot of は肯定文でよく使います。many/muchより口語的です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">few と little の違い</h3>

      <div class="concept-box">
        <h4>📚 few（数えられる名詞）</h4>
        <p><strong>few</strong>は数えられる名詞に使い、「少しの」「ほとんど〜ない」という意味です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>few books</strong><br>（少しの本、ほとんど本がない）</div>
          <div class="example-item"><strong>few students</strong><br>（少しの生徒、ほとんど生徒がいない）</div>
          <div class="example-item"><strong>a few books</strong><br>（少しの本、いくらかの本）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong></p>
        <ul class="check-list">
          <li>✓ <strong>few</strong> = ほとんど〜ない（否定的なニュアンス）</li>
          <li>✓ <strong>a few</strong> = 少しある（肯定的なニュアンス）</li>
        </ul>
      </div>

      <div class="concept-box">
        <h4>💧 little（数えられない名詞）</h4>
        <p><strong>little</strong>は数えられない名詞に使い、「少しの」「ほとんど〜ない」という意味です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>little water</strong><br>（少しの水、ほとんど水がない）</div>
          <div class="example-item"><strong>little money</strong><br>（少しのお金、ほとんどお金がない）</div>
          <div class="example-item"><strong>a little water</strong><br>（少しの水、いくらかの水）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong></p>
        <ul class="check-list">
          <li>✓ <strong>little</strong> = ほとんど〜ない（否定的なニュアンス）</li>
          <li>✓ <strong>a little</strong> = 少しある（肯定的なニュアンス）</li>
        </ul>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">まとめ表</h3>

      <div class="concept-box">
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
          <thead style="background: rgba(100, 150, 255, 0.2);">
            <tr>
              <th style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">意味</th>
              <th style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">数えられる名詞</th>
              <th style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">数えられない名詞</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: bold;">たくさんの</td>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">many</td>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">much</td>
            </tr>
            <tr style="background: rgba(255, 255, 255, 0.02);">
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: bold;">たくさんの（両方OK）</td>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);" colspan="2">a lot of</td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: bold;">ほとんど〜ない</td>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">few</td>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">little</td>
            </tr>
            <tr style="background: rgba(255, 255, 255, 0.02);">
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); font-weight: bold;">少しある</td>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">a few</td>
              <td style="padding: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1);">a little</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">I have many books.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> have <span class="tag o-tag">O</span> many books</p>
        <p class="example-translation">私はたくさんの本を持っています。</p>
        <p class="example-note">booksは数えられる名詞なので many を使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">She doesn't have much time.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> doesn't have <span class="tag o-tag">O</span> much time</p>
        <p class="example-translation">彼女はあまり時間がありません。</p>
        <p class="example-note">timeは数えられない名詞なので much を使います。muchは否定文・疑問文でよく使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">There are a lot of people in the park.</p>
        <p class="example-breakdown"><span class="tag">There</span> <span class="tag v-tag">V</span> are <span class="tag s-tag">S</span> a lot of people <span class="tag m-tag">(M)</span> in the park</p>
        <p class="example-translation">公園にはたくさんの人がいます。</p>
        <p class="example-note">a lot of は数えられる名詞にも使えます。肯定文でよく使う表現です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">I have a few friends.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> have <span class="tag o-tag">O</span> a few friends</p>
        <p class="example-translation">私は少し友達がいます。</p>
        <p class="example-note">a few は「少しいる」という肯定的な意味です。friendsは数えられる名詞です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">There is little water in the bottle.</p>
        <p class="example-breakdown"><span class="tag">There</span> <span class="tag v-tag">V</span> is <span class="tag s-tag">S</span> little water <span class="tag m-tag">(M)</span> in the bottle</p>
        <p class="example-translation">瓶にはほとんど水がありません。</p>
        <p class="example-note">little は「ほとんどない」という否定的な意味です。waterは数えられない名詞です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>数えられる名詞</strong>：many / few / a few</li>
        <li>✓ <strong>数えられない名詞</strong>：much / little / a little</li>
        <li>✓ <strong>a lot of</strong> は両方に使える万能表現</li>
        <li>✓ <strong>few / little</strong> = ほとんど〜ない（否定的）</li>
        <li>✓ <strong>a few / a little</strong> = 少しある（肯定的）</li>
        <li>✓ muchは肯定文ではあまり使わず、否定文・疑問文で使う</li>
        <li>✓ a lot of は肯定文でよく使う</li>
      </ul>
    </div>
  `,
  examples: [
    'I have many friends.',
    'She has a lot of books.',
    "There isn't much water.",
    'I have a few questions.',
    'There is little time left.'
  ],
  quiz: [
    {
      question: '数えられる名詞に「たくさんの」という意味で使うのは？',
      options: ['much', 'many', 'little', 'a little'],
      answer: 'many',
      explanation: '数えられる名詞には many を使います。many books, many students のように複数形と一緒に使います。'
    },
    {
      question: '数えられない名詞に「たくさんの」という意味で使うのは？',
      options: ['many', 'much', 'few', 'a few'],
      answer: 'much',
      explanation: '数えられない名詞には much を使います。much water, much money のように使います。'
    },
    {
      question: '「たくさんの本」を英語で表すと？',
      options: ['much books', 'many books', 'little books', 'few books'],
      answer: 'many books',
      explanation: 'booksは数えられる名詞なので many を使います。'
    },
    {
      question: '「たくさんの水」を英語で表すと？',
      options: ['many water', 'much water', 'few water', 'a few water'],
      answer: 'much water',
      explanation: 'waterは数えられない名詞なので much を使います。'
    },
    {
      question: 'a lot of について正しい説明はどれですか？',
      options: ['数えられる名詞にだけ使える', '数えられない名詞にだけ使える', '両方の名詞に使える', '否定文でしか使えない'],
      answer: '両方の名詞に使える',
      explanation: 'a lot of は数えられる名詞にも数えられない名詞にも使える便利な表現です。'
    },
    {
      question: 'few と a few の違いは？',
      options: ['意味は全く同じ', 'fewは肯定的、a fewは否定的', 'fewは否定的、a fewは肯定的', 'fewは数えられない名詞用'],
      answer: 'fewは否定的、a fewは肯定的',
      explanation: 'few は「ほとんどない」という否定的なニュアンス、a few は「少しある」という肯定的なニュアンスです。'
    },
    {
      question: '「ほとんど時間がない」を英語で表すと？',
      options: ['few time', 'a few time', 'little time', 'a little time'],
      answer: 'little time',
      explanation: 'time は数えられない名詞で、「ほとんどない」は little を使います。'
    },
    {
      question: '「少し友達がいます」（肯定的な意味）を英語で表すと？',
      options: ['I have few friends.', 'I have a few friends.', 'I have little friends.', 'I have a little friends.'],
      answer: 'I have a few friends.',
      explanation: 'friendsは数えられる名詞で、肯定的なニュアンスなので a few を使います。'
    },
    {
      question: 'muchが最もよく使われるのは？',
      options: ['肯定文', '否定文と疑問文', '命令文', '感嘆文'],
      answer: '否定文と疑問文',
      explanation: 'muchは否定文や疑問文でよく使われます。肯定文では a lot of を使うことが多いです。'
    },
    {
      question: '次のうち、正しい文はどれですか？',
      options: ['I have much books.', 'I have many water.', 'I have a lot of friends.', 'I have few water.'],
      answer: 'I have a lot of friends.',
      explanation: 'a lot of friends が正しい表現です。friendsは数えられる名詞なので a lot of が使えます。'
    }
  ]
};
