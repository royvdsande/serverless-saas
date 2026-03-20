import type { Metadata } from 'next';
import { PageLoader } from '@/components/site/page-loader';
import './globals.css';

export const metadata: Metadata = {
  title: 'FitFlow',
  description: 'Modern monochrome SaaS frontend mockups built with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
