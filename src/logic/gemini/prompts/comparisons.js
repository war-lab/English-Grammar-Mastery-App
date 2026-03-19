// 比較 (Comparisons) カテゴリのAIプロンプト定義
import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const topics = [
    '原級比較 as ~ as（同等比較・否定形・as ~ as possible）',
    '比較級 -er than / more ~ than（スペル変化・不規則変化）',
    '最上級 the -est / the most ~（in/ofの使い分け・one of the + 最上級）',
    '比較の疑問文（Which/Who/What + 比較級・最上級）と慣用表現'
  ];

  return `
英語の「比較表現 (${topics.join(', ')})」に関するクイズを5問生成してください。
対象レベル: ${level}/10.

${commonInstructions}

### 【このカテゴリ専用の絶対命令】
- 原級比較（as ~ as）、比較級（-er than / more ~ than）、最上級（the -est / the most ~）、比較の疑問文・慣用表現からバランスよく出題してください。
- 不規則変化（good → better → best, bad → worse → worst, many/much → more → most）を必ず1問以上含めてください。
- スペル変化のルール（big → bigger, happy → happier, large → larger）に関する問題を含めてください。
- 最上級の in と of の使い分け（in = 場所・集団, of = 数・全体）を問う問題を含めてください。
- 比較の疑問文（Which is longer...?, Who is taller...?, What is the longest...?）でのWhat/Which/Whoの使い分けを出題してください。
- 否定形の比較表現（not as ~ as = 「〜ほど○○ではない」, not -er than = 「〜より○○というわけではない」）の意味の違いを問う問題を含めてください。
- 慣用表現（as ~ as possible, more and more, the 比較級 the 比較級, sooner or later, more than ~）を出題に含めてください。
- \`sentence\` フィールドには、必ず「____」を含む問題文、または分析対象の英文を記述してください。絶対に空にしないでください。
- \`explanation\` は日本の学生が理解できるよう、丁寧な日本語で「文法的なルール」を添えて書いてください。
- 比較級に very を使う誤り（× very taller → ○ much taller）や、more + -er の二重比較（× more bigger）など、学習者が間違えやすいポイントを出題に含めてください。
`;
};
