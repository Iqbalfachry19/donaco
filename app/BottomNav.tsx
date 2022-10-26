'use client';
import Link from 'next/link';

import {
  HomeIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <section
      className={`${
        pathname === '/log-in' || pathname === '/sign-up' ? 'hidden' : 'block'
      } fixed  inset-x-0 bottom-0 z-10  bg-[#00aeef] text-white shadow`}
    >
      <nav className="flex  lg:hidden items-center justify-around">
        <Link href="/">
          <HomeIcon />
          Home
        </Link>

        <Link href="/donasi">
          <CurrencyDollarIcon />
          Donasi
        </Link>

        <Link href="/about">
          <InformationCircleIcon />
          About
        </Link>
      </nav>
    </section>
  );
};

export default BottomNav;
