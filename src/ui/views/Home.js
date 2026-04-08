import { navigate } from '../navigation.js';
import { curriculum } from '../../logic/curriculum.js';
import { getCategoryProgress, loadProgress } from '../../logic/storage.js';
import iconPatterns from '../../assets/images/icon-patterns.png';
import iconTenses from '../../assets/images/icon-tenses.png';
import iconPos from '../../assets/images/icon-pos.png';
import iconAuxiliary from '../../assets/images/icon-auxiliary.png';
import iconPassiveVoice from '../../assets/images/icon-passive-voice.png';
import iconVarious from '../../assets/images/icon-various.png';
import iconQuestionWords from '../../assets/images/icon-question-words.png';
import iconComparisons from '../../assets/images/icon-comparisons.png';
import iconInfinitivesGerunds from '../../assets/images/icon-infinitives-gerunds.png';

// カテゴリIDとアイコンの対応表
const iconMap = {
  'sentence-patterns': iconPatterns,
  'tenses': iconTenses,
  'auxiliary-verbs': iconAuxiliary,
  'parts-of-speech': iconPos,
  'passive-voice': iconPassiveVoice,
  'various-expressions': iconVarious,
  'question-words': iconQuestionWords,
  'comparisons': iconComparisons,
  'infinitives-gerunds': iconInfinitivesGerunds,
};

// カテゴリIDとストレージキーの対応表
const streakKeyMap = {
  'sentence-patterns': 'summaryBestStreak',
  'tenses': 'tensesBestStreak',
  'auxiliary-verbs': 'auxiliaryVerbsBestStreak',
  'parts-of-speech': 'posBestStreak',
  'passive-voice': 'passiveVoiceBestStreak',
  'various-expressions': 'variousExpressionsBestStreak',
  'question-words': 'questionWordsBestStreak',
  'comparisons': 'comparisonsBestStreak',
  'infinitives-gerunds': 'infinitivesGerundsBestStreak',
};

// サマリーのルート（5文型だけ特殊）
const getSummaryRoute = (categoryId) => {
  if (categoryId === 'sentence-patterns') return '/summary/5-sentence-patterns';
  return `/summary/${categoryId}`;
};

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'home-container';

  // ヘッダー
  const header = document.createElement('div');
  header.className = 'home-header';
  header.innerHTML = `
    <h1 class="title fancy-title" style="font-size: 2.5rem;">English Grammar Mastery</h1>
    <p class="subtitle fancy-subtitle">体系的な学習とAI問題で英文法をマスターしよう</p>
  `;
  container.appendChild(header);

  // 全体進捗バー
  const overallProgress = calculateOverallProgress();
  const progressSection = document.createElement('div');
  progressSection.className = 'overall-progress';
  progressSection.innerHTML = `
    <div class="overall-progress-label">
      <span>全体の進捗</span>
      <strong>${overallProgress.completed} / ${overallProgress.total} レッスン完了 (${overallProgress.percentage}%)</strong>
    </div>
    <div class="progress-bar-track">
      <div class="progress-bar-fill" style="width: ${overallProgress.percentage}%"></div>
    </div>
  `;
  container.appendChild(progressSection);

  // おすすめセクション
  const recommendation = findNextRecommendation();
  if (recommendation) {
    const recCard = document.createElement('div');
    recCard.className = 'recommendation-card';
    recCard.innerHTML = `
      <div>
        <div class="rec-label">▶ 次のおすすめ</div>
        <div class="rec-title">${recommendation.topic.title}</div>
      </div>
    `;

    const recBtn = document.createElement('button');
    recBtn.className = 'btn btn-primary';
    recBtn.textContent = 'すぐに学習 →';
    recBtn.onclick = () => navigate('/lesson', recommendation.topic);
    recCard.appendChild(recBtn);

    container.appendChild(recCard);
  }

  // コースセクションタイトル
  const courseTitleEl = document.createElement('h2');
  courseTitleEl.className = 'section-title';
  courseTitleEl.textContent = '学習コース';
  container.appendChild(courseTitleEl);

  // コースグリッド（データ駆動で生成）
  const courseGrid = document.createElement('div');
  courseGrid.className = 'course-grid';

  curriculum.forEach(cat => {
    const card = createCourseCard(cat);
    courseGrid.appendChild(card);
  });

  container.appendChild(courseGrid);

  return container;
};

