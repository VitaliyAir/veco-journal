import { useLang } from '../i18n/LangContext';
import type { TabId } from '../types';

interface TabNavProps {
  tabs: TabId[];
  active: TabId;
  onChange: (tab: TabId) => void;
}

export default function TabNav({ tabs, active, onChange }: TabNavProps) {
  const { t } = useLang();

  return (
    <nav className="tab-nav" role="tablist">
      {tabs.map(id => (
        <button
          key={id}
          className={`tab-btn${id === active ? ' active' : ''}`}
          role="tab"
          aria-selected={id === active}
          onClick={() => onChange(id)}
        >
          {t(`tab_${id}`)}
        </button>
      ))}
    </nav>
  );
}
