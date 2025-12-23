import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface NorthAfricanPatternProps {
    className?: string;
    opacity?: number;
}

const NorthAfricanPattern: React.FC<NorthAfricanPatternProps> = ({
    className = '',
    opacity = 0.05
}) => {
    const { language } = useLanguage();



    return (
        <div
            className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}
            style={{ opacity }}
        >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="zellige-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
                        <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="currentColor" className="text-primary-blue" />
                        <rect x="0" y="0" width="100" height="100" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#zellige-pattern)" />
            </svg>
        </div>
    );
};

export default NorthAfricanPattern;
