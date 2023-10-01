import Head from 'next/head';
import Image from 'next/image';
import Typewriter from '@/components/typewriter';
import './css/index.css'

export default function Home() {

  return (
    <>
      <Head>
        <meta name="theme-color" content="#222831" />
      </Head>
      <div className="center-container">
        <div className="typewriter-container">
          <TypewriterText text="Obsessed with.problem solving" highlight="problem solving" delay={1000} />
          <TypewriterText text="Dedicated to.optimization" highlight="optimization" delay={3000} />
          <TypewriterText text="Driven by.results" highlight="results" delay={4500} />
          <TypewriterText text=".Jack Windham" highlight="Jack Windham" delay={6000} />
        </div>
      </div>

    </>
  )

}

function TypewriterText({ text, highlight, delay }: { text: string; highlight: string; delay: number }) {
  return (
    <div className="typewriter-text">
      <Typewriter text={text} toHighlight={highlight} wait={delay} />
    </div>
  );
}


