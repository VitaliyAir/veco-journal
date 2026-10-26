import { useLang } from '../i18n/LangContext';
import type { Lang } from '../types';

const LANGS: Lang[] = ['ru', 'en'];

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {LANGS.map(l => (
        <button
          key={l}
          className={`lang-btn${l === lang ? ' active' : ''}`}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
