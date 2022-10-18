import Image from 'next/image';

type Props = {
  title?: string;
};

const Hero = ({ title }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row max-w-4xl py-2 mx-auto items-center">
      <div className="w-[19rem] h-[17rem] relative  lg:hidden">
        <Image src="/image/hero.png" alt="" layout="fill" />
      </div>
      <div>
        <h1 className="px-2 text-4xl">{title}</h1>
        <p className="text-lg text-bold  px-2">
          Donaco merupakan aplikasi untuk memberi dana kepada yang membutuhkan
          dikerjakan oleh 3 orang developer iqbal, wawan dan naufal
        </p>
      </div>
      <div className="w-96 h-52 relative hidden lg:flex">
        <Image src={'/image/hero.png'} alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Hero;
