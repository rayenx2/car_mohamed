import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown } from 'react-icons/fa';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
  titleClassName?: string;
  icon?: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultExpanded = false,
  className = '',
  titleClassName = '',
  icon
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && chevronRef.current) {
      // Set initial state immediately for defaultExpanded
      if (defaultExpanded && isExpanded) {
        gsap.set(contentRef.current, { height: 'auto' });
        gsap.set(chevronRef.current, { rotation: 180 });
      } else if (isExpanded) {
        gsap.to(contentRef.current, {
          height: 'auto',
          duration: 0.5,
          ease: 'power2.inOut'
        });
        gsap.to(chevronRef.current, {
          rotation: 180,
          duration: 0.3,
          ease: 'power2.inOut'
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        });
        gsap.to(chevronRef.current, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.inOut'
        });
      }
    }
  }, [isExpanded, defaultExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      <button
        onClick={toggleExpanded}
        className={`w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between ${titleClassName}`}
      >
        <div className="flex items-center space-x-3">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <h3 className="text-lg font-semibold text-gray-800 text-left">{title}</h3>
        </div>
        <div ref={chevronRef} className="flex-shrink-0">
          <FaChevronDown className="w-5 h-5 text-gray-600" />
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: defaultExpanded ? 'auto' : (isExpanded ? 'auto' : 0) }}
      >
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
