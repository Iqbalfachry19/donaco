import React from 'react';

type Props = {};
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
const DashboardNav = (props: Props) => {
  const router = useRouter();
  const { data } = useSession();
  return (
    <div className="col-span-1 text-white ">
      <nav className="bg-gray-700  flex flex-row lg:flex-col h-screen px-2 space-y-2">
        <div className="flex items-center space-x-2 py-2">
          <div className="h-10 w-10 relative">
            <Image
              src={`https://avatars.dicebear.com/api/initials/${
                data?.user?.name || data?.user?.address
              }.svg`}
              alt=""
              fill
            />
          </div>

          <p>{`${data?.user?.name}`}</p>
        </div>
        <Link
          href="/dashboard"
          className={`${router.pathname === '/dashboard' && 'underline'}`}
        >
          Dashboard
        </Link>
        {data?.admin && (
          <Link
            href="/dashboard/data-donasi"
            className={`${
              router.pathname === '/dashboard/data-donasi' && 'underline'
            }`}
          >
            Data Donasi
          </Link>
        )}
        <Link
          href="/dashboard/riwayat"
          className={`${
            router.pathname === '/dashboard/riwayat' && 'underline'
          }`}
        >
          Riwayat Donasi
        </Link>
      </nav>
    </div>
  );
};

export default DashboardNav;
