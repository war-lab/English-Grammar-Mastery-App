import { generatePOSQuiz, generateAIQuiz } from '../../logic/curriculum/partsOfSpeech/quizGenerator.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum/index.js';

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

    // Add Word Shifter Column
    html += `
      <div class="column-section glass" style="margin-top: 4rem; padding: 2rem; border-left: 5px solid var(--secondary);">
        <h3 class="section-title" style="text-align: left; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem;">
          <span style="font-size: 2rem;">🔄</span>
          <span>Word Shifter: Context Matters</span>
        </h3>
        <p style="font-size: 1.1rem; margin-bottom: 2rem;">
          英語では、<strong>同じ単語でも文脈によって品詞が変わる</strong>ことがよくあります。<br>
          "right" という単語を例に見てみましょう。
        </p>
        
        <div class="word-shifter-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
          
          <div class="shifter-card" style="background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 1rem;">
            <div class="shifter-header" style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
              <span class="tag" style="background: #ef4444;">Noun (名詞)</span>
              <span style="font-weight: bold; color: var(--primary);">right</span>
            </div>
            <p class="example-sentence" style="margin-bottom: 0.5rem;">Human <strong>rights</strong> are important.</p>
            <p class="translation" style="color: var(--text-muted); font-size: 0.9rem;">人<strong>権</strong>は重要です。</p>
          </div>

          <div class="shifter-card" style="background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 1rem;">
            <div class="shifter-header" style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
              <span class="tag" style="background: #3b82f6;">Verb (動詞)</span>
              <span style="font-weight: bold; color: var(--primary);">right</span>
            </div>
            <p class="example-sentence" style="margin-bottom: 0.5rem;">We need to <strong>right</strong> a wrong.</p>
            <p class="translation" style="color: var(--text-muted); font-size: 0.9rem;">私たちは不正を<strong>正す</strong>必要がある。</p>
          </div>

          <div class="shifter-card" style="background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 1rem;">
            <div class="shifter-header" style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
              <span class="tag" style="background: #f59e0b;">Adjective (形容詞)</span>
              <span style="font-weight: bold; color: var(--primary);">right</span>
            </div>
            <p class="example-sentence" style="margin-bottom: 0.5rem;">That is the <strong>right</strong> answer.</p>
            <p class="translation" style="color: var(--text-muted); font-size: 0.9rem;">それは<strong>正しい</strong>答えです。</p>
          </div>

          <div class="shifter-card" style="background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 1rem;">
            <div class="shifter-header" style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
              <span class="tag" style="background: #10b981;">Adverb (副詞)</span>
              <span style="font-weight: bold; color: var(--primary);">right</span>
            </div>
            <p class="example-sentence" style="margin-bottom: 0.5rem;">Turn <strong>right</strong> at the corner.</p>
            <p class="translation" style="color: var(--text-muted); font-size: 0.9rem;">角を<strong>右に</strong>曲がってください。</p>
          </div>

        </div>
      </div>
    `;

    return html;
  };

  return LearningPageTemplate({
    title: '品詞 エキスパートチャレンジ',
    subtitle: '英語の言葉の役割を理解しよう！',
    storageKey: 'posBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generatePOSQuiz(level),
    aiQuizGenerator: (level, signal) => generateAIQuiz(level, signal),
    backLink: '#/',
    topics: posData.topics
  });
};
