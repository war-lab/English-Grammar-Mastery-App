# Quick Setup Guide

## ローカル開発

### Option 1: config.jsonを直接編集（簡単）

1. `src/config.json`を開く
2. `apiKey`を設定:
```json
{
  "geminiApiUrl": "https://...",
  "apiKey": "YOUR_GEMINI_API_KEY"
}
```

> **注意**: この方法だと、誤ってコミットしないように注意が必要です！

### Option 2: .env.localで上書き（推奨・安全）

1. `.env.local`ファイルを作成:
```env
VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
```

2. 環境変数が`config.json`より優先されます

> **利点**: `.env.local`は`.gitignore`されているので安全！

## GitHub Pagesデプロイ

GitHub Secretsで`GEMINI_API_KEY`を設定すると、自動的にビルド時に環境変数として注入されます。

詳細は[DEPLOYMENT.md](./DEPLOYMENT.md)と[SETUP.md](./SETUP.md)を参照してください。
