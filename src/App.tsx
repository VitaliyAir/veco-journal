import { useState } from 'react';
import Header from './components/Header';
import TabNav from './components/TabNav';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';
import ArticlesPanel from './components/ArticlesPanel';
import PortfolioGrid from './components/PortfolioGrid';
import AboutPanel from './components/AboutPanel';
import Milestones from './components/Milestones';
import { portfolio } from './data/portfolio';
import { articles } from './data/articles';
import type { SidebarLink, TabId } from './types';

const TABS: TabId[] = ['home', 'articles', 'portfolio', 'about'];

const portfolioLinks: SidebarLink[] = portfolio.map(p => ({ name: p.name, url: p.github }));

export default function App() {
  const [tab, setTab] = useState<TabId>(() =>
    articles.some(a => `#${a.slug}` === window.location.hash) ? 'articles' : 'home');

  const changeTab = (t: TabId) => {
    if (t !== 'articles' && window.location.hash)
      history.replaceState(null, '', window.location.pathname + window.location.search);
    setTab(t);
  };

  return (
    <>
      <Header />
      <TabNav tabs={TABS} active={tab} onChange={changeTab} />
      <div className="tab-panel active" id={`panel-${tab}`} role="tabpanel">
        {tab === 'home' ? (
          <div className="home-grid">
            <main className="home-news">
              <NewsFeed />
            </main>
            <aside className="home-achievements">
              <Milestones />
            </aside>
          </div>
        ) : (
          <>
            {tab === 'portfolio' && <Sidebar links={portfolioLinks} />}
            <main className="content">
              {tab === 'articles'  && <ArticlesPanel />}
              {tab === 'portfolio' && <PortfolioGrid />}
              {tab === 'about'     && <AboutPanel />}
            </main>
          </>
        )}
      </div>
    </>
  );
}
