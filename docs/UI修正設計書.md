# UI修正設計書 — Quiet Mastery

## 概要

本設計書は `UI修正案.md` に基づき、アプリ全体のデザインを **「静かな教材UI + 明確な演習UI」** に統一するための具体的な実装計画を定義する。

### コンセプト

| 画面モード | 役割 | 温度 |
|-----------|------|------|
| Home / Category | ナビゲーションUI | 暗背景・控えめ |
| Lesson | 教材UI | **白背景・静か** |
| Quiz | テストUI | **白背景・明快** |
| Summary / Expert / AI | ご褒美UI | 演出解禁 |

### 対象ファイル（優先順）

| # | ファイル | 役割 |
|---|---------|------|
| 1 | `index.html` | フォント読み込み変更 |
| 2 | `src/styles/main.css` | デザイントークン・全クラス再定義 |
| 3 | `src/ui/views/Home.js` | ホーム画面リストラクチャ |
| 4 | `src/ui/views/CategorySelection.js` | カテゴリ画面リストラクチャ |
| 5 | `src/ui/views/Lesson.js` | レッスン画面を教材UIへ |
| 6 | `src/ui/views/Quiz.js` | クイズ画面を演習UIへ |

---

## Phase 1: デザイン基盤の再構築

### 1-1. フォント変更

#### 変更内容: `index.html`

**現状:**
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
```

**変更後:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**理由:** `Outfit` は英語見出しには映えるが、日本語中心の教材本文には合わない。`Noto Sans JP` + `Inter` の組み合わせで、教科書の安定感を出す。

### 1-2. CSSカスタムプロパティの全面差し替え

#### 変更内容: `src/styles/main.css` `:root` セクション

**現状（10変数）:**
```css
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #ec4899;
  --background: #0f172a;
  --surface: #1e293b;
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --success: #22c55e;
  --error: #ef4444;
  --font-family: 'Outfit', sans-serif;
}
```

**変更後（完全版トークン）:**

UI修正案.mdに定義された全トークンを `:root` に設置する。変数名を完全に新規体系へ移行する。

```css
:root {
  /* === COLOR: Base === */
  --color-bg-app: #0b1020;
  --color-bg-subtle: #12182b;
  --color-surface-1: #ffffff;
  --color-surface-2: #f6f8fc;
  --color-surface-3: #edf2f7;
  --color-surface-dark: #182033;

  /* === COLOR: Text === */
  --color-text-primary: #162033;
  --color-text-secondary: #4b5567;
  --color-text-tertiary: #7b8494;
  --color-text-on-dark: #f8fbff;
  --color-text-on-dark-muted: #b4bfd1;

  /* === COLOR: Brand === */
  --color-accent: #4f46e5;
  --color-accent-hover: #4338ca;
  --color-accent-soft: #e7e9ff;
  --color-accent-soft-2: #f1f3ff;

  /* === COLOR: Semantic === */
  --color-success: #15803d;
  --color-success-soft: #e8f7ed;
  --color-warning: #b45309;
  --color-warning-soft: #fff4e5;
  --color-error: #b91c1c;
  --color-error-soft: #fdecec;
  --color-info: #2563eb;
  --color-info-soft: #eaf2ff;

  /* === COLOR: Borders === */
  --color-border-default: #d9e0ea;
  --color-border-strong: #b8c2d1;
  --color-border-subtle: #e9edf4;
  --color-border-dark: rgba(255,255,255,0.12);

  /* === COLOR: Challenge専用 === */
  --color-challenge-bg: #101827;
  --color-challenge-surface: rgba(30, 41, 59, 0.78);
  --color-challenge-glow: rgba(79, 70, 229, 0.28);
  --color-ai: #059669;
  --color-ai-soft: rgba(5, 150, 105, 0.12);

  /* === TYPOGRAPHY === */
  --font-sans-jp: "Noto Sans JP", "Hiragino Sans", "Yu Gothic UI", "Meiryo", system-ui, sans-serif;
  --font-sans-en: "Inter", var(--font-sans-jp);
  --font-family-base: var(--font-sans-en);
  --font-family-heading: var(--font-sans-en);

  --font-size-hero: clamp(2rem, 3vw, 2.75rem);
  --font-size-h1: clamp(1.75rem, 2.4vw, 2.25rem);
  --font-size-h2: 1.5rem;
  --font-size-h3: 1.25rem;
  --font-size-body-lg: 1.0625rem;
  --font-size-body: 1rem;
  --font-size-body-sm: 0.9375rem;
  --font-size-caption: 0.8125rem;

  --line-height-tight: 1.35;
  --line-height-body: 1.8;
  --line-height-loose: 1.95;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  /* === SPACING === */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* === RADIUS === */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.25rem;
  --radius-2xl: 1.5rem;
  --radius-pill: 999px;

  /* === SHADOW === */
  --shadow-xs: 0 1px 2px rgba(15, 23, 42, 0.04);
  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 16px 40px rgba(15, 23, 42, 0.12);
  --shadow-focus: 0 0 0 4px rgba(79, 70, 229, 0.18);
  --shadow-challenge: 0 0 0 1px rgba(99,102,241,0.18), 0 12px 32px rgba(79,70,229,0.22);

  /* === LAYOUT === */
  --container-app: 1200px;
  --container-reading: 760px;
  --container-quiz: 760px;
  --container-summary: 1000px;
  --header-height: 64px;
  --progress-height: 8px;

  /* === MOTION === */
  --duration-fast: 120ms;
  --duration-base: 180ms;
  --duration-slow: 280ms;
  --ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);

  /* === 後方互換（段階的に削除予定） === */
  --primary: var(--color-accent);
  --primary-dark: var(--color-accent-hover);
  --secondary: #ec4899;
  --background: var(--color-bg-app);
  --surface: var(--color-surface-dark);
  --text: var(--color-text-on-dark);
  --text-muted: var(--color-text-on-dark-muted);
  --success: var(--color-success);
  --error: var(--color-error);
  --font-family: var(--font-family-base);
}
```

**後方互換セクションの意図:** Summary系やChallenge系の画面（Phase 5まで未修正）で旧変数名を参照している箇所が壊れないようにする。Phase 5完了後にこの互換セクションは削除する。

### 1-3. グローバル基底スタイルの変更

#### 変更内容: `src/styles/main.css` body / 全体ルール

**現状:** `body` に `--background` (暗色)、`color: --text` (白) を適用。全ページが暗背景。

**変更後:**
```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-text-on-dark);
  background: var(--color-bg-app);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**ポイント:** body自体は暗色のまま（Home/Categoryは暗背景で良い）。Lesson/Quizは各コンポーネント内で白背景を適用する。

