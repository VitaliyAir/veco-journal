import type { ReactNode } from 'react';
import { useLang } from '../i18n/LangContext';
import type { SidebarLink } from '../types';

interface SidebarProps {
  links: SidebarLink[];
  /** 'right' = wider column next to the content (Home). */
  side?: 'left' | 'right';
  /** Extra boxes shown above the links box. */
  children?: ReactNode;
}

export default function Sidebar({ links, side = 'left', children }: SidebarProps) {
  const { t } = useLang();

  return (
    <aside className={`sidebar${side === 'right' ? ' sidebar-right' : ''}`}>
      {children}
      <div className="sidebar-box">
        <p className="sidebar-heading">{t('links_label')}</p>
        <ul className="link-list">
          {links.map(l => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noopener">{l.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
