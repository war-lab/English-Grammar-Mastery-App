
import { generateQuiz as generateQuestionWordsQuiz } from '../../logic/curriculum/questionWords/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryQuestionWords = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ 疑問詞 完全攻略</h2>
        <p class="summary-intro">5W1Hから付加疑問・否定疑問まで、疑問文の全パターンをマスターしましょう。<br>疑問詞の使い分け、語順のルール、そして英語のYes/Noの罠を学びます。</p>
      </div>
      
      <div class="patterns-grid">
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">疑問詞 1</span>
            <h3>What / Which</h3>
          </div>
          <p class="pattern-desc"><strong>「何」「どれ」を尋ねる</strong><br>Whatは広い範囲で、Whichは限られた選択肢から尋ねます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">What do you like?</p>
              <p class="example-translation">何が好きですか？</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 主語を尋ねる場合は do/does 不要（What happened?）</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">疑問詞 2</span>
            <h3>Who / Whom / Whose</h3>
          </div>
          <p class="pattern-desc"><strong>「誰が・誰を・誰の」</strong><br>人に関する疑問詞。Whoが主語なら三人称単数扱い、do/does不要。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">Who loves him?</p>
              <p class="example-translation">誰が彼を愛しているの？</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 前置詞の直後は Whom（From whom ...?）</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">疑問詞 3</span>
            <h3>When / Where</h3>
          </div>
          <p class="pattern-desc"><strong>「いつ・どこ」</strong><br>前置詞＋名詞の塊を置き換えます。確定した予定は現在形で表します。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">When does the train leave?</p>
              <p class="example-translation">電車はいつ出発しますか？</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 時刻表・スケジュール → 未来でも現在形</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">疑問詞 4</span>
            <h3>Why / How</h3>
          </div>
          <p class="pattern-desc"><strong>「なぜ・どのように」</strong><br>Why → Because で回答。How は方法・程度を尋ねます。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">What do you think of him?</p>
              <p class="example-translation">彼のことをどう思いますか？（Howではない！）</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> Why don't you ~? = 提案（〜したら？）</p>
            </div>
          </div>
        </div>

        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">疑問詞 5</span>
            <h3>付加疑問・否定疑問</h3>
          </div>
          <p class="pattern-desc"><strong>「〜ですよね？」「〜じゃないの？」</strong><br>肯定文＋否定タグ / 否定文＋肯定タグ。Yes/Noは事実ベース。</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">You like dogs, don't you?</p>
              <p class="example-translation">犬が好きですよね？</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> Do you mind ~? → OKなら No（気にしない）</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '疑問詞 エキスパートチャレンジ',
    subtitle: '5W1H・付加疑問・否定疑問をマスターしよう！',
    storageKey: 'questionWordsBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateQuestionWordsQuiz(level),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'question words'),
    backLink: '#/',
    topics: curriculum.find(c => c.id === 'question-words')?.topics || []
  });
};
