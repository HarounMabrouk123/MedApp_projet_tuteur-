import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection
 from './components/HowItWorksSection';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-40 pb-16">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection></HowItWorksSection>
      </main>
    </>
  );
}
