import type { Localized } from '../types';

interface AboutItem {
  label: Localized;
  body:  Localized;
}

export const aboutIntro: Localized = {
  ru: 'Fullstack .NET Developer / Enterprise Developer с 17+ годами опыта.',
  en: 'Fullstack .NET Developer / Enterprise Developer with 17+ years of experience.',
};

export const aboutItems: AboutItem[] = [
  {
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
      ru: 'Английский (C2), Французский (C1).',
      en: 'English (C2), French (C1).',
    },
  },
];
