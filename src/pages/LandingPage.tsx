
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle';

const LandingPage = () => {
    useDocumentTitle(PageTitle.Home);
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
    </>
  )
}

export default LandingPage