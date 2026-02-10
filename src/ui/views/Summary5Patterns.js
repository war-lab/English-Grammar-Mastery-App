
import { generateSentencePatternQuiz } from '../../logic/curriculum/sentencePatterns/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { createPatternDiagram } from '../components/patternDiagrams.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum/index.js';

export const Summary5Patterns = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">📚 5つの文型 完全攻略</h2>
        <p class="summary-intro">英語のすべての文は、この5つのパターンのいずれかに分類されます。<br>各文型の特徴と構造を理解して、英語脳を作りましょう！</p>
      </div>
      
      <div class="patterns-grid">
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">第1文型</span>
            <h3>SV</h3>
          </div>
          <p class="pattern-desc"><strong>「SはVする」</strong><br>主語と動詞だけで完結する、最もシンプルな形。</p>
          <div class="svg-diagram-container">
            ${createPatternDiagram('SV')}
          </div>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">Birds fly.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> Birds <span class="tag v-tag">V</span> fly</p>
              <p class="example-translation">鳥は飛ぶ。</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">第2文型</span>
            <h3>SVC</h3>
          </div>
          <p class="pattern-desc"><strong>「SはCです」</strong><br>主語(S)と補語(C)がイコール(S=C)の関係。</p>
          <div class="svg-diagram-container">
            ${createPatternDiagram('SVC')}
          </div>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I am happy.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> am <span class="tag c-tag">C</span> happy</p>
              <p class="example-translation">私は幸せです。(I = happy)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">第3文型</span>
            <h3>SVO</h3>
          </div>
          <p class="pattern-desc"><strong>「SはOをVする」</strong><br>動作が対象(O)に及ぶ。S≠Oの関係。</p>
          <div class="svg-diagram-container">
            ${createPatternDiagram('SVO')}
          </div>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I play tennis.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> play <span class="tag o-tag">O</span> tennis</p>
              <p class="example-translation">私はテニスをする。(I ≠ tennis)</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">第4文型</span>
            <h3>SVOO</h3>
          </div>
          <p class="pattern-desc"><strong>「SはO1にO2をVする」</strong><br>「誰に」「何を」あげる・教えるなど。</p>
          <div class="svg-diagram-container">
            ${createPatternDiagram('SVOO')}
          </div>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">He gave me a gift.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V</span> gave <span class="tag o-tag">O1</span> me <span class="tag o-tag">O2</span> a gift</p>
              <p class="example-translation">彼は私にギフトをくれた。</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">第5文型</span>
            <h3>SVOC</h3>
          </div>
          <p class="pattern-desc"><strong>「SはOをCにする/と呼ぶ」</strong><br>目的語(O)と補語(C)がイコール(O=C)の関係。</p>
          <div class="svg-diagram-container">
            ${createPatternDiagram('SVOC')}
          </div>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">We call him Tom.</p>
              <p class="example-breakdown"><span class="tag s-tag">S</span> We <span class="tag v-tag">V</span> call <span class="tag o-tag">O</span> him <span class="tag c-tag">C</span> Tom</p>
              <p class="example-translation">私たちは彼をトムと呼ぶ。(him = Tom)</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '5文型 エキスパートチャレンジ',
    subtitle: '全パターンをマスターして、英語の構造を完全理解しよう！',
    storageKey: 'summaryBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateSentencePatternQuiz(level, false),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'sentence patterns'),
    backLink: '#/category/sentence-patterns',
    topics: curriculum.find(c => c.id === 'sentence-patterns')?.topics || []
  });
};
