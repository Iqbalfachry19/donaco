import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const NovuWrapper = dynamic(() => import('./NovuWrapper'), {
  ssr: false,
});
const Header = () => {
  const router = useRouter();

  return (
    <header
      className={`${
        router.pathname === '/log-in' || router.pathname === '/sign-up'
          ? 'bg-transparent fixed top-0 left-0 right-0'
          : 'bg-[#00aeef]'
      } flex items-center text-white justify-between`}
    >
      <Link href="/">
        <div className="flex items-center px-2 py-2 space-x-2 ">
          <div className="w-8 h-8 relative">
            <Image src="/image/logo.png" layout="fill" alt="" />
          </div>
          <h1 className="">Donaco</h1>
        </div>
      </Link>
      <nav className="lg:flex space-x-2 hidden">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/donasi">
          <a>Donasi</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <NovuWrapper />
    </header>
  );
};

export default Header;