### 1-4. ボタン体系の統一（4種 + 派生）

#### 変更内容: `src/styles/main.css` ボタンセクション

**現状のボタンクラス（7種）:**
- `.btn-primary` — グラデーション背景
- `.btn-secondary` — surface背景
- `.btn-unified` — primary→secondary グラデーション
- `.btn-challenge` — オレンジグラデーション
- `.btn-ai` — 緑グラデーション＋ネオン
- `.btn-accent` — amberグラデーション
- `.btn-ghost` — 透明背景

**変更後の体系（4種 + Challenge/AI派生）:**

```css
/* ベースボタン */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 44px;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-family-base);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-semibold);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-standard);
  text-decoration: none;
}

/* Primary — 主行動 */
.btn-primary {
  background: var(--color-accent);
  color: #fff;
  box-shadow: var(--shadow-sm);
}
.btn-primary:hover {
  background: var(--color-accent-hover);
}

/* Secondary — 準主行動 */
.btn-secondary {
  background: var(--color-surface-1);
  color: var(--color-text-primary);
  border-color: var(--color-border-default);
}
.btn-secondary:hover {
  background: var(--color-surface-2);
}

/* Ghost — 戻る/補助 */
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border-color: var(--color-border-default);
}
.btn-ghost:hover {
  background: var(--color-surface-2);
  color: var(--color-text-primary);
}

/* Danger — 破壊操作 */
.btn-danger {
  background: var(--color-error-soft);
  color: var(--color-error);
  border-color: rgba(185, 28, 28, 0.18);
}
```

**削除対象:**
- `.btn-unified` → `.btn-primary` に統合
- `.btn-accent` → `.btn-primary` に統合
- `.btn-challenge` → Summary/Challenge画面専用セクションに移動（Phase 5）
- `.btn-ai` → Summary/Challenge画面専用セクションに移動（Phase 5）

