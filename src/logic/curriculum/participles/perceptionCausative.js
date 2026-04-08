// 知覚動詞・使役動詞と分詞のレッスン定義
export const perceptionCausative = {
  id: 'part-perception-causative',
  isEnabled: true,
  title: '知覚動詞・使役動詞と分詞',
  description: 'see/hear/feel + O + ~ing/~ed、have/get + O + 過去分詞など、分詞と組み合わせる重要構文を学びます。',
  explanation: `
    <div class="explanation-section">
      <p>分詞は<strong>知覚動詞</strong>（see, hear, feel, watch, notice）や<strong>使役動詞</strong>（have, get, keep, leave）と組み合わせて、SVOC構文を作ります。「〜しているのを見る/聞く」「〜してもらう」といった重要表現です。</p>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">知覚動詞 + O + 現在分詞</h3>

      <div class="concept-box">
        <h4>📘 「Oが〜しているのを見る/聞く」</h4>
        <p>知覚動詞の後に目的語と現在分詞を置くと、「Oが〜しているのを（途中を）知覚する」という意味になります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I saw him running in the park.</strong><br>（彼が公園で走っているのを見た）<br>→ 走っている途中を目撃</div>
          <div class="example-item"><strong>She heard someone knocking on the door.</strong><br>（誰かがドアをノックしているのを聞いた）</div>
          <div class="example-item"><strong>I felt the ground shaking.</strong><br>（地面が揺れているのを感じた）</div>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(99, 102, 241, 0.1); border-radius: 0.5rem;">
          <p style="margin: 0;"><strong>原形との違い：</strong>see + O + <strong>原形</strong>（一部始終を見た）vs see + O + <strong>~ing</strong>（途中を見た）</p>
        </div>
        <div style="margin-top: 0.75rem; padding: 0.75rem; background: rgba(255, 200, 50, 0.1); border-radius: 0.5rem;">
          <p style="margin: 0;"><strong>補足：</strong>「原形」は正確には「原形不定詞」と呼ばれ、to不定詞のtoが省略された形です。to不定詞はオールラウンダーなので、補語の位置にも顔を出します。</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">知覚動詞 + O + 過去分詞</h3>

      <div class="concept-box">
        <h4>📗 「Oが〜されるのを見る/聞く」</h4>
        <p>目的語が「される側」の場合は過去分詞を使います。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I saw the window broken.</strong><br>（窓が割られているのを見た）</div>
          <div class="example-item"><strong>She heard her name called.</strong><br>（自分の名前が呼ばれるのを聞いた）</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">have / get + O + 過去分詞</h3>

      <div class="concept-box">
        <h4>📙 「Oを〜してもらう / 〜される」</h4>
        <p>have / get + 目的語 + 過去分詞は、2つの意味があります。</p>
        <div class="example-grid">
          <div class="example-item"><strong>I had my hair cut.</strong><br>（髪を切ってもらった）<br>→ 使役：誰かに〜してもらう</div>
          <div class="example-item"><strong>I had my wallet stolen.</strong><br>（財布を盗まれた）<br>→ 被害：〜されてしまう</div>
          <div class="example-item"><strong>I got my car repaired.</strong><br>（車を修理してもらった）<br>→ get も同じ使い方ができる</div>
        </div>
        <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 200, 50, 0.15); border-radius: 0.5rem;">
          <p style="margin: 0;"><strong>使役 or 被害？</strong>文脈で判断します。my hair cut（カットしてもらった＝使役）、my wallet stolen（盗まれた＝被害）</p>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">keep / leave + O + 分詞</h3>

      <div class="concept-box">
        <h4>💡 「Oを〜の状態にしておく」</h4>
        <div class="example-grid">
          <div class="example-item"><strong>Don't keep me waiting.</strong><br>（私を待たせないで）<br>→ keep + O + ~ing「〜し続けさせる」</div>
          <div class="example-item"><strong>She left the door locked.</strong><br>（彼女はドアに鍵をかけたままにした）<br>→ leave + O + 過去分詞「〜された状態にしておく」</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ 知覚動詞 + O + <strong>~ing</strong>「Oが〜しているのを」（途中）</li>
        <li>✓ 知覚動詞 + O + <strong>原形</strong>「Oが〜するのを」（一部始終）</li>
        <li>✓ 知覚動詞 + O + <strong>過去分詞</strong>「Oが〜されるのを」</li>
        <li>✓ have / get + O + <strong>過去分詞</strong>「〜してもらう」or「〜される」</li>
        <li>✓ keep + O + <strong>~ing</strong>「〜し続けさせる」</li>
        <li>✓ leave + O + <strong>過去分詞</strong>「〜された状態にしておく」</li>
      </ul>
    </div>
  `,
  examples: [
    'I saw him running in the park. — 彼が公園で走っているのを見た。',
    'She heard her name called. — 自分の名前が呼ばれるのを聞いた。',
    'I had my hair cut. — 髪を切ってもらった。',
    'I had my wallet stolen. — 財布を盗まれた。',
    'Don\'t keep me waiting. — 私を待たせないで。',
    'I got my car repaired. — 車を修理してもらった。'
  ],
  quiz: [
    {
      question: '「彼が公園で走っているのを見た」を英語にすると？',
      options: ['I saw him running in the park.', 'I saw him ran in the park.', 'I saw him to run in the park.', 'I saw him runs in the park.'],
      answer: 'I saw him running in the park.',
      explanation: '知覚動詞 see + 目的語 + 現在分詞で「〜しているのを見る」。走っている途中を目撃した意味。'
    },
    {
      question: '「髪を切ってもらった」を英語にすると？',
      options: ['I had my hair cut.', 'I had my hair cutting.', 'I had cut my hair.', 'I had my hair to cut.'],
      answer: 'I had my hair cut.',
      explanation: 'have + O + 過去分詞で「Oを〜してもらう」。hair は「切られる側」なので過去分詞 cut。'
    },
    {
      question: '空所に入る適切な語は？ "She heard someone ____ on the door."',
      options: ['knocking', 'knocked', 'to knock', 'knocks'],
      answer: 'knocking',
      explanation: '知覚動詞 hear + O + 現在分詞で「〜しているのを聞く」。ノックしている途中を聞いた。'
    },
    {
      question: '空所に入る適切な語は？ "I had my wallet ____."',
      options: ['stolen', 'stealing', 'to steal', 'stole'],
      answer: 'stolen',
      explanation: 'have + O + 過去分詞。財布は「盗まれる側」なので過去分詞 stolen。被害の意味。'
    },
    {
      question: '「私を待たせないで」を英語にすると？',
      options: ['Don\'t keep me waiting.', 'Don\'t keep me waited.', 'Don\'t keep me to wait.', 'Don\'t keep me wait.'],
      answer: 'Don\'t keep me waiting.',
      explanation: 'keep + O + 現在分詞で「Oを〜し続けさせる」。me は能動的に待つ側なので現在分詞。'
    },
    {
      question: '空所に入る適切な語は？ "I felt the ground ____."',
      options: ['shaking', 'shaken', 'to shake', 'shook'],
      answer: 'shaking',
      explanation: '知覚動詞 feel + O + 現在分詞で「〜しているのを感じる」。地面は自ら揺れている（能動）。'
    },
    {
      question: '「車を修理してもらった」を英語にすると？',
      options: ['I got my car repaired.', 'I got my car repairing.', 'I got my car to repair.', 'I got my car repair.'],
      answer: 'I got my car repaired.',
      explanation: 'get + O + 過去分詞で「Oを〜してもらう」。car は「修理される側」なので過去分詞。'
    },
    {
      question: '空所に入る適切な語は？ "She left the door ____."',
      options: ['locked', 'locking', 'to lock', 'lock'],
      answer: 'locked',
      explanation: 'leave + O + 過去分詞で「Oを〜された状態にしておく」。ドアは「鍵をかけられる側」。'
    },
    {
      question: '次のうち、see + O + 原形と see + O + ~ing の違いとして正しいものは？',
      options: ['原形=一部始終、~ing=途中', '原形=途中、~ing=一部始終', '原形=受動、~ing=能動', '違いはない'],
      answer: '原形=一部始終、~ing=途中',
      explanation: 'see + O + 原形は動作の一部始終を見た。see + O + ~ing は動作の途中を見た。I saw him cross the road（渡りきるのを見た）vs I saw him crossing the road（渡っている途中を見た）。'
    },
    {
      question: '空所に入る適切な語は？ "She heard her name ____ by the teacher."',
      options: ['called', 'calling', 'to call', 'call'],
      answer: 'called',
      explanation: '知覚動詞 + O + 過去分詞で「Oが〜されるのを聞く」。名前は「呼ばれる側」なので過去分詞。'
    }
  ]
};
