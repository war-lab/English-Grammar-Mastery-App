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
