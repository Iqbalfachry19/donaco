import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
const convertRupiah = require('rupiah-format');
import ProgressBar from '../../components/ProgressBar';
import { GetServerSideProps } from 'next';
type Props = {
  title: string;
  imageUrl: string;
  maxDonation: string;
  currentDonation: string;
  maxDay: string;
  donationAmount: string;
};

const DetailDonasi = ({
  title,
  imageUrl,
  maxDonation,
  currentDonation,
  maxDay,
  donationAmount,
}: Props) => {
  return (
    <div className="font-body bg-gray-100 h-[94vh]">
      <Head>
        <title>Donaco - {title}</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto p-2">
        <div className="grid-cols-5 grid p-8">
          <div className="flex flex-col col-span-2 cursor-pointer ">
            <div className="w-full h-80 relative rounded-md  overflow-hidden">
              <Image src={imageUrl} layout="fill" alt="" />
            </div>
            <p className="font-semibold text-2xl">{title}</p>
            <div className="flex space-x-2">
              <p className="text-[#00aeef]">
                {convertRupiah.convert(currentDonation)}
              </p>
              <p>terkumpul dari {convertRupiah.convert(maxDonation)}</p>
            </div>
            <ProgressBar
              bgcolor="#00aeef"
              progress={(
                (Number(currentDonation) / Number(maxDonation)) *
                100
              ).toString()}
              height={30}
            />
            <div className="flex ">
              <div className="grow">
                <p>
                  <span className="font-bold">{donationAmount}</span> Donasi
                </p>
              </div>
              <div className="grow-none">
                <p>
                  <span className="font-bold">{maxDay}</span> Hari lagi
                </p>
              </div>
            </div>
            <button className="p-2 mt-10 bg-[#C93555] text-white rounded-md">
              Donasi Sekarang!
            </button>
          </div>
          <div className="flex flex-col px-8 col-span-3">
            <div className="bg-white p-2">
              <h1 className="font-bold text-lg">Informasi Penggalangan Dana</h1>
              <div className="border p-2">
                <h2>Penggalang Dana</h2>
                <div className="flex">
                  <div className="w-20 h-20 relative rounded-md  overflow-hidden">
                    <Image src="/image/komunitas.png" layout="fill" alt="" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-lg">Komunitas Pelita</p>
                    <p>Identitas terverifikasi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-white p-2">
              <h1 className="font-bold text-lg">Cerita</h1>
              <p>
                Beberapa pekan terakhir hujan mengguyur sejumlah wilayah di
                kabupaten kotawaringin Timur dan Kabupaten Katingan, Kalimantan
                Tengah. Hujan dengan intensitas tinggi ini menyebabkan banjir di
                puluhan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDonasi;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    title,
    imageUrl,
    maxDonation,
    currentDonation,
    maxDay,
    donationAmount,
  } = context.query;
  return {
    props: {
      title,
      imageUrl,
      maxDonation,
      currentDonation,
      maxDay,
      donationAmount,
    },
  };
};
