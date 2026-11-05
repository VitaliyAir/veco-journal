import type { Article } from '../types';

export const articles: Article[] = [
  {
      slug: '.NET learning roadmap',
      kind: 'note',
      date: new Date('2026-11-05'),
      tag: { ru: 'Заметка', en: 'Note' },
      title: {
        ru: 'Уровни понимания .NET инфраструктуры. Дорожная карта совершенствования',
        en: 'Levels of Understanding the .NET Infrastructure. A Roadmap for Growth',
      },
      lead: {
        ru: 'Чек-лист из 17 разделов и 204 пунктов с разбором грейдов Junior / Middle / Senior.\nВнутри: \n0. Платформа и инструменты · 1. Язык C# · 1.4. Параллелизм и async · 2. Архитектура и паттерны · 3. ASP.NET Core и API ·\n4. Базы данных и ORM · 5. Распределённые системы и messaging · 6. Тестирование · 7. Кэширование · 8. Наблюдаемость ·\n9. Контейнеры и Kubernetes · 10. Облако, устойчивость и HighLoad · 11. AI в .NET · 12. Client-Side (опционально) ·\n13. Фоновые задачи · 14. Утилиты (опционально) · 15. Git, сборка и CI/CD.',
        en: 'A 17-section, 204-item checklist with the Junior / Middle / Senior breakdown.\nInside: 0. Platform and tooling · 1. C# language · 1.4. Concurrency and async · 2. Architecture and patterns · 3. ASP.NET Core and API ·\n4. Databases and ORM · 5. Distributed systems and messaging · 6. Testing · 7. Caching · 8. Observability ·\n9. Containers and Kubernetes · 10. Cloud, resilience and HighLoad · 11. AI in .NET · 12. Client-Side (optional) ·\n13. Background tasks · 14. Utilities (optional) · 15. Git, build and CI/CD.',
      },
      sections: [
        {
          paragraphs: {
            ru: [
              'Структура выросла из открытого проекта [DotNet-Developer-Roadmap](https://github.com/milanm/DotNet-Developer-Roadmap). Пункты переразмечены по уровням: \n(J) — база, без которой не начать работать; (M) — то, что нужно, чтобы самостоятельно вести фичу; (S) — внутренности, компромиссы и ответственность за систему.',
            ],
            en: [
              'The structure grew out of the open-source project [DotNet-Developer-Roadmap](https://github.com/milanm/DotNet-Developer-Roadmap). Items are now graded by level: \n(J) — the baseline you cannot work without; (M) — what it takes to own a feature end to end; (S) — internals, trade-offs and responsibility for the system.',
            ],
          },
        },
        {
          heading: { ru: 'Как пользоваться', en: 'How to use it' },
          paragraphs: {
            ru: [
              'Внутри каждой секции пункты идут от базы к глубине: сначала (J), затем (M), затем (S). Можно читать сверху вниз как маршрут, а можно фильтровать по уровню — например, готовиться только к middle-собеседованию и не тратить время на разбор фаз GC.',
              'Каждый пункт дополнительно оценивается по четырём отметкам: глубокое понимание с опытом → знаю уверенно → знаю теоретически → слышал. Отметки сохраняются в браузере (localStorage) и никуда не отправляются; счётчик — в шапке страницы.',
            ],
            en: [
              'Every item is graded on one of four levels: deep understanding backed by experience → confident in practice → theoretical knowledge → heard of it, but unclear why it matters.',
              'Ticks are stored in the browser (localStorage) and are never sent anywhere; the progress counter sits in the page header.',
            ],
          },
        },
        {
          paragraphs: {
            ru: ['Полный чек-лист с отметками — на отдельной странице:'],
            en: ['The full checklist with tickable boxes opens on its own page:'],
          },
          link: {
            text: { ru: 'Открыть чек-лист →', en: 'Open the checklist →' },
            url: {
              ru: 'roadmaps/dotnet-roadmap.ru.html',
              en: 'roadmaps/dotnet-roadmap.en.html',
            },
          },
        },
        {
          image: {
            src: 'images/grade-focus.png',
            caption: {
              ru: 'Синтаксис и выполнение кода → фича и тесты → архитектура и инфраструктура: как смещается фокус внимания от Junior к Senior.',
              en: 'Syntax and code execution → feature engineering and tests → architecture and infrastructure: how focus shifts from Junior to Senior.',
            },
          },
        },
        {
          heading: { ru: 'Что отличает Middle от Junior', en: 'What separates Middle from Junior' },
          paragraphs: {
            ru: [
              'Разница не в количестве выученных флагов, а в том, как инженер ведёт себя с задачей, кодом и обратной связью.',
            ],
            en: [
              'The gap is not about how many flags you have memorised, but about how you behave with a task, with code and with feedback.',
            ],
          },
          definitions: [
            {
              term: { ru: 'Ошибки и блокировки', en: 'Errors and blockers' },
              text: {
                ru: 'Junior, упёршись в непонятную ошибку, перебирает строки наугад или сразу зовёт старшего. Middle умеет отлаживать: читает бэктрейс, изолирует проблему, ищет первопричину, а не готовый ответ, и приходит с формулировкой «проверил А и Б, локализовал здесь, вижу два пути — какой выбираем?».',
                en: 'A junior, stuck on an unfamiliar error, changes lines at random or calls a senior right away. A middle knows how to debug: reads the stack trace, isolates the problem, searches for the root cause rather than a ready-made answer — and arrives with "I checked A and B, narrowed it down to here, I see two options, which one do we take?"',
              },
            },
            {
              term: { ru: 'Границы видимости кода', en: 'Scope of the code' },
              text: {
                ru: 'Junior думает в рамках функции: «чтобы работало у меня». Middle мыслит фичей и её интеграцией: обрабатывает пустые данные и обрывы сети, пишет тесты, проверяет граничные случаи — его код готов к деплою, а не «кажется, работает».',
                en: 'A junior thinks inside the function: "make it work on my machine". A middle thinks in terms of a shipped feature: handles empty payloads and dropped connections, writes tests, checks edge cases — the code is ready to deploy, not just "seems to work".',
              },
            },
            {
              term: { ru: 'Code Review', en: 'Code review' },
              text: {
                ru: 'Junior воспринимает замечания как оценку себя: либо расстраивается, либо правит, не понимая зачем, лишь бы влить пул-реквест. Middle видит в ревью этап контроля качества: спокойно аргументирует или признаёт ошибку, а сам ревьюит коллег, замечая не опечатки, а логические нестыковки.',
                en: 'A junior takes comments personally — either gets upset or applies them without understanding why, just to merge. A middle treats review as quality control: argues calmly or admits the mistake, and reviews others\' code himself, spotting logic gaps rather than typos.',
              },
            },
            {
              term: { ru: 'Оценка сроков', en: 'Estimation' },
              text: {
                ru: 'Junior считает только время на написание кода и потому обещает «пару часов». Middle декомпозирует задачу и закладывает тесты, миграции, сборку и риски — если он назвал срок, задача с высокой вероятностью будет готова вовремя.',
                en: 'A junior counts only the typing time and therefore promises "a couple of hours". A middle breaks the task down and budgets for tests, migrations, build and risks — when a middle gives a date, the work most likely lands on time.',
              },
            },
            {
              term: { ru: 'Инструменты и стандарты', en: 'Tools and conventions' },
              text: {
                ru: 'Junior копирует куски со StackOverflow и из ответов нейросетей, не понимая, как они работают, и с трудом следует стайлгайду. Middle осознанно использует принятые в команде библиотеки и паттерны, понимает, почему в проекте пишут именно так, и его код не выделяется на фоне кодовой базы.',
                en: 'A junior copies snippets from StackOverflow and AI answers without understanding them, and struggles to follow the style guide. A middle deliberately uses the libraries and patterns the team has chosen, understands why the project is written that way, and their code blends into the codebase.',
              },
            },
          ],
        },
        {
          heading: { ru: 'Что отличает Senior от Middle', en: 'What separates Senior from Middle' },
          paragraphs: {
            ru: [
              'Дальше зрелость оценивают не по знанию флагов компилятора, а по мета-навыкам: чем инженер платит за решение и что остаётся после него в команде.',
            ],
            en: [
              'Beyond that, maturity is judged not by compiler flags but by meta-skills: what a decision costs and what it leaves behind in the team.',
            ],
          },
          definitions: [
            {
              term: { ru: 'Компромиссы вместо «правильно/неправильно»', en: 'Trade-offs instead of right and wrong' },
              text: {
                ru: 'Middle мыслит категориями «хороший паттерн / плохой антипаттерн». Senior спрашивает, какую цену мы за это заплатим: за Kafka — поддержкой и инфраструктурой, за Vertical Slice — когнитивной нагрузкой на команду.',
                en: 'A middle thinks in terms of good patterns and bad anti-patterns. A senior asks what the choice costs: Kafka costs operational overhead, Vertical Slices cost the team\'s cognitive load.',
              },
            },
            {
              term: { ru: 'Бизнес-задача, а не код-фокус', en: 'Business outcome, not code golf' },
              text: {
                ru: 'Senior не станет внедрять микросервисы или выжимать микросекунды через Span<T> там, где за неделю нужен простой CRUD для проверки гипотезы. Сложность решения соизмеряется с ценностью и бюджетом.',
                en: 'A senior will not introduce microservices or squeeze microseconds through Span<T> where the business needs a plain CRUD feature shipped in a week to test a hypothesis. Complexity is weighed against value and budget.',
              },
            },
            {
              term: { ru: 'Аргументированный выбор инструментов', en: 'Justified tooling choices' },
              text: {
                ru: 'Предлагая Keycloak вместо самописной авторизации, Senior объясняет почему: готовые протоколы, экономия человеко-часов на безопасности, готовая поддержка. Инструмент выбирается под задачу, а не потому что модно.',
                en: 'Proposing Keycloak instead of hand-rolled auth, a senior explains the reasoning: standard protocols out of the box, person-hours saved on security, support available. Tools are picked for the problem, not for the hype.',
              },
            },
            {
              term: { ru: 'Неопределённость и bus-фактор', en: 'Ambiguity and the bus factor' },
              text: {
                ru: 'Senior декомпозирует задачу даже при размытых требованиях и пишет код так, чтобы его могли поддерживать другие: документирует архитектурные решения, менторит, следит, чтобы знания не замыкались на одном человеке.',
                en: 'A senior decomposes work even when requirements are vague, and writes code others can maintain: records architectural decisions, mentors, and keeps knowledge from concentrating in one person.',
              },
            },
            {
              term: { ru: 'Быстрый набор технического контекста', en: 'Picking up technical context fast' },
              text: {
                ru: 'Если завтра нужно оптимизировать HighLoad-сервис, где узкое место в рантайме, Senior за пару вечеров поднимет профилировщик, разберётся в LOH и устранит причину — за счёт фундаментальной базы.',
                en: 'If tomorrow a high-load service turns out to be bottlenecked in the runtime, a senior spins up a profiler, digs into the LOH and fixes the cause within a couple of evenings — because the fundamentals are already there.',
              },
            },
          ],
        },
      ],
  },
  {
    slug: 'llm-rf-it-market-analysis',
    kind: 'note',
    date: new Date('2026-10-28'),
    tag: { ru: 'Заметка', en: 'Note' },
    title: {
      ru: 'Российский ИТ-рынок: срез на основе открытых данных',
      en: 'Russian IT Market: A Snapshot from Open Data',
    },
    lead: {
      ru: 'Цель: понять, кто присутствует на ИТ-рынке России.',
      en: 'Goal: understand who is present on the Russian IT market.',
    },
    sections: [
      {
        paragraphs: {
          ru: [
            'Инструменты и метод: Claude AI (claude-sonnet-4-5) с инструментом веб-поиска. Данные собраны из открытых источников — сайтов компаний, страниц вакансий и публичных профилей.',
          ],
          en: [
            'Tools and method: Claude AI (claude-sonnet-4-5) with web search. Data was collected from open sources — company websites, job pages and public profiles.',
          ],
        },
      },
      {
        paragraphs: {
          ru: ['Срез компаний на 28.10.2026:'],
          en: ['Company snapshot as of 28.10.2026:'],
        },
        link: {
          text: { ru: 'Список компаний с фильтрами →', en: 'Company list with filters →' },
          url: {
            ru: '/veco-journal/it-companies.html',
            en: '/veco-journal/it-companies.html',
          },
        },
      },
      {
        heading: { ru: 'О характере выборки', en: 'About the sample' },
        paragraphs: {
          ru: [
            'Это частичная выборка. Она не претендует на полноту и достоверность и не может использоваться как источник для коммерческих целей — материал создавался не в профессиональных целях, а как ориентир для соискателей и специалистов, которые хотят понять расстановку игроков на рынке.',
          ],
          en: [
            'This is a partial sample. It makes no claim to completeness or accuracy and must not be used as a source for commercial purposes — it was made not for professional use, but as a guide for job seekers and specialists who want to understand who the market players are.',
          ],
        },
      },
      {
        heading: { ru: 'Где смотреть профессиональные данные', en: 'Where to find professional data' },
        paragraphs: {
          ru: ['Для задач, где нужна точность и полнота, лучше опираться на авторитетные источники:'],
          en: ['For tasks that require accuracy and completeness, rely on authoritative sources:'],
        },
        list: [
          {
            text: {
              ru: 'CNews500 — рейтинг крупнейших ИТ-компаний России:',
              en: "CNews500 — ranking of Russia's largest IT companies:",
            },
            link: {
              text: { ru: 'ссылка', en: 'link' },
              url: 'https://www.cnews.ru/anketa/rejting_cnews500_anketa_dlya',
            },
          },
          {
            text: {
              ru: 'TAdviser500 — ранкинг крупнейших ИТ-компаний в России:',
              en: 'TAdviser500 — ranking of the largest IT companies in Russia:',
            },
            link: {
              text: { ru: 'ссылка', en: 'link' },
              url: 'https://www.tadviser.ru/index.php/%D0%A1%D1%82%D0%B0%D1%82%D1%8C%D1%8F:%D0%A0%D0%B0%D0%BD%D0%BA%D0%B8%D0%BD%D0%B3_TAdviser500:_%D0%9A%D1%80%D1%83%D0%BF%D0%BD%D0%B5%D0%B9%D1%88%D0%B8%D0%B5_%D0%98%D0%A2-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8_%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_2025',
            },
          },
          {
            text: {
              ru: 'HighTime — отдельно стоит отметить за качество подачи и контент:',
              en: 'HighTime — worth a special mention for the quality of presentation and content:',
            },
            link: {
              text: { ru: 'hightime.media', en: 'hightime.media' },
              url: 'https://hightime.media/',
            },
          },
        ],
      },
    ],
  },
];
