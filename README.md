# なろカクレット( #syokaklet )


<img width="460" height="240" alt="image" src="https://github.com/user-attachments/assets/93557b59-b181-4a35-9436-156b778d42bc" />



　名称はてきとーです（旧名「p-novel」でしたが、カクヨムにも対応させたので、この名前に）。

## Summary

　「[小説家になろう](https://syosetu.com/)」及び「[カクヨム](https://kakuyomu.jp/)」の エピーソードページ内の「<b>サブタイトル(エピソードタイトル？)</b>」と「<b>本文</b>」を コピペしたい時用に使う<s>嫌らしい</s>ブックマークレットです。

　ダイアログにサブタイトルと、文字数と、行数（数値はざっくり）を表示させ、サブタイトルと本文をコピーするだけのもの。

　面倒なので「～なろう」では、前書きと後書きも含みますが、どちらも重要な本文ですのでいいでしょう。推し先生の作品読みのお供にどうぞ。

 　最後に「。、。」が付きますが、これはおいらが使ってる「読み上げソフト」では、これを付けないと最後の最後で音飛びするため、聴き取れないと困るからの措置です。

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

```js
javascript:(()=>{let s=document.querySelector('.p-novel__title,p.widget-episodeTitle,h2.episode-title')?.innerText||"";let b=document.querySelector(%27.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody');if(!s||!b)return alert("取得不可");s=s.replace(/^\s+/, '');let c=b.cloneNode(true);c.querySelectorAll('br').forEach(br=>br.replaceWith('\n'));c.querySelectorAll('ruby').forEach(r=>{let rt=r.querySelector('rt')?.innerText.trim()||"",rb=[...r.childNodes].filter(n=>n.nodeType===3||n.tagName==="RB").map(n=>n.textContent).join('').trim();let showRuby=/[ぁ-んァ-ヶ一-龥々ーa-zA-Z0-9]/.test(rt);r.replaceWith(showRuby?%60【【${rt}】】${rb}%60:rb)});let f=c.innerText.replace(/^\s+/, '');let text=s+'\n\n'+f+'\n。、。\n\n\n',lines=text.split('\n').filter(l=>l.trim()).length,chars=text.length;navigator.clipboard.writeText(text).then(()=>alert(%60コピー完了: ${s}\n文字数: ${chars}\n行数: ${lines}%60)).catch(e=>alert("コピー失敗: "+e))})();
```
