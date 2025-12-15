import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './design-system/Button';
import Container from './design-system/Container';

// Import local images directly
import wallpaper1 from '../assets/backgrounds/wallpaper1.png';
import wallpaper2 from '../assets/backgrounds/wallpaper2.png';
import wallpaper3 from '../assets/backgrounds/wallpaper3.png';
import wallpaper4 from '../assets/backgrounds/wallpaper4.png';
import wallpaper5 from '../assets/backgrounds/wallpaper5.png';

gsap.registerPlugin(ScrollTrigger);

const backgrounds = [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5];

const HeroCarousel: React.FC = () => {
    const { t, language, isRTL } = useLanguage();
    const [currentBg, setCurrentBg] = useState(0);
    const [nextBg, setNextBg] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Auto-advance loop
    useEffect(() => {
        const interval = setInterval(() => {
            setNextBg((prev) => (prev + 1) % backgrounds.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    // Handle background transition
    useEffect(() => {
        setCurrentBg(nextBg);
    }, [nextBg]);

    // Initial Animation on Mount
    useEffect(() => {
        const tl = gsap.timeline();

        // Animate content elements
        if (contentRef.current) {
            const logo = contentRef.current.querySelector('.hero-logo');
            const title = contentRef.current.querySelector('.hero-title');
            const subtitle = contentRef.current.querySelector('.hero-subtitle');
            const buttons = contentRef.current.querySelectorAll('.hero-btn');
            const trust = contentRef.current.querySelector('.hero-trust');

            tl.fromTo(logo,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
            )
                .fromTo(title,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
                    "-=0.7"
                )
                .fromTo(subtitle,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                    "-=0.9"
                )
                .fromTo(buttons,
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
                    "-=0.6"
                )
                .fromTo(trust,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.6 },
                    "-=0.4"
                );
        }

        // Parallax effect on scroll
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
                y: "30%", // Move background slower than scroll
                ease: "none"
            });

            // Fade out content on scroll
            if (contentRef.current) {
                gsap.to(contentRef.current, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "50% top",
                        scrub: true
                    },
                    opacity: 0,
                    y: -50,
                    ease: "none"
                });
            }
        }
    }, []);

    // Reset loop
    useEffect(() => {
        // Ken Burns effect logic handled via CSS classes using keyframes
        // but verify transitions here if needed
    }, [currentBg]);

    return (
        <div ref={containerRef} className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden bg-gray-900">
            {/* Background Layers */}
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    ref={el => bgRefs.current[index] = el}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${index === currentBg ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    {/* Ken Burns effect applied when active */}
                    <div className={`absolute inset-0 bg-black/50 ${index === currentBg ? 'animate-ken-burns' : ''}`}></div>
                </div>
            ))}

            {/* Content Overlay */}
            <div ref={contentRef} className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                <Container className="max-w-5xl">
                    {/* Logo */}
                    <img
                        src="/WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg"
                        alt="IV Export Logo"
                        className="hero-logo w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 rounded-full shadow-2xl border-4 border-white/20"
                    />

                    {/* Headline */}
                    <h1 className="hero-title text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        {language === 'ar' ? 'خدمة تصدير السيارات الألمانية المتميزة' : 'IV Export Service - Premium German Car Exports'}
                    </h1>

                    {/* Subheadline */}
                    <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-md">
                        {language === 'ar'
                            ? 'نضمن لك الجودة والموثوقية في كل خطوة من خطوات استيراد سيارتك.'
                            : 'We ensure quality and reliability in every step of importing your car.'}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <div className="hero-btn">
                            <Button
                                variant="whatsapp"
                                size="lg"
                                className="w-full sm:w-auto text-lg px-8 shadow-xl hover:shadow-2xl"
                                onClick={() => window.open('https://wa.me/4917612345678', '_blank')}
                            >
                                {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
                            </Button>
                        </div>
                        <div className="hero-btn">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto text-lg px-8 bg-white/10 text-white border-white/40 hover:bg-white/20 backdrop-blur-sm"
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            >
                                {language === 'ar' ? 'تصفح الخدمات' : 'View Services'}
                            </Button>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="hero-trust grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-white/90 max-w-2xl mx-auto border-t border-white/20 pt-8">
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-3xl font-bold text-white">20+</span>
                            <span className="text-sm md:text-base">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-3xl font-bold text-white">1000+</span>
                            <span className="text-sm md:text-base">{language === 'ar' ? 'سيارة' : 'Cars Exported'}</span>
                        </div>
                        <div className="hidden md:flex flex-col">
                            <span className="text-2xl md:text-3xl font-bold text-white">50+</span>
                            <span className="text-sm md:text-base">{language === 'ar' ? 'دولة' : 'Countries'}</span>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
                <FaArrowRight className="transform rotate-90 text-2xl" />
            </div>

            <style>{`
                @keyframes ken-burns {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.05); }
                }
                .animate-ken-burns {
                    animation: ken-burns 6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default HeroCarousel;
