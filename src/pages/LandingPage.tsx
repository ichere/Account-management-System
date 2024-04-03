
import MetaTags from '../components/MetaTags'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle';

const LandingPage = () => {
    useDocumentTitle(PageTitle.Home);
  return (
    <div>
        <MetaTags 
            websiteUrl="https://coge.ng"
            title="Coge Stores | Home"
            description="Take your business online with zero effort, create you online store within five minutes and share the link to potential customers, create your personal e-commerce platform without writing a single line of code, share your store content on your social media platforms, upload your products directly from your store to any of your social media pages"
            imageUrl=""
        />
        <Navbar />
        <HeroSection />
    </div>
  )
}

export default LandingPage