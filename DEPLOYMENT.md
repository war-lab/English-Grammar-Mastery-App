# デプロイ構成ドキュメント

## プロジェクト構成

### ディレクトリ構造
```
English-Grammar-Mastery-App/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions デプロイ設定
├── public/                     # 静的アセット
├── src/
│   ├── config.json            # アプリケーション設定（NEW）
│   ├── logic/
│   │   ├── curriculum.js      # カリキュラムデータ
│   │   ├── quizGenerator.js   # クイズ生成ロジック
│   │   ├── geminiService.js   # Gemini AI統合
│   │   ├── proficiency.js     # 習熟度管理
│   │   └── storage.js         # ローカルストレージ管理
│   ├── ui/
│   │   ├── components/
│   │   │   └── patternDiagrams.js  # SVG図解生成
│   │   ├── views/
│   │   │   ├── Home.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Lesson.js
│   │   │   ├── Quiz.js
│   │   │   └── Summary5Patterns.js
│   │   └── router.js          # ルーティング
│   ├── main.js                # エントリーポイント
│   └── style.css              # グローバルスタイル
├── dist/                       # ビルド出力（自動生成）
├── index.html
├── package.json
└── vite.config.js             # Vite設定

```

## GitHub Actions / GitHub Pages デプロイフロー

### 概要
mainブランチにプッシュすると自動的にビルド・デプロイが実行されます。

### デプロイワークフロー (.github/workflows/deploy.yml)

#### トリガー
- **イベント**: `push`
- **ブランチ**: `main`

#### ジョブ1: Build
1. **Checkout**: リポジトリをチェックアウト
2. **Setup Node**: Node.js 20をセットアップ
3. **Install dependencies**: `npm ci` で依存関係をインストール
4. **Build**: Viteで本番ビルド実行
   - 出力先: `./dist`
   - Base URL: `/English-Grammar-Mastery-App/`
5. **Upload artifact**: ビルド成果物をアップロード

#### ジョブ2: Deploy
1. **Deploy to GitHub Pages**: 成果物をGitHub Pagesにデプロイ
   - 環境: `github-pages`
   - URL: 自動生成されたPages URL

### 必要な権限
```yaml
permissions:
  contents: read    # リポジトリ読み取り
  pages: write      # Pages書き込み
  id-token: write   # OIDC認証
```

### Vite設定 (vite.config.js)
```javascript
{
  base: '/English-Grammar-Mastery-App/',  // GitHub Pagesのサブパス
  build: {
    outDir: 'dist',         // 出力ディレクトリ
    assetsDir: 'assets',    # アセット配置
    emptyOutDir: true       # ビルド前にクリア
  }
}
```

## 環境変数・設定管理

### 環境変数ファイル: .env.local

ローカル開発用（Git管理外）:
```env
VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent
```

### GitHub Secrets設定

1. **リポジトリ設定**: Settings > Secrets and variables > Actions
2. **Secret追加**:
   - Name: `GEMINI_API_KEY`
   - Value: [Google AI StudioのAPIキー]

### ビルド時の環境変数注入

GitHub Actionsでビルド時にAPIキーを設定:

```yaml
- name: Build
  env:
    VITE_GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
    VITE_GEMINI_API_URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent
  run: npm run build
```

アプリケーションコードで使用:
```javascript
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const apiUrl = import.meta.env.VITE_GEMINI_API_URL || 'default_url';
```

## API設定

### Gemini API

#### エンドポイント
- **正しいURL**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent`
- **旧URL（404エラー）**: ~~`gemini-pro`~~ ← Flash推奨

#### APIキー取得
1. [Google AI Studio](https://aistudio.google.com/app/apikey)にアクセス
2. 「Create API Key」をクリック
3. 生成されたキーをコピー

#### 使用モデル
- **gemini-1.5-flash-latest**: 高速・コスト効率的（推奨）
- **gemini-1.5-pro-latest**: 高性能（オプション）

## ローカル開発

### セットアップ
```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# ブラウザで開く
# http://localhost:5173
```

### APIキー設定（ローカル）
`.env.local`ファイルを作成:
```env
VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent
```

**注意**: `.env.local`は`.gitignore`に含まれているのでコミットされません。

## 本番ビルド

### 手動ビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

## トラブルシューティング

### 404 Not Found エラー (Gemini API)
**原因**: 古いAPIエンドポイント（`gemini-pro`）を使用
**解決**: `config.json`のURLを最新版に更新

### APIキーエラー
**症状**: "現在使用できません"
**確認事項**:
1. GitHub Secretsが正しく設定されているか
2. ビルドログで環境変数が注入されているか
3. APIキーが有効か（Google AI Studioで確認）

### デプロイ失敗
**確認事項**:
1. GitHub Pages設定が有効か（Settings > Pages）
2. Source: "GitHub Actions"が選択されているか
3. ワークフローの権限が正しいか

## セキュリティ

### 重要事項
- ✅ APIキーはGitHub Secretsで管理
- ✅ `config.json`は`.gitignore`に追加
- ✅ 環境変数経由でビルド時に注入
- ❌ APIキーをコードに直接記述しない
- ❌ `config.json`をリポジトリにコミットしない

### .gitignore設定
```
.env.local
.env.*.local
```

## デプロイURL

本番URL: `https://[username].github.io/English-Grammar-Mastery-App/`

## 更新フロー

1. コード修正
2. `git commit` & `git push origin main`
3. GitHub Actionsが自動実行
4. 数分後にデプロイ完了
5. URLで確認
