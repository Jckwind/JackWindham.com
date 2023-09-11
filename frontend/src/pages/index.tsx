import { Laila } from 'next/font/google'
import VaraText from '@/components/VaraText';
import { TypeAnimation } from 'react-type-animation'
import Vara from 'vara'
import Head from 'next/head';
import Image from 'next/image';
import './css/index.css'

const laila = Laila({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
  variable: '--laila-font',
})


export default function Home() {

  let varaInstance: InstanceType<typeof Vara>;


  const onVaraInit = (instance: any) => { varaInstance = instance; };
  
  const ITALIC_CLASS_NAME = 'italic-text';
  const CURSOR_CLASS_NAME = 'show-cursor';

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        <meta name="theme-color" key="light" media="(prefers-color-scheme: light)" content="#F2ECBE" />
        <meta name="theme-color" key="dark" media="(prefers-color-scheme: dark)" content="#000000" />
      </Head>
      <div className="textHolder">
        <TypeAnimation
          className={`${laila.className} ${ITALIC_CLASS_NAME} welcome-label min-h-[2rem] md:min-h-[4rem] lg:min-h-[5rem] text-2xl md:text-4xl`}
          preRenderFirstString={true}
          cursor={false}
          sequence={[
            "Who are you?",
            2800,
            "",
            (el) => {
              if (el)
                el.classList.remove(ITALIC_CLASS_NAME)
            },
            (el) => {
              if (el)
                el.classList.add(CURSOR_CLASS_NAME)
            },
            'I do the hard thing.',
            2000,
            "I am a proud perfectionist.",
            2000,
            "I do work I'm proud of.",
            2000,
            "Who are you?",
            (el) => {
              if (el)
                el.classList.remove(CURSOR_CLASS_NAME)
            },
          ]}
          speed={50}
        />
        <div className="stickerHolder w-3/4 md:w-1/4">
          <Image src="mynameis.svg" alt="My Name Is" width={500} height={300} className='welcome-sticker w-full' />
          <VaraText text="Jack" fontSize={60} onVaraInit={onVaraInit} />
        </div>
      </div>
    </>
  )

}


