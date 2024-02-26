## 環境

`package.json` を参照ください。

# 開発に参加するまでの流れ

以下の手順を踏んで開発に参加しましょう。

## 1. `git clone`

以下のコマンドを実行してクローンします。

```shell
git clone <リポジトリの URL>
```

## 2. `npm install`

`npm install`を行います。`npm`のバージョンは Volta で固定していますが、Volta を使っていない人は、`npm -v`で 10 系かどうかを確かめます。

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
