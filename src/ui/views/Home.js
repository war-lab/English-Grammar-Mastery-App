import { navigate } from '../navigation.js';
import { curriculum } from '../../logic/curriculum.js';
import { getCategoryProgress } from '../../logic/storage.js';
import iconPatterns from '../../assets/images/icon-patterns.png';
import iconTenses from '../../assets/images/icon-tenses.png';
import iconPos from '../../assets/images/icon-pos.png';
import iconAuxiliary from '../../assets/images/icon-auxiliary.png';
import iconPassiveVoice from '../../assets/images/icon-passive-voice.png';
import iconVarious from '../../assets/images/icon-various.png';
import iconQuestionWords from '../../assets/images/icon-question-words.png';

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'home-container';

  // Header
  const header = document.createElement('div');
  header.className = 'home-header';
  header.innerHTML = `
    <h1 class="title fancy-title" style="font-size: 3rem;">English Grammar Mastery</h1>
    <p class="subtitle fancy-subtitle">体系的な学習とAI問題で英文法をマスターしよう</p>
  `;
  container.appendChild(header);

  // Course section title
  const courseTitleEl = document.createElement('h2');
  courseTitleEl.className = 'section-title';
  courseTitleEl.textContent = '学習コース';
  container.appendChild(courseTitleEl);

  // Course grid
  const courseGrid = document.createElement('div');
  courseGrid.className = 'course-grid';
  courseGrid.style.gap = '2rem'; // Margin between cards

  // 1. 5 Sentence Patterns Card
  const patternsData = curriculum.find(c => c.id === 'sentence-patterns');
  const patternsCard = createCourseCard({
    id: 'course-patterns',
    image: iconPatterns,
    title: '5 Sentence Patterns',
    description: '英語の基本5文型（SV, SVC, SVO, SVOO, SVOC）をマスターしよう',
    streakKey: 'summaryBestStreak',
    topics: patternsData?.topics || [],
    onClick: () => navigate('/category/sentence-patterns'),
    onChallengeClick: () => navigate('/summary/5-sentence-patterns')
  });
  courseGrid.appendChild(patternsCard);

  // 2. Verb Tenses Card
  const tensesData = curriculum.find(c => c.id === 'tenses');
  const tensesCard = createCourseCard({
    id: 'course-tenses',
    image: iconTenses,
    title: 'Verb Tenses',
    description: '過去、未来、進行、完了形をマスターして時制を使いこなそう',
    streakKey: 'tensesBestStreak',
    topics: tensesData?.topics || [],
    onClick: () => navigate('/category/tenses'),
    onChallengeClick: () => navigate('/summary/tenses')
  });
  courseGrid.appendChild(tensesCard);

  // 3. Auxiliary Verbs Card
  const auxData = curriculum.find(c => c.id === 'auxiliary-verbs');
  const auxCard = createCourseCard({
    id: 'course-auxiliary',
    image: iconAuxiliary,
    title: 'Auxiliary Verbs',
    description: 'can, will, mustなど、動詞にニュアンスを加える助動詞をマスター',
    streakKey: 'auxiliaryVerbsBestStreak',
    topics: auxData?.topics || [],
    onClick: () => navigate('/category/auxiliary-verbs'),
    onChallengeClick: () => navigate('/summary/auxiliary-verbs')
  });
  courseGrid.appendChild(auxCard);

  // 4. Parts of Speech Card
  const posData = curriculum.find(c => c.id === 'parts-of-speech');
  const posCard = createCourseCard({
    id: 'course-pos',
    image: iconPos,
    title: 'Parts of Speech',
    description: '8大品詞（名詞、動詞、形容詞など）を完全理解',
    streakKey: 'posBestStreak',
    topics: posData?.topics || [],
    onClick: () => navigate('/category/parts-of-speech'),
    onChallengeClick: () => navigate('/summary/parts-of-speech')
  });
  courseGrid.appendChild(posCard);

  // 5. Passive Voice Card
  const passiveData = curriculum.find(c => c.id === 'passive-voice');
  const passiveCard = createCourseCard({
    id: 'course-passive',
    image: iconPassiveVoice,
    title: 'Passive Voice',
    description: '受動態（受け身）の表現をマスターしよう',
    streakKey: 'passiveVoiceBestStreak',
    topics: passiveData?.topics || [],
    onClick: () => navigate('/category/passive-voice'),
    onChallengeClick: () => navigate('/summary/passive-voice')
  });
  courseGrid.appendChild(passiveCard);

  // 6. Various Expressions Card
  const variousData = curriculum.find(c => c.id === 'various-expressions');
  const variousCard = createCourseCard({
    id: 'course-various',
    image: iconVarious,
    title: 'Various Expressions',
    description: '命令文、There is構文、数量表現など、表現の幅を広げる構文をマスター',
    streakKey: 'variousExpressionsBestStreak',
    topics: variousData?.topics || [],
    onClick: () => navigate('/category/various-expressions'),
    onChallengeClick: () => navigate('/summary/various-expressions')
  });
  courseGrid.appendChild(variousCard);

  // 7. Question Words Card
  const questionWordsData = curriculum.find(c => c.id === 'question-words');
  const questionWordsCard = createCourseCard({
    id: 'course-question-words',
    image: iconQuestionWords, // TODO: Replace with dedicated icon-question-words.png
    title: 'Question Words',
    description: '5W1Hや付加疑問など、疑問文の基本をマスターしよう',
    streakKey: 'questionWordsBestStreak',
    topics: questionWordsData?.topics || [],
    onClick: () => navigate('/category/question-words'),
    onChallengeClick: () => navigate('/summary/question-words')
  });
  courseGrid.appendChild(questionWordsCard);

  container.appendChild(courseGrid);

  return container;
};

