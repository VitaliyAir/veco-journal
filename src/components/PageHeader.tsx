import { useLang } from '../i18n/LangContext';
import type { PageId } from '../types';

export default function PageHeader({ page }: { page: PageId }) {
  const { t } = useLang();

  return (
    <header className="page-header">
      <h2 className="page-title">{t(`${page}_title`)}</h2>
      {t(`${page}_short`)    && <p className="page-lead">{t(`${page}_short`)}</p>}
      {t(`${page}_detailed`) && <p className="page-desc">{t(`${page}_detailed`)}</p>}
    </header>
  );
}