**JS側の対応:**
| ファイル | 現状 | 変更後 |
|---------|------|-------|
| `Home.js:216` | `btn btn-accent` | `btn btn-primary` |
| `Home.js:230` | `btn btn-primary` | `btn btn-primary`（変更なし）|
| `CategorySelection.js:61` | `btn btn-challenge` | `btn btn-primary`（通常画面のため）|
| `CategorySelection.js:150` | `btn btn-unified` | `btn btn-primary` |

### 1-5. カード体系の統一

#### 変更内容: `src/styles/main.css` カードセクション

**現状:** `.glass` + `.topic-card-refined` をすべての画面で使用。hover時にグロー発光。

**変更後:**

```css
/* 基本カード */
.card {
  background: var(--color-surface-1);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

/* インタラクティブカード（クリック可能） */
.card--interactive {
  transition: transform var(--duration-base) var(--ease-standard),
              box-shadow var(--duration-base) var(--ease-standard),
              border-color var(--duration-base) var(--ease-standard);
  cursor: pointer;
}
.card--interactive:hover {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

/* 注目カード（おすすめ等） */
.card--featured {
  background: linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%);
  border-color: #cfd7ff;
}

/* 完了済みカード */
.card--completed {
  background: #fbfefc;
  border-color: #cfe8d7;
}

/* Challenge専用カード（Summary/Expert画面のみ） */
.card--challenge {
  background: var(--color-challenge-surface);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: var(--shadow-challenge);
  color: var(--color-text-on-dark);
}
```

**通常学習画面からの `.glass` 撤去:**

| ファイル | 現状のclassName | 変更後 |
|---------|---------------|-------|
| `Home.js:153` | `glass topic-card-refined` | `card card--interactive` |
| `CategorySelection.js:85` | `glass topic-card-refined` | `card card--interactive` |
| `Lesson.js:6` | `glass` | `lesson-shell`（Phase 2で定義）|
| `Quiz.js:7` | `glass` | `quiz-shell`（Phase 3で定義）|

**注意:** `.glass` クラスと `.topic-card-refined` クラスの定義自体は **削除しない**。Summary/Challenge画面で引き続き使用するため。ただし、通常学習画面のJSからの参照を外す。

### 1-6. `.glass` の通常学習からの撤去

具体的に `.glass` を参照しているビューファイルと対応:

| ファイル | 行 | 対応 |
|---------|---|------|
| `Home.js:153` | `card.className = 'glass topic-card-refined'` | → `'card card--interactive'` |
| `CategorySelection.js:85` | `card.className = 'glass topic-card-refined'` | → `'card card--interactive'` |
| `Lesson.js:6` | `container.className = 'glass'` | → `'lesson-shell'` |
| `Quiz.js:7` | `container.className = 'glass'` | → `'quiz-shell'` |

Summary系ファイル（`Summary5Patterns.js` 等）は `.glass` を維持する。

---

## Phase 2: Lesson画面を教材UIに

### 2-1. CSS追加: `.lesson-shell` と関連クラス

#### 変更内容: `src/styles/main.css` に追加

```css
/* =============================
   LESSON — 教材UI
   ============================= */

.lesson-shell {
  max-width: var(--container-reading);
  margin: 0 auto;
  background: var(--color-surface-1);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-md);
  padding: var(--space-2xl);
}

.lesson-title {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-md);
}

.lesson-content {
  font-size: var(--font-size-body-lg);
  line-height: var(--line-height-loose);
  color: var(--color-text-primary);
}

.lesson-content h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-top: var(--space-2xl);
  margin-bottom: var(--space-sm);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--color-border-default);
}

.lesson-content ul,
.lesson-content ol {
  padding-left: var(--space-lg);
  margin-bottom: var(--space-md);
}

.lesson-content li {
  margin-bottom: var(--space-xs);
}

/* 重要ポイント（左線 + 薄色背景） */
.lesson-callout {
  background: var(--color-accent-soft-2);
  border-left: 4px solid var(--color-accent);
  padding: var(--space-md) var(--space-lg);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin: var(--space-lg) 0;
}

/* 例文ブロック */
.lesson-example {
  background: var(--color-surface-2);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-md) var(--space-lg);
  margin: var(--space-md) 0;
  font-size: var(--font-size-body-lg);
  font-weight: var(--font-weight-semibold);
}

/* よくあるミスブロック */
.lesson-mistake {
  background: var(--color-error-soft);
  border-left: 4px solid var(--color-error);
  padding: var(--space-md) var(--space-lg);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  margin: var(--space-lg) 0;
}

/* レッスン下部のアクション */
.lesson-actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
  flex-wrap: wrap;
}
```

