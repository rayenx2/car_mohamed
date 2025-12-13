import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top when route changes
    gsap.to(window, {
      duration: 0.8,
      scrollTo: { y: 0, autoKill: false },
      ease: "power2.out"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
