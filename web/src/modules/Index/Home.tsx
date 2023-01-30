import HeroSection from './HeroSection/HeroSection';
import CardsSection from './CardsSection/CardsSection';
import AppFooter from '@components/Footer/AppFooter';

import { cardsData } from '@utils/resources/cardsData';
import { footerData_index } from '@utils/resources/footerData';

const Home = () => {
  return (
    <>
      <HeroSection />

      <CardsSection {...cardsData} />

      <AppFooter {...footerData_index} />
    </>
  );
};

export default Home;
