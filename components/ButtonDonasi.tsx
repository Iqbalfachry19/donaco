import Link from 'next/link';
import React from 'react';

type Props = {};

const ButtonDonasi = (props: Props) => {
  return (
    <div className="flex flex-row max-w-4xl py-2 px-2 mx-auto items-center space-x-2">
      <Link href="/donasi">
        <button className="bg-[#00aeef] text-white p-2 rounded-md">
          Ayo donasi
        </button>
      </Link>
      <Link href="/about">
        <button className="bg-gray-500 text-white p-2 rounded-md">
          Tentang Kami
        </button>
      </Link>
    </div>
  );
};

export default ButtonDonasi;
