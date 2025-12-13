import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Set up scroll animations for all sections
    const sections = sectionRefs.current.filter(Boolean);
    
    sections.forEach((section, index) => {
      if (!section) return;

      // Create timeline for this section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        }
      });

      // Different animation types based on section index
      const animationType = index % 3;
      
      switch (animationType) {
        case 0:
          // Fade in from bottom
          tl.fromTo(section, 
            { 
              opacity: 0, 
              y: 50,
              scale: 0.95
            },
            { 
              opacity: 1, 
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out"
            }
          );
          break;
          
        case 1:
          // Slide in from left
          tl.fromTo(section,
            {
              opacity: 0,
              x: -50,
              rotationY: -15
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 0.8,
              ease: "power2.out"
            }
          );
          break;
          
        case 2:
          // Scale and fade
          tl.fromTo(section,
            {
              opacity: 0,
              scale: 0.8,
              rotationX: 10
            },
            {
              opacity: 1,
              scale: 1,
              rotationX: 0,
              duration: 0.8,
              ease: "back.out(1.7)"
            }
          );
          break;
      }

      // Animate child elements with stagger
      const children = section.querySelectorAll('.animate-child');
      if (children.length > 0) {
        tl.fromTo(children,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          },
          "-=0.4"
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addSectionRef = (element: HTMLElement | null, index: number) => {
    sectionRefs.current[index] = element;
  };

  return { addSectionRef };
};

// Smooth scroll utility
export const smoothScrollTo = (targetId: string, offset: number = 0) => {
  const target = document.getElementById(targetId);
  if (target) {
    const targetPosition = target.offsetTop - offset;
    
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: targetPosition, autoKill: false },
      ease: "power2.inOut"
    });
  }
};

// Parallax effect hook
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return elementRef;
};
