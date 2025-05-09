import Image from 'next/image';
import Link from 'next/link';

interface Logo {
  theme: 'light' | 'dark';
}

export default function Logo({ theme }: Logo) {
  return (
    <Link href="/" className="logo">
      <Image
        src={`/logo/logo-${theme}.svg`}
        alt="logo"
        className="logo"
        width={100}
        height={100}
      />
    </Link>
  );
}
