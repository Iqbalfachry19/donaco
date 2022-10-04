import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="font-body">
      <Head>
        <title>Donaco</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
