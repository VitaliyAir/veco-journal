import type { Localized } from '../types';

interface AboutItem {
  label: Localized;
  body:  Localized;
}

export const aboutIntro: Localized = {
  ru: 'Fullstack .NET Developer / Enterprise Developer с 17+ годами опыта.',
  en: 'Fullstack .NET Developer / Enterprise Developer with 17+ years of experience.',
};

export const aboutItems: AboutItem[] = [  {
    label: { ru: 'Специализация', en: 'Specialization' },
    body: {
      ru: 'Проектирование архитектуры с нуля, разработка корпоративных B2B-систем (нефтегаз, геологоразведка, промышленность), модернизация легаси-кода.',
      en: 'Architecture design from scratch, enterprise B2B systems (oil & gas, geological exploration, manufacturing), legacy code modernization.',
    },
  },
  {
    label: { ru: 'Ключевой стек', en: 'Core stack' },
    body: {
      ru: 'C#, .NET 8/9, ASP.NET Core Web API, ASP.NET MVC, Angular/React, PostgreSQL, MS SQL, EF Core, Docker, Keycloak, RabbitMQ, SignalR, MediatR (CQRS).',
      en: 'C#, .NET 8/9, ASP.NET Core Web API, ASP.NET MVC, Angular/React, PostgreSQL, MS SQL, EF Core, Docker, Keycloak, RabbitMQ, SignalR, MediatR (CQRS).',
    },
  },
  {
    label: { ru: 'Опыт в бизнесе', en: 'Business experience' },
    body: {
      ru: 'Работал как в составе распределённых команд, так и самостоятельно (отвечая за весь бэкенд). Собирал требования у бизнес-заказчиков, проектировал модели данных и API. Опыт международных командировок (Франция, Австрия, Финляндия) и работы в мультикультурных командах.',
      en: 'Worked both in distributed teams and independently (owning the entire backend). Gathered requirements from business stakeholders, designed data models and APIs. International business trips (France, Austria, Finland) and experience in multicultural teams.',
    },
  },
  {
    label: { ru: 'Языки', en: 'Languages' },
    body: {
      ru: 'Английский (B2), Французский (A2).',
      en: 'English (B2), French (A2).',
    },
  },
];

/** Closing block: the author is currently open to work, with a direct contact. */
export const openToOffers: {
  title: Localized;
  cases: Localized[];
  contactLabel: Localized;
  telegram: { handle: string; url: string };
  profiles: { label: Localized; url: string }[];
} = {
  title: { ru: 'Открыт к предложениям', en: 'Open to offers' },
  cases: [
    {
      ru: 'Есть бизнес и нужна консультация или приложение под ваши требования — помогу с оценкой, архитектурой и разработкой.',
      en: 'You have a business and need advice, or an application built to your requirements — I can help with scoping, architecture and delivery.',
    },
    {
      ru: 'Вы ищете Senior-специалиста в IT-компанию на проект с .NET-стеком — сейчас открыт для вакансий. Напишите в Telegram, профили также есть на HH.ru и Хабр Карьере.',
      en: 'You are hiring a senior specialist for a .NET project — I am currently open to offers. Message me on Telegram; my profiles are also on HH.ru and Habr Career.',
    },
  ],
  contactLabel: { ru: 'Написать в Telegram', en: 'Message me on Telegram' },
  telegram: { handle: '@awitalii', url: 'https://t.me/awitalii' },
  profiles: [
    {
      label: { ru: 'Резюме на HH.ru', en: 'Resume on HH.ru' },
      url: 'https://spb.hh.ru/resume/9953303bff0110c8690039ed1f4138566f4c54',
    },
  ],
};
