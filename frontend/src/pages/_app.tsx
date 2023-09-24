import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import "@/app/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Rubik } from 'next/font/google'
const rubik = Rubik({
  weight: "variable",
  style: ["italic", "normal"],
  display: "swap",
  subsets: ["latin"],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={rubik.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}