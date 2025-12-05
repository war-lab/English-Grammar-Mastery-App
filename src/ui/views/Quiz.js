import { navigate } from '../navigation.js';
import { loadProgress, saveProgress } from '../../logic/storage.js';

export const Quiz = (topic) => {
  const container = document.createElement('div');
  container.className = 'glass';
  container.style.padding = '2rem';
  container.style.maxWidth = '700px';
  container.style.margin = '0 auto';

  // Fallback for direct access
  if (!topic || !topic.quiz) {
    const message = document.createElement('p');
    message.textContent = 'ダッシュボードからレッスンを選択してください。';
    message.style.textAlign = 'center';
    container.appendChild(message);

    const backBtn = document.createElement('button');
    backBtn.className = 'btn btn-primary';
    backBtn.textContent = 'レッスン選択に戻る';
    backBtn.style.marginTop = '2rem';
    backBtn.onclick = () => navigate('/dashboard'); // Fallback to dashboard if no topic
    container.appendChild(backBtn);
    container.appendChild(backBtn);

    return container;
  }

  const title = document.createElement('h2');
  title.textContent = `クイズ: ${topic.title}`;
  title.className = 'title';
  title.style.marginBottom = '2rem';

  // Randomize questions and options
  // Create a deep copy to avoid modifying the original curriculum
  const quizData = topic.quiz.map(q => ({
    ...q,
    options: [...q.options].sort(() => Math.random() - 0.5)
  })).sort(() => Math.random() - 0.5);

  let currentQuestion = 0;
  let score = 0;
  let selectedAnswer = null;

  const renderQuestion = () => {
    // Clear container but keep title
    container.innerHTML = '';
    container.appendChild(title);

    if (currentQuestion >= quizData.length) {
      // Quiz complete - save progress
      const progress = loadProgress();

      // Add topic to completed ONLY if perfect score and not already there
      if (score === quizData.length && !progress.completedTopics.includes(topic.id)) {
        progress.completedTopics.push(topic.id);
      }

      // Save score
      progress.scores[topic.id] = score;

      // Save to localStorage
      saveProgress(progress);

      const result = document.createElement('div');
      result.style.textAlign = 'center';

      const scoreText = document.createElement('h3');
      scoreText.textContent = `クイズ完了！ スコア: ${score}/${quizData.length}`;
      scoreText.style.color = score === quizData.length ? 'var(--success)' : 'var(--secondary)';
      scoreText.style.marginBottom = '2rem';

      const backBtn = document.createElement('button');
      backBtn.className = 'btn btn-primary';
      backBtn.textContent = 'レッスン選択に戻る';
      backBtn.onclick = () => {
        // Determine category based on topic ID
        if (topic.id.startsWith('pattern-')) navigate('/category/sentence-patterns');
        else if (topic.id.startsWith('pos-')) navigate('/category/parts-of-speech');
        else navigate('/dashboard');
      };

      result.appendChild(scoreText);
      result.appendChild(backBtn);
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
        // Update label styles
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

        // Add explanation if available
        if (q.explanation) {
          const explanationBox = document.createElement('div');
          explanationBox.style.marginTop = '1rem';
          explanationBox.style.padding = '1rem';
          explanationBox.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
          explanationBox.style.borderLeft = '4px solid var(--success)';
          explanationBox.style.borderRadius = '0.5rem';
          explanationBox.style.fontSize = '0.95rem';
          explanationBox.style.lineHeight = '1.6';
          explanationBox.style.maxWidth = '100%';
          explanationBox.style.wordBreak = 'break-word';
          explanationBox.style.whiteSpace = 'normal';

          let explanationHTML = '<strong>📝 解説:</strong><br>' + q.explanation;

          // Add Japanese translation if available
          if (q.japaneseTranslation) {
            explanationHTML += '<br><br><strong>日本語訳:</strong> ' + q.japaneseTranslation;
          }

          explanationBox.innerHTML = explanationHTML;
          feedback.appendChild(explanationBox);
        }
      } else {
        feedback.innerHTML = `❌ Incorrect. The correct answer is: <strong>${q.answer}</strong>`;
        feedback.style.color = 'var(--error)';

        // Add explanation if available
        if (q.explanation) {
          const explanationBox = document.createElement('div');
          explanationBox.style.marginTop = '1rem';
          explanationBox.style.padding = '1rem';
          explanationBox.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
          explanationBox.style.borderLeft = '4px solid var(--error)';
          explanationBox.style.borderRadius = '0.5rem';
          explanationBox.style.fontSize = '0.95rem';
          explanationBox.style.lineHeight = '1.6';
          explanationBox.style.maxWidth = '100%';
          explanationBox.style.wordBreak = 'break-word';
          explanationBox.style.whiteSpace = 'normal';

          let explanationHTML = '<strong>📝 解説:</strong><br>' + q.explanation;

          // Add Japanese translation if available
          if (q.japaneseTranslation) {
            explanationHTML += '<br><br><strong>日本語訳:</strong> ' + q.japaneseTranslation;
          }

          explanationBox.innerHTML = explanationHTML;
          feedback.appendChild(explanationBox);
        }
      }

      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.5';

      // Show next button
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
