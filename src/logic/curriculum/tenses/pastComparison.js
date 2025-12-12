
export const pastComparison = {
  id: 'tense-past-comparison',
  isEnabled: true,
  title: '過去形 vs 過去進行形 (Simple Past vs Past Progressive)',
  description: '一時点の過去と進行中だった過去の違いを理解しましょう。',
  explanation: `
    <div class="explanation-section">
      <p>過去形と過去進行形は、<strong>どちらも「過去」のことを表しますが、動作の捉え方が異なります</strong>。この違いを理解すると、より正確に過去の状況を表現できます。</p>
      
      <div class="diagram-container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
          <div style="text-align: center; padding: 1.5rem; background: rgba(255, 100, 100, 0.1); border-radius: 1rem;">
            <div style="font-size: 2rem;">⚡</div>
            <div style="font-weight: bold; color: var(--primary); font-size: 1.2rem;">過去形</div>
            <div style="margin-top: 0.5rem;">完了した過去の動作</div>
            <div style="margin-top: 0.5rem; font-size: 0.9rem;">I <strong>played</strong> tennis.</div>
            <div style="margin-top: 0.3rem; font-size: 0.8rem; color: var(--text-muted);">テニスをしました（終わった）</div>
          </div>
          <div style="text-align: center; padding: 1.5rem; background: rgba(100, 100, 255, 0.1); border-radius: 1rem;">
            <div style="font-size: 2rem;">🏃💨</div>
            <div style="font-weight: bold; color: var(--secondary); font-size: 1.2rem;">過去進行形</div>
            <div style="margin-top: 0.5rem;">進行中だった過去の動作</div>
            <div style="margin-top: 0.5rem; font-size: 0.9rem;">I <strong>was playing</strong> tennis.</div>
            <div style="margin-top: 0.3rem; font-size: 0.8rem; color: var(--text-muted);">テニスをしていました（最中だった）</div>
          </div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">基本的な違い</h3>

      <div class="concept-box">
        <h4>⚡ 過去形（Simple Past）</h4>
        <p><strong>形式</strong>: 動詞の過去形（-ed / 不規則変化）</p>
        <p><strong>意味</strong>:</p>
        <ul class="check-list">
          <li>✓ 過去に起こった出来事「〜した」</li>
          <li>✓ 完了した動作</li>
          <li>✓ 過去の習慣「よく〜した」</li>
          <li>✓ 一時点の動作</li>
        </ul>
        <div class="example-grid" style="margin-top: 1rem;">
          <div class="example-item"><strong>I played tennis yesterday.</strong><br>（昨日テニスをした）</div>
          <div class="example-item"><strong>She went to school.</strong><br>（彼女は学校に行った）</div>
        </div>
      </div>

      <div class="concept-box">
        <h4>🏃 過去進行形（Past Progressive）</h4>
        <p><strong>形式</strong>: was/were + 動詞の-ing形</p>
        <p><strong>意味</strong>:</p>
        <ul class="check-list">
          <li>✓ 過去のある時点で進行中だったこと「〜していた」</li>
          <li>✓ 過去の一時的な状況</li>
          <li>✓ 背景の説明</li>
          <li>✓ 同時進行の動作</li>
        </ul>
        <div class="example-grid" style="margin-top: 1rem;">
          <div class="example-item"><strong>I was playing tennis at 3.</strong><br>（3時にテニスをしていた）</div>
          <div class="example-item"><strong>She was going to school.</strong><br>（彼女は学校に行く途中だった）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">対比例文で理解しよう</h3>

      <div class="example-box">
        <p class="example-sentence">⚡ I studied English last night. (過去形)</p>
        <p class="example-translation">私は昨夜英語を勉強しました。</p>
        <p class="example-note">→ 勉強という動作が完了した。勉強し終わった。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">🏃 I was studying English at 8 PM. (過去進行形)</p>
        <p class="example-translation">私は午後8時に英語を勉強していました。</p>
        <p class="example-note">→ 8時の時点で勉強の最中だった。まだ終わっていない状態。</p>
      </div>

      <div style="border-top: 2px solid rgba(255,255,255,0.1); margin: 2rem 0;"></div>

      <div class="example-box">
        <p class="example-sentence">⚡ He played soccer yesterday. (過去形)</p>
        <p class="example-translation">彼は昨日サッカーをしました。</p>
        <p class="example-note">→ サッカーをした事実。いつ始めていつ終わったかは重要でない。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">🏃 He was playing soccer when I called. (過去進行形)</p>
        <p class="example-translation">私が電話したとき、彼はサッカーをしていました。</p>
        <p class="example-note">→ 電話した時点でサッカーの最中だった。同時進行を表す。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">when 節との組み合わせ</h3>

      <div class="concept-box">
        <p>過去進行形は、<strong>when節</strong>と組み合わせて「〜していたとき、…した」という同時進行を表すことが多いです。</p>
        
        <div class="example-box" style="margin-top: 1rem;">
          <p class="example-sentence">I was watching TV when he came.</p>
          <p class="example-breakdown"><span class="tag v-tag">V(過去進行)</span> was watching <span class="tag m-tag">when</span> <span class="tag v-tag">V(過去)</span> came</p>
          <p class="example-translation">彼が来たとき、私はテレビを見ていました。</p>
          <p class="example-note">→ 私がテレビを見ている最中に、彼が来た（一瞬の出来事）</p>
        </div>

        <div class="example-box" style="margin-top: 1rem;">
          <p class="example-sentence">She was cooking when I arrived.</p>
          <p class="example-breakdown"><span class="tag v-tag">V(過去進行)</span> was cooking <span class="tag m-tag">when</span> <span class="tag v-tag">V(過去)</span> arrived</p>
          <p class="example-translation">私が着いたとき、彼女は料理をしていました。</p>
          <p class="example-note">→ 彼女の料理（継続中）の最中に、私が着いた（一瞬の出来事）</p>
        </div>

        <p style="margin-top: 1rem;"><strong>パターン</strong>:</p>
        <ul class="check-list">
          <li>✓ <strong>過去進行形</strong>：背景・継続していたこと</li>
          <li>✓ <strong>when + 過去形</strong>：一瞬の出来事・割り込んできたこと</li>
        </ul>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">時間表現で見分ける</h3>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">
        <div class="concept-box">
          <h4 style="color: var(--primary);">⚡ 過去形でよく使う</h4>
          <ul class="check-list">
            <li>✓ yesterday (昨日)</li>
            <li>✓ last night/week (昨夜/先週)</li>
            <li>✓ ago (〜前)</li>
            <li>✓ in 2020 (2020年に)</li>
            <li>✓ when I was young (若い頃)</li>
          </ul>
        </div>
        <div class="concept-box">
          <h4 style="color: var(--secondary);">🏃 過去進行形でよく使う</h4>
          <ul class="check-list">
            <li>✓ at 8 PM (午後8時に)</li>
            <li>✓ at that time (その時)</li>
            <li>✓ when ... (〜したとき)</li>
            <li>✓ while ... (〜している間)</li>
            <li>✓ then (その時)</li>
          </ul>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文</h3>

      <div class="example-box">
        <p class="example-sentence">It was raining when I woke up.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> It <span class="tag v-tag">V(過去進行)</span> was raining <span class="tag m-tag">when</span> I woke up</p>
        <p class="example-translation">私が起きたとき、雨が降っていました。</p>
        <p class="example-note">雨が降り続いている最中に、起きるという一瞬の動作が起こった。</p>
      </div>

      <div class="example-box">
        <p class="example-sentence">We were having dinner at 7 PM.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> We <span class="tag v-tag">V(過去進行)</span> were having <span class="tag o-tag">O</span> dinner <span class="tag m-tag">(M)</span> at 7 PM</p>
        <p class="example-translation">私たちは午後7時に夕食を食べていました。</p>
        <p class="example-note">7時という特定の時点で、夕食の最中だったことを表す。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ <strong>過去形</strong>：完了した過去の動作</li>
        <li>✓ <strong>過去進行形</strong>：過去のある時点で進行中だった動作</li>
        <li>✓ when節で「〜していたとき、…した」を表現</li>
        <li>✓ 時間表現（yesterday vs at 8 PM）で見分ける</li>
        <li>✓ 過去進行形は「背景」、過去形は「出来事」のイメージ</li>
      </ul>
    </div>
  `,
  examples: [
    'I studied. / I was studying at 8.',
    'She went to school. / She was going when I saw her.',
    'They played soccer. / They were playing when it started raining.',
    'He watched TV. / He was watching TV at that time.',
    'We ate lunch. / We were eating when he called.'
  ],
  quiz: [
    {
      question: '「私は昨日英語を勉強しました」を英語で表すと？',
      options: ['I study English yesterday.', 'I studied English yesterday.', 'I was studying English yesterday.', 'I am studying English yesterday.'],
      answer: 'I studied English yesterday.',
      explanation: '「昨日」という完了した過去の動作なので過去形を使います。yesterday があるときは過去形です。'
    },
    {
      question: '「私は午後8時に英語を勉強していました」を英語で表すと？',
      options: ['I studied English at 8 PM.', 'I was studying English at 8 PM.', 'I study English at 8 PM.', 'I am studying English at 8 PM.'],
      answer: 'I was studying English at 8 PM.',
      explanation: '「8時に」という特定の時点で進行中だったので過去進行形を使います。at 8 PM という時点を表す表現があるときは過去進行形です。'
    },
    {
      question: '過去進行形の形式は？',
      options: ['動詞の過去形', 'was/were + 動詞の-ing形', 'have/has + 過去分詞', 'will + 動詞の原形'],
      answer: 'was/were + 動詞の-ing形',
      explanation: '過去進行形は was/were + 動詞の-ing形 で作ります。I was playing, They were studying のように使います。'
    },
    {
      question: '「彼が来たとき、私はテレビを見ていました」を英語で表すと？',
      options: ['I watched TV when he came.', 'I was watching TV when he came.', 'I watch TV when he came.', 'I am watching TV when he came.'],
      answer: 'I was watching TV when he came.',
      explanation: 'テレビを見ている最中に彼が来たので、継続していた動作は過去進行形（was watching）、一瞬の出来事は過去形（came）を使います。'
    },
    {
      question: '次のうち、過去形でよく使う時間表現はどれですか？',
      options: ['at 8 PM', 'yesterday', 'now', 'every day'],
      answer: 'yesterday',
      explanation: 'yesterday（昨日）は完了した過去を表すので過去形でよく使います。at 8 PM（8時に）は過去進行形でよく使います。'
    },
    {
      question: '過去進行形が表すのはどれですか？',
      options: ['完了した過去の動作', '過去のある時点で進行中だった動作', 'ふだんの習慣', '未来のこと'],
      answer: '過去のある時点で進行中だった動作',
      explanation: '過去進行形は「過去のある時点で進行中だった動作」を表します。完了した動作は過去形で表します。'
    },
    {
      question: '「彼は午後3時にサッカーをしていました」を英語で表すと？',
      options: ['He played soccer at 3 PM.', 'He was playing soccer at 3 PM.', 'He plays soccer at 3 PM.', 'He is playing soccer at 3 PM.'],
      answer: 'He was playing soccer at 3 PM.',
      explanation: '3時という特定の時点で進行中だったので過去進行形を使います。He（三人称単数）なので was を使います。'
    },
    {
      question: '次のうち、正しい文はどれですか？',
      options: ['It rained when I was waking up.', 'It was raining when I woke up.', 'It rains when I woke up.', 'It is raining when I woke up.'],
      answer: 'It was raining when I woke up.',
      explanation: '雨が降り続けている最中（過去進行形）に、起きるという一瞬の動作（過去形）が起こったことを表します。'
    },
    {
      question: 'when節と過去進行形を使う典型的なパターンは？',
      options: ['過去進行形 + when + 過去形', '過去形 + when + 過去形', '現在進行形 + when + 過去形', '未来形 + when + 過去形'],
      answer: '過去進行形 + when + 過去形',
      explanation: '「〜していたとき、…した」というパターンでは、継続していた動作を過去進行形、一瞬の出来事を過去形で表します。'
    },
    {
      question: '「私たちは午後7時に夕食を食べていました」を英語で表すと？',
      options: ['We ate dinner at 7 PM.', 'We were eating dinner at 7 PM.', 'We eat dinner at 7 PM.', 'We are eating dinner at 7 PM.'],
      answer: 'We were eating dinner at 7 PM.',
      explanation: '7時という特定の時点で食事の最中だったので過去進行形を使います。We（複数）なので were を使います。'
    }
  ]
};
