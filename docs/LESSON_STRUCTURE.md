# レッスン構成ガイド - Lesson Structure Guide

このドキュメントは、English Grammar Mastery Appに新しいレッスンを追加する際の包括的なガイドです。既存のレッスンと同じ構造を保つため、このドキュメントを参照してください。

---

## 📁 ディレクトリ構造

レッスンファイルは以下のディレクトリに配置されています：

```
src/logic/curriculum/
├── index.js                    # カリキュラム全体のエントリーポイント
├── partsOfSpeech/              # 品詞マスターカテゴリ
│   ├── noun.js                 # 名詞
│   ├── verb.js                 # 動詞
│   ├── adjective.js            # 形容詞
│   ├── adverb.js               # 副詞
│   ├── preposition.js          # 前置詞
│   ├── pronoun.js              # 代名詞
│   ├── conjunction.js          # 接続詞
│   ├── interjection.js         # 間投詞
│   └── quizGenerator.js        # クイズ生成ユーティリティ
└── sentencePatterns/           # 文型カテゴリ
    ├── sv.js                   # 第1文型
    ├── svc.js                  # 第2文型
    ├── svo.js                  # 第3文型
    ├── svoo.js                 # 第4文型
    ├── svoc.js                 # 第5文型
    └── quizGenerator.js        # クイズ生成ユーティリティ
```

---

## 📝 レッスンファイルの必須構造

各レッスンファイルは以下のフィールドを持つオブジェクトをエクスポートする必要があります：

### 必須フィールド一覧

| フィールド | 型 | 説明 | 必須 |
|----------|-----|------|------|
| `id` | String | レッスンの一意な識別子 | ✅ |
| `isEnabled` | Boolean | レッスンの有効/無効状態 | ✅ |
| `title` | String | レッスンのタイトル（日本語+英語） | ✅ |
| `description` | String | レッスンの簡潔な説明 | ✅ |
| `explanation` | String (HTML) | 詳細な説明（HTMLテンプレートリテラル） | ✅ |
| `examples` | Array<String> | 例文のリスト | ✅ |
| `quiz` | Array<Object> | クイズ問題の配列 | ✅ |

---

## 🏗️ フィールド詳細仕様

### 1. `id` (識別子)

- **形式**: `'category-topic'` または `'category-pattern-topic'`
- **命名規則**:
  - 品詞: `'pos-{品詞名}'` 例: `'pos-noun'`, `'pos-verb'`
  - 文型: `'sentence-pattern-{番号}-{パターン}'` 例: `'sentence-pattern-1-sv'`
- **必須条件**: アプリ全体で一意である必要があります

```javascript
id: 'pos-noun',  // 品詞の例
id: 'sentence-pattern-1-sv',  // 文型の例
```

### 2. `isEnabled` (有効化フラグ)

- **型**: `Boolean`
- **用途**: レッスンの表示/非表示を制御
- **デフォルト値**: `true`

```javascript
isEnabled: true,  // レッスンを表示
```

### 3. `title` (タイトル)

- **形式**: `'日本語タイトル (English Title)'`
- **推奨**: 簡潔で理解しやすい表現を使用

```javascript
title: '名詞 (Noun)',
title: '第1文型 (SV) - Subject + Verb',
```

### 4. `description` (簡潔な説明)

- **長さ**: 1〜2文程度
- **内容**: レッスンの核心を簡潔に説明

```javascript
description: '人、物、場所、概念などの名前を表す言葉です。',
description: '主語と動詞だけで完結する文型。目的語も補語もない構造です。',
```

### 5. `explanation` (詳細説明 - HTML)

HTMLテンプレートリテラルを使用した詳細な学習コンテンツです。

#### 推奨される構造:

```javascript
explanation: `
  <div class="explanation-section">
    <p>導入部分：レッスンの概要</p>
    
    <div class="diagram-container">
      <!-- 図解・ダイアグラム -->
    </div>

    <h3 class="section-title">セクションタイトル</h3>
    
    <div class="concept-box">
      <h4>コンセプト見出し</h4>
      <p>説明文</p>
      <div class="example-grid">
        <!-- 例の表示 -->
      </div>
    </div>

    <div class="example-box">
      <p class="example-sentence">例文</p>
      <p class="example-breakdown">文の分解</p>
      <p class="example-translation">日本語訳</p>
      <p class="example-note">注釈</p>
    </div>

    <h3 class="section-title">覚えておくべきポイント</h3>
    <ul class="check-list">
      <li>✓ ポイント1</li>
      <li>✓ ポイント2</li>
    </ul>
  </div>
`,
```

#### 使用可能なCSSクラス:

