
export const verb = {
  id: 'pos-verb',
  isEnabled: true,
  title: '動詞 (Verb)',
  description: '動作や状態を表す言葉です。',
  explanation: `
    <div class="explanation-section">
      <p>動詞は、主語の<strong>動作</strong>や<strong>状態</strong>を表す言葉です。英語の文の心臓部であり、必ず必要です。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="Action">🏃</div>
        <div class="diagram-arrow">vs</div>
        <div class="diagram-box" data-label="State">🧘</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">動詞の2大分類</h3>

      <div class="concept-box">
        <h4>🔄 be動詞 (Be Verbs)</h4>
        <p>「〜です」「〜にいる」という状態や存在を表します。イコール記号（＝）のような働きをします。</p>
        <div class="example-grid">
          <div class="example-item">I <strong>am</strong> happy. (私 ＝ 幸せ)</div>
          <div class="example-item">She <strong>is</strong> a student. (彼女 ＝ 生徒)</div>
          <div class="example-item">They <strong>are</strong> in the park. (彼ら ＝ 公園にいる)</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🏃 一般動詞 (Action/State Verbs)</h4>
        <p>be動詞以外のすべての動詞。具体的な動作や心の状態を表します。</p>
        <div class="example-grid">
          <div class="example-item">I <strong>run</strong> fast. (走る - 動作)</div>
          <div class="example-item">She <strong>eats</strong> lunch. (食べる - 動作)</div>
          <div class="example-item">He <strong>likes</strong> music. (好き - 状態)</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">時制（Time）のイメージ</h3>
      
      <div class="concept-box">
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 2rem 0; position: relative;">
          <div style="position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: var(--text-muted); z-index: 0;"></div>
          
          <div style="z-index: 1; text-align: center; background: var(--surface); padding: 0.5rem;">
            <div style="font-size: 1.5rem;">⬅️</div>
            <div style="font-weight: bold; color: var(--text-muted);">過去 (Past)</div>
            <div style="font-size: 0.8rem;">played / went</div>
          </div>

          <div style="z-index: 1; text-align: center; background: var(--surface); padding: 0.5rem; border: 2px solid var(--primary); border-radius: 0.5rem;">
            <div style="font-size: 2rem;">⬇️</div>
            <div style="font-weight: bold; color: var(--primary);">現在 (Present)</div>
            <div style="font-size: 0.8rem;">play / go</div>
          </div>

          <div style="z-index: 1; text-align: center; background: var(--surface); padding: 0.5rem;">
            <div style="font-size: 1.5rem;">➡️</div>
            <div style="font-weight: bold; color: var(--secondary);">未来 (Future)</div>
            <div style="font-size: 0.8rem;">will play / will go</div>
          </div>
        </div>
        <p style="text-align: center;">動詞の形を変えることで、「いつ」の話かを表せます。</p>
      </div>
    </div>
  `,
  examples: ['run', 'eat', 'is', 'have', 'study'],
  quiz: [
    { question: '次のうち、動詞はどれですか？', options: ['beautiful', 'eat', 'desk', 'slowly'], answer: 'eat' },
    { question: 'be動詞はどれですか？', options: ['play', 'am', 'go', 'like'], answer: 'am' },
    { question: '「勉強する」を意味する動詞は？', options: ['student', 'study', 'studious', 'studio'], answer: 'study' },
    { question: '過去形の動詞はどれですか？', options: ['play', 'played', 'playing', 'plays'], answer: 'played' },
    { question: '3人称単数現在形（三単現）のsがついているのは？', options: ['go', 'going', 'goes', 'gone'], answer: 'goes' },
    { question: '「楽しむ」を意味する動詞は？', options: ['joy', 'enjoy', 'fun', 'happy'], answer: 'enjoy' },
    { question: '助動詞（動詞を助ける言葉）はどれですか？', options: ['can', 'run', 'big', 'cat'], answer: 'can' },
    { question: '不規則動詞の過去形として正しいのは？ (go -> ?)', options: ['goed', 'gone', 'went', 'going'], answer: 'went' },
    { question: '「食べる」の現在進行形は？', options: ['eat', 'ate', 'eating', 'eaten'], answer: 'eating' },
    { question: '状態動詞（動作ではなく状態を表す動詞）はどれですか？', options: ['run', 'know', 'hit', 'jump'], answer: 'know' }
  ]
};
