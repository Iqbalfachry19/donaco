import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { data } from '../data/data';
type Props = {};

const dataJenis = [
  {
    id: '1',
    imageUrl: '/image/banjir.jpeg',
    title: 'Banjir',
  },
  {
    id: '2',
    imageUrl: '/image/Angin.jpg',
    title: 'Angin topan',
  },
  {
    id: '3',
    imageUrl: '/image/Longsor.jpg',
    title: 'Longsor',
  },
];
const Recommendations = (props: Props) => {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-4xl mx-auto p-2 ">
      <div className="px-8 lg:px-40 ">
        <Slider {...settings} className=".slick-prev">
          {data.map((recommendation) => (
            <Link
              key={recommendation.id}
              href={{
                pathname: `/donasi/${recommendation.id}`,
              }}
              passHref={true}
            >
              <div className="cursor-pointer">
                <p className="text-center">{recommendation.title}</p>
                <div className="w-80 h-40 relative mx-auto rounded-md flex justify-center items-center ">
                  <Image src={recommendation.imageUrl} layout="fill" alt="" />
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <h1 className="pt-10">Top Penggalangan Dana</h1>
      <div className="flex space-x-2 justify-between overflow-x-scroll lg:overflow-hidden text-center">
        {dataJenis.map((recommendation) => (
          <div key={recommendation.id} className="cursor-pointer">
            <div className="w-60 h-24 relative rounded-md overflow-hidden">
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
