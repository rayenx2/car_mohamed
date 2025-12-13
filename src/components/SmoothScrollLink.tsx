import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { gsap } from 'gsap';

interface SmoothScrollLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
  smooth?: boolean;
  offset?: number;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  to,
  children,
  smooth = true,
  offset = 0,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an internal link (starts with #), handle smooth scroll
    if (to.startsWith('#')) {
      e.preventDefault();
      const targetId = to.substring(1);
      const target = document.getElementById(targetId);
      
      if (target) {
        const targetPosition = target.offsetTop - offset;
        
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetPosition, autoKill: false },
          ease: "power2.inOut"
        });
      }
    }
    // For regular routes, let React Router handle it normally
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;
