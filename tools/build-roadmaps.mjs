/**
 * Renders public/roadmaps/*.md into standalone, themed HTML pages.
 *
 * The roadmap files are markdown checklists (- [ ] items). The generated page
 * keeps them readable in the browser and makes the boxes tickable, storing the
 * state in localStorage per language. Empty source files are skipped, so an
 * untranslated roadmap simply has no page until the .md is filled in.
 *
 * Run: node tools/build-roadmaps.mjs   (hooked into `npm run build`)
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'public/roadmaps';
const LOCALES = { ru: 'ru-RU', en: 'en-GB' };
const TITLES = { ru: 'VEco Journal · .NET Roadmap', en: 'VEco Journal · .NET Roadmap' };

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const inline = (s) =>
  esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s.,;:)]|$)/g, '$1<em>$2</em>');

function parse(md) {
  const lines = md.split(/\r?\n/);
  const doc = { title: '', subtitle: '', sections: [] };
  let section = null;
  let item = null;

  const closeItem = () => {
    if (item && section) section.items.push(item);
    item = null;
  };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim()) continue;

    if (line.startsWith('# ')) {
      doc.title = line.slice(2).trim();
      continue;
    }
    if (/^\*[^*].*\*$/.test(line.trim())) {
      doc.subtitle = line.trim().replace(/^\*|\*$/g, '');
      continue;
    }
    if (line.startsWith('### ')) {
      closeItem();
      if (!section) section = { heading: '', items: [] };
      section.items.push({ sub: true, text: line.slice(4).trim() });
      continue;
    }
    if (line.startsWith('## ')) {
      closeItem();
      section = { heading: line.slice(3).trim(), items: [] };
      doc.sections.push(section);
      continue;
    }
    if (line.trim() === '<!-- level-filter -->') {
      if (section) section.filter = true;
      continue;
    }
    if (line.trim() === '<!-- numbered -->') {
      if (section) section.numbered = true;
      continue;
    }
    if (/^\s{2,}-\s+/.test(raw)) {
      // nested bullet under the current item
      if (item) item.children.push(line.replace(/^\s*-\s+/, ''));
      continue;
    }
    if (/^-\s+\[[ xX]\]\s+/.test(line)) {
      closeItem();
      if (!section) {
        section = { heading: '', items: [] };
        doc.sections.push(section);
      }
      item = { text: line.replace(/^-\s+\[[ xX]\]\s+/, ''), children: [] };
      continue;
    }
    if (/^-\s+/.test(line)) {
      closeItem();
      if (!section) {
        section = { heading: '', items: [] };
        doc.sections.push(section);
      }
      section.items.push({ plain: true, text: line.replace(/^-\s+/, '') });
      continue;
    }
    if (line.trim() === '---') {
      closeItem();
      continue;
    }
    const img = line.trim().match(/^!\[(.*?)\]\((.+?)\)$/);
    if (img) {
      closeItem();
      if (!section) {
        section = { heading: '', items: [] };
        doc.sections.push(section);
      }
      section.items.push({ img: true, alt: img[1].trim(), src: img[2].trim() });
      continue;
    }
    closeItem();
    if (!section) {
      section = { heading: '', items: [] };
      doc.sections.push(section);
    }
    section.items.push({ prose: true, text: line.trim() });
  }
  closeItem();
  return doc;
}

function render(doc, lang) {
  let n = 0;
  const body = doc.sections
    .map((section) => {
      const head = section.heading ? `<h2>${inline(section.heading)}</h2>` : '';

      // A section marked with <!-- level-filter --> renders level toggles, not checklist rows.
      if (section.filter) {
        const toggles = section.items
          .map((it) => {
            const text = (it.text ?? '').trim();
            const m = text.match(/\((J|M|S)\)\s*$/i);
            const level = m ? m[1].toUpperCase() : '';
            return `<label class="lvl-filter"><input type="checkbox" data-level="${level}" checked><span>— ${inline(text)}</span></label>`;
          })
          .join('');
        return `<section class="filter-section">${head}<div class="level-filters">${toggles}</div></section>`;
      }

      // A section marked with <!-- numbered --> renders a 0..N scale instead of checkboxes.
      if (section.numbered) {
        const scale = section.items
          .map((it) => {
            const m = (it.text ?? '').match(/^(\d+)\s*[—-]\s*(.*)$/);
            const num = m ? m[1] : '';
            const text = m ? m[2] : it.text;
            return `<div class="scale-row"><span class="scale-num">${num}</span><span>${inline(text)}</span></div>`;
          })
          .join('');
        return `<section class="scale-section">${head}${scale}</section>`;
      }

      const items = section.items
        .map((it) => {
          if (it.img) {
            return `<figure class="fig"><img src="${it.src}" alt="${esc(it.alt)}" loading="lazy"><figcaption>${inline(it.alt)}</figcaption></figure>`;
          }
          if (it.prose) return `<p>${inline(it.text)}</p>`;
          if (it.sub) return `<h3>${inline(it.text)}</h3>`;
          if (it.plain) return `<p class="plain">${inline(it.text)}</p>`;
          const id = n++;
          // `**(J) Label:** text` -> level badge + bold label + text
          const tag = it.text.match(/^\*\*\((J|M|S)\)\s*(.*?)\*\*\s*([\s\S]*)$/);
          const level = tag ? tag[1] : '';
          const body = tag
            ? `<strong>${inline(tag[2])}</strong>${tag[3] ? ` ${inline(tag[3])}` : ''}`
            : inline(it.text);
          const badge = level ? `<span class="lvl lvl-${level.toLowerCase()}">${level}</span>` : '';
          const kids = it.children.length
            ? `<ul class="sub">${it.children.map((c) => `<li>${inline(c)}</li>`).join('')}</ul>`
            : '';
          const attr = level ? ` data-lvl="${level}"` : '';
          const grades = [0, 1, 2, 3, 4]
            .map((v) => `<label class="g"><input type="radio" name="g${id}" value="${v}" data-i="${id}"><span>${v}</span></label>`)
            .join('');
          return `<div class="row"${attr}><span class="grades" role="radiogroup" aria-label="Оценка от 0 до 4">${grades}</span><span class="txt">${badge}${body}${kids}</span></div>`;
        })
        .join('\n');
      return `<section>${head}${items}</section>`;
    })
    .join('\n');

  const title = doc.title || '.NET Developer Roadmap';
  const sub = doc.subtitle ? `<p class="lead">${inline(doc.subtitle)}</p>` : '';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Inter:wght@400;500;600&display=swap">
<style>
:root {
  --bg:#F5F4F1; --surface:#FFFFFF; --fg:#1C1B19; --fg-muted:#706D64; --border:#DDD9D0;
  --accent:#2D5A3D; --accent-soft:#EBF2ED; --shadow:0 1px 4px rgba(0,0,0,.07);
  --font-d:'Playfair Display', Georgia, serif; --font-u:'Inter', system-ui, sans-serif;
  --lj:#166534; --lm:#1D4ED8; --ls:#7C3AED;
}
@media (prefers-color-scheme: dark) {
  :root { --bg:#131311; --surface:#1D1C1A; --fg:#E8E5DF; --fg-muted:#928F86; --border:#2C2B27;
          --accent:#4A9060; --accent-soft:#182A1E; --shadow:0 1px 4px rgba(0,0,0,.3); color-scheme:dark;
          --lj:#86EFAC; --lm:#93C5FD; --ls:#C4B5FD; }
}
*, *::before, *::after { box-sizing: border-box; }
[hidden] { display: none !important; }
body { margin:0; background:var(--bg); color:var(--fg); font-family:var(--font-u); font-size:15px; line-height:1.65; }
.wrap { max-width: 900px; margin: 0 auto; padding: 40px 24px 80px; }
a { color: var(--accent); }
header { border-bottom: 1px solid var(--border); padding-bottom: 20px; margin-bottom: 28px; }
h1 { font-family: var(--font-d); font-weight: 600; font-size: 30px; line-height: 1.25; margin: 0 0 8px; }
.lead { color: var(--fg-muted); margin: 0 0 14px; }
.bar { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; font-size: 13px; color: var(--fg-muted); }
.bar .count { background: var(--accent-soft); color: var(--accent); border-radius: 999px; padding: 3px 12px; font-weight: 600; font-variant-numeric: tabular-nums; }
.stat { display: inline-flex; align-items: center; gap: 6px; }
.stat-label { color: var(--fg-muted); }
.print-btn {
  border: 1px solid var(--border); background: var(--surface); color: var(--fg);
  border-radius: 999px; padding: 4px 16px; font-family: var(--font-u);
  font-size: 13px; font-weight: 500; cursor: pointer;
}
.print-btn:hover { border-color: var(--accent); color: var(--accent); }
section { margin: 0 0 26px; }
h2 { font-family: var(--font-d); font-size: 21px; font-weight: 600; margin: 30px 0 10px; padding-top: 10px; border-top: 1px solid var(--border); }
h3 { font-size: 15px; font-weight: 600; margin: 18px 0 6px; color: var(--accent); }
.row { display: flex; gap: 12px; align-items: flex-start; padding: 4px 6px; border-radius: 6px; }
.row:hover { background: var(--accent-soft); }
.row .txt { flex: 1; }
.grades { display: flex; gap: 1px; flex: none; padding-top: 2px; }
.g {
  display: flex; align-items: center; gap: 2px; cursor: pointer;
  padding: 1px 3px; border-radius: 4px;
  font-size: 11px; color: var(--fg-muted); font-variant-numeric: tabular-nums;
}
.g input { margin: 0; width: 13px; height: 13px; accent-color: var(--accent); }
.g:has(input:checked) { background: var(--accent-soft); color: var(--accent); font-weight: 600; }
.row:has(input:checked) .txt { color: var(--fg-muted); }
.fig { margin: 0 0 26px; text-align: center; }
.fig img {
  width: 100%; max-width: 620px; height: auto;
  border: 1px solid var(--border); border-radius: 10px; background: var(--surface);
}
.fig figcaption { margin-top: 8px; font-size: 13px; color: var(--fg-muted); }
.level-filters {
  display: flex; flex-wrap: wrap; gap: 12px 28px;
  padding: 14px 0 16px; margin-bottom: 26px;
  border-bottom: 1px solid var(--border);
}
/* one divider only: the filter block's bottom line replaces the heading rule */
.filter-section h2 { border-top: none; padding-top: 0; margin-top: 22px; }
.lvl-filter { display: flex; gap: 8px; align-items: flex-start; cursor: pointer; }
.lvl-filter input { margin-top: 4px; accent-color: var(--accent); flex: none; }
.scale-section { margin-bottom: 26px; }
.scale-row { display: flex; gap: 12px; align-items: baseline; padding: 3px 0; }
.scale-num {
  flex: none; width: 22px; text-align: center;
  font-weight: 700; font-size: 13px; color: var(--accent);
}
.lvl {
  display: inline-block; min-width: 18px; text-align: center;
  font-size: 11px; font-weight: 700; border: 1px solid currentColor;
  border-radius: 5px; padding: 0 5px; margin-right: 8px; vertical-align: 1px;
}
.lvl-j { color: var(--lj); }
.lvl-m { color: var(--lm); }
.lvl-s { color: var(--ls); }
ul.sub { margin: 6px 0 0; padding-left: 20px; color: var(--fg-muted); }
ul.sub li { margin: 2px 0; }
code { background: var(--accent-soft); padding: 1px 5px; border-radius: 4px; font-size: .92em; }
p.plain, p { margin: 8px 0; }
footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid var(--border); color: var(--fg-muted); font-size: 13px; }
@media print {
  @page { margin: 14mm; }
  body { background: #fff; color: #000; font-size: 10.5pt; }
  .wrap { max-width: none; padding: 0; }
  .bar, .level-filters, .filter-section, .scale-section, footer, .grades, .print-btn { display: none !important; }
  h1 { font-size: 20pt; }
  h2 { border-top: 0; page-break-after: avoid; break-after: avoid; }
  h3 { page-break-after: avoid; break-after: avoid; }
  .row { page-break-inside: avoid; break-inside: avoid; padding: 2px 0; }
  .row:hover { background: none; }
  .lvl { border-color: #000; color: #000; }
  .lvl-j, .lvl-m, .lvl-s { color: #000; }
  a { color: #000; text-decoration: none; }
  code { background: none; padding: 0; }
  .row::before {
    content: ''; display: inline-block; flex: none;
    width: 11px; height: 11px; margin: 3px 9px 0 0;
    border: 1px solid #000; border-radius: 3px;
  }
}
</style>
</head>
<body>
<div class="wrap">
<header>
  <h1>${inline(title)}</h1>
  ${sub}
  <div class="bar">
    <span class="stat"><span class="stat-label">Пройдено:</span> <span class="count" id="count">0 / 0</span></span>
    <span class="stat"><span class="stat-label">Баллы:</span> <span class="count" id="score">0</span></span>
    <button class="print-btn" type="button" id="print-btn">Печать</button>
    <a href="https://github.com/vitaliyair/veco-journal" target="_blank" rel="noopener">VEco Journal</a>
  </div>
</header>
${body}
<footer>Отметки сохраняются в этом браузере (localStorage) и никуда не отправляются.</footer>
</div>
<script>
(function () {
  var lang = document.documentElement.lang;
  var key = 'roadmap:dotnet:' + lang;
  var filterKey = 'roadmap:filters:' + lang;
  var boxes = [].slice.call(document.querySelectorAll('.grades input[type=radio]'));
  var rows = [].slice.call(document.querySelectorAll('.row'));
  var toggles = [].slice.call(document.querySelectorAll('input[data-level]'));
  var sections = [].slice.call(document.querySelectorAll('section'));
  var count = document.getElementById('count');
  var score = document.getElementById('score');
  var active = {};

  try {
    var storedFilters = JSON.parse(localStorage.getItem(filterKey) || 'null');
    if (storedFilters) {
      toggles.forEach(function (t) { t.checked = storedFilters.indexOf(t.dataset.level) !== -1; });
    }
  } catch (e) {}
  toggles.forEach(function (t) { active[t.dataset.level] = t.checked; });

  var visible = function (row) {
    var lvl = row.dataset.lvl;
    return !lvl || active[lvl];
  };

  var update = function () {
    var shown = rows.filter(visible);
    var scored = shown.map(function (r) { return r.querySelector('input:checked'); }).filter(Boolean);
    var total = scored.reduce(function (acc, inp) { return acc + Number(inp.value); }, 0);
    count.textContent = scored.length + ' / ' + shown.length;
    score.textContent = total + ' / ' + shown.length * 4;
  };

  var applyFilters = function () {
    rows.forEach(function (r) { r.hidden = !visible(r); });
    sections.forEach(function (s) {
      if (s.classList.contains('filter-section')) return;
      var rowEls = s.querySelectorAll('.row');
      if (!rowEls.length) return; // intro and scale sections have no rows: keep them visible
      var anyShown = [].some.call(rowEls, function (r) { return !r.hidden; });
      s.hidden = !anyShown;
    });
    update();
  };

  var saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (e) { saved = {}; }
  if (Array.isArray(saved)) saved = {};

  boxes.forEach(function (box) {
    var i = box.dataset.i;
    if (String(saved[i]) === box.value) box.checked = true;
    box.addEventListener('change', function () {
      saved[i] = Number(box.value);
      try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
      update();
    });
  });

  toggles.forEach(function (t) {
    t.addEventListener('change', function () {
      active[t.dataset.level] = t.checked;
      var on = toggles.filter(function (x) { return x.checked; })
        .map(function (x) { return x.dataset.level; });
      try { localStorage.setItem(filterKey, JSON.stringify(on)); } catch (e) {}
      applyFilters();
    });
  });

  var printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });

  applyFilters();
})();
</script>
</body>
</html>
`;
}

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
if (!files.length) {
  console.log('[roadmaps] no markdown sources in ' + DIR);
}

for (const file of files) {
  const lang = file.match(/\.(ru|en)\.md$/)?.[1];
  if (!lang) {
    console.log(`[roadmaps] skip ${file} (expected <name>.<lang>.md)`);
    continue;
  }
  const src = join(DIR, file);
  if (statSync(src).size === 0) {
    console.log(`[roadmaps] skip ${file} (empty)`);
    continue;
  }
  const doc = parse(readFileSync(src, 'utf8'));
  const out = src.replace(/\.md$/, '.html');
  writeFileSync(out, render(doc, lang), 'utf8');
  console.log(`[roadmaps] ${file} -> ${out}`);
}
