# ❓ よくある質問 (FAQ)

このページでは、English Grammar Mastery Appに関するよくある質問と回答をまとめています。

## 目次

- [一般的な質問](#一般的な質問)
- [インストールと設定](#インストールと設定)
- [機能について](#機能について)
- [トラブルシューティング](#トラブルシューティング)
- [API関連](#api関連)
- [開発・カスタマイズ](#開発カスタマイズ)

---

## 一般的な質問

### Q: このアプリは無料ですか？

A: はい、完全に無料です。オープンソースプロジェクトとして公開されています。ただし、AI機能を使用する場合は、Google Gemini APIの使用料がかかる可能性があります（無料枠あり）。

### Q: オフラインで使用できますか？

A: 基本的なレッスンとクイズ機能はオフラインで使用できますが、AI問題生成機能にはインターネット接続が必要です。

### Q: モバイルデバイスで使用できますか？

A: はい、レスポンシブデザインを採用しているため、スマートフォンやタブレットでも快適に使用できます。

### Q: 対象年齢は？

A: 主に日本の中学生（12-15歳）を対象としていますが、英文法の基礎を学びたいすべての方にご利用いただけます。

---

## インストールと設定

### Q: Node.jsが必要な理由は？

A: このアプリは開発サーバー（Vite）を使用していますそのためNode.jsが必要です。ただし、[デプロイ済みのバージョン](https://your-deployed-url)にアクセスすれば、Node.jsなしで使用できます。

### Q: インストールに失敗します

A: 以下を確認してください：

1. Node.jsのバージョンが18以上か確認
   ```bash
   node --version
   ```

2. npmキャッシュをクリア
   ```bash
   npm cache clean --force
   npm install
   ```

3. ファイアウォールがnpmをブロックしていないか確認

### Q: ポート5173が使用中と表示されます

A: 別のポートを指定してください：
```bash
npm run dev -- --port 3000
```

---

## 機能について

### Q: Master Reviewはいつ解放されますか？

A: 5つの文型レッスンすべてで満点（100%正解）を取ると解放されます。

ただし、**隠しロック解除機能**を使えば、すぐにアクセスできます：
1. 「🔒 Master Review Locked」カードを見つける
2. 1秒以内に5回連続クリック
3. ロック解除！

### Q: AIチャレンジと通常チャレンジの違いは？

A: 
- **通常チャレンジ**: 事前に用意された問題を使用（AI不要）
- **AIチャレンジ**: Gemini AIがリアルタイムで問題を生成（API キー必要）

### Q: 進捗データはどこに保存されますか？

A: ブラウザの`localStorage`に保存されます。以下の場合、データが消える可能性があります：
- ブラウザのデータをクリアした場合
- シークレットモード/プライベートモード使用時
- 異なるブラウザを使用した場合

### Q: 複数のデバイスで進捗を同期できますか？

A: 現在、同期機能はありません。各デバイスで個別に進捗が管理されます。

### Q: 問題の日本語訳や解説が表示されません

A: 以下を確認してください：
- **AI問題の場合**: APIキーが正しく設定されているか
- **通常クイズの場合**: カリキュラムデータに`explanation`フィールドが含まれているか

現在、通常のクイズには解説が含まれていない可能性があります。`src/logic/curriculum.js`を編集して追加できます。

---

## トラブルシューティング

### Q: 画面が真っ白です

A: 以下を試してください：

1. ブラウザの開発者ツール（F12）でエラーを確認
2. ブラウザキャッシュをクリア（Ctrl+Shift+Delete）
3. node_modulesを再インストール
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Q: レッスンが表示されません

A: `src/logic/curriculum.js`で、レッスンの`isEnabled`が`true`になっているか確認してください：

```javascript
{
  id: 'lesson-id',
  isEnabled: true  // これがfalseだと非表示
}
```

### Q: クイズが動作しません

A: LocalStorageデータが壊れている可能性があります。ブラウザコンソールで以下を実行：

```javascript
localStorage.clear();
location.reload();
```

### Q: ルーティングが機能しません

A: ブラウザのURLを確認してください。Hash-based routing (`#/path`) を使用しているため、以下のような形式になります：

```
http://localhost:5173/#/dashboard
                        ↑ #が必要
```

---

## API関連

### Q: APIキーは必須ですか？

A: いいえ。APIキーがなくても、基本的なレッスンとクイズ機能は使用できます。AI問題生成機能のみAPIキーが必要です。

### Q: APIキーの取得方法は？

A: [API設定ガイド](./API-Setup.md)を参照してください。

簡単な手順：
1. [Google AI Studio](https://makersuite.google.com/app/apikey)にアクセス
2. 「Create API Key」をクリック
3. APIキーをコピー
4. `.env.local`に設定

### Q: API使用料はいくらですか？

A: Gemini APIには無料枠があります：
- **無料**: 月間60リクエスト/分
- **従量課金**: 超過分は有料

詳細は [Google AI Pricing](https://ai.google.dev/pricing) を参照してください。

### Q: APIクォータを超えた場合は？

A: 以下のエラーが表示されます：
```
429 Too Many Requests
```

解決策：
- しばらく待ってから再試行
- 有料プランにアップグレード
- 通常チャレンジを使用（API不要）

### Q: GitHub Pagesにデプロイした後、APIが動作しません

A: GitHub Secretsが正しく設定されているか確認してください：

1. リポジトリの Settings → Secrets
2. `VITE_GEMINI_API_KEY`が存在するか確認
3. GitHub Actionsワークフローでシークレットが正しく読み込まれているか確認

---

## 開発・カスタマイズ

### Q: 新しいレッスンを追加するには？

A: `src/logic/curriculum.js`を編集してください。[開発ガイド](./Development.md#カリキュラムのカスタマイズ)に詳しい手順があります。

### Q: UIの色を変更するには？

A: `src/styles/main.css`のCSS変数を編集：

```css
:root {
  --primary: #6366f1;    /* メインカラー */
  --secondary: #ec4899;  /* アクセントカラー */
  --background: #0f172a; /* 背景色 */
}
```

### Q: 新しい問題タイプを追加するには？

A: `src/logic/geminiService.js`にプロンプトを追加：

```javascript
else if (selectedType === 'my-new-type') {
  prompt = `あなたのプロンプト...`;
}
```

### Q: フレームワーク（React, Vue等）に移行できますか？

A: はい、ロジック層（`src/logic/`）は独立しているため、任意のフレームワークに移植可能です。UI層（`src/ui/`）のみ書き換えてください。

### Q: TypeScriptに変換できますか？

A: はい、Viteは TypeScriptをサポートしています：

1. `npm install -D typescript`
2. `.js`ファイルを`.ts`に変更
3. 型定義を追加

---

## その他

### Q: バグを見つけました

A: [GitHub Issues](https://github.com/[ユーザー名]/English-Grammar-Mastery-App/issues)で報告してください。以下の情報を含めると助かります：
- 発生した問題の詳細
- 再現手順
- ブラウザとバージョン
- エラーメッセージのスクリーンショット

### Q: 新機能を提案したいです

A: [GitHub Issues](https://github.com/[ユーザー名]/English-Grammar-Mastery-App/issues)で提案してください。または、Pull Requestも歓迎します！

### Q: コントリビュートするには？

A: [README.md](../README.md#コントリビューション)のコントリビューションガイドラインを参照してください。

### Q: 商用利用は可能ですか？

A: はい、MITライセンスの下で公開されているため、商用利用も可能です。ただし、Gemini APIの利用規約を遵守してください。

### Q: ライセンスは？

A: MITライセンスです。自由に使用、変更、配布できます。[LICENSE](../LICENSE)ファイルを参照してください。

---

## まだ質問がありますか？

このFAQで解決しない場合は：

1. 📚 [Wikiドキュメント](../)の他のページを確認
2. 🐛 [GitHub Issues](https://github.com/[ユーザー名]/English-Grammar-Mastery-App/issues)で質問
3. 💬 [Discussions](https://github.com/[ユーザー名]/English-Grammar-Mastery-App/discussions)でコミュニティに質問

**Happy Learning! 📚✨**
