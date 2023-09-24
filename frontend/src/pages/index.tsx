import Head from 'next/head';
import Image from 'next/image';
import Typewriter from '@/components/typewriter';
import './css/index.css'

export default function Home() {

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        <meta name="theme-color" content="#222831" />
      </Head>
      <div className="center-container">
        <div className="typewriter-container">
          <div className="typewriter-text">
            <Typewriter text="Obsessed with.problem solving" toHighlight='problem solving' wait={1000}></Typewriter>
          </div>
          <div className="typewriter-text">
            <Typewriter text='Dedicated to.optimization' toHighlight='optimization' wait={2500}></Typewriter>
          </div>
          <div className="typewriter-text">
            <Typewriter text='Driven by.results' toHighlight='results' wait={4000}></Typewriter>
          </div>
          <br />
          <div className="typewriter-text">
            <Typewriter text='Jack Windham' toHighlight='Jack Windham' wait={5500}></Typewriter>
          </div>
        </div>
        <div className="image-container">
          <Image src="/bust.png" alt="hmmmm" width={500} height={300} className='bust-sticker' />
        </div>
      </div>
    </>
  )

}


