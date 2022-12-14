import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { dataJenis } from '../data/data';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [data, setData] = useState<any[]>([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    const getRecommended = async () => {
      const res = await axios.get('/api/donation/get');
      console.log(res.data.user);
      setData(res.data.user);
    };
    getRecommended();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-2 ">
      <div className="px-8 lg:px-40 ">
        <Slider {...settings} className=".slick-prev">
          {data?.map((recommendation) => (
            <Link
              key={recommendation.id}
              href={{
                pathname: `/donasi/${recommendation.id}`,
              }}
              passHref={true}
              className="cursor-pointer"
            >
              <p className="text-center">{recommendation.title}</p>
              <div className="w-80 h-40 relative mx-auto rounded-md flex justify-center items-center ">
                <Image src={recommendation.imageUrl} fill alt="" />
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <h1 className="pt-10">Top Penggalangan Dana</h1>
      <div className="flex space-x-2 justify-between overflow-x-scroll  text-center">
        {dataJenis.map((recommendation) => (
          <div key={recommendation.id} className="cursor-pointer">
            <div className="w-60 h-24 relative rounded-md overflow-hidden">
              <Image src={recommendation.imageUrl} fill alt="" />
            </div>
            <p>{recommendation.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
