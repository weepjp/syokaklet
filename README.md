# 。、。( #syokaklet )


| <img width="442" height="185" alt="image" src="https://github.com/user-attachments/assets/7a394434-79f1-4755-b915-59c8f61fae49" /> | 
| :---: | 
| 「。、。」使用時の結果ダイアログ。 |

----

# ブックマーク用 Javascript

- V12 ( V1 と V2 統合選択式)

```
javascript:/* 。、。V12 */((d=document)=>%7Bif(d.getElementById('v12ov'))return;let overlay=d.createElement('div');overlay.id='v12ov';overlay.style='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:999999;display:flex;align-items:center;justify-content:center;font-family:sans-serif;';overlay.onclick=(e)=>%7Bif(e.target===overlay)overlay.remove()%7D;let modal=d.createElement('div');modal.style='background:#fff;color:#333;padding:24px;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,0.3);width:300px;position:relative;text-align:center;box-sizing:border-box;';let closeBtn=d.createElement('span');closeBtn.innerText='×';closeBtn.style='position:absolute;top:10px;right:15px;font-size:24px;cursor:pointer;color:#aaa;line-height:1;font-weight:bold;';closeBtn.onclick=()=>overlay.remove();modal.appendChild(closeBtn);let title=d.createElement('h3');title.innerText='。、。V12';title.style='margin:0 0 20px;font-size:16px;font-weight:bold;color:#222;letter-spacing:1px;';modal.appendChild(title);let parseText=(isV2)=>{if(window.ontomoLock)return;window.ontomoLock=true;let q=n=>d.querySelector(n);let b=q('.js-novel-text:not(.p-novel__text--afterword),.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b){window.ontomoLock=false;alert("取得不可");overlay.remove();return}let s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"";let X=t=>t.replace(/咖喱/g,'カリー').replace(/蹂躙/g,'じゅうりん').replace(/繡/g,'繍').replace(/頰/g,'頬').replace(/噓/g,'嘘').replace(/繫/g,'繋').replace(/剝/g,'剥').replace(/塡/g,'填').replace(/𠮟/g,'叱').replace(/醬/g,'醤').replace(/咒/g,'呪').replace(/嚙/g,'噛').replace(/摑/g,'掴').replace(/艷/g,'艶').replace(/瘦/g,'痩').replace(/禱/g,'祷').replace(/瀆/g,'涜').replace(/顚/g,'顛').replace(/昻/g,'昂').replace(/內/g,'内');let L=b.innerText.replace(/\s/g,'').length,Y=b.innerText.split('\n').length;let p=b.cloneNode(true);p.querySelectorAll('.p-novel__text--afterword,#novel_a').forEach(e=>e.remove());let a=d.querySelector('#novel_a,.p-novel__text--afterword');if(a)p.appendChild(a.cloneNode(true));if(isV2){p.querySelectorAll('ruby').forEach(r=>{let t=r.querySelector('rt');if(t){let txt=t.innerText.trim();if(/^[・●◎○]+$/.test(txt)){r.querySelectorAll('rt,rp').forEach(e=>e.remove());r.replaceWith(r.innerText.trim())}else{r.innerText=txt}}})}else{p.querySelectorAll('ruby').forEach(r=>{let t=r.querySelector('rt')?.innerText.trim()||"",m=[...r.childNodes].filter(n=>n.nodeType===3||n.tagName==="RB").map(n=>n.textContent).join('').trim();r.replaceWith(%60|${m}《${t}》%60)})}let i=[...p.childNodes].map(n=>n.nodeType===3?n.textContent:n.innerText).join('\n').split('\n').map(l=>l.replace(/[ \t]+$/,'')),f=-1;let r=/お読み[い頂戴]|読んでく(ださ(って|ださり)|れて)+((ありが|有難)う|感謝|感激)|『?((面白|おもしろ)かったり?|(続|つづ)き(が(読みたい)?|を書き))|[筆著作]者から(の)?お(願|ねが|[知し]ら)|コミカライズ|書き[下お]ろし|予約[開受]|(昨日|今日|明日|[日月]に)発売|発売[さしでを日記中開決！]|書影|読者様|[短長前中後][編篇]|[0-9０-９〇一二三四五六七八九十百千万上中下\u2160-\u217B]+([巻章]|(万)?ポイント達成)|[第全][0-9０-９〇一二三四五六七八九十百千万\u2160-\u217B]+[eエ話章][がでにを]|[★☆]を(いただ|戴|頂)けたら|宣伝(call|さ|を[さ行いく])|^[-※＊●★☆■◆◇▲▽▼*()（）【】「」\u3000 ]+(お[し知]らせ|宣伝|告知|報告)|[-※＊●★☆■◆◇▲▽▼*()（）【】「」\u3000 ]+(お[し知]らせ|宣伝|告知|報告)[-※＊●★☆■◆◇▲▽▼*()（）【】「」\u3000 ]+|(なろう|カクヨム)の(システム|機能|仕様)|ランキング[にでを]|ブックマーク|ブクマ|お気に[入い]り(に?登録|して)|次回更新|最[新終]話|[誤脱]字|他作|番外|[閑間]話|書籍[をの]購入|裏設定|ポイント[とや]感想|☆☆☆|★★★|http/;let isN=b.classList.contains('p-news-entry__body');if(!isN){let totalTxt=i.join(''),limitLen=Math.max(32,Math.floor(totalTxt.length*0.3)),currentLen=0;for(let n=i.length-1;n>=0;n--){currentLen+=i[n].length;if(i[n].trim()!==""&&r.test(i[n]))f=n;if(currentLen>limitLen)break}}if(f!==-1)i=i.slice(0,f);while(i.length>0&&!i[0].trim())i.shift();if(!isV2){let R=s+'\n\n'+i.join('\n')+'\n\n。、。\n\n\n',z=R.split('\n').length;navigator.clipboard.writeText(R).then(()=>{alert(%60。、。V1\n完了: ${s}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f!==-1?'\n※カット有':''}%60);window.ontomoLock=false;overlay.remove()}).catch(e=>{alert(e);window.ontomoLock=false;overlay.remove()})}else{let titleS=X(s);let D='‒–—―⸺─━…⋯‥',va='音街ウナ',vb='音街ウナ - 新規',vx='琴葉 茜',vy='琴葉 葵',N='\n\n\n\n',T=(r,t)=>new RegExp(r).test(t);let res=[],vC="INIT",isL=0;if(titleS){res.push(vx+"＞\n"+titleS);vC="TITLE_END"}i.forEach(l=>{if(isN){res.push(l);return}if(!l.trim())return;let v=vC;if(isL<=0){if(T('^[\\u3000 ]*[『]',l))v=vy;else if(T('^[\\u3000 ]*[「｢]',l))v=vb;else if(T(%60^[\\u3000 ]*([${D}！-／：-＠※＊（(《〈〔〖【])\\1%60,l))v=vy;else if(T(%60^[\\u3000 ]*[${D}！-／：-＠※＊（(《〈〔〖【]%60,l))v=vx;else v=va}let t=X(l).replace(/＜/g,'『').replace(/＞/g,'』');if(vC!==v||vC==="TITLE_END")res.push(v+"＞"+N+t);else res.push(t);vC=v;let op=(l.match(/[「｢『（(【［«《〈〔〖]/g)||[]).length,cl=(l.match(/[」｣』）)】］»《〈〔〖]/g)||[]).length;isL+=op-cl});let R=res.join('\n')+'\n\n。、。\n\n\n',z=R.split('\n').length;navigator.clipboard.writeText(R).then(()=>{alert(%60。、。V2\n完了: ${titleS}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f!==-1?'\n※カット有':''}%60);window.ontomoLock=false;overlay.remove()}).catch(e=>{alert(e);window.ontomoLock=false;overlay.remove()})}};let makeBtn=(txt,bg,hover,col,w,isV2)=>{let btn=d.createElement('button');btn.innerText=txt;btn.style=%60width:100%;padding:14px;margin-bottom:12px;background:${bg};color:${col};border:none;border-radius:8px;font-size:14px;cursor:pointer;font-weight:${w};transition:all 0.2s;outline:none;border-bottom:3px solid rgba(0,0,0,0.15);display:block;box-sizing:border-box;%60;btn.onmouseover=()=>btn.style.background=hover;btn.onmouseout=()=>btn.style.background=bg;btn.onclick=()=>parseText(isV2);modal.appendChild(btn)};makeBtn('。、。V1','#e0e0e0','#d0d0d0','#333333','normal',false);makeBtn('。、。V2','#c0e0ff','#a8d0ff','#000000','bold',true);overlay.appendChild(modal);d.body.appendChild(overlay)})(document)
```

