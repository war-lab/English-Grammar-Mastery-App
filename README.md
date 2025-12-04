# 📚 English Grammar Mastery App

> 日本の中学生向け英文法学習アプリケーション

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 概要

English Grammar Mastery Appは、日本の中学生が英文法の5文型を効率的に学習できる革新的なWebアプリケーションです。AI技術を活用した動的な問題生成機能により、飽きることなく継続的に学習できます。

### 主な特徴

- 🎯 **5文型の完全マスター**: SV、SVC、SVO、SVOO、SVOCの基本5文型を体系的に学習
- 🤖 **AI問題生成**: Gemini AIによる無限の問題バリエーション
- 📖 **詳しい日本語解説**: すべての問題に日本語訳と詳細な解説付き
- 🎨 **美しいUI**: グラスモーフィズムデザインで直感的な操作性
- 📊 **進捗追跡**: 学習進度を視覚的に確認
- 🔓 **隠し機能**: ユーザーを楽しませる秘密の要素も実装
- 🌐 **GitHub Pagesデプロイ対応**: 簡単に公開可能

## 🎮 デモ

アプリは以下のURLで公開されています：
- **デモサイト**: https://war-lab.github.io/English-Grammar-Mastery-App/

## 📸 スクリーンショット

### ダッシュボード
学習進度と利用可能なレッスンを一目で確認できます。

### レッスン画面
文型の詳しい解説とインタラクティブなダイアグラムで理解を深めます。

### クイズ画面
問題に答えると、即座に詳しい解説が表示されます。

### AI問題チャレンジ
AIが生成する問題で、無限に学習を続けられます。

## 🚀 クイックスタート

### 前提条件

- Node.js 18以上
- npm または yarn
- (オプション) Gemini API Key（AI機能を使用する場合）

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/war-lab/English-Grammar-Mastery-App.git

# プロジェクトディレクトリに移動
cd English-Grammar-Mastery-App

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開きます。

### API設定（オプション）

AI問題生成機能を使用する場合：

1. `.env.local`ファイルを作成：
```bash
VITE_GEMINI_API_KEY=your_api_key_here
VITE_GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent
```

2. [Google AI Studio](https://makersuite.google.com/app/apikey)でAPIキーを取得

詳しくは [API設定ガイド](./docs/API-Setup.md) を参照してください。

## 📖 ドキュメント

詳細なドキュメントは[Wikiページ](./docs/)をご覧ください：

- 📘 [インストールガイド](./docs/Installation.md)
- 🎓 [機能説明](./docs/Features.md)
- 🛠️ [開発ガイド](./docs/Development.md)
- 🔑 [API設定](./docs/API-Setup.md)
- ❓ [よくある質問](./docs/FAQ.md)
- 🚀 [デプロイガイド](./DEPLOYMENT.md)

## 🎯 主な機能

### 1. 学習コース
体系的なカリキュラムで英文法をマスターします：

- **5文型マスター**:
  - SV, SVC, SVO, SVOO, SVOCの基本5文型を徹底解説
  - 無限クイズで定着度を確認
- **品詞マスター**:
  - 名詞、動詞、形容詞など8大品詞を学習
  - 文中での役割を理解するクイズ

### 2. インタラクティブクイズ

- ランダム化された問題順序
- 即座のフィードバック
- 詳しい日本語解説
- 進捗の自動保存

### 3. AI問題生成

Gemini AIによる4種類の問題タイプ：
- **文型判定**: 英文の文型を見分ける
- **穴埋め問題**: 適切な語を選ぶ
- **誤り訂正**: 文法ミスを見つけて修正
- **文型変換**: 指定された文型に書き換える

### 4. Master Review Challenge

全5文型をマスターすると解放される特別チャレンジ：
- 難易度が徐々に上昇
- 連続正解でレベルアップ
- ベストスコアの記録
- 🔓 隠し解除機能（ヒント：🔒を素早く5回クリック！）

## 🛠️ 技術スタック

### フロントエンド
- **Vite** - 高速ビルドツール
- **Vanilla JavaScript (ES6+)** - フレームワークレス設計
- **CSS3** - グラスモーフィズムデザイン
- **Google Fonts (Outfit)** - モダンなタイポグラフィ

### AI / API
- **Google Gemini API** - 問題生成AIエンジン
- **Fetch API** - HTTPリクエスト処理

### デプロイ
- **GitHub Actions** - 自動デプロイパイプライン
- **GitHub Pages** - ホスティング

### データ管理
- **LocalStorage** - 進捗とスコアの永続化

## 📁 プロジェクト構造

```
English-Grammar-Mastery-App/
├── src/
│   ├── logic/              # ビジネスロジック
│   │   ├── curriculum.js   # カリキュラムデータ
│   │   ├── geminiService.js # AI問題生成
│   │   ├── quizGenerator.js # クイズ生成
│   │   └── storage.js      # ローカルストレージ管理
│   ├── ui/
│   │   ├── components/     # 再利用可能コンポーネント
│   │   ├── views/          # ページビュー
│   │   └── router.js       # ルーティング
│   ├── styles/            # CSS
│   └── main.js            # エントリーポイント
├── public/                # 静的ファイル
├── docs/                  # Wikiドキュメント
├── .github/workflows/     # CI/CDパイプライン
└── index.html            # HTMLエントリーポイント
```

## 🤝 コントリビューション

コントリビューションを歓迎します！以下の手順でお願いします：

1. このリポジトリをFork
2. Feature branchを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をCommit (`git commit -m 'Add some AmazingFeature'`)
4. BranchをPush (`git push origin feature/AmazingFeature`)
5. Pull Requestを作成

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 👨‍💻 開発者

- **war-lab** - [GitHub](https://github.com/war-lab)

## 🙏 謝辞

- Google Gemini AIチーム - 素晴らしいAI技術の提供
- Viteチーム - 高速な開発体験
- すべてのコントリビューター

## 📮 お問い合わせ

質問や提案がある場合は、[Issue](https://github.com/war-lab/English-Grammar-Mastery-App/issues)を作成してください。

---

<p align="center">Made with ❤️ for Japanese students learning English grammar</p>
