import { useState, type ReactNode } from 'react';
import { useLang } from '../i18n/LangContext';
import PageHeader from './PageHeader';
import { articles } from '../data/articles';
import type { Article, ArticleEmbed, Lang } from '../types';

function formatDate(date: Date, lang: string) {
  return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

/** Turns "[label](https://…)" inside plain paragraphs into real links. */
const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

function withLinks(text: string) {
  const parts: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer">
        {match[1]}
      </a>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Static SVG figure, optionally followed by a call-to-action button. */
function ObjectEmbed({ object, lang }: { object: ArticleEmbed; lang: Lang }) {
  return (
    <div
      className={
        object.link ? 'article-embed-block article-embed-block--cta' : 'article-embed-block'
      }
    >
      <figure className="article-frame">
        <object
          className="article-embed"
          type="image/svg+xml"
          data={object.src}
          width="100%"
          height={object.height ?? 600}
          aria-label={object.title[lang]}
        >
          {object.title[lang]}
        </object>
        <figcaption>{object.title[lang]}</figcaption>
      </figure>
      {object.link && <EmbedLink link={object.link} lang={lang} />}
    </div>
  );
}

/** A section `object` is either a single illustration or a side-by-side list. */
function asEmbeds(object: ArticleEmbed | ArticleEmbed[] | undefined): ArticleEmbed[] {
  if (!object) return [];
  return Array.isArray(object) ? object : [object];
}

function EmbedLink({ link, lang }: { link: NonNullable<ArticleEmbed['link']>; lang: Lang }) {
  return (
    <a
      className="article-ext-link"
      href={link.url[lang]}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.text[lang]}
    </a>
  );
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
      {article.sections.map((s, i) => {
        const embeds = asEmbeds(s.object);
        const body = (
          <>
            {s.paragraphs && s.paragraphs[lang].map((p, j) => <p key={j}>{withLinks(p)}</p>)}
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
            {s.image && (
              <figure className="article-figure">
                <img src={s.image.src} alt={s.image.caption[lang]} loading="lazy" />
                <figcaption>{s.image.caption[lang]}</figcaption>
              </figure>
            )}
            {!s.split && embeds.length === 1 && <ObjectEmbed object={embeds[0]} lang={lang} />}
            {!s.split && embeds.length > 1 && (
              <div className="article-pair">
                {embeds.map((e, k) => (
                  <div className="article-pair-cell" key={k}>
                    <ObjectEmbed object={e} lang={lang} />
                  </div>
                ))}
              </div>
            )}
            {s.definitions && (
              <dl className="article-defs">
                {s.definitions.map((d, j) => (
                  <div className="article-def" key={j}>
                    <dt>{d.term[lang]}</dt>
                    <dd>{withLinks(d.text[lang])}</dd>
                  </div>
                ))}
              </dl>
            )}
            {s.link && (
              <a
                className="article-ext-link"
                href={s.link.url[lang]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.link.text[lang]}
              </a>
            )}
          </>
        );

        if (s.split && embeds.length) {
          return (
            <section key={i} className="article-section article-split">
              <div className="article-split-media">
                {embeds.map((e, k) => (
                  <ObjectEmbed key={k} object={e} lang={lang} />
                ))}
              </div>
              <div className="article-split-body">
                {s.heading && <h3>{s.heading[lang]}</h3>}
                {body}
              </div>
            </section>
          );
        }

        return (
          <section
            key={i}
            className={s.centered ? 'article-section article-section--centered' : 'article-section'}
          >
            {s.heading && <h3>{s.heading[lang]}</h3>}
            {body}
          </section>
        );
      })}
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
                {a.lead[lang].split('\n')[0]}
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
