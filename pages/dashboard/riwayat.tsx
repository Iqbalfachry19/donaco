import axios from 'axios';
import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { requireAuth } from '../../common/requireAuth';
import useSWR from 'swr';
import DashboardNav from '../../components/dashboard/DashboardNav';
import DonationHistory from '../../components/DonationHistory';
export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});
type Props = {};

const Riwayat: NextPage = (props: Props) => {
  const { data } = useSession();
  const fetcher = async (url: string) => {
    return await axios.get(url).then((res) => res.data.donation);
  };

  const {
    data: donasi,
    error: errorData,
    mutate,
  } = useSWR(`/api/donation/transaction/get/${data?.id}`, fetcher);
  return (
    <div className="grid grid-cols-5 h-screen">
      <Head>
        <title>Donaco - Riwayat Donasi</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardNav />
      <div className=" col-span-4 flex justify-center items-center">
        <div className="max-w-lg ">
          <h1 className="text-5xl text-center font-bold leading-snug text-gray-400">
            Riwayat Donasi
          </h1>
          <div className="space-y-2 overflow-y-scroll h-40">
            {donasi?.user.map((user: any, id: any) => (
              <DonationHistory key={id} counter={id + 1} amount={user.amount} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
