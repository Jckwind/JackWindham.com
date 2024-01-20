import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '@/app/globals.css';

import { Rubik } from 'next/font/google';
const rubik = Rubik({
  weight: 'variable',
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={rubik.className}>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
        <Analytics />
      </div>
    </ThemeProvider>
  );
}
