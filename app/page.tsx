import Hero from '../components/Hero';
import ButtonDonasi from '../components/ButtonDonasi';

const Home = () => {
  return (
    <div className="font-body w-full">
      <main>
        <Hero />

        <ButtonDonasi />
      </main>
    </div>
  );
};

export default Home;
