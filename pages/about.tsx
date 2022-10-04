import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Team from '../components/Team';

type Props = {};

const about = (props: Props) => {
  return (
    <div className="font-body">
      <Head>
        <title>Donaco - About Us</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero title="About Us" />
      <Team />
    </div>
  );
};

export default about;
