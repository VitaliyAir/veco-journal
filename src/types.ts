export type Lang = 'ru' | 'en';

/** A value given in every supported language. */
export type Localized<T = string> = Record<Lang, T>;

export type TabId = 'home' | 'articles' | 'portfolio' | 'about';

/** Tabs that have a page heading + short/detailed description. */
export type PageId = Exclude<TabId, 'home'>;

interface NewsBase {
  /** null = shown as today's date */
  date: Date | null;
  title: Localized;
}

export interface QuotesNews extends NewsBase {
  type: 'quotes';
  quotes: Localized<string[]>;
}

export interface ProjectsNews extends NewsBase {
  type: 'projects';
  intro: Localized;
  projects: { name: string; desc: Localized }[];
  /** Show "Request a demo: @contact" under the list. */
  demoRequest?: boolean;
}

export type NewsItem = QuotesNews | ProjectsNews;

export interface DescSection {
  title: Localized;
  body: Localized;
}

export interface PortfolioItem {
  tag: Localized;
  name: string;
  desc: Localized;
  stack: string[];
  github: string;
  url: string;
  diagram?: (lang: Lang) => string;
  descSections?: DescSection[];
  deps?: string[];
  apiOnly?: boolean;
}

export interface SidebarLink {
  name: string;
  url: string;
}

export type MilestoneStatus = 'planned' | 'in_progress' | 'done';

export interface Milestone {
  status: MilestoneStatus;
  title: Localized;
  desc: Localized;
}

export interface ArticleSection {
  heading?: Localized;
  paragraphs?: Localized<string[]>;
  list?: { text: Localized; link: { text: Localized; url: string } }[];
  /** Term/description pairs, e.g. the maturity criteria. */
  definitions?: { term: Localized; text: Localized }[];
  /** `url` is localized: an English reader may need a different document than a Russian one. */
  link?: { text: Localized; url: Localized };
  /** Illustration placed inside the article. */
  image?: { src: string; caption: Localized };
}

export interface Article {
  slug: string;
  kind: 'article' | 'note';
  date: Date;
  tag: Localized;
  title: Localized;
  lead: Localized;
  sections: ArticleSection[];
}
