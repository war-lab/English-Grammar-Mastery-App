import { navigate } from '../navigation.js';

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'home-container';

  // Calculate total progress (mock logic for now, can be refined)
  const sentencePatternStreak = parseInt(localStorage.getItem('summaryBestStreak') || '0', 10);
  const posStreak = parseInt(localStorage.getItem('posBestStreak') || '0', 10);

  // Arbitrary completion target for visual feedback
  const targetStreak = 30;
  const sentencePatternProgress = Math.min(100, Math.round((sentencePatternStreak / targetStreak) * 100));
  const posProgress = Math.min(100, Math.round((posStreak / targetStreak) * 100));

  container.innerHTML = `
    <div class="hero-section">
      <h1>English Grammar Mastery</h1>
      <p>Master English grammar through systematic lessons and infinite quizzes.</p>
    </div>

    <div class="course-selection">
      <h2>Select a Course</h2>
      <div class="course-grid">
        <!-- 5 Sentence Patterns -->
        <div class="course-card" id="course-patterns">
          <div class="course-icon">🏗️</div>
          <h3>5 Sentence Patterns</h3>
          <p>Master SV, SVC, SVO, SVOO, SVOC structures.</p>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${sentencePatternProgress}%"></div>
          </div>
          <span class="progress-text">${sentencePatternProgress}% Mastery</span>
        </div>

        <!-- Parts of Speech -->
        <div class="course-card" id="course-pos">
          <div class="course-icon">✨</div>
          <h3>Parts of Speech</h3>
          <p>Learn Nouns, Verbs, Adjectives, and more.</p>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${posProgress}%"></div>
          </div>
          <span class="progress-text">${posProgress}% Mastery</span>
        </div>
      </div>
    </div>
  `;

  // Event Listeners
  setTimeout(() => {
    document.getElementById('course-patterns').addEventListener('click', () => {
      navigate('/category/sentence-patterns');
    });

    document.getElementById('course-pos').addEventListener('click', () => {
      navigate('/category/parts-of-speech');
    });
  }, 0);

  return container;
};
