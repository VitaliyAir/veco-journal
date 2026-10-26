import { useLang } from '../i18n/LangContext';
import { milestones } from '../data/milestones';

export default function Milestones() {
  const { lang, t } = useLang();

  return (
    <div className="milestones-feed">
      <p className="sidebar-heading">{t('milestones_label')}</p>
      <div className="milestones-timeline">
        {milestones.map((m, idx) => (
          <div key={m.title.en} className="timeline-item">
            <div className="timeline-rail">
              <span className="timeline-dot" />
              {idx < milestones.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="news-card milestone-card">
              <p className="timeline-step-label">{t('step_label')} {idx + 1}</p>
              <h3 className="milestone-card-title">{m.title[lang]}</h3>
              <p className="milestone-card-desc">{m.desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
