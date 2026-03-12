# 。、。( #syokaklet )

<img width="442" height="185" alt="image" src="https://github.com/user-attachments/assets/7a394434-79f1-4755-b915-59c8f61fae49" />

----

　名前は「`。、。`」で、コードネームは「`#syokaklet`」です。
 
　当初は、なろうのスタイルクラス要素「p-novel」でしたが、カクヨムにも対応させたので。。。

　和名「なろカクレット」でしたが、最後に「。、。」を設置してるので、さらに意味を持たせるためにこのような名称に至りました（ぶっちゃけ検索妨害）。

## Summary

　小説サイトのエピーソードページ内の「<b>サブタイトル(エピソードタイトル？)</b>」と「<b>本文</b>」を コピペしたい時用に使う<s>嫌らしい</s>ブックマークレットです。

　ダイアログにサブタイトルと、文字数と、行数（数値はざっくり）を原文と結果を表示させ、サブタイトルと本文をコピーするだけのもの。

　読み上げソフト（VOICEROID2）用に欲しかったので、個人的にやっつけで作ったもんです。 

　面倒なので「～なろう」では、前書きと後書きも含みますが、どちらも重要な本文ですのでいいでしょう（V1 からは、末尾24行だけワード判定して切り落とします）。
 
　推し先生の作品読みのお供にどうぞ。

　最後に「。、。」が付きますが、これはおいらが使ってる「読み上げソフト」ではこれを付けないと最後の最後で音飛びするため、聴き取れないと困るからの措置です。



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

* 末尾24行内では、以下のワードが含まれていると切り落としされます。
  * 切り落とした場合はダイアログに「※一部カットしました」と出ます。
* 本文の最後に後書きっぽいことを書くと巻き添えで切り落とされますので注意。
  * 要らない人は、含まれることがあり得ないワードに変更して下さい。

| 切り落とし判定ワード | 
| -------------------- | 
| 『おもしろかった     | 
| 『続きが気になる     | 
| お読み頂き           | 
| お読みいただき       | 
| ☆☆☆               | 
| ★★★               | 
| 書籍                 | 
| コミカライズ         | 
| http                | 



## ブックマークレットってなあに？

