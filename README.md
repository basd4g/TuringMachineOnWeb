# Turing Machine On Web

This is [turing machine](https://en.wikipedia.org/wiki/Turing_machine) emulator on web browswer.

[チューリング機械](https://ja.wikipedia.org/wiki/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%9E%E3%82%B7%E3%83%B3)をウェブブラウザ上で動かせるように実装したリポジトリです。


## 環境

- JavaScript (ES6)
- ブラウザ(ES6を認識できる) ... Google chrome v78.0.3904.70 (mac OS)で動作確認

(ブラウザに依存するような機能を使っていないので様々なブラウザで動くはず)

## 構成

- `index.html` ... 以下のhtmlへのリンク
- `transitionTableEditor.html` ... 状態遷移表の作成を支援するエディタ
- `machine.html` ... 上記のエディタないしは手打ちで制作された状態遷移表を読み込んで動くチューリング機械

## とりあえず動かす

[machine.html](https:/yammerjp.github.io/TuringMachineOnWeb/machine.html)へアクセスし、[Load]を一回クリックしたあと、[Next]を何度かクリックする。

すると、テープヘッドが移動しながらテープが書き換えられていることがわかる。

これは、このページのテキストエリアにある状態遷移表を元に、first tapeで指定された初期状態のテープの値を順に書き換えている動作である。


## 使い方

### 状態遷移表エディタ([transitionTableEditor.html](https://yammerjp.github.io/TuringMachineOnWeb/transitionTableEditor.html))

状態遷移表の列ラベルの状態、行ラベルのアルファベットのとき、どの状態/アルファベット/テープ位置に遷移するかを表のセルに書き込む。

- [add state],[add alphabet]より状態遷移表の行、列を追加。
- 書き込みたいセルをクリックして、遷移前の状態とアルファベットを指定する
- 行ラベル、列ラベルをそれぞれクリックして、遷移したい状態とアルファベットを指定する
- テープの移動方向をL(左),S(停止),R(右)から選択してクリックする。
- [Add to Table]をクリックすると遷移前後の状態/アルファベットとテープの移動方向が決定し表に書き込まれる。
- 状態遷移表が完成したら、[Complete table]を押してチューリング機械を動かすページに遷移する。遷移先では作成した状態遷移表がセットされた状態になっている。

### チューリング機械([machine.html](https://yammerjp.github.io/TuringMachineOnWeb/machine.html))

- first tape を編集して初期状態のテープヘッドを指定する。
- テキストエリアに状態遷移表を書き込む(予め一例の表ないしは直前に作成した表が記入されている)
- [Load]を押してチューリング機械に読み込む。 (テープヘッドとテープが表示される)
- [Next]を押して機械を動かす。1クリックすると1回状態遷移が行われる。

## 状態遷移表(machine.htmlのテキストエリアに入力できる表)の仕様

- 基本は`,`(カンマ)区切りのcsv形式
- 各行ごとに左から、遷移前の状態、遷移前のテープヘッドの値、遷移後の状態、書き換えるテープヘッドの値、ヘッドの移動先 をカンマ区切りで書く。最後はカンマなし
- 1列目、3列目の状態として認められるのは`q_X`(Xは半角数字),`q_accept`,`q_reject`のどれか
- 2列目、4列目のテープヘッドの値として認められるのは次の半角英数字一文字(大文字小文字は区別される)
- 従って、first tape の入力テキストボックスに認められるのも、上記と同様の半角英数字、を並べたもの
- 5列目のヘッドの移動先として認められるのは`L`(一つ左へ移動)、`S`(移動しない)、`R`(一つ右へ移動)のどれか

## 目的

2019/1 チューリングマシンに読み込ませる状態遷移表を書くために、また制作した状態遷移表が正しいものであることを確認するために実装。

動くものを早く作る、ということで、最低限のUIで制作。