| クラス名 | 用途 |
|---------|------|
| `explanation-section` | 全体のコンテナ |
| `section-title` | セクション見出し |
| `diagram-container` | 図解コンテナ |
| `diagram-box` | 図解のボックス要素 |
| `diagram-arrow` | 矢印や接続要素 |
| `diagram-operator` | 演算子（例: `=`） |
| `diagram-example` | 図解の例文 |
| `concept-box` | コンセプトボックス |
| `example-box` | 例文ボックス |
| `example-grid` | グリッドレイアウト |
| `example-item` | グリッド内の項目 |
| `example-sentence` | 英語例文 |
| `example-breakdown` | 文の構造分解 |
| `example-translation` | 日本語訳 |
| `example-note` | 注釈・補足 |
| `check-list` | チェックリスト |
| `tag`, `s-tag`, `v-tag`, `c-tag`, `o-tag`, `m-tag` | 品詞/要素タグ |

### 6. `examples` (例文リスト)

- **型**: `Array<String>`
- **推奨数**: 5〜7個
- **内容**: レッスンで学んだ内容を示す簡潔な例文

```javascript
examples: [
  'apple',
  'Tokyo',
  'happiness',
  'water',
  'student'
],
```

### 7. `quiz` (クイズ問題配列)

各クイズ問題は以下の構造を持つオブジェクトです：

#### クイズ問題オブジェクトの構造:

| フィールド | 型 | 説明 | 必須 |
|----------|-----|------|------|
| `question` | String | 問題文（日本語） | ✅ |
| `options` | Array<String> | 選択肢（4つ推奨） | ✅ |
| `answer` | String | 正解（optionsの中の1つと完全一致） | ✅ |
| `explanation` | String | 解説（日本語） | ✅ |

#### クイズ問題の例:

```javascript
quiz: [
  {
    question: '次のうち、名詞はどれですか？',
    options: ['run', 'happy', 'apple', 'quickly'],
    answer: 'apple',
    explanation: '「apple（りんご）」は物の名前を表す名詞です。run（走る）は動詞、happy（幸せな）は形容詞、quickly（速く）は副詞です。'
  },
  {
    question: '不可算名詞（数えられない名詞）はどれですか？',
    options: ['book', 'water', 'pen', 'dog'],
    answer: 'water',
    explanation: '「water（水）」は液体で数えられない不可算名詞です。book、pen、dogは形のあるものなので可算名詞です。'
  },
  // ... 8〜10問程度推奨
]
```

#### クイズ作成のベストプラクティス:

1. **問題数**: 1レッスンあたり4〜10問（推奨: 10問）
2. **選択肢**: 各問題に4つの選択肢を用意
3. **難易度**: 基礎→応用の順に配置
4. **解説**: 正解だけでなく、他の選択肢が不正解である理由も説明
5. **答えの形式**: `answer`は`options`配列内の文字列と**完全一致**する必要があります

---

## � 100問クイズジェネレーター (オプション)

カテゴリ全体の理解度をテストする100問クイズを実装できます。これは**カテゴリごとに1つ**作成します。

### quizGenerator.jsの配置

カテゴリディレクトリ内に`quizGenerator.js`を作成します：

```
src/logic/curriculum/
└── yourCategory/
    ├── lesson1.js
    ├── lesson2.js
    ├── lesson3.js
    └── quizGenerator.js  ← ここに配置
```

### quizGenerator.jsの構造

クイズジェネレーターは、レベルに応じて動的に問題を生成する関数をエクスポートします：

```javascript
/**
 * カテゴリ用の100問クイズジェネレーター
 * @param {number} level - 問題のレベル (1-10)
 * @param {boolean} isAIMode - AIモード（最高難易度）
 * @returns {Object} 問題オブジェクト {question, options, answer, explanation (optional)}
 */
export const generateYourCategoryQuiz = (level = 1, isAIMode = false) => {
  // 問題プール、難易度ロジック、ランダム生成を実装
  // ...
  
  return {
    question: '問題文',
    options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    answer: '正解の選択肢',
    explanation: '解説（オプション）'
  };
};
```

### 実装パターン

#### パターン1: テンプレート方式（品詞マスター方式）

文のテンプレートと単語プールを使って問題を生成します。

**参考**: [`src/logic/curriculum/partsOfSpeech/quizGenerator.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/partsOfSpeech/quizGenerator.js)

```javascript
export const generatePOSQuiz = (level = 1) => {
  // 1. 文のテンプレートを定義
  const templates = [
    {
      structure: '{Pronoun} {Verb} {Adjective} {Noun}.',
      words: {
        Pronoun: ['I', 'You', 'He'],
        Verb: ['have', 'want', 'like'],
        Adjective: ['red', 'big', 'new'],
        Noun: ['apples', 'cars', 'books']
      }
    }
    // ... 他のテンプレート
  ];
  
  // 2. ランダムにテンプレートを選択
  const template = templates[Math.floor(Math.random() * templates.length)];
  
  // 3. テンプレートから文を生成
  let sentence = generateSentence(template);
  
  // 4. ターゲット単語を選び、その品詞を問う
  const targetWord = selectRandomWord(sentence);
  
  return {
    question: `次の文中の "${targetWord}" の品詞はどれですか？\n\n"${sentence}"`,
    options: ['名詞', '動詞', '形容詞', '副詞'],
    answer: '名詞',
    explanation: `"${targetWord}" はこの文では名詞として使われています。`
  };
};
```

#### パターン2: データプール方式（文型マスター方式）

レベルごとに用意したデータプールから問題を生成します。

**参考**: [`src/logic/curriculum/sentencePatterns/quizGenerator.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/sentencePatterns/quizGenerator.js)