function createCourseCard({ id, image, title, description, streakKey, topics, onClick, onChallengeClick }) {
  const card = document.createElement('div');
  card.className = 'glass topic-card-refined'; // Refined class
  card.id = id;

  const iconEl = document.createElement('img');
  iconEl.src = image;
  iconEl.alt = title;
  iconEl.className = 'course-icon-img'; // New class for image
  iconEl.style.height = '20vh';
  iconEl.style.objectFit = 'contain';
  iconEl.style.marginBottom = '1.5rem';

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  titleEl.className = 'card-title';
  titleEl.style.fontSize = '1.5rem';
  titleEl.style.marginBottom = '0.5rem';

  const descEl = document.createElement('p');
  descEl.textContent = description;
  descEl.className = 'card-desc';
  descEl.style.marginBottom = '1.5rem';

  // Progress Logic
  const progress = getCategoryProgress(topics);
  const streak = parseInt(localStorage.getItem(streakKey) || '0', 10);

  // Button Container
  const actionsEl = document.createElement('div');
  actionsEl.className = 'card-actions';
  actionsEl.style.width = '100%';
  actionsEl.style.display = 'flex';
  actionsEl.style.flexDirection = 'column';
  actionsEl.style.alignItems = 'center';
  actionsEl.style.gap = '1rem';

  // Challenge Button (Visible if all completed)
  // Request: Place Challenge Button ABOVE Streak
  if (progress.allCompleted) {
    const challengeBtn = document.createElement('button');
    challengeBtn.className = 'btn btn-challenge';
    challengeBtn.innerHTML = '🏆 エキスパートチャレンジ';
    challengeBtn.onclick = (e) => {
      e.stopPropagation();
      onChallengeClick();
    };
    actionsEl.appendChild(challengeBtn);
  }

  // Status Badge
  const statusBadge = document.createElement('div');
  statusBadge.className = 'status-badge';
  statusBadge.style.background = 'rgba(0, 0, 0, 0.3)';
  statusBadge.style.padding = '0.5rem 1rem';
  statusBadge.style.borderRadius = '2rem';
  statusBadge.style.display = 'inline-block';
  statusBadge.style.marginBottom = '0.5rem'; // Reduced margin

  if (progress.allCompleted) {
    statusBadge.innerHTML = `
      <span style="color: #fbbf24; margin-right: 0.5rem;">🔥</span>
      <span style="font-weight: bold;">${streak}問連続正解</span>
    `;
    statusBadge.style.border = '1px solid #fbbf24';
  } else {
    const percentage = Math.round((progress.completed / progress.total) * 100);
    statusBadge.innerHTML = `
      <span style="color: var(--secondary); margin-right: 0.5rem;">📊</span>
      <span>進捗: <strong>${progress.completed}/${progress.total}</strong> (${percentage}%)</span>
    `;
    statusBadge.style.border = '1px solid var(--secondary)';
  }

  // Add status badge to actions container instead of card body
  actionsEl.appendChild(statusBadge);

  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-unified'; // Unified button class
  startBtn.innerHTML = 'レッスンを開始 <span style="margin-left: 0.5rem;">→</span>';
  startBtn.onclick = (e) => {
    e.stopPropagation();
    onClick();
  };
  actionsEl.appendChild(startBtn);

  card.appendChild(iconEl);
  card.appendChild(titleEl);
  card.appendChild(descEl);
  // card.appendChild(statusBadge); // Moved to actionsEl
  card.appendChild(actionsEl);

  // Hover effect handled by CSS .topic-card-refined:hover

  card.onclick = onClick;

  return card;
}
