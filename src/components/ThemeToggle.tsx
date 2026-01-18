import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
    
    // Dispatch custom event for snow effect
    window.dispatchEvent(new CustomEvent("themeChange", { detail: { isDark: newIsDark } }));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-border bg-card hover:bg-muted transition-all duration-300 group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Embrace the Light (Summer is Coming)" : "Return to Darkness (Winter is Coming)"}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 text-primary transition-all duration-300 ${
            isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          }`}
          size={20}
        />
        <Moon 
          className={`absolute inset-0 text-primary transition-all duration-300 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
          }`}
          size={20}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
