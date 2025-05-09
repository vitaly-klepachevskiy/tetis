'use client';

import './header.scss';
import SocialMedia from '../socialMedia/socialMedia';
import Navigation from '../navigation/navigation';
import Logo from '../logo/logo';

export default function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Logo theme="light" />
          <Navigation theme="light" />
          <div className="contacts">
            <SocialMedia theme="light" spacing={15} />
            <a href="tel:+79626306464">+7 (962) 630-64-64</a>
          </div>
        </div>
      </div>
    </header>
  );
}
