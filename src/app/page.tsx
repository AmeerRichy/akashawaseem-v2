import Footer from './components/Footer';
import Hero from './components/Hero';
import BadgesOfMastery from './sections/BadgesOfMastery';
import DigitalArsenal from './sections/DigitalArsenal';
import FlyinWidget from './sections/flyin';
import LabsOfWonders from './sections/GlowingCards';
import PathToKnowledge from './sections/PathToKnowledge';
import StorySection from './sections/story';
import Testimonials from './sections/Testimonials';
import UnderTheHood from './sections/UnderTheHood';

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection/>
      <FlyinWidget/>
      <LabsOfWonders/>
      <PathToKnowledge/>
      <DigitalArsenal/>
      <BadgesOfMastery/>
      <UnderTheHood/>
      <Testimonials/>
      <Footer/>
    </>
  );
}
