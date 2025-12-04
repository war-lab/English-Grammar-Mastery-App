

import { generateSentencePatternQuiz } from '../../logic/quizGenerator.js';
import { createPatternDiagram } from '../components/patternDiagrams.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';

export const Summary5Patterns = () => {
  const renderExplanationContent = () => {
    return `
      <h2 style="text-align: center; margin-bottom: 2rem; color: var(--secondary);">📚 5つの文型の完全解説</h2>
      
      <div class="pattern-explanation-card">
        <h3>第1文型 (SV) - Subject + Verb</h3>
        <p class="pattern-desc">主語と動詞だけで完結する最もシンプルな文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SV')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 動詞は自動詞（目的語を必要としない）</p>
          <p><strong>よく使う動詞：</strong> run, walk, sleep, smile, exist, happen</p>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第2文型 (SVC) - Subject + Verb + Complement</h3>
        <p class="pattern-desc">主語と補語がイコール関係（S = C）になる文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVC')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 主語の状態や性質を説明する</p>
          <p><strong>よく使う動詞：</strong> be, become, look, seem, feel, taste, smell</p>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第3文型 (SVO) - Subject + Verb + Object</h3>
        <p class="pattern-desc">主語が目的語に対して動作を行う文型です（S ≠ O）。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVO')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 動詞は他動詞（目的語を必要とする）</p>
          <p><strong>よく使う動詞：</strong> have, make, buy, eat, drink, watch, study</p>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第4文型 (SVOO) - Subject + Verb + Object + Object</h3>
        <p class="pattern-desc">「誰かに何かを〜する」という授与を表す文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVOO')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong>目的語が2つ（間接目的語 + 直接目的語）</p>
          <p><strong>よく使う動詞：</strong> give, show, teach, tell, buy, make, send</p>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第5文型 (SVOC) - Subject + Verb + Object + Complement</h3>
        <p class="pattern-desc">目的語と補語がイコール関係（O = C）になる文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVOC')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 目的語の状態や名前を説明する</p>
          <p><strong>よく使う動詞：</strong> call, name, make, keep, find, leave</p>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '5つの文型マスター (5 Sentence Patterns Master)',
    subtitle: '英語の基本5文型を完全マスターしよう！',
    storageKey: 'summaryBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateSentencePatternQuiz(level, false),
    aiPromptContext: 'English sentence patterns (SV, SVC, SVO, SVOO, SVOC)',
    backLink: '#/'
  });
};
