import '/public/styles/reset.scss';
import '/public/styles/globals.scss'

import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  )
}
