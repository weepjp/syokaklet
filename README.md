# 。、。( #syokaklet )


| <img width="442" height="185" alt="image" src="https://github.com/user-attachments/assets/7a394434-79f1-4755-b915-59c8f61fae49" /> | 
| :---: | 
| 「。、。」使用時の結果ダイアログ。 |


----

　名前は「`。、。`」で、コードネームは「`#syokaklet`」です。
 
　当初は、なろうのスタイルクラス要素「p-novel」でしたが、カクヨムにも対応させたので。。。

　和名「なろカクレット」でしたが、最後に「。、。」を設置してるので、さらに意味を持たせるためにこのような名称に至りました（ぶっちゃけ検索しづらくさせた）。

## 概要

　小説サイトのエピソードページ内の「<b>サブタイトル(エピソードタイトル？)</b>」と「<b>本文</b>」を コピペしたい時用に使う<s>嫌らしい</s>ブックマークレットです。

　ダイアログにサブタイトルと、文字数と、行数（数値はざっくり）を原文と結果を表示させ、サブタイトルと本文をコピーするだけのもの。

　読み上げソフト（VOICEROID2）用に欲しかったので、個人的にやっつけで作ったもんです。 

　面倒なので「～なろう」では、前書きと後書きも含みますが、どちらも重要な本文ですのでいいでしょう（末尾24行内でワード判定して切り落としますが）。
 
　推し先生の作品読みのお供にどうぞ。

　最後に「。、。」が付きますが、これはおいらが使ってる「読み上げソフト」ではこれを付けないと最後の最後で音飛びするため、聴き取れないと困るからの措置です。

　ライセンスは MIT License にしてます。

## 開発環境

* 当初は手打ち。
* 現在は、Google Gemini 3 任せ。。


## 対応できるサイト（メモ）

* 小説家になろうのエピソードページ
  * 活動報告に対応させるかは、現在検討中で未対応です（ある程度、HTMLタグ自由だから悩ましい）。

* カクヨムのエピソードページ
  * 近況ノートに仮対応。サポーター限定記事までに対応できてるか不明。

* 他
  * アルファポリスのエピソードページ（自信ない）
  * その他は個人的に使ってないという理由で割愛です。。

### 某渋小説には対応しないのですか？

　そのサイトの仕様上、ブックマークレットに対応できませんでした。。。

　その名の通り、あそこはこう言うのに「激渋」なんだよなぁ。

　「渋」だけにダジャレを言いたいんじゃなくて、こちらとしても対応させる予定もないため、あきらめて下さい。



## 切り落とし判定ワード。

* 末尾のある範囲において、以下のワードが含まれていると切り落としされます。
  * 切り落とした場合はダイアログに「※カット有」と出ます。
  * 後書きに毎話同じ定型文を入れるマメな作者さんがいらっしゃるのでその対策です（極めて失礼な対策）。
  * 後書きに本編内の重要な補足とかジョークとか、そういうのはちゃんと残したいわけです。
* 本文の最後に特定ワードが含むと巻き添えで切り落とされますので注意と言うか難点です。
  * 要らない人は、含まれることがあり得ないワードに変更しといて下さい。

| 切り落とし判定ワード（一部抜粋であり他にもあるかも） | 
| -------------------- | 
|お読み[い頂]|
|読んで[く下]|
|『面白|
|『おもしろ|
|『続き|
|評価|
|ブックマーク|
|☆☆☆|
|★★★|
|http|



## ブックマークレットってなあに？

