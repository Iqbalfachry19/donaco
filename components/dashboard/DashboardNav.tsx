import React from 'react';

type Props = {};
import Link from 'next/link';
import { useRouter } from 'next/router';
const DashboardNav = (props: Props) => {
  const router = useRouter();
  return (
    <div className="col-span-1 text-white ">
      <nav className="bg-gray-700  flex flex-col h-screen px-2 space-y-2">
        <Link
          href="/dashboard"
          className={`${router.pathname === '/dashboard' && 'underline'}`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/tambah-data"
          className={`${
            router.pathname === '/dashboard/tambah-data' && 'underline'
          }`}
        >
          Tambah Data Donasi
        </Link>
        <Link
          href="/dashboard/riwayat"
          className={`${
            router.pathname === '/dashboard/riwayat' && 'underline'
          }`}
        >
          Riwayat Donasi
        </Link>
        <Link
          href="/dashboard/profile"
          className={`${
            router.pathname === '/dashboard/profile' && 'underline'
          }`}
        >
          Setting Profile
        </Link>
      </nav>
    </div>
  );
};

export default DashboardNav;
