# UI修正設計書 v2 — 色の統一感とブランド整理

## 概要

前回の Quiet Mastery 導入により通常学習UIの統一は概ね完了した。
本設計書では残る課題 **「アプリ全体の色の統一感」** を解消する。

### 4つの修正優先度

| # | 課題 | 要約 |
|---|------|------|
| 1 | 暖色の意味がバラついている | amber を「チャレンジ/ご褒美専用」に絞り、通常画面から排除 |
| 2 | ピンク系 `--secondary` が旧デザインの残り香 | indigo 系に寄せるか、challenge 専用トークンに改名 |
| 3 | Challenge 系クラス名が汎用的すぎる | `.glass` → `.challenge-glass` 等に改名して明示的に分離 |
| 4 | 直書き色がトークン化されていない | ハードコード色を意味付きトークンに変換 |

---

## 現状の問題箇所マップ

### 暖色（amber/gold）の直書き — 通常学習画面

| ファイル | 行 | 色 | 用途 | 問題 |
|---------|---|---|------|------|
| `Home.js` | 208 | `#fbbf24` | 連続正解表示 | 通常画面で暖色が出る |
| `CategorySelection.js` | 49 | `rgba(251, 191, 36, 0.1)` | 全クリア祝福ボックス背景 | 通常画面でチャレンジ色が出る |
| `CategorySelection.js` | 51 | `rgba(251, 191, 36, 0.3)` | 同上ボーダー | 同上 |
| `CategorySelection.js` | 55 | `#fbbf24` | 「全レッスンクリア！」テキスト色 | 同上 |

### `var(--secondary)` (#ec4899 ピンク) の使用箇所

**CSS内（4箇所）:**
- `.btn-unified` のグラデーション
- `.diagram-arrow::after` の色
- `.diagram-operator` の色
- `.example-item` のボーダー左

**カリキュラムJS内（17+箇所）:**
- `adjective.js`, `adverb.js`, `verb.js` — diagram-box背景
- `thereIsConstruction.js`, `impersonalIt.js`, `imperativeSentence.js` — 見出し色・ボーダー
- `superlative.js`, `comparative.js` — 構文ハイライト
- `passiveVoice/basics.js`, `passiveVoice/auxiliary.js` — diagram-box
- `questionWords/whoWhomWhose.js`, `questionWords/whenWhere.js` — 見出し色
- `infinitivesGerunds/infinitiveVsGerund.js` — スタイル
- `tenses/presentPerfectProgressive.js` — 見出し・ラベル
- `LearningPageTemplate.js:136` — ロックメッセージ色
- `PartsOfSpeech.js:53` — ボーダー左

**結論:** `var(--secondary)` はレッスンHTML内で「強調色」として使われている。これをindigoに統一すれば、ピンクが通常学習から消える。

### neon green (`#00ff00`) の直書き — Challenge/Summary のみ

| ファイル | 行数 | 用途 |
|---------|------|------|
| `main.css` | 2箇所 | `.summary-container.tier-ai`, `.ai-loader` |
| `LearningPageTemplate.js` | 4箇所 | AI button, AI MODE表示, AIローディング |

→ Challenge/Summary限定なので問題なし。トークン化のみ行う。

### 汎用クラス名の使用状況

| クラス名 | JS内使用数 | 使用画面 | 対応 |
|---------|-----------|---------|------|
| `.glass` | 42箇所 | Summary/Challenge **のみ** | `.challenge-glass` に改名 |
| `.title` | 1箇所 | CategorySelection（overrideあり） | `.challenge-title` に改名しCSS整理 |
| `.topic-card-refined` | 0箇所 | 不使用 | CSS定義を削除可能 |
| `.btn-unified` | 0箇所 | 不使用 | CSS定義を削除可能 |
| `.btn-challenge` | 0箇所 | 不使用 | CSS定義を削除可能 |
| `.btn-accent` | 0箇所 | 不使用 | CSS定義を削除可能 |
| `.section-title` | 94+箇所 | 両方 | 維持（カリキュラムHTML内で多用） |

---

