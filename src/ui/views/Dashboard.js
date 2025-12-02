import { navigate } from '../router.js';
import { curriculum } from '../../logic/curriculum.js';
import { loadProgress } from '../../logic/storage.js';

export const Dashboard = () => {
  const container = document.createElement('div');
  container.className = 'dashboard-view';

  const title = document.createElement('h2');
  title.textContent = 'マイダッシュボード';
  title.className = 'title';
  title.style.marginBottom = '2rem';

  const stats = document.createElement('div');
  stats.className = 'glass';
  stats.style.padding = '1.5rem';
  stats.style.marginBottom = '2rem';
  const progress = loadProgress();

  // Calculate total enabled topics
  let totalTopics = 0;
  let completedCount = 0;

  curriculum.forEach(year => {
    year.topics.forEach(topic => {
      if (topic.isEnabled) {
        totalTopics++;
        if (progress.completedTopics.includes(topic.id)) {
          completedCount++;
        }
      }
    });
  });

  stats.innerHTML = `<h3>学習進捗</h3><p>レベル: ${progress.level || '未評価'}</p><p>完了: ${completedCount} / ${totalTopics} トピック</p>`;

  // Lessons section
  const lessonsTitle = document.createElement('h3');
  lessonsTitle.textContent = '利用可能なレッスン';
  lessonsTitle.style.marginBottom = '1rem';

  const lessonsList = document.createElement('div');
  lessonsList.style.display = 'grid';
  lessonsList.style.gap = '1rem';

  // Display all topics from JHS-1 as cards
  curriculum.forEach(yearData => {
    yearData.topics.forEach(topic => {
      if (!topic.isEnabled) return; // Skip disabled topics
      const card = document.createElement('div');
      card.className = 'glass';
      card.style.padding = '1.5rem';
      card.style.cursor = 'pointer';
      card.style.transition = 'transform 0.2s, box-shadow 0.2s';

      card.onmouseenter = () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
      };

      card.onmouseleave = () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      };

      const topicTitle = document.createElement('h4');
      topicTitle.textContent = topic.title;
      topicTitle.style.marginBottom = '0.5rem';
      topicTitle.style.color = 'var(--primary)';

      const topicDesc = document.createElement('p');
      topicDesc.textContent = topic.description;
      topicDesc.style.color = 'var(--text-muted)';
      topicDesc.style.fontSize = '0.95rem';
      topicDesc.style.marginBottom = '1rem';

      // Status section
      const statusContainer = document.createElement('div');
      statusContainer.style.display = 'flex';
      statusContainer.style.justifyContent = 'space-between';
      statusContainer.style.alignItems = 'center';
      statusContainer.style.marginBottom = '1rem';
      statusContainer.style.fontSize = '0.9rem';

      const isCompleted = progress.completedTopics.includes(topic.id);
      const bestScore = progress.scores[topic.id];

      if (isCompleted) {
        const badge = document.createElement('span');
        badge.textContent = '✓ Completed';
        badge.style.color = 'var(--success)';
        badge.style.fontWeight = 'bold';
        badge.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
        badge.style.padding = '0.25rem 0.5rem';
        badge.style.borderRadius = '0.25rem';
        statusContainer.appendChild(badge);
      } else {
        const spacer = document.createElement('span');
        statusContainer.appendChild(spacer);
      }

      if (bestScore !== undefined) {
        const scoreDisplay = document.createElement('span');
        scoreDisplay.textContent = `Best: ${bestScore}/${topic.quiz.length}`;
        scoreDisplay.style.color = 'var(--text-muted)';
        statusContainer.appendChild(scoreDisplay);
      }

      const startBtn = document.createElement('button');
      startBtn.className = 'btn btn-primary';
      startBtn.textContent = 'レッスン開始';
      startBtn.onclick = (e) => {
        e.stopPropagation();
        navigate('/lesson', topic);
      };

      card.appendChild(topicTitle);
      card.appendChild(topicDesc);
      card.appendChild(statusContainer);
      card.appendChild(startBtn);

      lessonsList.appendChild(card);
    });
  });

  // Special Review Lesson (5 Sentence Patterns)
  // Check if all 5 pattern topics are completed
  const patternTopics = ['sentence-pattern-1-sv', 'sentence-pattern-2-svc', 'sentence-pattern-3-svo', 'sentence-pattern-4-svoo', 'sentence-pattern-5-svoc'];
  const allPatternsCompleted = patternTopics.every(id => progress.completedTopics.includes(id));

  if (allPatternsCompleted) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'glass review-card unlocked';
    reviewCard.style.padding = '1.5rem';
    reviewCard.style.marginTop = '2rem';
    reviewCard.style.cursor = 'pointer';
    reviewCard.style.textAlign = 'center';
    reviewCard.style.border = '2px solid var(--secondary)';
    reviewCard.style.background = 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(100, 108, 255, 0.1))';

    reviewCard.innerHTML = `
      <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">🏆 5 Sentence Patterns Master Review</h3>
      <p style="color: var(--text-muted);">You've unlocked the ultimate challenge! Test your mastery.</p>
    `;

    reviewCard.onclick = () => navigate('/summary-5-patterns');

    container.appendChild(reviewCard);
  } else {
    // Check if unlocked via hidden feature
    const isHiddenUnlocked = localStorage.getItem('masterReviewUnlocked') === 'true';

    if (isHiddenUnlocked) {
      // Show unlocked card even if conditions not met
      const reviewCard = document.createElement('div');
      reviewCard.className = 'glass review-card unlocked';
      reviewCard.style.padding = '1.5rem';
      reviewCard.style.marginTop = '2rem';
      reviewCard.style.cursor = 'pointer';
      reviewCard.style.textAlign = 'center';
      reviewCard.style.border = '2px solid var(--secondary)';
      reviewCard.style.background = 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(100, 108, 255, 0.1))';

      reviewCard.innerHTML = `
        <h3 style="color: var(--secondary); margin-bottom: 0.5rem;">🔓 5 Sentence Patterns Master Review (Unlocked)</h3>
        <p style="color: var(--text-muted);">Hidden feature activated! Test your mastery.</p>
      `;

      reviewCard.onclick = () => navigate('/summary-5-patterns');

      container.appendChild(reviewCard);
    } else {
      // Show locked state with hidden unlock feature
      const lockedCard = document.createElement('div');
      lockedCard.className = 'glass';
      lockedCard.style.padding = '1.5rem';
      lockedCard.style.marginTop = '2rem';
      lockedCard.style.textAlign = 'center';
      lockedCard.style.opacity = '0.5';
      lockedCard.style.filter = 'grayscale(1)';
      lockedCard.style.cursor = 'pointer';
      lockedCard.style.transition = 'all 0.2s';

      lockedCard.innerHTML = `
        <h3>🔒 Master Review Locked</h3>
        <p>Complete all 5 Sentence Pattern lessons to unlock.</p>
      `;

      // Hidden unlock feature
      let clickCount = 0;
      let clickTimer = null;

      lockedCard.onclick = () => {
        clickCount++;

        // Shake animation
        lockedCard.style.animation = 'none';
        setTimeout(() => {
          lockedCard.style.animation = 'shake 0.3s';
        }, 10);

        // Visual feedback - temporarily reduce opacity
        lockedCard.style.opacity = '0.3';
        setTimeout(() => {
          lockedCard.style.opacity = '0.5';
        }, 100);

        // Reset counter after 1 second of inactivity
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
          clickCount = 0;
        }, 1000);

        // Unlock on 5th click
        if (clickCount >= 5) {
          localStorage.setItem('masterReviewUnlocked', 'true');

          // Unlock animation
          lockedCard.style.transition = 'all 0.5s';
          lockedCard.style.transform = 'scale(1.1)';
          lockedCard.style.opacity = '0';

          setTimeout(() => {
            navigate('/summary-5-patterns');
          }, 500);
        }
      };

      container.appendChild(lockedCard);
    }
  }

  container.appendChild(title);
  container.appendChild(stats);
  container.appendChild(lessonsTitle);
  container.appendChild(lessonsList);

  return container;
};
