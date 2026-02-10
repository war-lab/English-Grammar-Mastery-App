
import { navigate } from '../navigation.js';
import { curriculum } from '../../logic/curriculum.js';
import { getProgress, getCategoryProgress } from '../../logic/storage.js';


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
  lessonsTitle.className = 'section-title';
  lessonsTitle.style.marginTop = '2rem';
  lessonsTitle.style.marginBottom = '1rem';
  container.appendChild(lessonsTitle);

  // Challenge Mode Button (if all completed or debug mode)
  const progress = getCategoryProgress(categoryData.topics);
  const debugUnlock = import.meta.env.VITE_DEBUG_UNLOCK === 'true';
  const showChallenge = debugUnlock || progress.allCompleted;

  if (showChallenge) {
    const challengeContainer = document.createElement('div');
    challengeContainer.style.textAlign = 'center';
    challengeContainer.style.marginBottom = '2rem';
    challengeContainer.style.padding = '1.5rem';
    challengeContainer.style.background = 'rgba(251, 191, 36, 0.1)';
    challengeContainer.style.borderRadius = '1rem';
    challengeContainer.style.border = '1px solid rgba(251, 191, 36, 0.3)';

    const challengeTitle = document.createElement('h3');
    challengeTitle.textContent = '🎉 全レッスンクリア！';
    challengeTitle.style.color = '#fbbf24';
    challengeTitle.style.marginBottom = '1rem';

    const challengeBtn = document.createElement('button');
    challengeBtn.className = 'btn btn-challenge';
    challengeBtn.innerHTML = '🏆 エキスパートチャレンジ';
    challengeBtn.onclick = () => {
      if (categoryId === 'sentence-patterns') navigate('/summary/5-sentence-patterns');
      else if (categoryId === 'parts-of-speech') navigate('/summary/parts-of-speech');
      else if (categoryId === 'tenses') navigate('/summary/tenses');
      else if (categoryId === 'auxiliary-verbs') navigate('/summary/auxiliary-verbs');
      else if (categoryId === 'passive-voice') navigate('/summary/passive-voice');
      else if (categoryId === 'various-expressions') navigate('/summary/various-expressions');
    };

    challengeContainer.appendChild(challengeTitle);
    challengeContainer.appendChild(challengeBtn);
    container.appendChild(challengeContainer);
  }

  // Topics grid
  const topicsGrid = document.createElement('div');
  topicsGrid.className = 'topics-grid';
  topicsGrid.style.gap = '2rem'; // Increased gap

  categoryData.topics.forEach(topic => {
    if (!topic.isEnabled) return; // Skip disabled topics

    const card = document.createElement('div');
    card.className = 'glass topic-card-refined'; // Refined class
    card.style.display = 'flex';
    card.style.flexDirection = 'column';

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

    // Bottom section container (status + button)
    const bottomSection = document.createElement('div');
    bottomSection.style.marginTop = 'auto'; // Push to bottom
    bottomSection.style.display = 'flex';
    bottomSection.style.flexDirection = 'column';
    bottomSection.style.gap = '1rem';

    // Status section - Fixed height for consistent positioning
    const statusContainer = document.createElement('div');
    statusContainer.style.minHeight = '3rem'; // Fixed minimum height
    statusContainer.style.display = 'flex';
    statusContainer.style.alignItems = 'center';
    statusContainer.style.justifyContent = 'center';

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
    btnContainer.className = 'card-actions'; // Add class for positioning
    btnContainer.style.textAlign = 'center';
    btnContainer.style.width = '100%'; // Ensure full width

    const startBtn = document.createElement('button');
    startBtn.className = 'btn btn-unified'; // Unified button class
    startBtn.innerHTML = 'レッスンを開始 <span style="margin-left: 0.5rem;">→</span>';
    startBtn.onclick = (e) => {
      e.stopPropagation();
      navigate('/lesson', topic);
    };

    btnContainer.appendChild(startBtn);

    // Assemble bottom section
    bottomSection.appendChild(statusContainer);
    bottomSection.appendChild(btnContainer);

    card.appendChild(topicTitle);
    card.appendChild(topicDesc);
    card.appendChild(bottomSection);

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
