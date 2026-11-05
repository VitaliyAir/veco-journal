/**
 * Builds a self-contained markdown export of the .NET roadmap for pasting into
 * an LLM chat: no site chrome, stable item ids (section.index), explicit levels.
 *
 * Source: public/roadmaps/dotnet-roadmap.ru.md
 * Output: dotnet-roadmap.context.md
 *
 * Run: node tools/export-roadmap-context.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';

const SRC = 'public/roadmaps/dotnet-roadmap.ru.md';
const OUT = 'dotnet-roadmap.context.md';
const SKIP_SECTIONS = new Set(['Фильтр', 'Градация оценки', 'Отметки для самопроверки']);

const lines = readFileSync(SRC, 'utf8').split(/\r?\n/);

const out = [];
let sectionNum = '';
let itemIndex = 0;
let started = false;
let title = '';
let counts = { J: 0, M: 0, S: 0 };
let total = 0;

for (const raw of lines) {
  const line = raw.replace(/\s+$/, '');
  if (!line.trim()) continue;

  if (line.startsWith('# ') && !title) {
    title = line.slice(2).trim();
    continue;
  }

  if (line.startsWith('## ')) {
    const heading = line.slice(3).trim();
    const m = heading.match(/^(\d+(?:\.\d+)?)\.\s*(.*)$/);
    if (SKIP_SECTIONS.has(heading)) {
      sectionNum = '';
      continue;
    }
    started = true;
    sectionNum = m ? m[1] : String(out.filter((l) => l.startsWith('## ')).length);
    itemIndex = 0;
    out.push('');
    out.push(`## ${sectionNum}. ${m ? m[2] : heading}`);
    continue;
  }

  if (!started) continue;

  if (line.startsWith('### ')) {
    out.push('');
    out.push(`### ${line.slice(4).trim()}`);
    continue;
  }

  if (line.trim() === '---') continue;

  const item = line.match(/^- \[ \]\s*(.*)$/);
  if (item) {
    itemIndex += 1;
    total += 1;
    let text = item[1];
    let level = '';
    const tag = text.match(/^\*\*\((J|M|S)\)\s*(.*?)\*\*\s*([\s\S]*)$/);
    if (tag) {
      level = tag[1];
      counts[level] += 1;
      const label = tag[2].trim();
      const sep = label.endsWith(':') ? ' ' : ' — ';
      text = `**${label}**${tag[3] ? sep + tag[3].trim() : ''}`;
    }
    out.push(`- **${sectionNum}.${itemIndex}** ${level ? `\`${level}\` ` : ''}${text}`);
    continue;
  }

  const nested = line.match(/^\s{2,}-\s+(.*)$/);
  if (nested) {
    out.push(`    - ${nested[1]}`);
    continue;
  }
}

const header = `# ${title || '.NET Developer Roadmap'} — контекст для LLM

> **Как пользоваться.** Скопируйте файл целиком в чат и напишите, что нужно: оценить ваш уровень по пунктам,
> составить план на 3 месяца, проверить знания вопросами, объяснить конкретный пункт.
> Ссылайтесь на пункты по идентификатору — он стабилен (раздел.номер).

## Метаданные

| Параметр | Значение |
|---|---|
| Пунктов | ${total} |
| Уровни | J — Junior, M — Middle, S — Senior |
| Разметка | \`J\` ${counts.J} · \`M\` ${counts.M} · \`S\` ${counts.S} |

Шкала самооценки для каждого пункта:

| Оценка | Значение |
|---|---|
| 0 | не слышал |
| 1 | слабо представляю |
| 2 | могу использовать |
| 3 | уверенно пользуюсь |
| 4 | знаю глубоко, с теоретическим контекстом |

## Как попросить оценку

Пример запроса: «Пройди по пунктам и выставь каждому оценку 0–4, опираясь на мои ответы. Верни таблицу:
идентификатор, тема, оценка, одно предложение обоснования. В конце — три главных пробела.»

## Оглавление

${out
  .filter((l) => l.startsWith('## '))
  .map((l) => `- ${l.slice(3)}`)
  .join('\n')}
`;

const body = out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
writeFileSync(OUT, `${header}\n${body}\n`, 'utf8');

const size = Buffer.byteLength(readFileSync(OUT), 'utf8');
console.log(`[context] ${OUT}: ${total} items, J ${counts.J} / M ${counts.M} / S ${counts.S}, ${size} bytes`);
