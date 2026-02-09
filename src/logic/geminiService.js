// Gemini AI Service for Question Generation
import { GoogleGenerativeAI } from '@google/generative-ai';
import configData from '../config.json';

// Configuration with environment variable override support
const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || configData.geminiModel || 'gemini-1.5-flash';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || configData.apiKey;

// Initialize the Google Generative AI client
let genAI = null;
if (GEMINI_API_KEY && GEMINI_API_KEY !== '' && GEMINI_API_KEY !== 'YOUR_API_KEY_HERE') {
  genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
}

export const generateAIQuestion = async (level, context) => {
  // Check if API key is configured
  if (!genAI) {
    throw new Error('API_KEY_NOT_CONFIGURED');
  }

  let prompt = '';
  let selectedType = 'random';

  // Normalize context for easier matching
  const lowerContext = context ? context.toLowerCase() : '';

  // Logic for Sentence Patterns
  if (lowerContext.includes('sentence patterns') || lowerContext.includes('pattern')) {
    const types = ['pattern-id', 'fill-blank', 'error-correction', 'transformation'];
    selectedType = types[Math.floor(Math.random() * types.length)];

    if (selectedType === 'pattern-id') {
      prompt = `Generate 1 English sentence using one of 5 patterns (SV, SVC, SVO, SVOO, SVOC).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の英文の文型を答えなさい:\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "answer":"[Pattern(SV/SVC/SVO/SVOO/SVOC)]", "options":["SV","SVC","SVO","SVOO","SVOC"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: The 'sentence' MUST be in English. Natural Japanese translation. Explanation MUST be in Japanese.`;
    }
    else if (selectedType === 'fill-blank') {
      prompt = `Generate 1 fill-in-the-blank question using 5 patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な語を選びなさい:\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer Word (English)]", "answer":"[Answer Word (English)]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]","[English Opt5]"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: The 'sentence' and options MUST be in English. Natural Japanese translation. Explanation MUST be in Japanese.`;
    }
    else if (selectedType === 'error-correction') {
      prompt = `Generate 1 error correction question related to sentence patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の誤りを訂正しなさい:\\n\\n\\"[Wrong English Sentence]\\"", "japaneseTranslation":"[Correct Japanese Translation]", "wrongSentence":"[Wrong English Sentence]", "correctSentence":"[Correct English Sentence]", "answer":"[Correct English Word/Phrase]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]","[English Opt5]"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: The sentences and options MUST be in English. Natural Japanese translation. Explanation MUST be in Japanese.`;
    }
    else if (selectedType === 'transformation') {
      prompt = `Generate 1 sentence pattern transformation question.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文を指定された文型に書き換えなさい:\\n\\n元の文: \\"[Original English Sentence]\\"\\n目標文型: [Target Pattern]", "japaneseTranslation":"[Japanese Translation]", "originalSentence":"[Original English Sentence]", "targetPattern":"[Target Pattern]", "answer":"[Correct English Sentence]", "options":["[English Opt1]","[English Opt2]","[English Opt3]","[English Opt4]","[English Opt5]"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: The sentences and options MUST be in English. Target pattern must be SV/SVC/SVO/SVOO/SVOC. Explanation MUST be in Japanese.`;
    }
  }
  // Logic for Tenses
  else if (lowerContext.includes('tenseo') || lowerContext.includes('tenses') || lowerContext.includes('tense')) {
    const types = ['identify-tense', 'fill-blank-tense'];
    selectedType = types[Math.floor(Math.random() * types.length)];

    if (selectedType === 'identify-tense') {
      prompt = `Generate 1 grammar question asking to identify the tense of a sentence.
Focus on: Present, Past, Future, Progressive, Perfect.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の英文の時制を答えなさい:\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "answer":"[Tense Name]", "options":["Present Simple", "Past Simple", "Future", "Present Progressive", "Past Progressive", "Present Perfect", "Past Perfect"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: Explanation MUST be in Japanese.`;
    } else {
      prompt = `Generate 1 fill-in-the-blank question focusing on verb tenses (Past, Future, Progressive, Perfect).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な語(句)を選びなさい:\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer]", "answer":"[Answer]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: Distractors should be different tenses/forms of the same verb. Explanation MUST be in Japanese.`;
    }
  }
  // Logic for Auxiliary Verbs
  else if (lowerContext.includes('auxiliary')) {
    prompt = `Generate 1 grammar question focusing on English auxiliary verbs (can, could, will, would, must, should, may, might).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に最も適切な助動詞を選びなさい:\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer]", "answer":"[Answer]", "options":["[Aux1]","[Aux2]","[Aux3]","[Aux4]"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: Distractors should be other auxiliary verbs. Explanation MUST be in Japanese.`;
  }
  // Logic for Parts of Speech
  else if (lowerContext.includes('parts of speech') || lowerContext.includes('pos')) {
    const types = ['identify-pos', 'fill-blank-pos'];
    selectedType = types[Math.floor(Math.random() * types.length)];

    if (selectedType === 'identify-pos') {
      prompt = `Generate 1 question to identify the part of speech of a specific word in a sentence.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の [Target Word] の品詞を答えなさい:\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "targetWord":"[Target Word]", "answer":"[Part of Speech (Noun/Verb/Adjective/Adverb/Preposition/Pronoun/Conjunction/Interjection)]", "options":["Noun","Verb","Adjective","Adverb","Preposition","Pronoun","Conjunction","Interjection"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: The sentence must be natural English. Explanation MUST be in Japanese.`;
    }
    else if (selectedType === 'fill-blank-pos') {
      prompt = `Generate 1 fill-in-the-blank question focusing on parts of speech usage.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な語を選びなさい:\\n\\n\\"[English Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete English Sentence]", "blank":"[Answer Word]", "answer":"[Answer Word]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]"], "explanation":"[Concise explanation in Japanese (under 100 chars)]"}
Note: Focus on choosing the correct word form (e.g. noun vs adjective). Explanation MUST be in Japanese.`;
    }
  }
  else {
    // Fallback or default
    prompt = `Generate 1 English grammar question related to: "${context}".
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"[Question logic in Japanese]", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence if applicable]", "answer":"[Correct Answer]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]"], "explanation":"[Concise explanation in Japanese regarding the grammar point]"}
Note: Explanation MUST be in Japanese. Question text should be in Japanese.`;
  }

  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

    // Generate content with the prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = response.text();

    // Extract JSON from response (Gemini might wrap it in markdown)
    const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse Gemini response');
    }

    const questionData = JSON.parse(jsonMatch[0]);

    return {
      ...questionData,
      questionType: selectedType
    };

  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error; // Re-throw to handle in UI
  }
};
