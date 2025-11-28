# セットアップガイド

## 初回セットアップ

### 1. リポジトリのクローン
```bash
git clone https://github.com/[username]/English-Grammar-Mastery-App.git
cd English-Grammar-Mastery-App
```

### 2. 依存関係のインストール
```bash
npm install
```

### 3. 環境変数ファイルの作成

`.env.example`を`.env.local`にコピー:
```bash
# Windows (PowerShell)
Copy-Item .env.example .env.local

# macOS/Linux
cp .env.example .env.local
```

### 4. APIキーの設定

1. [Google AI Studio](https://aistudio.google.com/app/apikey)にアクセス
2. 「Create API Key」をクリック
3. APIキーをコピー
4. `.env.local`を開いて、`YOUR_API_KEY_HERE`を実際のAPIキーに置き換え:

```env
VITE_GEMINI_API_KEY=AIzaSy... あなたのAPIキー
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent
```

**重要**: `.env.local`は`.gitignore`に含まれているので、コミットされません。

### 5. 開発サーバー起動
```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開く

## GitHub Pagesへのデプロイ

### GitHub Secretsの設定

1. GitHubリポジトリページを開く
2. **Settings** > **Secrets and variables** > **Actions**
3. **New repository secret**をクリック
4. 以下を入力:
   - **Name**: `GEMINI_API_KEY`
   - **Secret**: [あなたのGemini APIキー]
5. **Add secret**をクリック

### 自動デプロイ

mainブランチにpushすると自動的にデプロイされます:

```bash
git add .
git commit -m "Update app"
git push origin main
```

GitHub Actionsが自動で:
1. ビルドを実行
2. APIキーを環境変数から注入
3. GitHub Pagesにデプロイ

デプロイ状況は **Actions** タブで確認できます。

## トラブルシューティング

### AIモードが使えない

**症状**: "現在使用できません"と表示される

**解決方法**:
1. `.env.local`が存在するか確認
2. APIキーが正しく設定されているか確認
3. [Google AI Studio](https://aistudio.google.com/app/apikey)でAPIキーが有効か確認

### ビルドエラー

**症状**: `npm run build`でエラー

**解決方法**:
```bash
# node_modulesを削除して再インストール
rm -rf node_modules
npm install
npm run build
```

### 404エラー (本番環境)

**症状**: GitHub Pagesで404エラー

**確認事項**:
1. GitHub Pages設定が有効か (Settings > Pages)
2. Source: "GitHub Actions"が選択されているか
3. `vite.config.js`の`base`がリポジトリ名と一致しているか

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## ファイル構成

- `.env.local` - ローカル開発用の環境変数（Git管理外）
- `.env.example` - 環境変数ファイルの雛形
- `.gitignore` - `.env.local`を除外
- `.github/workflows/deploy.yml` - 自動デプロイ設定

## セキュリティ

### やってはいけないこと
- ❌ `.env.local`をGitにコミット
- ❌ APIキーをコードに直接記述
- ❌ APIキーをSNSやSlackで共有

### 推奨事項
- ✅ GitHub Secretsでキーを管理
- ✅ `.gitignore`で`config.json`を除外
- ✅ 定期的にAPIキーをローテーション
- ✅ 不要になったキーは削除

## サポート

問題が解決しない場合は、GitHubのIssueで報告してください。
