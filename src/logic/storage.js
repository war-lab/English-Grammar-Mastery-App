const STORAGE_KEY = 'english-grammar-mastery-progress';

export const saveProgress = (progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const loadProgress = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {
    level: null, // 'jhs-1', 'jhs-2', 'jhs-3' or null (not assessed)
    completedTopics: [], // Array of topic IDs
    scores: {} // Map of topic ID to score
  };
};

export const getProgress = (topicId) => {
  const progress = loadProgress();
  return {
    completed: progress.completedTopics.includes(topicId),
    score: progress.scores[topicId] || 0
  };
};

export const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
};

/**
 * Get progress for an entire category
 * @param {Array} topics - Array of topic objects in the category
 * @returns {Object} - { completed: number, remaining: number, total: number, allCompleted: boolean }
 */
export const getCategoryProgress = (topics) => {
  const progress = loadProgress();
  const enabledTopics = topics.filter(t => t.isEnabled);
  const completedCount = enabledTopics.filter(topic => 
    progress.completedTopics.includes(topic.id)
  ).length;
  
  return {
    completed: completedCount,
    remaining: enabledTopics.length - completedCount,
    total: enabledTopics.length,
    allCompleted: completedCount === enabledTopics.length
  };
};
