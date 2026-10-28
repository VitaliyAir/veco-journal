import type { Article } from '../types';

export const articles: Article[] = [
  {
    slug: 'llm-rf-it-market-analysis',
    date: new Date('2026-10-28'),
    tag: { ru: 'Анализ', en: 'Analysis' },
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
          url: '/veco-journal/it-companies.html',
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
