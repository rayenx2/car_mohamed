import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import Button from './design-system/Button';
import Container from './design-system/Container';

// Import local images directly
import wallpaper1 from '../assets/backgrounds/hero-bg-1.png';
import wallpaper2 from '../assets/backgrounds/hero-bg-2.png';
import wallpaper3 from '../assets/backgrounds/hero-bg-3.png';
import wallpaper4 from '../assets/backgrounds/hero-bg-4.png';
// Using wallpaper1 as valid 5th element since user only provided 4
import wallpaper5 from '../assets/backgrounds/hero-bg-1.png';

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

            if (logo) {
                tl.fromTo(logo,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
                );
            }

            tl.fromTo(title,
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
                );
        }
    }, []);

    return (
        <section
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* Background Images */}
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    ref={el => bgRefs.current[index] = el}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: index === currentBg ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: 0
                    }}
                >
                    <img
                        src={bg}
                        alt="Hero background"
                        loading={index === 0 ? "eager" : "lazy"}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: window.innerWidth < 768
                            ? 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.55) 100%)'
                            : 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
                        zIndex: 1
                    }} />
                </div>
            ))}

            {/* Content */}
            <div ref={contentRef} style={{
                position: 'relative',
                zIndex: 20,
                width: '100%',
                maxWidth: '1200px',
                padding: '0 1rem',
                textAlign: 'center'
            }}>
                <Container className="w-full max-w-4xl mx-auto">
                    {/* Logo - Hidden on mobile */}
                    <div className="hidden md:block hero-logo mb-8">
                        <img
                            src="/WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg"
                            alt="IV Export Logo"
                            className="w-32 h-32 mx-auto rounded-full shadow-2xl border-4 border-white/20"
                        />
                    </div>

                    {/* Headline */}
                    <h1 className="hero-title text-white font-bold text-center mb-4 md:mb-6 text-2xl leading-tight sm:text-3xl md:text-5xl lg:text-7xl drop-shadow-lg">
                        {language === 'ar' ? 'خدمة تصدير السيارات الألمانية المتميزة' : 'IV Export Service - Premium German Car Exports'}
                    </h1>

                    {/* Subheadline */}
                    <p className="hero-subtitle text-white/90 text-center mb-8 max-w-2xl mx-auto text-sm leading-relaxed px-4 sm:text-base md:text-xl lg:text-2xl drop-shadow-md">
                        {language === 'ar'
                            ? 'نضمن لك الجودة والموثوقية في كل خطوة من خطوات استيراد سياراتك.'
                            : 'We ensure quality and reliability in every step of importing your car.'}
                    </p>

                    {/* CTA Buttons - Stacked on mobile */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto md:max-w-none">
                        <div className="hero-btn w-full md:w-auto">
                            <Button
                                variant="whatsapp"
                                size="lg"
                                className="w-full md:w-auto text-base md:text-lg px-8 py-4 shadow-xl hover:shadow-2xl min-h-[56px] flex items-center justify-center gap-2"
                                onClick={() => window.open('https://wa.me/4917669495526', '_blank')}
                            >
                                <FaWhatsapp className="text-2xl" />
                                {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
                            </Button>
                        </div>
                        <div className="hero-btn w-full md:w-auto">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full md:w-auto text-base md:text-lg px-8 py-4 bg-white/20 text-white border-2 border-white/60 hover:bg-white/30 backdrop-blur-sm min-h-[56px]"
                                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                            >
                                {language === 'ar' ? 'تصفح الخدمات' : 'View Services'}
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50 hidden md:block">
                <FaArrowRight className="transform rotate-90 text-2xl" />
            </div>
        </section>
    );
};

export default HeroCarousel;
