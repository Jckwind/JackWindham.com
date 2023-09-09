import { Laila } from 'next/font/google'
import VaraText from '@/components/VaraText';
import Typewriter from 'typewriter-effect';
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

  const onVaraInit = (instance: any) => {
    varaInstance = instance;
  };

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        <meta name="theme-color" key="light" media="(prefers-color-scheme: light)" content="#F2ECBE" />
        <meta name="theme-color" key="dark" media="(prefers-color-scheme: dark)" content="#000000" />
      </Head>
      <div className="textHolder">
        <h1 className={`${laila.className} welcome-label`}>Nouns. Adjectives. Things about me. Wow</h1>

        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1500)
              .typeString('Welcome! My name is ')
              .callFunction(() => {
                varaInstance.draw("jack");
              })
              .start();
          }}
          options={{
            cursor: "",
            wrapperClassName: `${laila.className} welcome-label`,
            delay: 80,
          }}
        /> */}
        <div className="stickerHolder">
          <Image src="mynameis.svg" alt="My Name Is" width={500} height={300} className='welcome-sticker' />
          <VaraText text="Jack" fontSize={60} onVaraInit={onVaraInit} />
        </div>
      </div>
    </>
  )

}


