# 🔑 API設定ガイド

このガイドでは、Gemini AIを使用したAI問題生成機能の設定方法を説明します。

## 目次

- [Gemini APIについて](#gemini-apiについて)
- [APIキーの取得](#apiキーの取得)
- [ローカル開発環境での設定](#ローカル開発環境での設定)
- [本番環境（GitHub Pages）での設定](#本番環境github-pagesでの設定)
- [API使用量と制限](#api使用量と制限)
- [トラブルシューティング](#トラブルシューティング)

---

## Gemini APIについて

### 概要

Google Gemini APIは、最新の大規模言語モデルを使用して、自然言語処理タスクを実行できるAPIです。このアプリでは、以下の用途で使用しています：

- 英文法問題の自動生成
- 日本語訳の生成
- 詳しい解説の生成

### 使用モデル

- **モデル名**: `gemini-1.5-flash`
- **特徴**: 高速レスポンス、コスト効率が良い
- **用途**: テキスト生成、翻訳、解説

### 料金

Gemini APIには無料枠があります：

- **無料プラン**: 月間60リクエスト/分まで無料
- **有料プラン**: 超過分は従量課金

詳細は [Google AI Pricing](https://ai.google.dev/pricing) を参照してください。

---

## APIキーの取得

### ステップ1: Google AI Studioにアクセス

1. [Google AI Studio](https://makersuite.google.com/app/apikey)を開く
2. Googleアカウントでサインイン

### ステップ2: APIキーを作成

1. 「Get API Key」または「Create API Key」ボタンをクリック
2. 既存のGoogle Cloudプロジェクトを選択、または新規作成
   - 新規作成の場合は「Create API key in new project」を選択
3. APIキーが生成されたら、**すぐにコピー**してください

⚠️ **セキュリティ警告**: APIキーは二度と表示されないため、安全な場所に保存してください。

### ステップ3: APIキーの確認

生成されたAPIキーは以下のような形式です：

```
AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## ローカル開発環境での設定

### 方法1: 環境変数ファイル（推奨）

#### 1. `.env.local`ファイルを作成

プロジェクトルートディレクトリに`.env.local`ファイルを作成：

```bash
# Windows (PowerShell)
New-Item .env.local -Type File

# macOS/Linux
touch .env.local
```

#### 2. APIキーを追加

`.env.local`ファイルに以下を記述：

```env
VITE_GEMINI_API_KEY=あなたのAPIキーをここに貼り付け
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
```

**例**:
```env
VITE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
```

#### 3. 開発サーバーを再起動

```bash
# Ctrl+C で現在のサーバーを停止
# 再起動
npm run dev
```

### 方法2: config.jsonファイル（非推奨）

⚠️ **注意**: この方法はセキュリティ上推奨されません。開発のみに使用してください。

`src/config.json`を編集：

```json
{
  "apiKey": "あなたのAPIキー",
  "geminiApiUrl": "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
}
```

### セキュリティベストプラクティス

✅ **DO（推奨）**:
- `.env.local`ファイルを使用
- `.env.local`を`.gitignore`に追加（デフォルトで含まれています）
- APIキーを環境変数で管理

❌ **DON'T（非推奨）**:
- APIキーをソースコードにハードコード
- APIキーをGitにコミット
- APIキーを公開リポジトリにプッシュ

---

## 本番環境（GitHub Pages）での設定

GitHub Pagesにデプロイする場合、APIキーをGitHub Secretsで管理します。

### ステップ1: GitHub Secretsに追加

1. GitHubリポジトリページを開く
2. **Settings** → **Secrets and variables** → **Actions** に移動
3. **New repository secret** をクリック
4. 以下のSecretを追加：

| Name | Value |
|------|-------|
| `VITE_GEMINI_API_KEY` | あなたのGemini APIキー |
| `VITE_GEMINI_API_URL` | `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent` |

### ステップ2: GitHub Actionsワークフローの確認

`.github/workflows/deploy.yml`が以下のようになっているか確認：

```yaml
- name: Build
  env:
    VITE_GEMINI_API_KEY: ${{ secrets.VITE_GEMINI_API_KEY }}
    VITE_GEMINI_API_URL: ${{ secrets.VITE_GEMINI_API_URL }}
  run: npm run build
```

### ステップ3: デプロイ

変更をプッシュすると、GitHub Actionsが自動的にビルドしてデプロイします：

```bash
git add .
git commit -m "Update configuration"
git push origin main
```

### API無効化オプション

APIキーを設定しない場合、AI問題生成機能は無効化され、以下のメッセージが表示されます：

```
AIモードは現在使用できません。
APIキーが設定されていません。
```

通常のクイズ機能は引き続き使用できます。

---

## API使用量と制限

### リクエスト制限

Gemini APIには以下のレート制限があります：

- **無料プラン**: 60 requests per minute (RPM)
- **有料プラン**: より高いRPM

### 使用量の確認

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. プロジェクトを選択
3. **APIs & Services** → **Dashboard**
4. Gemini APIの使用状況を確認

### コスト最適化のヒント

このアプリでは、すでに以下の最適化を実装しています：

1. **キャッシング**: 問題をLocalStorageにキャッシュ（未実装だが推奨）
2. **低コストモデル**: `gemini-1.5-flash`を使用
3. **短いプロンプト**: 効率的なプロンプト設計

---

## トラブルシューティング

### エラー1: API_KEY_NOT_CONFIGURED

**症状**:
```
AIモードは現在使用できません。
APIキーが設定されていません。
```

**原因**: 環境変数が正しく設定されていない

**解決策**:
1. `.env.local`ファイルが存在するか確認
2. ファイル内の`VITE_GEMINI_API_KEY`が正しいか確認
3. サーバーを再起動

### エラー2: 404 Not Found

**症状**: AI問題生成時に404エラー

**原因**: APIエンドポイントURLが間違っている

**正しいURL**:
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
```

**確認方法**:
```javascript
// ブラウザコンソールで確認
console.log(import.meta.env.VITE_GEMINI_API_URL);
```

### エラー3: 401 Unauthorized

**症状**: 認証エラー

**原因**: 
- APIキーが無効
- APIキーの権限が不足

**解決策**:
1. APIキーを再生成
2. Google Cloud Consoleで Gemini APIが有効化されているか確認
3. APIキーに適切な権限があるか確認

### エラー4: 429 Too Many Requests

**症状**: リクエスト過多エラー

**原因**: レート制限を超えた

**解決策**:
1. リクエスト頻度を下げる
2. 有料プランにアップグレード
3. キャッシング機能を実装

### デバッグモード

APIリクエストの詳細を確認するには、ブラウザの開発者ツールで：

1. **Network**タブを開く
2. **Fetch/XHR**フィルターを選択
3. API リクエストをクリック
4. **Headers**と**Response**タブで詳細を確認

---

## さらに詳しく

- [Gemini API公式ドキュメント](https://ai.google.dev/docs)
- [Google AI Studio](https://makersuite.google. com/app/apikey)
- [料金プラン](https://ai.google.dev/pricing)
- [利用規約](https://policies.google.com/terms)

---

## 次のステップ

API設定が完了したら：

1. 🧪 AI問題生成機能をテスト
2. 📊 使用量を監視
3. 🚀 本番環境にデプロイ（[デプロイガイド](../DEPLOYMENT.md)参照）
