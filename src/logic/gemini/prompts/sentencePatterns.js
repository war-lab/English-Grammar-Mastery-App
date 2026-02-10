import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();

  return `
英語の「文型 (Sentence Patterns)」に関するクイズを5問生成してください。
難易度レベル: ${level}/10.

${commonInstructions}

### 【文型カテゴリ専用の絶対命令】
1. **文型判別問題の場合**:
   - \`sentence\`: 判定の対象となる「完全な英文」を必ず入れてください。（例："He gave me a gift."）
   - \`question\`: "**次の英文の文型を、SV, SVC, SVO, SVOO, SVOCの中から選びなさい。**" 
   - \`options\`: ["SV", "SVC", "SVO", "SVOO", "SVOC"] から正解を含む4つ。
   - \`explanation\`: その文のどの単語が S, V, O, C にあたるかを日本語で解説してください。

2. **空所補充問題の場合**:
   - \`sentence\`: 語句が抜けた英文（例："She ____ happy."）
   - \`question\`: "次の文を[SVC]文型として完成させるのに、最も適切な語を選びなさい。"
   - \`options\`: 文脈に合う英単語4つ。

**【警告】**: \`sentence\`キーが欠落した問題は、クイズとして成立しません。必ず \`sentence\` に例文を入れてください。
`;
};
