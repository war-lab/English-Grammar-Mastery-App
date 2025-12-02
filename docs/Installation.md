# 📥 インストールガイド

このガイドでは、English Grammar Mastery Appのセットアップ方法を詳しく説明します。

## 目次

- [システム要件](#システム要件)
- [基本インストール](#基本インストール)
- [API設定（オプション）](#api設定オプション)
- [開発環境のセットアップ](#開発環境のセットアップ)
- [トラブルシューティング](#トラブルシューティング)

---

## システム要件

### 必須

- **Node.js**: バージョン18.0.0以上
- **npm**: バージョン9.0.0以上（Node.jsに付属）
- **モダンブラウザ**: Chrome, Firefox, Safari, Edge（最新版推奨）

### 推奨

- **Git**: バージョン管理用
- **Visual Studio Code**: 推奨エディタ

### オプション

- **Gemini API Key**: AI問題生成機能を使用する場合のみ必要

---

## 基本インストール

### 1. リポジトリのクローン

```bash
# HTTPSでクローン
git clone https://github.com/[ユーザー名]/English-Grammar-Mastery-App.git

# または SSHでクローン
git clone git@github.com:[ユーザー名]/English-Grammar-Mastery-App.git

# プロジェクトディレクトリに移動
cd English-Grammar-Mastery-App
```

### 2. 依存関係のインストール

```bash
# npmを使用
npm install

# またはyarnを使用
yarn install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開くと、アプリが表示されます。

### 4. 動作確認

以下の点を確認してください：
- ✅ ホームページが正しく表示される
- ✅ Dashboardに移動できる
- ✅ レッスンが開ける
- ✅ クイズが動作する

---

## API設定（オプション）

AI問題生成機能を使用する場合のみ、この設定が必要です。

### 1. Gemini API Keyの取得

1. [Google AI Studio](https://makersuite.google.com/app/apikey)にアクセス
2. Googleアカウントでサインイン
3. 「Create API Key」をクリック
4. APIキーをコピー

### 2. 環境変数ファイルの作成

プロジェクトルートに`.env.local`ファイルを作成：

```bash
# .env.localファイルを作成
touch .env.local
```

以下の内容を追加：

```env
VITE_GEMINI_API_KEY=あなたのAPIキーをここに貼り付け
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
```

### 3. セキュリティ注意事項

⚠️ **重要**: `.env.local`ファイルは`.gitignore`に追加されており、Gitにコミットされません。APIキーを公開リポジトリにプッシュしないよう注意してください。

### 4. 動作確認

1. 開発サーバーを再起動
2. Master Reviewにアクセス
3. 「🤖 AIチャレンジ」をクリック
4. AI問題が正しく生成されることを確認

APIキーが設定されていない場合、以下のメッセージが表示されます：
```
AIモードは現在使用できません。
APIキーが設定されていません。
```

---

## 開発環境のセットアップ

### VS Code推奨拡張機能

プロジェクトをVS Codeで開発する場合、以下の拡張機能を推奨します：

1. **ESLint** - JavaScriptリント
2. **Prettier** - コードフォーマッタ
3. **Vite** - Vite開発サポート
4. **JavaScript (ES6) code snippets** - JS短縮入力

### エディタ設定

`.vscode/settings.json`を作成（推奨）：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "files.eol": "\n"
}
```

### Live Reload

Viteは自動的にホットリロードを提供します。ファイルを保存すると、ブラウザが自動的に更新されます。

---

## トラブルシューティング

### よくある問題と解決策

#### 問題1: `npm install`が失敗する

**エラー例**:
```
npm ERR! code ENOENT
npm ERR! syscall open
```

**解決策**:
```bash
# npmキャッシュをクリア
npm cache clean --force

# 再インストール
npm install
```

#### 問題2: ポート5173が既に使用されている

**エラー例**:
```
Port 5173 is in use
```

**解決策**:
```bash
# 別のポートを指定
npm run dev -- --port 3000
```

または、使用中のプロセスを終了：
```bash
# Windowsの場合
netstat -ano | findstr :5173
taskkill /PID [プロセスID] /F

# macOS/Linuxの場合
lsof -i :5173
kill -9 [プロセスID]
```

#### 問題3: APIが動作しない

**症状**: AI問題が生成されない

**確認事項**:
1. `.env.local`ファイルが正しく作成されているか
2. APIキーが正しくコピーされているか（空白や改行が含まれていないか）
3. サーバーを再起動したか
4. ブラウザのコンソールにエラーが表示されていないか

**デバッグ方法**:
```bash
# 環境変数が読み込まれているか確認
# ブラウザのコンソールで実行
console.log(import.meta.env.VITE_GEMINI_API_KEY);
```

#### 問題4: 画面が真っ白

**原因**: JavaScriptエラーの可能性

**確認方法**:
1. ブラウザの開発者ツールを開く（F12）
2. Consoleタブでエラーメッセージを確認
3. Networkタブでリソースが正しく読み込まれているか確認

**一般的な解決策**:
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install

# ブラウザキャッシュをクリア
# Ctrl + Shift + Delete (Windows/Linux)
# Cmd + Shift + Delete (macOS)
```

#### 問題5: LocalStorageのデータがおかしい

**症状**: 進捗が正しく保存されない、表示がおかしい

**解決策**:
ブラウザの開発者ツールで以下を実行：
```javascript
// すべての進捗をリセット
localStorage.clear();
location.reload();
```

---

## 次のステップ

インストールが完了したら：

1. 📖 [機能説明](./Features.md)を読んでアプリの使い方を学ぶ
2. 🛠️ [開発ガイド](./Development.md)でカスタマイズ方法を確認
3. 🚀 [デプロイガイド](../DEPLOYMENT.md)で公開方法を学ぶ

---

## サポート

問題が解決しない場合は、[GitHubのIssue](https://github.com/[ユーザー名]/English-Grammar-Mastery-App/issues)で質問してください。
