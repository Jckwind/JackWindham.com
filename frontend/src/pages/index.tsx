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
        <TypeAnimation
          className={`${laila.className} welcome-label`}
          preRenderFirstString={true}
          cursor={false}
          sequence={[
            2000,
            'Do the hard thing.',
            4000,
            'Proud perfectionist.',
            4000,
            "Do work you're proud of.",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
        <div className="stickerHolder">
          <Image src="mynameis.svg" alt="My Name Is" width={500} height={300} className='welcome-sticker' />
          <VaraText text="Jack" fontSize={60} onVaraInit={onVaraInit} />
        </div>
      </div>
    </>
  )

}


