import React, { ReactNode } from 'react';

interface SectionCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({
    children,
    className = '',
    hoverEffect = true
}) => {
    return (
        <div
            className={`
        bg-white 
        border border-gray-200 
        rounded-2xl 
        p-8 
        shadow-card 
        transition-all 
        duration-300 
        ease-in-out
        ${hoverEffect ? 'hover:shadow-card-hover hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

export default SectionCard;
