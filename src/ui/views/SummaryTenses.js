import { generateTenseQuiz, generateAIQuiz } from '../../logic/curriculum/tenses/quizGenerator.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryTenses = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">⏰ 時制マスター 完全攻略</h2>
        <p class="summary-intro">英語の時制は時間の流れを表現する重要な文法要素です。<br>過去・未来・進行・完了の4つの時制をマスターして、英語で自由に時間を表現しましょう！</p>
      </div>
      
      <div class="patterns-grid">
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">時制 1</span>
            <h3>過去形 (Past Tense)</h3>
          </div>
          <p class="pattern-desc"><strong>「〜した」「〜だった」</strong><br>過去に起こった出来事や状態を表現します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I played tennis yesterday.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(過去)</span> played <span class="tag o-tag">O</span> tennis <span class="tag m-tag">(M)</span> yesterday</p>
              <p class="example-translation">私は昨日テニスをしました。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>形式:</strong> 動詞の過去形 (played, went, was/were)</p>
              <p style="font-size: 0.9rem; margin: 0.5rem 0 0 0;"><strong>時間表現:</strong> yesterday, last week, ago</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">時制 2</span>
            <h3>未来形 (Future Tense)</h3>
          </div>
          <p class="pattern-desc"><strong>「〜するだろう」「〜する予定だ」</strong><br>これから起こることや未来の予定を表現します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I will study English tomorrow.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(未来)</span> will study <span class="tag o-tag">O</span> English <span class="tag m-tag">(M)</span> tomorrow</p>
              <p class="example-translation">私は明日英語を勉強します。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>形式:</strong> will + 動詞の原形 / be going to + 動詞の原形</p>
              <p style="font-size: 0.9rem; margin: 0.5rem 0 0 0;"><strong>時間表現:</strong> tomorrow, next week, soon</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">時制 3</span>
            <h3>進行形 (Progressive)</h3>
          </div>
          <p class="pattern-desc"><strong>「〜している」「〜していた」</strong><br>動作が進行中であることを表現します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I am watching TV now.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(現在進行)</span> am watching <span class="tag o-tag">O</span> TV <span class="tag m-tag">(M)</span> now</p>
              <p class="example-translation">私は今テレビを見ています。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>形式:</strong> be動詞 + 動詞のing形</p>
              <p style="font-size: 0.9rem; margin: 0.5rem 0 0 0;"><strong>種類:</strong> 現在進行形(am/is/are -ing)、過去進行形(was/were -ing)、未来進行形(will be -ing)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">時制 4</span>
            <h3>完了形 (Perfect)</h3>
          </div>
          <p class="pattern-desc"><strong>「〜したことがある」「〜してしまった」</strong><br>過去から現在までの完了・経験・継続を表現します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I have visited Tokyo twice.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V(完了)</span> have visited <span class="tag o-tag">O</span> Tokyo <span class="tag m-tag">(M)</span> twice</p>
              <p class="example-translation">私は東京を2回訪れたことがあります。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>形式:</strong> have/has + 過去分詞</p>
              <p style="font-size: 0.9rem; margin: 0.5rem 0 0 0;"><strong>意味:</strong> 完了・経験・継続の3つの用法</p>
              <p style="font-size: 0.9rem; margin: 0.5rem 0 0 0;"><strong>時間表現:</strong> already, just, ever, never, for, since</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '時制 エキスパートチャレンジ',
    subtitle: '全時制をマスターして、英語で自由に時間を表現しよう！',
    storageKey: 'tensesBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateTenseQuiz(level, false),
    aiQuizGenerator: (level, signal) => generateAIQuiz(level, signal),
    backLink: '#/category/tenses',
    topics: curriculum.find(c => c.id === 'tenses')?.topics || []
  });
};
