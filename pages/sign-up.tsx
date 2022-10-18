import type { NextPage } from 'next';
import Head from 'next/head';

import dynamic from 'next/dynamic';

const SignupForm = dynamic(() => import('../components/SignupForm'));
const SignUp: NextPage = () => {
  return (
    <div className="bg-[url('/image/background.jpg')]">
      <Head>
        <title>Donaco - Register</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex text-white">
        <SignupForm />
      </main>
    </div>
  );
};

export default SignUp;
