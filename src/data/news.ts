import type { NewsItem } from '../types';

// Newest first.
export const news: NewsItem[] = [
  {
    date: new Date('2026-10-26'),
    title: {
      ru: 'VGoalsPlanner и VLinks доступны для демо',
      en: 'VGoalsPlanner and VLinks are now available for demo'
    },
    type: 'projects',
    intro: {
      ru: 'Два продукта готовы к показу. Демо — по запросу:',
      en: 'Two products are ready to be shown. A demo is available on request:'
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
      ru: 'За пару недель — четыре продукта',
      en: 'Four products in a couple of weeks'
    },
    type: 'projects',
    intro: {
      ru: 'За несколько недель удалось собрать и запустить четыре личных проекта:',
      en: 'Over the past few weeks I managed to build and ship four personal projects:'
    },
    projects: [
      {
        name: 'VGoalsPlanner',
        desc: {
          ru: 'Приватный планировщик целей. Цели разбиваются на задачи, прогресс отслеживается пошагово. Цель — инструмент для осознанного движения вперёд.',
          en: 'A private goals planner. Goals break down into tasks with step-by-step progress tracking. The aim: a tool for intentional, focused progress.'
        }
      },
      {
        name: 'VLinks',
        desc: {
          ru: 'Менеджер ссылок с генератором коротких URL. Позволяет хранить, тегировать и быстро находить нужные адреса.',
          en: 'A link manager with a short URL generator. Store, tag, and quickly find the links you need.'
        }
      },
      {
        name: 'VLibrary',
        desc: {
          ru: 'Виртуальная библиотека — каталог книг с трекером прочитанного. Цель: помнить, что читал, и планировать следующее.',
          en: 'A virtual library — a book catalog with a reading tracker. The goal: remember what you\'ve read and plan what\'s next.'
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
