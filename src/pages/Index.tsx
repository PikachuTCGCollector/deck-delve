import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCards from "@/components/FeaturedCards";
import SevenFates from "@/components/SevenFates";
import LorePreview from "@/components/LorePreview";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <HeroSection />
      <FeaturedCards />
      <SevenFates />
      <LorePreview />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
