// 分詞 (Participles) エキスパートチャレンジ画面
import { generateQuiz as generateParticiplesQuiz } from '../../logic/curriculum/participles/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryParticiples = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ 分詞 完全攻略</h2>
        <p class="summary-intro">動詞を形容詞・副詞に変身させる分詞のテクニックを完全マスターしましょう。<br>現在分詞・過去分詞・感情動詞・分詞構文・知覚/使役動詞まで、すべてを学びます。</p>
      </div>

      <div class="patterns-grid">
        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 1</span>
            <h3>現在分詞の形容詞的用法</h3>
          </div>
          <p class="pattern-desc"><strong>~ing で名詞を修飾</strong><br>「〜している」「〜させる」という能動的・進行中の意味を名詞に加えます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">The boy running in the park is my brother.</p>
              <p class="example-translation">公園で走っている少年は私の兄です。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 1語→前置修飾、2語以上→後置修飾</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 2</span>
            <h3>過去分詞の形容詞的用法</h3>
          </div>
          <p class="pattern-desc"><strong>~ed/不規則で名詞を修飾</strong><br>「〜された」「〜された状態の」という受動的・完了の意味を名詞に加えます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">The language spoken in Brazil is Portuguese.</p>
              <p class="example-translation">ブラジルで話されている言語はポルトガル語です。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 名詞が「する側」→~ing、「される側」→過去分詞</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 3</span>
            <h3>感情動詞の分詞</h3>
          </div>
          <p class="pattern-desc"><strong>interesting vs interested の使い分け</strong><br>~ingは「〜させる（原因側）」、~edは「〜している（感じる人側）」。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">The movie is exciting. / I am excited.</p>
              <p class="example-translation">映画はワクワクする。/ 私はワクワクしている。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 人に~ingを使うミスに要注意！</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 4</span>
            <h3>分詞構文</h3>
          </div>
          <p class="pattern-desc"><strong>接続詞＋主語を省略して副詞句を作る</strong><br>時・理由・条件・付帯状況の4つの意味を表せます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">Walking along the street, I met an old friend.</p>
              <p class="example-translation">通りを歩いていた時、旧友に会った。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 否定は Not + ~ing、受動は (Being) + 過去分詞</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card challenge-glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 5</span>
            <h3>知覚動詞・使役動詞と分詞</h3>
          </div>
          <p class="pattern-desc"><strong>see/hear + O + ~ing、have + O + 過去分詞</strong><br>「〜しているのを見る」「〜してもらう」の重要構文。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I had my hair cut. / I saw him running.</p>
              <p class="example-translation">髪を切ってもらった。/ 彼が走っているのを見た。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> have + O + 過去分詞は「使役」と「被害」の2つの意味</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '分詞 エキスパートチャレンジ',
    subtitle: '動詞を変身させる分詞のテクニックを完全マスターしよう！',
    storageKey: 'participlesBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateParticiplesQuiz(level),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'participle'),
    backLink: '#/',
    topics: curriculum.find(c => c.id === 'participles')?.topics || []
  });
};
