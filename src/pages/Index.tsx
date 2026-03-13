import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCards from "@/components/FeaturedCards";
import GameModes from "@/components/GameModes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <HeroSection />
      <FeaturedCards />
      <GameModes />
      <Footer />
    </div>
  );
};

export default Index;
