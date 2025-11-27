import { curriculum } from './curriculum.js';

export const determineLevel = (score) => {
  // Simple logic based on assessment score (0-100)
  if (score < 40) return 'jhs-1';
  if (score < 80) return 'jhs-2';
  return 'jhs-3';
};

export const getNextLesson = (progress) => {
  if (!progress.level) return null; // Needs assessment

  // Find the curriculum year matching the user's level
  // If user is jhs-1, they start there. If they finish jhs-1, they move to jhs-2.
  // We need to handle progression across years.

  const levels = ['jhs-1', 'jhs-2', 'jhs-3'];
  let currentLevelIndex = levels.indexOf(progress.level);

  while (currentLevelIndex < levels.length) {
    const levelId = levels[currentLevelIndex];
    const yearData = curriculum.find(y => y.id === levelId);

    if (yearData) {
      const nextTopic = yearData.topics.find(t => !progress.completedTopics.includes(t.id));
      if (nextTopic) {
        return { ...nextTopic, levelId };
      }
    }
    // If no topics left in this level, check next level
    currentLevelIndex++;
  }

  return { completedAll: true };
};
