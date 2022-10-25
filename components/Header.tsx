import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { signOut, useSession } from 'next-auth/react';
const NovuWrapper = dynamic(() => import('./NovuWrapper'), {
  ssr: false,
});
const Header = () => {
  const router = useRouter();
  const { data } = useSession();
  return (
    <header
      className={`${
        router.pathname === '/log-in' || router.pathname === '/sign-up'
          ? 'bg-transparent fixed top-0 left-0 right-0'
          : 'bg-[#00aeef]'
      } flex items-center text-white justify-between`}
    >
      <Link href="/" className="flex items-center px-2 py-2 space-x-2 ">
        <div className="w-8 h-8 relative">
          <Image src="/image/logo-sm.png" alt="logo" fill />
        </div>
        <h1 className="">Donaco</h1>
      </Link>
      <nav className="lg:flex space-x-2 hidden">
        <Link href="/">Home</Link>
        <Link href="/donasi">Donasi</Link>

        <Link href="/about">About</Link>
      </nav>
      <div className="flex space-x-2 px-2 items-center">
        <NovuWrapper />
        {data ? (
          <p
            onClick={() => signOut({ callbackUrl: '/' })}
            className="cursor-pointer"
          >
            Log Out
          </p>
        ) : (
          <>
            <Link href="/log-in" className="cursor-pointer">
              Log In
            </Link>
            <Link
              href="/sign-up"
              className="bg-white py-2 px-2 rounded-xl text-black"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
