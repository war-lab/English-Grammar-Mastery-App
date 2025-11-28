# APIキー漏洩対応ガイド

## ⚠️ 緊急：APIキーを無効化（最優先！）

**これを最初に実行してください：**

1. [Google AI Studio](https://aistudio.google.com/app/apikey)を開く
2. 漏洩したAPIキーを見つけて**削除**
3. 新しいAPIキーを生成
4. 新しいキーをGitHub Secretsに設定

> **重要**: 履歴を削除しても、既にクローンされている可能性があるため、キー自体を無効化することが最も重要です。

## 🔧 Git履歴から漏洩コミットを削除

### 方法1: Interactive Rebaseで削除（推奨）

```bash
# 1. 対象コミットの1つ前から対話的rebaseを開始
git rebase -i 7df6246^

# 2. エディタが開いたら、該当行を削除:
#    pick 7df6246 feat: Introduce...
#    ↓ この行を削除するか、以下に変更:
#    drop 7df6246 feat: Introduce...

# 3. 保存して閉じる

# 4. 強制プッシュ（履歴上書き）
git push origin main --force
```

### 方法2: Reset and Cherry-pick（シンプル）

```bash
# 1. 現在のブランチを一時保存
git branch backup-before-cleanup

# 2. 漏洩コミットの前に戻る
git reset --hard fd4cb26

# 3. 最新のコミット（704db44）をcherry-pick
git cherry-pick 704db44

# 4. 強制プッシュ
git push origin main --force
```

### 方法3: Filter-Branch（完全削除）

```bash
# config.jsonの履歴を完全削除
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch src/config.json" \
  --prune-empty --tag-name-filter cat -- --all

# すべてのブランチに適用
git push origin --force --all
```

## 🧹 ローカルクリーンアップ

```bash
# reflogをクリア
git reflog expire --expire=now --all
git gc --prune=now --aggressive
```

## ✅ 検証

```bash
# 該当ファイルの履歴を確認
git log --all --full-history -- src/config.json

# APIキーが残っていないか検索
git log -p --all -S "AIzaSy"
```

## 📋 手順チェックリスト

- [ ] **最優先**: Google AI StudioでAPIキーを削除
- [ ] 新しいAPIキーを生成
- [ ] 新しいキーをGitHub Secretsに設定
- [ ] Git履歴から漏洩コミットを削除
- [ ] 強制プッシュ (`git push --force`)
- [ ] 履歴にAPIキーがないか確認
- [ ] ローカルのreflogをクリーンアップ
- [ ] チームメンバーに通知（いる場合）

## ⚠️ 注意事項

### Force Pushの影響
- **リスク**: 他の人が既にクローンしている場合、競合が発生
- **対策**: チームに事前通知し、再クローンを依頼

### 完全削除について
- GitHubのキャッシュに数分間残る可能性
- **必ずAPIキーを無効化**してください

## 🔐 今後の予防策

### .gitignore設定
```
# Sensitive configuration
src/config.json
.env.local
.env.*.local
```

### Pre-commit Hook
`.git/hooks/pre-commit`に以下を追加:
```bash
#!/bin/sh
# APIキーが含まれていないかチェック
if git diff --cached --name-only | grep -q "config.json"; then
  echo "❌ Error: Attempting to commit config.json"
  echo "Please use .env.local for local development"
  exit 1
fi
```

実行権限を付与:
```bash
chmod +x .git/hooks/pre-commit
```

## 📞 サポート

問題が解決しない場合:
1. GitHubのサポートに連絡
2. リポジトリを一度削除して再作成（最終手段）
