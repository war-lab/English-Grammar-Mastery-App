import { whatWhich } from './whatWhich.js';
import { whoWhomWhose } from './whoWhomWhose.js';
import { whenWhere } from './whenWhere.js';
import { whyHow } from './whyHow.js';
import { tagNegativeQuestions } from './tagNegativeQuestions.js';

/**
 * 疑問詞 (Question Words) カテゴリのクイズジェネレーター
 * エキスパートチャレンジ用に全レッスンから問題をプールして出題する。
 */
const allTopics = [whatWhich, whoWhomWhose, whenWhere, whyHow, tagNegativeQuestions];

/**
 * 全レッスンのクイズ問題をまとめてシャッフルし、指定数だけ返す。
 * @param {number} count - 出題数（デフォルト100）
 * @returns {Array<Object>} クイズ問題の配列
 */
export function generateQuiz(count = 100) {
  // 全トピックからクイズを集める
  const allQuestions = [];

  for (const topic of allTopics) {
    if (topic.quiz && Array.isArray(topic.quiz)) {
      for (const q of topic.quiz) {
        allQuestions.push({
          ...q,
          topicId: topic.id,
          topicTitle: topic.title,
        });
      }
    }
  }

  // シャッフル (Fisher-Yates)
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  // 問題数が足りない場合はループして100問にする
  const result = [];
  while (result.length < count) {
    const remaining = count - result.length;
    const batch = allQuestions.slice(0, Math.min(remaining, allQuestions.length));
    result.push(...batch);

    // 再シャッフルして次のループへ
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
  }

  return result;
}
