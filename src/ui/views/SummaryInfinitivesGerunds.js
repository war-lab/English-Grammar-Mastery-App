// to不定詞と動名詞 (Infinitives & Gerunds) エキスパートチャレンジ画面
import { generateQuiz as generateInfinitivesGerundQuiz } from '../../logic/curriculum/infinitivesGerunds/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryInfinitivesGerunds = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ to不定詞と動名詞 完全攻略</h2>
        <p class="summary-intro">準動詞の2大テクニック、to不定詞と動名詞を完全にマスターしましょう。<br>3つの用法・動名詞の特権・使い分けの語法まで、すべてを学びます。</p>
      </div>

      <div class="patterns-grid">
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 1</span>
            <h3>名詞的用法 (〜すること)</h3>
          </div>
          <p class="pattern-desc"><strong>主語・目的語・補語として働く</strong><br>仮主語Itの構文や意味上の主語forも重要なポイントです。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">It is fun to learn English.</p>
              <p class="example-translation">英語を学ぶことは楽しい。（仮主語It）</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> want, decide, hope は to不定詞を目的語に取る</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 2</span>
            <h3>形容詞的用法 (〜するための)</h3>
          </div>
          <p class="pattern-desc"><strong>名詞を後ろから修飾する</strong><br>抽象名詞＋to不定詞パターンはTOEICでも頻出です。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I have a lot of homework to do.</p>
              <p class="example-translation">やるべき宿題がたくさんある。</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> something cold to drink の語順に注意！</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 3</span>
            <h3>副詞的用法 (〜するために)</h3>
          </div>
          <p class="pattern-desc"><strong>目的・感情の原因・結果を表す</strong><br>toの「方向（→）」イメージで統一的に理解できます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I am happy to see you.</p>
              <p class="example-translation">あなたに会えてうれしい。（感情の原因）</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> in order to / so as to で書き換え可能（目的）</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 4</span>
            <h3>動名詞 (〜ing)</h3>
          </div>
          <p class="pattern-desc"><strong>主語・目的語・補語・前置詞の後</strong><br>前置詞の後に置けるのは動名詞だけの「特権」です。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">I'm good at playing tennis.</p>
              <p class="example-translation">テニスが得意だ。（前置詞の後 → 動名詞）</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> enjoy, finish, give up, practice は動名詞のみ</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">用法 5</span>
            <h3>使い分けの語法</h3>
          </div>
          <p class="pattern-desc"><strong>remember / forget / try / stop</strong><br>to不定詞と動名詞で意味が変わる超重要動詞を攻略。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">remember to do（これから）vs doing（過去）</p>
              <p class="example-translation">stop to do（するために止まる）vs doing（やめる）</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> イメージに頼りすぎず、語法で暗記が最強！</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: 'to不定詞と動名詞 エキスパートチャレンジ',
    subtitle: '準動詞の2大テクニックを完全マスターしよう！',
    storageKey: 'infinitivesGerundsBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateInfinitivesGerundQuiz(level),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'infinitive gerund'),
    backLink: '#/',
    topics: curriculum.find(c => c.id === 'infinitives-gerunds')?.topics || []
  });
};
