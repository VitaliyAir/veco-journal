import { useLang } from '../i18n/LangContext';
import PageHeader from './PageHeader';

export default function ArticlesPanel() {
  const { t } = useLang();

  return (
    <>
      <PageHeader page="articles" />
      <div className="empty-state">{t('articles_empty')}</div>
    </>
  );
}
