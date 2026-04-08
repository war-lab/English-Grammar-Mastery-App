
import { generateVariousExpressionsQuiz } from '../../logic/curriculum/variousExpressions/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryVariousExpressions = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ 色々な表現 完全攻略</h2>
        <p class="summary-intro">英語表現の幅を広げる重要な構文や表現をマスターしましょう。<br>命令文、非人称のit、存在を表すThere is/are、そして数量表現を学びます。</p>
      </div>
      
      <div class="patterns-grid">
        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">表現 1</span>
            <h3>命令文 (Imperative)</h3>
          </div>
          <p class="pattern-desc"><strong>「〜しなさい」「〜してください」</strong><br>相手に行動を促す表現です。主語(You)を省略し、動詞の原形で始めます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">Open the door, please.</p>
              <p class="example-translation">ドアを開けてください。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>用法:</strong> 命令 (Run!), 禁止 (Don't run.), 丁寧な依頼 (Please...)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">表現 2</span>
            <h3>非人称のit (Impersonal it)</h3>
          </div>
          <p class="pattern-desc"><strong>天気・時間・距離・明暗</strong><br>「それ」とは訳さない特別なitです。文の主語として形式的に置かれます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">It is sunny today.</p>
              <p class="example-translation">今日は晴れです。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>用法:</strong> 天気 (It's rainy.), 時間 (It's 5 o'clock.), 距離 (It's far.)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">表現 3</span>
            <h3>There is/are 構文</h3>
          </div>
          <p class="pattern-desc"><strong>「〜がある」「〜がいる」</strong><br>新しく話題に出す人や物の存在を表します。場所を表す語句とセットでよく使われます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">There is a cat under the table.</p>
              <p class="example-translation">テーブルの下に猫がいます。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>使い分け:</strong> 単数 (There is), 複数 (There are)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">表現 4</span>
            <h3>数量表現 (Quantity)</h3>
          </div>
          <p class="pattern-desc"><strong>数や量を表す形容詞</strong><br>「たくさんの〜」「少しの〜」など、名詞の種類（数えられる/数えられない）によって使い分けます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I have many books.</p>
              <p class="example-translation">私はたくさんの本を持っています。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>使い分け:</strong> 数えられる (many/few), 数えられない (much/little), 両方 (a lot of)</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '色々な表現 エキスパートチャレンジ',
    subtitle: '命令文・it・There is/are・数量表現をマスターしよう！',
    storageKey: 'variousExpressionsBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateVariousExpressionsQuiz(level),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'various expressions'),
    backLink: '#/',
    topics: curriculum.find(c => c.id === 'various-expressions')?.topics || []
  });
};
