// 比較 (Comparisons) エキスパートチャレンジ画面
import { generateQuiz as generateComparisonsQuiz } from '../../logic/curriculum/comparisons/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryComparisons = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ 比較表現 完全攻略</h2>
        <p class="summary-intro">原級・比較級・最上級の3つの比較表現を完全にマスターしましょう。<br>疑問文での使い方や慣用表現も含めて、比較のすべてを学びます。</p>
      </div>

      <div class="patterns-grid">
        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">比較 1</span>
            <h3>原級比較 (as ~ as)</h3>
          </div>
          <p class="pattern-desc"><strong>「同じくらい〜」「〜ほど○○ではない」</strong><br>as ~ as の間には形容詞・副詞の原級を入れます。否定形やas ~ as possibleも重要です。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">Tom is as tall as Ken.</p>
              <p class="example-translation">トムはケンと同じくらい背が高い。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> not as ~ as で「〜ほど○○ではない」（比較級で書き換え可能）</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">比較 2</span>
            <h3>比較級 (-er / more ~)</h3>
          </div>
          <p class="pattern-desc"><strong>「AはBより〜だ」</strong><br>短い語は -er than、長い語は more ~ than。不規則変化（good→better）に注意。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">She is taller than her sister.</p>
              <p class="example-translation">彼女は姉より背が高い。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> good→better, bad→worse は必ず暗記！</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">比較 3</span>
            <h3>最上級 (-est / most ~)</h3>
          </div>
          <p class="pattern-desc"><strong>「〜の中で一番○○だ」</strong><br>必ず the をつける。in（場所）と of（数）の使い分けが重要。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">Mt. Fuji is the highest mountain in Japan.</p>
              <p class="example-translation">富士山は日本で一番高い山です。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> in = 場所・集団 / of = 数・全体</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">比較 4</span>
            <h3>疑問文と慣用表現</h3>
          </div>
          <p class="pattern-desc"><strong>Which/Who/What + 比較級・最上級</strong><br>比較の疑問文と、more and more, the比較級the比較級 などの慣用表現。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">What is the longest river in Japan?</p>
              <p class="example-translation">日本で一番長い川は何ですか？</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> What=広い範囲 / Which=選択肢あり / Who=人</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '比較表現 エキスパートチャレンジ',
    subtitle: '原級・比較級・最上級と慣用表現をマスターしよう！',
    storageKey: 'comparisonsBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateComparisonsQuiz(level),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'comparisons'),
    backLink: '#/',
    topics: curriculum.find(c => c.id === 'comparisons')?.topics || []
  });
};
