import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/me and throne.png";
import heroBg3 from "@/assets/bgimage.png";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import useParallax from "@/hooks/useParallax";

const HeroSection = () => {
    const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const bgOffset = useParallax(bgRef, { speed: 0.2, direction: "down" });
  const contentOffset = useParallax(contentRef, { speed: 0.1, direction: "up" });
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
          ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroBg3})`,
          transform: `translateY(${bgOffset}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in will-change-transform"
        style={{ transform: `translateY(${contentOffset}px)` }}
      >
        {/* Ornate top decoration */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* House Words Style Subtitle */}
        <p className="font-display text-primary tracking-[0.4em] text-sm md:text-base mb-4 uppercase animate-glow-pulse">
          Code is Coming
        </p>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient-gold leading-tight">
         Aswin Salomon Raja
        </h1>

        {/* Tagline */}
        <p className="font-body text-xl md:text-2xl text-foreground/80 mb-4 italic">
          "In the game of code, you win or you debug."
        </p>

        {/* Role */}
        <p className="font-display text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-12">
          Full Stack Developer · Creator of Web
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="group border-gradient-gold px-8 py-4 font-display text-sm tracking-widest uppercase transition-all duration-300 hover:glow-gold bg-background"
          >
            <span className="text-gradient-gold group-hover:opacity-80 transition-opacity">
              View My Conquests
            </span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 font-display text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Send a Raven
          </a>
        </div>

        {/* Ornate bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors animate-float cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