* えっ？　そこから？
* 何のために「検索サイト」とか「AIチャット」が生まれて、存在するのでしょうか？
* ブックマークレットは、URL に JavaScript 入れて、それをブックマーク保存して、使いたい時にブックマークレットを開くと現在閲覧中のページを取得したりなどの簡単な拡張機能が使えます。
  * ググったほうがもっと良い結果が得られるよ！ [ブックマークレットとは \- Google 検索](https://www.google.com/search?q=%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%81%A8%E3%81%AF)

| <img width="439" height="539" alt="image" src="https://github.com/user-attachments/assets/9f0aa01c-1e1c-49b6-8838-24952a07d029" > | 
| :---: | 
| ブックマークレットはブラウザブックマークに追加して使用できます。 |

## ブックマークレットの追加の仕方は？

1. まあいいや。お使いのブラウザのブックマークバーに右クリックすると「ブックマーク追加」とか「ページを追加」(Google Chrome の場合)とか、まあ出ると思う。
2. 名前に「`。、。V1`」もしくは「`。、。V2`」などお好みで。
3. URL には以下においてある「`javascript:～`」から始まるやつをコピペ「保存」すれば多分行けると思います。ブックマークバーに置いておくすぐに押せてと便利です！
4. 1 も 2 も、分からなかったら、「検索サイト」とか「AIチャット」とか使って教わってね。
5. スマホの場合は、もっと難易度高いから「検索サイト」とか「AIチャット」とか使って教わってね（丸投げ）。

| <img width="320" height="174" alt="image" src="https://github.com/user-attachments/assets/93d89724-b42a-4510-9e4d-58200b4e4318" />| 
| :---: | 
| このようにブックマークレットのコードを簡単にコピーできます。 |

* 画像にあるように、ブックマークレット用 JavaScript 欄の右側にある「四角が2個あるアイコン」クリックで、選択しなくてもコピーしてくれるよ。
* これを URL に貼り付ければ簡単です。

| <img width="439" height="178" alt="image" src="https://github.com/user-attachments/assets/da6eb2b3-d22c-4934-8e1c-510cfbe33d0b"  border="1" />| 
| :---: | 
| 使用したら出るダイアログ。 |

* エピソードページで、ブックマークレットを開くと、上の画像のようなダイアログが出ます。
* <s>俺ってなんてやさしいんだろう？</s> こんなの作るやつはきっと作家側にとってやさしくなどない！

## V1

### V1 ブックマークレット

```js
javascript:/* 。、。V1 */((d=document)=>{let q=n=>d.querySelector(n),s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"",b=q('.js-novel-text:not(.p-novel__text--afterword),.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b)return alert("取得不可");let L=b.innerText.replace(/\s/g,'').length,Y=b.innerText.split('\n').length,p=b.cloneNode(!0);p.querySelectorAll('.p-novel__text--afterword,#novel_a').forEach(e=>e.remove());let a=d.querySelector('#novel_a,.p-novel__text--afterword');if(a)p.appendChild(a.cloneNode(!0));p.querySelectorAll('ruby').forEach(r=>{let t=r.querySelector('rt')?.innerText.trim()||"",m=[...r.childNodes].filter(n=>n.nodeType===3||n.tagName==="RB").map(n=>n.textContent).join('').trim();r.replaceWith(`|${m}《${t}》`)});let i=[...p.childNodes].map(n=>n.nodeType===3?n.textContent:n.innerText).join('\n').split('\n').map(l=>l.replace(/[ \t]+$/,'')),f=-1,r=/お読み[い頂]|読んで[く下]|電書|電子書籍|紙の本|ノベル|コミカライズ|書き下ろし|配信|予約受|書影|書誌|読者|[前後][編篇]|『面白|『おもしろ|『続き|評価|ブックマーク|次回更新|最新話|執筆|誤字|脱字|他作|番外|裏設定|☆☆☆|★★★|http/;if(!b.classList.contains('p-news-entry__body')){let totalTxt=i.join(''),limitLen=Math.max(64,Math.floor(totalTxt.length*0.2)),currentLen=0;for(let n=i.length-1;n>=0;n--){currentLen+=i[n].length;if(i[n].trim()!==""&&r.test(i[n])){f=n}if(currentLen>limitLen)break}}if(f!==-1)i=i.slice(0,f);while(i.length>0&&!i[0].trim()){i.shift()}let R=s+'\n\n'+i.join('\n')+'\n\n。、。\n\n\n',z=R.split('\n').length;navigator.clipboard.writeText(R).then(()=>alert(`完了: ${s}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f!==-1?'\n※カット有':''}`)).catch(e=>alert(e))})()
```

