import { Home } from './views/Home.js';
import { Lesson } from './views/Lesson.js';
import { Quiz } from './views/Quiz.js';
import { Summary5Patterns } from './views/Summary5Patterns.js';
import { PartsOfSpeech } from './views/PartsOfSpeech.js';
import { CategorySelection } from './views/CategorySelection.js';
import { getNavigationState } from './navigation.js';

const routes = {
  '/': Home,
  '/lesson': Lesson,
  '/quiz': Quiz,
  '/summary-5-patterns': Summary5Patterns,
  '/parts-of-speech': PartsOfSpeech
};

export const initRouter = () => {
  const render = () => {
    const hash = window.location.hash || '/';
    const app = document.getElementById('app');
    app.innerHTML = '';

    // Handle dynamic routes (e.g., /category/sentence-patterns)
    if (hash.startsWith('#/category/')) {
      const categoryId = hash.replace('#/category/', '');
      app.appendChild(CategorySelection(categoryId));
      return;
    }

    const path = hash.replace('#', '');
    const View = routes[path] || Home;
    const state = getNavigationState();
    app.appendChild(View(state));
  };

  window.addEventListener('hashchange', render);
  render();
};
