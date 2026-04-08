# UI全面改修 調査設計書

## 1. 現状分析

### 1.1 アプリ構成
- **技術スタック**: Vanilla JS + Vite + Gemini AI API
- **CSSファイル**: `style.css`（Viteデフォルト＋クイズ）+ `styles/main.css`（メインUI）の2本立て
- **画面遷移**: ハッシュルーティング（Home → Category → Lesson → Quiz / Expert Challenge）
- **データ永続化**: localStorage のみ
- **カテゴリ数**: 9（5文型、時制、助動詞、受動態、品詞、色々な表現、疑問詞、比較表現、to不定詞と動名詞）

### 1.2 ユーザージャーニー（現状）
```
[ホーム] → 9枚のコースカード一覧
    ↓ 「レッスンを開始」ボタン
[カテゴリ選択] → レッスン一覧（トピックカード）
    ↓ 「レッスンを開始」ボタン
[レッスン] → HTML説明文の表示
    ↓ 「クイズに挑戦」ボタン
[クイズ] → 1問ずつラジオ選択 → 全問正解でCOMPLETE
    ↓ 全レッスン完了後
[エキスパートチャレンジ] → 通常 or AI モード → 連続正解チャレンジ
```

### 1.3 画面別の現状まとめ

| 画面 | ファイル | 主な機能 |
|------|----------|----------|
| ホーム | `Home.js` | 9枚のコースカード、進捗表示、チャレンジ入口 |
| カテゴリ選択 | `CategorySelection.js` | レッスン一覧、完了状態表示 |
| レッスン | `Lesson.js` | HTML説明コンテンツ表示 |
| クイズ | `Quiz.js` | ラジオ選択式、全問正解で完了 |
| エキスパートチャレンジ | `LearningPageTemplate.js` | 連続正解チャレンジ、ティア演出、AI問題生成 |
| 結果モーダル | `ResultModal.js` | スコア表示、評価メッセージ |

---

## 2. 問題点一覧（学習者視点・優先度順）

### 2.1 【致命的】クイズのフィードバック遅延（A）
- **場所**: `LearningPageTemplate.js:482`, `Quiz.js:155`
- **問題**: 不正解時、解説表示の2秒後に `setTimeout` で ResultModal が出現する
- **影響**: 学習者が「何が起こった？」と混乱。解説を読んでいる途中でモーダルが被さる
- **根拠**: 学習科学の「即時フィードバック原則」に違反。応答は500ms以内が理想

### 2.2 【致命的】クイズの100%合格条件（B）
- **場所**: `Quiz.js:55` — `if (score === quizData.length)`
- **問題**: 1問でも間違えると「未完了」のまま。パーフェクトスコアでないと進めない
- **影響**: 学習者の挫折・離脱の最大要因。10問中9問正解でも「やり直し」は理不尽
- **根拠**: 一般的な学習アプリの合格ラインは70〜80%

### 2.3 【重要】ナビゲーションの迷子問題（D）
- **場所**: 全画面共通
- **問題**:
  - パンくずリストがない（今どこにいるか不明）
  - 戻るボタンの挙動が不統一（Home.jsは無し、Lesson.jsは「トップに戻る」＝スクロール、CategorySelectionは「ホームに戻る」）
  - Quiz.jsの戻り先が `topic.id.startsWith()` で分岐するハードコード（`Quiz.js:78-84`）。新カテゴリ追加時に漏れやすい
  - CategorySelection.jsのチャレンジナビゲーションも同様にif-elseのハードコード（`CategorySelection.js:59-68`）

### 2.4 【重要】ホーム画面の情報過多（C）
- **場所**: `Home.js`
- **問題**:
  - 9枚のカードが均等に並び、「次に何をすべきか」が不明
  - 1枚のカードに「レッスンを開始」「エキスパートチャレンジ」の2ボタンがあり、どちらを押すか迷う
  - アイコンが `height: 20vh` で、モバイルではカードの大半を占める
  - 進捗の表示方法が状態で異なる（未完了: `X/Y (Z%)` vs 完了: `🔥 X問連続正解`）

### 2.5 【重要】レッスン→クイズの断絶（E）
- **場所**: `Lesson.js`, `Quiz.js`
- **問題**:
  - レッスン終了後の導線が「クイズに挑戦」ボタンのみ（予告・心構えがない）
  - クイズ結果画面に「間違えた問題の振り返り」がない
  - レッスン内に進捗インジケータがない（全体の何割を読んだか不明）
  - 「レッスントップに戻る」ボタンがスクロールであり「カテゴリに戻る」ではない

