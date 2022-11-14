import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
const convertRupiah = require('rupiah-format');
import ProgressBar from '../../components/ProgressBar';
import Script from 'next/script';
import { data } from '../../data/data';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { donationSchema, IDonation } from '../../common/validation/donation';
import { ErrorMessage } from '@hookform/error-message';
import { useContract, useContractWrite, Web3Button } from '@thirdweb-dev/react';
import LoginWallet from '../../components/LoginWallet';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { ethers } from 'ethers';
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
  story: string;
};
const DetailDonasi = (props: Props) => {
  const { data: user } = useSession();
  const [isCrypto, setIsCrypto] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    reset,
  } = useForm<IDonation>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: 20000,
      amountCrypto: 0.01,
    },
  });
  //

  const router = useRouter();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [highestDonation, setHighestDonation] = useState();

  function openModal() {
    setIsOpen(true);
  }
  const { contract } = useContract(
    '0x4d0917c504b817fc3aBE6b20bBBbEbf7A5B89e19',
  );
  const { mutateAsync: Deposit, error } = useContractWrite(contract, 'deposit');
  const donation = useCallback(
    async (price: any) => {
      const tx = await Deposit([
        0,
        {
          value: ethers.utils.parseEther(
            Number(ethers.utils.formatEther(price)).toString(),
          ),
        },
      ]);
    },
    [Deposit],
  );
  const onSubmit = useCallback(
    async (data: IDonation) => {
      if (data.types === 'crypto') {
        donation(data.amountCrypto);
        reset();
        console.log(data);
      } else {
        console.log(data);
        let total = data.amount;
        let items = [
          {
            id: 'DONATION1',
            price: total,
            title: 'donasi',
            category: 'donasi',
            image: '/image/banjir.jpeg',
          },
        ];

        const checkoutSession = await axios
          .post('/api/midtrans', { items, email: user?.user.email, total })
          .catch((error) => {
            console.error(error);
          });
        console.log('check', checkoutSession);
        // SnapToken acquired from previous step
        window.snap.pay(checkoutSession?.data.token, {
          // Optional
          onClose: function () {
            /* You may add your own implementation here */
          },
          onSuccess: function () {
            console.log('success');
          },
          // Optional
          onPending: function () {
            console.log('pending');
          },
          // Optional
          onError: function () {
            console.log('error');
          },
        });
      }
    },
    [donation, reset, user?.user.email],
  );

  useEffect(() => {
    contract?.events?.addEventListener('HighestDonation', (event) => {
      setHighestDonation(event?.data?._highestDonation.toString());
    });
    return contract?.events?.removeEventListener('HighestDonation', (event) => {
      console.log(event);
    });
  }, [contract?.events]);
  console.log(highestDonation);
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
    story,
  } = data.find((data) => data.id === router.query.id) as any;
  const pageTitle = `Donaco - ${title}`;
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
              onChange: (e) => {
                if (e.target.value === 'crypto') {
                  resetField('amount');
                  resetField('amountCrypto');
                  setIsCrypto(true);
                } else {
                  resetField('amountCrypto');
                  resetField('amount');
                  setIsCrypto(false);
                }
              },
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

          {isCrypto ? (
            <>
              <input
                step="any"
                min="0.01"
                placeholder="Min 0.01 Matic"
                type="number"
                {...register('amountCrypto', {
                  valueAsNumber: true,
                  min: 0.01,
                })}
                className="text-black"
              />
              <ErrorMessage
                errors={errors}
                name="amountCrypto"
                render={({ message }) => <p>{message}</p>}
              />
              {user?.user?.address ? (
                <button
                  type="submit"
                  onClick={donation}
                  className="p-2 mt-10 bg-[#C93555] text-white rounded-md"
                >
                  Donasi
                </button>
              ) : (
                <div className="mt-3">
                  <LoginWallet isDonating />
                </div>
              )}
            </>
          ) : (
            <>
              <input
                min="20000"
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
              {user?.user.email ? '' : <p>login terlebih dahulu</p>}
              <button
                type="submit"
                disabled={user?.user.email ? false : true}
                className="p-2 mt-10 bg-[#C93555] text-white rounded-md disabled:bg-slate-500"
              >
                Donasi
              </button>
            </>
          )}
        </form>
      </Modal>

      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key="SB-Mid-client-4YeiDBDfHer6ImFz"
        defer
      ></Script>
      <div className="max-w-7xl mx-auto p-2">
        <div className="lg:grid-cols-5 lg:grid p-8">
          <div className="flex flex-col col-span-2 ">
            <div className="w-full h-80 relative rounded-md  overflow-hidden">
              <Image src={imageUrl} fill alt="" />
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
                    <Image src="/image/komunitas.png" fill alt="" />
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
              <p>{story}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDonasi;
