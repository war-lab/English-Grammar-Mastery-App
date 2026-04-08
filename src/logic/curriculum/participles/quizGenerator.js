// 分詞 (Participles) カテゴリのクイズジェネレーター
// エキスパートチャレンジ用に全レッスンから問題をプールして出題する。
import { presentParticiple } from './presentParticiple.js';
import { pastParticiple } from './pastParticiple.js';
import { emotionParticiples } from './emotionParticiples.js';
import { participialConstruction } from './participialConstruction.js';
import { perceptionCausative } from './perceptionCausative.js';

const allTopics = [presentParticiple, pastParticiple, emotionParticiples, participialConstruction, perceptionCausative];

/**
 * 全レッスンのクイズ問題をまとめてシャッフルし返す。
 * @param {number} count - 出題数（デフォルト100）
 * @returns {Array<Object>} クイズ問題の配列
 */
export function generateQuiz(count = 100) {
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

  // Fisher-Yatesシャッフル
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  // 問題数が足りない場合はループして埋める
  const result = [];
  while (result.length < count) {
    const remaining = count - result.length;
    result.push(...allQuestions.slice(0, Math.min(remaining, allQuestions.length)));
    // 再シャッフル
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
  }

  return result;
}
