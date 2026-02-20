import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import MouseLightEffect from './components/MouseLightEffect';
import HeroSection from './components/HeroSection';
import GameplaySection from './components/GameplaySection';
import RewardsSection from './components/RewardsSection';
import ShopInfoSection from './components/ShopInfoSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <MouseLightEffect />
      <Header />
      <div className="relative min-h-screen overflow-x-hidden">
        <HeroSection />
        <GameplaySection />
        <RewardsSection />
        <ShopInfoSection />
        <CallToAction />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
