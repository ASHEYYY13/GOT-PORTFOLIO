import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { toast } from "sonner";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";
import FlyingRaven from "@/components/FlyingRaven";
import SnowEffect from "@/components/SnowEffect";

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
    // Show toast in top-right where raven disappears
    toast.success("Your raven has been dispatched!", {
      description: "The message flies swift across the realm.",
      position: "top-right",
    });
  }, []);

  return (
       <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {showIntro && <IntroScreen onEnter={handleEnterRealm} />}
      <FlyingRaven isFlying={ravenFlying} onComplete={handleRavenComplete} />
      <SnowEffect />
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection onDispatchRaven={handleDispatchRaven} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;