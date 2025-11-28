import { Home } from './views/Home.js';
import { Assessment } from './views/Assessment.js';
import { Dashboard } from './views/Dashboard.js';
import { Lesson } from './views/Lesson.js';
import { Quiz } from './views/Quiz.js';
import { Summary5Patterns } from './views/Summary5Patterns.js';

const routes = {
  '/': Home,
  '/assessment': Assessment,
  '/dashboard': Dashboard,
  '/lesson': Lesson,
  '/quiz': Quiz,
  '/summary-5-patterns': Summary5Patterns
};

let navigationState = null;

export const navigate = (path, state = null) => {
  navigationState = state;
  window.location.hash = path;
};

export const initRouter = () => {
  const render = () => {
    const path = window.location.hash.slice(1) || '/';
    const View = routes[path] || Home;
    const app = document.getElementById('app');
    app.innerHTML = '';

    // Pass state to the view and clear it
    app.appendChild(View(navigationState));
    navigationState = null;
  };

  window.addEventListener('hashchange', render);
  render();
};
