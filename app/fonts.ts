// app/fonts.ts
import { Inter, Space_Grotesk, Syne } from 'next/font/google';

// Main body font
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Heading font
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// Special display font for hero sections
export const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});