
import { navigate } from '../navigation.js';
import { curriculum } from '../../logic/curriculum.js';
import { getProgress } from '../../logic/storage.js';

export const CategorySelection = (categoryId) => {
  const container = document.createElement('div');
  container.className = 'category-selection-view';

  // Find the category data
  const categoryData = curriculum.find(c => c.id === categoryId);
  if (!categoryData) {
    container.innerHTML = '<p>Category not found.</p>';
    return container;
  }

  // Header with back button
  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `
    <button class="btn btn-secondary back-btn" id="back-to-home">← ホームに戻る</button>
    <h1 class="title">${categoryData.title}</h1>
    <p class="subtitle">${categoryData.description || ''}</p>
  `;
  container.appendChild(header);

  // Lessons title
  const lessonsTitle = document.createElement('h2');
  lessonsTitle.textContent = 'レッスン一覧';
  lessonsTitle.style.marginTop = '2rem';
  lessonsTitle.style.marginBottom = '1rem';
  container.appendChild(lessonsTitle);

  // Topics grid
  const topicsGrid = document.createElement('div');
  topicsGrid.className = 'topics-grid';

  categoryData.topics.forEach(topic => {
    if (!topic.isEnabled) return; // Skip disabled topics

    const card = document.createElement('div');
    card.className = 'glass topic-card';

    const progress = getProgress(topic.id);
    const isCompleted = progress.completed;

    const topicTitle = document.createElement('h3');
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

    if (isCompleted) {
      const badge = document.createElement('span');
      badge.textContent = '✓ Completed';
      badge.className = 'completed-badge';
      statusContainer.appendChild(badge);
    } else {
      const spacer = document.createElement('span');
      statusContainer.appendChild(spacer);
    }

    if (progress.score > 0) {
      const scoreDisplay = document.createElement('span');
      scoreDisplay.textContent = `Best: ${progress.score}/${topic.quiz?.length || '?'}`;
      scoreDisplay.style.color = 'var(--text-muted)';
      scoreDisplay.style.fontSize = '0.9rem';
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

    // Hover effect
    card.onmouseenter = () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    };

    card.onmouseleave = () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    };

    topicsGrid.appendChild(card);
  });

  container.appendChild(topicsGrid);

  // Event Listeners
  setTimeout(() => {
    document.getElementById('back-to-home').addEventListener('click', () => {
      navigate('/');
    });
  }, 0);

  return container;
};
