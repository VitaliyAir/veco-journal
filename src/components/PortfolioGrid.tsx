import { useState } from 'react';
import { useLang } from '../i18n/LangContext';
import { portfolio } from '../data/portfolio';
import { site } from '../data/site';
import type { DescSection, Lang } from '../types';
import PageHeader from './PageHeader';

const TgIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="#26A5E4" style={{ flexShrink: 0, verticalAlign: 'middle' }}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.05 9.657c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.48 14.697l-2.95-.924c-.642-.2-.655-.642.136-.953l11.527-4.447c.537-.194 1.006.131.37.875z"/>
  </svg>
);

function TileAccordion({ desc, sections, lang, label }: {
  desc: string; sections?: DescSection[]; lang: Lang; label: string;
}) {
  const [open, setOpen] = useState(false);
  const hasMore = !!sections?.length;
  return (
    <div className="tile-accordion">
      <button className="accordion-btn"
        onClick={hasMore ? () => setOpen(o => !o) : undefined}
        style={{ cursor: hasMore ? 'pointer' : 'default' }}>
        <span>{label}</span>
        {hasMore && (
          <span style={{
            display: 'inline-block', fontSize: '.65rem', opacity: .7,
            transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none',
          }}>▼</span>
        )}
      </button>
      <p className="tile-desc">{desc}</p>
      {open && sections && (
        <div className="accordion-body">
          {sections.map((sec, i) => (
            <div key={i} className="desc-section">
              <p className="desc-section-title">{sec.title[lang]}</p>
              <p className="desc-section-body">{sec.body[lang]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PortfolioGrid() {
  const { lang, t } = useLang();

  return (
    <>
      <PageHeader page="portfolio" />
      <div className="portfolio-grid">
        {portfolio.map(p => (
          <div key={p.name} className="tile">
            <span className="tile-tag">{p.tag[lang]}</span>
            <h3 className="tile-name">{p.name}</h3>
            {p.diagram && (
              <div className="tile-diagram" dangerouslySetInnerHTML={{ __html: p.diagram(lang) }} />
            )}
            <TileAccordion desc={p.desc[lang]} sections={p.descSections} lang={lang} label={t('accordion_label')} />
            <div className="tile-stack">
              <span className="stack-label">{t('stack_label')}</span>
              {p.stack.map(s => <span key={s} className="badge">{s}</span>)}
            </div>
            {p.deps?.length && (
              <div className="tile-deps">
                <span className="tile-deps-label">{t('depends_on')}:</span>
                {p.deps.map(d => <span key={d} className="deps-badge">{d}</span>)}
              </div>
            )}
            <div className="tile-footer">
              <a className="tile-link" href={p.github} target="_blank" rel="noopener">{t('github_label')}</a>
              {p.apiOnly
                ? <span className="tile-not-hosted">{t('api_only')}</span>
                : <>
                    {p.url
                      ? <a className="tile-link" href={p.url} target="_blank" rel="noopener">{t('website_label')}</a>
                      : <span className="tile-not-hosted">{t('not_hosted')}</span>
                    }
                    <span className="tile-website-row">
                      <span className="tile-demo-sep">·</span>
                      <span className="tile-demo-label">{t('demo_request')}</span>
                      <a className="tile-link" href={site.contact.url} target="_blank" rel="noopener"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <TgIcon />{site.contact.label}
                      </a>
                    </span>
                  </>
              }
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