### 2.6 【改善】CSS統合と一貫性（F）
- **場所**: `style.css` + `styles/main.css`
- **問題**:
  - 2つのCSSファイルが混在し、同じセレクタが競合（例: `.pattern-explanation-card`, `.svg-diagram-container`, `.diagram-example` が両方に存在）
  - `style.css` は Vite のデフォルトテンプレート由来で、`#app` の `text-align: center` や `body` の `place-items: center` など不要なルールが残存
  - `style.css:91` のライトモード定義が `main.css` のダークテーマと矛盾
  - ボタンのスタイルが `.btn`, `.btn-primary`, `.btn-unified`, `.btn-challenge`, `.quiz-btn` と乱立
  - カラー変数が `style.css` では直接カラーコード、`main.css` では CSS変数と不統一
  - インラインスタイルが各コンポーネントに大量にあり（特に `Home.js`, `LearningPageTemplate.js`）、CSSクラスに整理されていない

---

## 3. 改善設計

### 3.1 改善A: クイズフィードバック即時化＋演出強化

#### 変更対象
| ファイル | 変更内容 |
|----------|----------|
| `LearningPageTemplate.js` | 2秒遅延の `setTimeout` 削除、即時フィードバック表示、「もう一度挑戦」ボタン追加 |
| `Quiz.js` | 正解/不正解の即時ビジュアルフィードバック追加 |
| `ResultModal.js` | スコア表示の文言修正（「X問正解」→「X問連続正解」明示） |
| `styles/main.css` | 正解/不正解アニメーション用CSSクラス追加 |

#### 詳細設計

**LearningPageTemplate.js `handleAnswer()` の改修:**
```
[現状] 不正解時:
  1. 解説表示
  2. 2秒待機（setTimeout）
  3. ResultModal 出現

[改修後] 不正解時:
  1. 選択した選択肢を赤くハイライト + 正解選択肢を緑にハイライト（即時）
  2. 解説表示（即時）
  3. 「結果を見る」ボタン表示（ユーザー操作で ResultModal を開く）
  ※ setTimeout は完全削除
```

**Quiz.js の改修:**
```
[現状] 不正解時:
  - テキストで「❌ Incorrect」表示のみ

[改修後] 不正解時:
  1. 選択した選択肢 → 赤背景にアニメーション
  2. 正解選択肢 → 緑背景にアニメーション
  3. 解説ボックス表示
  4. 「次の問題へ」ボタンで進行
```

**追加CSSクラス:**
```css
.option-correct   { background: rgba(34, 197, 94, 0.2); border-color: var(--success); }
.option-incorrect { background: rgba(239, 68, 68, 0.2); border-color: var(--error); animation: shake 0.4s; }
.option-disabled  { pointer-events: none; opacity: 0.6; }
```

---

### 3.2 改善B: クイズ合格条件緩和＋結果振り返り

#### 変更対象
| ファイル | 変更内容 |
|----------|----------|
| `Quiz.js` | 合格条件を80%に変更、結果画面に間違えた問題リスト表示 |
| `storage.js` | ベストスコア保存の追加（完了トピックとは別） |

#### 詳細設計

**Quiz.js の合格条件改修:**
```javascript
// 現状（Quiz.js:55）
if (score === quizData.length)

// 改修後
const passThreshold = Math.ceil(quizData.length * 0.8); // 80%
if (score >= passThreshold)
```

**結果画面の改修:**
```
[現状] クイズ完了時:
  - 「クイズ完了！ スコア: X/Y」テキスト
  - 「レッスン一覧に戻る」ボタン

[改修後] クイズ完了時:
  - スコア表示 + 合格/不合格バッジ
  - 「間違えた問題」セクション（問題・正解・解説の一覧）
  - 合格時: 「おめでとう！次のレッスンへ」ボタン
  - 不合格時: 「もう一度挑戦」+「レッスンに戻って復習」ボタン
```

**間違えた問題の追跡:**
```javascript
// Quiz.js 内にローカル変数追加
let wrongAnswers = []; // { question, userAnswer, correctAnswer, explanation }

// 不正解時に記録
wrongAnswers.push({
  question: q.question,
  userAnswer: selectedAnswer,
  correctAnswer: q.answer,
  explanation: q.explanation || ''
});
```

