export const getCommonInstructions = () => {
  return `
Return a JSON object with a key "quizData" containing an array of 5 distinct questions.
Format:
{
  "quizData": [
    {
      "question": "日本語の問題文 (Question text in Japanese. e.g., '次の文の空所に最も適切な語句を選びなさい')",
      "japaneseTranslation": "英文の日本語訳 (Japanese translation)",
      "sentence": "English sentence (The core sentence)",
      "answer": "Correct Answer string (must match one of options)",
      "options": ["Option1", "Option2", "Option3", "Option4"],
      "explanation": "日本語の解説 (Explanation in Japanese, under 80 chars)"
    },
    ... (4 more distinct questions)
  ]
}

STRICT CONSTRAINTS:
1. "question": MUST be in Japanese (e.g., "次の文の空所に最も適切な語句を選びなさい").
2. "sentence": MUST be in English.
3. "japaneseTranslation": MUST be the Japanese translation of the "sentence" field (NOT the question instruction).
4. "answer": MUST be present in EACH question object. It MUST EXACTLY MATCH one of the strings in "options".
5. Return ONLY the JSON object. Do not include markdown code blocks.
`;
};
