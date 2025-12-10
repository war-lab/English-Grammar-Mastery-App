# リリースノート v1.1.0 - 時制マスター機能追加

**リリース日**: 2025-12-10

## 🎉 新機能

### 時制マスターカテゴリの追加

新しい学習カテゴリ「**時制マスター (Verb Tenses)**」を追加しました。英語の4つの主要な時制を体系的に学習できます。

#### 📚 新規レッスン (4レッスン)

1. **過去形 (Past Tense)**
   - 規則動詞・不規則動詞の過去形
   - be動詞の過去形（was/were）
   - 過去を示す時間表現
   - 10問のクイズ

2. **未来形 (Future Tense)**
   - will + 動詞の原形
   - be going to + 動詞の原形
   - willとbe going toの使い分け
   - 10問のクイズ

3. **進行形 (Progressive Tense)**
   - 現在・過去・未来進行形
   - -ing形の作り方ルール
   - 進行形にできない動詞
   - 10問のクイズ

4. **完了形 (Perfect Tense)**
   - have/has + 過去分詞
   - 完了・経験・継続の3つの用法
   - forとsinceの使い分け
   - 10問のクイズ

#### 🎮 100問クイズシステム

時制カテゴリ用の動的クイズ生成システムを実装:
- レベル1-4: 各時制の基礎問題
- レベル5-10: 混合問題（難易度段階的上昇）
- 3段階の語彙・文構造複雑度
- 自動解説生成機能
- AIモード対応

#### 🏆 エキスパートチャレンジページ

新しいサマリーページ「時制 エキスパートチャレンジ」を追加:
- 4つの時制の説明カード
- 通常チャレンジモード
- AIチャレンジモード
- 100問連続正解システム

#### 🏠 ホームページUI更新

- 時制カテゴリ用アイコン追加
- 時制マスターコースカードをホームページに追加
- 進捗表示とチャレンジボタンの統合

### 🛠️ デバッグ機能

開発者向けデバッグ機能を追加:
- `config.json`に`debug.unlock100QuizMode`設定を追加
- `true`に設定すると、レッスン未完了でも100問クイズにアクセス可能
- テストとデモンストレーション用途に最適

## 🐛 バグ修正

### UI修正

- **サマリーページのタイトル中央揃え**: `.summary-header`にtext-align centerを追加
- **タイトルレイアウト改善**: flex-direction columnを追加してレイアウトを最適化
- **バッジの表示改善**: `pattern-badge`にwhite-space nowrapを追加して改行を防止

## 📖 ドキュメント更新

### LESSON_STRUCTURE.md大幅拡張

1. **ディレクトリ構造更新**
   - 時制カテゴリディレクトリを追加
   - 4つの時制レッスンファイルを記載

2. **100問クイズジェネレーター実装ガイド**
   - quizGenerator.jsの配置方法
   - 2つの実装パターン（テンプレート方式・データプール方式）
   - 難易度システムの詳細説明
   - 実装のベストプラクティス
   - サンプルコード付き

3. **Gitコミット手順の追加**
   - プレフィックス一覧（feat, fix, docs, style, refactor等）
   - コミット手順の詳細説明
   - 実用的なコミット例
   - ベストプラクティス

## 📂 変更されたファイル

### 新規ファイル
- `src/logic/curriculum/tenses/pastTense.js`
- `src/logic/curriculum/tenses/futureTense.js`
- `src/logic/curriculum/tenses/progressiveTense.js`
- `src/logic/curriculum/tenses/perfectTense.js`
- `src/logic/curriculum/tenses/quizGenerator.js`
- `src/ui/views/SummaryTenses.js`
- `src/assets/images/icon-tenses.png`

### 更新ファイル
- `src/logic/curriculum/index.js` - 時制カテゴリを登録
- `src/ui/views/Home.js` - 時制カードを追加
- `src/ui/views/CategorySelection.js` - デバッグモード対応
- `src/ui/components/LearningPageTemplate.js` - デバッグモード対応
- `src/ui/router.js` - 時制サマリーページのルート追加
- `src/config.json` - デバッグ設定追加
- `src/styles/main.css` - UI修正（中央揃え、flex layout）
- `docs/LESSON_STRUCTURE.md` - 大幅拡張

## 📊 統計

- **新規レッスン**: 4レッスン
- **新規クイズ問題**: 40問
- **新規ファイル**: 7個
- **更新ファイル**: 8個
- **追加コード行数**: 約2,400行
- **ドキュメント追加**: 約500行

## 🎯 次のバージョンで検討中

- 過去完了形・未来完了形レッスンの追加
- 仮定法レッスンの追加
- 時制混合練習問題
- レッスン間の推奨学習順序機能

## 🔗 関連リンク

- [レッスン構成ガイド](docs/LESSON_STRUCTURE.md)
- [100問クイズジェネレーター実装方法](docs/LESSON_STRUCTURE.md#-100問クイズジェネレーター-オプション)
- [Gitコミット手順](docs/LESSON_STRUCTURE.md#-gitコミット手順)

---

**対応バージョン**: v1.0.0 → v1.1.0  
**互換性**: 既存の進捗データとの完全互換性あり
