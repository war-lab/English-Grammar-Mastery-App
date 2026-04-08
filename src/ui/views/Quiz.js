import { navigate } from '../navigation.js';
import { loadProgress, saveProgress } from '../../logic/storage.js';
import { curriculum } from '../../logic/curriculum.js';

export const Quiz = (topic) => {
  const container = document.createElement('div');
  container.className = 'quiz-shell';

  // トピック未選択時のフォールバック
  if (!topic || !topic.quiz) {
    const message = document.createElement('p');
    message.textContent = 'ダッシュボードからレッスンを選択してください。';
    message.style.textAlign = 'center';
    container.appendChild(message);

    const backBtn = document.createElement('button');
    backBtn.className = 'btn btn-primary';
    backBtn.textContent = 'レッスン選択に戻る';
    backBtn.style.marginTop = '2rem';
    backBtn.onclick = () => navigate('/dashboard');
    container.appendChild(backBtn);

    return container;
  }

  const title = document.createElement('h2');
  title.textContent = `クイズ: ${topic.title}`;
  title.className = 'quiz-title';

  // 問題と選択肢をランダム化
  const quizData = topic.quiz.map(q => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5)
  })).sort(() => Math.random() - 0.5);

  let currentQuestion = 0;
  let score = 0;
  let selectedAnswer = null;
  const wrongAnswers = [];

  // 合格ラインは80%（切り上げ）
  const passThreshold = Math.ceil(quizData.length * 0.8);

  /**
   * カテゴリページへ戻るナビゲーション
   */
  const navigateBackToCategory = () => {
    const category = curriculum.find(c => c.topics.some(t => t.id === topic.id));
    if (category) {
      navigate(`/category/${category.id}`);
    } else {
      navigate('/');
    }
  };

  const renderQuestion = () => {
    container.innerHTML = '';
    container.appendChild(title);

    if (currentQuestion >= quizData.length) {
      // クイズ完了 - 進捗を保存
      const progress = loadProgress();
      const passed = score >= passThreshold;

      if (passed && !progress.completedTopics.includes(topic.id)) {
        progress.completedTopics.push(topic.id);
      }

      progress.scores[topic.id] = score;
      saveProgress(progress);

      // 結果画面
      const result = document.createElement('div');
      result.className = 'quiz-result';

      const scoreText = document.createElement('div');
      scoreText.className = `quiz-result-score ${passed ? 'pass' : 'fail'}`;
      scoreText.textContent = `${score} / ${quizData.length}`;
      result.appendChild(scoreText);

      const badge = document.createElement('div');
      badge.className = `quiz-result-badge ${passed ? 'pass' : 'fail'}`;
      badge.textContent = passed ? '合格！おめでとう！' : `不合格（${passThreshold}問以上で合格）`;
      result.appendChild(badge);

      const actions = document.createElement('div');
      actions.className = 'quiz-result-actions';

      if (passed) {
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-primary';
        backBtn.textContent = 'レッスン一覧に戻る';
        backBtn.onclick = navigateBackToCategory;
        actions.appendChild(backBtn);
      } else {
        const retryBtn = document.createElement('button');
        retryBtn.className = 'btn btn-primary';
        retryBtn.textContent = 'もう一度挑戦';
        retryBtn.onclick = () => {
          navigate(`/quiz/${topic.id}`);
        };
        actions.appendChild(retryBtn);

        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-secondary';
        backBtn.textContent = 'レッスンに戻って復習';
        backBtn.onclick = navigateBackToCategory;
        actions.appendChild(backBtn);
      }

      result.appendChild(actions);

      // 不正解の問題一覧
      if (wrongAnswers.length > 0) {
        const wrongSection = document.createElement('div');
        wrongSection.className = 'wrong-answers-section';

        const wrongTitle = document.createElement('h3');
        wrongTitle.textContent = `間違えた問題（${wrongAnswers.length}問）`;
        wrongSection.appendChild(wrongTitle);

        wrongAnswers.forEach(wa => {
          const item = document.createElement('div');
          item.className = 'wrong-answer-item';

          const questionEl = document.createElement('div');
          questionEl.className = 'wa-question';
          questionEl.textContent = wa.question;
          item.appendChild(questionEl);

          const yourAnswer = document.createElement('div');
          yourAnswer.className = 'wa-your-answer';
          yourAnswer.textContent = `あなたの回答: ${wa.userAnswer}`;
          item.appendChild(yourAnswer);

          const correctAnswer = document.createElement('div');
          correctAnswer.className = 'wa-correct-answer';
          correctAnswer.textContent = `正解: ${wa.correctAnswer}`;
          item.appendChild(correctAnswer);

          if (wa.explanation) {
            const explanation = document.createElement('div');
            explanation.className = 'wa-explanation';
            explanation.textContent = wa.explanation;
            item.appendChild(explanation);
          }

          wrongSection.appendChild(item);
        });

        result.appendChild(wrongSection);
      }

      container.appendChild(result);
      return;
    }

    const q = quizData[currentQuestion];

    // 問題番号
    const questionNum = document.createElement('p');
    questionNum.className = 'quiz-meta';
    questionNum.textContent = `問題 ${currentQuestion + 1} / ${quizData.length}`;

    // 問題文
    const questionText = document.createElement('p');
    questionText.className = 'quiz-question-text';
    questionText.textContent = q.question;

    // 選択肢コンテナ
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'quiz-options';

    const radioName = `question-${currentQuestion}`;

    q.options.forEach((option, index) => {
      const label = document.createElement('label');
      label.className = 'quiz-option';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = radioName;
      radio.value = option;
      radio.id = `option-${index}`;
      radio.onchange = () => {
        selectedAnswer = option;
        // 選択状態のクラスを更新
        optionsContainer.querySelectorAll('.quiz-option').forEach(opt => {
          opt.classList.remove('is-selected');
        });
        label.classList.add('is-selected');
      };

      const span = document.createElement('span');
      span.textContent = option;

      label.appendChild(radio);
      label.appendChild(span);
      optionsContainer.appendChild(label);
    });

    // フィードバック
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';

    // 回答ボタン
    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-primary';
    submitBtn.textContent = 'この答えで決定';
    submitBtn.onclick = () => {
      if (!selectedAnswer) {
        feedback.textContent = '⚠️ 回答を選択してください';
        feedback.style.color = 'var(--color-error)';
        return;
      }

      const isCorrect = selectedAnswer === q.answer;
      if (isCorrect) {
        score++;
        feedback.textContent = '✅ 正解！';
        feedback.style.color = 'var(--color-success)';
      } else {
        wrongAnswers.push({
          question: q.question,
          userAnswer: selectedAnswer,
          correctAnswer: q.answer,
          explanation: q.explanation || ''
        });
        feedback.innerHTML = `❌ 不正解。正解は: <strong>${q.answer}</strong>`;
        feedback.style.color = 'var(--color-error)';
      }

      // 選択肢に正誤フィードバック
      const allOptions = optionsContainer.querySelectorAll('.quiz-option');
      allOptions.forEach(optLabel => {
        const radio = optLabel.querySelector('input');
        optLabel.classList.add('is-disabled');
        if (radio.value === q.answer) {
          optLabel.classList.add('is-correct');
        } else if (radio.value === selectedAnswer && !isCorrect) {
          optLabel.classList.add('is-wrong');
        }
      });

      // 解説を表示
      if (q.explanation) {
        const explanationBox = document.createElement('div');
        explanationBox.className = `quiz-explanation ${isCorrect ? 'quiz-explanation--correct' : 'quiz-explanation--incorrect'}`;

        let explanationHTML = '<strong>📝 解説:</strong><br>' + q.explanation;
        if (q.japaneseTranslation) {
          explanationHTML += '<br><br><strong>日本語訳:</strong> ' + q.japaneseTranslation;
        }

        explanationBox.innerHTML = explanationHTML;
        feedback.appendChild(explanationBox);
      }

      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.5';

      // 次の問題ボタン
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn btn-primary';
      nextBtn.textContent = currentQuestion < quizData.length - 1 ? '次の問題へ' : 'クイズを終了';
      nextBtn.style.marginLeft = '1rem';
      nextBtn.onclick = () => {
        selectedAnswer = null;
        currentQuestion++;
        renderQuestion();
      };

      submitBtn.parentElement.appendChild(nextBtn);
    };

    container.appendChild(questionNum);
    container.appendChild(questionText);
    container.appendChild(optionsContainer);
    container.appendChild(feedback);
    container.appendChild(submitBtn);
  };

  renderQuestion();

  return container;
};