### V1 の ルビの扱いについて

| HTML                         | TEXT          |
| ----------------------------- | ----------- |
| `<ruby>魔法<rt>まほう</rt></ruby>` |  &#124;魔法《まほう》 |
| `<ruby>力<rt>チカラ</rt></ruby>`  |  &#124;力《チカラ》  |
| `<ruby>慮<rt>おもんぱか</rt></ruby>る`  |  &#124;慮《おもんぱか》る  |
| `<ruby>なめぇ<rt>NAME</rt></ruby>`   |   &#124;なめぇ《NAME》     |
| `<ruby>傍<rt>・</rt>点<rt>・</rt></ruby>`  |  &#124;傍《・》&#124;点《・》  |
| `<ruby>傍点<rt>・・</rt></ruby>`  |  &#124;傍点《・・》  |


　ルビは `|魔法《まほう》` や ``|慮《おもんぱか》る`` といった、Web小説でよくある執筆記法的な感じになります。

　かつて、`【【まほう】】魔法` でしたが、なろうさんが、2026年3月26日「TXTファイルダウンロード機能」廃止するらしいので、急遽これにしました。



----

## V2



### V2 ブックマークレット

```js
javascript:/* 。、。V2_fixed */((d=document)=>{let q=n=>d.querySelector(n),s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"",b=q('.js-novel-text:not(.p-novel__text--afterword),.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b)return alert("取得不可");let L=b.innerText.replace(/\s/g,'').length,Y=b.innerText.split('\n').length,p=b.cloneNode(!0);p.querySelectorAll('.p-novel__text--afterword,#novel_a').forEach(e=>e.remove());let a=d.querySelector('#novel_a,.p-novel__text--afterword');if(a)p.appendChild(a.cloneNode(!0));p.querySelectorAll('ruby').forEach(r=>{let t=r.querySelector('rt'),m=r.childNodes[0]?.textContent||"";if(t){let y=t.innerText.replace(/[^a-zA-Zぁ-んァ-ヶ一-龥々ー]/g,'');r.replaceWith(y||m)}else{r.replaceWith(r.innerText)}});let D='‒–—―⸺─━…⋯‥',va='音街ウナ',vb='音街ウナ - 新規',vx='琴葉 茜',vy='琴葉 葵',N='\n\n\n\n',T=(r,t)=>new RegExp(r).test(t),i=[...p.childNodes].map(n=>n.nodeType===3?n.textContent:n.innerText).join('\n').split('\n'),res=[],vC="INIT",f=-1,isL=0,r=/お読み[い頂]|読んで[く下]|電書|電子書籍|紙の本|ノベル|コミカライズ|書き下ろし|配信|予約受|書影|書誌|読者|[前後][編篇]|『面白|『おもしろ|『続き|評価|ブックマーク|次回更新|最新話|執筆|誤字|脱字|他作|番外|裏設定|☆☆☆|★★★|http/;let isN=b.classList.contains('p-news-entry__body');if(!isN){let totalTxt=i.join(''),limitLen=Math.max(64,Math.floor(totalTxt.length*0.2)),currentLen=0;for(let n=i.length-1;n>=0;n--){currentLen+=i[n].length;if(i[n].trim()!==""&&r.test(i[n])){f=n}if(currentLen>limitLen)break}}if(f!==-1)i=i.slice(0,f);while(i.length>0&&!i[0].trim()){i.shift()}if(s){res.push(vx+"＞\n"+s);vC="TITLE_END"}i.forEach(l=>{if(isN){res.push(l);return}if(!l.trim()){return}let v=vC;if(isL<=0){if(T('^[　 ]*([「｢『『（(【［«《〈〔〖〗])\\1',l)){v=vx}else if(T('^[　 ]*[「｢]',l)){v=vb}else if(T(`^[　 ]*([${D}！-／：-＠※＊（(《〈〔〖〗])\\1`,l)){v=vy}else if(T(`^[　 ]*[${D}！-／：-＠※＊（(《〈〔〖〗]`,l)){v=vx}else{v=va}}let t=l.replace(/＜/g,'『').replace(/＞/g,'』');if(vC!==v||vC==="TITLE_END"){res.push(v+"＞"+N+t)}else{res.push(t)}vC=v;let op=(l.match(/[「｢『（(【［«《〈〔〖〗]/g)||[]).length,cl=(l.match(/[」｣』）)】］»》〉〕〗〗]/g)||[]).length;isL+=op-cl});let R=res.join('\n')+'\n\n。、。\n\n\n',z=R.split('\n').length;navigator.clipboard.writeText(R).then(()=>alert(`完了: ${s}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f!==-1?'\n※カット有':''}`)).catch(e=>alert(e))})()
```

### V2 について

　[VOICEROID2](https://www.ah-soft.net/shopbrand/ct92/) のボイス名コマンドがあるバージョンです。だから「V2」なんですね（たまたま）。

　読み上げソフト用なので、原文からかけ離れた改行で結果を出しますので、読み上げソフト以外の用途には、おすすめできません。

　ルビは上の子文字のみを読み上げますが、傍点を含む記号が上の小文字にくる場合は下の親文字のみを読みます。

* 個人的に VOICEROID2 用に使ってるやつです。
* 文の先頭文字（括弧か傍線か記号かそれ以外か）を判定して、音街ウナ(と - 新規)と琴葉葵と琴葉茜で割り振ってる。
* コマンドは　ボイス名＞　で、VOICEROID² デフォルト準拠。
* ダイアログには原文と結果の両数値が出ます（正確さはわかりません）。

## V2 のボイス名コマンドについて

* （行冒頭の字下げスペースを無視し）特定の記号から開始の判定があると、ボイスを変更します。
* 括弧の途中に改行が含まれていても閉じられるまでボイス変更しない振る舞いをします。

| 特定の記号     | 該当記号                         
| ------------- | --------------------------------------------- | 
| 括弧           | `（` `(` `《` `〈` `〔` `〖` `〖` |
| 注目記号       | `※` `＊` `！` `？` |
| 傍線・リーダー  | `‒` `–` `—` `―` `⸺` `─` `━` `…` `⋯` `‥` |

* 配役はてきとーすぎて参考にならないです（俺得なんで）。
* 変数の値を変えれば、お好みに変更できます。

| ボイス名(値)    | 変数  | 役割  | 
| -------------- | :---: | ---------------------------------------------------------------------------------------------------------------------------------------------- | 
| 音街ウナ        | va | 地の文。いわゆるナレーション的な。 | 
| 音街ウナ - 新規 | vb | `「」`内の台詞。 | 
| 琴葉 茜         | vx | エピソードタイトル。<br>括特定の記号の連続から開始される行。 | 
| 琴葉 葵         | vy | 特定の記号1文字から開始される行。 | 

----

## 最後に

　このブックマークレットは、著作権侵害行為に加担するものや推奨するものではありません。悪用厳禁です。
 
　私的利用の範囲内の利用にして下さい。飽くまでも読み上げソフトなどの利便性を高めるためのものです。

　各サイトさんが予告なく HTML および スタイルシート 構成が変貌した場合、対応しないかも知れませんが、ブックマークレットってそういうもんだから！

　なろうさんが、2026年3月26日に「TXTファイルダウンロード機能」廃止らしいので、手助けになれば。、。なるのか？？？
