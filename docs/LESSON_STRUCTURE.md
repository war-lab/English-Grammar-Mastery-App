# レッスン構成ガイド - Lesson Structure Guide

新しいレッスン・カテゴリを追加する際の包括的なガイドです。
レッスンデータの作成からクイズ、エキスパートチャレンジ、AI問題生成プロンプトまで、一気通貫で対応できるよう設計されています。

---

## 目次

1. [プロジェクト全体構造](#1-プロジェクト全体構造)
2. [レッスンファイルの仕様](#2-レッスンファイルの仕様)
3. [クイズジェネレーター（通常チャレンジ）](#3-クイズジェネレーター通常チャレンジ)
4. [AIプロンプト設計（AIチャレンジ）](#4-aiプロンプト設計aiチャレンジ)
5. [Summaryビュー（エキスパートチャレンジ画面）](#5-summaryビューエキスパートチャレンジ画面)
6. [UI接続（ルーティング・ホーム画面）](#6-ui接続ルーティングホーム画面)
7. [新カテゴリ追加：一気通貫チェックリスト](#7-新カテゴリ追加一気通貫チェックリスト)
8. [既存カテゴリへのレッスン追加チェックリスト](#8-既存カテゴリへのレッスン追加チェックリスト)
9. [コピー用テンプレート集](#9-コピー用テンプレート集)
10. [スタイリング・CSSクラス一覧](#10-スタイリングcssクラス一覧)
11. [ID命名規則一覧](#11-id命名規則一覧)
12. [コミット規約](#12-コミット規約)

---

## 1. プロジェクト全体構造

```
src/
├── main.js                              # アプリエントリーポイント
├── logic/
│   ├── curriculum.js                    # カリキュラムの再エクスポート
│   ├── geminiService.js                 # Gemini AI問題生成サービス
│   ├── storage.js                       # localStorage管理
│   ├── proficiency.js                   # レベル判定
│   ├── curriculum/                      # === カリキュラムデータ ===
│   │   ├── index.js                     # 全カテゴリの統合定義
│   │   ├── sentencePatterns/            # 5つの文型 (5 topics)
│   │   │   ├── sv.js, svc.js, svo.js, svoo.js, svoc.js
│   │   │   └── quizGenerator.js
│   │   ├── tenses/                      # 時制マスター (8 topics)
│   │   │   ├── presentSimple.js, presentComparison.js,
│   │   │   │   pastTense.js, pastComparison.js,
│   │   │   │   progressiveTense.js, futureTense.js,
│   │   │   │   perfectTense.js, presentPerfectProgressive.js
│   │   │   └── quizGenerator.js
│   │   ├── auxiliaryVerbs/              # 助動詞 (4 topics)
│   │   │   ├── canCould.js, willWould.js, mustShould.js, mayMight.js
│   │   │   └── quizGenerator.js
│   │   ├── passiveVoice/                # 受動態 (4 topics)
│   │   │   ├── basics.js, future.js, auxiliary.js, perfect.js
│   │   │   └── quizGenerator.js
│   │   ├── partsOfSpeech/               # 品詞マスター (8 topics)
│   │   │   ├── noun.js, verb.js, adjective.js, adverb.js,
│   │   │   │   preposition.js, pronoun.js, conjunction.js, interjection.js
│   │   │   └── quizGenerator.js
│   │   ├── variousExpressions/          # 色々な表現 (4 topics)
│   │   │   ├── imperativeSentence.js, impersonalIt.js,
│   │   │   │   thereIsConstruction.js, quantityExpressions.js
│   │   │   └── quizGenerator.js
│   │   └── questionWords/               # 疑問詞 (5 topics)
│   │       ├── whatWhich.js, whoWhomWhose.js, whenWhere.js,
│   │       │   whyHow.js, tagNegativeQuestions.js
│   │       └── quizGenerator.js
│   └── gemini/prompts/                  # === AIプロンプト定義 ===
│       ├── common.js                    # 共通指示（全カテゴリ共有）
│       ├── sentencePatterns.js
│       ├── tenses.js
│       ├── partsOfSpeech.js
│       ├── auxiliaryVerbs.js
│       ├── passiveVoice.js
│       ├── variousExpressions.js
│       └── questionWords.js
├── ui/
│   ├── router.js                        # ハッシュベースルーティング
│   ├── navigation.js                    # ナビゲーション状態管理
│   ├── components/
│   │   ├── LearningPageTemplate.js      # エキスパートチャレンジ共通テンプレート
│   │   ├── ResultModal.js               # スコア表示モーダル
│   │   └── patternDiagrams.js           # 文型図表示
│   └── views/
│       ├── Home.js                      # ホーム画面（カテゴリカード一覧）
│       ├── CategorySelection.js         # カテゴリ内レッスン一覧
│       ├── Lesson.js                    # 個別レッスン表示
│       ├── Quiz.js                      # 基本クイズ
│       ├── Summary5Patterns.js          # 文型エキスパートチャレンジ
│       ├── SummaryTenses.js             # 時制エキスパートチャレンジ
│       ├── SummaryAuxiliaryVerbs.js     # 助動詞エキスパートチャレンジ
│       ├── SummaryPassiveVoice.js       # 受動態エキスパートチャレンジ
│       ├── PartsOfSpeech.js             # 品詞エキスパートチャレンジ
│       ├── SummaryVariousExpressions.js # 表現エキスパートチャレンジ
│       └── SummaryQuestionWords.js      # 疑問詞エキスパートチャレンジ
└── assets/images/
    └── icon-*.png                       # カテゴリアイコン画像
```

### カリキュラム定義 (`src/logic/curriculum/index.js`)

```javascript
export const curriculum = [
  { id: 'sentence-patterns',    title: '5つの文型 (5 Sentence Patterns)',     topics: [...] },
  { id: 'tenses',               title: '時制マスター (Verb Tenses)',           topics: [...] },
  { id: 'auxiliary-verbs',      title: '助動詞 (Auxiliary Verbs)',             topics: [...] },
  { id: 'passive-voice',        title: '受動態 (Passive Voice)',               topics: [...] },
  { id: 'parts-of-speech',      title: '品詞マスター (Parts of Speech)',       topics: [...] },
  { id: 'various-expressions',  title: '色々な表現 (Various Expressions)',     topics: [...] },
  { id: 'question-words',       title: '疑問詞 (Question Words)',             topics: [...] },
];
```

---

## 2. レッスンファイルの仕様

### 必須フィールド

| フィールド | 型 | 説明 |
|----------|-----|------|
| `id` | String | アプリ全体で一意な識別子 |
| `isEnabled` | Boolean | `true` で表示、`false` で非表示 |
| `title` | String | レッスンタイトル |
| `description` | String | 1〜2文の簡潔な説明 |
| `explanation` | String (HTML) | 詳細な学習コンテンツ（HTMLテンプレートリテラル） |
| `examples` | Array\<String\> | 例文リスト（5〜7個推奨） |
| `quiz` | Array\<Object\> | クイズ問題の配列（4〜10問、推奨10問） |

### クイズ問題オブジェクトの構造

| フィールド | 型 | 説明 |
|----------|-----|------|
| `question` | String | 問題文（日本語） |
| `options` | Array\<String\> | 選択肢（**必ず4つ**） |
| `answer` | String | 正解（**`options`内の文字列と完全一致**必須） |
| `explanation` | String | 日本語の解説 |

### 実例（`questionWords/whatWhich.js` 抜粋）

```javascript
export const whatWhich = {
  id: 'qw-what-which',
  isEnabled: true,
  title: 'What / Which の使い方',
  description: '「何」「どれ」を尋ねる疑問詞の使い方と、主語・目的語の位置の入れ替わりを学びます。',
  explanation: `
    <div class="explanation-section">
      <p>疑問詞は「何？」「誰？」「いつ？」のように、<strong>具体的な情報を尋ねる</strong>ための言葉です。</p>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">What（何）</h3>

      <div class="concept-box">
        <h4>🔍 目的語を尋ねる What</h4>
        <p>元の文の<strong>目的語</strong>を What に置き換え、文頭に移動させます。</p>
        <div class="example-grid">
          <div class="example-item"><strong>You like cats.</strong><br>→ <strong>What do you like?</strong><br>（何が好きですか？）</div>
        </div>
      </div>

      <div class="example-box">
        <p class="example-sentence">What do you do on weekends?</p>
        <p class="example-breakdown"><span class="tag">What</span> <span class="tag v-tag">do</span> <span class="tag s-tag">you</span> <span class="tag v-tag">do</span> on weekends?</p>
        <p class="example-translation">週末は何をしますか？</p>
        <p class="example-note">最初のdoは疑問文を作るためのdo、2つ目のdoは「する」という動詞です。</p>
      </div>

      <ul class="check-list">
        <li>✓ <strong>What</strong> = 広い範囲で「何？」と尋ねる</li>
        <li>✓ <strong>Which</strong> = 限られた選択肢から「どれ？」と尋ねる</li>
      </ul>
    </div>
  `,
  examples: [
    'What do you like? — I like cats.',
    'What time does the meeting start?',
    'Which would you like, coffee or tea?',
  ],
  quiz: [
    {
      question: '「あなたは何が好きですか？」を英語で表すと？',
      options: ['What do you like?', 'What you like?', 'What are you like?', 'What did you like?'],
      answer: 'What do you like?',
      explanation: '目的語を尋ねるWhatの疑問文は「What + do/does + 主語 + 動詞の原形」の語順です。'
    },
    // ... 他の問題
  ]
};
```

---

## 3. クイズジェネレーター（通常チャレンジ）

エキスパートチャレンジの「通常チャレンジ」モードで使用される、カテゴリごとのクイズ生成ロジックです。
各カテゴリの `quizGenerator.js` に配置します。

### ファイル配置

```
src/logic/curriculum/<カテゴリ名>/quizGenerator.js
```

### 実装パターン

#### パターンA: プール方式（推奨・シンプル）

全トピックの静的クイズをプールして出題する方式。
**参考**: `questionWords/quizGenerator.js`, `variousExpressions/quizGenerator.js`

```javascript
import { topicA } from './topicA.js';
import { topicB } from './topicB.js';

const allTopics = [topicA, topicB];

/**
 * 全レッスンのクイズ問題をまとめてシャッフルし返す。
 * @param {number} count - 出題数（デフォルト100）
 * @returns {Array<Object>} クイズ問題の配列
 */
export function generateQuiz(count = 100) {
  const allQuestions = [];

  for (const topic of allTopics) {
    if (topic.quiz && Array.isArray(topic.quiz)) {
      for (const q of topic.quiz) {
        allQuestions.push({
          ...q,
          topicId: topic.id,
          topicTitle: topic.title,
        });
      }
    }
  }

  // Fisher-Yatesシャッフル
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  // 問題数が足りない場合はループして埋める
  const result = [];
  while (result.length < count) {
    const remaining = count - result.length;
    result.push(...allQuestions.slice(0, Math.min(remaining, allQuestions.length)));
    // 再シャッフル
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
  }

  return result;
}
```

> **注意**: このパターンの `generateQuiz()` は**配列全体**を返す。Summaryビューでは `generateQuiz(level)` として呼ばれ、`LearningPageTemplate` 側で1問ずつ `pop()` するわけではなく、`config.generateQuiz(level)` として呼ばれた結果のオブジェクト（1問分）を直接使用する。
> ただし、実装によっては配列を返すパターンと1問を返すパターンがある。Summaryビュー側の呼び出し形式に合わせること。

#### パターンB: テンプレート方式

レベルに応じたデータプールから動的に1問生成する方式。
**参考**: `sentencePatterns/quizGenerator.js`, `partsOfSpeech/quizGenerator.js`

```javascript
export const generateQuiz = (level = 1) => {
  // レベルに応じて難易度・トピック範囲を調整
  // 1問分のオブジェクトを返す
  return {
    question: '問題文',
    options: ['A', 'B', 'C', 'D'],
    answer: 'B',
    explanation: '解説'
  };
};
```

### 難易度設計の指針

| レベル | 内容 |
|--------|------|
| 1〜5 | 各トピック個別の基礎問題 |
| 6〜7 | 複数トピック混合、基礎難易度 |
| 8〜9 | 混合問題、中級難易度 |
| 10 | 全トピック混合、上級難易度 |

---

## 4. AIプロンプト設計（AIチャレンジ）

Gemini AIを使ってレベルに応じた問題を動的に生成する仕組みです。

### アーキテクチャ概要

```
SummaryView
  → aiQuizGenerator(level, signal)
    → geminiService.generateAIQuestion(level, context)
      → questionPool にキャッシュがあれば pop() して返す
      → なければ fetchQuestionBatch()
        → selectPromptStrategy(level, context) でプロンプト取得
        → callGeminiAPI({ prompt }) で Gemini API 呼び出し
        → JSON解析 → quizData[5問] を questionPool にpush
        → pop() で1問返す
```

**ポイント**:
- 5問バッチ取得でAPI効率化
- `context` 文字列で `geminiService.js` 内のルーティングが決まる
- `getPoolKey()` と `selectPromptStrategy()` の両方にキーワードを登録する必要がある

### 4-1. 共通指示 (`common.js`)

全カテゴリで共有される基本ルールです。変更不要ですが、理解しておく必要があります。

```
【返却フォーマット】JSONのみを出力
{
  "quizData": [
    {
      "question":            "日本語による指示",
      "sentence":            "問題の核となる英文（空所補充なら____を含む）",
      "japaneseTranslation": "sentenceフィールドの日本語訳",
      "answer":              "正解（options内の文字列と完全一致）",
      "options":             ["正解", "誤答1", "誤答2", "誤答3"],
      "explanation":         "日本語による丁寧な解説"
    }
  ]
}

【論理的整合性チェックリスト】
1. answer ∈ options（完全一致）
2. 具体的な英単語・英文で回答（"Option 1"等の抽象値は禁止）
3. 文法的正確性を二重チェック
4. question, japaneseTranslation, explanation は日本語のみ
5. sentenceキーは絶対に欠落させない
```

### 4-2. カテゴリ専用プロンプトの作成

**ファイル配置**: `src/logic/gemini/prompts/<カテゴリ名>.js`

**実例（`questionWords.js`）**:

```javascript
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
```

### 4-3. プロンプト設計のガイドライン

「カテゴリ専用の絶対命令」セクションには、以下を必ず含めること：

1. **出題範囲の指定** — カテゴリ内のトピックからバランスよく出題する旨
2. **学習者の間違いやすいポイント** — そのカテゴリ特有の罠を出題に含める指示
3. **`sentence`フィールドの要件** — `____`（空所補充）or 分析対象の英文。空にしない
4. **`explanation`の品質基準** — 日本の学生向け、文法ルールを添えた丁寧な解説

### 4-4. `geminiService.js` への登録（3箇所）

新しいカテゴリのプロンプトを作成したら、`src/logic/geminiService.js` に以下3つの変更を加えます。

#### (a) インポート追加

```javascript
import * as newCategory from './gemini/prompts/newCategory.js';
```

#### (b) `getPoolKey()` にキーワード追加

```javascript
const getPoolKey = (context) => {
  const ctx = context.toLowerCase();
  // ... 既存のキー ...
  if (ctx.includes('new keyword')) return 'new_category';
  return 'default';
};
```

#### (c) `selectPromptStrategy()` にルーティング追加

```javascript
const selectPromptStrategy = (level, context) => {
  const ctx = context.toLowerCase();
  // ... 既存の分岐 ...
  else if (ctx.includes('new keyword')) {
    return newCategory.generatePrompt(level);
  }
  // ...
};
```

### 4-5. 現在のキーワード↔プロンプト対応表

| Summaryビューで渡す context | getPoolKey の返り値 | プロンプトファイル |
|---------------------------|--------------------|--------------------|
| `'sentence patterns'` | `sentence_patterns` | `sentencePatterns.js` |
| `'parts of speech'` | `parts_of_speech` | `partsOfSpeech.js` |
| `'tenses'` or `'verb tenses'` | `tenses` | `tenses.js` |
| `'auxiliary'` or `'modal'` | `auxiliary` | `auxiliaryVerbs.js` |
| `'passive'` | `passive` | `passiveVoice.js` |
| `'various'` or `'expressions'` | `various` | `variousExpressions.js` |
| `'question words'` | `question_words` | `questionWords.js` |

---

## 5. Summaryビュー（エキスパートチャレンジ画面）

各カテゴリのエキスパートチャレンジ画面を担当するビューコンポーネントです。
全カテゴリで `LearningPageTemplate` を共通的に使用します。

### `LearningPageTemplate` のAPI

```javascript
LearningPageTemplate({
  title: String,                    // ページタイトル
  subtitle: String,                 // サブタイトル
  storageKey: String,               // localStorage用キー（ベストストリーク保存）
  renderExplanationContent: Function, // () => HTML文字列
  generateQuiz: Function,           // (level) => {question, options, answer, explanation}
  aiQuizGenerator: Function,        // (level, signal?) => Promise<{question, sentence, ...}>
  backLink: String,                 // 戻りリンク（通常 '#/'）
  topics: Array                     // curriculum内のtopics配列（ロック判定に使用）
})
```

### 実例（`SummaryQuestionWords.js` — 最も典型的なパターン）

```javascript
import { generateQuiz as generateQuestionWordsQuiz } from '../../logic/curriculum/questionWords/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryQuestionWords = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ 疑問詞 完全攻略</h2>
        <p class="summary-intro">5W1Hから付加疑問・否定疑問まで、疑問文の全パターンをマスターしましょう。</p>
      </div>

      <div class="patterns-grid">
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">疑問詞 1</span>
            <h3>What / Which</h3>
          </div>
          <p class="pattern-desc"><strong>「何」「どれ」を尋ねる</strong><br>...</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">What do you like?</p>
              <p class="example-translation">何が好きですか？</p>
            </div>
          </div>
        </div>
        <!-- 各トピックのカードを並べる -->
      </div>
    `;
  };

  return LearningPageTemplate({
    title: '疑問詞 エキスパートチャレンジ',
    subtitle: '5W1H・付加疑問・否定疑問をマスターしよう！',
    storageKey: 'questionWordsBestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateQuestionWordsQuiz(level),
    aiQuizGenerator: (level) => generateAIQuestion(level, 'question words'),
    backLink: '#/',
    topics: curriculum.find(c => c.id === 'question-words')?.topics || []
  });
};
```

### `renderExplanationContent` のHTML構造パターン

```html
<div class="summary-header">
  <h2 class="section-title">✨ カテゴリ名 完全攻略</h2>
  <p class="summary-intro">概要説明テキスト</p>
</div>

<div class="patterns-grid">
  <!-- トピックごとに1カード -->
  <div class="pattern-explanation-card glass">
    <div class="pattern-header">
      <span class="pattern-badge">トピック 1</span>
      <h3>トピック名</h3>
    </div>
    <p class="pattern-desc"><strong>見出し</strong><br>説明</p>
    <div class="pattern-notes">
      <div class="example-box">
        <p class="example-sentence">English sentence.</p>
        <p class="example-translation">日本語訳</p>
      </div>
      <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
        <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 注意点テキスト</p>
      </div>
    </div>
  </div>
</div>
```

---

## 6. UI接続（ルーティング・ホーム画面）

### 6-1. ルーティング (`src/ui/router.js`)

```javascript
import { SummaryNewCategory } from './views/SummaryNewCategory.js';

const routes = {
  // ... 既存ルート ...
  '/summary/new-category': SummaryNewCategory,  // 追加
};
```

### 6-2. ホーム画面 (`src/ui/views/Home.js`)

```javascript
import iconNewCategory from '../../assets/images/icon-new-category.png';

// Home関数内で...
const newCatData = curriculum.find(c => c.id === 'new-category');
const newCatCard = createCourseCard({
  id: 'course-new-category',
  image: iconNewCategory,
  title: 'New Category',
  description: 'カテゴリの日本語説明文',
  streakKey: 'newCategoryBestStreak',
  topics: newCatData?.topics || [],
  onClick: () => navigate('/category/new-category'),
  onChallengeClick: () => navigate('/summary/new-category')
});
courseGrid.appendChild(newCatCard);
```

### 6-3. カテゴリ選択画面 (`src/ui/views/CategorySelection.js`)

エキスパートチャレンジボタンの遷移先に分岐を追加：

```javascript
challengeBtn.onclick = () => {
  // ... 既存の分岐 ...
  else if (categoryId === 'new-category') navigate('/summary/new-category');
};
```

### 現在のルーティング対応表

| カテゴリID | Summary ルート | Summaryビューファイル |
|-----------|---------------|---------------------|
| `sentence-patterns` | `/summary/5-sentence-patterns` | `Summary5Patterns.js` |
| `tenses` | `/summary/tenses` | `SummaryTenses.js` |
| `auxiliary-verbs` | `/summary/auxiliary-verbs` | `SummaryAuxiliaryVerbs.js` |
| `passive-voice` | `/summary/passive-voice` | `SummaryPassiveVoice.js` |
| `parts-of-speech` | `/summary/parts-of-speech` | `PartsOfSpeech.js` |
| `various-expressions` | `/summary/various-expressions` | `SummaryVariousExpressions.js` |
| `question-words` | `/summary/question-words` | `SummaryQuestionWords.js` |

---

## 7. 新カテゴリ追加：一気通貫チェックリスト

新しいカテゴリを「ゼロから」追加する場合の全手順です。
`{cat}` = カテゴリ名（例: `relativeClauses`）、`{cat-id}` = ケバブケース（例: `relative-clauses`）として読み替えてください。

### Step 1: レッスンデータ

- [ ] `src/logic/curriculum/{cat}/` ディレクトリを作成
- [ ] 各トピックの `.js` ファイルを作成（[テンプレート](#9-1-レッスンファイルテンプレート)参照）
- [ ] 各ファイルで `id`, `isEnabled`, `title`, `description`, `explanation`, `examples`, `quiz` を定義
- [ ] `quiz` は最低4問、各問題に `options`（4つ）、`answer`（options内と完全一致）、`explanation` を含む

### Step 2: カリキュラム登録

- [ ] `src/logic/curriculum/index.js` にインポート追加
- [ ] `curriculum` 配列に `{ id: '{cat-id}', title: '...', topics: [...] }` を追加

### Step 3: クイズジェネレーター

- [ ] `src/logic/curriculum/{cat}/quizGenerator.js` を作成（[テンプレート](#9-2-クイズジェネレーターテンプレート)参照）
- [ ] `export function generateQuiz(...)` をエクスポート

### Step 4: AIプロンプト

- [ ] `src/logic/gemini/prompts/{cat}.js` を作成（[テンプレート](#9-3-aiプロンプトテンプレート)参照）
- [ ] `getCommonInstructions()` をインポートし、カテゴリ固有の指示を追加
- [ ] `src/logic/geminiService.js` の3箇所を更新:
  - [ ] (a) `import * as {cat} from './gemini/prompts/{cat}.js';`
  - [ ] (b) `getPoolKey()` にキーワード分岐を追加
  - [ ] (c) `selectPromptStrategy()` にキーワード分岐を追加

### Step 5: Summaryビュー

- [ ] `src/ui/views/Summary{Cat}.js` を作成（[テンプレート](#9-4-summaryビューテンプレート)参照）
- [ ] `renderExplanationContent()` でカテゴリの概要HTMLを定義
- [ ] `LearningPageTemplate()` に正しいパラメータを渡す
- [ ] `aiQuizGenerator` の `context` が `geminiService.js` のキーワードと一致するか確認

### Step 6: UI接続

- [ ] `src/ui/router.js` にインポート・ルートを追加
- [ ] `src/ui/views/Home.js` にカテゴリカードを追加（アイコン画像も準備）
- [ ] `src/ui/views/CategorySelection.js` のチャレンジボタン分岐に追加
- [ ] `src/assets/images/icon-{cat}.png` アイコン画像を配置

### Step 7: 動作確認

- [ ] ホーム画面にカードが表示される
- [ ] カテゴリ選択画面でレッスン一覧が表示される
- [ ] 各レッスンの説明とクイズが正常に動作する
- [ ] エキスパートチャレンジ（通常モード）が動作する
- [ ] エキスパートチャレンジ（AIモード）が動作する
- [ ] ストリーク記録が localStorage に保存される

---

## 8. 既存カテゴリへのレッスン追加チェックリスト

既存カテゴリにトピックを追加するだけの場合（UIの変更は最小限）。

- [ ] `src/logic/curriculum/{cat}/{newTopic}.js` を作成
- [ ] `src/logic/curriculum/index.js` にインポート追加、`topics` 配列に追加
- [ ] `src/logic/curriculum/{cat}/quizGenerator.js` に新トピックのインポート・allTopics配列への追加（プール方式の場合）
- [ ] Summaryビューの `renderExplanationContent()` に新トピックのカードHTML追加
- [ ] AIプロンプト (`src/logic/gemini/prompts/{cat}.js`) の `topics` 配列に新トピック名を追加
- [ ] 動作確認

---

## 9. コピー用テンプレート集

### 9-1. レッスンファイルテンプレート

```javascript
export const newTopic = {
  id: '{category-prefix}-{topic-name}',
  isEnabled: true,
  title: 'トピックタイトル',
  description: 'トピックの簡潔な説明（1〜2文）。',
  explanation: `
    <div class="explanation-section">
      <p>このレッスンでは〇〇を学びます。</p>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">基本ルール</h3>

      <div class="concept-box">
        <h4>📝 コンセプト名</h4>
        <p>説明テキスト</p>
        <div class="example-grid">
          <div class="example-item"><strong>Example 1.</strong><br>（日本語訳1）</div>
          <div class="example-item"><strong>Example 2.</strong><br>（日本語訳2）</div>
          <div class="example-item"><strong>Example 3.</strong><br>（日本語訳3）</div>
        </div>
        <p style="margin-top: 1rem;"><strong>💡 ポイント：</strong>重要な補足説明</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>

      <div class="example-box">
        <p class="example-sentence">The cat sits on the mat.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> The cat <span class="tag v-tag">V</span> sits on the mat.</p>
        <p class="example-translation">猫がマットの上に座っている。</p>
        <p class="example-note">sitsは三人称単数現在形です。</p>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">覚えておくべきポイント</h3>
      <ul class="check-list">
        <li>✓ ポイント1</li>
        <li>✓ ポイント2</li>
        <li>✓ ポイント3</li>
      </ul>
    </div>
  `,
  examples: [
    'Example sentence 1.',
    'Example sentence 2.',
    'Example sentence 3.',
    'Example sentence 4.',
    'Example sentence 5.'
  ],
  quiz: [
    {
      question: '問題文（日本語）',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      answer: '選択肢B',
      explanation: '選択肢Bが正解である理由。他の選択肢が不正解である理由も説明します。'
    },
    {
      question: '2問目の問題文',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      answer: '選択肢A',
      explanation: '解説テキスト。'
    },
    {
      question: '3問目の問題文',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      answer: '選択肢D',
      explanation: '解説テキスト。'
    },
    {
      question: '4問目の問題文',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      answer: '選択肢C',
      explanation: '解説テキスト。'
    },
    // 推奨: 合計10問
  ]
};
```

### 9-2. クイズジェネレーターテンプレート

```javascript
import { topicA } from './topicA.js';
import { topicB } from './topicB.js';
// 全トピックをインポート

const allTopics = [topicA, topicB];

/**
 * カテゴリのクイズジェネレーター
 * エキスパートチャレンジ用に全レッスンから問題をプールして出題する。
 * @param {number} count - 出題数（デフォルト100）
 * @returns {Array<Object>} クイズ問題の配列
 */
export function generateQuiz(count = 100) {
  const allQuestions = [];

  for (const topic of allTopics) {
    if (topic.quiz && Array.isArray(topic.quiz)) {
      for (const q of topic.quiz) {
        allQuestions.push({
          ...q,
          topicId: topic.id,
          topicTitle: topic.title,
        });
      }
    }
  }

  // Fisher-Yatesシャッフル
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  const result = [];
  while (result.length < count) {
    const remaining = count - result.length;
    result.push(...allQuestions.slice(0, Math.min(remaining, allQuestions.length)));
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
  }

  return result;
}
```

### 9-3. AIプロンプトテンプレート

```javascript
import { getCommonInstructions } from './common.js';

export const generatePrompt = (level) => {
  const commonInstructions = getCommonInstructions();
  const topics = [
    'トピック1の説明',
    'トピック2の説明',
    'トピック3の説明',
    'トピック4の説明'
  ];

  return `
英語の「カテゴリ名 (${topics.join(', ')})」に関するクイズを5問生成してください。
対象レベル: ${level}/10.

${commonInstructions}

### 【このカテゴリ専用の絶対命令】
- ${topics.join('、')}からバランスよく出題してください。
- このカテゴリ特有の間違いやすいポイント（例: 〇〇と△△の混同）を出題に含めてください。
- \`sentence\` フィールドには、必ず「____」を含む問題文、または分析対象の英文を記述してください。絶対に空にしないでください。
- \`explanation\` は日本の学生が理解できるよう、丁寧な日本語で「文法的なルール」を添えて書いてください。
`;
};
```

### 9-4. Summaryビューテンプレート

```javascript
import { generateQuiz as generateCategoryQuiz } from '../../logic/curriculum/{cat}/quizGenerator.js';
import { generateAIQuestion } from '../../logic/geminiService.js';
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';
import { curriculum } from '../../logic/curriculum.js';

export const SummaryNewCategory = () => {
  const renderExplanationContent = () => {
    return `
      <div class="summary-header">
        <h2 class="section-title">✨ カテゴリ名 完全攻略</h2>
        <p class="summary-intro">概要説明テキスト。</p>
      </div>

      <div class="patterns-grid">
        <div class="pattern-explanation-card glass">
          <div class="pattern-header">
            <span class="pattern-badge">トピック 1</span>
            <h3>トピック1の名前</h3>
          </div>
          <p class="pattern-desc"><strong>見出し</strong><br>説明テキスト</p>
          <div class="pattern-notes">
            <div class="example-box">
              <p class="example-sentence">Example sentence.</p>
              <p class="example-translation">日本語訳</p>
            </div>
            <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(255, 255, 255, 0.05); border-radius: 0.5rem;">
              <p style="font-size: 0.9rem; margin: 0;"><strong>注意:</strong> 注意点テキスト</p>
            </div>
          </div>
        </div>

        <!-- トピック数だけカードを繰り返す -->
      </div>
    `;
  };

  return LearningPageTemplate({
    title: 'カテゴリ名 エキスパートチャレンジ',
    subtitle: 'サブタイトルテキスト',
    storageKey: '{camelCase}BestStreak',
    renderExplanationContent,
    generateQuiz: (level) => generateCategoryQuiz(level),
    aiQuizGenerator: (level) => generateAIQuestion(level, '{context keyword}'),
    backLink: '#/',
    topics: curriculum.find(c => c.id === '{cat-id}')?.topics || []
  });
};
```

---

## 10. スタイリング・CSSクラス一覧

### レッスン説明 (`explanation`) で使用するクラス

| クラス名 | 用途 |
|---------|------|
| `explanation-section` | 全体のコンテナ |
| `section-title` | セクション見出し（`<h3>` に適用） |
| `diagram-container` | 図解コンテナ |
| `concept-box` | コンセプトボックス（背景付きの説明領域） |
| `example-box` | 例文ボックス（枠付き） |
| `example-grid` | 例文のグリッドレイアウト |
| `example-item` | グリッド内の各項目 |
| `example-sentence` | 英語の例文テキスト |
| `example-breakdown` | 文の構造分解 |
| `example-translation` | 日本語訳 |
| `example-note` | 注釈・補足説明 |
| `check-list` | チェックリスト（`<ul>` に適用） |

### 文法要素タグ

```html
<span class="tag s-tag">S</span>  <!-- 主語 (Subject) -->
<span class="tag v-tag">V</span>  <!-- 動詞 (Verb) -->
<span class="tag o-tag">O</span>  <!-- 目的語 (Object) -->
<span class="tag c-tag">C</span>  <!-- 補語 (Complement) -->
<span class="tag m-tag">M</span>  <!-- 修飾語 (Modifier) -->
```

### Summaryビュー (`renderExplanationContent`) で使用するクラス

| クラス名 | 用途 |
|---------|------|
| `summary-header` | ヘッダー領域 |
| `summary-intro` | 概要説明テキスト |
| `patterns-grid` | トピックカードのグリッド |
| `pattern-explanation-card` | 個別トピックのカード |
| `pattern-header` | カードヘッダー（バッジ + タイトル） |
| `pattern-badge` | トピック番号バッジ |
| `pattern-desc` | カードの説明テキスト |
| `pattern-notes` | カードの補足領域 |

---

## 11. ID命名規則一覧

| カテゴリ | プレフィックス | 例 |
|---------|-------------|-----|
| 5つの文型 | `sentence-pattern-{N}-{type}` | `sentence-pattern-1-sv` |
| 時制 | `tense-{name}` | `tense-present-simple` |
| 助動詞 | `aux-{name}` | `aux-can-could` |
| 受動態 | `passive-{name}` | `passive-basics` |
| 品詞 | `pos-{name}` | `pos-noun` |
| 色々な表現 | `expr-{name}` | `expr-imperative` |
| 疑問詞 | `qw-{name}` | `qw-what-which` |

新カテゴリを追加する場合は、短い一意なプレフィックスを定義してください。

---

## 12. コミット規約

### プレフィックス

| プレフィックス | 用途 | 例 |
|------------|------|-----|
| `feat` | 新機能 | `feat: 関係代名詞カテゴリを追加` |
| `fix` | バグ修正 | `fix: クイズの選択肢表示順を修正` |
| `docs` | ドキュメント | `docs: LESSON_STRUCTUREガイドを更新` |
| `style` | コード整形 | `style: インデントを修正` |
| `refactor` | リファクタリング | `refactor: quizGeneratorの共通処理を抽出` |
| `ui` | UI変更 | `ui: カテゴリカードのホバー効果を改善` |
| `chore` | ツール・設定 | `chore: 依存関係を更新` |

### バージョニング

- **x (メジャー)**: 大規模な構造変更
- **y (マイナー)**: 新規カテゴリの追加
- **z (パッチ)**: 既存カテゴリへのレッスン追加、バグ修正、UI調整

---

**最終更新日**: 2026-03-19
**バージョン**: 2.0.0
