import { useState, useRef, useEffect } from "react";
import epicIntro from "@/assets/epic-intro.mpeg.mp3";
import { Sword } from "lucide-react";

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  const [isEntering, setIsEntering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // const audioContextRef = useRef<AudioContext | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // const playEpicIntro = async () => {
  //   try {
  //     // Create Web Audio API context for epic intro sound
  //     audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
  //     const ctx = audioContextRef.current;

  //     // Create epic medieval intro using Web Audio synthesis
  //     const now = ctx.currentTime;
  //     const duration = 4;

  //     // Deep drum hits
  //     for (let i = 0; i < 4; i++) {
  //       const drumOsc = ctx.createOscillator();
  //       const drumGain = ctx.createGain();
  //       drumOsc.type = 'sine';
  //       drumOsc.frequency.setValueAtTime(60, now + i * 0.5);
  //       drumOsc.frequency.exponentialRampToValueAtTime(30, now + i * 0.5 + 0.3);
  //       drumGain.gain.setValueAtTime(0.8, now + i * 0.5);
  //       drumGain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.5 + 0.4);
  //       drumOsc.connect(drumGain);
  //       drumGain.connect(ctx.destination);
  //       drumOsc.start(now + i * 0.5);
  //       drumOsc.stop(now + i * 0.5 + 0.5);
  //     }

  //     // Low brass-like tone (D minor chord feel)
  //     const bassFreqs = [73.42, 87.31, 110]; // D2, F2, A2
  //     bassFreqs.forEach((freq, index) => {
  //       const osc = ctx.createOscillator();
  //       const gain = ctx.createGain();
  //       osc.type = 'sawtooth';
  //       osc.frequency.value = freq;
  //       gain.gain.setValueAtTime(0, now + 0.2);
  //       gain.gain.linearRampToValueAtTime(0.15, now + 0.8);
  //       gain.gain.linearRampToValueAtTime(0.1, now + 2.5);
  //       gain.gain.linearRampToValueAtTime(0, now + duration);
        
  //       // Low pass filter for warmth
  //       const filter = ctx.createBiquadFilter();
  //       filter.type = 'lowpass';
  //       filter.frequency.value = 400;
        
  //       osc.connect(filter);
  //       filter.connect(gain);
  //       gain.connect(ctx.destination);
  //       osc.start(now + 0.2);
  //       osc.stop(now + duration);
  //     });

  //     // String-like tremolo (creates tension)
  //     const stringOsc = ctx.createOscillator();
  //     const stringGain = ctx.createGain();
  //     const tremolo = ctx.createOscillator();
  //     const tremoloGain = ctx.createGain();
      
  //     stringOsc.type = 'sawtooth';
  //     stringOsc.frequency.value = 293.66; // D4
  //     tremolo.frequency.value = 8;
  //     tremoloGain.gain.value = 0.3;
      
  //     tremolo.connect(tremoloGain);
  //     tremoloGain.connect(stringGain.gain);
  //     stringGain.gain.setValueAtTime(0, now + 1);
  //     stringGain.gain.linearRampToValueAtTime(0.1, now + 1.5);
  //     stringGain.gain.linearRampToValueAtTime(0, now + duration);
      
  //     const stringFilter = ctx.createBiquadFilter();
  //     stringFilter.type = 'lowpass';
  //     stringFilter.frequency.value = 1200;
      
  //     stringOsc.connect(stringFilter);
  //     stringFilter.connect(stringGain);
  //     stringGain.connect(ctx.destination);
  //     stringOsc.start(now + 1);
  //     stringOsc.stop(now + duration);
  //     tremolo.start(now + 1);
  //     tremolo.stop(now + duration);

  //     // Final dramatic chord hit
  //     const finalChord = [146.83, 174.61, 220, 293.66]; // D3, F3, A3, D4
  //     finalChord.forEach((freq) => {
  //       const osc = ctx.createOscillator();
  //       const gain = ctx.createGain();
  //       osc.type = 'sawtooth';
  //       osc.frequency.value = freq;
  //       gain.gain.setValueAtTime(0, now + 3);
  //       gain.gain.linearRampToValueAtTime(0.2, now + 3.1);
  //       gain.gain.linearRampToValueAtTime(0, now + duration + 1);
        
  //       const filter = ctx.createBiquadFilter();
  //       filter.type = 'lowpass';
  //       filter.frequency.value = 800;
        
  //       osc.connect(filter);
  //       filter.connect(gain);
  //       gain.connect(ctx.destination);
  //       osc.start(now + 3);
  //       osc.stop(now + duration + 1);
  //     });

  //     setIsPlaying(true);
      
  //     // Transition after music
  //     setTimeout(() => {
  //       setIsEntering(true);
  //       setTimeout(onEnter, 1500);
  //     }, 3500);

  //   } catch (error) {
  //     console.error('Audio error:', error);
  //     // Fallback: just transition without audio
  //     setIsEntering(true);
  //     setTimeout(onEnter, 1500);
  //   }
  // };

 
const handleEnter = () => {
  if (isPlaying) return;

  setIsPlaying(true);

  const audio = new Audio(epicIntro);
  audioRef.current = audio;
  audio.volume = 0.9;
  audio.play();

  audio.onended = () => {
    setIsEntering(true);
    setTimeout(onEnter, 1500);
  };
};

  // useEffect(() => {
  //   return () => {
  //     if (audioContextRef.current) {
  //       audioContextRef.current.close();
  //     }
  //   };
  // }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-1000 ${
        isEntering ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 texture-stone opacity-20" />
        
        {/* Floating embers */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center z-10">
        {/* Crossed swords emblem */}
        <div className="relative mb-8">
          <Sword className="absolute left-1/2 -translate-x-8 w-16 h-16 text-primary/80 rotate-[-30deg]" />
          <Sword className="absolute left-1/2 translate-x-[-8px] w-16 h-16 text-primary/80 rotate-[30deg] scale-x-[-1]" />
          <div className="h-16" />
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient-gold mb-4 tracking-wider">
          The Developer's Chronicle
        </h1>
        
        <p className="font-body text-lg text-muted-foreground mb-12 italic">
          "When you play the game of code, you win or you debug."
        </p>

        {/* Enter button */}
        <button
          onClick={handleEnter}
          disabled={isPlaying}
          className={`group relative px-12 py-4 font-display text-lg tracking-[0.3em] uppercase transition-all duration-500 ${
            isPlaying 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:scale-105 cursor-pointer'
          }`}
        >
          {/* Button border animation */}
          <span className="absolute inset-0 border-2 border-primary/50 group-hover:border-primary transition-colors" />
          <span className="absolute inset-[3px] border border-primary/30 group-hover:border-primary/50 transition-colors" />
          
          {/* Glow effect */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10 blur-xl" />
          
          <span className="relative text-primary group-hover:text-primary/90 flex items-center gap-4">
            {isPlaying ? (
              <>
                <span className="animate-pulse">⚔</span>
                Entering the Realm...
                <span className="animate-pulse">⚔</span>
              </>
            ) : (
              <>
                <span className="group-hover:animate-pulse">⚔</span>
                Enter the Realm
                <span className="group-hover:animate-pulse">⚔</span>
              </>
            )}
          </span>
        </button>

        {/* Subtitle hint */}
        <p className="mt-8 text-sm text-muted-foreground/50 font-body animate-pulse">
          {isPlaying ? 'The gates are opening...' : 'Click to begin your journey'}
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-primary/30" />
    </div>
  );
};

export default IntroScreen;
