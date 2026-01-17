import { useEffect, useState } from "react";
import { Bird } from "lucide-react";

interface FlyingRavenProps {
  isFlying: boolean;
  onComplete: () => void;
}

const FlyingRaven = ({ isFlying, onComplete }: FlyingRavenProps) => {
  const [position, setPosition] = useState({ x: 50, y: 100 });
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [wingFlap, setWingFlap] = useState(false);

  useEffect(() => {
    if (!isFlying) return;

    // Wing flapping animation
    const wingInterval = setInterval(() => {
      setWingFlap(prev => !prev);
    }, 150);

    // Flight path animation
    const startTime = Date.now();
    const duration = 3000;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Curved path across the screen
      const x = 50 + progress * (window.innerWidth + 100);
      const y = 100 - Math.sin(progress * Math.PI) * 200 - progress * 50;
      
      // Rotation follows the path
      const angle = Math.atan2(-200 * Math.cos(progress * Math.PI) - 50, window.innerWidth + 100) * (180 / Math.PI);
      
      setPosition({ x, y });
      setRotation(angle - 90);
      setOpacity(progress > 0.8 ? 1 - (progress - 0.8) / 0.2 : 1);

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

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Trail effect */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: position.x - (i + 1) * 30,
            top: position.y + (i + 1) * 5,
            opacity: opacity * (0.5 - i * 0.1),
            transform: `rotate(${rotation}deg) scale(${1 - i * 0.15})`,
            transition: 'all 0.1s ease-out',
          }}
        >
          <Bird className="w-6 h-6 text-primary/30" />
        </div>
      ))}

      {/* Main raven */}
      <div
        className="absolute transition-transform"
        style={{
          left: position.x,
          top: position.y,
          opacity,
          transform: `rotate(${rotation}deg) scaleY(${wingFlap ? 1 : 0.7})`,
        }}
      >
        <div className="relative">
          {/* Raven body */}
          <Bird 
            className={`w-12 h-12 text-foreground drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-transform duration-150 ${
              wingFlap ? 'scale-y-110' : 'scale-y-90'
            }`}
          />
          
          {/* Wing glow effect */}
          <div 
            className="absolute inset-0 blur-md"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>

      {/* Feathers falling */}
      {isFlying && [...Array(8)].map((_, i) => (
        <div
          key={`feather-${i}`}
          className="absolute animate-fall"
          style={{
            left: position.x - Math.random() * 100,
            top: position.y + Math.random() * 50,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          <div 
            className="w-2 h-4 bg-gradient-to-b from-foreground/40 to-transparent rotate-45"
            style={{
              clipPath: 'ellipse(50% 100% at 50% 0%)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FlyingRaven;
