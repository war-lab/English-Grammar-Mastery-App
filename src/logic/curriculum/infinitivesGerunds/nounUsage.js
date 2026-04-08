// to不定詞の名詞的用法（〜すること）のレッスン定義
export const nounUsage = {
  id: 'inf-noun-usage',
  isEnabled: true,
  title: 'to不定詞：名詞的用法 (〜すること)',
  description: 'to不定詞が主語・目的語・補語として働く名詞的用法と、仮主語Itや意味上の主語forを学びます。',
  explanation: `
    <div class="explanation-section">
      <p><strong>準動詞</strong>とは、動詞の意味を持ったまま別の品詞として働かせる文法的な工夫です。英語には<strong>「1文1動詞の原則」</strong>があり、1つの文にメインの動詞は1つだけ。しかし他の動作も表現したい場合、<strong>to不定詞（to + 動詞の原形）</strong>を使って動詞を名詞・形容詞・副詞に変身させます。</p>

      <div class="diagram-container">
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
          <div style="text-align: center; padding: 1rem 1.5rem; background: rgba(99, 102, 241, 0.15); border-radius: 0.75rem; border: 1px solid rgba(99, 102, 241, 0.3);">
            <div style="font-size: 1.2rem; font-weight: bold;"><span style="color: var(--primary);">to + 動詞の原形</span> → 「〜すること」として名詞の働きをする</div>
            <div style="margin-top: 0.5rem; color: var(--text-muted);">主語・目的語・補語の位置に置ける</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">主語になる</h3>

      <div class="concept-box">
        <h4>📘 「〜することは…」を表す</h4>
        <p>to不定詞を文頭に置いて、主語として使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>To learn English is fun.</strong><br>（英語を学ぶことは楽しい）</div>
          <div class="example-item"><strong>To read books every day is a good habit.</strong><br>（毎日本を読むことは良い習慣だ）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>⚠️ 注意：</strong>主語が長くなると「頭でっかち」になるため、通常は<strong>仮主語 It</strong> を使います（後述）。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">目的語になる</h3>

      <div class="concept-box">
        <h4>📗 「〜することを…する」を表す</h4>
        <p>動詞の後ろに置いて、目的語として使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I like to read books.</strong><br>（私は本を読むのが好きです）</div>
          <div class="example-item"><strong>She wants to study abroad.</strong><br>（彼女は留学したいと思っている）</div>
          <div class="example-item"><strong>He decided to become a teacher.</strong><br>（彼は教師になることを決めた）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">補語になる</h3>

      <div class="concept-box">
        <h4>📙 「〜することです」を表す</h4>
        <p>be動詞の後ろに置いて、主語を説明する補語として使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>My dream is to travel the world.</strong><br>（私の夢は世界中を旅行することです）</div>
          <div class="example-item"><strong>His goal is to pass the exam.</strong><br>（彼の目標はその試験に合格することだ）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">仮主語 It（形式主語構文）</h3>

      <div class="concept-box">
        <h4>💡 「頭が重い」のを避ける工夫</h4>
        <p>英語は「結論ファースト」の言語です。主語が長くなると不自然なので、形式的な主語 <strong>It</strong> を先に置き、本当の主語（to不定詞）を後ろに回します。</p>
        <div class="example-grid">
          <div class="example-item"><span style="color: #ef4444;">❌ To learn English is fun.</span><br>（主語が長くて頭でっかち！）</div>
          <div class="example-item"><span style="color: #22c55e;">⭕ It is fun to learn English.</span><br>（It＝仮主語、to learn English＝真の主語）</div>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(99, 102, 241, 0.1); border-radius: 0.5rem;">
          <p style="margin: 0;"><strong>構造：</strong>It + is + 形容詞 + to + 動詞の原形 …</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">意味上の主語 for</h3>

      <div class="concept-box">
        <h4>👤 「誰が？」を明確にする</h4>
        <p>to不定詞の動作を「誰が」するのか明確にしたい時、<strong>for + 人</strong> を to不定詞の前に置きます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>It is hard for me to wake up at 5 AM.</strong><br>（5時に起きることは<strong>私にとって</strong>難しい）</div>
          <div class="example-item"><strong>It is important for students to study every day.</strong><br>（毎日勉強することは<strong>学生にとって</strong>重要だ）</div>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(99, 102, 241, 0.1); border-radius: 0.5rem;">
          <p style="margin: 0;"><strong>構造：</strong>It + is + 形容詞 + <strong>for + 人</strong> + to + 動詞の原形 …</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ to不定詞の名詞的用法は「〜すること」と訳す</li>
        <li>✓ <strong>主語・目的語・補語</strong>の3つの位置に置ける</li>
        <li>✓ 主語が長い場合は<strong>仮主語 It</strong> を使うのが自然</li>
        <li>✓ 動作の主体を明示するには <strong>for + 人</strong> を使う</li>
        <li>✓ want, decide, hope, plan などは to不定詞を目的語に取る</li>
      </ul>
    </div>
  `,
  examples: [
    'To learn English is fun. — 英語を学ぶことは楽しい。',
    'I like to read books. — 私は本を読むのが好きです。',
    'My dream is to travel the world. — 私の夢は世界中を旅行することです。',
    'It is important to study every day. — 毎日勉強することは重要です。',
    'It is hard for me to wake up at 5 AM. — 5時に起きるのは私にとって難しい。',
    'She wants to study abroad. — 彼女は留学したいと思っている。'
  ],
  quiz: [
    {
      question: '「英語を学ぶことは楽しい」を仮主語Itを使って英語にすると？',
      options: ['It is fun to learn English.', 'It is fun learning English.', 'To learn English is fun it.', 'It is to learn English fun.'],
      answer: 'It is fun to learn English.',
      explanation: '仮主語 It を文頭に置き、真の主語 to learn English を後ろに回します。It is + 形容詞 + to do の形です。'
    },
    {
      question: '「彼女は留学したいと思っている」を英語にすると？',
      options: ['She wants to study abroad.', 'She wants studying abroad.', 'She want to study abroad.', 'She wants to studying abroad.'],
      answer: 'She wants to study abroad.',
      explanation: 'want は to不定詞を目的語に取る動詞です。want to do「〜したい」の形になります。'
    },
    {
      question: '「私の夢は医者になることです」を英語にすると？',
      options: ['My dream is to become a doctor.', 'My dream is becoming a doctor.', 'My dream to become is a doctor.', 'My dream is to became a doctor.'],
      answer: 'My dream is to become a doctor.',
      explanation: 'be動詞の後ろに to不定詞を置いて補語にします。to の後は必ず動詞の原形（become）です。'
    },
    {
      question: '空所に入る適切な語は？ "It is important ____ students to study every day."',
      options: ['for', 'to', 'of', 'with'],
      answer: 'for',
      explanation: 'to不定詞の意味上の主語を示すには for + 人 を使います。「学生にとって」= for students。'
    },
    {
      question: '次の文で to read books はどの働きをしていますか？ "I like to read books."',
      options: ['目的語（名詞的用法）', '主語（名詞的用法）', '形容詞的用法', '副詞的用法'],
      answer: '目的語（名詞的用法）',
      explanation: 'like の後ろに置かれているので、動詞の目的語として働いています。「本を読むことが好き」という名詞的用法です。'
    },
    {
      question: '「彼は教師になることを決めた」を英語にすると？',
      options: ['He decided to become a teacher.', 'He decided becoming a teacher.', 'He decided to became a teacher.', 'He decided become a teacher.'],
      answer: 'He decided to become a teacher.',
      explanation: 'decide は to不定詞を目的語に取る動詞です。decide to do「〜することを決める」の形です。'
    },
    {
      question: '次のうち、仮主語 It の文として正しいものはどれ？',
      options: ['It is difficult to solve this problem.', 'It difficult is to solve this problem.', 'It is difficult solve this problem.', 'It to solve this problem is difficult.'],
      answer: 'It is difficult to solve this problem.',
      explanation: '仮主語構文は It + is + 形容詞 + to do の語順です。to を省略したり語順を入れ替えたりしてはいけません。'
    },
    {
      question: '空所に入る適切な語句は？ "She hopes ____ a nurse in the future."',
      options: ['to become', 'becoming', 'to becoming', 'become'],
      answer: 'to become',
      explanation: 'hope は to不定詞を目的語に取る動詞です。hope to do「〜することを望む」の形になります。'
    },
    {
      question: '次の文で to travel the world はどの働きをしていますか？ "My dream is to travel the world."',
      options: ['補語（名詞的用法）', '主語（名詞的用法）', '目的語（名詞的用法）', '副詞的用法'],
      answer: '補語（名詞的用法）',
      explanation: 'be動詞（is）の後ろに置かれて主語（My dream）を説明しているので、補語として働いています。'
    },
    {
      question: '「5時に起きることは私にとって難しい」を英語にすると？',
      options: ['It is hard for me to wake up at 5 AM.', 'It is hard to me to wake up at 5 AM.', 'It is hard for me waking up at 5 AM.', 'For me it hard to wake up at 5 AM.'],
      answer: 'It is hard for me to wake up at 5 AM.',
      explanation: '仮主語 It + is + 形容詞 + for + 人 + to do の形です。意味上の主語には for を使います。'
    }
  ]
};
