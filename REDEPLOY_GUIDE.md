# Secrets変更時の再デプロイ手順

## 📋 Secretsを変更した場合

GitHub Secretsの値（APIキーなど）を変更した場合、**再デプロイが必要**です。

なぜなら、Secretsの値はビルド時に環境変数として注入されるため、既にデプロイされているアプリには反映されないからです。

## 🚀 手動で再デプロイする方法

### 方法1: GitHubのUIから（最も簡単）

1. GitHubリポジトリページを開く
2. **Actions** タブをクリック
3. 左サイドバーから **Deploy to GitHub Pages** を選択
4. 右上の **Run workflow** ボタンをクリック
5. ブランチを選択（通常は `main`）
6. **Run workflow** をクリック

これで最新のSecretsを使って再ビルド・再デプロイされます！

### 方法2: 空コミットをプッシュ

```bash
git commit --allow-empty -m "chore: trigger redeploy after Secrets update"
git push origin main
```

### 方法3: GitHub CLI（CLI派向け）

```bash
gh workflow run deploy.yml
```

## 🔄 再デプロイが必要なケース

以下の変更を行った場合は、必ず再デプロイしてください：

- ✅ `GEMINI_API_KEY` を変更した
- ✅ `GEMINI_API_URL` を変更した
- ✅ 新しいSecretを追加した
- ✅ Secretを削除した

## ⏱️ デプロイ完了までの時間

通常、**2〜3分**でデプロイが完了します。

**Actions** タブで進捗を確認できます：
- 🟡 黄色（実行中）
- ✅ 緑（成功）
- ❌ 赤（失敗）

## 💡 ヒント

### 変更後すぐに確認したい場合

1. Secretsを変更
2. すぐに **Run workflow** で再デプロイ
3. 2〜3分待つ
4. GitHub PagesのURLで確認

### APIキーをローテーションする場合

1. Google AI Studioで新しいキーを生成
2. GitHub Secretsを新しいキーに更新
3. **Run workflow** で再デプロイ
4. デプロイ成功を確認
5. 古いキーを削除

## 🔐 セキュリティのベストプラクティス

- 定期的にAPIキーをローテーション（推奨：3〜6ヶ月ごと）
- ローテーション時は必ず再デプロイを忘れずに！
- 古いキーは新しいデプロイが成功してから削除

## ❓ よくある質問

**Q: Secretsを変更したのにアプリに反映されない**
A: 再デプロイを忘れていませんか？ **Run workflow** を実行してください。

**Q: 毎回手動で再デプロイするのは面倒...**
A: 通常、Secretsの変更は頻繁には行わないため、手動で問題ありません。定期的なローテーションが必要な場合は、スケジュールデプロイを検討してください。

**Q: スケジュールで自動デプロイできる？**
A: はい、可能です。毎週日曜日の深夜にデプロイする例：
```yaml
on:
  schedule:
    - cron: '0 0 * * 0'  # 毎週日曜日 00:00 UTC
```
