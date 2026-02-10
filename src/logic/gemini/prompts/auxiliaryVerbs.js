import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();

  return `
英語の「助動詞 (Auxiliary Verbs)」に関するクイズを5問生成してください。
難易度レベル: ${level}/10.

${commonInstructions}

### 【このカテゴリの追加ルール】
- can, must, should, may などの助動詞の使い分けを問う問題を作成してください。
- 状況（能力、義務、許可、推量など）が明確に伝わる英文を作成してください。
- 選択肢(options)には、意味の近い助動詞を混ぜて、文脈判断が必要な良問にしてください。

- **重要**: プレースホルダは使用禁止です。具体的な英単語と英文を作成してください。
- **言語**: 指示・翻訳・解説は100%日本語で書きなさい。
- **構造**: \`sentence\` キーを絶対に欠落させないでください。
`;
};
