import Head from 'next/head';
import ButtonDonasi from '../components/ButtonDonasi';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Hero = dynamic(() => import('../components/Hero'), {
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
        <Suspense fallback={`Loading...`}>
          <Hero />
        </Suspense>

        <ButtonDonasi />
      </main>
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
