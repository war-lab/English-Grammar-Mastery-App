import { navigate } from '../navigation.js';
import { Breadcrumb, getCategoryByTopicId } from '../components/Breadcrumb.js';

export const Lesson = (topic) => {
  const container = document.createElement('div');
  container.className = 'lesson-shell';

  // トピック未選択時のフォールバック
  if (!topic) {
    topic = {
      title: 'サンプルレッスン',
      explanation: '<p>ダッシュボードからレッスンを選択してください。</p>'
    };
  }

  // タイトル
  const title = document.createElement('h2');
  title.textContent = topic.title;
  title.className = 'lesson-title';

  // 本文（HTML挿入）
  const content = document.createElement('div');
  content.innerHTML = topic.explanation;
  content.className = 'lesson-content';

  // ボタン群
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'lesson-actions';

  // カテゴリへ戻るボタン
  const backBtn = document.createElement('button');
  backBtn.className = 'btn btn-ghost';
  backBtn.textContent = '← カテゴリに戻る';
  backBtn.onclick = () => {
    const cat = getCategoryByTopicId(topic.id);
    if (cat) navigate(`/category/${cat.id}`);
    else navigate('/');
  };

  // クイズ開始ボタン
  const quizBtn = document.createElement('button');
  quizBtn.className = 'btn btn-primary';
  quizBtn.textContent = 'クイズに挑戦 →';
  quizBtn.onclick = () => navigate('/quiz', topic);

  buttonContainer.appendChild(backBtn);
  buttonContainer.appendChild(quizBtn);

  // パンくずナビ
  const category = getCategoryByTopicId(topic.id);
  if (category) {
    container.appendChild(Breadcrumb([
      ['ホーム', '#/'],
      [category.title, `#/category/${category.id}`],
      [topic.title]
    ]));
  }

  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(buttonContainer);

  // スクロール進捗バー
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  scrollProgress.style.width = '0%';
  container.insertBefore(scrollProgress, container.firstChild);

  // スクロールイベントで進捗更新
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = `${Math.min(100, progress)}%`;
  };

  window.addEventListener('scroll', updateScrollProgress);

  // ページ先頭にスクロール
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);

  return container;
};
