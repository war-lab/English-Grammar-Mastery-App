// Gemini AI Service for Generic Table/JSON Generation
import configData from '../config.json';

// Configuration with environment variable override support
const GEMINI_API_URL = import.meta.env.VITE_GEMINI_API_URL || configData.geminiApiUrl;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || configData.apiKey;

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
  if (!GEMINI_API_KEY || GEMINI_API_KEY === '' || GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    throw new Error('API_KEY_NOT_CONFIGURED');
  }

  try {
    const requestBody = {
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: temperature,
        responseMimeType: responseMimeType,
      }
    };

    if (systemInstruction) {
      requestBody.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
      signal: signal
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      // Throw specific error for rate limits to allow upper layers to decide on retry
      if (response.status === 429) {
        throw new Error('RATE_LIMIT_EXCEEDED');
      }
      throw new Error(`Gemini API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();

    // Safety check for empty candidates
    if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content) {
      throw new Error('Empty response from Gemini');
    }

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
