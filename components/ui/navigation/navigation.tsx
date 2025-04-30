import Link from 'next/link';
import './navigation.scss';

interface Navigation {
  theme: 'light' | 'dark';
}

export default function Navigation({ theme }: Navigation) {
  return (
    <nav className={'navigation' + ' ' + theme}>
      <Link key="portfolio" href="/portfolio">
        ПОРТФОЛИО
      </Link>
      <Link key="stages" href="/stages">
        ЭТАПЫ
      </Link>
      <Link key="about" href="/about">
        О КОМПАНИИ
      </Link>
      <Link key="contacts" href="/contacts">
        КОНТАКТЫ
      </Link>
    </nav>
  );
}
