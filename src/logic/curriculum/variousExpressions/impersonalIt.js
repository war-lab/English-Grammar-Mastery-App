
export const impersonalIt = {
  id: 'various-impersonal-it',
  isEnabled: true,
  title: '非人称のit (Impersonal "It")',
  description: '「それ」と訳さない特別なitの使い方。時間・天気・距離などを表します。',
  explanation: `
    <div class="explanation-section">
      <p><strong>非人称のit</strong>は、特定のものを指さず、「それ」と訳さない特別なitです。<strong>時間・天気・距離・明暗</strong>などを表すときに使います。</p>
      
      <div style="padding: 1rem; background: rgba(100, 150, 255, 0.1); border-left: 4px solid var(--secondary); border-radius: 0.5rem; margin: 1rem 0;">
        <p style="margin: 0; font-weight: bold;">💡 重要ポイント</p>
        <p style="margin: 0.5rem 0; font-size: 0.9rem;">このitは「それ」という意味ではありません。日本語にはないため、訳さないか「〜だ」のように訳します。</p>
      </div>
      
      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem; background: rgba(255, 150, 100, 0.1); border-radius: 0.5rem;">
            <div style="font-size: 1.5rem;">⏰</div>
            <div style="font-weight: bold;">時間</div>
            <div style="font-size: 0.9rem;">It's 3 o'clock.</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: rgba(100, 200, 255, 0.1); border-radius: 0.5rem;">
            <div style="font-size: 1.5rem;">☀️</div>
            <div style="font-weight: bold;">天気</div>
            <div style="font-size: 0.9rem;">It's sunny.</div>
          </div>
          <div style="text-align: center; padding: 1rem; background: rgba(150, 100, 255, 0.1); border-radius: 0.5rem;">
            <div style="font-size: 1.5rem;">📏</div>
            <div style="font-weight: bold;">距離</div>
            <div style="font-size: 0.9rem;">It's 5 km.</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">時間を表すit</h3>

      <div class="concept-box">
        <h4>⏰ What time is it? （今何時ですか？）</h4>
        <p>時間を尋ねるときと答えるときの基本表現です。</p>
        <div class="example-grid">
          <div class="example-item"><strong>It's 9 o'clock.</strong><br>（9時です）</div>
          <div class="example-item"><strong>It's 3:30.</strong><br>（3時30分です）</div>
          <div class="example-item"><strong>It's noon.</strong><br>（正午です）</div>
          <div class="example-item"><strong>It's midnight.</strong><br>（真夜中です）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>「What time is it?」は「今何時ですか？」という意味。itは「それ」ではなく「時刻」を指します。</p>
      </div>

      <div class="concept-box">
        <h4>📅 日付・曜日・季節</h4>
        <p>日付や曜日、季節を表すときもitを使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>It's Monday.</strong><br>（月曜日です）</div>
          <div class="example-item"><strong>It's January 10th.</strong><br>（1月10日です）</div>
          <div class="example-item"><strong>It's spring.</strong><br>（春です）</div>
          <div class="example-item"><strong>It's my birthday.</strong><br>（私の誕生日です）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">天気を表すit</h3>

      <div class="concept-box">
        <h4>☀️ 天気の状態</h4>
        <p>天気を表すときは<strong>It's + 形容詞</strong>または<strong>It + 動詞</strong>の形を使います。</p>
        <p style="margin-top: 1rem; font-weight: bold;">形容詞パターン（It's + 形容詞）：</p>
        <div class="example-grid">
          <div class="example-item"><strong>It's sunny.</strong><br>（晴れています）</div>
          <div class="example-item"><strong>It's cloudy.</strong><br>（曇っています）</div>
          <div class="example-item"><strong>It's rainy.</strong><br>（雨が降っています）</div>
          <div class="example-item"><strong>It's windy.</strong><br>（風が強いです）</div>
          <div class="example-item"><strong>It's snowy.</strong><br>（雪が降っています）</div>
          <div class="example-item"><strong>It's hot.</strong><br>（暑いです）</div>
          <div class="example-item"><strong>It's cold.</strong><br>（寒いです）</div>
          <div class="example-item"><strong>It's warm.</strong><br>（暖かいです）</div>
          <div class="example-item"><strong>It's cool.</strong><br>（涼しいです）</div>
        </div>
        
        <p style="margin-top: 1.5rem; font-weight: bold;">動詞パターン（It + 動詞）：</p>
        <div class="example-grid">
          <div class="example-item"><strong>It rains.</strong><br>（雨が降ります）</div>
          <div class="example-item"><strong>It snows.</strong><br>（雪が降ります）</div>
          <div class="example-item"><strong>It's raining.</strong><br>（雨が降っています）→進行形</div>
          <div class="example-item"><strong>It's snowing.</strong><br>（雪が降っています）→進行形</div>
        </div>

        <div style="padding: 1rem; background: rgba(255, 200, 100, 0.1); border-radius: 0.5rem; margin-top: 1rem;">
          <p style="margin: 0; font-weight: bold;">⚠️ 動詞 vs 形容詞の違い</p>
          <ul class="check-list" style="margin-top: 0.5rem;">
            <li>✓ <strong>rain</strong> = 動詞（雨が降る）→ It rains. / It's raining.</li>
            <li>✓ <strong>rainy</strong> = 形容詞（雨降りの）→ It's rainy.</li>
            <li>✓ <strong>snow</strong> = 動詞（雪が降る）→ It snows. / It's snowing.</li>
            <li>✓ <strong>snowy</strong> = 形容詞（雪の）→ It's snowy.</li>
          </ul>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">距離・明暗を表すit</h3>

      <div class="concept-box">
        <h4>📏 距離</h4>
        <p>場所から場所までの距離を表すときにitを使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>It's 5 kilometers.</strong><br>（5キロメートルです）</div>
          <div class="example-item"><strong>It's 10 minutes by car.</strong><br>（車で10分です）</div>
          <div class="example-item"><strong>It's a long way.</strong><br>（遠い道のりです）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>💡 明暗</h4>
        <p>明るさや暗さを表すときにもitを使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>It's bright.</strong><br>（明るいです）</div>
          <div class="example-item"><strong>It's dark.</strong><br>（暗いです）</div>
          <div class="example-item"><strong>It's getting dark.</strong><br>（暗くなってきています）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">What time is it now?</p>
        <p class="example-breakdown">What time is <span class="tag s-tag">S</span> it <span class="tag m-tag">(M)</span> now?</p>
        <p class="example-translation">今何時ですか？</p>
        <p class="example-note">時間を尋ねる基本表現。itは「時刻」を表し、「それ」とは訳しません。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">It's seven thirty.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> It <span class="tag v-tag">V</span> is <span class="tag c-tag">C</span> seven thirty</p>
        <p class="example-translation">7時30分です。</p>
        <p class="example-note">時刻を答えるときもitを使います。「7:30」は「seven thirty」と読みます。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">It's very hot today.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> It <span class="tag v-tag">V</span> is <span class="tag c-tag">C</span> very hot <span class="tag m-tag">(M)</span> today</p>
        <p class="example-translation">今日はとても暑いです。</p>
        <p class="example-note">気温を表すitです。hotは形容詞で「暑い」という意味です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">It rains a lot in June.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> It <span class="tag v-tag">V</span> rains <span class="tag m-tag">(M)</span> a lot in June</p>
        <p class="example-translation">6月にはたくさん雨が降ります。</p>
        <p class="example-note">rainは動詞です。「rain（動詞）」と「rainy（形容詞）」の違いに注意しましょう。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">It's about 3 kilometers from here.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> It <span class="tag v-tag">V</span> is <span class="tag c-tag">C</span> about 3 kilometers from here</p>
        <p class="example-translation">ここから約3キロメートルです。</p>
        <p class="example-note">距離を表すit。「about」は「約」という意味です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 非人称のitは<strong>「それ」と訳さない</strong></li>
        <li>✓ <strong>時間</strong>：What time is it? / It's 3 o'clock.</li>
        <li>✓ <strong>天気</strong>：It's sunny. / It rains. / It's raining.</li>
        <li>✓ <strong>距離</strong>：It's 5 kilometers.</li>
        <li>✓ <strong>明暗</strong>：It's dark. / It's getting bright.</li>
        <li>✓ <strong>rain（動詞）</strong> ≠ <strong>rainy（形容詞）</strong></li>
        <li>✓ <strong>snow（動詞）</strong> ≠ <strong>snowy（形容詞）</strong></li>
      </ul>
    </div>
  `,
  examples: [
    "It's 9 o'clock.",
    'What time is it?',
    "It's sunny today.",
    'It rains a lot in summer.',
    "It's 10 minutes from here."
  ],
  quiz: [
    {
      question: '「今何時ですか？」を英語で表すと？',
      options: ['What is the time?', 'What time is it?', 'How time is it?', 'When is it?'],
      answer: 'What time is it?',
      explanation: '時間を尋ねる基本表現は「What time is it?」です。itは時刻を表します。'
    },
    {
      question: '「今日は晴れています」を英語で表すと？',
      options: ['It sunny today.', "It's sun today.", "It's sunny today.", 'Today is sunny.'],
      answer: "It's sunny today.",
      explanation: "天気を表すときは「It's + 形容詞」を使います。sunnyは形容詞で「晴れの」という意味です。"
    },
    {
      question: 'rainとrainyの違いは？',
      options: ['両方とも動詞', '両方とも形容詞', 'rainは動詞、rainyは形容詞', 'rainは形容詞、rainyは動詞'],
      answer: 'rainは動詞、rainyは形容詞',
      explanation: "rain（動詞）は「雨が降る」、rainy（形容詞）は「雨降りの」という意味です。It rains. / It's rainy."
    },
    {
      question: '「雪が降っています」を英語で表すと？（進行形を使って）',
      options: ["It's snow.", "It's snowy.", "It's snowing.", 'It snows.'],
      answer: "It's snowing.",
      explanation: "進行形で「今雪が降っている」を表すときは「It's snowing.」を使います。snowは動詞です。"
    },
    {
      question: '非人称のitの使い方で正しいものは？',
      options: ['「それ」という意味で使う', 'ものを指すときに使う', '時間や天気を表すときに使う', '人を指すときに使う'],
      answer: '時間や天気を表すときに使う',
      explanation: '非人称のitは「それ」という意味ではなく、時間・天気・距離・明暗などを表すときに使います。'
    },
    {
      question: '「ここから5キロです」を英語で表すと？',
      options: ["It's 5 kilometers from here.", 'There is 5 kilometers from here.', 'This is 5 kilometers from here.', 'That is 5 kilometers from here.'],
      answer: "It's 5 kilometers from here.",
      explanation: "距離を表すときは非人称のitを使います。「It's + 距離」の形です。"
    },
    {
      question: '「寒いです」を英語で表すと？',
      options: ["It's cold.", "It's a cold.", 'It cold.', 'Its cold.'],
      answer: "It's cold.",
      explanation: "気温を表すときは「It's + 形容詞」を使います。coldは形容詞で「寒い」という意味です。"
    },
    {
      question: '「月曜日です」を英語で表すと？',
      options: ['Today is Monday.', "It's Monday.", 'This is Monday.', 'Monday is today.'],
      answer: "It's Monday.",
      explanation: "曜日を表すときもitを使います。「It's Monday.」が自然な表現です。"
    },
    {
      question: '「6月にはたくさん雨が降ります」を英語で表すと？',
      options: ["It's rainy a lot in June.", 'It rains a lot in June.', 'It rain a lot in June.', 'It rained a lot in June.'],
      answer: 'It rains a lot in June.',
      explanation: 'rain（動詞）を使って「雨が降る」を表します。一般的な事実なので現在形を使います。'
    },
    {
      question: '次のうち、非人称のitを使わない表現はどれですか？',
      options: ["It's 3 o'clock.", "It's rainy.", 'It is a book.', "It's cold."],
      answer: 'It is a book.',
      explanation: '「It is a book.」のitは「それ」という意味で、本を指す普通の代名詞です。他の3つは非人称のitです。'
    }
  ]
};
