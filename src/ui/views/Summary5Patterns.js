

import { generateSentencePatternQuiz } from '../../logic/curriculum/sentencePatterns/quizGenerator.js';
import { createPatternDiagram } from '../components/patternDiagrams.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const Summary5Patterns = () => {
  const renderExplanationContent = () => {
    return `
      <h2 class="section-title">📚 5つの文型の完全解説</h2>
      
      <div class="pattern-explanation-card">
        <h3>第1文型 (SV) - Subject + Verb</h3>
        <p class="pattern-desc">主語と動詞だけで完結する最もシンプルな文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SV')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 動詞は自動詞（目的語を必要としない）。修飾語（M）がつくことが多いです。</p>
          <div class="example-box">
            <p class="example-sentence">Birds fly.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> Birds <span class="tag v-tag">V</span> fly</p>
            <p class="example-translation">鳥は飛ぶ。</p>
          </div>
          <div class="example-box">
            <p class="example-sentence">He runs fast.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V</span> runs <span class="tag m-tag">(M)</span> fast</p>
            <p class="example-translation">彼は速く走る。（fastは副詞で修飾語）</p>
          </div>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第2文型 (SVC) - Subject + Verb + Complement</h3>
        <p class="pattern-desc">主語と補語がイコール関係（S = C）になる文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVC')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 主語の状態や性質を説明します。</p>
          <div class="example-box">
            <p class="example-sentence">I am happy.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> am <span class="tag c-tag">C</span> happy</p>
            <p class="example-translation">私は幸せです。（I = happy）</p>
          </div>
          <div class="example-box">
            <p class="example-sentence">She looks tired.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> looks <span class="tag c-tag">C</span> tired</p>
            <p class="example-translation">彼女は疲れているように見える。（She = tired）</p>
          </div>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第3文型 (SVO) - Subject + Verb + Object</h3>
        <p class="pattern-desc">主語が目的語に対して動作を行う文型です（S ≠ O）。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVO')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 動詞は他動詞（目的語を必要とする）。</p>
          <div class="example-box">
            <p class="example-sentence">I play tennis.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> I <span class="tag v-tag">V</span> play <span class="tag o-tag">O</span> tennis</p>
            <p class="example-translation">私はテニスをします。（I ≠ tennis）</p>
          </div>
          <div class="example-box">
            <p class="example-sentence">He bought a book.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V</span> bought <span class="tag o-tag">O</span> a book</p>
            <p class="example-translation">彼は本を買った。</p>
          </div>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第4文型 (SVOO) - Subject + Verb + Object + Object</h3>
        <p class="pattern-desc">「誰かに何かを〜する」という授与を表す文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVOO')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 目的語が2つ（間接目的語 + 直接目的語）。</p>
          <div class="example-box">
            <p class="example-sentence">He gave me a present.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> He <span class="tag v-tag">V</span> gave <span class="tag o-tag">O1</span> me <span class="tag o-tag">O2</span> a present</p>
            <p class="example-translation">彼は私にプレゼントをくれた。</p>
          </div>
          <div class="example-box">
            <p class="example-sentence">She showed us the photo.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> She <span class="tag v-tag">V</span> showed <span class="tag o-tag">O1</span> us <span class="tag o-tag">O2</span> the photo</p>
            <p class="example-translation">彼女は私たちにその写真を見せた。</p>
          </div>
        </div>
      </div>

      <div class="pattern-explanation-card">
        <h3>第5文型 (SVOC) - Subject + Verb + Object + Complement</h3>
        <p class="pattern-desc">目的語と補語がイコール関係（O = C）になる文型です。</p>
        <div class="svg-diagram-container">
          ${createPatternDiagram('SVOC')}
        </div>
        <div class="pattern-notes">
          <p><strong>特徴：</strong> 目的語の状態や名前を説明します。</p>
          <div class="example-box">
            <p class="example-sentence">We call him Tom.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> We <span class="tag v-tag">V</span> call <span class="tag o-tag">O</span> him <span class="tag c-tag">C</span> Tom</p>
            <p class="example-translation">私たちは彼をトムと呼ぶ。（him = Tom）</p>
          </div>
          <div class="example-box">
            <p class="example-sentence">The news made me happy.</p>
            <p class="example-breakdown"><span class="tag s-tag">S</span> The news <span class="tag v-tag">V</span> made <span class="tag o-tag">O</span> me <span class="tag c-tag">C</span> happy</p>
            <p class="example-translation">その知らせは私を幸せにした。（me = happy）</p>
          </div>
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
    backLink: '#/',
    topics: curriculum.find(c => c.id === 'sentence-patterns')?.topics || []
  });
};
