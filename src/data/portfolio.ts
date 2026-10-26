import type { PortfolioItem } from '../types';

export const portfolio: PortfolioItem[] = [
  {
    tag: { ru: 'Планировщик', en: 'Planner' },
    name: 'VGoalsPlanner',
    desc: {
      ru: 'Основная идея — фиксировать цели и постепенно детализировать их до уровня задач. Это позволяет делать цели достижимыми, а также помогает откладывать отвлекающие задачи, если их конечная цель не имеет большого значения.',
      en: 'The core idea — capture goals and progressively break them down to the task level. This makes goals achievable and helps defer distracting tasks when their underlying goal doesn\'t matter much.',
    },
    stack: ['.NET 10', 'Postgres', 'React', 'MediatR', 'JWT', 'Keycloak'],
    diagram: (lang) => {
      const lGoals    = lang === 'ru' ? 'Цели'              : 'Goals';
      const lSubgoals = lang === 'ru' ? 'Подцели'           : 'Sub-goals';
      const lTasks    = lang === 'ru' ? 'Задачи'            : 'Tasks';
      const lPoints   = lang === 'ru' ? 'Пункты'            : 'Points';
      const goal      = lang === 'ru' ? 'Развивать кругозор': 'Broaden horizons';
      const sg1       = lang === 'ru' ? 'Учёба'             : 'Learning';
      const sg2       = lang === 'ru' ? 'Путешествия'       : 'Travel';
      const t1        = lang === 'ru' ? 'Выучить язык'      : 'Learn language';
      const t2        = lang === 'ru' ? 'Читать'            : 'Reading';
      const p1        = lang === 'ru' ? 'Слова'             : 'Words';
      const p2        = lang === 'ru' ? 'Фразы'             : 'Phrases';
      return (
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 114" style="width:100%;height:auto;display:block">` +
        `<text x="202" y="14"  fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="8.5" opacity=".7">${lGoals}</text>` +
        `<text x="202" y="48"  fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="8.5" opacity=".7">${lSubgoals}</text>` +
        `<text x="202" y="79"  fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="8.5" opacity=".7">${lTasks}</text>` +
        `<text x="202" y="103" fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="8.5" opacity=".7">${lPoints}</text>` +
        `<rect x="20" y="0" width="160" height="22" rx="6" fill="var(--accent)" fill-opacity=".15" stroke="var(--accent)" stroke-opacity=".35" stroke-width="1"/>` +
        `<text x="100" y="15" text-anchor="middle" fill="var(--accent)" font-family="Inter,system-ui,sans-serif" font-size="10" font-weight="600">${goal}</text>` +
        `<line x1="100" y1="22" x2="60"  y2="36" stroke="var(--border)" stroke-width="1.2"/>` +
        `<line x1="100" y1="22" x2="160" y2="36" stroke="var(--border)" stroke-width="1.2"/>` +
        `<rect x="4"   y="36" width="112" height="20" rx="5" fill="var(--accent)" fill-opacity=".09" stroke="var(--accent)" stroke-opacity=".22" stroke-width="1"/>` +
        `<rect x="124" y="36" width="72"  height="20" rx="5" fill="var(--accent)" fill-opacity=".09" stroke="var(--accent)" stroke-opacity=".22" stroke-width="1"/>` +
        `<text x="60"  y="50" text-anchor="middle" fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="8.5">${sg1}</text>` +
        `<text x="160" y="50" text-anchor="middle" fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="8.5">${sg2}</text>` +
        `<line x1="60" y1="56" x2="30" y2="68" stroke="var(--border)" stroke-width="1.2"/>` +
        `<line x1="60" y1="56" x2="92" y2="68" stroke="var(--border)" stroke-width="1.2"/>` +
        `<rect x="2"  y="68" width="56" height="18" rx="4" fill="var(--accent)" fill-opacity=".07" stroke="var(--accent)" stroke-opacity=".18" stroke-width="1"/>` +
        `<rect x="64" y="68" width="56" height="18" rx="4" fill="var(--accent)" fill-opacity=".07" stroke="var(--accent)" stroke-opacity=".18" stroke-width="1"/>` +
        `<text x="30" y="81" text-anchor="middle" fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="7">${t1}</text>` +
        `<text x="92" y="81" text-anchor="middle" fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="7">${t2}</text>` +
        `<line x1="30" y1="86" x2="14" y2="94" stroke="var(--border)" stroke-width="1"/>` +
        `<line x1="30" y1="86" x2="42" y2="94" stroke="var(--border)" stroke-width="1"/>` +
        `<rect x="2"  y="94" width="24" height="16" rx="3" fill="var(--border)" fill-opacity=".55"/>` +
        `<rect x="30" y="94" width="24" height="16" rx="3" fill="var(--border)" fill-opacity=".55"/>` +
        `<text x="14" y="105" text-anchor="middle" fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="6">${p1}</text>` +
        `<text x="42" y="105" text-anchor="middle" fill="var(--fg-muted)" font-family="Inter,system-ui,sans-serif" font-size="6">${p2}</text>` +
        `</svg>`
      );
    },
    descSections: [
      {
        title: { ru: 'Предыстория', en: 'Background' },
        body: {
          ru: 'VGoalsPlanner не задумывался как коммерческий продукт. Появилось время, появилось желание — и возможность написать инструмент под собственные нужды.\n\nЭто не первая попытка. Около двенадцати лет назад я написал планировщик на jQuery, позже переработал его на AngularJS. Данные намеренно сериализовались в файлы: чтобы в крайнем случае можно было открыть и поправить руками. Рабочая версия существовала, но дальше localhost не уходила: DevOps в то время был настоящей тёмной стороной.\n\nС опытом пришло другое понимание. Слишком много времени уходило на само планирование — ради планирования. Стройные списки задач, расписанные по пунктам цели. Но стоило вмешаться фактору случайности — и на выполнение уже не оставалось ни сил, ни времени.\n\nПараллельно пришло осознание, что жёсткое планирование плохо работает за пределами рабочего контекста. Дети — не роботы. Они не укладываются в тайм-слоты. Зато иногда именно ребёнок смотрит на ситуацию иначе — и сразу становится понятно: думал не в ту сторону.',
          en: 'VGoalsPlanner was never conceived as a commercial product. There was time, there was desire — and an opportunity to build a tool for personal use.\n\nThis isn\'t the first attempt. About twelve years ago I wrote a planner in jQuery, later reworked it in AngularJS. Data was deliberately serialized to files so you could open and edit them by hand if needed. A working version existed but never left localhost: DevOps back then felt like a dark art.\n\nExperience brought a different understanding. Too much time was going into planning — for the sake of planning. Neat task lists, goals laid out point by point. But as soon as randomness intervened, there was neither energy nor time left to execute.\n\nAt the same time I came to realize that rigid planning works poorly outside a work context. Children are not robots. They don\'t fit into time slots. But sometimes a child looks at the situation differently — and suddenly it\'s clear you were thinking in the wrong direction.',
        },
      },
      {
        title: { ru: 'Зачем', en: 'Why' },
        body: {
          ru: 'Прежде чем приступить к разработке, я изучил рынок персональных таск-трекеров. В каждом есть интересные идеи, часть из которых планирую адаптировать — те, что вписываются в концепцию.\n\nГлавная проблема существующих инструментов в том, что они построены вокруг задачи как единицы работы: задача поставлена, задача должна быть выполнена. Это хорошо работает в рабочем контексте, где есть дедлайн, ответственный и последствия за невыполнение.\n\nВ личной жизни — особенно там, где задействованы дети, семья, долгосрочные проекты — жёсткое планирование не работает. Мотивация непостоянна, приоритеты меняются, а список задач превращается в источник тревоги, а не поддержки.\n\nКроме того, не каждая цель в итоге оказывается нужной. Понять это на раннем этапе — значит сберечь время и силы, не доводя до конца работу, которая изначально не имела смысла.',
          en: 'Before starting development, I studied the personal task tracker market. Each has interesting ideas — some of which I plan to adapt into this project, those that fit the concept.\n\nThe main problem with existing tools is that they are built around the task as the unit of work: a task is set, a task must be completed. This works well in a work context where there\'s a deadline, an owner, and consequences for non-completion.\n\nIn personal life — especially where children, family, and long-term projects are involved — rigid planning doesn\'t work. Motivation is inconsistent, priorities shift, and the task list becomes a source of anxiety rather than support.\n\nMoreover, not every goal turns out to be worth pursuing. Realizing this early means saving time and energy, not completing work that had no meaning to begin with.',
        },
      },
      {
        title: { ru: 'Концепция', en: 'Concept' },
        body: {
          ru: 'VGoalsPlanner строится на идее постепенной детализации: от расплывчатой цели — к конкретным, выполнимым шагам.\n\nЧем понятнее и проще задача, тем выше вероятность, что она будет сделана. Даже при нулевой мотивации выполнить 20–25% намеченного — уже результат: он не даёт цели окончательно угаснуть и постепенно возвращает желание двигаться дальше.\n\nТакой подход принципиально отличается от строгих трекеров, ориентированных на команды или чёткие производственные процессы. Это инструмент для живого, нежёсткого планирования.',
          en: 'VGoalsPlanner is built on the idea of progressive detailing: from a vague goal down to concrete, actionable steps.\n\nThe clearer and simpler a task, the higher the chance it will actually get done. Even with zero motivation, completing 20–25% of what was planned is already a result: it keeps the goal from fading out entirely and gradually restores the desire to move forward.\n\nThis approach is fundamentally different from strict trackers designed for teams or fixed production processes. It\'s a tool for fluid, non-rigid planning.',
        },
      },
      {
        title: { ru: 'Рабочий процесс', en: 'Workflow' },
        body: {
          ru: '1. Создать цель. Формулируется свободно, даже если пока неточно — цель не обязана быть чёткой с первого раза.\n2. Уточнить. По мере осмысления цель редактируется или пересматривается. Если становится ясно, что цель нерелевантна — её можно отложить без потери контекста.\n3. Разбить на задачи. Цель делится на небольшие самостоятельные шаги. Чем меньше и понятнее задача, тем она реальнее.\n4. Запланировать. Задачам назначаются приоритеты или ориентировочные сроки — без жёсткого дедлайна, просто порядок и намерение.\n5. Выполнять и фиксировать. По ходу добавляются заметки, отмечаются выполненные пункты, меняется статус. История сохраняется — это важно и для рефлексии, и для понимания прогресса.',
          en: '1. Create a goal. Formulated freely, even if imprecise at first — a goal doesn\'t have to be clear from the start.\n2. Refine. As thinking develops, the goal is edited or reconsidered. If it becomes clear the goal is irrelevant, it can be deferred without losing context.\n3. Break into tasks. The goal is divided into small, self-contained steps. The smaller and clearer the task, the more realistic it becomes.\n4. Plan. Tasks are assigned priorities or rough timelines — no hard deadline, just order and intention.\n5. Execute and track. Notes are added along the way, completed items are checked off, statuses are updated. The history is preserved — important both for reflection and for understanding progress.',
        },
      },
    ],
    deps: ['VStorage'],
    github: 'https://github.com/VitaliyAir/vgplanner',
    url: 'https://vgplanner.155-212-168-28.sslip.io'
  },
  {
    tag: { ru: 'Инструмент', en: 'Tool' },
    name: 'VLinks',
    desc: {
      ru: 'Менеджер ссылок со встроенным генератором коротких URL. Каждая ссылка хранится с метаданными, тегами и счётчиком переходов. Короткие ссылки создаются автоматически и работают через редирект. Инструмент задуман как личный архив для быстрого доступа к нужным адресам.',
      en: 'A link manager with a built-in short URL generator. Each link is stored with metadata, tags, and a click counter. Short links are created automatically and work via redirect. Designed as a personal archive for quick access to the addresses you need.',
    },
    stack: ['.NET 10', 'Postgres', 'Minimal API', 'JWT', 'Keycloak'],
    diagram: (lang) => {
      const f1  = lang === 'ru' ? 'Работа'     : 'Work';
      const f2  = lang === 'ru' ? 'Учёба'      : 'Learning';
      const sf1 = lang === 'ru' ? 'Разработка' : 'Dev';
      const ff  = 'Inter,system-ui,sans-serif';
      return (
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 116" style="width:100%;height:auto;display:block">` +
        `<rect x="4"  y="2"  width="6"  height="4" rx="1" fill="var(--accent)" fill-opacity=".28"/>` +
        `<rect x="4"  y="4"  width="13" height="8" rx="1" fill="var(--accent)" fill-opacity=".28"/>` +
        `<text x="21" y="11" fill="var(--accent)" font-family="${ff}" font-size="8.5" font-weight="600">${f1}</text>` +
        `<line x1="10" y1="14" x2="10" y2="62" stroke="var(--border)" stroke-width="1"/>` +
        `<line x1="10" y1="23" x2="18" y2="23" stroke="var(--border)" stroke-width="1"/>` +
        `<rect x="18" y="17" width="6"  height="4" rx="1" fill="var(--accent)" fill-opacity=".2"/>` +
        `<rect x="18" y="19" width="13" height="8" rx="1" fill="var(--accent)" fill-opacity=".2"/>` +
        `<text x="35" y="26" fill="var(--fg-muted)" font-family="${ff}" font-size="8" font-weight="600">${sf1}</text>` +
        `<line x1="25" y1="29" x2="25" y2="50" stroke="var(--border)" stroke-width="1"/>` +
        `<line x1="25" y1="37" x2="33" y2="37" stroke="var(--border)" stroke-width="1"/>` +
        `<text x="37" y="40" fill="var(--fg-muted)" font-family="${ff}" font-size="7.5">↗ github.com/proj</text>` +
        `<rect x="148" y="32" width="32" height="11" rx="3" fill="var(--accent)" fill-opacity=".18"/>` +
        `<text x="164" y="40" text-anchor="middle" fill="var(--accent)" font-family="${ff}" font-size="6" font-weight="600">vlnk/ax</text>` +
        `<line x1="25" y1="50" x2="33" y2="50" stroke="var(--border)" stroke-width="1"/>` +
        `<text x="37" y="53" fill="var(--fg-muted)" font-family="${ff}" font-size="7.5">↗ linear.app/issues</text>` +
        `<line x1="10" y1="62" x2="18" y2="62" stroke="var(--border)" stroke-width="1"/>` +
        `<text x="22" y="65" fill="var(--fg-muted)" font-family="${ff}" font-size="7.5">↗ notion.so/workspace</text>` +
        `<rect x="173" y="57" width="26" height="11" rx="3" fill="var(--border)" fill-opacity=".8"/>` +
        `<text x="186" y="65" text-anchor="middle" fill="var(--fg-muted)" font-family="${ff}" font-size="6">#work</text>` +
        `<rect x="4"  y="76" width="6"  height="4" rx="1" fill="var(--accent)" fill-opacity=".28"/>` +
        `<rect x="4"  y="78" width="13" height="8" rx="1" fill="var(--accent)" fill-opacity=".28"/>` +
        `<text x="21" y="85" fill="var(--accent)" font-family="${ff}" font-size="8.5" font-weight="600">${f2}</text>` +
        `<line x1="10" y1="88" x2="10" y2="108" stroke="var(--border)" stroke-width="1"/>` +
        `<line x1="10" y1="95" x2="18" y2="95" stroke="var(--border)" stroke-width="1"/>` +
        `<text x="22" y="98" fill="var(--fg-muted)" font-family="${ff}" font-size="7.5">↗ youtube.com/watch</text>` +
        `<rect x="165" y="90" width="30" height="11" rx="3" fill="var(--border)" fill-opacity=".8"/>` +
        `<text x="180" y="98" text-anchor="middle" fill="var(--fg-muted)" font-family="${ff}" font-size="6">#video</text>` +
        `<line x1="10" y1="108" x2="18" y2="108" stroke="var(--border)" stroke-width="1"/>` +
        `<text x="22" y="111" fill="var(--fg-muted)" font-family="${ff}" font-size="7.5">↗ coursera.org</text>` +
        `</svg>`
      );
    },
    descSections: [
      {
        title: { ru: 'Предыстория', en: 'Background' },
        body: {
          ru: 'Идея возникла из простого неудобства. Мессенджеры перестали быть удобным местом для хранения полезных ссылок: чтобы сохранить или открыть нужный адрес, приходилось проходить через лишние шаги, а иногда и логиниться под сторонними аккаунтами (Google, Яндекс). Хотелось простого действия: зайти с любого компьютера на сайт, добавить ссылку — и сразу получить к ней доступ.\n\nПри этом важна была семейная составляющая: ссылка должна быть видна всем членам семьи, у неё должно быть понятное описание, и её нужно было как-то структурировать по темам. Дополнительным вдохновением послужил сервис bit.ly — интегрироваться с ним я не стал, так как базовая реализация (создание короткой ссылки и редирект) показалась достаточно простой, чтобы написать её самостоятельно.',
          en: 'The idea came from a simple frustration. Messengers stopped being a convenient place to store useful links: saving or opening a needed address required extra steps, and sometimes logging in through third-party accounts (Google, Yandex). I wanted something simple: open the site from any computer, add a link, and have immediate access to it.\n\nThe family aspect also mattered: a link should be visible to all family members, have a clear description, and be organized by topic. Additional inspiration came from bit.ly — I chose not to integrate with it since the core implementation (creating a short link and redirect) seemed simple enough to write myself.',
        },
      },
      {
        title: { ru: 'Зачем', en: 'Why' },
        body: {
          ru: 'Существующие решения либо перегружены функциями, которые не нужны для личных задач, либо требуют постоянной авторизации и привязки к экосистеме. VLinks решает именно эту проблему: это лёгкий, приватный инструмент без лишних барьеров. Зашёл, добавил, увидел — без лишних телодвижений и с сохранением контроля над своими данными.',
          en: 'Existing solutions are either bloated with features unnecessary for personal use, or require constant authentication and ecosystem lock-in. VLinks solves exactly this: a lightweight, private tool with no unnecessary barriers. Open it, add a link, see it — with no extra steps and full control over your own data.',
        },
      },
      {
        title: { ru: 'Рабочий процесс', en: 'Workflow' },
        body: {
          ru: '1. Создать папку (при необходимости). Если ссылки нужно сгруппировать по темам — сначала создаётся папка или коллекция. Это необязательный шаг.\n2. Добавить ссылку. Указывается оригинальный URL и, при желании, свой короткий код — если оставить поле пустым, система сгенерирует его автоматически.\n3. Заполнить метаданные. К ссылке добавляется заголовок, описание и теги — чтобы в архиве было легко ориентироваться.\n4. Сохранить. Ссылка попадает в личный каталог и становится доступна с любого устройства. При сохранении можно выбрать папку или оставить ссылку в корне.\n5. Просмотреть и перейти. При переходе по короткому URL срабатывает редирект на оригинальный адрес, а счётчик переходов фиксирует активность.',
          en: '1. Create a folder (if needed). If links need to be grouped by topic — create a folder or collection first. This step is optional.\n2. Add a link. Enter the original URL and, optionally, a custom short code — leave the field empty and the system generates one automatically.\n3. Fill in metadata. Add a title, description, and tags so the archive stays easy to navigate and search.\n4. Save. The link lands in your personal catalog and becomes accessible from any device. Choose a folder or leave it in the root.\n5. View and visit. Following the short URL triggers a redirect to the original address, and the click counter records the activity.',
        },
      },
    ],
    github: 'https://github.com/VitaliyAir/vlink',
    url: 'https://vlinks.155-212-168-28.sslip.io'
  },
  {
    tag: { ru: 'Библиотека', en: 'Library' },
    name: 'VLibrary',
    desc: {
      ru: 'Виртуальная библиотека для структурирования личного архива документов и книг. Построена поверх инфраструктуры VStorage. Позволяет импортировать файлы (PDF, DJVU, DOCX) целыми папками или по одному, автоматически распознаёт обложку и метаданные книги, а также вести учёт прочитанного с помощью заметок, тегов, статусов и тематических полок.',
      en: 'A virtual library for organizing your personal archive of documents and books. Built on top of VStorage. Supports importing files (PDF, DJVU, DOCX) by folder or individually, automatically extracts covers and book metadata, and tracks your reading with notes, tags, statuses, and themed shelves.',
    },
    stack: ['.NET 10', 'Postgres', 'React', 'MediatR', 'JWT'],
    diagram: (lang) => {
      const catalog = lang === 'ru' ? 'Каталог'       : 'Catalog';
      const reading = lang === 'ru' ? 'Читальный зал' : 'Reading room';
      const shelves = lang === 'ru' ? 'Полки'         : 'Shelves';
      const notes   = lang === 'ru' ? 'Заметки'       : 'Notes';
      const imp     = lang === 'ru' ? 'Импорт'        : 'Import';
      const dupl    = lang === 'ru' ? 'Дубликаты'     : 'Duplicates';
      const cats    = lang === 'ru' ? '▾ Категории'   : '▾ Categories';
      const allBks  = lang === 'ru' ? 'Все книги'     : 'All books';
      const rdg     = lang === 'ru' ? 'Читаю'         : 'Reading';
      const ff      = 'Inter,system-ui,sans-serif';
      return (
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 106" style="width:100%;height:auto;display:block">` +
        `<rect x="0" y="0" width="74" height="106" rx="5" fill="var(--fg)" fill-opacity=".05"/>` +
        `<text x="8" y="13" fill="var(--accent)" font-family="${ff}" font-size="8.5" font-weight="700">VLibrary</text>` +
        `<rect x="4" y="18" width="66" height="14" rx="4" fill="var(--accent)" fill-opacity=".75"/>` +
        `<text x="37" y="28" text-anchor="middle" fill="#fff" font-family="${ff}" font-size="7.5" font-weight="600">${catalog}</text>` +
        `<text x="10" y="43" fill="var(--fg-muted)" font-family="${ff}" font-size="7">${reading}</text>` +
        `<text x="10" y="55" fill="var(--fg-muted)" font-family="${ff}" font-size="7">${shelves}</text>` +
        `<text x="10" y="67" fill="var(--fg-muted)" font-family="${ff}" font-size="7">${notes}</text>` +
        `<line x1="8" y1="73" x2="66" y2="73" stroke="var(--border)" stroke-width=".8"/>` +
        `<text x="10" y="83" fill="var(--fg-muted)" font-family="${ff}" font-size="7">${imp}</text>` +
        `<text x="10" y="96" fill="var(--fg-muted)" font-family="${ff}" font-size="7">${dupl}</text>` +
        `<text x="82" y="13" fill="var(--fg)" font-family="${ff}" font-size="11" font-weight="700">${catalog}</text>` +
        `<line x1="82" y1="18" x2="216" y2="18" stroke="var(--border)" stroke-width=".8"/>` +
        `<text x="82" y="30" fill="var(--fg-muted)" font-family="${ff}" font-size="7.5">${cats}</text>` +
        `<rect x="82" y="34" width="50" height="13" rx="3" fill="var(--accent)" fill-opacity=".8"/>` +
        `<text x="107" y="43" text-anchor="middle" fill="#fff" font-family="${ff}" font-size="7">${allBks}</text>` +
        `<rect x="82"  y="52" width="40" height="50" rx="4" fill="var(--surface)" stroke="var(--border)" stroke-width="1"/>` +
        `<rect x="126" y="52" width="40" height="50" rx="4" fill="var(--surface)" stroke="var(--border)" stroke-width="1"/>` +
        `<rect x="170" y="52" width="46" height="50" rx="4" fill="var(--surface)" stroke="var(--border)" stroke-width="1"/>` +
        `<rect x="86"  y="56" width="32" height="26" rx="2" fill="var(--accent)" fill-opacity=".12"/>` +
        `<rect x="130" y="56" width="32" height="26" rx="2" fill="var(--accent)" fill-opacity=".18"/>` +
        `<rect x="174" y="56" width="38" height="26" rx="2" fill="var(--accent)" fill-opacity=".1"/>` +
        `<rect x="86"  y="56" width="26" height="9" rx="2" fill="var(--accent)" fill-opacity=".75"/>` +
        `<text x="99" y="63" text-anchor="middle" fill="#fff" font-family="${ff}" font-size="5.5">${rdg}</text>` +
        `<rect x="86"  y="87" width="24" height="4" rx="1" fill="var(--fg-muted)" fill-opacity=".35"/>` +
        `<rect x="86"  y="93" width="16" height="3" rx="1" fill="var(--fg-muted)" fill-opacity=".2"/>` +
        `<rect x="130" y="87" width="26" height="4" rx="1" fill="var(--fg-muted)" fill-opacity=".35"/>` +
        `<rect x="130" y="93" width="18" height="3" rx="1" fill="var(--fg-muted)" fill-opacity=".2"/>` +
        `<rect x="174" y="87" width="30" height="4" rx="1" fill="var(--fg-muted)" fill-opacity=".35"/>` +
        `<rect x="174" y="93" width="20" height="3" rx="1" fill="var(--fg-muted)" fill-opacity=".2"/>` +
        `</svg>`
      );
    },
    descSections: [
      {
        title: { ru: 'Предыстория', en: 'Background' },
        body: {
          ru: 'Документы и книги годами накапливались на разных компьютерах, внешних дисках и флешках. Найти нужную книгу в этом хаосе становилось всё сложнее: часть файлов терялась, часть дублировалась, а о существовании некоторых экземпляров я просто забывал. Хотелось собрать всё в одном месте, но не в виде скучной файловой свалки, а в формате, который помогает ориентироваться и возвращаться к чтению.\n\nПри этом важна была не только сохранность файлов, но и контекст: что это за книга, когда я её начал читать, на какой полке она лежит и какие мысли она вызвала.',
          en: 'Documents and books had been piling up across different computers, external drives, and flash drives for years. Finding the right book in that chaos kept getting harder: some files were lost, some duplicated, and the existence of some I had simply forgotten. I wanted to bring everything together in one place — not as a boring file dump, but in a format that helps you navigate and return to reading.\n\nWhat mattered was not just preserving the files, but the context: what the book is about, when I started reading it, which shelf it belongs on, and what thoughts it sparked.',
        },
      },
      {
        title: { ru: 'Зачем', en: 'Why' },
        body: {
          ru: 'Существующие решения либо заточены под облачные экосистемы (и требуют постоянного подключения), либо слишком сложны для простого домашнего архива. VLibrary решает задачу иначе: это личная библиотека, где акцент сделан на удобном импорте, автоматическом распознавании метаданных и гибкой организации чтения.\n\nОтдельная проблема — «брошенные» книги. Начав одну книгу, легко переключиться на другую, а затем забыть, что первая осталась недочитанной. VLibrary помогает не терять этот контекст: статусы, заметки и полки позволяют вернуться к книге в любой момент и вспомнить, на чём вы остановились и какие идеи она вызвала.',
          en: 'Existing solutions are either tied to cloud ecosystems (requiring a constant connection) or too complex for a simple personal archive. VLibrary takes a different approach: a personal library focused on convenient import, automatic metadata recognition, and flexible reading organization.\n\nAbandoned books are a separate problem. Starting one book and switching to another makes it easy to forget the first was never finished. VLibrary helps preserve that context: statuses, notes, and shelves let you return to any book and recall where you left off and what ideas it sparked.',
        },
      },
      {
        title: { ru: 'Рабочий процесс', en: 'Workflow' },
        body: {
          ru: '1. Импорт. Указывается один файл или папка с документами. Поддерживаются форматы PDF, DJVU, DOCX.\n2. Сканирование и извлечение данных. Для каждого файла система распознаёт обложку (первую страницу) и парсит метаданные: автора, год издания, количество страниц.\n3. Проверка на дубликаты. Каждый импорт может завершиться успехом или уведомлением об ошибке — например, если книга похожа на уже имеющуюся в библиотеке.\n4. Resolve action. При возникновении проблемы можно вручную просмотреть спорный файл и принять решение: подтвердить импорт, заменить запись или пропустить файл.\n5. Сохранение и структурирование. После успешного импорта книга попадает в библиотеку. Если импортировалась папка, структура вложенности сохраняется.\n6. Организация чтения. Для каждой книги доступны полки (тематические группы), статусы и теги, а также заметки — идеи, которые можно зафиксировать в процессе чтения.',
          en: '1. Import. Specify a single file or a folder of documents. Supported formats: PDF, DJVU, DOCX.\n2. Scan and extract. For each file the system extracts the cover (first page) and parses metadata: author, publication year, page count.\n3. Duplicate check. Each import either completes successfully or raises an issue — for example, if a book closely resembles one already in the library.\n4. Resolve action. When a problem arises, review the file manually and decide: confirm the import, replace the existing record, or skip the file.\n5. Save and structure. After a successful import the book is added to the library. If a folder was imported, the folder hierarchy is preserved and can be edited later.\n6. Reading organization. Each book gets shelves (themed groups like "Fiction" or "Evening reads"), statuses and tags to track reading progress, and notes for capturing ideas while reading.',
        },
      },
    ],
    deps: ['VStorage'],
    github: 'https://github.com/VitaliyAir/vlibrary',
    url: ''
  },
  {
    tag: { ru: 'Хранилище', en: 'Storage' },
    name: 'VStorage',
    desc: {
      ru: 'S3-подобный сервис хранения файлов. Метаданные хранятся в Postgres, сами файлы — на файловой системе сервера. Изоляция по пользователям через JWT. Служит общей инфраструктурой для загрузки файлов в других VEco-проектах.',
      en: 'An S3-like file storage service. Metadata lives in Postgres, files on the server filesystem. Per-user isolation via JWT. Serves as the shared file-upload infrastructure for other VEco projects.'
    },
    stack: ['.NET 10', 'Postgres', 'Minimal API', 'JWT', 'Keycloak'],
    apiOnly: true,
    github: 'https://github.com/VitaliyAir/vstorage',
    url: ''
  }
];
