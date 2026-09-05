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
    let X = t => t.replace(/咖喱/g,'カリー').replace(/蹂躙/g,'じゅうりん').replace(/繡/g,'繍').replace(/頰/g,'頬').replace(/噓/g,'嘘').replace(/繫/g,'繋').replace(/剝/g,'剥').replace(/塡/g,'填').replace(/𠮟/g,'叱').replace(/醬/g,'醤').replace(/咒/g,'呪').replace(/嚙/g,'噛').replace(/摑/g,'掴').replace(/艷/g,'艶').replace(/瘦/g,'痩').replace(/禱/g,'祷').replace(/瀆/g,'涜').replace(/顚/g,'顛').replace(/昻/g,'昂').replace(/內/g,'内').replace(/＜/g,'『').replace(/＞/g,'』').replace(/cm³/gi,'立方センチメートル').replace(/cm²/gi,'平方センチメートル').replace(/km²/gi,'平方キロメートル').replace(/m³/gi,'立方メートル').replace(/m²/gi,'平方メートル').replace(/㎥/g,'立方メートル').replace(/㎡/g,'平方メートル').replace(/㎤/g,'立方センチメートル').replace(/㎠/g,'平方センチメートル').replace(/㎢/g,'平方キロメートル').replace(/㎝/g,'センチメートル').replace(/㎜/g,'ミリメートル').replace(/㎞/g,'キロメートル').replace(/㎏/g,'キログラム').replace(/㎎/g,'ミリグラム').replace(/㏄/g,'シーシー').replace(/㎖/g,'ミリリットル').replace(/㎗/g,'デシリットル').replace(/ℓ/g,'リットル').replace(/³/g,'の3乗').replace(/²/g,'の2乗');
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
    
    let r = /(ここまで|最後まで)?(お[よ読]み|[よ読]んで)[頂戴]|[よ読](んで|み)(くださり|くださって|くれて)|[筆著作]者からの?お(願|ねが|[知し]ら)|漫画版|コミカライズ|お知らせ(があります|です)?|書き[下お]ろし|予約[開受]|((昨日|今日|明日|無事|[日月]に)[発販]売|[発販]売([で日記中開決！]|させて(頂|戴|いただ)|します|を[致いた]+|する[こと事]+|間際|直前|間近|予定|決定))|書影|読者様|[短長前中後][編篇]|(ポイント|[ＰP][ＶV]|[ＰP][ＴT]|アクセス(解析|数)|読了時間)?[がも]?[0-9０-９〇一二三四五六七八九十百千万上中下\u2160-\u217B]+([巻章]|に達し|(万)?(ポイント|アクセス|ページビュー|閲覧数|来場者数|[ＰP][ＶV]|[ＰP][ＴT]))|[第全][0-9０-９〇一二三四五六七八九十百千万\u2160-\u217B]+[話章][がでにを]|[★☆]を(いただ|戴|頂)けたら|宣伝(です|させて|を)|^[-※＊●★☆■◆◇▲▽▼*()（）【】『』]+(お[し知]らせ|宣伝|告知|報告|連絡|業務|(面白|おもしろ)かった[！!]?|(続|つづ)きが(読みたい|気になる|楽しみ)[！!]?)[-※＊●★☆■◆◇▲▽▼*()（）【】『』]*|(なろう|カクヨム)の(システム|機能|仕様)|([日週月年]間)ランキング([にでを入]|表紙|上昇|入っ|トップ)?|ブックマーク|ブクマ|アクセス数[がも]|お気に[入い]り(に?登録|して)|(次(回|週)?|来週|都合により|[日月火水木金土]曜?日?)[はにの]?(更新|予定)(です|となります|に戻)|[」』]?[のはもを]?更新([のはもを]|が|再開|[とに]なり|未定|はお休み|して[いま]+す|(する|の)?予定|する(ので|します|かも)|を[減増あ上]|し?[な無]かった)|(たくさん|沢山|執筆|投稿頻度)[にのが](時間が取れず|落ちて|感想|励まし|はげまし|励み|はげみ|コメ|ご?訪問)|(ほか|[他別])(の|にも|を)(こんな|このような|こう[言い]った)?(作品|拙作|新作)(を[よ読]んでみ|は?(いかが|如何|書籍化?)?)|最[新終]話|[誤脱]字|[筆著作]者(の|による)[別他拙]作|番外|閑話|既読の|書籍[のを化]|追記[:;：；]?|予約投稿|裏設定|出版(関係|社)|活動報告|割烹|(完全新作|新作|新連載)[がを]?(初め|始め|はじめ|投稿しま|公開しま)|(いいね|評価|リアクション|コメント)(機能|システム|有難う|ありがとう|待ってます|感謝)|(☆で|どうか)?評価(が|を)?(欲しい|[頂戴]け|いただけ)|読者の?(皆|みな)さんから?の感想|[☆★]{3,}|http/;

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
        alert(`。、。V1\n完了: ${s}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f !== -1 ? `\n※カット有(${cutReason})` : ''}`);
        window.ontomoLock = false;
        overlay.remove();
      }).catch(e => {
        alert(e);
        window.ontomoLock = false;
        overlay.remove();
      });
    } else {
      let titleS = X(s);
      let D = '‒–—―⸺─━…⋯‥', vx = '琴葉 茜', va = '音街ウナ', vb = '音街ウナ - 新規', vy = '琴葉 葵', N = '\n\n\n\n';
      let res = [], vC = "INIT";
      
      if (titleS) {
        res.push(vx + "＞\n" + titleS);
        vC = "TITLE_END";
      }

      // 括弧の途中の地の文離脱を防ぐための改行強制挿入処理（深さ追跡版）
      let opens = "「｢『（(【［«《〈〔〖", closes = "」｣』）)】］»》〉〕〖", puncts = "。、！？!?…・";
      let rawI = i.join('\n'), depth = 0, fText = "";
      
      for (let j = 0; j < rawI.length; j++) {
        let ch = rawI[j];
        if (depth === 0 && opens.includes(ch) && fText.length > 0 && !fText.endsWith('\n')) {
          fText += '\n';
        }
        fText += ch;
        if (opens.includes(ch)) depth++;
        else if (closes.includes(ch)) depth = Math.max(0, depth - 1);
        
        if (depth === 0 && closes.includes(ch)) {
          let k = j + 1;
          while (k < rawI.length && puncts.includes(rawI[k])) {
            fText += rawI[k];
            j++;
            k++;
          }
          if (j + 1 < rawI.length && rawI[j + 1] !== '\n' && !opens.includes(rawI[j + 1])) {
            fText += '\n';
          }
        }
      }
      i = fText.split('\n');

      let currentDepth = 0;
      i.forEach(l => {
        if (isN) { res.push(l); return; }
        if (!l.trim()) return;
        
        let t = X(l); 
        let lt = t.trim(), v = vC;
        
        let op = (t.match(/[「｢『（(【［«《〈〔〖]/g) || []).length;
        let cl = (t.match(/[」｣』）)】］»》〉〕〖]/g) || []).length;

        // 一番外側（深さ0）にいる時だけ、各指定ボイスの条件をチェック
        if (currentDepth === 0) {
          // 「「 や 『『 など、記号の連続（vy 琴葉 葵）
          if (/^([「｢『（(【［«《〈〔〖！-／：-＠※＊])\1/.test(lt) || new RegExp(`^[${D}]`).test(lt)) {
            v = vy;
          } 
          // 単独の 「 ｢ （vb 音街ウナ - 新規）
          else if (/^[「｢]/.test(lt)) {
            v = vb;
          } 
          // 単独の 『 【 （ などの記号 （vx 琴葉 茜）
          else if (/^[『（(【［«《〈〔〖！-／：-＠※＊]/.test(lt)) {
            v = vx;
          } 
          // それ以外、地の文 （va 音街ウナ）
          else {
            v = va;
          }
        }

        if (vC !== v || vC === "TITLE_END") res.push(v + "＞" + N + t);
        else res.push(t);

        vC = v;
        currentDepth += op - cl;
        if (currentDepth < 0) currentDepth = 0;
      });

      let R = res.join('\n') + '\n\n。、。\n\n\n', z = R.split('\n').length;
      navigator.clipboard.writeText(R).then(() => {
        alert(`。、。V2\n完了: ${titleS}\n原文: ${L}(${Y})\n結果: ${R.length}(${z})${f !== -1 ? `\n※カット有(${cutReason})` : ''}`);
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
