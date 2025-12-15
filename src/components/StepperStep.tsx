import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown } from 'react-icons/fa';

interface StepperStepProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullContent: React.ReactNode;
  button?: {
    text: string;
    link: string;
    color?: string;
  };
  isLast?: boolean;
}

const StepperStep: React.FC<StepperStepProps> = ({
  stepNumber,
  icon,
  title,
  shortDescription,
  fullContent,
  button,
  isLast = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && chevronRef.current) {
      if (isExpanded) {
        gsap.to(contentRef.current, {
          height: 'auto',
          duration: 0.4,
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
          duration: 0.4,
          ease: 'power2.inOut'
        });
        gsap.to(chevronRef.current, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.inOut'
        });
      }
    }
  }, [isExpanded]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getButtonColor = () => {
    switch (button?.color) {
      case 'blue': return 'bg-gray-700 hover:bg-gray-800';
      case 'green': return 'bg-gray-600 hover:bg-gray-700';
      case 'orange': return 'bg-gray-500 hover:bg-gray-600';
      default: return 'bg-gray-700 hover:bg-gray-800';
    }
  };

  return (
    <div className="relative">
      {/* Step Content */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
        {/* Step Header */}
        <div className="flex items-start space-x-4">
          {/* Icon Circle */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center">
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>

            {/* Show More/Less Button */}
            <button
              onClick={toggleExpanded}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              <div ref={chevronRef} className="transform transition-transform duration-300">
                <FaChevronDown className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Expandable Content */}
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: 0 }}
        >
          <div className="pt-4 border-t border-gray-100 mt-4">
            {fullContent}

            {/* Action Button */}
            {button && (
              <div className="mt-6">
                <a
                  href={button.link}
                  className={`inline-block text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getButtonColor()}`}
                >
                  {button.text}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Connecting Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-6 left-6 w-px h-16 bg-gray-200 z-10"></div>
      )}
    </div>
  );
};

export default StepperStep;