### 2-2. Lesson.js のリストラクチャ

#### 変更内容: `src/ui/views/Lesson.js`

**現状の問題:**
1. `container.className = 'glass'` — 暗いグラスモーフィズム
2. `title.className = 'title'` — 白文字グラデーション（暗背景向け）
3. `h3.style.color = 'var(--secondary)'` — ピンク色（暗背景向け）
4. インラインスタイルが多い

**変更の方針:**
- コンテナを `lesson-shell` に変更（白背景の教材UI）
- タイトルを `lesson-title` に変更
- インラインスタイルをCSS側に移動
- `styleContent()` 内のピンク色を廃止（CSSの `.lesson-content h3` で制御）
- スクロール進捗バーの色を新トークンに対応

**具体的な変更箇所:**

```
行6:  container.className = 'glass'
  → container.className = 'lesson-shell'

行7-8: style.padding / style.maxWidth の削除
  → CSSの .lesson-shell で制御

行21: title.className = 'title'
  → title.className = 'lesson-title'

行22: title.style.fontSize = '2rem' の削除
  → CSSの .lesson-title で制御

行29-42: styleContent() 関数
  → 不要になる（CSSの .lesson-content h3, ul, ol で制御）
  → ただし完全削除ではなく、CSSで対応しきれない動的スタイルがあれば残す

行48-52: buttonContainer のインラインスタイル
  → className = 'lesson-actions' に置き換え

行56: backBtn.className = 'btn btn-ghost'
  → 変更なし（新体系に含まれる）

行66: quizBtn.className = 'btn btn-primary'
  → 変更なし（新体系に含まれる）
```

**スクロール進捗バーの対応:**
`.scroll-progress` のCSS定義を新トークンに合わせる:
```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--progress-height);
  background: var(--color-accent);
  z-index: 1000;
  transition: width var(--duration-fast) var(--ease-standard);
}
```

---

## Phase 3: Quiz画面を演習UIに

### 3-1. CSS追加: `.quiz-shell` と関連クラス

#### 変更内容: `src/styles/main.css` に追加

```css
/* =============================
   QUIZ — 演習UI
   ============================= */

.quiz-shell {
  max-width: var(--container-quiz);
  margin: 0 auto;
  background: var(--color-surface-1);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-md);
  padding: var(--space-2xl);
}

.quiz-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
  color: var(--color-text-secondary);
  font-size: var(--font-size-body-sm);
}

.quiz-question {
  font-size: 1.25rem;
  line-height: var(--line-height-loose);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xl);
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.quiz-option {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  padding: var(--space-lg);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  background: var(--color-surface-1);
  cursor: pointer;
  transition: border-color var(--duration-base) var(--ease-standard),
              box-shadow var(--duration-base) var(--ease-standard),
              background var(--duration-base) var(--ease-standard);
}

.quiz-option:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-sm);
  background: var(--color-accent-soft-2);
}

.quiz-option.is-selected {
  border-color: var(--color-accent);
  background: var(--color-accent-soft);
  box-shadow: var(--shadow-focus);
}

.quiz-option.is-correct {
  border-color: var(--color-success);
  background: var(--color-success-soft);
}

.quiz-option.is-wrong {
  border-color: var(--color-error);
  background: var(--color-error-soft);
}

.quiz-option.is-disabled {
  pointer-events: none;
  opacity: 0.7;
}

.quiz-explanation {
  margin-top: var(--space-lg);
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  background: var(--color-surface-2);
  border: 1px solid var(--color-border-subtle);
  line-height: var(--line-height-body);
  font-size: var(--font-size-body-sm);
}

.quiz-explanation--correct {
  background: var(--color-success-soft);
  border-color: var(--color-success);
  border-left: 4px solid var(--color-success);
}

.quiz-explanation--incorrect {
  background: var(--color-error-soft);
  border-color: var(--color-error);
  border-left: 4px solid var(--color-error);
}
```