```javascript
export const generateSentencePatternQuiz = (level = 1, isAIMode = false) => {
  const patterns = ['SV', 'SVC', 'SVO', 'SVOO', 'SVOC'];
  let targetPattern;
  let complexity = 1; // 1: Basic, 2: Intermediate, 3: Advanced
  
  // レベルに応じて難易度とパターンを選択
  if (level <= 5) {
    targetPattern = patterns[level - 1]; // レベル1-5で各パターン
    complexity = 1;
  } else {
    targetPattern = patterns[Math.floor(Math.random() * patterns.length)];
    complexity = level <= 7 ? 1 : (level <= 9 ? 2 : 3);
  }
  
  // 難易度に応じたデータプールを用意
  const subjectsBasic = ['I', 'You', 'He', 'She'];
  const subjectsAdvanced = ['The sudden noise', 'His explanation'];
  
  const subjects = complexity === 1 ? subjectsBasic : 
                   [...subjectsBasic, ...subjectsAdvanced];
  
  // 文を生成
  const question = generateSentenceByPattern(targetPattern, subjects);
  
  return {
    question: `次の英文の文型を答えなさい：\n\n"${question}"`,
    options: patterns,
    answer: targetPattern
  };
};
```

### 難易度システムの実装

100問クイズは通常、レベル1-10の難易度で問題を生成します：

- **レベル1-5**: 各レッスンの基礎内容（レベル1 = レッスン1の内容）
- **レベル6-7**: 混合問題、基礎的な難易度
- **レベル8-9**: 混合問題、中級の難易度
- **レベル10**: 混合問題、上級の難易度
- **AIモード**: 最高難易度、全レッスンの内容をランダムに出題

### 実装のベストプラクティス

1. **ランダム性**: 同じレベルでも毎回異なる問題が出題されるようにする
2. **難易度の漸進性**: レベルが上がるにつれて徐々に難しくなるようにする
3. **バリエーション**: 十分な問題のバリエーションを用意する
4. **文法の正確性**: 生成される文が文法的に正しいことを保証する
5. **解説の生成**: 可能であれば、答えの解説も動的に生成する

### クイズジェネレーターのテスト

```javascript
// テスト例
for (let i = 1; i <= 10; i++) {
  const quiz = generateYourCategoryQuiz(i);
  console.log(`Level ${i}:`, quiz.question);
}
```

### 参考実装

詳細な実装例は以下を参照してください：

- **品詞マスター**: [`partsOfSpeech/quizGenerator.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/partsOfSpeech/quizGenerator.js) - テンプレート方式
- **文型マスター**: [`sentencePatterns/quizGenerator.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/sentencePatterns/quizGenerator.js) - データプール方式



## �🎯 新規レッスン追加の手順

### ステップ1: カテゴリを決定

新しいレッスンがどのカテゴリに属するか決定します：
- 既存カテゴリ（品詞、文型）
- 新規カテゴリ（例: 時制、関係詞など）

### ステップ2: ファイルを作成

適切なディレクトリに新しいファイルを作成します：

```bash
# 品詞カテゴリの場合
src/logic/curriculum/partsOfSpeech/newLesson.js

# 文型カテゴリの場合
src/logic/curriculum/sentencePatterns/newPattern.js

# 新規カテゴリの場合
src/logic/curriculum/newCategory/newLesson.js
```

### ステップ3: レッスンオブジェクトを定義

テンプレートを使用してレッスンを作成します（後述の「テンプレート」セクション参照）。

### ステップ4: index.jsに登録

`src/logic/curriculum/index.js`を更新して新しいレッスンを登録します：

```javascript
// 1. インポート
import { newLesson } from './category/newLesson.js';

// 2. カリキュラム配列に追加
export const curriculum = [
  {
    id: 'existing-category',
    title: 'カテゴリタイトル',
    topics: [existingLesson1, existingLesson2, newLesson] // 追加
  },
  // または新規カテゴリ
  {
    id: 'new-category',
    title: '新しいカテゴリ',
    topics: [newLesson]
  }
];
```

### ステップ5: テスト

