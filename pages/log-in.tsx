import type { NextPage } from 'next';
import Head from 'next/head';

import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('../components/LoginForm'));

const LogIn: NextPage = () => {
  return (
    <div className="bg-[url('/image/background.jpg')]">
      <Head>
        <title>Donaco - Login</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex  text-white">
        <LoginForm />
      </main>
    </div>
  );
};

export default LogIn;
