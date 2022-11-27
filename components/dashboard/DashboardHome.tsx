import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import useSWR from 'swr';
type Props = {};

function DashboardHome(props: Props) {
  const { data } = useSession();
  const fetcher = async (url: string) => {
    return await axios.get(url).then((res) => res.data.donation);
  };

  const {
    data: donasi,
    error: errorData,
    mutate,
  } = useSWR(`/api/donation/transaction/get/${data?.id}`, fetcher);
  console.log(donasi);
  return (
    <div className=" col-span-4 flex justify-center items-center">
      <div className="max-w-lg ">
        <h1 className="text-5xl text-center font-bold leading-snug text-gray-400">
          Welcome{' '}
          {data?.user?.name ||
            `${
              data?.user?.name || data?.user?.address?.substring(0, 4)
            }...${data?.user?.address?.substring(
              38,
              data?.user?.address?.length,
            )}`}{' '}
          {data?.admin ? 'you are admin' : ''}
        </h1>
        <div className="flex space-x-2 justify-center">
          <div>
            <div className="my-4 flex-col bg-gray-700 rounded-lg p-4 h-40 w-40 items-center justify-center text-white">
              <p className="my-4 text-center leading-loose">Total Donasi</p>
              <p className="text-center">
                {donasi?.aggregations._sum.amount
                  ? donasi?.aggregations._sum.amount
                  : 0}
              </p>
            </div>
          </div>
          <div>
            <div className="my-4 flex-col bg-gray-700 rounded-lg p-4 h-40 w-40 items-center justify-center text-white">
              <p className="my-4 text-center leading-loose">Jumlah Donasi</p>
              <p className="text-center">
                {donasi?.donationCount ? donasi?.donationCount : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
