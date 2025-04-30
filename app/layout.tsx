import type { Metadata } from 'next';
import './globals.scss';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

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
        <Footer />
      </body>
    </html>
  );
}
