import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import Head from './head';
import { siteMetadata } from '@/data/metadata';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  creator: siteMetadata.creator,
  // When the link is shared on internet this is showned
  // openGraph: {
  //   title: siteMetadata.title,
  //   description: siteMetadata.description,
  //   url: './',
  //   images: [siteMetadata.myImgUrl],
  //   locale: 'en_US',
  //   type: 'website',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head />
      <body className={inter.className}>
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto] p-3">
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