### 3-2. Quiz.js のリストラクチャ

#### 変更内容: `src/ui/views/Quiz.js`

**現状の問題:**
1. `container.className = 'glass'` — 暗いグラスモーフィズム
2. 選択肢が `<label>` + `<input type="radio">` でインラインスタイル多数
3. 背景色が `var(--surface)` (暗色)
4. フィードバック表示がインラインスタイルで制御
5. 結果画面の `.quiz-result` 系CSSは暗背景前提

**変更の方針:**
- コンテナを `quiz-shell` に変更
- 選択肢をCSSクラスベースに移行（インラインスタイル廃止）
- 状態管理（選択・正解・不正解・無効化）をクラス切替に統一
- 解説ボックスをCSSクラスで制御
- 結果画面のスタイルを白背景対応に更新
- ボタンテキストを「回答する」→「この答えで決定」に変更

**具体的な変更箇所:**

```
行7:  container.className = 'glass'
  → container.className = 'quiz-shell'

行8-9: style.padding / style.maxWidth の削除
  → CSSの .quiz-shell で制御

行31: title.className = 'title'
  → title.className = 'quiz-title'（新CSSクラス、または既存レイアウト調整）

行174-177: questionNum のインラインスタイル
  → className = 'quiz-meta' に変更

行179-183: questionText のインラインスタイル
  → className = 'quiz-question' に変更

行185-186: optionsContainer
  → className = 'quiz-options' に変更

行190-225: 各option のインラインスタイル
  → <label> に className = 'quiz-option' を付与
  → 選択時: label.classList.add('is-selected') / remove('is-selected')
  → radio.onchange 内のスタイル直書きをクラス切替に変更

行234: submitBtn.textContent = '回答する'
  → 'この答えで決定'

行260-268: 正誤フィードバック
  → option-correct → is-correct
  → option-incorrect → is-wrong
  → option-disabled → is-disabled
  （CSSクラス名の変更）

行273-295: explanationBox のインラインスタイル
  → className = 'quiz-explanation quiz-explanation--correct' or '--incorrect'
```

**結果画面の対応:**

`.quiz-result`, `.quiz-result-score`, `.quiz-result-badge` などのCSSを白背景対応に更新:

```css
.quiz-result {
  text-align: center;
  padding: var(--space-2xl) 0;
}

.quiz-result-score {
  font-size: 3rem;
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text-primary);
}
.quiz-result-score.pass { color: var(--color-success); }
.quiz-result-score.fail { color: var(--color-error); }

.quiz-result-badge {
  display: inline-block;
  padding: var(--space-xs) var(--space-lg);
  border-radius: var(--radius-pill);
  font-weight: var(--font-weight-semibold);
  margin-top: var(--space-md);
}
.quiz-result-badge.pass {
  background: var(--color-success-soft);
  color: var(--color-success);
}
.quiz-result-badge.fail {
  background: var(--color-error-soft);
  color: var(--color-error);
}
```

---

## Phase 4: Home / Category の優先順位可視化

### 4-1. Home画面のレイアウト変更

#### 変更内容: `src/ui/views/Home.js`

**情報の順序（上から）:**
1. タイトル
2. 次のおすすめカード（Primary card）
3. 全体進捗
4. コースカテゴリ一覧

**現状の順序:** タイトル → 全体進捗 → おすすめ → コース一覧

**変更:** おすすめカードを全体進捗の前に移動（行72-93のrecCard生成を行57の直後に移動）

**カードの序列化:**

```
行153: card.className = 'glass topic-card-refined'
  → card.className = 'card card--interactive'
  → 完了済みの場合: card.classList.add('card--completed')
```

**おすすめカードの強調:**
```
行78: recCard.className = 'recommendation-card'
  → recCard.className = 'card card--featured'
  → 専用スタイル追加
```

**hoverグローの抑制:**
`.card--interactive:hover` では `box-shadow: var(--shadow-md)` + `transform: translateY(-1px)` のみ。旧来の `0 0 20px rgba(99, 102, 241, 0.4)` グローは削除。

