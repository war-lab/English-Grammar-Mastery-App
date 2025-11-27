import { navigate } from '../router.js';
import { curriculum } from '../../logic/curriculum.js';

export const Dashboard = () => {
  const container = document.createElement('div');
  container.className = 'dashboard-view';

  const title = document.createElement('h2');
  title.textContent = 'My Dashboard';
  title.className = 'title';
  title.style.marginBottom = '2rem';

  const stats = document.createElement('div');
  stats.className = 'glass';
  stats.style.padding = '1.5rem';
  stats.style.marginBottom = '2rem';
  stats.innerHTML = '<h3>Progress</h3><p>Level: JHS 1</p><p>Completed: 0 / 7 topics</p>';

  // Lessons section
  const lessonsTitle = document.createElement('h3');
  lessonsTitle.textContent = 'Available Lessons';
  lessonsTitle.style.marginBottom = '1rem';

  const lessonsList = document.createElement('div');
  lessonsList.style.display = 'grid';
  lessonsList.style.gap = '1rem';

  // Display all topics from JHS-1 as cards
  curriculum.forEach(yearData => {
    yearData.topics.forEach(topic => {
      const card = document.createElement('div');
      card.className = 'glass';
      card.style.padding = '1.5rem';
      card.style.cursor = 'pointer';
      card.style.transition = 'transform 0.2s, box-shadow 0.2s';

      card.onmouseenter = () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
      };

      card.onmouseleave = () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      };

      const topicTitle = document.createElement('h4');
      topicTitle.textContent = topic.title;
      topicTitle.style.marginBottom = '0.5rem';
      topicTitle.style.color = 'var(--primary)';

      const topicDesc = document.createElement('p');
      topicDesc.textContent = topic.description;
      topicDesc.style.color = 'var(--text-muted)';
      topicDesc.style.fontSize = '0.95rem';
      topicDesc.style.marginBottom = '1rem';

      const startBtn = document.createElement('button');
      startBtn.className = 'btn btn-primary';
      startBtn.textContent = 'Start Lesson';
      startBtn.onclick = (e) => {
        e.stopPropagation();
        navigate('/lesson', topic);
      };

      card.appendChild(topicTitle);
      card.appendChild(topicDesc);
      card.appendChild(startBtn);

      lessonsList.appendChild(card);
    });
  });

  container.appendChild(title);
  container.appendChild(stats);
  container.appendChild(lessonsTitle);
  container.appendChild(lessonsList);

  return container;
};
