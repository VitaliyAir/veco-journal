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
import type { SidebarLink, TabId } from './types';

const TABS: TabId[] = ['home', 'articles', 'portfolio', 'about'];

const portfolioLinks: SidebarLink[] = portfolio.map(p => ({ name: p.name, url: p.github }));

export default function App() {
  const [tab, setTab] = useState<TabId>('home');

  return (
    <>
      <Header />
      <TabNav tabs={TABS} active={tab} onChange={setTab} />
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
