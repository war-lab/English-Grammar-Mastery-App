import { navigate } from '../router.js';

export const Assessment = () => {
  const container = document.createElement('div');
  container.className = 'glass';
  container.style.padding = '2rem';

  const title = document.createElement('h2');
  title.textContent = 'Proficiency Assessment';
  title.style.marginBottom = '1rem';

  const content = document.createElement('p');
  content.textContent = 'This assessment will determine your starting level. (Implementation coming soon)';
  content.style.marginBottom = '2rem';

  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-primary';
  startBtn.textContent = 'Start Assessment';
  startBtn.onclick = () => {
    // TODO: Implement assessment logic
    navigate('/dashboard');
  };

  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(startBtn);

  return container;
};