**具体的なJS変更:**

| 行 | 現状 | 変更後 |
|----|------|-------|
| 48 | `home-container` | `home-container`（変更なし） |
| 54 | `title fancy-title` + インラインfontSize | `home-title`（新CSSクラス）|
| 62 | `overall-progress` | `overall-progress`（CSSは新トークンに対応）|
| 78 | `recommendation-card` | `card card--featured recommendation-card` |
| 153 | `glass topic-card-refined` | `card card--interactive` |
| 216 | `btn btn-accent` | `btn btn-primary` |

**Home用追加CSS:**

```css
.home-container {
  max-width: var(--container-app);
  margin: 0 auto;
  padding: var(--space-xl);
}

.home-title {
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-text-on-dark);
  margin-bottom: var(--space-xs);
}

.home-subtitle {
  font-size: var(--font-size-body-lg);
  color: var(--color-text-on-dark-muted);
  font-weight: var(--font-weight-medium);
}

.recommendation-card {
  padding: var(--space-lg) var(--space-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xl);
}

.overall-progress {
  background: var(--color-surface-dark);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.progress-bar-track {
  height: var(--progress-height);
  background: rgba(255,255,255,0.08);
  border-radius: var(--radius-pill);
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: var(--radius-pill);
  transition: width var(--duration-slow) var(--ease-standard);
}
```

### 4-2. CategorySelection画面の変更

#### 変更内容: `src/ui/views/CategorySelection.js`

**レッスンカードの状態分け:**

| 状態 | クラス | 見た目 |
|------|-------|-------|
| 未着手 | `card card--interactive` | 白背景 + 薄灰枠 |
| 途中 | `card card--interactive card--in-progress` | 青系の細い左線 |
| 完了 | `card card--interactive card--completed` | 緑チップ + 透明度少し下げ |
| おすすめ | 右上に `NEXT` バッジ | カード内に小さなラベル |

**追加CSS:**
```css
.card--in-progress {
  border-left: 3px solid var(--color-accent);
}

.card--completed {
  opacity: 0.85;
}
```

**具体的なJS変更:**

```
行85: card.className = 'glass topic-card-refined'
  → card.className = 'card card--interactive'
  → 完了時: card.classList.add('card--completed')
  → 途中時: card.classList.add('card--in-progress')

行122-140: status-badge のインラインスタイル
  → CSSクラスベースに移行

行150: startBtn.className = 'btn btn-unified'
  → 'btn btn-primary'

行61: challengeBtn.className = 'btn btn-challenge'
  → 'btn btn-primary'（通常画面のため）
```

**ステータス表示の改善:**

現状の「未クリア: X / クリア: Y」を以下に変更:
- 未着手 → 「未着手」
- 途中 → 「学習中（3/8問）」
- 完了 → 「完了 ✓」

---

## Phase 5: Summary / AI の演出分離

### 方針

Summary系ファイル（9ファイル）とChallenge関連のスタイルは **現状を維持** する。

ただし、以下のルールを適用:
1. `.glass` は Summary/Challenge 画面 **のみ** で使用
2. グロー・ネオン系アニメーション（`goldPulse`, `aiPulse`, `rainbow`）は Challenge セクション内に限定
3. `.btn-challenge`, `.btn-ai` は Challenge 用CSSセクションに隔離

**CSSの整理:**

main.css内で明確にセクション分けする:

```
/* =============================
   CHALLENGE / SUMMARY — ご褒美UI
   （通常学習には適用しない）
   ============================= */
```

このセクションに以下を移動:
- `.glass`
- `.topic-card-refined` と hover
- `.btn-challenge`, `.btn-ai`, `.btn-unified`
- `.summary-container` 系（tier-2, tier-3, tier-4, tier-ai）
- `.celebration-content`, `.level-up-anim`
- `@keyframes goldPulse`, `aiPulse`, `rainbow`, `levelUp`, `popIn`

---

## 変数マイグレーションマップ

CSS変数の旧→新の対応表。Phase 1で後方互換セクションを設け、Phase 5完了後に旧変数を削除する。

