'use client';
import Image from 'next/image';
import { useTypewriter } from 'react-simple-typewriter';

type Props = {
  title?: string;
};

const Hero = ({ title }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      'dikerjakan oleh 3 orang developer iqbal, wawan dan naufal',
      'bantuan modal usaha',
      'bantuan bencana alam',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col lg:flex-row max-w-4xl py-2 mx-auto items-center">
      <div className="w-80 h-[292px] relative  lg:hidden">
        <Image src="/image/hero-sm.png" alt="" priority fill />
      </div>
      <div>
        <h1 className="px-2 text-4xl">{title}</h1>
        <p className="text-lg text-bold  px-2">
          Donaco merupakan aplikasi untuk memberi dana kepada yang membutuhkan{' '}
          {text}
        </p>
      </div>
      <div className="w-96 h-52 relative hidden lg:flex">
        <Image src={'/image/hero.png'} alt="" fill />
      </div>
    </div>
  );
};

export default Hero;
