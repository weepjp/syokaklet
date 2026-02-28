# なろカクレット( #syokaklet )


<img width="460" height="240" alt="image" src="https://github.com/user-attachments/assets/93557b59-b181-4a35-9436-156b778d42bc" />



　名称はてきとーです（旧名「p-novel」でしたが、カクヨムにも対応させたので、この名前に）。

## Summary

　小説サイトのエピーソードページ内の「<b>サブタイトル(エピソードタイトル？)</b>」と「<b>本文</b>」を コピペしたい時用に使う<s>嫌らしい</s>ブックマークレットです。

　ダイアログにサブタイトルと、文字数と、行数（数値はざっくり）を表示させ、サブタイトルと本文をコピーするだけのもの。

　面倒なので「～なろう」では、前書きと後書きも含みますが、どちらも重要な本文ですのでいいでしょう。推し先生の作品読みのお供にどうぞ。

 　最後に「。、。」が付きますが、これはおいらが使ってる「読み上げソフト」では、これを付けないと最後の最後で音飛びするため、聴き取れないと困るからの措置です。

### Sites

* 小説家になろう

* カクヨム（＋近況ノート）

* 他


### ruby tag

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



## 某渋の小説には対応しないのですか？

　そのサイトの仕様上、対応できませんでした。。。

　その名の通り、あそこはこう言うのに「激渋」なんだよなぁ。
　

## JavaScript (Bookmarklet)

### #syokaklet v20250926

```js
javascript:(()=>{let s=document.querySelector('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2[class*="Heading_size-1l"]')?.innerText||"";let b=document.querySelector('.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4 .Gap_size-m__thYv4>div');if(!s||!b)return alert("取得不可");s=s.replace(/^[\s\u3000]+/, '');let c=b.cloneNode(true);c.querySelectorAll('br').forEach(br=>br.replaceWith('\n'));c.querySelectorAll('ruby').forEach(r=>{let rt=r.querySelector('rt')?.innerText.trim()||"",rb=[...r.childNodes].filter(n=>n.nodeType===3||n.tagName==="RB").map(n=>n.textContent).join('').trim();if(/^[\p{P}\p{S}\s]*$/u.test(rt)){r.replaceWith(rb)}else{r.replaceWith(`【【${rb}】】${rt}`)}});let f=c.innerText.replace(/^[ \t\r\n]+/, '').replace(/^\u3000{2,}/gm, '　');let text=s+'\n\n'+f+'\n。、。\n\n\n',lines=text.split('\n').filter(l=>l.trim()).length,chars=text.length;navigator.clipboard.writeText(text).then(()=>alert(`コピー完了: ${s}\n文字数: ${chars}\n行数: ${lines}`)).catch(e=>alert("コピー失敗: "+e))})();
```


### #syokaklet kimaguré Edition v20260228

```js
javascript:((d=document)=>{let q=n=>d.querySelector(n),s=q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim()||"",b=q(%27.js-novel-text.p-novel__text,.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');if(!b)return alert("取得不可");let hL=b.innerText.length,y=b.innerText.split('\n').filter(z=>z.trim()).length;let rbP=b.cloneNode(!0);rbP.querySelectorAll('ruby').forEach(rb=>{let rt=rb.querySelector('rt'),base=rb.childNodes[0]?.textContent||"";if(rt){let yomi=rt.innerText.replace(/[^a-zA-Zぁ-んァ-ヶ一-龥々ー]/g,'');rb.replaceWith(yomi || base)}else{rb.replaceWith(rb.innerText)}});let D='‒–—―⸺─━…⋯‥',u='音街ウナ',k='琴葉 茜',a='琴葉 葵',N='\n\n\n',T=(r,t)=>new RegExp(r).test(t);let h=rbP.innerHTML.replace(/<br\s*\/?>/gi,'\n').replace(/<\/p>|<\/div>/gi,'\n').replace(/<[^>]*>/g,'');let txe=d.createElement('textarea');txe.innerHTML=h;let x=txe.value.replace(/[ %E3%80%80]{2,}/g,'%E3%80%80');[['「','」'],['『','』'],['（','）'],['\\(','\\)'],['【','】'],['［','］']].forEach(([o,l])=>{let r=new RegExp(%60${o}[^${l}]*?\\n+[^${o}]*?${l}%60,'g');for(let i=0;i<5;i++){if(!T(r,x))break;x=x.replace(r,m=>m.replace(/\n+/g,''))}});let i=x.split('\n').map(l=>l.trim()).filter(l=>l!==""),o=[],L="",f=(n,t,v=false)=>{let m=n;if(n===u && !v && T('^[「｢]',t)) m+=' - 新規';let tt=t.replace(/＜/g,'『').replace(/＞/g,'』');if(L!==m){o.push(m+'＞'+(v?'\n':N)+tt)}else{o.push(tt)}L=m};if(s)o.push(k+'＞\n'+s);i.forEach(g=>{let t=g;if(!t)return;if(T(%60^[・○●◎※0-9]%60,t)){o.push(t.replace(/＜/g,'『').replace(/＞/g,'』'));L="";return}if(T('^([「｢『『（(【［«《])\\1',t)){f(k,t)}else if(T('^[「｢]',t)){f(u,t)}else if(T(%60^([${D}！-／：-＠])\\1|^[『【＜${D}]%60,t)){f(a,t)}else if(T('^[（(※＊]',t)){f(k,t)}else{f(u,t)}});let R=o.join('\n\n').replace(new RegExp(%60\\n\\n(?=(?:${u}|${k}|${a}))%60,'g'),'\n').replace(new RegExp(%60(${k}＞\\n.+?)\\n(?=${u})%60,'s'),'$1\n')+%60\n\n。、。${N}%60,z=R.split('\n').filter(z=>z.trim()).length;navigator.clipboard.writeText(R).then(()=>alert(%60完了: ${s}\n原文: ${hL}文字(${y}行)\n結果: ${R.length}文字(${z}行)%60)).catch(e=>alert("失敗: "+e))})()
```
上記のやつとは別物で、個人的に VOICEROID² で使ってるやつ。

文の先頭文字（括弧か傍線か記号かそれ以外か）を判定して、音街ウナ(と - 新規)と琴葉葵と琴葉茜で割り振ってる。

コマンドは　ボイス名＞　で、VOICEROID² デフォルト準拠。

地の文は音街ウナ、「～」は音街ウナ - 新規、『～』は琴葉葵、エピソードタイトルと他は琴葉茜（雑）の配役です。