## 修正計画

### 修正1: 暖色の意味を「チャレンジ/ご褒美専用」に統一

**方針:** 通常学習画面から amber/gold を排除。完了は `--color-success`、進行中は `--color-accent` で表現。

#### Home.js の変更

```
行208: style="color: #fbbf24;"
  → style="color: var(--color-success);"
  
  連続正解は「達成」の一種なのでsuccess緑が適切。
  🔥 絵文字で十分「すごい」感は出る。
```

#### CategorySelection.js の変更

全クリア祝福ボックスを indigo/accent 系に統一:

```
行49: background = 'rgba(251, 191, 36, 0.1)'
  → background = 'var(--color-accent-soft-2)'

行51: border = '1px solid rgba(251, 191, 36, 0.3)'
  → border = '1px solid rgba(79, 70, 229, 0.25)'

行55: color = '#fbbf24'
  → color = 'var(--color-accent)'

行56: textContent = '🎉 全レッスンクリア！'
  → そのまま維持（絵文字で華やかさは保つ）
```

### 修正2: `--secondary` をindigoに寄せ、ピンクをchallenge専用に

**方針:**
- `--secondary` の後方互換エイリアスを `#ec4899` → `var(--color-accent)` に変更
- これにより、カリキュラムJS内の17+箇所が自動的にindigoに変わる
- ピンクが必要なChallenge/Summary用に `--color-challenge-pink: #ec4899` を新設
- `.btn-unified` のグラデーションをchallenge用トークンで定義

**`:root` の変更:**

```css
/* 後方互換セクション変更 */
--secondary: var(--color-accent);  /* #ec4899 → indigo に統一 */

/* Challenge専用トークン追加 */
--color-challenge-pink: #ec4899;
--color-challenge-amber: #f59e0b;
--color-challenge-amber-dark: #d97706;
--color-reward-gold: #ffd700;
--color-reward-bronze: #cd7f32;
--color-reward-silver: #c0c0c0;
--color-ai-neon: #00ff00;
```

**CSS の変更（Challenge/Summaryセクション内）:**

```css
.btn-unified {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-challenge-pink) 100%);
  /* 以前: var(--primary) → var(--secondary) */
}

.diagram-arrow::after {
  color: var(--color-accent);
  /* 以前: var(--secondary) — ピンクだったのをindigoに */
}

.diagram-operator {
  color: var(--color-accent);
  /* 同上 */
}
```

**影響分析:**
- カリキュラムJS内の `var(--secondary)` 参照17+箇所 → すべてindigoに自動変更
- lesson-shell内でのdiagram-box背景色 → indigoに変更（白背景にindigoは視認性◎）
- `.example-item` border-left → lesson-shell内はすでに `var(--color-accent)` に上書き済み

### 修正3: Challenge系クラス名の明示的分離

#### `.glass` → `.challenge-glass`

**対象:** 42箇所のJS + CSS定義

変更するファイル:
| ファイル | 箇所数 |
|---------|-------|
| `src/styles/main.css` | CSS定義 |
| `src/ui/components/LearningPageTemplate.js` | 5箇所 |
| `src/ui/views/Summary5Patterns.js` | 5箇所 |
| `src/ui/views/SummaryTenses.js` | 4箇所 |
| `src/ui/views/SummaryAuxiliaryVerbs.js` | 4箇所 |
| `src/ui/views/SummaryPassiveVoice.js` | 2箇所 |
| `src/ui/views/SummaryVariousExpressions.js` | 4箇所 |
| `src/ui/views/SummaryQuestionWords.js` | 5箇所 |
| `src/ui/views/SummaryComparisons.js` | 4箇所 |
| `src/ui/views/SummaryInfinitivesGerunds.js` | 5箇所 |
| `src/ui/views/PartsOfSpeech.js` | 2箇所 |

**CSS変更:**
```css
/* 旧 */
.glass { ... }
/* 新 */
.challenge-glass { ... }
```

#### `.title` の整理