| 旧変数 | 新変数 | 備考 |
|--------|--------|------|
| `--primary` | `--color-accent` | |
| `--primary-dark` | `--color-accent-hover` | |
| `--secondary` | （廃止）| Challenge専用色へ |
| `--background` | `--color-bg-app` | |
| `--surface` | `--color-surface-dark` | 暗い面用 |
| （なし） | `--color-surface-1` | 白い面（Lesson/Quiz） |
| （なし） | `--color-surface-2` | 薄灰の面 |
| `--text` | `--color-text-on-dark` | 暗背景テキスト |
| `--text-muted` | `--color-text-on-dark-muted` | 暗背景補助テキスト |
| （なし） | `--color-text-primary` | 白背景テキスト（新規） |
| （なし） | `--color-text-secondary` | 白背景補助テキスト（新規） |
| `--success` | `--color-success` | |
| `--error` | `--color-error` | |
| `--font-family` | `--font-family-base` | |

---

## インラインスタイル削除計画

現状、Lesson.js と Quiz.js はインラインスタイルが多い。CSSクラスに移行する。

### Lesson.js で削除するインラインスタイル

| 行 | 内容 | 移行先CSS |
|----|------|----------|
| 7 | `style.padding = '2rem'` | `.lesson-shell { padding }` |
| 8 | `style.maxWidth = '800px'` | `.lesson-shell { max-width }` |
| 9 | `style.margin = '0 auto'` | `.lesson-shell { margin }` |
| 22 | `style.fontSize = '2rem'` | `.lesson-title { font-size }` |
| 32 | `h3.style.color = 'var(--secondary)'` | `.lesson-content h3 { color }` |
| 33-34 | `h3.style.marginTop/Bottom` | `.lesson-content h3 { margin }` |
| 38-39 | `ul.style.paddingLeft/marginBottom` | `.lesson-content ul, ol` |
| 49 | `style.display = 'flex'` | `.lesson-actions { display }` |
| 50 | `style.gap = '1rem'` | `.lesson-actions { gap }` |
| 51 | `style.marginTop = '2rem'` | `.lesson-actions { margin-top }` |
| 52 | `style.flexWrap = 'wrap'` | `.lesson-actions { flex-wrap }` |

### Quiz.js で削除するインラインスタイル

| 行 | 内容 | 移行先CSS |
|----|------|----------|
| 8 | `style.padding = '2rem'` | `.quiz-shell { padding }` |
| 9 | `style.maxWidth = '700px'` | `.quiz-shell { max-width }` |
| 10 | `style.margin = '0 auto'` | `.quiz-shell { margin }` |
| 176 | `style.color = 'var(--text-muted)'` | `.quiz-meta { color }` |
| 177 | `style.marginBottom = '1rem'` | `.quiz-meta { margin-bottom }` |
| 181 | `style.fontSize = '1.3rem'` | `.quiz-question { font-size }` |
| 182 | `style.marginBottom = '2rem'` | `.quiz-question { margin-bottom }` |
| 183 | `style.fontWeight = '600'` | `.quiz-question { font-weight }` |
| 192-199 | option labelのスタイル全体 | `.quiz-option` |
| 207-215 | 選択時のスタイル | `.quiz-option.is-selected` |
| 274-285 | explanationBoxのスタイル | `.quiz-explanation` |

---

## リスク評価と対策

### リスク1: Summary/Challenge画面の意図しない破壊
- **原因:** 旧CSS変数の削除により、Summary系で色が壊れる
- **対策:** Phase 1で後方互換セクションを設け、旧変数名をエイリアスとして維持する。Phase 5完了後に除去。

### リスク2: インラインスタイルとCSS優先度の競合
- **原因:** Lesson.js/Quiz.jsで既にインラインスタイルが設定されている場合、CSSクラスが効かない
- **対策:** JS側のインラインスタイル行を確実に削除してからCSSクラスを適用する。

### リスク3: `.glass` 削除によるレイアウト崩れ
- **原因:** `.glass` には `border-radius: 1rem` や `border` が含まれ、これを前提にレイアウトしている箇所がある
- **対策:** 新しいカード/シェルクラスに同等のレイアウトプロパティを含める。

