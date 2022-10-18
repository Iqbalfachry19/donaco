import Link from 'next/link';

import {
  HomeIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
type Props = {};

const BottomNav = (props: Props) => {
  const router = useRouter();
  return (
    <section
      className={`${
        router.pathname === '/log-in' || router.pathname === '/sign-up'
          ? 'hidden'
          : 'block'
      } fixed  inset-x-0 bottom-0 z-10  bg-[#00aeef] text-white shadow`}
    >
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
