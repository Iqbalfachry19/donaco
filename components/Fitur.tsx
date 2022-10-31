import React from 'react';
import FiturCard from './FiturCard';

type Props = {};

const Fitur = (props: Props) => {
  return (
    <div className="flex flex-col lg:h-80 bg-gray-200  w-full py-2 px-2 mx-auto items-center space-x-2">
      <h1 className="text-4xl">Fitur</h1>
      <div className="gap-9 flex flex-col lg:flex-row mt-6">
        <FiturCard
          name="DONASI ONLINE"
          description="Berdonasi secara online dengan mudah dan aman bisa dilakukan dimana saja"
        />
        <FiturCard
          name="PEMBAYARAN CRYPTO"
          description="Anda bisa menggunakan crypto seperti MATIC coin dan Ethereum anda perlu wallet metamask untuk menggunakan fitur ini pelajari selengkapnya disini"
          isCrypto
        />
        <FiturCard
          name="PEMBAYARAN E-WALLET"
          description="Anda bisa menggunakan E-wallet seperti gopay dan shopeepay"
        />
        <FiturCard
          name="PEMBAYARAN GROSIR"
          description="Anda bisa menggunakan toko seperti indomaret dan alfamaret"
        />
      </div>
    </div>
  );
};

export default Fitur;
