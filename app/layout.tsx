import type { Metadata } from 'next';
import './globals.scss';
import Header from '@/components/header/header';

export const metadata: Metadata = {
  title: 'TETIS',
  description: 'TETIS - Изготовление мебели на заказ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
