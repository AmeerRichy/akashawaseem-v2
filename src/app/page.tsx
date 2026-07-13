import Footer from './components/Footer';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import BadgesOfMastery from './sections/BadgesOfMastery';
import DigitalArsenal from './sections/DigitalArsenal';
import FlyinWidget from './sections/flyin';
import LabsOfWonders from './sections/GlowingCards';
import PathToKnowledge from './sections/PathToKnowledge';
import PortfolioMagazine from './sections/PortfolioMagazine';
import StorySection from './sections/story';
import Testimonials from './sections/Testimonials';
import UnderTheHood from './sections/UnderTheHood';
import UnderTheHood2 from './sections/underthehood2';

export default function Home() {
  return (
    <div className="homepage-copy">
      <Hero2/>
      {/* <Hero /> */}
      {/* <StorySection/> */}
      <FlyinWidget/>
       <PortfolioMagazine/>
      <LabsOfWonders/>
      <DigitalArsenal/>
      <UnderTheHood2/>
      <PathToKnowledge/>
      <BadgesOfMastery/>
      {/* <UnderTheHood/> */}
      <Testimonials/>
      <Footer/>
    </div>
  );
}
