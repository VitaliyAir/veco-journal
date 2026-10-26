import { useLang } from '../i18n/LangContext';
import { aboutIntro, aboutItems } from '../data/about';
import PageHeader from './PageHeader';

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
      </div>
    </>
  );
}
