import LangToggle from './LangToggle';

export default function Header() {
  return (
    <header className="site-header">
      <h1 className="site-title">VEco<em>·</em>Journal</h1>
      <LangToggle />
    </header>
  );
}
