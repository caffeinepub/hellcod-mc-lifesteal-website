import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import CloudsBackground from './components/CloudsBackground';
import HeroSection from './components/HeroSection';
import GameplaySection from './components/GameplaySection';
import RewardsSection from './components/RewardsSection';
import ShopInfoSection from './components/ShopInfoSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <CloudsBackground />
      <div className="relative min-h-screen overflow-x-hidden">
        <HeroSection />
        <GameplaySection />
        <RewardsSection />
        <ShopInfoSection />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export default App;
