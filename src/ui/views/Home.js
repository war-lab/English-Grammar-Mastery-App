import { navigate } from '../router.js';

export const Home = () => {
  const container = document.createElement('div');
  container.className = 'home-view';
  container.style.textAlign = 'center';
  container.style.padding = '4rem 0';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'English Grammar Mastery';

  const subtitle = document.createElement('p');
  subtitle.textContent = '中学英文法を体系的に学習しよう';
  subtitle.style.fontSize = '1.2rem';
  subtitle.style.color = 'var(--text-muted)';
  subtitle.style.marginBottom = '3rem';

  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-primary';
  startBtn.textContent = '学習を始める';
  startBtn.onclick = () => navigate('/assessment');

  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(startBtn);

  return container;
};
