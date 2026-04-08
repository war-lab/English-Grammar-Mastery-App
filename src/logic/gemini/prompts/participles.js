// 分詞 (Participles) カテゴリのAIプロンプト定義
import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const topics = [
    '現在分詞の形容詞的用法（前置修飾・後置修飾・補語）',
    '過去分詞の形容詞的用法（前置修飾・後置修飾・現在分詞との使い分け）',
    '感情動詞の分詞（interesting vs interested、exciting vs excited など）',
    '分詞構文（時・理由・条件・付帯状況、否定の分詞構文、受動態の分詞構文）',
    '知覚動詞・使役動詞と分詞（see/hear + O + ~ing/過去分詞、have/get + O + 過去分詞）'
  ];

  return `
英語の「分詞 (${topics.join(', ')})」に関するクイズを5問生成してください。
対象レベル: ${level}/10.

${commonInstructions}

### 【このカテゴリ専用の絶対命令】
- 現在分詞・過去分詞・感情動詞の分詞・分詞構文・知覚/使役動詞と分詞からバランスよく出題してください。
- 現在分詞と過去分詞の使い分け（能動 vs 受動）の問題を必ず1問以上含めてください。
- 感情動詞の分詞（interesting vs interested, exciting vs excited, boring vs bored など）の問題を必ず1問以上出題してください。
- 分詞構文の書き換え問題（接続詞付き文 → 分詞構文、またはその逆）を含めてください。
- 知覚動詞（see, hear, feel）+ O + 現在分詞/原形/過去分詞の使い分け問題を含めることを推奨します。
- have/get + O + 過去分詞（〜してもらう/〜される）の問題も出題候補に入れてください。
- 前置修飾（1語→名詞の前）と後置修飾（2語以上→名詞の後ろ）のルールに関する問題を含めてください。
- \`sentence\` フィールドには、必ず「____」を含む問題文、または分析対象の英文を記述してください。絶対に空にしないでください。
- \`explanation\` は日本の学生が理解できるよう、丁寧な日本語で「文法ルール」と「なぜその答えになるか」を添えて書いてください。
- 学習者が間違えやすいポイントを積極的に出題してください：
  - 人に ~ing を使う誤り（× I am interesting → ○ I am interested）
  - 後置修飾で語順を間違える誤り（× the running in the park boy → ○ the boy running in the park）
  - 分詞構文の否定で Not の位置を間違える誤り（× knowing not → ○ not knowing）
  - have + O + 過去分詞と have + O + 原形の混同
`;
};
