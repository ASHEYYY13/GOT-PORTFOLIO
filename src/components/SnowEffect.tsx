import { useState, useEffect, useCallback } from "react";

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const SnowEffect = () => {
  const [isActive, setIsActive] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  const generateSnowflakes = useCallback(() => {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 50; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 5 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }
    setSnowflakes(flakes);
  }, []);

  useEffect(() => {
    // Check initial theme
    const isLight = document.documentElement.classList.contains("light");
    setIsActive(isLight);
    if (isLight) generateSnowflakes();

    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent<{ isDark: boolean }>) => {
      const shouldShowSnow = !e.detail.isDark;
      setIsActive(shouldShowSnow);
      if (shouldShowSnow) generateSnowflakes();
    };

    window.addEventListener("themeChange", handleThemeChange as EventListener);
    return () => window.removeEventListener("themeChange", handleThemeChange as EventListener);
  }, [generateSnowflakes]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Easter egg message */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center animate-fade-in">
        <p className="font-display text-sm text-muted-foreground tracking-widest opacity-60">
          ❄ Summer has come... but Winter is never far ❄
        </p>
      </div>
      
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-foreground/80"
            style={{
              boxShadow: `0 0 ${flake.size * 2}px hsl(var(--foreground) / 0.3)`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SnowEffect;
