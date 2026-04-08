
import { navigate } from '../navigation.js';
import { curriculum } from '../../logic/curriculum.js';
import { getProgress, getCategoryProgress } from '../../logic/storage.js';
import { Breadcrumb } from '../components/Breadcrumb.js';


export const CategorySelection = (categoryId) => {
  const container = document.createElement('div');
  container.className = 'category-selection-view';

  // カテゴリデータの取得
  const categoryData = curriculum.find(c => c.id === categoryId);
  if (!categoryData) {
    container.innerHTML = '<p>Category not found.</p>';
    return container;
  }

  // パンくずナビ
  container.appendChild(Breadcrumb([
    ['ホーム', '#/'],
    [categoryData.title]
  ]));

  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `
    <h1>${categoryData.title}</h1>
    <p class="subtitle">${categoryData.description || ''}</p>
  `;
  container.appendChild(header);

  // レッスン一覧タイトル
  const lessonsTitle = document.createElement('h2');
  lessonsTitle.textContent = 'レッスン一覧';
  lessonsTitle.className = 'section-title';
  container.appendChild(lessonsTitle);

  // チャレンジモードボタン（全完了 or デバッグモード時）
  const progress = getCategoryProgress(categoryData.topics);
  const debugUnlock = import.meta.env.VITE_DEBUG_UNLOCK === 'true';
  const showChallenge = debugUnlock || progress.allCompleted;

  if (showChallenge) {
    const challengeContainer = document.createElement('div');
    challengeContainer.className = 'category-challenge-banner';

    const challengeTitle = document.createElement('h3');
    challengeTitle.className = 'category-challenge-banner__title';
    challengeTitle.textContent = '🎉 全レッスンクリア！';

    const challengeBtn = document.createElement('button');
    challengeBtn.className = 'btn btn-primary';
    challengeBtn.innerHTML = '🏆 エキスパートチャレンジ';
    challengeBtn.onclick = () => {
      const summaryRoute = categoryId === 'sentence-patterns'
        ? '/summary/5-sentence-patterns'
        : `/summary/${categoryId}`;
      navigate(summaryRoute);
    };

    challengeContainer.appendChild(challengeTitle);
    challengeContainer.appendChild(challengeBtn);
    container.appendChild(challengeContainer);
  }

  // トピックグリッド
  const topicsGrid = document.createElement('div');
  topicsGrid.className = 'topics-grid';

  categoryData.topics.forEach(topic => {
    if (!topic.isEnabled) return;

    const card = document.createElement('div');
    const topicProgress = getProgress(topic.id);
    const isCompleted = topicProgress.completed;
    const totalCount = topic.quiz?.length || 0;
    const clearedCount = topicProgress.score || 0;

    // カードのクラスを状態に応じて設定
    card.className = 'card card--interactive';
    if (isCompleted) {
      card.classList.add('card--completed');
    } else if (clearedCount > 0) {
      card.classList.add('card--in-progress');
    }

    // タイトル
    const topicTitle = document.createElement('h3');
    topicTitle.textContent = topic.title;
    topicTitle.className = 'card-title';

    // 説明
    const topicDesc = document.createElement('p');
    topicDesc.textContent = topic.description;
    topicDesc.className = 'card-desc';

    // ボトムセクション（ステータス + ボタン）
    const bottomSection = document.createElement('div');
    bottomSection.style.marginTop = 'auto';
    bottomSection.style.display = 'flex';
    bottomSection.style.flexDirection = 'column';
    bottomSection.style.gap = '1rem';
    bottomSection.style.width = '100%';

    // ステータスバッジ
    const statusContainer = document.createElement('div');
    statusContainer.style.display = 'flex';
    statusContainer.style.alignItems = 'center';
    statusContainer.style.justifyContent = 'center';

    const statusBadge = document.createElement('div');
    statusBadge.className = 'status-badge';

    if (isCompleted) {
      statusBadge.classList.add('status-badge--completed');
      statusBadge.textContent = '✓ 完了';
    } else if (clearedCount > 0) {
      statusBadge.classList.add('status-badge--in-progress');
      statusBadge.textContent = `学習中（${clearedCount}/${totalCount}問）`;
    } else {
      statusBadge.classList.add('status-badge--not-started');
      statusBadge.textContent = '未着手';
    }
    statusContainer.appendChild(statusBadge);

    // ボタン
    const btnContainer = document.createElement('div');
    btnContainer.className = 'card-actions';
    btnContainer.style.textAlign = 'center';
    btnContainer.style.width = '100%';

    const startBtn = document.createElement('button');
    startBtn.className = 'btn btn-primary';
    startBtn.textContent = 'レッスンを開始 →';
    startBtn.onclick = (e) => {
      e.stopPropagation();
      navigate('/lesson', topic);
    };

    btnContainer.appendChild(startBtn);

    bottomSection.appendChild(statusContainer);
    bottomSection.appendChild(btnContainer);

    card.appendChild(topicTitle);
    card.appendChild(topicDesc);
    card.appendChild(bottomSection);

    topicsGrid.appendChild(card);
  });

  container.appendChild(topicsGrid);

  return container;
};
