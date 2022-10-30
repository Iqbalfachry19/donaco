import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { requireAuth } from '../../common/requireAuth';
import DashboardHome from '../../components/dashboard/DashboardHome';
import DashboardNav from '../../components/dashboard/DashboardNav';

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();
  const router = useRouter();
  return (
    <div className="grid grid-cols-5 h-screen">
      <Head>
        <title>Donaco - Dashboard</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardNav />
      <DashboardHome />
    </div>
  );
};

export default Dashboard;
