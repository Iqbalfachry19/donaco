import Head from 'next/head';

import Recommendations from '../components/Recommendations';

const donasi = () => {
  return (
    <div className="font-body">
      <Head>
        <title>Donaco - Donasi</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recommendations />
    </div>
  );
};

export default donasi;
