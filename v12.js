((d = document) => {
  if (d.getElementById('v12ov')) return;

  let overlay = d.createElement('div');
  overlay.id = 'v12ov';
  overlay.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:999999;display:flex;align-items:center;justify-content:center;font-family:sans-serif;';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove() };

  let modal = d.createElement('div');
  modal.style = 'background:#fff;color:#333;padding:24px;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,0.3);width:300px;position:relative;text-align:center;box-sizing:border-box;';

  let closeBtn = d.createElement('span');
  closeBtn.innerText = '×';
  closeBtn.style = 'position:absolute;top:10px;right:15px;font-size:24px;cursor:pointer;color:#aaa;line-height:1;font-weight:bold;';
  closeBtn.onclick = () => overlay.remove();
  modal.appendChild(closeBtn);

  let title = d.createElement('h3');
  title.innerText = '。、。V12';
  title.style = 'margin:0 0 20px;font-size:16px;font-weight:bold;color:#222;letter-spacing:1px;';
  modal.appendChild(title);

  let parseText = (isV2) => {
    if (window.ontomoLock) return;
    window.ontomoLock = true;

    let q = n => d.querySelector(n);
    let b = q('.js-novel-text:not(.p-novel__text--afterword),.p-novel__body,[data-episode-text],.widget-episodeBody,[itemprop="articleBody"],#novelBody,.Gap_size-m__thYv4>div:not(:has(div[class])),.p-news-entry__body,#novel-body');
    if (!b) {
      window.ontomoLock = false;
      alert("取得不可");
      overlay.remove();
      return;
    }

    let s = q('.p-novel__title,p.widget-episodeTitle,h2.episode-title,h2.Heading_heading__lQ85n,h1.p-news-entry__title,.al-title')?.innerText.trim() || "";
    let X = t => t.replace(/咖喱/g,'カリー').replace(/蹂躙/g,'じゅうりん').replace(/繡/g,'繍').replace(/頰/g,'頬').replace(/噓/g,'嘘').replace(/繫/g,'繋').replace(/剝/g,'剥').replace(/塡/g,'填').replace(/𠮟/g,'叱').replace(/醬/g,'醤').replace(/咒/g,'呪').replace(/嚙/g,'噛').replace(/摑/g,'掴').replace(/艷/g,'艶').replace(/瘦/g,'痩').replace(/禱/g,'祷').replace(/瀆/g,'涜').replace(/顚/g,'顛').replace(/昻/g,'昂').replace(/內/g,'内');
    let L = b.innerText.replace(/\s/g,'').length, Y = b.innerText.split('\n').length;

    let p = b.cloneNode(true);
    p.querySelectorAll('.p-novel__text--afterword,#novel_a').forEach(e => e.remove());
    let a = d.querySelector('#novel_a,.p-novel__text--afterword');
    if (a) p.appendChild(a.cloneNode(true));

    if (isV2) {
      p.querySelectorAll('ruby').forEach(r => {
        let t = r.querySelector('rt');
        if (t) {
          let txt = t.innerText.trim();
          if (/^[・●◎○]+$/.test(txt)) {
            r.querySelectorAll('rt,rp').forEach(e => e.remove());
            r.replaceWith(r.innerText.trim());
          } else {
            r.innerText = txt;
          }
        }
      });
    } else {
      p.querySelectorAll('ruby').forEach(r => {
        let t = r.querySelector('rt')?.innerText.trim() || "",
            m = [...r.childNodes].filter(n => n.nodeType === 3 || n.tagName === "RB").map(n => n.textContent).join('').trim();
        r.replaceWith(`|${m}《${t}》`);
      });
    }

    let i = [...p.childNodes].map(n => n.nodeType === 3 ? n.textContent : n.innerText).join('\n').split('\n').map(l => l.replace(/[ \t]+$/, ''));
    let f = -1, cutReason = "";
    let r = /お読み[い頂戴]|読んでく(ださ(って|ださり)|れて)+((ありが|有難)う|感謝|感激)|[筆著作]者から(の)?お(願|ねが|[知し]ら)|コミカライズ|書き[下お]ろし|予約[開受]|(昨日|今日|明日|[日月]に)発売|発売[さしでを日記中開決！]|書影|読者様|[短長前中後][編篇]|[0-9０-９〇一二三四五六七八九十百千万上中下\u2160-\u217B]+([巻章]|(万)?ポイント達成)|[第全][0-9０-９〇一二三四五六七八九十百千万\u2160-\u217B]+[eエ話章][がでにを]|[★☆]を(いただく|戴|頂)けたら|宣伝(です|さ|を[さ行いく])|^[-※＊●★☆■◆◇▲▽▼*()（）【】「」『』]+(お[し知]らせ|宣伝|告知|報告|連絡|業務|(面白|おもしろ)かった[！!]?|(続|つづ)きが(読みたい|気になる|楽しみ)[！!]?)[-※＊●★☆■◆◇▲▽▼*()（）【】「」『』]*|(なろう|カクヨム)の(システム|機能|仕様)|ランキング[にでを]|ブックマーク|ブクマ|お気に[入い]り(に?登録|して)|(次回|次回|次|[日月火水木金土]曜日)[のに](更新|予定)|更新([とに]なり|未定|はお休み|する予定|の予定|予定|するので|します|するかも|し[な無]かった|[な無]かった)|(たくさん|沢山の)(感想|励まし|はげまし|コメ)|(ほか|他|別)の(お話|作品|拙作)は(いかが|書籍|書籍化|如何)|最[新終]話|[誤脱]字|他作|拙作|番外|閑話|書籍[のを化]|裏設定|ポイント[とや]感想|☆☆☆|★★★|http/;

    let isN = b.classList.contains('p-news-entry__body');
    if (!isN) {
      let totalTxt = i.join(''), limitLen = Math.max(32, Math.floor(totalTxt.length * 0.3)), currentLen = 0;
      for (let n = i.length - 1; n >= 0; n--) {
        currentLen += i[n].length;
        if (i[n].trim() !== "" && r.test(i[n])) {
          f = n;
          let m = i[n].match(r);
          cutReason = m ? m[0] : i[n].trim();
        }
        if (currentLen > limitLen) break;
      }
    }

    if (f !== -1) i = i.slice(0, f);
    while (i.length > 0 && !i[0].trim()) i.shift();

    if (!isV2) {
      let R = s + '\n\n' + i.join('\n') + '\n\n。、。\n\n\n', z = R.split('\n').length;
      navigator.clipboard.writeText(R).then(() => {
        alert(`。、。V1\n完了: ${s}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f !== -1 ? `\n※カット有（${cutReason}）` : ''}`);
        window.ontomoLock = false;
        overlay.remove();
      }).catch(e => {
        alert(e);
        window.ontomoLock = false;
        overlay.remove();
      });
    } else {
      let titleS = X(s);
      let D = '‒–—―⸺─━…⋯‥', va = '音街ウナ', vb = '音街ウナ - 新規', vx = '琴葉 茜', vy = '琴葉 葵', N = '\n\n\n\n', T = (r, t) => new RegExp(r).test(t);
      let res = [], vC = "INIT", isL = 0;
      if (titleS) {
        res.push(vx + "＞\n" + titleS);
        vC = "TITLE_END";
      }

      i.forEach(l => {
        if (isN) { res.push(l); return; }
        if (!l.trim()) return;
        let lt = l.trim(), v = vC;
        let op = (l.match(/[「｢『（(【［«《〈〔〖]/g) || []).length, cl = (l.match(/[」｣』）)】］»》〉〕〖]/g) || []).length;
        let isEndClose = /[」｣』）)】］»》〉〕〖]$/.test(lt);

        if (isL === 0) {
          if (op > cl) {
            if (T('^[『]', lt)) v = vy;
            else if (T('^[「｢]', lt)) v = vb;
            else if (T(`^([${D}！-／：-＠※＊（(《〈〔〖【])\\1`, lt)) v = vy;
            else if (T(`^[${D}！-／：-＠※＊（(《〈〔〖【]`, lt)) v = vx;
            else v = va;
          } else if (isEndClose) {
            if (T('^[『]', lt)) v = vy;
            else if (T('^[「｢]', lt)) v = vb;
            else if (T(`^([${D}！-／：-＠※＊（(《〈〔〖【])\\1`, lt)) v = vy;
            else if (T(`^[${D}！-／：-＠※＊（(《〈〔〖【]`, lt)) v = vx;
            else v = va;
          } else {
            v = va;
          }
        } else {
          if (isL + op - cl === 0 && !isEndClose) {
            v = va;
          }
        }

        let t = X(l).replace(/＜/g, '『').replace(/＞/g, '』');
        if (vC !== v || vC === "TITLE_END") res.push(v + "＞" + N + t);
        else res.push(t);

        vC = v;
        isL += op - cl;
      });

      let R = res.join('\n') + '\n\n。、。\n\n\n', z = R.split('\n').length;
      navigator.clipboard.writeText(R).then(() => {
        alert(`。、。V2\n完了: ${titleS}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f !== -1 ? `\n※カット有（${cutReason}）` : ''}`);
        window.ontomoLock = false;
        overlay.remove();
      }).catch(e => {
        alert(e);
        window.ontomoLock = false;
        overlay.remove();
      });
    }
  };

  let makeBtn = (txt, bg, hover, col, w, isV2) => {
    let btn = d.createElement('button');
    btn.innerText = txt;
    btn.style = `width:100%;padding:14px;margin-bottom:12px;background:${bg};color:${col};border:none;border-radius:8px;font-size:14px;cursor:pointer;font-weight:${w};transition:all 0.2s;outline:none;border-bottom:3px solid rgba(0,0,0,0.15);display:block;box-sizing:border-box;`;
    btn.onmouseover = () => btn.style.background = hover;
    btn.onmouseout = () => btn.style.background = bg;
    btn.onclick = () => parseText(isV2);
    modal.appendChild(btn);
  };

  makeBtn('。、。V1', '#e0e0e0', '#d0d0d0', '#333333', 'normal', false);
  makeBtn('。、。V2', '#c0e0ff', '#a8d0ff', '#000000', 'bold', true);
  overlay.appendChild(modal);
  d.body.appendChild(overlay);
})(document);
