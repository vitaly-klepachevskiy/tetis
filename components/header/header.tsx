'use client';

import Link from 'next/link';
import Image from 'next/image';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <Image src="/logo-light.svg" alt="logo" width={220} height={31} />
        </Link>
        <nav className="navigation">
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

        <div className="contacts">
          <div className="social-media">
            <a href="https://t.me/i_zelenev">
              <Image
                src="/telegram-light.svg"
                alt="telegram"
                width={15}
                height={15}
              />
            </a>
            <a href="https://wa.me/79626306464">
              <Image
                src="/whatsapp-light.svg"
                alt="whatsapp"
                width={15}
                height={15}
              />
            </a>
            <a href="https://www.instagram.com/i_zelenev/" target="_blank">
              <Image
                src="/instagram-light.svg"
                alt="instagram"
                width={15}
                height={15}
              />
            </a>
          </div>
          <a href="tel:+79626306464">+7 (962) 630-64-64</a>
        </div>
      </div>
    </header>
  );
}