----

　名前は「`。、。`」で、コードネームは「`#syokaklet`」です。
 
　当初は、なろうのスタイルクラス要素「p-novel」でしたが、カクヨムにも対応させたので。。。

　和名「なろカクレット」でしたが、最後に「。、。」を設置してるので、さらに意味を持たせるためにこのような名称に至りました（ぶっちゃけ検索しづらくさせた）。

## 概要

　小説サイトのエピソードページ内の「<b>サブタイトル(エピソードタイトル？)</b>」と「<b>本文</b>」を コピペしたい時用に使う<s>嫌らしい</s>ブックマークレットです。

　ダイアログにサブタイトルと、文字数と、行数（数値はざっくり）を原文と結果を表示させ、サブタイトルと本文をコピーするだけのもの。

　読み上げソフト（VOICEROID2）用に欲しかったので、個人的にやっつけで作ったもんです。 

　面倒なので「～なろう」では、前書きと後書きも含みますが、どちらも重要な本文ですのでいいでしょう（特定範囲の末尾でワード判定して切り落としますが）。
 
　推し先生の作品読みのお供にどうぞ。

　最後に「。、。」が付きますが、これはおいらが使ってる「読み上げソフト」ではこれを付けないと最後の最後で音飛びするため、聴き取れないと困るからの措置です。

