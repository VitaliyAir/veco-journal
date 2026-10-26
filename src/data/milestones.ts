import type { Milestone } from '../types';

// In order: first milestone first.
export const milestones: Milestone[] = [
  {
    status: 'done',
    title: {
      ru: 'Проекты, которые годами откладывались',
      en: 'Projects that were put off for years'
    },
    desc: {
      ru: '«Наконец-то реализованы проекты, которые годами откладывались из-за нехватки времени. Сейчас они активно используются и постоянно улучшаются — необходимость в них оказалась реальной.»',
      en: '"Projects that had been shelved for years due to lack of time have finally been built. They are now actively used and continuously improved — the need for them turned out to be real."'
    }
  },
  {
    status: 'done',
    title: {
      ru: 'Продукты на публичном сервере',
      en: 'Products on a public server'
    },
    desc: {
      ru: '«Все разработанные продукты выведены на публичный сервер и доступны. Параллельно протестированы возможности DevOps с использованием Claude Code.»',
      en: '"All developed products have been deployed to a public server and are accessible. DevOps capabilities using Claude Code were tested in parallel."'
    }
  }
];
