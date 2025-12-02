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
    prompt = `あなたは英文法の先生です。5つの文型（SV, SVC, SVO, SVOO, SVOC）のいずれかを使った英文を1つ生成してください。
難易度レベル: ${level}/10

以下のJSON形式で返してください：
{
  "question": "次の英文の文型を答えなさい：\\n\\n\\"[英文]\\"",
  "japaneseTranslation": "[英文の日本語訳]",
  "sentence": "[生成した英文]",
  "answer": "[正解の文型 (SV/SVC/SVO/SVOO/SVOC)]",
  "options": ["SV", "SVC", "SVO", "SVOO", "SVOC"],
  "explanation": "[なぜこの文型になるのか、文の構造を詳しく日本語で解説。主語・動詞・目的語・補語などの役割を明確に説明]"
}

注意：
- 文は自然で文法的に正しいこと
- レベル${level}に適した語彙と構造を使用
- 日本語訳は自然な日本語にすること
- 解説は初学者にも分かりやすく、具体的に
- JSONのみを返し、他の説明は不要`;
  }
  else if (selectedType === 'fill-blank') {
    prompt = `あなたは英文法の先生です。5つの文型のいずれかを使った穴埋め問題を1つ生成してください。
難易度レベル: ${level}/10

以下のJSON形式で返してください：
{
  "question": "次の文の空欄に入る最も適切な語を選びなさい：\\n\\n\\"[空欄を含む英文]\\"",
  "japaneseTranslation": "[完全な英文の日本語訳]",
  "sentence": "[完全な英文]",
  "blank": "[空欄に入る正解の語]",
  "answer": "[正解の選択肢]",
  "options": ["[選択肢1]", "[選択肢2]", "[選択肢3]", "[選択肢4]", "[選択肢5]"],
  "explanation": "[なぜこの語が正解なのか、文型や文法的な観点から日本語で詳しく解説]"
}

注意：
- 空欄は___ で表す
- 選択肢は紛らわしいものを含める
- 日本語訳は自然な日本語にすること
- 解説は文法的な理由を明確に説明
- JSONのみを返し、他の説明は不要`;
  }
  else if (selectedType === 'error-correction') {
    prompt = `あなたは英文法の先生です。文型に関する文法ミスを含む英文とその訂正問題を1つ生成してください。
難易度レベル: ${level}/10

以下のJSON形式で返してください：
{
  "question": "次の文の誤りを訂正しなさい：\\n\\n\\"[誤りを含む英文]\\"",
  "japaneseTranslation": "[正しい英文の日本語訳]",
  "wrongSentence": "[誤りを含む英文]",
  "correctSentence": "[正しい英文]",
  "answer": "[正解の選択肢]",
  "options": ["[選択肢1]", "[選択肢2]", "[選択肢3]", "[選択肢4]", "[選択肢5]"],
  "explanation": "[何が誤りだったのか、なぜ正解の文が正しいのか、文型の観点から日本語で詳しく解説]"
}

注意：
- 文型に関する典型的な誤りを含める
- 選択肢には正解と紛らわしい選択肢を含める
- 日本語訳は正しい文の訳を提供
- 解説は誤りの理由と正解の理由を明確に
- JSONのみを返し、他の説明は不要`;
  }
  else if (selectedType === 'transformation') {
    prompt = `あなたは英文法の先生です。文型変換問題を1つ生成してください。
難易度レベル: ${level}/10

以下のJSON形式で返してください：
{
  "question": "次の文を指定された文型に書き換えなさい：\\n\\n元の文: \\"[元の英文]\\"\\n目標文型: [目標文型]",
  "japaneseTranslation": "[正解の文の日本語訳]",
  "originalSentence": "[元の英文]",
  "targetPattern": "[目標文型]",
  "answer": "[正解の選択肢]",
  "options": ["[選択肢1]", "[選択肢2]", "[選択肢3]", "[選択肢4]", "[選択肢5]"],
  "explanation": "[なぜこの変換が正しいのか、元の文と変換後の文の構造を比較して日本語で詳しく解説]"
}

注意：
- 目標文型はSV, SVC, SVO, SVOO, SVOCのいずれか
- 選択肢は意味が近いが文型が異なるものを含める
- 日本語訳は正解の文の訳を提供
- 解説は文型変換のポイントを明確に
- JSONのみを返し、他の説明は不要`;
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
          maxOutputTokens: 1024,
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
