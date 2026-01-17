import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";
import FlyingRaven from "@/components/FlyingRaven";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [ravenFlying, setRavenFlying] = useState(false);

  const handleEnterRealm = useCallback(() => {
    setShowIntro(false);
  }, []);

  const handleDispatchRaven = useCallback(() => {
    setRavenFlying(true);
  }, []);

  const handleRavenComplete = useCallback(() => {
    setRavenFlying(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showIntro && <IntroScreen onEnter={handleEnterRealm} />}
      <FlyingRaven isFlying={ravenFlying} onComplete={handleRavenComplete} />
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onDispatchRaven={handleDispatchRaven} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