- レッスンが正しく表示されるか確認
- クイズが正常に動作するか確認
- 説明文のHTMLレンダリングを確認

---

## 📋 テンプレート

### 基本テンプレート（コピー&ペーストして使用）

```javascript
export const lessonName = {
  id: 'category-lesson-name',
  isEnabled: true,
  title: '日本語タイトル (English Title)',
  description: 'レッスンの簡潔な説明をここに書きます。',
  explanation: `
    <div class="explanation-section">
      <p>レッスンの導入部分をここに書きます。</p>
      
      <div class="diagram-container">
        <div class="diagram-box" data-label="ラベル">内容</div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">セクションタイトル</h3>
      
      <div class="concept-box">
        <h4>コンセプト見出し</h4>
        <p>説明文</p>
        <div class="example-grid">
          <div class="example-item"><strong>例1</strong> 説明</div>
          <div class="example-item"><strong>例2</strong> 説明</div>
          <div class="example-item"><strong>例3</strong> 説明</div>
        </div>
      </div>

      <h3 class="section-title" style="font-size: 1.5rem; margin-top: 2rem;">詳細な例文と解説</h3>
      
      <div class="example-box">
        <p class="example-sentence">Example sentence here.</p>
        <p class="example-breakdown"><span class="tag s-tag">S</span> Subject <span class="tag v-tag">V</span> Verb</p>
        <p class="example-translation">日本語訳</p>
        <p class="example-note">補足説明</p>
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
    '例文1',
    '例文2',
    '例文3',
    '例文4',
    '例文5'
  ],
  quiz: [
    {
      question: '問題文をここに書きます',
      options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      answer: '選択肢2',
      explanation: '正解の理由と、他の選択肢が不正解である理由を説明します。'
    },
    {
      question: '2問目の問題文',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      answer: '選択肢C',
      explanation: '解説文'
    },
    // ... 最低4問、推奨10問
  ]
};
```

---

## 🎨 スタイリングのヒント

### 絵文字の活用

視覚的な理解を助けるため、適切な絵文字を使用してください：

- 📚 本、学習
- ✅ 正しい、重要
- ❌ 間違い、注意
- 🔄 変化、変換
- 🏃 動作
- 🧘 状態
- ➡️ 進行、矢印
- 💡 ヒント、アイデア

### タグの使い方（文型用）

```html
<span class="tag s-tag">S</span>  <!-- 主語 (Subject) -->
<span class="tag v-tag">V</span>  <!-- 動詞 (Verb) -->
<span class="tag o-tag">O</span>  <!-- 目的語 (Object) -->
<span class="tag c-tag">C</span>  <!-- 補語 (Complement) -->
<span class="tag m-tag">M</span>  <!-- 修飾語 (Modifier) -->
```

---

## ✅ チェックリスト

新しいレッスンを追加する前に、以下を確認してください：

- [ ] 一意な`id`を設定しましたか？
- [ ] `title`と`description`は分かりやすいですか？
- [ ] `explanation`にHTMLの構造エラーはありませんか？
- [ ] クイズは最低4問ありますか？
- [ ] 各クイズ問題に4つの選択肢がありますか？
- [ ] `answer`は`options`配列の要素と完全一致していますか？
- [ ] すべてのクイズに`explanation`（解説）がありますか？
- [ ] `examples`配列に例文が5つ以上ありますか？
- [ ] `index.js`に新しいレッスンをインポート・登録しましたか？
- [ ] 実際にアプリで表示とクイズの動作を確認しましたか？

---

## 📚 参考例

### 品詞レッスンの例

参考: [`src/logic/curriculum/partsOfSpeech/noun.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/partsOfSpeech/noun.js)

特徴:
- 品詞の分類を視覚的に説明
- 豊富な例を`example-grid`で表示
- 絵文字を効果的に使用

### 文型レッスンの例

参考: 
- [`src/logic/curriculum/sentencePatterns/sv.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/sentencePatterns/sv.js)
- [`src/logic/curriculum/sentencePatterns/svc.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/sentencePatterns/svc.js)

特徴:
- 文型の構造を`diagram-container`で図解
- S, V, O, Cのタグを使った文の分解
- イコール関係（`=`）の視覚化

---

## 🚀 次のステップ

1. このドキュメントを保存してください
2. 新しいレッスンを追加する際は、常にこのガイドを参照してください
3. 既存のレッスンファイル（[`noun.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/partsOfSpeech/noun.js), [`verb.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/partsOfSpeech/verb.js), [`sv.js`](file:///c:/new/English-Grammar-Mastery-App-1/src/logic/curriculum/sentencePatterns/sv.js)など）を参考にしてください
4. 不明な点があれば、既存のコードを確認するか、チームに相談してください

---

**最終更新日**: 2025-12-10  
**バージョン**: 1.0.0
