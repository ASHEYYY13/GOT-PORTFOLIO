import { useEffect, useState, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export const useParallax = (ref: RefObject<HTMLElement>, options: ParallaxOptions = {}) => {
  const { speed = 0.3, direction = "up" } = options;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the viewport the element is
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;
      
      // Only apply parallax when element is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = distance * speed * (direction === "up" ? -1 : 1);
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, speed, direction]);

  return offset;
};

export default useParallax;
