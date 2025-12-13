import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'slideUp';
  delay?: number;
  duration?: number;
  trigger?: string;
  stagger?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.8,
  trigger = "top 80%",
  stagger = 0
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;
    const children = element.querySelectorAll('.animate-child');

    // Set initial state based on animation type
    const setInitialState = () => {
      switch (animationType) {
        case 'fadeUp':
          gsap.set(element, { opacity: 0, y: 50 });
          if (children.length > 0) {
            gsap.set(children, { opacity: 0, y: 30 });
          }
          break;
        case 'fadeLeft':
          gsap.set(element, { opacity: 0, x: -50 });
          if (children.length > 0) {
            gsap.set(children, { opacity: 0, x: -30 });
          }
          break;
        case 'fadeRight':
          gsap.set(element, { opacity: 0, x: 50 });
          if (children.length > 0) {
            gsap.set(children, { opacity: 0, x: 30 });
          }
          break;
        case 'scale':
          gsap.set(element, { opacity: 0, scale: 0.8 });
          if (children.length > 0) {
            gsap.set(children, { opacity: 0, scale: 0.9 });
          }
          break;
        case 'slideUp':
          gsap.set(element, { opacity: 0, y: 100 });
          if (children.length > 0) {
            gsap.set(children, { opacity: 0, y: 50 });
          }
          break;
      }
    };

    setInitialState();

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: trigger,
        toggleActions: "play none none reverse",
      }
    });

    // Animate main element
    tl.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: duration,
      delay: delay,
      ease: "power2.out"
    });

    // Animate children with stagger
    if (children.length > 0) {
      tl.to(children, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration * 0.8,
        stagger: stagger,
        ease: "power2.out"
      }, "-=0.4");
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animationType, delay, duration, trigger, stagger]);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
};

export default AnimatedSection;
