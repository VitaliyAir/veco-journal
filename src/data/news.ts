import type { NewsItem } from '../types';

// Newest first.
export const news: NewsItem[] = [
  {
    date: new Date('2026-11-05'),
    title: {
      ru: 'Уровни понимания .NET инфраструктуры. Дорожная карта совершенствования',
      en: 'Levels of Understanding the .NET Infrastructure. A Roadmap for Growth',
    },
    type: 'quotes',
    quotes: {
      ru: [
        'Добавил заметку: уровни понимания инфраструктуры .NET и дорожная карта роста — от Junior к Senior.'
      ],
      en: [
        'Added a note on the levels of understanding the .NET infrastructure, with a roadmap from Junior to Senior.'
      ]
    }
  },
  {
    date: new Date('2026-10-29'),
    title: {
      ru: 'Российский ИТ-рынок: срез на основе открытых данных',
      en: 'Russian IT Market: A Snapshot from Open Data',
    },
    type: 'quotes',
    quotes: {
      ru: [
        'Добавил заметку с кратким анализом ИТ-рынка на основе открытых данных.'
      ],
      en: [ 
        'Added a note featuring a brief IT market analysis based on available data.'
      ]
    }
  },
  {
    date: new Date('2026-10-26'),
    title: {
      ru: 'VGoalsPlanner и VLinks доступны для демо',
      en: 'VGoalsPlanner and VLinks are now available for demo'
    },
    type: 'projects',
    intro: {
      ru: 'Два продукта готовы к показу. Демо доступ — по запросу:',
      en: 'Two products are ready to be shown. A demo access is available on request:'
    },
    projects: [
      {
        name: 'VGoalsPlanner',
        desc: {
          ru: 'Планировщик целей: цель → задачи → шаги, с отслеживанием прогресса.',
          en: 'A goals planner: goal → tasks → steps, with progress tracking.'
        }
      },
      {
        name: 'VLinks',
        desc: {
          ru: 'Менеджер ссылок с генератором коротких URL.',
          en: 'A link manager with a short URL generator.'
        }
      }
    ],
    demoRequest: true
  },
  {
    date: new Date('2026-10-22'),
    title: {
      ru: 'Первые "пробы пера" по разработке с LLM (Claude Pro).',
      en: 'First steps in LLM-assisted development (Claude Pro).'
    },
    type: 'projects',
    intro: {
      ru: '1 этап дизайн сущностей, описание UseCases, выбор архитектуры. Затем итерационная имплементация. В итоге за пару недель 3 продукта и 1 кастомный инструмент! Минус потеря контекста, при повышении скорости ревью проходят в режиме компоновки, структуры и тестирования, что приемлемо для MVP проекта',
      en: 'Phase 1: entity design, UseCases mapping, architecture selection. Followed by iterative implementation. As a result, 3 products and 1 custom tool in just a couple of weeks! Downside: context loss. With accelerated speed, code reviews transition into layout, structuring, and testing mode—which is perfectly acceptable for an MVP.'
    },
    projects: [
      {
        name: 'VGoalsPlanner',  
        desc: {
          ru: 'Персональный планировщик целей. Помогает не оставлять начатое и правильно оценивать свои силы. Персональный инструмент для осознанного движения вперёд.',
          en: 'A private goals planner. Goals break down into tasks with step-by-step progress tracking. The aim: a tool for intentional, focused progress.'
        }
      },
      {
        name: 'VLinks',
        desc: {
          ru: 'Менеджер ссылок с генератором коротких URL. Позволяет централизованно хранить, тегировать и быстро находить полезное с разных девайсов.',
          en: 'A link manager with a short URL generator. Store, tag, and quickly find the links you need.'
        }
      },
      {
        name: 'VLibrary',
        desc: {
          ru: 'Виртуальная библиотека — каталог книг с трекером прочитанного. Цель: помнить, что читал, использовать и планировать следующее.',
          en: 'A virtual library — a book catalog with a reading tracker. The goal: remember what you\'ve read use it and plan what\'s next.'
        }
      },
      {
        name: 'VStorage',
        desc: {
          ru: 'S3-подобное файловое хранилище с изоляцией данных по пользователям. Основа для других проектов, которым нужно хранить файлы.',
          en: 'An S3-like file storage service with per-user data isolation. The foundation for other projects that need to store files.'
        }
      }
    ]
  }
];
