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

const Riwayat: NextPage = (props: Props) => {
  const { data } = useSession();

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
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #1</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #2</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #3</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #4</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #5</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #6</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #7</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #8</p>
              <p>Jumlah: 20000</p>
            </div>
            <div className="w-2xl bg-primary rounded-lg p-2">
              <p>Donasi ke #9</p>
              <p>Jumlah: 20000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;
