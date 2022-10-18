import Head from 'next/head';
import ButtonDonasi from '../components/ButtonDonasi';

import Hero from '../components/Hero';
export const config = {
  unstable_runtimeJS: false,
};
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
