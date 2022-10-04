import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

type Props = {};

const donasi = (props: Props) => {
  return (
    <div className="font-body">
      <Head>
        <title>Donaco - Donasi</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export default donasi;
