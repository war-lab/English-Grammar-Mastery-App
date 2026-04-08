import { navigate } from '../navigation.js';
import { loadProgress, saveProgress } from '../../logic/storage.js';
import { curriculum } from '../../logic/curriculum.js';

export const Quiz = (topic) => {
  const container = document.createElement('div');
  container.className = 'glass';
  container.style.padding = '2rem';
  container.style.maxWidth = '700px';
  container.style.margin = '0 auto';

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
  title.className = 'title';
  title.style.marginBottom = '2rem';

  // 問題と選択肢をランダム化（元データを変更しないようディープコピー）
  const quizData = topic.quiz.map(q => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5)
  })).sort(() => Math.random() - 0.5);

  let currentQuestion = 0;
  let score = 0;
  let selectedAnswer = null;
  // 不正解の問題を記録する配列
  const wrongAnswers = [];

  // 合格ラインは80%（切り上げ）
  const passThreshold = Math.ceil(quizData.length * 0.8);

  /**
   * カテゴリページへ戻るナビゲーション（動的にカリキュラムから検索）
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
    // コンテナをクリアしてタイトルを再追加
    container.innerHTML = '';
    container.appendChild(title);

    if (currentQuestion >= quizData.length) {
      // クイズ完了 - 進捗を保存
      const progress = loadProgress();
      const passed = score >= passThreshold;

      // 合格時のみ完了トピックに追加（未登録の場合）
      if (passed && !progress.completedTopics.includes(topic.id)) {
        progress.completedTopics.push(topic.id);
      }

      // スコアを保存
      progress.scores[topic.id] = score;
      saveProgress(progress);

      // 結果画面の構築
      const result = document.createElement('div');
      result.className = 'quiz-result';

      // スコア表示
      const scoreText = document.createElement('div');
      scoreText.className = `quiz-result-score ${passed ? 'pass' : 'fail'}`;
      scoreText.textContent = `${score} / ${quizData.length}`;
      result.appendChild(scoreText);

      // 合格・不合格バッジ
      const badge = document.createElement('div');
      badge.className = `quiz-result-badge ${passed ? 'pass' : 'fail'}`;
      badge.textContent = passed ? '合格！おめでとう！' : `不合格（${passThreshold}問以上で合格）`;
      result.appendChild(badge);

      // アクションボタン群
      const actions = document.createElement('div');
      actions.className = 'quiz-result-actions';

      if (passed) {
        // 合格時：カテゴリに戻るボタンのみ
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-primary';
        backBtn.textContent = 'レッスン一覧に戻る';
        backBtn.onclick = navigateBackToCategory;
        actions.appendChild(backBtn);
      } else {
        // 不合格時：再挑戦ボタンとレッスンに戻るボタン
        const retryBtn = document.createElement('button');
        retryBtn.className = 'btn btn-primary';
        retryBtn.textContent = 'もう一度挑戦';
        retryBtn.onclick = () => {
          // クイズを再読み込み
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

      // 不正解の問題一覧を表示
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

    const questionNum = document.createElement('p');
    questionNum.textContent = `問題 ${currentQuestion + 1} / ${quizData.length}`;
    questionNum.style.color = 'var(--text-muted)';
    questionNum.style.marginBottom = '1rem';

    const questionText = document.createElement('p');
    questionText.textContent = q.question;
    questionText.style.fontSize = '1.3rem';
    questionText.style.marginBottom = '2rem';
    questionText.style.fontWeight = '600';

    const optionsContainer = document.createElement('div');
    optionsContainer.style.marginBottom = '2rem';

    const radioName = `question-${currentQuestion}`;

    q.options.forEach((option, index) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      label.style.padding = '1rem';
      label.style.marginBottom = '0.75rem';
      label.style.backgroundColor = 'var(--surface)';
      label.style.borderRadius = '0.5rem';
      label.style.cursor = 'pointer';
      label.style.transition = 'all 0.2s';
      label.style.border = '2px solid transparent';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = radioName;
      radio.value = option;
      radio.id = `option-${index}`;
      radio.style.marginRight = '0.75rem';
      radio.onchange = () => {
        selectedAnswer = option;
        // 選択中のラベルスタイルを更新
        document.querySelectorAll(`input[name="${radioName}"]`).forEach(r => {
          r.parentElement.style.border = '2px solid transparent';
          r.parentElement.style.backgroundColor = 'var(--surface)';
        });
        label.style.border = '2px solid var(--primary)';
        label.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
      };

      const span = document.createElement('span');
      span.textContent = option;
      span.style.fontSize = '1.1rem';

      label.appendChild(radio);
      label.appendChild(span);
      optionsContainer.appendChild(label);
    });

    const feedback = document.createElement('div');
    feedback.id = 'feedback';
    feedback.style.minHeight = '2rem';
    feedback.style.marginBottom = '1rem';

    const submitBtn = document.createElement('button');
    submitBtn.className = 'btn btn-primary';
    submitBtn.textContent = '回答する';
    submitBtn.onclick = () => {
      if (!selectedAnswer) {
        feedback.textContent = '⚠️ 回答を選択してください';
        feedback.style.color = 'var(--error)';
        return;
      }

      const isCorrect = selectedAnswer === q.answer;
      if (isCorrect) {
        score++;
        feedback.innerHTML = '✅ Correct!';
        feedback.style.color = 'var(--success)';
      } else {
        // 不正解の問題を記録
        wrongAnswers.push({
          question: q.question,
          userAnswer: selectedAnswer,
          correctAnswer: q.answer,
          explanation: q.explanation || ''
        });
        feedback.innerHTML = `❌ Incorrect. The correct answer is: <strong>${q.answer}</strong>`;
        feedback.style.color = 'var(--error)';
      }

      // 選択肢に正誤のビジュアルフィードバックを付与
      const allLabels = optionsContainer.querySelectorAll('label');
      allLabels.forEach(label => {
        const radio = label.querySelector('input');
        label.classList.add('option-disabled');
        if (radio.value === q.answer) {
          label.classList.add('option-correct');
        } else if (radio.value === selectedAnswer && !isCorrect) {
          label.classList.add('option-incorrect');
        }
      });

      // 解説を表示（正解・不正解共通）
      if (q.explanation) {
        const explanationBox = document.createElement('div');
        explanationBox.style.marginTop = '1rem';
        explanationBox.style.padding = '1rem';
        explanationBox.style.backgroundColor = isCorrect
          ? 'rgba(34, 197, 94, 0.1)'
          : 'rgba(239, 68, 68, 0.1)';
        explanationBox.style.borderLeft = `4px solid ${isCorrect ? 'var(--success)' : 'var(--error)'}`;
        explanationBox.style.borderRadius = '0.5rem';
        explanationBox.style.fontSize = '0.95rem';
        explanationBox.style.lineHeight = '1.6';
        explanationBox.style.maxWidth = '100%';
        explanationBox.style.wordBreak = 'break-word';
        explanationBox.style.whiteSpace = 'normal';

        let explanationHTML = '<strong>📝 解説:</strong><br>' + q.explanation;

        // 日本語訳があれば追加
        if (q.japaneseTranslation) {
          explanationHTML += '<br><br><strong>日本語訳:</strong> ' + q.japaneseTranslation;
        }

        explanationBox.innerHTML = explanationHTML;
        feedback.appendChild(explanationBox);
      }

      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.5';

      // 次の問題へ進むボタンを表示
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
