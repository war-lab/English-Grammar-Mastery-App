
import { generatePassiveVoiceQuiz } from '../../logic/curriculum/passiveVoice/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryPassiveVoice = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ 受動態マスター (Passive Voice Mastery)</h2>
        <p class="summary-intro">「〜される」という受け身の表現を極めましょう。<br>さまざまな時制や助動詞と組み合わせた受動態をマスターして、表現の幅を広げましょう！</p>
      </div>
      
      <div class="patterns-grid">
        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">基本</span>
            <h3>基本の受動態 (Basic)</h3>
          </div>
          <p class="pattern-desc"><strong>be動詞 + 過去分詞</strong><br>最も基本的な受動態の形です。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">The room is cleaned every day.</p>
              <p class="example-translation">その部屋は毎日掃除されます。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>構造:</strong> is/am/are/was/were + Vpp</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">応用</span>
            <h3>未来・助動詞の受動態</h3>
          </div>
          <p class="pattern-desc"><strong>will/can + be + 過去分詞</strong><br>未来や可能性を表す受動態です。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">It will be finished tomorrow.</p>
              <p class="example-translation">それは明日終わるでしょう。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>構造:</strong> 助動詞 + be + Vpp</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '受動態 エキスパートチャレンジ',
    subtitle: '能動態と受動態を自在に使いこなそう！',
    storageKey: 'passiveVoiceBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generatePassiveVoiceQuiz(level, false),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'passive voice'),
    backLink: '#/category/passive-voice',
    topics: curriculum.find(c => c.id === 'passive-voice')?.topics || []
  });
};
