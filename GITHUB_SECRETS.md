# GitHub Secrets 設定ガイド

## 必須設定

GitHubリポジトリの **Settings** > **Secrets and variables** > **Actions** で以下を設定：

### 1. GEMINI_API_KEY（必須）
- **Name**: `GEMINI_API_KEY`
- **Secret**: [あなたのGemini APIキー]
- **取得方法**: [Google AI Studio](https://aistudio.google.com/app/apikey)

### 2. GEMINI_API_URL（オプション）
- **Name**: `GEMINI_API_URL`
- **Secret**: `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent`
- **用途**: 別のモデルを使いたい場合に設定

> 💡 **Tip**: `GEMINI_API_URL`を設定しない場合、デフォルトで`gemini-1.5-flash`が使用されます。

## 利用可能なモデル

| モデルURL | 特徴 | 推奨 |
|----------|------|------|
| `gemini-1.5-flash` | 高速・コスト効率的 | ✅ 推奨 |
| `gemini-1.5-pro` | 高性能・高品質 | 重い処理向け |
| `gemini-pro` | 旧モデル | ❌ 非推奨 |

## 設定手順

1. [Google AI Studio](https://aistudio.google.com/app/apikey)でAPIキーを生成
2. GitHubリポジトリを開く
3. **Settings** タブをクリック
4. 左サイドバーの **Secrets and variables** > **Actions**
5. **New repository secret** をクリック
6. Secretを追加:

```
Name: GEMINI_API_KEY
Secret: AIzaSy... (あなたのAPIキー)
```

7. （オプション）別のモデルを使う場合:

```
Name: GEMINI_API_URL
Secret: https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent
```

## 確認方法

1. Secretsを設定
2. `git push origin main`
3. **Actions** タブでビルドを確認
4. デプロイ完了後、AIチャレンジボタンをテスト

## トラブルシューティング

### "現在使用できません"と表示される
- `GEMINI_API_KEY`が設定されているか確認
- APIキーが有効か確認（Google AI Studio）

### 404エラー
- モデルURLが正しいか確認
- APIバージョン（`v1`）が正しいか確認
- モデル名に`-latest`サフィックスがないか確認

## セキュリティ

- ✅ SecretはGitHub Actionsでのみアクセス可能
- ✅ ビルドログに表示されない（マスクされる）
- ✅ プルリクエストからはアクセス不可
- ⚠️ APIキーは定期的にローテーション推奨
