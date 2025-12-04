
import { generatePOSQuiz } from '../../logic/posQuizGenerator.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const PartsOfSpeech = () => {
  const posData = curriculum.find(c => c.id === 'parts-of-speech');

  const renderExplanationContent = () => {
    let html = `
      <h2 style="text-align: center; margin-bottom: 2rem; color: var(--secondary);">📚 品詞の完全解説</h2>
      <p style="text-align: center; margin-bottom: 3rem;">英語の8大品詞を理解しよう！</p>
    `;

    posData.topics.forEach(topic => {
      html += `
        <div class="pattern-explanation-card">
          <h3>${topic.title}</h3>
          <p class="pattern-desc">${topic.description}</p>
          <div class="pattern-notes" style="margin-top: 1rem;">
            ${topic.explanation}
          </div>
        </div>
      `;
    });

    return html;
  };

  return LearningPageTemplate({
    title: '品詞マスター (Parts of Speech Master)',
    subtitle: '英語の言葉の役割を理解しよう！',
    storageKey: 'posBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generatePOSQuiz(level),
    aiPromptContext: 'English parts of speech (Noun, Verb, Adjective, Adverb, Preposition, Pronoun, Conjunction, Interjection)',
    backLink: '#/'
  });
};
