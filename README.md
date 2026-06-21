# TechTree

## 概要

Discordコミュニティ向けのエンジニアスキル可視化Webアプリ

## フォルダ構成

```bash
.
├── .github
│    ├── ISSUE_TEMPLATE
│    │    ├── bug.md
│    │    ├── feature.md
│    │    ├── spike.md
│    │    └── task.md
│    ├── workflows
│    │    ├── ci.yaml
│    │    └── cicd-dev.yaml
│    └── pull_request_template.md
├── .vscode
│    └── extensions.json
├── docs
│    └── setup.md
├── public
│    └── ...
├── src
│    ├── app
│    │    └── ...
│    ├── components
│    │    └── ...
│    ├── lib
│    │    └── ...
│    └── stories
│         └── ...
├── .envrc
├── .gitignore
├── .prettierignore
├── .prettierrc
├── README.md
├── components.json
├── eslint.config.mjs
├── flake.lock
├── flake.nix
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── tsconfig.json
└── vercel.ts
```

## プロジェクト管理

- タスク管理: GitHub Projects/Issues
- 開発フロー: [GitHub Flow](https://docs.github.com/ja/get-started/using-github/github-flow)
- PRテンプレート・Issueテンプレートの整備

## ブランチ戦略

| ブランチ  | 用途     |
| --------- | -------- |
| `develop` | 開発環境 |
| `main`    | 本番環境 |

- ブランチ保護: `develop`/`main`へのマージはPR必須

---

### ブランチの規則

ブランチの一貫性と明確さを保つために、以下の規則を採用

※xxxはIssueの番号を指す

| ブランチ           | 説明                         |
| ------------------ | ---------------------------- |
| feat/issue-xxx     | 機能追加等                   |
| fix/issue-xxx      | バグ修正や機能改善等         |
| refactor/issue-xxx | リファクタリング等           |
| ci/issue-xxx       | 環境構築に関わる追加や修正等 |
| chore/issue-xxx    | その他                       |

---

### コミットメッセージの規則

コミットメッセージの一貫性と明確さを保つために、[Semantic Commit Message](https://sparkbox.com/foundry/semantic_commit_messages)の規則を採用

:wrench: chore: （タスクファイルなどプロダクションに影響のない修正、実稼働のコードの変更は含めない）

    🔧 chore: デバッグ用のログを削除

:memo: docs: （ドキュメントの更新）

    📝 docs: API の使用方法をREADMEに追記

:sparkles: feat: （ユーザー向けの機能の追加や変更）

    ✨ feat: ユーザープロフィール画面の追加

:bug: fix: （ユーザー向けの不具合の修正）

    🐛 fix: ログイン時のエラーハンドリングを修正

:recycle: refactor: （リファクタリングを目的とした修正）

    ♻️ refactor: 変数名を明確にするためのリファクタリング

:art: style: （スタイルやセミコロンの欠落などの修正、実稼働のコードの変更は含めない）

    🎨 style: コードのインデントを修正

:microscope: test: （テストコードの追加や修正、実稼働のコードの変更は含めない）

    🔬 test: 新規登録機能のユニットテストを追加

:construction_worker: ci: （環境構築に関わる追加や修正）

    👷 ci: バージョン変更に伴うDockerfileの修正

## コード品質

### Formatter

Prettierを導入しています。  
設定は`.prettierrc`で管理しています。  
主な設定は以下になります。

- ダブルクォーテーションを使用
- 不要なセミコロンは付けない
- 末尾カンマは付けない

### Lint

ESLintを導入しています。  
設定は`eslint.config.mjs`で管理しています。  
主な設定は以下になります。

- `eslint-config-next`のCore Web Vitals/TypeScript設定を使用
- `eslint-config-prettier`でPrettierと衝突しやすいルールを無効化
- シングルクォーテーションを使用していないか検査

## クイックスタート

1. [初期セットアップ](docs/setup.md)をします。

2. 以下のコマンドを実行して、パッケージをインストールします。

```bash
pnpm i
```

3. 以下のコマンドを実行して、開発サーバーを起動します。

```bash
pnpm dev
```

4. 起動が完了したら、ブラウザで[`http://localhost:3000`](http://localhost:3000)にアクセスして動作を確認できます。

## 主要コマンド

| コマンド               | 内容                        |
| ---------------------- | --------------------------- |
| `pnpm dev`             | Next.js開発サーバーを起動   |
| `pnpm build`           | 本番ビルドを作成            |
| `pnpm start`           | 本番サーバーを起動          |
| `pnpm lint`            | ESLintを実行                |
| `pnpm format`          | Prettierで整形              |
| `pnpm format:check`    | Prettierの整形状態を確認    |
| `pnpm typecheck`       | TypeScriptの型検査を実行    |
| `pnpm typecheck:full`  | 型定義を含めて型検査を実行  |
| `pnpm storybook`       | Storybook開発サーバーを起動 |
| `pnpm build-storybook` | Storybookの静的ビルドを作成 |

## ドキュメント

- [初期セットアップ](docs/setup.md) - 初期セットアップ
