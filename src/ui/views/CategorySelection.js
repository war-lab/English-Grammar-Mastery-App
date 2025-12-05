
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
    card.className = 'glass topic-card-refined'; // Refined class

    const progress = getProgress(topic.id);
    const isCompleted = progress.completed;

    const topicTitle = document.createElement('h3');
    topicTitle.textContent = topic.title;
    topicTitle.className = 'card-title';
    topicTitle.style.marginBottom = '0.5rem';

    const topicDesc = document.createElement('p');
    topicDesc.textContent = topic.description;
    topicDesc.className = 'card-desc';
    topicDesc.style.marginBottom = '1rem';

    // Status section
    const statusContainer = document.createElement('div');
    statusContainer.style.marginBottom = '1.5rem';

    const totalCount = topic.quiz?.length || 0;
    const clearedCount = progress.score || 0;
    const unclearedCount = Math.max(0, totalCount - clearedCount);

    // Progress display
    const progressDisplay = document.createElement('div');
    progressDisplay.className = 'status-badge';
    progressDisplay.style.background = 'rgba(0, 0, 0, 0.3)';
    progressDisplay.style.padding = '0.5rem 1rem';
    progressDisplay.style.borderRadius = '2rem';
    progressDisplay.style.display = 'inline-block';
    progressDisplay.style.border = '1px solid var(--text-muted)';

    if (isCompleted) {
      progressDisplay.innerHTML = `
        <span style="color: var(--success); margin-right: 0.5rem;">✓</span>
        <span style="font-weight: bold;">COMPLETED</span>
      `;
      progressDisplay.style.border = '1px solid var(--success)';
      progressDisplay.style.color = 'var(--success)';
    } else {
      progressDisplay.innerHTML = `
        <span style="color: var(--text-muted);">📊 未クリア: <span style="color: var(--error); font-weight: bold;">${unclearedCount}</span> / クリア: <span style="color: var(--success); font-weight: bold;">${clearedCount}</span></span>
      `;
    }
    statusContainer.appendChild(progressDisplay);

    // Button container
    const btnContainer = document.createElement('div');
    btnContainer.style.textAlign = 'center';

    const startBtn = document.createElement('button');
    startBtn.className = 'btn btn-unified'; // Unified button class
    startBtn.innerHTML = 'レッスンを開始 <span style="margin-left: 0.5rem;">→</span>';
    startBtn.onclick = (e) => {
      e.stopPropagation();
      navigate('/lesson', topic);
    };

    btnContainer.appendChild(startBtn);

    card.appendChild(topicTitle);
    card.appendChild(topicDesc);
    card.appendChild(statusContainer);
    card.appendChild(btnContainer);

    // Hover effect handled by CSS .topic-card-refined:hover

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
