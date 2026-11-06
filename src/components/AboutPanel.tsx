import { useLang } from '../i18n/LangContext';
import { aboutIntro, aboutItems, openToOffers } from '../data/about';
import PageHeader from './PageHeader';

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M21.94 4.6 18.9 19.2c-.23 1.02-.84 1.27-1.7.79l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.94.46l.34-4.8 8.72-7.88c.38-.34-.08-.53-.59-.19L6.98 13.1 2.3 11.64c-1.02-.32-1.04-1.02.21-1.51L20.6 3.1c.85-.31 1.59.2 1.34 1.5Z" />
    </svg>
  );
}

export default function AboutPanel() {
  const { lang, t } = useLang();

  return (
    <>
      <PageHeader page="about" />
      <div className="about-content">
        <h3 className="about-subheader">{t('about_subheader')}</h3>
        <p className="about-intro">{aboutIntro[lang]}</p>
        <ul className="about-list">
          {aboutItems.map((item, i) => (
            <li key={i} className="about-item">
              <span className="about-item-label">{item.label[lang]}:</span>
              {' '}{item.body[lang]}
            </li>
          ))}
        </ul>

        <section className="about-open">
          <h3>{openToOffers.title[lang]}</h3>
          <ul>
            {openToOffers.cases.map((text, i) => <li key={i}>{text[lang]}</li>)}
          </ul>
          <div className="contact-actions">
            <a
              className="tg-link"
              href={openToOffers.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
              <span>{openToOffers.contactLabel[lang]}: {openToOffers.telegram.handle}</span>
            </a>
            {openToOffers.profiles.map((profile) => (
              <a
                key={profile.url}
                className="profile-link"
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.label[lang]}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
