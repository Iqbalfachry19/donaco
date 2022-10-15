import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
type Props = {};
type Query = {
  title: string;
  imageUrl: string;
};
const DetailDonasi = (props: Props) => {
  const router = useRouter();

  const { title, imageUrl } = router.query as Query;
  return (
    <div className="font-body">
      <Head>
        <title>Donaco - {title}</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-4xl mx-auto p-2 ">
        <div className="flex flex-col cursor-pointer items-center justify-center">
          <div className="w-80 h-40 relative rounded-md  overflow-hidden">
            <Image src={imageUrl} layout="fill" alt="" />
          </div>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailDonasi;
