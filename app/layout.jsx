import '/public/styles/reset.scss';
import '/public/styles/globals.scss'
import Head from './head';

import { Montserrat } from '@next/font/google';
import localFont from '@next/font/local';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