### リスク4: 暗背景ページ内での白カード表示
- **原因:** Home/Categoryは `--color-bg-app` (暗色) が背景。そこに白カードを置く
- **対策:** カードは白でもコントラストは問題ない。むしろ暗背景+白カードは視認性が高い。カード内テキストは `--color-text-primary` (濃色) を使用。

### リスク5: フォント変更による全体的な見た目の変化
- **原因:** Outfit → Inter + Noto Sans JP で文字のサイズ感・太さの印象が変わる
- **対策:** font-size, font-weight のトークンを新フォントに合わせて調整済み。Phase 1完了時に目視確認が必要。

---

## 実装順序チェックリスト

### Phase 1（基盤）
- [ ] `index.html` のフォント読み込み変更
- [ ] `main.css` の `:root` トークン全面差し替え（後方互換付き）
- [ ] `main.css` body 基底スタイル更新
- [ ] `.btn` 体系を4種に統一
- [ ] `.card` 体系を新規定義
- [ ] Home.js: `glass topic-card-refined` → `card card--interactive`
- [ ] CategorySelection.js: `glass topic-card-refined` → `card card--interactive`
- [ ] Lesson.js: `glass` → `lesson-shell`（Phase 2 CSS必要なので仮）
- [ ] Quiz.js: `glass` → `quiz-shell`（Phase 3 CSS必要なので仮）
- [ ] ボタンクラス名の更新（btn-unified → btn-primary 等）
- [ ] 動作確認: 全画面でレイアウト崩れ・色抜けがないか

### Phase 2（Lesson）
- [ ] `main.css` に `.lesson-shell` 系CSS追加
- [ ] `Lesson.js` のインラインスタイル削除
- [ ] `Lesson.js` のクラス名変更
- [ ] `.lesson-content h3` のスタイル統一（ピンク→黒系）
- [ ] `.scroll-progress` の新トークン対応
- [ ] 動作確認: レッスン画面が白背景の教材UIになっているか

### Phase 3（Quiz）
- [ ] `main.css` に `.quiz-shell` 系CSS追加
- [ ] `Quiz.js` のインラインスタイル削除
- [ ] `Quiz.js` の選択肢をCSSクラスベースに移行
- [ ] 解説ボックスのCSSクラス化
- [ ] 結果画面の白背景対応
- [ ] ボタンテキスト変更
- [ ] 動作確認: クイズ画面の選択・正誤・解説表示が正常か

### Phase 4（Home / Category）
- [ ] Home.js: おすすめカードの位置を進捗の前に移動
- [ ] Home.js: カード序列化（完了/未完了の差分）
- [ ] Home.js: `fancy-title` → `home-title` 移行
- [ ] CategorySelection.js: ステータス表示の改善
- [ ] CategorySelection.js: カード状態分け（未着手/途中/完了）
- [ ] CSS: Home/Category用の新スタイル追加
- [ ] 動作確認: カードの序列・ステータスが正しく表示されるか

### Phase 5（Summary分離）
- [ ] `main.css` のセクション整理（Challenge/Summary用を隔離）
- [ ] 後方互換セクションの削除
- [ ] Summary系ファイルが `.glass` を正しく使用していることを確認
- [ ] 通常学習画面にグロー/ネオンが漏れていないことを確認

---

## 補足: 触らないファイル

以下のファイルは本修正の対象外とする:

| ファイル | 理由 |
|---------|------|
| `src/ui/views/Summary5Patterns.js` | Phase 5（演出維持） |
| `src/ui/views/SummaryTenses.js` | 同上 |
| `src/ui/views/SummaryAuxiliaryVerbs.js` | 同上 |
| `src/ui/views/SummaryPassiveVoice.js` | 同上 |
| `src/ui/views/SummaryVariousExpressions.js` | 同上 |
| `src/ui/views/SummaryQuestionWords.js` | 同上 |
| `src/ui/views/SummaryComparisons.js` | 同上 |
| `src/ui/views/SummaryInfinitivesGerunds.js` | 同上 |
| `src/ui/views/PartsOfSpeech.js` | 同上 |
| `src/ui/components/LearningPageTemplate.js` | Summary系テンプレート |
| `src/ui/components/ResultModal.js` | Summary/Challenge用モーダル |
| `src/ui/components/patternDiagrams.js` | 構造は変えない |
| `src/logic/` 以下すべて | ロジック層は対象外 |
