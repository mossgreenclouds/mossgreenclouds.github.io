# コンテンツ更新手順

このサイトは静的サイトです。写真とテキストは素材ファイルを更新し、`content.generated.js` を再生成して反映します。

## 触る場所

- 写真: `assets/img/photo/`
- テキスト: `assets/text/夢境紀.txt`
- MIX音源: `assets/mix/`
- MIXジャケットなど固定画像: `assets/img/`
- 表示データ生成: `content.generated.js`
- 生成スクリプト: `sync-content.js`

## 写真を更新する

1. `assets/img/photo/` に写真を追加、または不要な写真を削除する。
2. 対応形式は `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`。
3. 次のコマンドを実行する。

```sh
/Users/ak100/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node sync-content.js
```

4. GitHub Desktopで `assets/img/photo/` と `content.generated.js` の変更を確認する。
5. コミットしてプッシュする。

## テキストを更新する

1. `assets/text/夢境紀.txt` を編集する。
2. 段落は空行で区切る。
3. 次のコマンドを実行する。

```sh
/Users/ak100/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node sync-content.js
```

4. GitHub Desktopで `assets/text/夢境紀.txt` と `content.generated.js` の変更を確認する。
5. コミットしてプッシュする。

## MIXを手動で追加・変更する

1. MP3を `assets/mix/` に置く。GitHub Pagesで扱いやすいように100MB未満にする。
2. ジャケット画像を `assets/img/` に置く。
3. `script.js` の `mixes` 配列に次の項目を追加、または既存項目を編集する。

```js
{
  title: "タイトル",
  audio: "assets/mix/file.mp3",
  cover: "assets/img/cover.jpg",
  genre: "Genre",
  date: "YYYY.MM.DD",
  tracklist: `01 Artist / Title
02 Artist / Title`
}
```

4. `dreamz` と `DA FINEST` のようにタイトル画像を使う場合は、`titleImage` と `subtitle` も指定する。
5. 表示確認後、変更ファイルをコミットしてプッシュする。

## 更新前チェック

`content.generated.js` が最新か確認する。

```sh
/Users/ak100/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node sync-content.js --check
```

`content.generated.js is current` と出れば最新です。

## 公開手順

1. GitHub Desktopで変更内容を確認する。
2. Summaryに更新内容を書く。例: `update photos`
3. `Commit to main` を押す。
4. `Push origin` または `Push branch` を押す。
5. 数分待って `https://mossgreenclouds.github.io/` を確認する。

## 注意

- `content.generated.js` は直接編集しない。
- `.DS_Store` は不要。表示された場合はコミットしない。
- 写真を大量に追加しても、サイト側は読み込みごとにランダムに一部を表示する。
- テキストは必ず `assets/text/夢境紀.txt` を編集して管理する。
