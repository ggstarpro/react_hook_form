
## 環境

`package.json` を参照ください。

## テストユーザー情報

- テスト Admin Owner

# 開発に参加するまでの流れ

以下の手順を踏んで開発に参加しましょう。

## 1. `git clone`

以下のコマンドを実行してクローンします。

```shell
git clone <リポジトリの URL>
```

## 2. `npm install`

`npm install`を行います。`npm`のバージョンは Volta で固定していますが、Volta を使っていない人は、`npm -v`で 8 系かどうかを確かめます。

```shell
#npmのバージョンを確認（8系でない場合は、8系をインストール）
npm -v

#パッケージをインストール
npm install
```

## 3. husky に権限を与える

以下２つのコマンドを実行して husky の実行ファイルに権限を与える

```shell
chmod a+x .husky/pre-push

chmod a+x .husky/pre-commit
```

## 4. `npm run dev`

`npm run dev`でローカルサーバーを立ち上げます。

```shell
npm run dev
```

# ディレクトリ構成について

実装に関わるすべてのファイルを `src` に入れています。
コンポーネントのディレクトリは機能ベースで切る方針をとっています。

```js
.
├── .next
├── public // 画像ファイルを格納する
├── src
│   ├── components // コンポーネントは機能ベースでディレクトリを切る
│   │   ├── common // 複数の機能にまたがって使用するコンポーネント
│   │   │   ├── parts // さらにコンポーネントの中で使い回せるものは parts に切り出す
│   │   │   │   ├── Button.tsx
│   │   │   │   └── ...
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ...
│   │   ├── sozai // 例: 素材管理の機能で使用するコンポーネント
│   │   └── settings // Admin ユーザー管理の機能で使用する
│   ├── hooks // カスタムフックを配置する
│   │   ├── atom // Recoil 関連のコード
│   │   ├── auth // ログイン・会員登録関連で使用する hook
│   │   ├── common // 共通機能の hook
│   │   ├── sozai
│   │   │   ├── api // 素材関連の api を呼び出す hook
│   │   │   └── useMaterialXXX.ts // そのほか 素材関連のページやコンポーネントで使用する hook
│   │   ├── client // client 関連の hook
│   │   ├── member // client 関連の hook
│   │   └── ...
│   ├── lib // APIを叩く処理やClassでの型定義ファイルを配置する
│   │   ├── api // apiを叩くコードと詰め替え
│   │   ├── common // 共通で使用する型や Class
│   │   ├── const // サイト内で使用する定数
│   ├── pages // ページテンプレートを配置する
│   │   ├── api
│   │   │   └── auth // NextAuth
│   │   ├── ... // ページは実際のディレクトリ参照
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles
...
```

## 使用しているパッケージ

### [`date-fns`](https://date-fns.org/)

日付のフォーマットに使用しています。

### [`husky`](https://typicode.github.io/husky/#/)

`husky` は、git でコミットする直前に登録したコマンドを実行してくれるツールです。コミット前に Prettier と ESLint を走らせるようにしています。
（カスタマイズするとプッシュ前にコマンドを走らせることもできる）

あわせて [`lint-staged`](https://github.com/okonet/lint-staged) も使用していて、こちらは stage に上がっているファイルに対して Lint をかけてくれるツールです。

### [`next-auth`](https://next-auth.js.org/)

ログイン周りの実装で使用しています。ユーザー情報をセッションに入れて管理することができます。

### [`next-head-seo`](https://github.com/catnose99/next-head-seo)

catnose さんが作成した SEO カスタマイズ系の軽量パッケージです。`Layout` コンポーネントで使用しています。

### [react-dropzone](https://react-dropzone.js.org/)

素材をアップロードする際の、ファイルをドラッグアンドドロップする実装で使用しています。

### [`react-hook-form`](https://react-hook-form.com/jp/)

フォームのバリデーションライブラリです。

エラーメッセージの表示用に `@hookform/error-message` も使用しています。

### [`react-icons` ](https://react-icons.github.io/react-icons/)

アイコンの表示に使用しています。

### [`react-select`](https://react-select.com/home)

AutoComplete の実装に使用しています。

### [`recoil`](https://recoiljs.org/)

グローバルな状態管理で使用しています。

### [`swr`](https://swr.vercel.app/ja)

データ取得の React Hooks ライブラリです。データのキャッシュ周りをいい感じにしてくれます。

### [`tailwindcss`](https://tailwindcss.com/)

プロジェクトのスタイリングは Tailwind CSS を使用しています。`postcss` と `autoprefixer` も一緒に使用しています。

`tailwindcss-scoped-groups` というプラグインも使用しています。


### [`rechart`](https://www.npmjs.com/package/hls.js/v/canary)

`rechart` は、チャートを表示するためのライブラリです。

### [`react-player`](https://www.npmjs.com/package/react-player)

ファイルパス、YouTube、Facebook、Twitch、SoundCloud、ストリーミング、Vimeo、Wistia、Mixcloud、DailyMotion、Kaltura などの様々な形式の動画を再生できるコンポーネントを提供してくれるライブラリです。
