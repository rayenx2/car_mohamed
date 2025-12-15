import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    placeholder?: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    placeholder = '/placeholder.svg', // Ensure this exists or use a data URI
    className = '',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '50px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Try to use WebP version if basic src is provided? 
    // For now keeping it simple as per request, just lazy loading the provided src.

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder / Loading State */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}

            {isVisible && (
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`
            transition-opacity duration-500 ease-in-out
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${className}
          `}
                    {...props}
                />
            )}

            {/* Invisible placeholder to maintain aspect ratio if needed, or stick to simple img approach */}
            {!isVisible && (
                <img ref={imgRef} src={placeholder} alt={alt} className={`opacity-0 ${className}`} />
            )}
        </div>
    );
};

export default LazyImage;
