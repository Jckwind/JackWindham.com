import Head from 'next/head';
import Nametag from '@/components/nametag';
import Typewriter from '@/components/typewriter';
import './css/index.css'



export default function Home() {

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        <meta name="theme-color" key="light" media="(prefers-color-scheme: light)" content="#F2ECBE" />
        <meta name="theme-color" key="dark" media="(prefers-color-scheme: dark)" content="#000000" />
      </Head>
      <Typewriter></Typewriter>
      <div className="nametagHolder">
        <Nametag></Nametag>
      </div>
    </>
  )

}


