# 🛠️ 開発ガイド

このガイドでは、English Grammar Mastery Appの開発方法、カスタマイズ方法、コードベースの理解に役立つ情報を提供します。

## 目次

- [プロジェクト構造](#プロジェクト構造)
- [技術スタック](#技術スタック)
- [アーキテクチャ](#アーキテクチャ)
- [主要コンポーネント](#主要コンポーネント)
- [カリキュラムのカスタマイズ](#カリキュラムのカスタマイズ)
- [新機能の追加](#新機能の追加)
- [コーディング規約](#コーディング規約)
- [ビルドとデプロイ](#ビルドとデプロイ)

---

## プロジェクト構造

```
English-Grammar-Mastery-App/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── docs/                       # Wiki ドキュメント
│   ├── Features.md
│   ├── Installation.md
│   ├── API-Setup.md
│   ├── Development.md
│   └── FAQ.md
├── public/                     # 静的ファイル
│   └── config.json             # 公開用設定ファイル
├── src/
│   ├── logic/                  # ビジネスロジック層
│   │   ├── curriculum/         # カリキュラムデータ（分割管理）
│   │   │   ├── sentencePatterns/ # 文型データ (sv.js, svc.js...)
│   │   │   ├── partsOfSpeech/    # 品詞データ (noun.js, verb.js...)
│   │   │   └── index.js          # データ集約
│   │   ├── curriculum.js       # カリキュラムエクスポート（互換性維持）
│   │   ├── geminiService.js    # AI API統合
│   │   ├── quizGenerator.js    # クイズ生成ロジック
│   │   ├── posQuizGenerator.js # 品詞クイズ生成
│   │   ├── proficiency.js      # レベル判定（未使用）
│   │   └── storage.js          # LocalStorage管理
│   ├── ui/
│   │   ├── components/         # 再利用可能UIコンポーネント
│   │   │   ├── patternDiagrams.js # SVGダイアグラム
│   │   │   └── LearningPageTemplate.js # 学習ページテンプレート
│   │   ├── views/              # ページビュー
│   │   │   ├── Home.js         # コース選択（進捗表示）
│   │   │   ├── CategorySelection.js # カテゴリ別レッスン選択
│   │   │   ├── Lesson.js
│   │   │   ├── Quiz.js
│   │   │   ├── PartsOfSpeech.js
│   │   │   └── Summary5Patterns.js
│   │   └── router.js           # ルーティング
│   ├── styles/
│   │   ├── main.css            # グローバルスタイル
│   │   └── style.css           # 追加スタイル
│   ├── config.json             # デフォルト設定
│   ├── counter.js              # 未使用
│   └── main.js                 # アプリエントリーポイント
├── index.html                  # HTMLエントリーポイント
├── package.json                # 依存関係定義
├── vite.config.js              # Viteビルド設定
└── README.md                   # プロジェクト説明
```

---

## 技術スタック

### コア技術

| 技術 | バージョン | 用途 |
|------|-----------|------|
| **Vite** | 7.2.4 | ビルドツール・開発サーバー |
| **JavaScript** | ES6+ | アプリケーションロジック |
| **CSS3** | - | スタイリング |
| **HTML5** | - | マークアップ |

### 外部API

| サービス | 用途 |
|---------|------|
| **Google Gemini API** | AI問題生成 |

### 開発ツール

- **npm** - パッケージ管理
- **GitHub Actions** - CI/CD
- **GitHub Pages** - ホスティング

---

## アーキテクチャ

### レイヤード・アーキテクチャ

```
┌─────────────────────────────┐
│   Presentation Layer        │  ← UI Views (Home, Dashboard, etc.)
├─────────────────────────────┤
│   Business Logic Layer      │  ← Logic (curriculum, quizGenerator)
├─────────────────────────────┤
│   Data Layer                │  ← Storage (localStorage)
├─────────────────────────────┤
│   External Services         │  ← Gemini API
└─────────────────────────────┘
```

### データフロー

```
User Interaction
      ↓
   UI View
      ↓
  Business Logic
      ↓
   Data Storage / API
      ↓
     Response
      ↓
   UI Update
```

### ルーティングシステム

Hash-based routing (`#/path`)を使用：

```javascript
// router.js
const routes = {
  '/': Home,
  '/dashboard': Dashboard,
  '/lesson': Lesson,
  '/quiz': Quiz,
  '/summary-5-patterns': Summary5Patterns,
  '/assessment': Assessment
};
```

---

## 主要コンポーネント

### 1. Curriculum (カリキュラム)

**ファイル**: `src/logic/curriculum.js`

レッスンデータを定義します。

**構造**:
```javascript
{
  year: 'JHS-1',
  topics: [
    {
      id: 'sentence-pattern-1-sv',
      title: '第1文型 (SV)',
      description: '説明文',
      explanation: 'HTML形式の詳細説明',
      quiz: [
        {
          question: '問題文',
          options: ['選択肢1', '選択肢2', ...],
          answer: '正解',
          explanation: '解説（オプション）',
          japaneseTranslation: '日本語訳（オプション）'
        }
      ],
      isEnabled: true
    }
  ]
}
```

### 2. Gemini Service (AI問題生成)

**ファイル**: `src/logic/geminiService.js`

**主要機能**:
- `generateAIQuestion(level, questionType)` - AI問題を生成

**問題タイプ**:
- `'pattern-id'` - 文型判定
- `'fill-blank'` - 穴埋め
- `'error-correction'` - 誤り訂正
- `'transformation'` - 文型変換
- `'random'` - ランダム選択

**プロンプト設計**:
各問題タイプに特化したプロンプトテンプレート。日本語訳と解説を含むJSON形式で応答を要求。

### 3. Storage (ローカルストレージ)

**ファイル**: `src/logic/storage.js`

**主要関数**:
- `loadProgress()` - 進捗データを読み込み
- `saveProgress(data)` - 進捗データを保存

**データ構造**:
```javascript
{
  level: "Not Assessed",
  completedTopics: ["topic-id-1", "topic-id-2"],
  scores: {
    "topic-id-1": 5,
    "topic-id-2": 4
  }
}
```

### 4. Router (ルーティング)

**ファイル**: `src/ui/router.js`

**主要関数**:
- `navigate(path, state)` - ページ遷移
- `router()` - URLに基づいてビューをレンダリング

**使用例**:
```javascript
import { navigate } from './router.js';

button.onclick = () => navigate('/dashboard');
```

### 5. Views (ビュー)

各ビューはDOMエレメントを返す関数：

```javascript
export const ViewName = (state) => {
  const container = document.createElement('div');
  // ... DOM構築
  return container;
};
```

### 6. Templates (テンプレート)

**ファイル**: `src/ui/components/LearningPageTemplate.js`

学習モジュール（5文型、品詞など）の一貫性を保つための再利用可能なテンプレートです。

**使用方法**:
```javascript
import { LearningPageTemplate } from '../components/LearningPageTemplate.js';

export const MyLearningPage = () => {
  return LearningPageTemplate({
    title: 'ページタイトル',
    subtitle: 'サブタイトル',
    storageKey: 'localStorageKey',
    renderExplanationContent: () => '<div>解説HTML</div>',
    generateQuiz: (level) => generateMyQuiz(level),
    aiPromptContext: 'AIへのコンテキスト指示'
  });
};
```

---

## 🤖 AI開発ガイドライン (Rules for AI)

後続のAIエージェントが開発を行う際は、以下のルールを遵守してください。

### 1. 新機能の実装ルール
- **学習モジュールの追加**: 新しい学習コンテンツ（例：時制、助動詞）を追加する場合は、必ず `LearningPageTemplate` を使用すること。独自にUIを構築せず、テンプレートの仕様に従うこと。
- **データ駆動**: 学習コンテンツのデータは `src/logic/curriculum.js` に定義し、ハードコードしないこと。

### 2. コード品質と構造
- **関心の分離**: 
  - UIロジックは `src/ui/` に配置
  - ビジネスロジック（クイズ生成など）は `src/logic/` に配置
  - データは `src/logic/curriculum.js` に配置
- **コンポーネント再利用**: 既存のコンポーネント（ボタン、カード、モーダルなど）を再利用し、重複コードを作らないこと。

### 3. ドキュメント更新
- 機能を追加・変更した場合は、必ず `README.md` と `docs/Development.md` を更新すること。
- 特に新しいファイルを作成した場合は、プロジェクト構造図を更新すること。

---

## カリキュラムのカスタマイズ

### 新しいレッスンを追加

`src/logic/curriculum.js`を編集：

```javascript
{
  id: 'my-new-lesson',  // ユニークなID
  title: 'レッスンタイトル',
  description: '簡単な説明',
  explanation: `
    <h3>詳しい解説</h3>
    <p>HTML形式で記述できます</p>
  `,
  quiz: [
    {
      question: '問題文',
      options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
      answer: '選択肢1',
      explanation: 'なぜ選択肢1が正しいのか解説',
      japaneseTranslation: '問題の日本語訳'
    }
  ],
  isEnabled: true  // falseで非表示
}
```

### クイズに解説を追加

既存のクイズに`explanation`と`japaneseTranslation`フィールドを追加：

```javascript
{
  question: "She ___ happy.",
  options: ["look", "looks", "looking", "looked"],
  answer: "looks",
  explanation: "主語が三人称単数（She）で現在形なので、動詞に-sをつけます。",
  japaneseTranslation: "彼女は幸せそうに見えます。"
}
```

---

## 新機能の追加

### 新しいビューの追加

1. **ビューファイルを作成**: `src/ui/views/MyNewView.js`

```javascript
export const MyNewView = () => {
  const container = document.createElement('div');
  container.className = 'glass';
  container.innerHTML = `<h2>My New View</h2>`;
  return container;
};
```

2. **ルーターに登録**: `src/ui/router.js`

```javascript
import { MyNewView } from './views/MyNewView.js';

const routes = {
  // ... 既存のルート
  '/my-new-view': MyNewView
};
```

3. **ナビゲーションを追加**: 任意の場所から

```javascript
import { navigate } from '../router.js';

button.onclick = () => navigate('/my-new-view');
```

### 新しいコンポーネントの追加

1. `src/ui/components/MyComponent.js`を作成

```javascript
export const createMyComponent = (props) => {
  const element = document.createElement('div');
  element.className = 'my-component';
  // ... ロジック
  return element;
};
```

2. 必要な場所でインポートして使用

```javascript
import { createMyComponent } from '../components/MyComponent.js';

const myComp = createMyComponent({ data: 'test' });
container.appendChild(myComp);
```

---

## コーディング規約

### JavaScript

- **ES6+モジュール**: `import/export`を使用
- **アロー関数**: 可能な限り使用
- **const/let**: `var`は使用しない
- **命名規則**:
  - 関数: camelCase (`generateQuestion`)
  - コンポーネント: PascalCase (`Dashboard`)
  - 定数: UPPER_SNAKE_CASE (`API_KEY`)

### CSS

- **CSS カスタムプロパティ**: 色とフォントは変数で管理
- **BEM記法**: 複雑なコンポーネントで使用（推奨）
- **モバイルファースト**: レスポンシブデザイン

**例**:
```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
}

.component__element--modifier {
  color: var(--primary);
}
```

### ファイル構成

- **関心の分離**: UI、ロジック、データを分離
- **単一責任**: 1ファイル1機能
- **再利用可能性**: 共通機能はコンポーネント化

---

## ビルドとデプロイ

### ローカルビルド

```bash
# 開発ビルド
npm run dev

# 本番ビルド
npm run build

# ビルド結果を確認
npm run preview
```

### ビルド出力

ビルド結果は`dist/`ディレクトリに出力されます：

```
dist/
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── index.html
```

### GitHub Pagesへのデプロイ

詳細は [DEPLOYMENT.md](../DEPLOYMENT.md) を参照してください。

**簡易手順**:
1. GitHub Secretsを設定
2. `main`ブランチにプッシュ
3. GitHub Actionsが自動デプロイ

---

## ベストプラクティス

### パフォーマンス

- ✅ 不要な再レンダリングを避ける
- ✅ イベントリスナーを適切にクリーンアップ
- ✅ 画像を最適化
- ✅ LocalStorageを効率的に使用

### セキュリティ

- ✅ APIキーを環境変数で管理
- ✅ ユーザー入力をサニタイズ
- ✅ XSS対策（`textContent`を使用）
- ✅ 機密情報をコミットしない

### メンテナビリティ

- ✅ コードにコメントを追加
- ✅ 関数を小さく保つ（単一責任原則）
- ✅ マジックナンバーを避ける
- ✅ エラーハンドリングを実装

---

## デバッグティップス

### ブラウザ開発者ツール

**Console**:
```javascript
// 進捗データを確認
console.log(JSON.parse(localStorage.getItem('grammarAppProgress')));

// 環境変数を確認
console.log(import.meta.env);
```

**Network**:
- Gemini APIリクエストを監視
- レスポンスを確認

**Application** > **Local Storage**:
- 保存されたデータを直接編集・削除可能

### よくあるデバッグシナリオ

**問題**: ルーティングが動作しない
```javascript
// router.jsのハンドラーにログを追加
window.addEventListener('hashchange', () => {
  console.log('Hash changed to:', window.location.hash);
  router();
});
```

**問題**: LocalStorageデータが壊れた
```javascript
// データをリセット
localStorage.clear();
location.reload();
```

---

## 次のステップ

開発の準備ができたら：

1. 🎨 UIをカスタマイズ
2. 📚 新しいレッスンを追加
3. 🤖 AI機能を拡張
4. 🚀 独自の機能を実装

質問があれば、[GitHub Issues](https://github.com/[ユーザー名]/English-Grammar-Mastery-App/issues)で質問してください！
