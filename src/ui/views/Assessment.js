import { navigate } from '../router.js';

export const Assessment = () => {
  const container = document.createElement('div');
  container.className = 'glass';
  container.style.padding = '2rem';

  const title = document.createElement('h2');
  title.textContent = '習熟度テスト';
  title.style.marginBottom = '1rem';

  const content = document.createElement('p');
  content.textContent = 'あなたの開始レベルを決定します。（近日実装予定）';
  content.style.marginBottom = '2rem';

  const startBtn = document.createElement('button');
  startBtn.className = 'btn btn-primary';
  startBtn.textContent = 'テストを開始';
  startBtn.onclick = () => {
    // TODO: Implement assessment logic
    navigate('/dashboard');
  };

  container.appendChild(title);
  container.appendChild(content);
  container.appendChild(startBtn);

  return container;
};
