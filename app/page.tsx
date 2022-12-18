import Hero from '../components/Hero';
import ButtonDonasi from '../components/ButtonDonasi';
import Fitur from '../components/Fitur';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="font-body w-full">
      <Hero />

      <ButtonDonasi />
      <Fitur />
      <Footer />
    </main>
  );
};

export default Home;
