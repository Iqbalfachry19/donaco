import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { requireAuth } from '../../common/requireAuth';
import DashboardNav from '../../components/dashboard/DashboardNav';
export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});
type Props = {};

const profile = (props: Props) => {
  const { data } = useSession();
  const router = useRouter();
  return (
    <div className="grid grid-cols-5 h-screen">
      <Head>
        <title>Donaco - Profile</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardNav />
      <div className=" col-span-4 flex justify-center items-center">
        <div className="max-w-lg ">
          <h1 className="text-5xl text-center font-bold leading-snug text-gray-400">
            Setting Profile
          </h1>
          <p className="my-4 text-center leading-loose">
            You are allowed to visit this page because you have a session,
            otherwise you would be redirected to the login page.
          </p>
          <div className="my-4 bg-gray-700 rounded-lg p-4 text-white">
            <pre>
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          </div>
          <div className="text-center">
            <button
              className="btn btn-secondary"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
