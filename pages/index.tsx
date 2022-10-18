import Head from 'next/head';

import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../components/Hero'));
const ButtonDonasi = dynamic(() => import('../components/ButtonDonasi'));
const Home = () => {
  return (
    <div className="font-body w-full">
      <Head>
        <title>Donaco</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <ButtonDonasi />
      </main>
    </div>
  );
};

export default Home;
