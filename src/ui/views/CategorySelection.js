
import { navigate } from '../navigation.js';
import { curriculum } from '../../logic/curriculum.js';
import { getProgress } from '../../logic/storage.js';

export const CategorySelection = (categoryId) => {
  const container = document.createElement('div');
  container.className = 'category-selection-container';

  // Find the category data
  const categoryData = curriculum.find(c => c.id === categoryId);
  if (!categoryData) {
    container.innerHTML = '<p>Category not found.</p>';
    return container;
  }

  // Header
  const header = document.createElement('header');
  header.className = 'dashboard-header';
  header.innerHTML = `
    <button class="back-btn" id="back-to-home">← Home</button>
    <h1>${categoryData.title}</h1>
  `;
  container.appendChild(header);

  // Topics List
  const topicsList = document.createElement('div');
  topicsList.className = 'topics-list';

  categoryData.topics.forEach(topic => {
    const topicCard = document.createElement('div');
    topicCard.className = 'topic-card';
    if (!topic.isEnabled) {
      topicCard.classList.add('disabled');
    }

    const progress = getProgress(topic.id);
    const isCompleted = progress && progress.score === 100; // Assuming 100 is perfect score or completion criteria
    const statusClass = isCompleted ? 'completed' : 'pending';
    const statusText = isCompleted ? 'Completed' : 'Start';

    topicCard.innerHTML = `
      <div class="topic-info">
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
      </div>
      <div class="topic-status ${statusClass}">
        ${statusText}
      </div>
    `;

    if (topic.isEnabled) {
      topicCard.addEventListener('click', () => {
        navigate('/lesson', topic);
      });
    }

    topicsList.appendChild(topicCard);
  });

  container.appendChild(topicsList);

  // Event Listeners
  setTimeout(() => {
    document.getElementById('back-to-home').addEventListener('click', () => {
      navigate('/');
    });
  }, 0);

  return container;
};
