import Head from 'next/head';
import Nametag from '@/components/nametag';
import Image from 'next/image';
import Typewriter from '@/components/typewriter';
import './css/index.css'



export default function Home() {

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        <meta name="theme-color" key="light" media="(prefers-color-scheme: light)" content="#E2C799" />
        <meta name="theme-color" key="dark" media="(prefers-color-scheme: dark)" content="#222831" />
      </Head>
      <div className="center-container">
        <div className="typewriter-container">
          <div className="typewriter-text">
            <Typewriter text="Obsessed with.problem solving" toHighlight='problem solving' wait={1000}></Typewriter>
          </div>
          <div className="typewriter-text">
            <Typewriter text='Dedicated to.optimization' toHighlight='optimization' wait={3000}></Typewriter>
          </div>
          <div className="typewriter-text">
            <Typewriter text='Driven by.results' toHighlight='results' wait={5000}></Typewriter>
          </div>
          <br />
          <div className="typewriter-text">
            <Typewriter text='Jack Windham' toHighlight='Jack Windham' wait={7000}></Typewriter>
          </div>
        </div>
        <div className="image-container">
          <Image src="/bust.png" alt="hmmmm" width={500} height={300} className='bust-sticker' />
        </div>
      </div>
    </>
  )

}


