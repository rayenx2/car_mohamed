import React from 'react';

interface IconContainerProps {
    icon: React.ReactElement;
    variant?: 'primary' | 'secondary' | 'success' | 'whatsapp';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

const IconContainer: React.FC<IconContainerProps> = ({
    icon,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}) => {
    const sizeClasses = {
        sm: 'w-12 h-12 text-xl',
        md: 'w-16 h-16 text-2xl',
        lg: 'w-20 h-20 text-3xl'
    };

    const variantClasses = {
        primary: 'bg-blue-100 text-blue-700',
        secondary: 'bg-gray-100 text-gray-600',
        success: 'bg-green-100 text-green-600',
        whatsapp: 'bg-green-100 text-green-600'
    };

    return (
        <div
            className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
        rounded-full flex items-center justify-center
        transition-all duration-300 hover:scale-110
        ${onClick ? 'cursor-pointer hover:shadow-lg' : ''}
      `}
            onClick={onClick}
        >
            {/* Clone element to force proper sizing class if needed, or rely on text size inheritance */}
            {React.cloneElement(icon, { className: 'w-[1em] h-[1em]' })}
        </div>
    );
};

export default IconContainer;