　2026/07/18 より、V1 と V2 兼用の V12 として配布します（個別管理だるい）。

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

* 末尾の特定範囲において、以下のワードが含まれていると切り落としされます。
  * 切り落とした場合はダイアログに「※カット有」と出ます。
  * 後書きに毎回同じ定型文を入れるマメな作者さんがいらっしゃるのでその対策です（極めて失礼な対策）。
  * 後書きに本編内の重要な補足とかジョークとか、そういうのはちゃんと残したいわけです。
* 本文の最後に特定ワードが含むと巻き添えで切り落とされますので注意と言うか難点です。
  * 要らない人は、含まれることがあり得ないワードに変更しといて下さい。



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

### これ出たけど何？

| `NotAllowedError: Failed to execute 'writeText' on 'Clipboard': Document is not focused.`| 
| :---: | 
| 謎のダイアログ。 |

* ブラウザのアドレスバーにカーソルを置いた状態であるか、広告かアクセス解析等が JavaScript で、現在地の URL なんかこそっと取得してるタイミングと重なった時にありがちです。<s>広告と解析うぜー。。</s>。
* こちらとしては、「予期しないエラー」なので知りません。取得先ページとカーソルの位置をよ～～く確認してから、再度チャレンジしてみてください。 


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


　ルビは `|魔法《まほう》` や ``|慮《おもんぱか》る`` といった、Web小説でよくある執筆記法的な感じになります。

　かつて、`【【まほう】】魔法` でしたが、なろうさんが、2026年3月26日「TXTファイルダウンロード機能」廃止するらしいので、急遽これにしました。



----

## V2



### V2 について

　[VOICEROID2](https://www.ah-soft.net/shopbrand/ct92/) のボイス名コマンドがあるバージョンです。だから「V2」なんですね（たまたま）。

　読み上げソフト用なので、原文からかけ離れた改行で結果を出しますので、読み上げソフト以外の用途には、おすすめできません。

　ルビは上の子文字のみを読み上げますが、傍点を含む記号が上の小文字にくる場合は下の親文字のみを読みます。

* 個人的に VOICEROID2 用に使ってるやつです。
* 〓対策。
* 文の先頭文字（括弧か傍線か記号かそれ以外か）を判定して、音街ウナ(と - 新規)と琴葉葵と琴葉茜で割り振ってる。
* コマンドは　ボイス名＞　で、VOICEROID² デフォルト準拠。
* ダイアログには原文と結果の両数値が出ます（正確さはわかりません）。

### 〓対策（漢字が 〓 になって、読み設定できない字の対策）

* VOICEROID2 は、<s>時代錯誤のアプリ</s> Shift_JIS 環境なので、Unicode固有のJIS第3・第4水準の異体字は、読み設定に対応しないので対策。
* Shift_JIS に漢字が存在すれば、それに置換させる。
* 気付いたら追加予定。。。

| 該当漢字 | 置換後 |
| --------- | ---- |
| 咖喱 | カリー |
| 蹂躙 | じゅうりん |
| 繡 | 繍 |
| 頰 | 頬 |
| 噓 | 嘘 |
| 繫 | 繋 |
| 剝 | 剥 |
| 塡 | 填 |
| 𠮟 | 叱 |
| 醬 | 醤 |
| 咒 | 呪 |
| 嚙 | 噛 |
| 摑 | 掴 |
| 艷 | 艶 |
| 瘦 | 痩 |
| 禱 | 祷 |
| 瀆 | 涜 |
| 顚 | 顛 |
| 昻 | 昂 |
| 內 | 内 |


### V2 のボイス名コマンドについて

* （行冒頭の字下げスペースを無視し）特定の記号から開始の判定があると、ボイスを変更します。
* 括弧の途中に改行が含まれていても閉じられるまでボイス変更しない振る舞いをします。

| 特定の記号     | 該当記号                         |
| ------------- | --------------------------------------------- | 
| 括弧           | `（` `(` `《` `〈` `〔` `〖` `【` |
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
