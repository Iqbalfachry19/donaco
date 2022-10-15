import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    title: 'Gempa Bumi',
  },
  {
    id: '2',
    imageUrl: '/image/banjir.jpeg',
    title: 'Angin topan',
  },
  {
    id: '2',
    imageUrl: '/image/banjir.jpeg',
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
      <div className="px-4 lg:px-40 ">
        <Slider {...settings} className=".slick-prev">
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
              <p className="text-center">{recommendation.title}</p>
              <div className="w-80 h-40 relative mx-auto rounded-md flex justify-center items-center ">
                <Image src={recommendation.imageUrl} layout="fill" alt="" />
              </div>
            </div>
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
