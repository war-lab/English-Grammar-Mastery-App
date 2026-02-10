import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();

  return `
英語の「時制 (Verb Tenses)」に関するクイズを5問生成してください。
難易度レベル: ${level}/10.

${commonInstructions}

### 【時制カテゴリ専用の絶対命令】
1. **問題形式**:
   - \`sentence\`: 空所「____」を含む英文を必ず記述してください。(例："I ____ lunch 2 hours ago.")
   - \`question\`: "次の文の空所に適切な語句を選びなさい。"
   - \`options\`: 同じ動詞の異なる活用形（例：eat, ate, eaten, eating）を4つ。
   - \`explanation\`: 文中の時間を示す語句(yesterday, since等)を根拠に、なぜその時制になるかを日本語で丁寧に説明してください。

**【警告】**: \`sentence\`キーが空の問題は受け付けられません。必ず問題となる英文を出力してください。
`;
};
