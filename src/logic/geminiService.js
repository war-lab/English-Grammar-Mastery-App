// Gemini AI Service for Question Generation
import configData from '../config.json';

// Configuration with environment variable override support
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || configData.geminiModel || 'gemini-1.5-flash';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || configData.apiKey;

// Initialize the Google Generative AI client
let genAI = null;
if (GEMINI_API_KEY && GEMINI_API_KEY !== '' && GEMINI_API_KEY !== 'YOUR_API_KEY_HERE') {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
}

/**
 * Generates content using Google Gemini API.
 * This service is generic and does NOT contain lesson-specific logic.
 *
 * @param {Object} options
 * @param {string} options.prompt - The user prompt.
 * @param {string} [options.systemInstruction] - Optional system instruction.
 * @param {string} [options.model] - Model name (default: gemini-1.5-flash).
 * @param {number} [options.temperature] - Randomness (0.0 - 2.0).
 * @param {string} [options.responseMimeType] - Expected response type (e.g. 'application/json').
 * @param {AbortSignal} [options.signal] - Signal to abort the request.
 * @returns {Promise<Object>} - Parsed JSON response.
 */
export const generateQuiz = async ({
  prompt,
  systemInstruction,
  model = 'gemini-1.5-flash',
  temperature = 1.0,
  responseMimeType = 'application/json',
  signal
}) => {
  // Check if API key is configured
  if (!genAI) {
    throw new Error('API_KEY_NOT_CONFIGURED');
  }

  let prompt = '';
  let selectedType = 'random';

  // Logic for Sentence Patterns
  if (context.includes('sentence patterns')) {
    const types = ['pattern-id', 'fill-blank', 'error-correction', 'transformation'];
    selectedType = types[Math.floor(Math.random() * types.length)];

    if (selectedType === 'pattern-id') {
      prompt = `Generate 1 English sentence using one of 5 patterns (SV, SVC, SVO, SVOO, SVOC).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の英文の文型を答えなさい：\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "answer":"[Pattern(SV/SVC/SVO/SVOO/SVOC)]", "options":["SV","SVC","SVO","SVOO","SVOC"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The 'sentence' MUST be in English. Natural Japanese translation.`;
    }
    else if (selectedType === 'fill-blank') {
      prompt = `Generate 1 fill-in-the-blank question using 5 patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な語を選びなさい：\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer Word (English)]", "answer":"[Answer Word (English)]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]","[English Opt5]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The 'sentence' and options MUST be in English. Natural Japanese translation.`;
    }
    else if (selectedType === 'error-correction') {
      prompt = `Generate 1 error correction question related to sentence patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の誤りを訂正しなさい：\\n\\n\\"[Wrong English Sentence]\\"", "japaneseTranslation":"[Correct Japanese Translation]", "wrongSentence":"[Wrong English Sentence]", "correctSentence":"[Correct English Sentence]", "answer":"[Correct English Word/Phrase]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]","[English Opt5]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The sentences and options MUST be in English. Natural Japanese translation.`;
    }
    else if (selectedType === 'transformation') {
      prompt = `Generate 1 sentence pattern transformation question.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文を指定された文型に書き換えなさい：\\n\\n元の文: \\"[Original English Sentence]\\"\\n目標文型: [Target Pattern]", "japaneseTranslation":"[Japanese Translation]", "originalSentence":"[Original English Sentence]", "targetPattern":"[Target Pattern]", "answer":"[Correct English Sentence]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]","[English Opt5]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The sentences and options MUST be in English. Target pattern must be SV/SVC/SVO/SVOO/SVOC.`;
    }
  }
  // Logic for Parts of Speech
  else if (context.includes('parts of speech')) {
    const types = ['identify-pos', 'fill-blank-pos'];
    selectedType = types[Math.floor(Math.random() * types.length)];

    if (selectedType === 'identify-pos') {
      prompt = `Generate 1 question to identify the part of speech of a specific word in a sentence.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の [Target Word] の品詞を答えなさい：\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "targetWord":"[Target Word]", "answer":"[Part of Speech (Noun/Verb/Adjective/Adverb/Preposition/Pronoun/Conjunction/Interjection)]", "options":["Noun","Verb","Adjective","Adverb","Preposition","Pronoun","Conjunction","Interjection"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: The sentence must be natural English.`;
    }
    else if (selectedType === 'fill-blank-pos') {
      prompt = `Generate 1 fill-in-the-blank question focusing on parts of speech usage.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な語を選びなさい：\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer Word]", "answer":"[Answer Word]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: Focus on choosing the correct word form (e.g. noun vs adjective).`;
    }
  }
  else {
    // Fallback or default
    prompt = `Generate 1 simple English grammar question. Level: ${level}/10. Return ONLY JSON. Format: {"question":"...", "options":["..."], "answer":"...", "explanation":"..."}`;
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2000,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Gemini API Error Response:', errorData);
      throw new Error(`Gemini API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;

    // Robust JSON Extraction
    // Find the first '{' and the last '}' to handle any preamble/postscript text
    const firstBrace = generatedText.indexOf('{');
    const lastBrace = generatedText.lastIndexOf('}');

    if (firstBrace === -1 || lastBrace === -1 || lastBrace < firstBrace) {
      throw new Error('No valid JSON object found in response');
    }

    const jsonString = generatedText.substring(firstBrace, lastBrace + 1);

    return JSON.parse(jsonString);

  } catch (error) {
    if (error.name === 'AbortError') {
      throw error; // Re-throw abort errors to be handled specifically
    }
    console.error('Gemini Service Error:', error);
    throw error;
  }
};

// Deprecated wrapper for backward compatibility during migration
// TODO: Remove after all consumers are updated
export const generateAIQuestion = async () => {
  throw new Error('generateAIQuestion is deprecated. Use generateQuiz instead.');
};
