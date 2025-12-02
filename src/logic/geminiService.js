// Gemini AI Service for Question Generation
import configData from '../config.json';

// Configuration with environment variable override support
const GEMINI_API_URL = import.meta.env.VITE_GEMINI_API_URL || configData.geminiApiUrl;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || configData.apiKey;

export const generateAIQuestion = async (level, questionType = 'random') => {
  // Check if API key is configured
  if (!GEMINI_API_KEY || GEMINI_API_KEY === '' || GEMINI_API_KEY === 'YOUR_API_KEY_HERE') {
    throw new Error('API_KEY_NOT_CONFIGURED');
  }

  const patterns = ['SV', 'SVC', 'SVO', 'SVOO', 'SVOC'];

  // Determine question type
  const types = ['pattern-id', 'fill-blank', 'error-correction', 'transformation'];
  const selectedType = questionType === 'random'
    ? types[Math.floor(Math.random() * types.length)]
    : questionType;

  // Build prompt based on question type
  let prompt = '';

  if (selectedType === 'pattern-id') {
    prompt = `Generate 1 English sentence using one of 5 patterns (SV, SVC, SVO, SVOO, SVOC).
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の英文の文型を答えなさい：\\n\\n\\"[English Sentence]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[English Sentence]", "answer":"[Pattern(SV/SVC/SVO/SVOO/SVOC)]", "options":["SV","SVC","SVO","SVOO","SVOC"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: Natural English. Natural Japanese translation.`;
  }
  else if (selectedType === 'fill-blank') {
    prompt = `Generate 1 fill-in-the-blank question using 5 patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の空欄に入る最も適切な語を選びなさい：\\n\\n\\"[Sentence with ___]\\"", "japaneseTranslation":"[Japanese Translation]", "sentence":"[Complete Sentence]", "blank":"[Answer Word]", "answer":"[Answer Word]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]","[Opt5]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: Distracting options. Natural Japanese.`;
  }
  else if (selectedType === 'error-correction') {
    prompt = `Generate 1 error correction question related to sentence patterns.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文の誤りを訂正しなさい：\\n\\n\\"[Wrong Sentence]\\"", "japaneseTranslation":"[Correct Japanese Translation]", "wrongSentence":"[Wrong Sentence]", "correctSentence":"[Correct Sentence]", "answer":"[Correct Word/Phrase]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]","[Opt5]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: Typical grammar error. Natural Japanese.`;
  }
  else if (selectedType === 'transformation') {
    prompt = `Generate 1 sentence pattern transformation question.
Level: ${level}/10. Return ONLY JSON.
Format: {"question":"次の文を指定された文型に書き換えなさい：\\n\\n元の文: \\"[Original Sentence]\\"\\n目標文型: [Target Pattern]", "japaneseTranslation":"[Japanese Translation]", "originalSentence":"[Original Sentence]", "targetPattern":"[Target Pattern]", "answer":"[Correct Sentence]", "options":["[Opt1]","[Opt2]","[Opt3]","[Opt4]","[Opt5]"], "explanation":"[Concise explanation in Japanese (under 80 chars)]"}
Note: Target pattern must be SV/SVC/SVO/SVOO/SVOC. Natural Japanese.`;
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
