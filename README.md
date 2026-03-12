# 。、。( #syokaklet )



<img width="460" height="240" alt="image" src="https://github.com/user-attachments/assets/93557b59-b181-4a35-9436-156b778d42bc" />


※上の画像は、V1 のものです。


----

　名称はてきとーです。
 
　当初は、なろうのスタイルクラス要素「p-novel」でしたが、カクヨムにも対応させたので。。。

　和名「なろカクレット」でしたが、最後に「。、。」を設置してるので、さらに意味を持たせるために名称にしました（検索妨害）。

## Summary

　小説サイトのエピーソードページ内の「<b>サブタイトル(エピソードタイトル？)</b>」と「<b>本文</b>」を コピペしたい時用に使う<s>嫌らしい</s>ブックマークレットです。

　ダイアログにサブタイトルと、文字数と、行数（数値はざっくり）を原文と結果を表示させ、サブタイトルと本文をコピーするだけのもの。

　読み上げソフト（VOICEROID2）用に欲しかったので、個人的にやっつけで作ったもんです。 

　面倒なので「～なろう」では、前書きと後書きも含みますが、どちらも重要な本文ですのでいいでしょう（V1 からは、末尾24行だけワード判定して切り落とします）。
 
　推し先生の作品読みのお供にどうぞ。

　最後に「。、。」が付きますが、これはおいらが使ってる「読み上げソフト」ではこれを付けないと最後の最後で音飛びするため、聴き取れないと困るからの措置です。



### 対応できるサイト（メモ）

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


## V1
### Simple Taste

　シンプルに取得します。
 
　いわゆる初期型です。


### ルビの扱いについて

| HTML                         | TEXT          |
| ----------------------------- | ----------- |
| `<ruby>魔法<rt>まほう</rt></ruby>` | `【【まほう】】魔法` |
| `<ruby>力<rt>チカラ</rt></ruby>`  | `【【チカラ】】力`  |
| `<ruby>慮<rt>おもんぱか</rt></ruby>る`  | `【【おもんぱか】】慮る`  |
| `<ruby>なめぇ<rt>NAME</rt></ruby>`   |  `【【NAME】】なめぇ`     |
| `<ruby>傍<rt>・</rt>点<rt>・</rt></ruby>`  | `傍点`   |
| `<ruby>傍点<rt>・・</rt></ruby>`  | `傍点`   |


　ルビは ``【【まほう】】魔法`` となります。

　送り仮名に配慮してこうしているので ``【【おもんぱか】】慮る`` となり、コピペしたテキストは読み上げソフト用途を想定（というかそのために作成）。

　傍点や記号の読みは付きませんのでご了承下さい。


## Bookmarklet


## V1

 余計なもの一切ナシのやつです。

 * ダイアログには結果の数値しか出ません（正確さはわかりません）。

```js
javascript:(()=>{let s=document.querySelector('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2[class*="Heading_size-1l"]')?.innerText||"";let b=document.querySelector('.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4 .Gap_size-m__thYv4>div');if(!s||!b)return alert("取得不可");s=s.replace(/^[\s\u3000]+/, '');let c=b.cloneNode(true);c.querySelectorAll('br').forEach(br=>br.replaceWith('\n'));c.querySelectorAll('ruby').forEach(r=>{let rt=r.querySelector('rt')?.innerText.trim()||"",rb=[...r.childNodes].filter(n=>n.nodeType===3||n.tagName==="RB").map(n=>n.textContent).join('').trim();if(/^[\p{P}\p{S}\s]*$/u.test(rt)){r.replaceWith(rb)}else{r.replaceWith(`【【${rb}】】${rt}`)}});let f=c.innerText.replace(/^[ \t\r\n]+/, '').replace(/^\u3000{2,}/gm, '　');let text=s+'\n\n'+f+'\n。、。\n\n\n',lines=text.split('\n').filter(l=>l.trim()).length,chars=text.length;navigator.clipboard.writeText(text).then(()=>alert(`コピー完了: ${s}\n文字数: ${chars}\n行数: ${lines}`)).catch(e=>alert("コピー失敗: "+e))})();
```


## V1x

　割りと余計なもの入れたやつです。

* ダイアログには原文と結果の両数値が出ます（正確さはわかりません）。
* 末尾24行に後書きっぽいワードがある場合切り落とします
  * 切り落とした場合はダイアログに「※一部カットしました」と出ます。

```js
javascript:((d=document)=>{let q=n=>d.querySelector(n),s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"",b=q('.js-novel-text.p-novel__text,.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b)return alert("取得不可");let hL=b.innerText.replace(/\s/g,'').length,y=b.innerText.split('\n').length,rbP=b.cloneNode(!0);rbP.querySelectorAll('ruby').forEach(r=>{let rt=r.querySelector('rt')?.innerText.trim()||"",rb=[...r.childNodes].filter(n=>n.nodeType===3||n.tagName==="RB").map(n=>n.textContent).join('').trim();if(/^[\p{P}\p{S}\s]*$/u.test(rt)){r.replaceWith(rb)}else{r.replaceWith(`【【${rb}】】${rt}`)}});/* 改行増殖を防ぐため、単純なinnerTextベースの取得に切り替え */let x=rbP.innerText.replace(/[ 　]{2,}/g,'　');let i=x.replace(/^[\r\n]+/,'').split('\n').map(l=>l.replace(/[ \t]+$/,'')),fI=-1;let endR=/ここまで|面白|続き|お読み|次回|更新|評価|モチベーション|励み|はげみ|引き続き|☆|よろしく|書籍|コミカライズ|http/;let c=0,n=i.length-1;while(n>=0&&c<24){if(i[n].trim()!==""){if(endR.test(i[n])){fI=n}c++}n--}if(fI!==-1)i=i.slice(0,fI);let R=s+'\n\n'+i.join('\n')+'\n\n。、。\n\n\n',z=R.split('\n').length;navigator.clipboard.writeText(R).then(()=>alert(`完了: ${s}\n原文: ${hL}文字(${y}行)\n結果: ${R.length}文字(${z}行)${fI!==-1?'\n※一部カットしました':''}`)).catch(e=>alert("失敗: "+e))})()
```

