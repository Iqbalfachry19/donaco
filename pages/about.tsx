import Head from 'next/head';

import Hero from '../components/Hero';
import Team from '../components/Team';

const about = () => {
  return (
    <div className="font-body">
      <Head>
        <title>Donaco - About Us</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title="About Us" />
      <Team />
    </div>
  );
};

export default about;