* えっ？　そこから？
* 何のために「検索サイト」とか「AIチャット」が生まれて、存在するのでしょうか？
* ブックマークレットは、URL に JavaScript 入れて、それをブックマーク保存して、使いたい時にブックマークレットを開くと現在閲覧中のページを取得したりなどの簡単な拡張機能が使えます。
  * ググったほうがもっと良い結果が得られるよ！ [ブックマークレットとは \- Google 検索](https://www.google.com/search?q=%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%81%A8%E3%81%AF)

<img width="439" height="539" alt="image" src="https://github.com/user-attachments/assets/9f0aa01c-1e1c-49b6-8838-24952a07d029" />

## ブックマークレットの追加の仕方は？

1. まあいいや。お使いのブラウザのブックマークバーに右クリックすると「ブックマーク追加」とか「ページを追加」(Google Chrome の場合)とか、まあ出ると思う。
2. 名前に「`。、。`」、URL には以下においてある「`javascript:～`」から始まるやつをコピペ「保存」すれば多分行けると思います。ブックマークバーに置いておくすぐに押せてと便利です！
3. 1 も 2 も、分からなかったら、「検索サイト」とか「AIチャット」とか使ってね。
4. スマホの場合は、もっと難易度高いから「検索サイト」とか「AIチャット」とか使ってね（丸投げ）。

<img width="320" height="174" alt="image" src="https://github.com/user-attachments/assets/93d89724-b42a-4510-9e4d-58200b4e4318" />

* 画像にあるように、ブックマークレット用 JavaScript 欄の右側にある「四角が2個あるアイコン」クリックで、選択しなくてもコピーしてくれるよ。
* これを 2 で言うところの URL に貼り付ければ簡単です、
* <s>俺ってなんてやさしいんだろう？</s>

## V1

### V1 の ルビの扱いについて

| HTML                         | TEXT          |
| ----------------------------- | ----------- |
| `<ruby>魔法<rt>まほう</rt></ruby>` |  &#124;魔法《まほう》 |
| `<ruby>力<rt>チカラ</rt></ruby>`  |  &#124;力《チカラ》  |
| `<ruby>慮<rt>おもんぱか</rt></ruby>る`  |  &#124;慮《おもんぱか》る  |
| `<ruby>なめぇ<rt>NAME</rt></ruby>`   |   &#124;なめぇ《NAME》     |
| `<ruby>傍<rt>・</rt>点<rt>・</rt></ruby>`  |  &#124;傍《・》&#124;点《・》  |
| `<ruby>傍点<rt>・・</rt></ruby>`  |  &#124;傍点《・・》  |


　ルビは `|魔法《まほう》` や ``|慮《おもんぱか》る`` といった感じになります。

　これは、ふりがなの書式です。

　かつて、`【【まほう】】魔法` でしたが、なろうさんが、2026年3月26日「TXTファイルダウンロード機能」廃止するらしいので、急遽これにしました。

### V1 ブックマークレット

```js
javascript:((d=document)=>{let q=n=>d.querySelector(n),s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"",b=q('.js-novel-text.p-novel__text,.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b)return alert("取得不可");let hL=b.innerText.replace(/\s/g,'').length,y=b.innerText.split('\n').length,rbP=b.cloneNode(!0);/* ルビ処理を |親文字《ルビ》 形式に変更 */rbP.querySelectorAll('ruby').forEach(r=>{let rt=r.querySelector('rt')?.innerText.trim()||"",rb=[...r.childNodes].filter(n=>n.nodeType===3||n.tagName==="RB").map(n=>n.textContent).join('').trim();r.replaceWith(`|${rb}《${rt}》`)});let x=rbP.innerText.replace(/[ 　]{2,}/g,'　');let i=x.replace(/^[\r\n]+/,'').split('\n').map(l=>l.replace(/[ \t]+$/,'')),fI=-1;let endR=/『おもしろかった|『面白かった|『続きが気になる|お読み頂き|お読みいただき|☆☆☆|★★★|書籍|コミカライズ|http/;let c=0,n=i.length-1;while(n>=0&&c<24){if(i[n].trim()!==""){if(endR.test(i[n])){fI=n}c++}n--}if(fI!==-1)i=i.slice(0,fI);let R=s+'\n\n'+i.join('\n')+'\n\n。、。\n\n\n',z=R.split('\n').length;navigator.clipboard.writeText(R).then(()=>alert(`完了: ${s}\n原文: ${hL}文字(${y}行)\n結果: ${R.length}文字(${z}行)${fI!==-1?'\n※一部カットしました':''}`)).catch(e=>alert("失敗: "+e))})()
```

----

## V2

　[VOICEROID2](https://www.ah-soft.net/shopbrand/ct92/) のボイス名コマンドがあるバージョンです。だから「V2」なんですね（たまたま）。

　読み上げソフト用なので、原文からかけ離れた改行で結果を出しますので、読み上げソフト以外の用途には、おすすめできません。

　ルビは上の子文字のみを読み上げますが、傍点を含む記号が上の小文字にくる場合は下の親文字のみを読みます。


* 個人的に VOICEROID2 で使ってるやつ。
* 文の先頭文字（括弧か傍線か記号かそれ以外か）を判定して、音街ウナ(と - 新規)と琴葉葵と琴葉茜で割り振ってる。
* コマンドは　ボイス名＞　で、VOICEROID² デフォルト準拠。
* 括弧内に改行が含む場合は一行に結合されます。
  * そのため、段落の冒頭字下げ全角スペースは破棄され、改行の構成も変動します。
* ダイアログには原文と結果の両数値が出ます（正確さはわかりません）。

### V2 ボイス配役

* 配役はてきとーすぎて参考にならないです。

| ボイス名コマンド  | 役割                                                                                                                                           | 
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | 
| 音街ウナ＞        | 地の文。いわゆるナレーション的な。                                                                                                           | 
| 音街ウナ - 新規＞ | `「」`内の台詞。                                                                                                                               | 
| 琴葉 葵＞         | `『』`内の台詞。<br>`―` `─` などの傍線、`…` `⋯` `‥`などの点リーダーなどから始まる行。<br>`！！` `？？` などの二重記号から始まる特殊な行。 | 
| 琴葉 茜＞         | エピソードタイトル。<br>`「「 ` `（（` `《《` などの二重括弧。<br>`（` `※` `＊` `《` `〈` `〔` `〖` `〚` から始まる行。                       | 

### V2 ブックマークレット

```js
javascript:((d=document)=>{let q=n=>d.querySelector(n),s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"",b=q('.js-novel-text.p-novel__text,.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b)return alert("取得不可");let hL=b.innerText.replace(/\s/g,'').length,y=b.innerText.split('\n').filter(z=>z.trim()).length,rbP=b.cloneNode(!0);rbP.querySelectorAll('ruby').forEach(rb=>{let rt=rb.querySelector('rt'),base=rb.childNodes[0]?.textContent||"";if(rt){let yomi=rt.innerText.replace(/[^a-zA-Zぁ-んァ-ヶ一-龥々ー]/g,'');rb.replaceWith(yomi||base)}else{rb.replaceWith(rb.innerText)}});let D='‒–—―⸺─━…⋯‥',u='音街ウナ',k='琴葉 茜',a='琴葉 葵',N='\n\n\n',T=(r,t)=>new RegExp(r).test(t),h=rbP.innerText;let x=h.replace(/[ 　]{2,}/g,'　');[['「','」'],['『','』'],['（','）'],['\\(','\\)'],['【','】'],['［','］'],['《','》'],['«','»'],['〈','〉'],['＜','＞'],['〔','〕'],['｛','｝'],['〖','〗'],['〚','〛'],['﹙','﹚'],['﹛','﹜']].forEach(([o,l])=>{let r=new RegExp(`${o}[^${l}]*?\\n+[^${o}]*?${l}`,'g');for(let i=0;i<5;i++){if(!T(r,x))break;x=x.replace(r,m=>m.replace(/\n+/g,''))}});let i=x.replace(/^[\r\n]+/,'').split('\n').map(l=>l.trim()).filter(l=>l!==""),res=[],curL="INIT",fI=-1;let endR=/『おもしろかった|『面白かった|『続きが気になる|お読み頂き|お読みいただき|☆☆☆|★★★|書籍|コミカライズ|http/;let c=0,n=i.length-1;while(n>=0&&c<24){if(i[n].trim()!==""){if(endR.test(i[n])){fI=n}c++}n--}if(fI!==-1)i=i.slice(0,fI);if(s){res.push(k+"＞\n"+s);curL="TITLE_END"}i.forEach((line,idx)=>{let v=u;if(T('^([「｢『『（(【［«《〈〔〖〚])\\1',line)){v=k}else if(T('^[「｢]',line)){v=u+' - 新規'}else if(T(`^([${D}！-／：-＠])\\1|^[『【＜${D}]`,line)){v=a}else if(T('^[（(※＊《«〈〔〖〚]',line)){v=k}else{v=u}let t=line.replace(/＜/g,'『').replace(/＞/g,'』');if(curL!==v||curL==="TITLE_END"){res.push(v+"＞"+N+t)}else{res.push(t)}curL=v});let R=res.join('\n')+`\n\n。、。${N}`,z=R.split('\n').filter(z=>z.trim()).length;navigator.clipboard.writeText(R).then(()=>alert(`完了: ${s}\n原文: ${hL}文字(${y}行)\n結果: ${R.length}文字(${z}行)${fI!==-1?'\n※一部カットしました':''}`)).catch(e=>alert("失敗: "+e))})()
```

----

## 最後に

　なろうさんが、2026年3月26日に「TXTファイルダウンロード機能」廃止らしいので、手助けになれば。。。

　。、。、。、。なるのか？？？