---

### 3.3 改善C: ホーム画面リデザイン

#### 変更対象
| ファイル | 変更内容 |
|----------|----------|
| `Home.js` | カード構成の大幅変更、全体進捗バー追加、おすすめ表示 |
| `styles/main.css` | ホーム画面用CSSクラス追加 |

#### 詳細設計

**ホーム画面の新構成:**
```
┌──────────────────────────────────────────┐
│  English Grammar Mastery                  │
│  体系的な学習とAI問題で英文法をマスター    │
│                                           │
│  ┌─ 全体進捗 ─────────────────────────┐  │
│  │ ████████░░░░░░░░░  52% (24/46)     │  │
│  └─────────────────────────────────────┘  │
│                                           │
│  ▶ 次のおすすめ: [to不定詞：名詞的用法]   │
│    ┌────────────────────────────────┐     │
│    │ すぐにレッスンを開始 →          │     │
│    └────────────────────────────────┘     │
│                                           │
│  学習コース                                │
│  ┌────────┐ ┌────────┐ ┌────────┐        │
│  │ icon   │ │ icon   │ │ icon   │        │
│  │ Title  │ │ Title  │ │ Title  │        │
│  │ ███ 80%│ │ ██░ 40%│ │ ░░░ 0% │        │
│  │ [開始] │ │ [開始] │ │ [開始] │        │
│  └────────┘ └────────┘ └────────┘        │
└──────────────────────────────────────────┘
```

**主な変更点:**
1. **全体進捗バー**: 全カテゴリ横断の完了トピック数/全トピック数を表示
2. **おすすめセクション**: 未完了の最初のトピックを自動提案（即座にレッスンに飛べる）
3. **カードの簡素化**:
   - アイコンサイズを `height: 12vh` → `max-height: 100px` に縮小
   - ボタンを「レッスンを開始」1つに統合
   - エキスパートチャレンジは全完了時のみカード内に小さく表示
   - 進捗バー（プログレスバー）で視覚化（パーセンテージテキストは補助）
4. **状態の視覚化**: 完了カテゴリにはチェックマークバッジ

---

### 3.4 改善D: パンくずナビゲーション＋戻るボタン統一

#### 変更対象
| ファイル | 変更内容 |
|----------|----------|
| `ui/components/Breadcrumb.js` | **新規作成** — 再利用可能なパンくずコンポーネント |
| `CategorySelection.js` | パンくず導入、チャレンジナビゲーションのハードコード解消 |
| `Lesson.js` | パンくず導入、「戻る」ボタンをカテゴリ一覧への戻りに変更 |
| `Quiz.js` | パンくず導入、戻り先のハードコード解消 |
| `LearningPageTemplate.js` | パンくず導入 |
| `styles/main.css` | パンくずCSS追加 |

#### 詳細設計

**Breadcrumb.js（新規）:**
```javascript
// 使用例: Breadcrumb(['ホーム', '/'], ['比較表現', '/category/comparisons'], ['原級比較'])
export const Breadcrumb = (items) => {
  // items: Array of [label, hash] or [label]（最後の要素はリンクなし）
  const nav = document.createElement('nav');
  nav.className = 'breadcrumb';
  // 「ホーム > カテゴリ名 > レッスン名」形式
  return nav;
};
```

