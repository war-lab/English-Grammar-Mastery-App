import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();

  return `
英語の「品詞 (Parts of Speech)」に関するクイズを5問生成してください。
難易度レベル: ${level}/10.

${commonInstructions}

### 【品詞カテゴリ専用の絶対命令】
1. **問題形式を適切に選んでください**:
   - 品詞判別: 英文中の特定の単語（太字または下線部を想定）の品詞を答えさせる。
     - \`sentence\`: 対象となる英文を必ず含める。（例："This is a **beautiful** flower."）
     - \`question\`: "下線部の単語(beautiful)の品詞を、名詞、動詞、形容詞、副詞等から選びなさい。"
   - 空所補充: 正しい語形の単語を選ばせる。
     - \`sentence\`: 語句が抜けた英文（例："He spoke ____."）
     - \`question\`: "次の文の空所に、副詞(Adverb)として最も適切な語を選びなさい。"

**【警告】**: \`sentence\`キーを絶対に空にしないでください。クイズの本文を必ず記述してください。
`;
};
