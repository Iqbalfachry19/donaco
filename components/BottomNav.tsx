import Link from 'next/link';
import React from 'react';
import {
  HomeIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
type Props = {};

const BottomNav = (props: Props) => {
  return (
    <section className="block fixed  inset-x-0 bottom-0 z-10  bg-[#00aeef] text-white shadow">
      <nav className="flex  lg:hidden items-center justify-around">
        <Link href="/">
          <a>
            <HomeIcon />
            Home
          </a>
        </Link>

        <Link href="/donasi">
          <a>
            <CurrencyDollarIcon />
            Donasi
          </a>
        </Link>

        <Link href="/about">
          <a>
            <InformationCircleIcon /> About
          </a>
        </Link>
      </nav>
    </section>
  );
};

export default BottomNav;
