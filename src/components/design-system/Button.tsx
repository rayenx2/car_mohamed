import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'whatsapp';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    icon?: React.ReactNode;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    icon,
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary-blue text-white hover:bg-deep-blue focus:ring-primary-blue shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        secondary: 'bg-white text-deep-blue border-2 border-primary-blue hover:bg-gray-50 focus:ring-primary-blue',
        whatsapp: 'bg-whatsapp-green text-white hover:bg-[#047857] focus:ring-whatsapp-green shadow-whatsapp hover:shadow-whatsapp-hover hover:scale-105',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${widthClass} 
        ${className}
      `}
            {...props}
        >
            {variant === 'whatsapp' && <FaWhatsapp className="mr-2 text-xl" />}
            {icon && variant !== 'whatsapp' && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
