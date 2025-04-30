import { Icon } from '../../../app/components/ui/icon';
import './socialMedia.scss';

interface SocialMedias {
  theme: 'light' | 'dark';
  spacing: number;
}

export default function SocialMedia({ theme, spacing }: SocialMedias) {
  return (
    <div className="social-media" style={{ gap: spacing }}>
      <a href="https://t.me/i_zelenev">
        <Icon name="telegram" theme={theme} type="socialMedia" />
      </a>
      <a href="https://wa.me/79626306464">
        <Icon name="whatsapp" theme={theme} type="socialMedia" />
      </a>
      <a href="https://www.instagram.com/i_zelenev/" target="_blank">
        <Icon name="instagram" theme={theme} type="socialMedia" />
      </a>
    </div>
  );
}
