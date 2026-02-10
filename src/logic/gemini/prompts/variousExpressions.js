import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const topics = ['命令文', '非人称のit', 'There is/are', '数量表現(many/much等)'];

  return `
英語の「色々な表現 (${topics.join(', ')})」に関するクイズを5問生成してください。
対象レベル: ${level}/10.

${commonInstructions}

### 【このカテゴリ専用の絶対命令】
- 命令文、非人称のit、There is/are、数量表現（many/much等）からバランスよく出題してください。
- \`sentence\` フィールドには、必ず「____」を含む問題文、または分析対象の英文を記述してください。絶対に空にしないでください。
- \`explanation\` は日本の学生が理解できるよう、丁寧な日本語で「文法的なルール」を添えて書いてください。
`;
};
