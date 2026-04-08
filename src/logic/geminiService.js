// Gemini AI Service for Question Generation
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as sentencePatterns from './gemini/prompts/sentencePatterns.js';
import * as partsOfSpeech from './gemini/prompts/partsOfSpeech.js';
import * as tenses from './gemini/prompts/tenses.js';
import * as auxiliaryVerbs from './gemini/prompts/auxiliaryVerbs.js';
import * as passiveVoice from './gemini/prompts/passiveVoice.js';
import * as variousExpressions from './gemini/prompts/variousExpressions.js';
import * as questionWords from './gemini/prompts/questionWords.js';
import * as comparisons from './gemini/prompts/comparisons.js';
import * as infinitivesGerunds from './gemini/prompts/infinitivesGerunds.js';

// Configuration with environment variable override support
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-1.5-flash';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the Google Generative AI client
let genAI = null;
if (GEMINI_API_KEY && GEMINI_API_KEY !== '' && GEMINI_API_KEY !== 'YOUR_API_KEY_HERE') {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
}

// Question Pool Cache
// Structure: { 'context_key': [questionObject, ...] }
const questionPool = {};

/**
 * Generates an AI question based on level and context.
 * Implements batching optimization: fetches 5 questions at a time.
 *
 * @param {number} level - Difficulty level (1-10).
 * @param {string} context - The learning context.
 * @returns {Promise<Object>} - The generated quiz object.
 */
export const generateAIQuestion = async (level, context) => {
  if (!genAI) {
    throw new Error('API_KEY_NOT_CONFIGURED');
  }

  const poolKey = getPoolKey(context);

  // Initialize pool if needed
  if (!questionPool[poolKey]) {
    questionPool[poolKey] = [];
  }

  // If pool is empty, fetch a new batch
  if (questionPool[poolKey].length === 0) {
    await fetchQuestionBatch(level, context, poolKey);
  }

  // Return a question from the pool
  if (questionPool[poolKey].length > 0) {
    return questionPool[poolKey].pop();
  } else {
    throw new Error('Failed to generate questions');
  }
};

/**
 * Fetches specific prompts and updates the pool.
 */
const fetchQuestionBatch = async (level, context, poolKey) => {
  const prompt = selectPromptStrategy(level, context);

  try {
    const responseData = await callGeminiAPI({ prompt });

    if (responseData.quizData && Array.isArray(responseData.quizData)) {
      // Push all 5 questions to the pool
      // We shuffle them just in case, though the AI usually randomizes
      const shuffled = responseData.quizData.sort(() => 0.5 - Math.random());
      questionPool[poolKey].push(...shuffled);
      console.log(`[GeminiService] Refilled pool for ${poolKey}. Count: ${questionPool[poolKey].length}`);
    }
    else if (responseData.question) {
      // Handle single question fallback (legacy support or prompt error)
      questionPool[poolKey].push(responseData);
    }
    else {
      console.error('Invalid Response:', responseData);
      throw new Error('Invalid AI Response Format');
    }
  } catch (error) {
    console.error('Batch Fetch Error:', error);
    throw error;
  }
};

/**
 * Normalizes context to a key.
 */
const getPoolKey = (context) => {
  const ctx = context.toLowerCase();
  if (ctx.includes('sentence patterns')) return 'sentence_patterns';
  if (ctx.includes('parts of speech')) return 'parts_of_speech';
  if (ctx.includes('tenses')) return 'tenses';
  if (ctx.includes('auxiliary')) return 'auxiliary';
  if (ctx.includes('passive')) return 'passive';
  if (ctx.includes('various')) return 'various';
  if (ctx.includes('question')) return 'question_words';
  if (ctx.includes('comparison')) return 'comparisons';
  if (ctx.includes('infinitive') || ctx.includes('gerund')) return 'infinitives_gerunds';
  return 'default';
};

/**
 * Selects the appropriate prompt generation strategy based on context.
 */
const selectPromptStrategy = (level, context) => {
  const ctx = context.toLowerCase();

  if (ctx.includes('sentence patterns')) {
    return sentencePatterns.generatePrompt(level);
  }
  else if (ctx.includes('parts of speech')) {
    return partsOfSpeech.generatePrompt(level);
  }
  else if (ctx.includes('tenses') || ctx.includes('verb tenses')) {
    return tenses.generatePrompt(level);
  }
  else if (ctx.includes('auxiliary') || ctx.includes('modal')) {
    return auxiliaryVerbs.generatePrompt(level);
  }
  else if (ctx.includes('passive')) {
    return passiveVoice.generatePrompt(level);
  }
  else if (ctx.includes('various') || ctx.includes('expressions')) {
    return variousExpressions.generatePrompt(level);
  }
  else if (ctx.includes('question word') || ctx.includes('question words')) {
    return questionWords.generatePrompt(level);
  }
  else if (ctx.includes('comparison')) {
    return comparisons.generatePrompt(level);
  }
  else if (ctx.includes('infinitive') || ctx.includes('gerund')) {
    return infinitivesGerunds.generatePrompt(level);
  }
  else {
    return `Generate 5 English grammar questions suitable for level ${level}/10. 
Context: ${context}. Return ONLY JSON with key "quizData".`;
  }
};

/**
 * Low-level function to call Gemini API.
 */
export const callGeminiAPI = async ({
  prompt,
  model = GEMINI_MODEL,
  temperature = 1.0,
}) => {
  try {
    const modelInstance = genAI.getGenerativeModel({ model });

    const generationConfig = {
      temperature,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 8192, // Increased for batch response
    };

    // Only set JSON mode for Gemini models (Gemma doesn't support it yet)
    if (model.includes('gemini')) {
      generationConfig.responseMimeType = "application/json";
    }

    const result = await modelInstance.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });

    const response = await result.response;
    const text = response.text();

    const jsonString = cleanJsonString(text);
    return JSON.parse(jsonString);

  } catch (error) {
    console.error('Gemini Service Error:', error);
    throw error;
  }
};

const cleanJsonString = (text) => {
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');

  if (firstBrace === -1 || lastBrace === -1 || lastBrace < firstBrace) {
    throw new Error('No valid JSON object found in response');
  }
  return text.substring(firstBrace, lastBrace + 1);
};

// Aliases
export const generateQuiz = async (options) => {
  return await callGeminiAPI(options);
};
