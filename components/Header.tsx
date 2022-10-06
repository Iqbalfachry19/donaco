import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-[#00aeef] flex items-center text-white justify-between">
      <div className="flex items-center px-2 py-2 space-x-2">
        <div className="w-8 h-8 relative">
          <Image src="/image/logo.png" layout="fill" alt="" />
        </div>
        <h1 className="">Donaco</h1>
      </div>
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
      <div className="flex space-x-2 px-2 items-center">
        <p>Inbox</p>
        <p>Log In</p>
        <button className="bg-white py-2 px-2 rounded-xl text-black">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
