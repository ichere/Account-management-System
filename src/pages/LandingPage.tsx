
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle';
import FeatureSection from '../components/FeatureSection';
import HowSection from '../components/HowSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const LandingPage = () => {
    useDocumentTitle(PageTitle.Home);
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowSection />
      <FaqSection />
      <Footer />
    </>
  )
}

export default LandingPage