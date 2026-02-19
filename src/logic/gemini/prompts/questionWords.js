import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const topics = [
    'What / Which（疑問詞の主語・目的語の使い分け）',
    'Who / Whom / Whose（人を尋ねる疑問詞）',
    'When / Where（時と場所の疑問詞）',
    'Why / How（理由と方法の疑問詞）',
    '付加疑問文・否定疑問文'
  ];

  return `
英語の「疑問詞 (${topics.join(', ')})」に関するクイズを5問生成してください。
対象レベル: ${level}/10.

${commonInstructions}

### 【このカテゴリ専用の絶対命令】
- 5W1H（What, Who, When, Where, Why, How）、Which, Whom, Whose、付加疑問文、否定疑問文からバランスよく出題してください。
- 疑問詞が主語になる場合（do/does不要）と目的語になる場合（do/does必要）の区別を含めてください。
- What vs How の日本語との微妙なズレ（「どう思う？」→ What do you think of ~?）を出題に含めてください。
- 否定疑問文・付加疑問文では、英語のYes/Noが事実ベースであること（日本語とのズレ）を問う問題を含めてください。
- \`sentence\` フィールドには、必ず「____」を含む問題文、または分析対象の英文を記述してください。絶対に空にしないでください。
- \`explanation\` は日本の学生が理解できるよう、丁寧な日本語で「文法的なルール」を添えて書いてください。
`;
};
