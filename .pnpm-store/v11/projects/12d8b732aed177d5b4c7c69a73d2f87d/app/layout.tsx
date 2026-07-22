import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Victor Tonu — Web & Game Projects',
  description:
    'A small selection of web work, game projects, and personal experiments by Victor Tonu.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
