import '/public/styles/reset.scss';
import '/public/styles/globals.scss';
import Head from './head';

import { Montserrat } from '@next/font/google';

import { siteConfig } from '../config/site';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'NextJS',
    'gsap',
    'portfolio',
    'Gaetan Santucci',
    'developer',
    'javascript',
    'react',
  ],
  authors: [
    {
      name: 'Gaetan Santucci',
      url: 'https://gaetansantucci.com',
    },
  ],
  creator: ' VirtualGS',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <Head />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
