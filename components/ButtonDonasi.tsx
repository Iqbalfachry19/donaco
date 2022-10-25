import Link from 'next/link';

const ButtonDonasi = () => {
  return (
    <div className="flex flex-row max-w-4xl py-2 px-2 mx-auto items-center space-x-2">
      <Link href="/donasi" className="bg-[#00aeef] text-white p-2 rounded-md">
        Ayo donasi
      </Link>
      <Link href="/about" className="bg-gray-500 text-white p-2 rounded-md">
        Tentang Kami
      </Link>
    </div>
  );
};

export default ButtonDonasi;
