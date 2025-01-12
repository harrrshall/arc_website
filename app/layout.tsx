
import { inter, spaceGrotesk, syne } from './fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable}`}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}