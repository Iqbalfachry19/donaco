import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};
const data = [
  {
    id: '1',
    imageUrl: '/image/banjir.jpeg',
    title: 'Ribuan warga terdampak banjir di kalteng',
  },
  {
    id: '2',
    imageUrl: '/image/banjir.jpeg',
    title: 'Banjir di pekanbaru',
  },
];
const dataJenis = [
  {
    id: '1',
    imageUrl: '/image/banjir.jpeg',
    title: 'Infak',
  },
  {
    id: '2',
    imageUrl: '/image/banjir.jpeg',
    title: 'bencana alam',
  },
];
const Recommendations = (props: Props) => {
  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto p-2">
      <h1>Recommendations</h1>
      <div className="flex space-x-2  overflow-x-scroll lg:overflow-hidden">
        {data.map((recommendation) => (
          <div
            key={recommendation.id}
            onClick={() =>
              router.push(
                {
                  pathname: `/donasi/${recommendation.id}`,
                  query: {
                    imageUrl: recommendation.imageUrl,
                    title: recommendation.title,
                  },
                },
                `/donasi/${recommendation.id}`,
              )
            }
            className="cursor-pointer"
          >
            <div className="w-80 h-40 relative rounded-md  overflow-hidden">
              <Image src={recommendation.imageUrl} layout="fill" alt="" />
            </div>
            <p>{recommendation.title}</p>
          </div>
        ))}
      </div>
      <h1>Jenis Donasi</h1>
      <div className="flex space-x-2  overflow-x-scroll lg:overflow-hidden">
        {dataJenis.map((recommendation) => (
          <div key={recommendation.id} className="cursor-pointer">
            <div className="w-24 h-24 relative rounded-md overflow-hidden">
              <Image src={recommendation.imageUrl} layout="fill" alt="" />
            </div>
            <p>{recommendation.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
