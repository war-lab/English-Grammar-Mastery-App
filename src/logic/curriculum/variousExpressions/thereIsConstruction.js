
export const thereIsConstruction = {
  id: 'various-there-is',
  isEnabled: true,
  title: 'There is/are 構文 (There is/are Construction)',
  description: '「〜がある・いる」を表す基本構文。存在や状態を示します。',
  explanation: `
    <div class="explanation-section">
      <p><strong>There is/are 構文</strong>は、「〜がある」「〜がいる」という<strong>存在</strong>を表す表現です。新しい情報を導入するときによく使います。</p>
      
      <div style="padding: 1rem; background: rgba(100, 150, 255, 0.1); border-left: 4px solid var(--secondary); border-radius: 0.5rem; margin: 1rem 0;">
        <p style="margin: 0; font-weight: bold;">💡 重要ポイント</p>
        <p style="margin: 0.5rem 0; font-size: 0.9rem;">英語は「すでに知られている情報」から「新しい情報」へと話が進みます。There is/are は新しい存在を紹介するときの定番表現です。</p>
      </div>
      
      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center; padding: 1.5rem; background: rgba(100, 200, 255, 0.1); border-radius: 0.5rem;">
            <div style="font-size: 1.2rem; font-weight: bold; color: var(--secondary);">基本構造</div>
            <div style="font-size: 1.1rem; margin-top: 1rem;">There <span style="color: var(--primary);">is/are</span> + 名詞 + 場所</div>
            <div style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-muted);">（〜に...がある/いる）</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">is と are の使い分け</h3>

      <div class="concept-box">
        <h4>📌 There is（単数）</h4>
        <p>後ろに来る名詞が<strong>単数</strong>または<strong>数えられない名詞</strong>のときは<strong>is</strong>を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>There is a book.</strong><br>（本が一冊あります）</div>
          <div class="example-item"><strong>There is an apple.</strong><br>（りんごが一つあります）</div>
          <div class="example-item"><strong>There is water.</strong><br>（水があります）→数えられない</div>
          <div class="example-item"><strong>There is a cat.</strong><br>（猫が一匹います）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>📌 There are（複数）</h4>
        <p>後ろに来る名詞が<strong>複数</strong>のときは<strong>are</strong>を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>There are two books.</strong><br>（本が二冊あります）</div>
          <div class="example-item"><strong>There are some apples.</strong><br>（りんごがいくつかあります）</div>
          <div class="example-item"><strong>There are many students.</strong><br>（学生がたくさんいます）</div>
          <div class="example-item"><strong>There are three cats.</strong><br>（猫が三匹います）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">情報の流れ</h3>

      <div class="concept-box">
        <h4>📖 一般的な情報の流れ</h4>
        <p>英語では通常、<strong>既知の情報（旧情報）</strong>から<strong>新しい情報（新情報）</strong>へと話が進みます。</p>
        <div style="padding: 1rem; background: rgba(150, 150, 150, 0.1); border-radius: 0.5rem; margin-top: 1rem;">
          <p style="margin: 0; font-weight: bold;">通常のパターン：</p>
          <p style="margin: 0.5rem 0; font-size: 0.95rem;"><span style="background: rgba(255, 200, 100, 0.3); padding: 0.2rem 0.5rem; border-radius: 0.25rem;">既知の情報</span> → <span style="background: rgba(100, 255, 150, 0.3); padding: 0.2rem 0.5rem; border-radius: 0.25rem;">新しい情報</span></p>
          <p style="margin: 0.5rem 0; font-size: 0.9rem;">例：<strong>A book</strong> is on the table.（本がテーブルの上にあります）</p>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">→ 「本」がすでに話題に出ている場合</p>
        </div>
        
        <div style="padding: 1rem; background: rgba(100, 200, 255, 0.15); border-radius: 0.5rem; margin-top: 1rem;">
          <p style="margin: 0; font-weight: bold;">There is/are のパターン：</p>
          <p style="margin: 0.5rem 0; font-size: 0.95rem;"><span style="background: rgba(100, 255, 150, 0.3); padding: 0.2rem 0.5rem; border-radius: 0.25rem;">新しい情報</span> を紹介</p>
          <p style="margin: 0.5rem 0; font-size: 0.9rem;">例：<strong>There is a book</strong> on the table.（テーブルの上に本があります）</p>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">→ 「本」という存在を初めて話題にする場合</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">肯定文・否定文・疑問文</h3>

      <div class="concept-box">
        <h4>✅ 肯定文</h4>
        <div class="example-grid">
          <div class="example-item"><strong>There is a park near my house.</strong><br>（私の家の近くに公園があります）</div>
          <div class="example-item"><strong>There are many people in the room.</strong><br>（部屋にたくさんの人がいます）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>❌ 否定文（There is/are + not）</h4>
        <p>否定文は<strong>There is not（There isn't）</strong>または<strong>There are not（There aren't）</strong>を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>There isn't a park near my house.</strong><br>（私の家の近くに公園がありません）</div>
          <div class="example-item"><strong>There aren't many people.</strong><br>（たくさんの人はいません）</div>
          <div class="example-item"><strong>There is no water.</strong><br>（水がありません）→noを使った否定</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>❓ 疑問文（Is/Are there ...?）</h4>
        <p>疑問文は<strong>Is there ...?</strong>または<strong>Are there ...?</strong>の形になります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>Is there a park near here?</strong><br>（この近くに公園がありますか？）</div>
          <div class="example-item"><strong>Are there any students?</strong><br>（学生はいますか？）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>答え方：</strong></p>
        <ul class="check-list">
          <li>✓ Yes, there is. / No, there isn't.</li>
          <li>✓ Yes, there are. / No, there aren't.</li>
        </ul>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">There is a book on the desk.</p>
        <p class="example-breakdown"><span class="tag">There</span> <span class="tag v-tag">V</span> is <span class="tag s-tag">S</span> a book <span class="tag m-tag">(M)</span> on the desk</p>
        <p class="example-translation">机の上に本があります。</p>
        <p class="example-note">単数の名詞（a book）なのでisを使います。「本がある」という存在を表しています。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">There are three apples in the basket.</p>
        <p class="example-breakdown"><span class="tag">There</span> <span class="tag v-tag">V</span> are <span class="tag s-tag">S</span> three apples <span class="tag m-tag">(M)</span> in the basket</p>
        <p class="example-translation">かごの中にりんごが3つあります。</p>
        <p class="example-note">複数の名詞（three apples）なのでareを使います。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">Is there a post office near here?</p>
        <p class="example-breakdown"><span class="tag v-tag">V</span> Is <span class="tag">there</span> <span class="tag s-tag">S</span> a post office <span class="tag m-tag">(M)</span> near here?</p>
        <p class="example-translation">この近くに郵便局がありますか？</p>
        <p class="example-note">疑問文では Is there の語順になります。場所を尋ねるときの定番表現です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">There aren't any students in the classroom.</p>
        <p class="example-breakdown"><span class="tag">There</span> <span class="tag v-tag">V</span> aren't <span class="tag s-tag">S</span> any students <span class="tag m-tag">(M)</span> in the classroom</p>
        <p class="example-translation">教室には生徒が一人もいません。</p>
        <p class="example-note">否定文では aren't（are not）を使います。anyは否定文で「一つも〜ない」という意味です。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">There was a cat in the garden yesterday.</p>
        <p class="example-breakdown"><span class="tag">There</span> <span class="tag v-tag">V(過去)</span> was <span class="tag s-tag">S</span> a cat <span class="tag m-tag">(M)</span> in the garden yesterday</p>
        <p class="example-translation">昨日庭に猫がいました。</p>
        <p class="example-note">過去のことを言うときは was/were を使います。単数なので was です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>There is/are</strong>は「〜がある・いる」という存在を表す</li>
        <li>✓ 単数・数えられない名詞 → <strong>There is</strong></li>
        <li>✓ 複数名詞 → <strong>There are</strong></li>
        <li>✓ 否定文：<strong>There isn't / There aren't</strong></li>
        <li>✓ 疑問文：<strong>Is there ...? / Are there ...?</strong></li>
        <li>✓ 新しい情報を紹介するときに使う</li>
        <li>✓ 過去形：<strong>There was/were</strong></li>
      </ul>
    </div>
  `,
  examples: [
    'There is a cat under the table.',
    'There are many books in the library.',
    'Is there a bank near here?',
    "There aren't any students.",
    'There was a party yesterday.'
  ],
  quiz: [
    {
      question: '「机の上に本が一冊あります」を英語で表すと？',
      options: ['A book is on the desk.', 'There is a book on the desk.', 'There are a book on the desk.', 'It is a book on the desk.'],
      answer: 'There is a book on the desk.',
      explanation: '存在を表すときは There is/are を使います。単数なので There is です。'
    },
    {
      question: '「かごの中にりんごが3つあります」を英語で表すと？',
      options: ['There is three apples in the basket.', 'There are three apples in the basket.', 'It is three apples in the basket.', 'Three apples are in the basket.'],
      answer: 'There are three apples in the basket.',
      explanation: '複数（three apples）なので There are を使います。'
    },
    {
      question: 'There is/are の後に来る名詞が複数のとき、どちらを使いますか？',
      options: ['There is', 'There are', 'There am', 'There be'],
      answer: 'There are',
      explanation: '複数の名詞の場合は There are を使います。'
    },
    {
      question: '「この近くに銀行がありますか？」を英語で表すと？',
      options: ['There is a bank near here?', 'Is there a bank near here?', 'Are there a bank near here?', 'There a bank is near here?'],
      answer: 'Is there a bank near here?',
      explanation: '疑問文は Is there の語順になります。単数なので Is there です。'
    },
    {
      question: '「教室には生徒がいません」を英語で表すと？',
      options: ['There is no students in the classroom.', "There isn't students in the classroom.", "There aren't any students in the classroom.", 'There not are students in the classroom.'],
      answer: "There aren't any students in the classroom.",
      explanation: "複数の否定は There aren't を使います。anyは否定文で「一つも〜ない」という意味です。"
    },
    {
      question: 'There is/are 構文の主な用途は？',
      options: ['既知の情報を説明する', '新しい存在を紹介する', '命令する', '質問する'],
      answer: '新しい存在を紹介する',
      explanation: 'There is/are は新しい情報（存在）を紹介するときに使う表現です。'
    },
    {
      question: '「昨日庭に猫がいました」を英語で表すと？',
      options: ['There is a cat in the garden yesterday.', 'There was a cat in the garden yesterday.', 'There were a cat in the garden yesterday.', 'There are a cat in the garden yesterday.'],
      answer: 'There was a cat in the garden yesterday.',
      explanation: '過去のことなので was を使います。単数（a cat）なので was です。'
    },
    {
      question: '次のうち、正しい文はどれですか？',
      options: ['There is two cats.', 'There are a cat.', 'There is a cat.', 'There am a cat.'],
      answer: 'There is a cat.',
      explanation: '単数の名詞（a cat）には There is を使います。'
    },
    {
      question: '「水がありません」を英語で表すと？（no を使って）',
      options: ['There is no water.', 'There are no water.', 'There not water.', 'No there is water.'],
      answer: 'There is no water.',
      explanation: 'water は数えられない名詞なので There is を使い、no で否定を表します。'
    },
    {
      question: '「Is there a park near here?」への肯定の答え方は？',
      options: ['Yes, it is.', 'Yes, there is.', 'Yes, there are.', 'Yes, is there.'],
      answer: 'Yes, there is.',
      explanation: "「Is there ...?」の質問には「Yes, there is.」または「No, there isn't.」で答えます。"
    }
  ]
};
