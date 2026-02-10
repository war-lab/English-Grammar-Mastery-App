import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();

  return `
英語の「受動態 (Passive Voice)」に関するクイズを5問生成してください。
難易度レベル: ${level}/10.

${commonInstructions}

### 【受動態カテゴリ専用の絶対命令】
1. **問題形式**:
   - 受動態への書き換え:
     - \`sentence\`: 元の能動態の文。（例："They built this house in 1990."）
     - \`question\`: "次の文を正しい受動態に書き換えたものを選びなさい。"
   - 空所補充（be動詞や過去分詞）:
     - \`sentence\`: "This letter ____ written by him."
     - \`question\`: "次の文を完成させるのに適切な語句を選びなさい。"

**【警告】**: \`sentence\`キーには必ず「問題文となる英文」を含めてください。空のまま出力することは絶対に許されません。
`;
};
