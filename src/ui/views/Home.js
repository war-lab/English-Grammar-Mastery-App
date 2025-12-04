import { navigate } from '../navigation.js';

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'home-container';

  // Header
  const header = document.createElement('div');
  header.className = 'home-header';
  header.innerHTML = `
    <h1 class="title">English Grammar Mastery</h1>
    <p class="subtitle">体系的な学習とAI問題で英文法をマスターしよう</p>
  `;
  container.appendChild(header);

  // Stats section
  const sentencePatternStreak = parseInt(localStorage.getItem('summaryBestStreak') || '0', 10);
  const posStreak = parseInt(localStorage.getItem('posBestStreak') || '0', 10);

  const stats = document.createElement('div');
  stats.className = 'glass stats-section';
  stats.innerHTML = `
    <h3>学習進捗</h3>
    <div class="stats-grid">
      <div class="stat-item">
        <span class="stat-label">文型連続</span>
        <span class="stat-value">${sentencePatternStreak}問</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">品詞連続</span>
        <span class="stat-value">${posStreak}問</span>
      </div>
    </div>
  `;
  container.appendChild(stats);

  // Course section title
  const courseTitleEl = document.createElement('h2');
  courseTitleEl.textContent = '学習コース';
  courseTitleEl.style.marginTop = '2rem';
  courseTitleEl.style.marginBottom = '1rem';
  container.appendChild(courseTitleEl);

  // Course grid
  const courseGrid = document.createElement('div');
  courseGrid.className = 'course-grid';

  // 5 Sentence Patterns Card
  const patternsCard = createCourseCard({
    id: 'course-patterns',
    icon: '🏗️',
    title: '5 Sentence Patterns',
    description: '英語の基本5文型（SV, SVC, SVO, SVOO, SVOC）をマスターしよう',
    streak: sentencePatternStreak,
    onClick: () => navigate('/category/sentence-patterns')
  });
  courseGrid.appendChild(patternsCard);

  // Parts of Speech Card
  const posCard = createCourseCard({
    id: 'course-pos',
    icon: '✨',
    title: 'Parts of Speech',
    description: '8大品詞（名詞、動詞、形容詞など）を完全理解',
    streak: posStreak,
    onClick: () => navigate('/category/parts-of-speech')
  });
  courseGrid.appendChild(posCard);

  container.appendChild(courseGrid);

  return container;
};

function createCourseCard({ id, icon, title, description, streak, onClick }) {
  const card = document.createElement('div');
  card.className = 'glass course-card';
  card.id = id;

  const iconEl = document.createElement('div');
  iconEl.className = 'course-icon';
  iconEl.textContent = icon;

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  titleEl.style.color = 'var(--primary)';
  titleEl.style.marginBottom = '0.5rem';

  const descEl = document.createElement('p');
  descEl.textContent = description;
  descEl.style.color = 'var(--text-muted)';
  descEl.style.fontSize = '0.95rem';
  descEl.style.marginBottom = '1rem';

  const streakBadge = document.createElement('div');
  streakBadge.className = 'streak-badge';
  streakBadge.innerHTML = `
    <span class="streak-icon">🔥</span>
    <span class="streak-value">${streak}問連続</span>
  `;

  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-primary';
  startBtn.textContent = 'レッスン開始';
  startBtn.onclick = (e) => {
    e.stopPropagation();
    onClick();
  };

  card.appendChild(iconEl);
  card.appendChild(titleEl);
  card.appendChild(descEl);
  card.appendChild(streakBadge);
  card.appendChild(startBtn);

  // Hover effect
  card.onmouseenter = () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
  };

  card.onmouseleave = () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  };

  card.onclick = onClick;

  return card;
}
