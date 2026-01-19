import { useEffect, useState } from "react";

interface FlyingRavenProps {
  isFlying: boolean;
  onComplete: () => void;
}

// Custom SVG raven silhouette for a realistic flying look
const RavenSVG = ({ wingUp }: { wingUp: boolean }) => (
  <svg 
    viewBox="0 0 100 60" 
    className="w-20 h-12"
    style={{ 
      filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.4))',
    }}
  >
    {/* Body */}
    <ellipse cx="50" cy="35" rx="20" ry="12" className="fill-foreground" />
    
    {/* Head */}
    <circle cx="75" cy="30" r="10" className="fill-foreground" />
    
    {/* Beak */}
    <polygon points="85,30 95,32 85,34" className="fill-primary" />
    
    {/* Eye */}
    <circle cx="78" cy="28" r="2" className="fill-primary" />
    
    {/* Tail */}
    <polygon points="25,30 10,25 10,35 15,40 25,38" className="fill-foreground" />
    
    {/* Left Wing */}
    <path 
      d={wingUp 
        ? "M 35 35 Q 20 5, 5 10 Q 15 20, 30 30 Z" 
        : "M 35 35 Q 20 45, 5 50 Q 15 45, 30 38 Z"
      }
      className="fill-foreground"
      style={{ transition: 'd 0.15s ease-in-out' }}
    />
    
    {/* Right Wing */}
    <path 
      d={wingUp 
        ? "M 55 35 Q 40 5, 25 10 Q 35 20, 50 30 Z" 
        : "M 55 35 Q 40 45, 25 50 Q 35 45, 50 38 Z"
      }
      className="fill-foreground"
      style={{ transition: 'd 0.15s ease-in-out' }}
    />
  </svg>
);

const FlyingRaven = ({ isFlying, onComplete }: FlyingRavenProps) => {
  const [position, setPosition] = useState({ x: -100, y: 0 });
  const [wingUp, setWingUp] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isFlying) {
      // Reset position when not flying
      setPosition({ x: -100, y: window.innerHeight });
      return;
    }

    // Start from bottom-left
    setPosition({ x: -50, y: window.innerHeight - 100 });
    setOpacity(1);

    // Wing flapping animation - faster for realistic flight
    const wingInterval = setInterval(() => {
      setWingUp(prev => !prev);
    }, 120);

    // Flight path animation - 6 seconds
    const startTime = Date.now();
    const duration = 6000;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth diagonal path from bottom-left to top-right
      const startX = -50;
      const startY = window.innerHeight - 100;
      const endX = window.innerWidth + 100;
      const endY = -50;
      
      // Add slight wave motion for natural flight
      const waveAmplitude = 30;
      const waveFrequency = 3;
      const wave = Math.sin(progress * Math.PI * waveFrequency) * waveAmplitude;
      
      const x = startX + (endX - startX) * progress;
      const y = startY + (endY - startY) * progress + wave;
      
      setPosition({ x, y });
      
      // Fade out in the last 15% of the journey
      if (progress > 0.85) {
        setOpacity(1 - (progress - 0.85) / 0.15);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        clearInterval(wingInterval);
        onComplete();
      }
    };

    requestAnimationFrame(animate);

    return () => {
      clearInterval(wingInterval);
    };
  }, [isFlying, onComplete]);

  if (!isFlying) return null;

  // Calculate angle for diagonal flight (bottom-left to top-right = roughly -35 degrees)
  const flightAngle = -35;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Trail effect - ghostly ravens following */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: position.x - (i + 1) * 40,
            top: position.y + (i + 1) * 25,
            opacity: opacity * (0.3 - i * 0.07),
            transform: `rotate(${flightAngle}deg) scale(${0.8 - i * 0.15})`,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
          }}
        >
          <RavenSVG wingUp={!wingUp} />
        </div>
      ))}

      {/* Main raven */}
      <div
        className="absolute"
        style={{
          left: position.x,
          top: position.y,
          opacity,
          transform: `rotate(${flightAngle}deg)`,
        }}
      >
        <RavenSVG wingUp={wingUp} />
        
        {/* Glow effect behind the raven */}
        <div 
          className="absolute inset-0 -z-10 blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 60%)',
            transform: 'scale(2)',
          }}
        />
      </div>

      {/* Feathers falling along the path */}
      {isFlying && [...Array(6)].map((_, i) => (
        <div
          key={`feather-${i}`}
          className="absolute animate-feather-fall"
          style={{
            left: position.x - 20 - Math.random() * 60,
            top: position.y + 30 + Math.random() * 40,
            animationDelay: `${i * 0.4}s`,
            opacity: opacity * 0.6,
          }}
        >
          <div 
            className="w-2 h-5 bg-gradient-to-b from-foreground/50 to-transparent"
            style={{
              clipPath: 'ellipse(40% 100% at 50% 0%)',
              transform: `rotate(${45 + Math.random() * 30}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FlyingRaven;