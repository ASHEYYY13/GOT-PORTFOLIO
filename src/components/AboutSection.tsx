import { Shield, Sword, Crown } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="text-primary w-10 h-10" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            The Legend
          </h2>
          <div className="divider-ornate w-48 mx-auto mb-6" />
          <p className="font-display text-muted-foreground tracking-widest text-sm uppercase">
            A Chronicle of the Developer
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Sigil/Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-glow-pulse" />

              {/* Sigil frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 border-gradient-gold rounded-full flex items-center justify-center bg-card">
                <div className="absolute inset-4 border border-primary/30 rounded-full" />
                <div className="text-center p-8">
                  <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-display text-xl text-gradient-gold">
                    House
                  </p>
                  <p className="font-display text-3xl font-bold text-foreground">
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/90 leading-relaxed first-letter:text-5xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              In the realm of code, I build clean, scalable, and user-focused
              digital experiences, turning ideas into reliable applications. I’m
              a full-stack developer who values clarity, performance, and
              maintainable design.
            </p>

            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              I work with JavaScript, TypeScript, React, Angular, and Java
              Spring Boot, and I enjoy solving problems through structured
              thinking and efficient implementation. My approach blends strong
              frontend fundamentals with solid backend development.
            </p>

            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              From creating responsive interfaces to designing robust APIs
              backed by MySQL, I take ownership of my work and focus on
              delivering quality results. I continuously improve my skills
              through real-world projects and problem-solving practice.
            </p>

            {/* House Words */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Sword className="w-5 h-5 text-primary" />
                <p className="font-display text-primary tracking-widest text-sm uppercase">
                  Our Code Does Not Sow Bugs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
