
import { getCategoryProgress } from '../../logic/storage.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { createResultModal } from './ResultModal.js';

/**
 * Reusable template for learning pages (e.g., 5 Sentence Patterns, Parts of Speech).
 * @param {Object} config - Configuration object.
 * @param {string} config.title - Page title.
 * @param {string} config.subtitle - Page subtitle.
 * @param {string} config.storageKey - LocalStorage key for best streak.
 * @param {Function} config.renderExplanationContent - Function returning HTML string for the explanation section.
 * @param {Function} config.generateQuiz - Function(level) returning a quiz object { question, options, answer, explanation, japaneseTranslation }.
 * @param {string} config.aiPromptContext - Context string for AI question generation (e.g., "English sentence patterns").
 * @param {string} config.backLink - Path to go back to (default: #/dashboard).
 * @param {Array} config.topics - List of topics to check for completion (optional).
 */
export const LearningPageTemplate = (config) => {
  const container = document.createElement('div');
  container.className = 'summary-container glass';
  container.style.padding = '2rem';
  container.style.maxWidth = '1000px';
  container.style.margin = '2rem auto';

  // State
  let viewState = 'explanation';
  let streak = 0;
  let bestStreak = parseInt(localStorage.getItem(config.storageKey) || '0', 10);
  let level = 1;
  let isAIMode = false;
  let currentQuiz = null;
  let aiUnavailable = false;

  const render = () => {
    container.innerHTML = '';

    if (viewState === 'explanation') {
      renderExplanation();
    } else if (viewState === 'quiz') {
      renderQuiz();
    } else if (viewState === 'celebration') {
      renderCelebration();
    }
  };

  const renderExplanation = () => {
    const header = document.createElement('header');
    header.innerHTML = `
      <div style="text-align: center; width: 100%;">
        <h1 class="fancy-title">${config.title}</h1>
        <p class="fancy-subtitle">${config.subtitle}</p>
      </div>
      </div>
      <a href="${config.backLink || '#/dashboard'}" class="back-link btn" style="position: absolute; left: 0; top: 0; display: flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.9rem; color: var(--text-muted); text-decoration: none; transition: all 0.2s;">
        <span style="font-size: 1.2rem;">←</span> 戻る
      </a>
    `;
    header.style.position = 'relative';
    header.style.marginBottom = '3rem';
    container.appendChild(header);

    const statsDiv = document.createElement('div');
    statsDiv.style.textAlign = 'center';
    statsDiv.style.marginBottom = '2rem';
    statsDiv.innerHTML = `
      <h2 style="color: var(--primary);">🏆 最高記録: <span id="best-streak">${bestStreak}</span>問連続正解</h2>
    `;
    container.appendChild(statsDiv);

    const explanationSection = document.createElement('section');
    explanationSection.className = 'enhanced-explanations';
    explanationSection.innerHTML = config.renderExplanationContent();
    container.appendChild(explanationSection);

    // Check progress if topics are provided
    let isLocked = false;
    let remainingLessons = 0;

    if (config.topics) {
      const progress = getCategoryProgress(config.topics);
      isLocked = !progress.allCompleted;
      remainingLessons = progress.remaining;
    }

    // Challenge Buttons or Lock Message
    const actionsDiv = document.createElement('div');
    actionsDiv.style.textAlign = 'center';
    actionsDiv.style.marginTop = '3rem';
    actionsDiv.style.display = 'flex';
    actionsDiv.style.justifyContent = 'center';
    actionsDiv.style.gap = '1.5rem';
    actionsDiv.style.flexWrap = 'wrap';

    if (isLocked) {
      actionsDiv.innerHTML = `
        <div style="background: rgba(255, 255, 255, 0.05); padding: 2rem; border-radius: 1rem; text-align: center; border: 1px solid rgba(255, 255, 255, 0.1); width: 100%; max-width: 600px;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
          <h3 style="color: var(--text-muted); margin-bottom: 1rem;">エキスパートチャレンジはロックされています</h3>
          <p style="font-size: 1.1rem;">レッスンを全てクリアして挑戦権を獲得しよう！</p>
          <p style="margin-top: 1rem; color: var(--secondary); font-weight: bold;">残り ${remainingLessons} レッスン</p>
        </div>
      `;
    } else {
      const normalBtn = document.createElement('button');
      normalBtn.className = 'btn btn-primary';
      normalBtn.innerHTML = '📝 通常チャレンジ<br><span style="font-size: 0.8em;">レベル1から挑戦</span>';
      normalBtn.style.fontSize = '1.2rem';
      normalBtn.style.padding = '1.5rem 2.5rem';
      normalBtn.style.minWidth = '200px';
      normalBtn.onclick = () => {
        viewState = 'quiz';
        streak = 0;
        level = 1;
        isAIMode = false;
        render();
      };

      const aiBtn = document.createElement('button');
      aiBtn.className = 'btn btn-ai';
      if (aiUnavailable) {
        aiBtn.innerHTML = '🤖 AIチャレンジ<br><span style="font-size: 0.8em;">現在使用できません</span>';
        aiBtn.style.opacity = '0.5';
        aiBtn.style.cursor = 'not-allowed';
        aiBtn.disabled = true;
      } else {
        aiBtn.innerHTML = '🤖 AIチャレンジ<br><span style="font-size: 0.8em;">AIが問題生成！</span>';
      }
      aiBtn.style.fontSize = '1.2rem';
      aiBtn.style.padding = '1.5rem 2.5rem';
      aiBtn.style.minWidth = '200px';
      aiBtn.style.background = 'linear-gradient(135deg, #00ff00, #00aa00)';
      aiBtn.style.border = '2px solid #00ff00';
      aiBtn.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.3)';
      aiBtn.onclick = () => {
        if (!aiUnavailable) {
          viewState = 'quiz';
          streak = 0;
          level = 1;
          isAIMode = true;
          render();
        }
      };

      actionsDiv.appendChild(normalBtn);
      actionsDiv.appendChild(aiBtn);
    }

    container.appendChild(actionsDiv);

    // Reset Button
    const resetDiv = document.createElement('div');
    resetDiv.style.textAlign = 'center';
    resetDiv.style.marginTop = '4rem';
    resetDiv.style.paddingTop = '2rem';
    resetDiv.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';

    const resetBtn = document.createElement('button');
    resetBtn.className = 'btn';
    resetBtn.textContent = '🗑️ 記録をリセット';
    resetBtn.style.backgroundColor = '#333';
    resetBtn.style.fontSize = '0.9rem';
    resetBtn.onclick = () => {
      if (confirm('本当に記録をリセットしますか？')) {
        bestStreak = 0;
        localStorage.setItem(config.storageKey, '0');
        alert('記録がリセットされました！');
        render();
      }
    };

    resetDiv.appendChild(resetBtn);
    container.appendChild(resetDiv);
  };

  const renderQuiz = () => {
    level = Math.min(10, Math.floor(streak / 3) + 1);

    let tierClass = 'tier-1';
    if (streak < 10) tierClass = 'tier-1';
    else if (streak < 20) tierClass = 'tier-2';
    else if (streak < 30) tierClass = 'tier-3';
    else tierClass = 'tier-4';

    if (isAIMode) tierClass = 'tier-ai';

    container.className = `summary-container glass ${tierClass}`;

    const quizSection = document.createElement('section');
    quizSection.className = 'quiz-section';

    const quizHeader = document.createElement('div');
    quizHeader.className = 'quiz-header';
    quizHeader.style.display = 'flex';
    quizHeader.style.justifyContent = 'space-between';
    quizHeader.style.alignItems = 'center';
    quizHeader.style.marginBottom = '2rem';

    const modeText = isAIMode
      ? '<span style="color: #00ff00; text-shadow: 0 0 10px #00ff00; font-size: 1.3rem;">🤖 AI MODE</span>'
      : `<span style="font-size: 1.3rem;">📝 Level ${level}/10</span>`;

    quizHeader.innerHTML = `
      <div class="level-display">${modeText}</div>
      <div class="streak-display">連続正解: <span style="color: var(--primary); font-size: 1.5em;">${streak}</span></div>
    `;
    quizSection.appendChild(quizHeader);

    const questionArea = document.createElement('div');
    questionArea.className = 'question-area';

    // AI Loading or Error
    if (isAIMode && !currentQuiz) {
      questionArea.innerHTML = `
        <div style="text-align: center; padding: 4rem;">
          <div class="ai-loader">🤖 AIが問題を生成中...</div>
          <p style="color: #00ff00; margin-top: 1rem; font-family: monospace;">Gemini AI による問題生成</p>
        </div>
       `;
      quizSection.appendChild(questionArea);
      container.appendChild(quizSection);

      setTimeout(async () => {
        try {
          currentQuiz = await generateAIQuestion(level, config.aiPromptContext);
          render();
        } catch (error) {
          console.error('AI generation failed:', error);
          if (error.message === 'API_KEY_NOT_CONFIGURED') {
            aiUnavailable = true;
            alert('AIモードは現在使用できません。\nAPIキーが設定されていません。');
          } else {
            alert('AIモードでエラーが発生しました。\n通常モードに切り替えます。');
          }
          isAIMode = false;
          viewState = 'explanation';
          render();
        }
      }, 2000);
      return;
    }

    // Generate Quiz
    if (!currentQuiz) {
      if (isAIMode) {
        return;
      } else {
        currentQuiz = config.generateQuiz(level);
      }
    }

    // Radio Button UI
    const optionsHtml = currentQuiz.options.map((opt, index) => `
      <div class="quiz-radio-option">
        <input type="radio" id="opt-${index}" name="quiz-answer" value="${opt}">
        <label for="opt-${index}" class="quiz-radio-label">${opt}</label>
      </div>
    `).join('');

    questionArea.innerHTML = `
      <div class="quiz-question" style="white-space: pre-wrap; font-size: 1.1rem; line-height: 1.8;">${currentQuiz.question}</div>
      <div class="quiz-radio-group">
        ${optionsHtml}
      </div>
      <button id="submit-answer" class="btn btn-primary" disabled style="margin-top: 1.5rem; width: 100%; font-size: 1.1rem;">✓ 回答する</button>
    `;
    quizSection.appendChild(questionArea);

    const feedbackArea = document.createElement('div');
    feedbackArea.className = 'feedback-area';
    quizSection.appendChild(feedbackArea);

    const submitBtn = questionArea.querySelector('#submit-answer');
    const radioInputs = questionArea.querySelectorAll('input[name="quiz-answer"]');

    radioInputs.forEach(input => {
      input.addEventListener('change', () => {
        submitBtn.disabled = false;
      });
    });

    submitBtn.addEventListener('click', () => {
      const selected = questionArea.querySelector('input[name="quiz-answer"]:checked').value;
      handleAnswer(selected, feedbackArea, submitBtn);
    });

    container.appendChild(quizSection);
  };

  const handleAnswer = (selected, feedbackEl, submitBtn) => {
    const isCorrect = selected === currentQuiz.answer;
    submitBtn.disabled = true;

    if (isCorrect) {
      streak++;
      if (streak > bestStreak) {
        bestStreak = streak;
        localStorage.setItem(config.storageKey, bestStreak.toString());
      }

      feedbackEl.innerHTML = '<div style="font-size: 1.2rem; margin-bottom: 1rem;">✓ 正解！</div>';
      feedbackEl.className = 'feedback-area correct';

      // Add explanation for correct answer
      if (currentQuiz.explanation) {
        const explanationBox = document.createElement('div');
        explanationBox.style.marginTop = '1rem';
        explanationBox.style.padding = '1rem';
        explanationBox.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
        explanationBox.style.borderLeft = '4px solid var(--success)';
        explanationBox.style.borderRadius = '0.5rem';
        explanationBox.style.fontSize = '0.95rem';
        explanationBox.style.lineHeight = '1.6';

        let explanationHTML = '<strong>📝 解説:</strong><br>' + currentQuiz.explanation;

        if (currentQuiz.japaneseTranslation) {
          explanationHTML += '<br><br><strong>💬 日本語訳:</strong> ' + currentQuiz.japaneseTranslation;
        }

        explanationBox.innerHTML = explanationHTML;
        feedbackEl.appendChild(explanationBox);
      }

      if (streak % 3 === 0 && streak <= 27) {
        const levelUpMsg = document.createElement('div');
        levelUpMsg.textContent = '🎉 LEVEL UP!';
        levelUpMsg.style.marginTop = '0.5rem';
        levelUpMsg.style.fontSize = '1.1rem';
        feedbackEl.insertBefore(levelUpMsg, feedbackEl.firstChild);
      }

      if (streak >= 100) {
        setTimeout(() => {
          viewState = 'celebration';
          render();
        }, 1000);
        return;
      }

      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn btn-primary';
      nextBtn.textContent = '次へ進む →';
      nextBtn.style.marginTop = '1.5rem';
      nextBtn.style.fontSize = '1.1rem';
      nextBtn.style.padding = '1rem 2rem';
      nextBtn.style.width = '100%';
      nextBtn.style.maxWidth = '400px';
      nextBtn.onclick = () => {
        currentQuiz = null;
        render();
      };
      feedbackEl.appendChild(nextBtn);

    } else {
      feedbackEl.innerHTML = `<div style="font-size: 1.2rem; margin-bottom: 1rem;">✗ 不正解... 正解は「${currentQuiz.answer}」でした。</div>`;
      feedbackEl.className = 'feedback-area wrong';

      if (currentQuiz.explanation) {
        const explanationBox = document.createElement('div');
        explanationBox.style.marginTop = '1rem';
        explanationBox.style.padding = '1rem';
        explanationBox.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        explanationBox.style.borderLeft = '4px solid var(--error)';
        explanationBox.style.borderRadius = '0.5rem';
        explanationBox.style.fontSize = '0.95rem';
        explanationBox.style.lineHeight = '1.6';

        let explanationHTML = '<strong>📝 解説:</strong><br>' + currentQuiz.explanation;

        if (currentQuiz.japaneseTranslation) {
          explanationHTML += '<br><br><strong>💬 日本語訳:</strong> ' + currentQuiz.japaneseTranslation;
        }

        explanationBox.innerHTML = explanationHTML;
        feedbackEl.appendChild(explanationBox);
      }

      setTimeout(() => {
        const modal = createResultModal(streak, () => {
          document.body.removeChild(modal);
          viewState = 'explanation';
          container.className = 'summary-container glass';
          render();
        });
        document.body.appendChild(modal);
      }, 2000);
    }
  };

  const renderCelebration = () => {
    container.className = 'summary-container glass tier-4';
    const celebrationDiv = document.createElement('div');
    celebrationDiv.className = 'celebration-content';
    celebrationDiv.style.padding = '4rem';
    celebrationDiv.style.textAlign = 'center';

    celebrationDiv.innerHTML = `
      <h1>🎊 おめでとうございます！ 🎊</h1>
      <p style="font-size: 1.5rem; margin: 2rem 0;">100問連続正解を達成しました！</p>
      <p style="font-size: 1.2rem;">あなたは真の文型マスターです！</p>
      <div style="font-size: 5rem; margin: 2rem;">🏆</div>
    `;

    const backBtn = document.createElement('button');
    backBtn.textContent = '解説ページに戻る';
    backBtn.style.fontSize = '1.5rem';
    backBtn.style.padding = '1rem 3rem';
    backBtn.style.borderRadius = '50px';
    backBtn.style.border = 'none';
    backBtn.style.background = 'white';
    backBtn.style.color = 'black';
    backBtn.style.fontWeight = 'bold';
    backBtn.style.cursor = 'pointer';
    backBtn.style.marginTop = '2rem';

    backBtn.onclick = () => {
      viewState = 'explanation';
      container.className = 'summary-container glass';
      render();
    };

    celebrationDiv.appendChild(backBtn);
    container.appendChild(celebrationDiv);
  };

  render();
  return container;
};
