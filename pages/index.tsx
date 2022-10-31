import Head from 'next/head';

import Hero from '../components/Hero';
import ButtonDonasi from '../components/ButtonDonasi';
import Fitur from '../components/Fitur';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-body w-full overflow-y-hidden">
      <Head>
        <title>Donaco</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero title="Selamat Datang di Donaco" />

        <ButtonDonasi />
        <Fitur />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
