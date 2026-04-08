// to不定詞と動名詞 (Infinitives & Gerunds) カテゴリのAIプロンプト定義
import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const topics = [
    'to不定詞の名詞的用法（主語・目的語・補語、仮主語It、意味上の主語for）',
    'to不定詞の形容詞的用法（名詞の後置修飾、抽象名詞+to不定詞、something+形容詞+to不定詞）',
    'to不定詞の副詞的用法（目的・感情の原因・結果、in order to）',
    '動名詞（主語・目的語・補語・前置詞の後、動名詞のみを取る動詞）',
    'to不定詞 vs 動名詞の使い分け（remember/forget/try/stopの意味の違い、語法）'
  ];

  return `
英語の「to不定詞と動名詞 (${topics.join(', ')})」に関するクイズを5問生成してください。
対象レベル: ${level}/10.

${commonInstructions}

### 【このカテゴリ専用の絶対命令】
- to不定詞の3用法（名詞的・形容詞的・副詞的）と動名詞、使い分けからバランスよく出題してください。
- 仮主語 It の構文（It is + 形容詞 + to do）を必ず1問以上含めてください。
- 前置詞の後に動名詞が来るパターン（be good at ~ing, thank you for ~ing, interested in ~ing）を含めてください。
- remember to do vs remember doing、stop to do vs stop doing のように、to不定詞と動名詞で意味が変わる動詞の問題を必ず1問以上出題してください。
- to不定詞のみを取る動詞（want, decide, hope, plan, refuse）と動名詞のみを取る動詞（enjoy, finish, give up, practice, mind, avoid）の語法問題を含めてください。
- something cold to drink のような代名詞の語順問題を含めることを推奨します。
- 形容詞的用法で抽象名詞（opportunity, ability, time, way）+ to不定詞のパターンも出題候補に入れてください。
- \`sentence\` フィールドには、必ず「____」を含む問題文、または分析対象の英文を記述してください。絶対に空にしないでください。
- \`explanation\` は日本の学生が理解できるよう、丁寧な日本語で「文法ルール」と「なぜその答えになるか」を添えて書いてください。
- 学習者が間違えやすいポイントを積極的に出題してください：
  - 前置詞の後に to不定詞を使う誤り（× good at to play → ○ good at playing）
  - want doing のような誤り（× want doing → ○ want to do）
  - stop to do と stop doing の混同
`;
};
