// パンくずナビゲーションコンポーネント
// items: [[label, hash], [label, hash], [label]]（最後はリンクなし＝現在地）

import { curriculum } from '../../logic/curriculum.js';

/**
 * パンくずナビゲーションを生成する
 * @param {Array} items - [[ラベル, ハッシュリンク], ...] 最後の要素はリンクなし（現在地）
 * @returns {HTMLElement}
 */
export const Breadcrumb = (items) => {
  const nav = document.createElement('nav');
  nav.className = 'breadcrumb';

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;

    if (isLast) {
      // 現在地（リンクなし）
      const span = document.createElement('span');
      span.className = 'current';
      span.textContent = item[0];
      nav.appendChild(span);
    } else {
      // リンク
      const a = document.createElement('a');
      a.href = item[1];
      a.textContent = item[0];
      nav.appendChild(a);

      // セパレータ
      const sep = document.createElement('span');
      sep.className = 'separator';
      sep.textContent = '›';
      nav.appendChild(sep);
    }
  });

  return nav;
};

/**
 * トピックIDからカテゴリを逆引きする
 * @param {string} topicId
 * @returns {Object|null} カテゴリオブジェクト
 */
export const getCategoryByTopicId = (topicId) => {
  return curriculum.find(c => c.topics.some(t => t.id === topicId)) || null;
};
