import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
const convertRupiah = require('rupiah-format');
import ProgressBar from '../../components/ProgressBar';
import { data } from '../../data/data';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCallback, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { donationSchema, IDonation } from '../../common/validation/donation';
import { ErrorMessage } from '@hookform/error-message';
import { FactoryDeploymentSchema } from '@thirdweb-dev/sdk';
Modal.setAppElement('#__next');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 20,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
};
type Props = {};

type Query = {
  title: string;
  imageUrl: string;
  maxDonation: string;
  currentDonation: string;
  maxDay: string;
  donationAmount: string;
};
const DetailDonasi = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDonation>({
    resolver: zodResolver(donationSchema),
  });
  const onSubmit = useCallback(async (data: IDonation) => {
    if (data.types === 'crypto') {
      closeModal();
    } else {
    }
  }, []);

  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const {
    title,
    imageUrl,
    maxDonation,
    currentDonation,
    maxDay,
    donationAmount,
  } = data.find((data) => data.id === router.query.id) as any;
  return (
    <div className="font-body bg-gray-100 h-full lg:h-[94vh]">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="text-white" onClick={closeModal}>
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="text-white">Pilih Jenis Donasi</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex text-white flex-col pt-10"
        >
          <label className="text-white">Jenis Donasi</label>
          <select
            {...register('types', {
              required: 'select one option',
            })}
            className="text-black"
          >
            <option value="crypto">Crypto</option>
            <option value="gopay">Gopay</option>
            <option value="mbanking">M-banking</option>
            <option value="indomaret">Indomaret</option>
            <option value="alfamaret">Alfamaret</option>
          </select>
          <label className="text-white">Masukkan Jumlah</label>
          <input
            required
            placeholder="Min Rp.20.000"
            type="number"
            {...register('amount', {
              valueAsNumber: true,
              min: 20000,
            })}
            className="text-black"
          />
          <ErrorMessage
            errors={errors}
            name="amount"
            render={({ message }) => <p>{message}</p>}
          />
          <button
            type="submit"
            className="p-2 mt-10 bg-[#C93555] text-white rounded-md"
          >
            Donasi
          </button>
        </form>
      </Modal>

      <Head>
        <title>Donaco - {title}</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-7xl mx-auto p-2">
        <div className="lg:grid-cols-5 lg:grid p-8">
          <div className="flex flex-col col-span-2 ">
            <div className="w-full h-80 relative rounded-md  overflow-hidden">
              <Image src={imageUrl} layout="fill" alt="" />
            </div>
            <p className="font-semibold text-2xl">{title}</p>
            <div className="flex space-x-2">
              <p className="text-[#00aeef]">
                {convertRupiah.convert(currentDonation)}
              </p>
              <p className="text-sm lg:text-md flex items-center">
                terkumpul dari {convertRupiah.convert(maxDonation)}
              </p>
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

            <button
              onClick={openModal}
              className="p-2 mt-10 bg-[#C93555] text-white rounded-md"
            >
              Donasi Sekarang!
            </button>
          </div>
          <div className="flex flex-col px-8 col-span-3 pt-4 lg:pt-0">
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
            <div className="mt-10 bg-white p-2 mb-40">
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
