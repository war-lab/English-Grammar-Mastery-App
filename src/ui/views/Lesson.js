import { navigate } from '../navigation.js';

export const Lesson = (topic) => {
  const container = document.createElement('div');
  container.className = 'glass';
  container.style.padding = '2rem';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';

  // Fallback for direct access without state (for dev/testing)
  if (!topic) {
    topic = {
      title: 'サンプルレッスン',
      explanation: '<p>ダッシュボードからレッスンを選択してください。</p>'
    };
  }

  const title = document.createElement('h2');
  title.textContent = topic.title;
  title.className = 'title';
  title.style.fontSize = '2rem';

  const content = document.createElement('div');
  content.innerHTML = topic.explanation;
  content.style.margin = '2rem 0';
  content.style.lineHeight = '1.8';
  content.style.fontSize = '1.1rem';

  // Style the injected HTML content
  const styleContent = () => {
    const h3s = content.querySelectorAll('h3');
    h3s.forEach(h3 => {
      h3.style.color = 'var(--secondary)';
      h3.style.marginTop = '1.5rem';
      h3.style.marginBottom = '0.5rem';
    });

    const uls = content.querySelectorAll('ul, ol');
    uls.forEach(ul => {
      ul.style.paddingLeft = '1.5rem';
      ul.style.marginBottom = '1rem';
    });
  };

  // We need to wait for append to style, or just style inline in data. 
  // Better to use a class in main.css for .lesson-content, but inline style function works for now.

  // Button container
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '1rem';
  buttonContainer.style.marginTop = '2rem';
  buttonContainer.style.flexWrap = 'wrap';

  const quizBtn = document.createElement('button');
  quizBtn.className = 'btn btn-primary';
  quizBtn.textContent = 'クイズに挑戦';
  quizBtn.onclick = () => navigate('/quiz', topic); // Pass topic data to quiz

  const topBtn = document.createElement('button');
  topBtn.className = 'btn btn-secondary';
  topBtn.textContent = '↑ レッスントップに戻る';
  topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  buttonContainer.appendChild(quizBtn);
  buttonContainer.appendChild(topBtn);

  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(buttonContainer);

  // Apply styles after creation (micro-task)
  setTimeout(styleContent, 0);

  // Scroll to top when lesson loads
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);

  return container;
};