**CSS設計:**
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}
.breadcrumb a { color: var(--primary); text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb .separator { color: var(--text-muted); }
.breadcrumb .current { color: var(--text); font-weight: 600; }
```

**ナビゲーションのハードコード解消:**
- `Quiz.js:78-84` の `if (topic.id.startsWith(...))` パターンを削除
- `CategorySelection.js:59-68` の if-else チェーンを削除
- 代わりに `curriculum` からカテゴリIDを逆引きするユーティリティ関数を追加:
```javascript
// storage.js or navigation.js に追加
export const getCategoryIdByTopicId = (topicId) => {
  for (const category of curriculum) {
    if (category.topics.some(t => t.id === topicId)) {
      return category.id;
    }
  }
  return null;
};
```

---

### 3.5 改善E: レッスン画面の読みやすさ改善

#### 変更対象
| ファイル | 変更内容 |
|----------|----------|
| `Lesson.js` | パンくず追加、ボタン改修、スクロール進捗表示 |
| `styles/main.css` | レッスンコンテンツ専用CSS追加 |

#### 詳細設計

**ボタン改修:**
```
[現状]
  - 「クイズに挑戦」ボタン
  - 「↑ レッスントップに戻る」ボタン（スクロール）

[改修後]
  - 「← カテゴリに戻る」ボタン（カテゴリ一覧に遷移）
  - 「クイズに挑戦 →」ボタン（目立つCTA）
```

**レッスンコンテンツCSS改善:**
```css
.lesson-content {
  font-size: 1.05rem;
  line-height: 1.9;
  max-width: 720px;
  margin: 0 auto;
}
.lesson-content h3 {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}
.lesson-content .concept-box {
  margin: 1.5rem 0;
}
.lesson-content .example-item {
  font-size: 1rem;
  line-height: 1.7;
}
```

**スクロール進捗インジケータ（レッスンページ上部）:**
- ページ上部に細いプログレスバーを表示
- スクロール量に応じてバーが伸びる
- レッスンの読了率が視覚的に分かる

```css
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  z-index: 100;
  transition: width 0.1s;
}
```

---

### 3.6 改善F: CSS統合＋デザインシステム整理

#### 変更対象
| ファイル | 変更内容 |
|----------|----------|
| `style.css` | 不要ルール削除 → 最小限に |
| `styles/main.css` | 唯一の正規CSSファイルへ統合 |
| 全コンポーネント | インラインスタイルをCSSクラスに移行 |

#### 詳細設計

**style.css の整理方針:**
以下を削除/移動:
- Viteデフォルトの `.logo`, `.read-the-docs`, `.card` → 削除（未使用）
- `body { place-items: center }` → 削除（main.cssと競合）
- `#app { text-align: center }` → 削除（main.cssの定義を優先）
- `@media (prefers-color-scheme: light)` → 削除（ダークテーマ固定）
- `button` のデフォルトスタイル → main.css に統合
- `.quiz-section`, `.quiz-header`, `.quiz-options` 等のクイズ系 → main.css に移動
- `.celebration-overlay`, `.tier-*` 系 → main.css に移動
- `.pattern-explanation-card` の重複定義 → main.css の定義に統一
- `.svg-diagram-container` の重複定義 → main.css の定義に統一

**最終的にstyle.cssに残すもの:** なし（空ファイルにするか削除、main.jsのimportも修正）

**ボタンクラスの統一:**
```
[現状] .btn, .btn-primary, .btn-secondary, .btn-unified, .btn-challenge, .quiz-btn, .btn-ai
  → 用途が不明確、見た目の差が小さい

[改修後]
  .btn            — ベーススタイル（パディング、border-radius、transition）
  .btn-primary    — メインアクション（紫グラデ）
  .btn-secondary  — 副次アクション（surface背景）
  .btn-accent     — 特別アクション（金色、チャレンジ用）
  .btn-ai         — AIモード専用（緑グロー）
  .btn-ghost      — テキストのみ（戻るリンク等）
  
  ※ .btn-unified, .btn-challenge, .quiz-btn は上記に吸収して削除
```

**インラインスタイルの移行対象（主要箇所）:**
| コンポーネント | インラインスタイル行数（推定） | 移行先CSS |
|----------------|-------------------------------|-----------|
| `Home.js` | 約40行 | `.home-*`, `.course-card-*` |
| `LearningPageTemplate.js` | 約80行 | `.expert-*`, `.quiz-*` |
| `CategorySelection.js` | 約30行 | `.category-*` |
| `ResultModal.js` | 約50行 | `.result-modal-*` |
| `Quiz.js` | 約30行 | `.quiz-*` |
| `Lesson.js` | 約10行 | `.lesson-*` |

---

## 4. 実装計画

### フェーズ1: 基盤整理（改善F）— 先にやる必要あり
他の改善の土台になるため、CSS統合を最初に行う。

| # | タスク | 推定作業量 |
|---|--------|-----------|
| F-1 | `style.css` の不要ルール削除、quiz/tier/celebration系を `main.css` に移動 | 中 |
| F-2 | ボタンクラスの統一定義を `main.css` に追加 | 小 |
| F-3 | 各コンポーネントのインラインスタイルをCSSクラスに移行 | 大 |
| F-4 | 重複セレクタの統合・削除 | 小 |

### フェーズ2: 学習フロー改善（改善A + B）
学習体験に直結する最重要改善。

