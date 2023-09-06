import React, { useEffect, useState } from 'react';
import VaraText from '@/component/VaraText';
import Head from 'next/head';
import './css/index.css'

export default function Home() {

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        <meta name="theme-color" key="light" media="(prefers-color-scheme: light)" content="#F2ECBE" />
        <meta name="theme-color" key="dark" media="(prefers-color-scheme: dark)" content="#000000" />
      </Head>
      <div className="textHolder">
        <VaraText text="Jack Windham" fontSize={75}/>
      </div>
    </>
  )
  
}


