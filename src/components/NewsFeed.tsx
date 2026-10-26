import { Fragment } from 'react';
import { useLang } from '../i18n/LangContext';
import { news } from '../data/news';
import { site } from '../data/site';
import type { Lang } from '../types';

const TgIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="#26A5E4" style={{ flexShrink: 0, verticalAlign: 'middle' }}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.05 9.657c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.48 14.697l-2.95-.924c-.642-.2-.655-.642.136-.953l11.527-4.447c.537-.194 1.006.131.37.875z"/>
  </svg>
);

function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

export default function NewsFeed() {
  const { lang, t } = useLang();

  return (
    <div className="news-feed">
      <p className="sidebar-heading">{t('news_label')}</p>
      {news.map((item, idx) => (
        <Fragment key={item.title.en}>
          {idx > 0 && <hr className="news-divider" />}
          <article>
            <div className="news-meta">{formatDate(item.date ?? new Date(), lang)}</div>
            <h2 className="news-headline">{item.title[lang]}</h2>
            <div className="news-card">
              {item.type === 'quotes' && (
                <div className="quote-block">
                  {item.quotes[lang].map(q => <p key={q} className="quote-line">{q}</p>)}
                </div>
              )}
              {item.type === 'projects' && (
                <>
                  <p className="news-intro">{item.intro[lang]}</p>
                  <ul className="proj-list">
                    {item.projects.map(p => (
                      <li key={p.name}>
                        <span className="proj-name"><em>{p.name}</em></span>
                        <span className="proj-blurb">{p.desc[lang]}</span>
                      </li>
                    ))}
                  </ul>
                  {item.demoRequest && (
                    <div className="news-outro news-demo-row">
                      <span className="tile-demo-label">{t('demo_request')}</span>
                      <a className="tile-link" href={site.contact.url} target="_blank" rel="noopener"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <TgIcon />{site.contact.label}
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </article>
        </Fragment>
      ))}
    </div>
  );
}