| # | タスク | 推定作業量 |
|---|--------|-----------|
| A-1 | `LearningPageTemplate.js` の `setTimeout` 削除、即時フィードバック実装 | 中 |
| A-2 | `Quiz.js` の正解/不正解ビジュアルフィードバック追加 | 中 |
| A-3 | 正解/不正解時のCSSアニメーション追加 | 小 |
| B-1 | `Quiz.js` の合格条件を80%に変更 | 小 |
| B-2 | 間違えた問題のトラッキング＋結果画面の振り返りリスト実装 | 中 |
| B-3 | 結果画面の導線改善（次へ/復習/再挑戦ボタン） | 小 |

### フェーズ3: ナビゲーション改善（改善D）
迷子防止と保守性向上。

| # | タスク | 推定作業量 |
|---|--------|-----------|
| D-1 | `Breadcrumb.js` コンポーネント新規作成 | 小 |
| D-2 | `getCategoryIdByTopicId()` ユーティリティ追加 | 小 |
| D-3 | 全画面にパンくず導入（Category, Lesson, Quiz, ExpertChallenge） | 中 |
| D-4 | `Quiz.js`, `CategorySelection.js` のハードコード解消 | 小 |

### フェーズ4: 画面リデザイン（改善C + E）
ホーム画面とレッスン画面の改善。

| # | タスク | 推定作業量 |
|---|--------|-----------|
| C-1 | 全体進捗バーコンポーネント作成＋ `Home.js` に導入 | 中 |
| C-2 | おすすめセクション実装 | 中 |
| C-3 | コースカードの簡素化（アイコン縮小、ボタン統一、プログレスバー化） | 中 |
| E-1 | `Lesson.js` のボタン改修＋パンくず追加 | 小 |
| E-2 | レッスンコンテンツ専用CSSクラス追加 | 小 |
| E-3 | スクロール進捗インジケータ実装 | 小 |

---

## 5. ファイル変更一覧

### 新規作成
| ファイル | 内容 |
|----------|------|
| `src/ui/components/Breadcrumb.js` | パンくずナビゲーションコンポーネント |

### 大幅変更
| ファイル | 変更概要 |
|----------|----------|
| `src/styles/main.css` | style.cssの統合、ボタン統一、新CSSクラス追加、インラインスタイルの受け皿 |
| `src/style.css` | 大部分を削除（main.cssに移動） |
| `src/ui/views/Home.js` | 全体進捗バー・おすすめセクション追加、カード簡素化、インラインスタイル削除 |
| `src/ui/views/Quiz.js` | 合格条件変更、間違えた問題追跡、結果画面改修、フィードバック強化 |
| `src/ui/components/LearningPageTemplate.js` | setTimeout削除、即時フィードバック、パンくず追加 |
| `src/ui/components/ResultModal.js` | 文言修正、インラインスタイルCSS化 |

### 中程度の変更
| ファイル | 変更概要 |
|----------|----------|
| `src/ui/views/CategorySelection.js` | パンくず追加、チャレンジナビのハードコード解消 |
| `src/ui/views/Lesson.js` | パンくず追加、ボタン改修、スクロール進捗バー |
| `src/logic/storage.js` | ベストスコア保存機能追加（任意） |

### 軽微な変更
| ファイル | 変更概要 |
|----------|----------|
| `src/ui/navigation.js` | `getCategoryIdByTopicId()` ユーティリティ追加 |
| `src/main.js` | `style.css` の import 調整（統合後） |

---

## 6. リスク・注意点

### 6.1 CSS統合時の見た目崩れ
- `style.css` と `main.css` の競合が解消されるため、一部セレクタの優先度が変わる可能性
- **対策**: フェーズ1完了後に全画面の目視確認を行う

### 6.2 localStorage の後方互換性
- 合格条件変更後、既に100%クリアしたトピックのデータには影響なし
- 新たに `bestScore` フィールドを追加する場合、既存データとの互換性を保つ

### 6.3 エキスパートチャレンジのフィードバック変更
- 現状の2秒遅延に慣れたユーザーがいる可能性は低い（マイナーな機能のため）
- 即時フィードバックへの変更はリスクなし

### 6.4 インラインスタイル移行の漏れ
- コンポーネントが多く、全てのインラインスタイルを一度にCSS化するのは作業量が大きい
- **対策**: 新CSSクラス名に統一的なプレフィックスを使用し、段階的に移行
