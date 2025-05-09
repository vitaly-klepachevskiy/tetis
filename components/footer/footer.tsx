'use client';

import './footer.scss';
import Navigation from '../navigation/navigation';
import SocialMedia from '../socialMedia/socialMedia';
import Logo from '../logo/logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-left">
            <Navigation theme="dark" />
            <Logo theme="dark" />
          </div>
          <div className="footer-right">
            <SocialMedia theme="dark" spacing={25} />
            <div className="description">
              <span className="meta">
                *Instagram принадлежит компании Meta, признанной экстремистской,
                и запрещен на территории РФ
              </span>
              <a className="policy" href="/files/policy.pdf" download>
                Политика обработки персональных данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
