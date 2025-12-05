
import { generatePOSQuiz } from '../../logic/curriculum/partsOfSpeech/quizGenerator.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const PartsOfSpeech = () => {
  const posData = curriculum.find(c => c.id === 'parts-of-speech');

  const renderExplanationContent = () => {
    let html = `
      <div class="summary-header">
        <h2 class="section-title">📚 8大品詞 完全攻略</h2>
        <p class="summary-intro">英語の単語は、役割によって8つのグループ（品詞）に分けられます。<br>それぞれの役割を理解することが、文法マスターへの第一歩です！</p>
      </div>
      
      <div class="patterns-grid">
    `;

    const iconMap = {
      'noun': '🍎',
      'verb': '🏃',
      'adjective': '✨',
      'adverb': '🚀',
      'preposition': '📍',
      'pronoun': '👤',
      'conjunction': '🔗',
      'interjection': '😲'
    };

    posData.topics.forEach(topic => {
      // Extract key from ID (e.g., 'pos-noun' -> 'noun')
      const key = topic.id.replace('pos-', '');
      const icon = iconMap[key] || '📝';

      html += `
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-icon">${icon}</span>
            <h3>${topic.title}</h3>
          </div>
          <p class="pattern-desc">${topic.description}</p>
          <div class="pattern-notes" style="margin-top: 1rem;">
            ${topic.explanation}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  };

  return LearningPageTemplate({
    title: '品詞 エキスパートチャレンジ',
    subtitle: '英語の言葉の役割を理解しよう！',
    storageKey: 'posBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generatePOSQuiz(level),
    aiPromptContext: 'English parts of speech (Noun, Verb, Adjective, Adverb, Preposition, Pronoun, Conjunction, Interjection)',
    backLink: '#/',
    topics: posData.topics
  });
};
