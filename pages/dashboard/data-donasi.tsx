import type { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';
import Head from 'next/head';

import { requireAuth } from '../../common/requireAuth';
import DashboardNav from '../../components/dashboard/DashboardNav';
import { MediaRenderer, useStorageUpload } from '@thirdweb-dev/react';
import { useState } from 'react';

type Props = {};
export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});
const DataDonasi = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<any>();
  const [isImagePicked, setIsImagePicked] = useState(false);
  const [isUploaded, setIsUploaded] = useState(true);
  const [uri, setUri] = useState<any>();
  const { mutateAsync: upload } = useStorageUpload();
  async function uploadData() {
    // Get any data that you want to upload
    const reader: any = new window.FileReader();
    reader?.readAsArrayBuffer(selectedImage);
    reader.onloadend = async () => {
      const buffer = Buffer.from(reader.result);
      const dataToUpload = [buffer];

      // And upload the data with the upload function
      const uris = await upload({ data: dataToUpload });
      console.log(uris);
      setUri(uris);
    };
  }
  const changeImageHandler = (event: any) => {
    setSelectedImage(event.target.files[0]);
    setIsImagePicked(true);
  };
  return (
    <div className="grid grid-cols-5 h-screen">
      <Head>
        <title>Donaco - Data Donasi</title>
        <meta name="description" content="donaco is web for donating" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardNav />

      <div className=" col-span-4 flex justify-center items-center">
        <div className="max-w-lg ">
          <h1 className="text-5xl text-center font-bold leading-snug text-gray-400">
            Data Donasi
          </h1>
          <p className="my-4 text-center leading-loose">
            You are allowed to visit this page because you have a session,
            otherwise you would be redirected to the login page.
          </p>
          <div className="my-4 bg-gray-700 rounded-lg p-4 text-white">
            <input
              type="file"
              name="file"
              accept="image/*"
              required
              onChange={changeImageHandler}
              className="text-black"
            />
            {isUploaded && <MediaRenderer src={uri[0]} alt="A mp4 video" />}
          </div>
          <div className="text-center">
            <button className="btn btn-secondary" onClick={uploadData}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDonasi;
