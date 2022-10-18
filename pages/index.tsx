import Head from 'next/head';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const Hero = dynamic(() => import('../components/Hero'), { suspense: true });
const ButtonDonasi = dynamic(() => import('../components/ButtonDonasi'), {
  suspense: true,
});
const Home = () => {
  return (
    <div className="font-body w-full">
      <Head>
        <title>Donaco</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
        <Suspense fallback={null}>
          <ButtonDonasi />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
