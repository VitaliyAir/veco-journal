import { useState } from 'react';
import { useLang } from '../i18n/LangContext';
import PageHeader from './PageHeader';
import { articles } from '../data/articles';
import type { Article } from '../types';

function formatDate(date: Date, lang: string) {
  return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

function ArticleReader({ article, onBack }: { article: Article; onBack: () => void }) {
  const { lang } = useLang();
  return (
    <div className="article-reader">
      <button className="article-back" onClick={onBack}>
        ← {lang === 'ru' ? 'Все статьи и заметки' : 'All articles & notes'}
      </button>
      <div className="news-meta">
        <span className="tile-tag">{article.tag[lang]}</span>
        {'  '}
        {formatDate(article.date, lang)}
      </div>
      <h1 className="article-title">{article.title[lang]}</h1>
      <p className="article-lead">{article.lead[lang]}</p>
      {article.sections.map((s, i) => (
        <section key={i} className="article-section">
          {s.heading && <h3>{s.heading[lang]}</h3>}
          {s.paragraphs[lang].map((p, j) => <p key={j}>{p}</p>)}
          {s.list && (
            <ul className="article-links">
              {s.list.map((item, j) => (
                <li key={j}>
                  {item.text[lang]}{' '}
                  <a href={item.link.url} target="_blank" rel="noopener noreferrer">
                    {item.link.text[lang]}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {s.link && (
            <a
              className="article-ext-link"
              href={s.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.link.text[lang]}
            </a>
          )}
        </section>
      ))}
    </div>
  );
}

export default function ArticlesPanel() {
  const { lang } = useLang();
  const [open, setOpenState] = useState<Article | null>(
    () => articles.find(a => `#${a.slug}` === window.location.hash) ?? null,
  );
  const setOpen = (a: Article | null) => {
    history.replaceState(null, '', a ? `#${a.slug}` : window.location.pathname + window.location.search);
    setOpenState(a);
  };

  if (open) return <ArticleReader article={open} onBack={() => setOpen(null)} />;

  return (
    <>
      <PageHeader page="articles" />
      <div className="news-feed">
        {articles.map(a => (
          <article key={a.slug}>
            <div className="news-meta">
              <span className="tile-tag">{a.tag[lang]}</span>
              {'  '}
              {formatDate(a.date, lang)}
            </div>
            <h3
              className="news-headline article-list-title"
              onClick={() => setOpen(a)}
            >
              {a.title[lang]}
            </h3>
            <div className="news-card">
              <p style={{ margin: 0, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
                {a.lead[lang]}
              </p>
              <button className="article-read-btn" onClick={() => setOpen(a)}>
                {a.kind === 'note'
                  ? (lang === 'ru' ? 'Читать заметку' : 'Read note')
                  : (lang === 'ru' ? 'Читать статью' : 'Read article')}
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
