import Hero from '../../components/Hero';
import Team from '../../components/Team';

const about = () => {
  return (
    <div className="font-body">
      <main>
        <Hero title="About Us" />
        <Team />
      </main>
    </div>
  );
};

export default about;