----

## V2

　VOICEROID2 のボイス名コマンドがあるバージョンです。

　だから「V2」です。

　原文からかなりかけ離れた改行で結果を出すため、読み上げソフト以外の用途には、おすすめできません。

　ルビは上の小文字のみを読み上げますが、傍点や記号が上の小文字にくる場合は下の大文字のみを読みます。

* 個人的に VOICEROID² で使ってるやつ。
* 文の先頭文字（括弧か傍線か記号かそれ以外か）を判定して、音街ウナ(と - 新規)と琴葉葵と琴葉茜で割り振ってる。
* コマンドは　ボイス名＞　で、VOICEROID² デフォルト準拠。
* 括弧内に改行が含む場合は一行に結合されます。
* * そのため、段落の冒頭字下げ全角スペースは破棄され、改行の構成も変動します。
* ボイス配役
  * 地の文: 音街ウナ
  * 「～」: 音街ウナ - 新規
  * 『～』: 琴葉葵
  * その他: 琴葉茜（雑）エピソードタイトル、「「～」」とか、傍線や三点リーダー始まり、括弧がマニアックで特殊なもの等。
* ダイアログには原文と結果の両数値が出ます（正確さはわかりません）。
* 末尾24行に後書きっぽいワードがある場合切り落とします
  * 切り落とした場合はダイアログに「※一部カットしました」と出ます。

```js
javascript:((d=document)=>{let q=n=>d.querySelector(n),s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"",b=q(%27.js-novel-text.p-novel__text,.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b)return alert("取得不可");let hL=b.innerText.length,y=b.innerText.split('\n').filter(z=>z.trim()).length;let rbP=b.cloneNode(!0);rbP.querySelectorAll('ruby').forEach(rb=>{let rt=rb.querySelector('rt'),base=rb.childNodes[0]?.textContent||"";if(rt){let yomi=rt.innerText.replace(/[^a-zA-Zぁ-んァ-ヶ一-龥々ー]/g,'');rb.replaceWith(yomi || base)}else{rb.replaceWith(rb.innerText)}});let D='‒–—―⸺─━…⋯‥',u='音街ウナ',k='琴葉 茜',a='琴葉 葵',N='\n\n\n',T=(r,t)=>new RegExp(r).test(t);let h=rbP.innerHTML.replace(/<br\s*\/?>/gi,'\n').replace(/<\/p>|<\/div>/gi,'\n').replace(/<[^>]*>/g,'');let txe=d.createElement('textarea');txe.innerHTML=h;let x=txe.value.replace(/[ %E3%80%80]{2,}/g,'%E3%80%80');[['「','」'],['『','』'],['（','）'],['\\(','\\)'],['【','】'],['［','］']].forEach(([o,l])=>{let r=new RegExp(%60${o}[^${l}]*?\\n+[^${o}]*?${l}%60,'g');for(let i=0;i<5;i++){if(!T(r,x))break;x=x.replace(r,m=>m.replace(/\n+/g,''))}});let i=x.split('\n').map(l=>l.trim()).filter(l=>l!==""),o=[],L="",f=(n,t,v=false)=>{let m=n;if(n===u && !v && T('^[「｢]',t)) m+=' - 新規';let tt=t.replace(/＜/g,'『').replace(/＞/g,'』');if(L!==m){o.push(m+'＞'+(v?'\n':N)+tt)}else{o.push(tt)}L=m};if(s)o.push(k+'＞\n'+s);i.forEach(g=>{let t=g;if(!t)return;if(T(%60^[・○●◎※0-9]%60,t)){o.push(t.replace(/＜/g,'『').replace(/＞/g,'』'));L="";return}if(T('^([「｢『『（(【［«《])\\1',t)){f(k,t)}else if(T('^[「｢]',t)){f(u,t)}else if(T(%60^([${D}！-／：-＠])\\1|^[『【＜${D}]%60,t)){f(a,t)}else if(T('^[（(※＊]',t)){f(k,t)}else{f(u,t)}});let R=o.join('\n\n').replace(new RegExp(%60\\n\\n(?=(?:${u}|${k}|${a}))%60,'g'),'\n').replace(new RegExp(%60(${k}＞\\n.+?)\\n(?=${u})%60,'s'),'$1\n')+%60\n\n。、。${N}%60,z=R.split('\n').filter(z=>z.trim()).length;navigator.clipboard.writeText(R).then(()=>alert(%60完了: ${s}\n原文: ${hL}文字(${y}行)\n結果: ${R.length}文字(${z}行)%60)).catch(e=>alert("失敗: "+e))})()
```


## 最後に

　なろうさんんが、「TXTファイルダウンロード機能」廃止らしいので、手助けになれば。。。

　。、。、。、。なるのか？？？



