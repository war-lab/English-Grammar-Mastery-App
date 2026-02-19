import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();

  return `
英語の「受動態 (Passive Voice)」に関するクイズを5問生成してください。
レベル: ${level}/10.

${commonInstructions}

### 【受動態カテゴリ専用の論理ルール】
- **主語の判定**: 能動態から受動態にする際、新しい主語（能動態の目的語）に合わせて be動詞の形(is/are/was/were)を正しく選んでいるか厳重に確認してください。
- **選択肢の作り方**:
   - \`answer\`: 文法的に正しく、かつ \`sentence\` の状況に合う単語または句。
   - \`options\`: \`answer\` を含む4つの選択肢。全て具体的な英語であること。
- **解説の義務**: なぜその be動詞や過去分詞が選ばれるのか、主語は何かに触れて日本語で説明してください。

**【警告】**: \`answer\` が \`options\` の中に見つからないというミスを絶対にしないでください。
`;
};