/**
 * 全体進捗を計算する
 */
function calculateOverallProgress() {
  let totalTopics = 0;
  let completedTopics = 0;

  curriculum.forEach(cat => {
    const progress = getCategoryProgress(cat.topics);
    totalTopics += progress.total;
    completedTopics += progress.completed;
  });

  const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  return { completed: completedTopics, total: totalTopics, percentage };
}

/**
 * 次に取り組むべきトピックを見つける
 */
function findNextRecommendation() {
  const progress = loadProgress();

  for (const cat of curriculum) {
    for (const topic of cat.topics) {
      if (topic.isEnabled && !progress.completedTopics.includes(topic.id)) {
        return { category: cat, topic };
      }
    }
  }
  return null;
}

/**
 * コースカード生成（データ駆動）
 */
function createCourseCard(cat) {
  const card = document.createElement('div');
  card.className = 'glass topic-card-refined';

  const progress = getCategoryProgress(cat.topics);
  const streakKey = streakKeyMap[cat.id] || '';
  const streak = parseInt(localStorage.getItem(streakKey) || '0', 10);
  const icon = iconMap[cat.id];
  const percentage = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  // アイコン
  if (icon) {
    const iconEl = document.createElement('img');
    iconEl.src = icon;
    iconEl.alt = cat.title;
    iconEl.className = 'course-icon-img';
    iconEl.style.maxHeight = '100px';
    iconEl.style.objectFit = 'contain';
    iconEl.style.marginBottom = '1rem';
    card.appendChild(iconEl);
  }

  // タイトル
  const titleEl = document.createElement('h3');
  titleEl.textContent = cat.title;
  titleEl.className = 'card-title';
  card.appendChild(titleEl);

  // アクションエリア
  const actionsEl = document.createElement('div');
  actionsEl.className = 'card-actions';
  actionsEl.style.width = '100%';
  actionsEl.style.display = 'flex';
  actionsEl.style.flexDirection = 'column';
  actionsEl.style.alignItems = 'center';
  actionsEl.style.gap = '0.75rem';
  actionsEl.style.marginTop = 'auto';

  // プログレスバー
  const progressTrack = document.createElement('div');
  progressTrack.className = 'card-progress-track';
  const progressFill = document.createElement('div');
  progressFill.className = 'card-progress-fill' + (progress.allCompleted ? ' complete' : '');
  progressFill.style.width = `${percentage}%`;
  progressTrack.appendChild(progressFill);
  actionsEl.appendChild(progressTrack);

  // 進捗テキスト
  const progressText = document.createElement('div');
  progressText.style.fontSize = '0.85rem';
  progressText.style.color = 'var(--text-muted)';

  if (progress.allCompleted) {
    progressText.innerHTML = `<span style="color: var(--success);">✓ 完了</span>`;
    if (streak > 0) {
      progressText.innerHTML += ` · <span style="color: #fbbf24;">🔥 ${streak}問連続正解</span>`;
    }
  } else {
    progressText.textContent = `${progress.completed}/${progress.total} 完了 (${percentage}%)`;
  }
  actionsEl.appendChild(progressText);

  // エキスパートチャレンジボタン（全完了時のみ）
  if (progress.allCompleted) {
    const challengeBtn = document.createElement('button');
    challengeBtn.className = 'btn btn-accent';
    challengeBtn.style.fontSize = '0.9rem';
    challengeBtn.style.padding = '0.5rem 1.25rem';
    challengeBtn.style.borderRadius = '2rem';
    challengeBtn.textContent = '🏆 エキスパートチャレンジ';
    challengeBtn.onclick = (e) => {
      e.stopPropagation();
      navigate(getSummaryRoute(cat.id));
    };
    actionsEl.appendChild(challengeBtn);
  }

  // メインボタン
  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-primary';
  startBtn.style.width = '100%';
  startBtn.style.borderRadius = '2rem';
  startBtn.textContent = 'レッスンを開始 →';
  startBtn.onclick = (e) => {
    e.stopPropagation();
    navigate(`/category/${cat.id}`);
  };
  actionsEl.appendChild(startBtn);

  card.appendChild(actionsEl);

  // カード全体クリック
  card.onclick = () => navigate(`/category/${cat.id}`);

  return card;
}