CategorySelection.js内の `.title` 使用を直接スタイルに置き換え:
```
CategorySelection.js:28: class="title"
  → 不要。.category-header .title で既にオーバーライドしているが、
    .titleの基底スタイル（gradient text）がCategory画面に不要。
    .category-header 直下の h1 に専用スタイルを適用。
```

CSS変更: `.title` を `.challenge-title` に改名。CategorySelection内は `.category-header h1` で制御。

#### 不使用CSSクラスの削除

以下はJS内で一切参照されていないため、CSS定義を削除:
- `.topic-card-refined` および `:hover`, `::before`
- `.btn-unified` および `:hover`, `:active`
- `.btn-challenge` および `:hover`
- `.btn-accent` および `:hover`
- `.fancy-title`
- `.fancy-subtitle`
- `.topic-card`

ただし `.btn-unified` は `LearningPageTemplate.js` で使われている可能性があるので再確認が必要。

### 修正4: 直書き色のトークン化

**CSS内のハードコード色をトークンに置き換え:**

| 旧（直書き） | 新（トークン） | 用途 |
|-------------|--------------|------|
| `#f59e0b` | `var(--color-challenge-amber)` | Challenge系ボタン |
| `#d97706` | `var(--color-challenge-amber-dark)` | Challenge系グラデーション |
| `#ffd700` | `var(--color-reward-gold)` | tier-4ゴールド演出 |
| `#cd7f32` | `var(--color-reward-bronze)` | tier-2ブロンズ演出 |
| `#c0c0c0` | `var(--color-reward-silver)` | tier-3シルバー演出 |
| `#00ff00` | `var(--color-ai-neon)` | AI演出 |
| `#ec4899` | `var(--color-challenge-pink)` | Challenge専用ピンク |

**JS内のハードコード色:**

| ファイル | 色 | 変更 |
|---------|---|------|
| `LearningPageTemplate.js:168` | `#00ff00` → `#00aa00` | `var(--color-ai-neon)` 系に統一 |
| `LearningPageTemplate.js:169` | `#00ff00` | 同上 |
| `LearningPageTemplate.js:270` | `#00ff00` | 同上 |
| `LearningPageTemplate.js:287` | `#00ff00` | 同上 |
| `ResultModal.js:39-40` | `#ffd700` | トークン不可（インライン）→ そのまま |
| `patternDiagrams.js` | `#ffd700` 多数 | SVG内のため変更不要 |

**カリキュラムJS内の `var(--secondary)` → 修正2で自動解決**

---

## 実装順序

### Step 1: CSSトークン追加と `--secondary` の統一
1. `:root` にChallenge専用トークンを追加
2. `--secondary` を `var(--color-accent)` に変更
3. CSS内のハードコード色をトークンに置き換え

### Step 2: 通常画面からamberを排除
1. `Home.js` の連続正解表示をsuccess緑に
2. `CategorySelection.js` の全クリア祝福ボックスをaccent系に

### Step 3: Challenge系クラス名リネーム
1. `.glass` → `.challenge-glass`（CSS + 全Summary JS）
2. `.title` → `.challenge-title`（CSS + CategorySelection整理）
3. 不使用CSSの削除

### Step 4: JS内のハードコード色をトークン化
1. `LearningPageTemplate.js` の `#00ff00` をCSS変数に

---

## リスク評価

### リスク1: `--secondary` 変更によるレッスンコンテンツの見た目変化
- **影響:** カリキュラムJS内の17+箇所でピンク→indigoに変化
- **評価:** 白背景にindigoは視認性良好。ピンクよりブランド統一感が出る
- **対策:** 目視確認。問題があれば個別にCSS上書き

### リスク2: `.glass` → `.challenge-glass` の一括リネーム
- **影響:** 42箇所のJSテンプレート文字列を変更
- **評価:** 機械的な置換なのでリスクは低い
- **対策:** ビルド確認 + Summary画面の動作確認

### リスク3: 不使用CSS削除による未検出の依存
- **影響:** `.btn-unified` 等を削除した場合、LearningPageTemplate内で動的生成している可能性
- **対策:** grep で全JS内の参照を再確認してから削除
