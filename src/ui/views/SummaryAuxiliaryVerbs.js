
import { generateAuxiliaryVerbQuiz, generateAIQuiz } from '../../logic/curriculum/auxiliaryVerbs/quizGenerator.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryAuxiliaryVerbs = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">🛡️ 助動詞 完全攻略</h2>
        <p class="summary-intro">助動詞は、動詞に「可能性」「義務」「許可」などのニュアンスを付け加える重要な言葉です。<br>それぞれの助動詞の意味と使い分けをマスターしましょう！</p>
      </div>
      
      <div class="patterns-grid">
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">助動詞 1</span>
            <h3>can / could</h3>
          </div>
          <p class="pattern-desc"><strong>「〜できる」「〜していただけますか？」</strong><br>能力や許可、丁寧な依頼を表します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I can play the piano.</p>
              <p class="example-translation">私はピアノを弾くことができます。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>用法:</strong> 能力 (can), 過去の能力 (could), 丁寧な依頼 (Could you...?)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">助動詞 2</span>
            <h3>will / would</h3>
          </div>
          <p class="pattern-desc"><strong>「〜するつもりだ」「〜いかがですか？」</strong><br>意志や未来、丁寧な勧誘を表します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I will help you.</p>
              <p class="example-translation">あなたをお手伝いします。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>用法:</strong> 意志 (will), 丁寧な勧誘 (Would you like...?), 丁寧な依頼 (Would you...?)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">助動詞 3</span>
            <h3>must / should</h3>
          </div>
          <p class="pattern-desc"><strong>「〜しなければならない」「〜すべきだ」</strong><br>強い義務やアドバイス、禁止を表します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">You must study hard.</p>
              <p class="example-translation">一生懸命勉強しなければなりません。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>用法:</strong> 強い義務 (must), 禁止 (must not), アドバイス (should)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">助動詞 4</span>
            <h3>may / might</h3>
          </div>
          <p class="pattern-desc"><strong>「〜してもよい」「〜かもしれない」</strong><br>フォーマルな許可や推量を表します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">It may rain tonight.</p>
              <p class="example-translation">今夜は雨が降るかもしれません。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>用法:</strong> 丁寧な許可 (May I...?), 推量 (may), より控えめな推量 (might)</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '助動詞 エキスパートチャレンジ',
    subtitle: 'すべての助動詞を使いこなして、表現の幅を広げよう！',
    storageKey: 'auxiliaryVerbsBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateAuxiliaryVerbQuiz(level),
    aiQuizGenerator: (level, signal) => generateAIQuiz(level, signal),
    backLink: '#/category/auxiliary-verbs',
    topics: curriculum.find(c => c.id === 'auxiliary-verbs')?.topics || []
  });
};
