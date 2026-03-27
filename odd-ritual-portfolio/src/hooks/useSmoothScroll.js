import { useEffect } from 'react';
import Lenis from 'lenis';

const useSmoothScroll = () => {
  useEffect(() => {
    // Detect if mobile/tablet
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: isMobile ? 1 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile, // Disable smooth wheel on mobile for better performance
      wheelMultiplier: isMobile ? 0.8 : 1,
      smoothTouch: true, // Enable smooth touch
      touchMultiplier: 2,
      infinite: false,
    });

    // Request animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
