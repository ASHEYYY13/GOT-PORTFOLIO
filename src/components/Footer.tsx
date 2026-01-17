import { Sword } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        {/* Decorative sword */}
        <div className="flex justify-center mb-6">
          <Sword className="w-6 h-6 text-primary/60 rotate-90" />
        </div>

        {/* Quote */}
        <p className="font-body italic text-muted-foreground mb-6">
          "When you play the game of development, you ship or you pivot."
        </p>

        {/* Copyright */}
        <p className="font-display text-xs text-muted-foreground/60 tracking-widest uppercase">
          © {new Date().getFullYear()} · Built with Fire & Blood · All Rights Reserved
        </p>

        {/* Bottom ornament */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
