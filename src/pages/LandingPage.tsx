import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Container from '../components/design-system/Container';
import Button from '../components/design-system/Button';
import SectionCard from '../components/design-system/SectionCard';
import IconContainer from '../components/design-system/IconContainer';
import NorthAfricanPattern from '../components/NorthAfricanPattern';

import { FaCar, FaHandshake, FaGlobeAfrica, FaCheckCircle, FaShippingFast, FaFileContract, FaWhatsapp } from 'react-icons/fa';
import HeroCarousel from '../components/HeroCarousel';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import useVideoAutoplay from '../hooks/useVideoAutoplay';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

import video1 from '../assets/videos/lv_0_20251214222341.mp4';
import video2 from '../assets/videos/lv_0_20250912213631.mp4';
import video3 from '../assets/videos/MP4_20251029_232454VLOG.mp4';

const LandingPage: React.FC = () => {
    const { t, language, isRTL } = useLanguage();
    const navigate = useNavigate();
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const video3Ref = useRef<HTMLVideoElement>(null);
    const [isMuted1, setIsMuted1] = useState(true);
    const [isMuted2, setIsMuted2] = useState(true);
    const [isMuted3, setIsMuted3] = useState(true);

    useVideoAutoplay(video1Ref);
    useVideoAutoplay(video2Ref);
    useVideoAutoplay(video3Ref);

    const toggleMute1 = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted1(!isMuted1);
    };

    const toggleMute2 = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted2(!isMuted2);
    };

    const toggleMute3 = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted3(!isMuted3);
    };

    const heroImage = '/WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg'; // Using the logo as placeholder/hero or maybe background? 
    // Wait, the prompt said logo is at that path. For hero background we might need a car image.
    // I will use a gradient or the wallpaper component's background style if possible, but let's stick to standard Tailwind for now.

    return (
        <div className={`min-h-screen bg-gray-50 text-gray-900 font-sans ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>


            {/* Hero Section */}
            <HeroCarousel />

            {/* Services Section */}
            <section className="py-20 bg-white relative">
                <NorthAfricanPattern opacity={0.03} />
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-h2 mb-4 text-deep-blue">
                            {language === 'ar' ? 'خدماتنا المتميزة' : 'Our Premium Services'}
                        </h2>
                        <p className="text-body text-gray-600">
                            {language === 'ar'
                                ? 'نقدم لك تجربة استيراد خالية من المتاعب، مع الاهتمام بجميع التفاصيل القانونية واللوجستية.'
                                : 'We provide a hassle-free import experience, handling all legal and logistical details.'}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <SectionCard className="text-center group">
                            <IconContainer icon={<FaCar />} variant="primary" className="mx-auto mb-6 group-hover:bg-deep-blue" />
                            <h3 className="text-h3 mb-3">{language === 'ar' ? 'فحص السيارات' : 'Vehicle Inspection'}</h3>
                            <p className="text-gray-600">
                                {language === 'ar'
                                    ? 'فحص شامل للسيارة للتأكد من حالتها الفنية وخلوها من الحوادث.'
                                    : 'Comprehensive vehicle inspection to ensure technical condition and accident-free status.'}
                            </p>
                        </SectionCard>

                        <SectionCard className="text-center group">
                            <IconContainer icon={<FaFileContract />} variant="primary" className="mx-auto mb-6 group-hover:bg-deep-blue" />
                            <h3 className="text-h3 mb-3">{language === 'ar' ? 'تخليص جمركي' : 'Customs & Paperwork'}</h3>
                            <p className="text-gray-600">
                                {language === 'ar'
                                    ? 'تجهيز جميع الأوراق اللازمة للتصدير والتخليص الجمركي في ألمانيا.'
                                    : 'Preparation of all necessary documentation for export and customs clearance in Germany.'}
                            </p>
                        </SectionCard>

                        <SectionCard className="text-center group">
                            <IconContainer icon={<FaShippingFast />} variant="primary" className="mx-auto mb-6 group-hover:bg-deep-blue" />
                            <h3 className="text-h3 mb-3">{language === 'ar' ? 'شحن سريع' : 'Fast Shipping'}</h3>
                            <p className="text-gray-600">
                                {language === 'ar'
                                    ? 'خيارات شحن متعددة وآمنة إلى جميع موانئ شمال أفريقيا.'
                                    : 'Multiple secure shipping options to all major North African ports.'}
                            </p>
                        </SectionCard>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us / Trust Section */}
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-4xl font-bold text-primary-blue mb-2">5+</div>
                                    <div className="text-sm text-gray-600">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-4xl font-bold text-primary-blue mb-2">500+</div>
                                    <div className="text-sm text-gray-600">{language === 'ar' ? 'سيارة تم تصديرها' : 'Cars Exported'}</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-2">
                                    <div className="text-4xl font-bold text-whatsapp-green mb-2">100%</div>
                                    <div className="text-sm text-gray-600">{language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction'}</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-h2 text-deep-blue mb-6">
                                {language === 'ar' ? 'لماذا تختار IV Export؟' : 'Why Choose IV Export?'}
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    { ar: 'شفافية كاملة في الأسعار', en: 'Full price transparency' },
                                    { ar: 'دعم مباشر عبر واتساب', en: 'Direct WhatsApp support' },
                                    { ar: 'خبرة في السوق الألماني', en: 'German market expertise' },
                                    { ar: 'نتحدث لغتك (العربية، الإنجليزية، الفرنسية)', en: 'We speak your language' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <IconContainer icon={<FaCheckCircle />} variant="whatsapp" size="sm" className="flex-shrink-0 w-6 h-6 text-sm mt-1" />
                                        <span className="text-body-lg text-gray-700">{language === 'ar' ? item.ar : item.en}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <Button variant="primary" onClick={() => navigate('/about')}>
                                    {language === 'ar' ? 'تعرف علينا أكثر' : 'Learn More About Us'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="text-center mt-12 pt-12 border-t border-gray-200">
                    <p className="text-lg text-gray-700 mb-6">
                        {t('section.cta.question')}
                    </p>
                    <Button
                        variant="whatsapp"
                        onClick={() => window.open('https://wa.me/4917669495526', '_blank')}
                        className="inline-flex items-center gap-3"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span>{t('cta.whatsapp.action')}</span>
                    </Button>
                </div>
            </section>

            {/* INTRODUCE OUR SERVICE (VIDEO 3) */}
            <section className="bg-white py-16">
                <Container>
                    <div className="text-center mb-10">
                        <h2 className="text-h2 text-deep-blue mb-4">
                            {language === 'ar' ? 'مقدمة عن خدماتنا' : 'Introducing Our Service'}
                        </h2>
                        <div className="max-w-2xl mx-auto">
                            <p className="text-body-lg text-gray-600">
                                {language === 'ar'
                                    ? 'تعرف على خدماتنا المتميزة وكيف نضمن لك تجربة استيراد سلسة وآمنة من ألمانيا.'
                                    : 'Discover how we provide you with the best car import experience from Germany.'}
                            </p>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto group cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-blue/10">
                        <video
                            ref={video3Ref}
                            className="w-full h-auto"
                            playsInline
                            muted={isMuted3}
                            loop
                            preload="metadata"
                            onClick={toggleMute3}
                        >
                            <source src={video3} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 right-4 z-10 transition-opacity duration-300 opacity-70 hover:opacity-100">
                            <button
                                onClick={toggleMute3}
                                className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg"
                                aria-label={isMuted3 ? "Unmute" : "Mute"}
                            >
                                {isMuted3 ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
                            </button>
                        </div>
                    </div>
                </Container>
                <div className="text-center mt-12 pt-12 border-t border-gray-200">
                    <p className="text-lg text-gray-700 mb-6">
                        {t('section.cta.question')}
                    </p>
                    <Button
                        variant="whatsapp"
                        onClick={() => window.open('https://wa.me/4917669495526', '_blank')}
                        className="inline-flex items-center gap-3"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span>{t('cta.whatsapp.action')}</span>
                    </Button>
                </div>
            </section>

            {/* CLIENT TESTIMONIAL VIDEO SECTION (VIDEO 1) */}
            <section className="bg-gray-50 py-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-h2 text-deep-blue mb-4">
                            {language === 'ar' ? 'آراء عملائنا' : 'Client Testimonials'}
                        </h2>
                        <p className="text-body-lg text-gray-600">
                            {language === 'ar'
                                ? 'اكتشف لماذا يثق بنا مئات العملاء لاستيراد سياراتهم.'
                                : 'See why hundreds of clients trust us with their car exports.'}
                        </p>
                    </div>

                    <div className="max-w-md mx-auto group cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <video
                            ref={video1Ref}
                            className="w-full h-auto"
                            playsInline
                            muted={isMuted1}
                            loop
                            preload="metadata"
                            onClick={toggleMute1}
                        >
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute bottom-4 right-4 z-10 transition-opacity duration-300 opacity-70 hover:opacity-100">
                            <button
                                onClick={toggleMute1}
                                className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg"
                                aria-label={isMuted1 ? "Unmute" : "Mute"}
                            >
                                {isMuted1 ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
                            </button>
                        </div>
                    </div>
                </Container>
                <div className="text-center mt-12 pt-12 border-t border-gray-200">
                    <p className="text-lg text-gray-700 mb-6">
                        {t('section.cta.question')}
                    </p>
                    <Button
                        variant="whatsapp"
                        onClick={() => window.open('https://wa.me/4917669495526', '_blank')}
                        className="inline-flex items-center gap-3"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span>{t('cta.whatsapp.action')}</span>
                    </Button>
                </div>
            </section>

            {/* INTRODUCING MOHAMED (VIDEO 2) */}
            <section className="bg-white py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Video */}
                        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group max-w-md mx-auto lg:max-w-full">
                            <video
                                ref={video2Ref}
                                className="w-full h-auto"
                                playsInline
                                muted={isMuted2}
                                loop
                                preload="metadata"
                                onClick={toggleMute2}
                            >
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-4 right-4 z-10 transition-opacity duration-300 opacity-70 hover:opacity-100">
                                <button
                                    onClick={toggleMute2}
                                    className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg"
                                    aria-label={isMuted2 ? "Unmute" : "Mute"}
                                >
                                    {isMuted2 ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-h2 text-deep-blue mb-6">
                                {language === 'ar' ? 'تعرف على محمد' : 'Introducing Mohamed'}
                            </h2>
                            <p className="text-body-lg text-gray-600 mb-8">
                                {language === 'ar'
                                    ? 'خبيرك الموثوق للإرشاد في كل خطوة من رحلة شراء سيارتك، لضمان الجودة وراحة البال.'
                                    : 'The expert who will guide you through your car buying journey from A to Z, ensuring quality and safety.'}
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <IconContainer icon={<FaCheckCircle />} variant="secondary" size="sm" />
                                    <span className="text-gray-700 text-lg font-medium">{language === 'ar' ? 'عناية شخصية' : 'Personal Attention'}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <IconContainer icon={<FaHandshake />} variant="secondary" size="sm" />
                                    <span className="text-gray-700 text-lg font-medium">{language === 'ar' ? 'خبير سيارات محترف' : 'Extensive Car Expertise'}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <IconContainer icon={<FaGlobeAfrica />} variant="secondary" size="sm" />
                                    <span className="text-gray-700 text-lg font-medium">{language === 'ar' ? 'شريك موثوق في ألمانيا' : 'Your Trusted Partner in Germany'}</span>
                                </li>
                            </ul>
                            <div className="flex gap-4">
                                <Button variant="whatsapp" onClick={() => window.open('https://wa.me/4917669495526', '_blank')}>
                                    {language === 'ar' ? 'تحدث مع محمد' : 'Chat with Mohamed'}
                                </Button>
                                <Button variant="secondary" onClick={() => navigate('/about')}>
                                    {language === 'ar' ? 'المزيد عنا' : 'More About Us'}
                                </Button>
                            </div>
                        </div>
                    </div>

                </Container>
                <div className="text-center mt-12 pt-12 border-t border-gray-200">
                    <p className="text-lg text-gray-700 mb-6">
                        {t('section.cta.question')}
                    </p>
                    <Button
                        variant="whatsapp"
                        onClick={() => window.open('https://wa.me/4917669495526', '_blank')}
                        className="inline-flex items-center gap-3"
                    >
                        <FaWhatsapp className="text-2xl" />
                        <span>{t('cta.whatsapp.action')}</span>
                    </Button>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-deep-blue text-white relative overflow-hidden">
                <NorthAfricanPattern opacity={0.1} />
                <Container className="relative z-10 text-center">
                    <h2 className="text-display mb-6">
                        {language === 'ar' ? 'جاهز لاستيراد سيارتك القادمة؟' : 'Ready to Import Your Next Car?'}
                    </h2>
                    <p className="text-body-lg text-blue-100 max-w-2xl mx-auto mb-10">
                        {language === 'ar'
                            ? 'تواصل معنا اليوم واحصل على استشارة مجانية. فريقنا جاهز لمساعدتك في إيجاد السيارة المثالية.'
                            : 'Contact us today for a free consultation. Our team is ready to help you find the perfect car.'}
                    </p>
                    <Button variant="whatsapp" size="lg" className="text-xl" onClick={() => window.open('https://wa.me/4917669495526', '_blank')}>
                        {language === 'ar' ? 'ابدأ المحادثة عبر واتساب' : 'Start WhatsApp Chat'}
                    </Button>
                </Container>
            </section>
        </div >
    );
};

export default LandingPage;
