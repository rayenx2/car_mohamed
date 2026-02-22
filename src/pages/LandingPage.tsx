import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Container from '../components/design-system/Container';
import Button from '../components/design-system/Button';
import SectionCard from '../components/design-system/SectionCard';
import IconContainer from '../components/design-system/IconContainer';
import NorthAfricanPattern from '../components/NorthAfricanPattern';
import TrustStrip from '../components/TrustStrip';

import { FaCar, FaHandshake, FaGlobeAfrica, FaCheckCircle, FaShippingFast, FaFileContract, FaWhatsapp } from 'react-icons/fa';
import HeroCarousel from '../components/HeroCarousel';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import useVideoAutoplay from '../hooks/useVideoAutoplay';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

// Cloudinary CDN video URLs - permanent, optimized delivery
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dzaomtxj8/video/upload';

// Videos with automatic quality and format optimization
const testimonialVideo = `${CLOUDINARY_BASE}/q_auto,f_auto/lv_0_20251214222341_sywsnm.mp4`;
const mohamedIntroVideo = `${CLOUDINARY_BASE}/q_auto,f_auto/lv_0_20250912213631_yxhqcc.mp4`;
const processVideo = `${CLOUDINARY_BASE}/q_auto,f_auto/MP4_20251029_232454VLOG_1_dkoagn.mp4`;

const LandingPage: React.FC = () => {
    const { t, isRTL } = useLanguage();
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

    const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        console.error('Video failed to load:', e.currentTarget.src);
    };

    return (
        <div className={`min-h-screen bg-gray-50 text-gray-900 font-sans ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <HeroCarousel />
            {/* Trust Strip */}
            <TrustStrip />

            {/* Services Section */}
            <section className="py-20 bg-white relative">
                <NorthAfricanPattern opacity={0.03} />
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-h2 mb-4 text-deep-blue">
                            {t('landing.services.title')}
                        </h2>
                        <p className="text-body text-gray-600">
                            {t('landing.services.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <SectionCard className="text-center group">
                            <IconContainer icon={<FaCar />} variant="primary" className="mx-auto mb-6 group-hover:bg-deep-blue" />
                            <h3 className="text-h3 mb-3">{t('landing.services.inspection.title')}</h3>
                            <p className="text-gray-600">
                                {t('landing.services.inspection.description')}
                            </p>
                        </SectionCard>

                        <SectionCard className="text-center group">
                            <IconContainer icon={<FaFileContract />} variant="primary" className="mx-auto mb-6 group-hover:bg-deep-blue" />
                            <h3 className="text-h3 mb-3">{t('landing.services.customs.title')}</h3>
                            <p className="text-gray-600">
                                {t('landing.services.customs.description')}
                            </p>
                        </SectionCard>

                        <SectionCard className="text-center group">
                            <IconContainer icon={<FaShippingFast />} variant="primary" className="mx-auto mb-6 group-hover:bg-deep-blue" />
                            <h3 className="text-h3 mb-3">{t('landing.services.shipping.title')}</h3>
                            <p className="text-gray-600">
                                {t('landing.services.shipping.description')}
                            </p>
                        </SectionCard>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us / Trust Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-4xl font-bold text-primary-blue mb-2">20+</div>
                                    <div className="text-sm text-gray-600">{t('landing.whyChoose.stats.experience')}</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="text-4xl font-bold text-primary-blue mb-2">1000+</div>
                                    <div className="text-sm text-gray-600">{t('landing.whyChoose.stats.exported')}</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 col-span-2">
                                    <div className="text-4xl font-bold text-whatsapp-green mb-2">100%</div>
                                    <div className="text-sm text-gray-600">{t('landing.whyChoose.stats.satisfaction')}</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-h2 text-deep-blue mb-6">
                                {t('landing.whyChoose.title')}
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    t('landing.whyChoose.transparency'),
                                    t('landing.whyChoose.whatsapp'),
                                    t('landing.whyChoose.expertise'),
                                    t('landing.whyChoose.language'),
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <IconContainer icon={<FaCheckCircle />} variant="whatsapp" size="sm" className="flex-shrink-0 w-6 h-6 text-sm mt-1" />
                                        <span className="text-body-lg text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <Button variant="primary" onClick={() => navigate('/about')}>
                                    {t('landing.whyChoose.learnMore')}
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
            <section className="bg-white py-16 relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <Container>
                    <div className="text-center mb-10">
                        <h2 className="text-h2 text-deep-blue mb-4">
                            {t('landing.introService.title')}
                        </h2>
                        <div className="max-w-2xl mx-auto">
                            <p className="text-body-lg text-gray-600">
                                {t('landing.introService.description')}
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
                            onError={handleVideoError}
                        >
                            <source src={processVideo} type="video/mp4" />
                            {t('common.videoUnsupported')}
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
            <section className="bg-gray-50 py-20 relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-h2 text-deep-blue mb-4">
                            {t('landing.testimonials.title')}
                        </h2>
                        <p className="text-body-lg text-gray-600">
                            {t('landing.testimonials.subtitle')}
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
                            onError={handleVideoError}
                        >
                            <source src={testimonialVideo} type="video/mp4" />
                            {t('common.videoUnsupported')}
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
            <section className="bg-white py-20 relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
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
                                crossOrigin="anonymous"
                                onClick={toggleMute2}
                                onError={handleVideoError}
                            >
                                <source src={mohamedIntroVideo} type="video/mp4" />
                                {t('common.videoUnsupported')}
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
                                {t('landing.mohamed.title')}
                            </h2>
                            <p className="text-body-lg text-gray-600 mb-8">
                                {t('landing.mohamed.description')}
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <IconContainer icon={<FaCheckCircle />} variant="secondary" size="sm" />
                                    <span className="text-gray-700 text-lg font-medium">{t('landing.mohamed.point1')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <IconContainer icon={<FaHandshake />} variant="secondary" size="sm" />
                                    <span className="text-gray-700 text-lg font-medium">{t('landing.mohamed.point2')}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <IconContainer icon={<FaGlobeAfrica />} variant="secondary" size="sm" />
                                    <span className="text-gray-700 text-lg font-medium">{t('landing.mohamed.point3')}</span>
                                </li>
                            </ul>
                            <div className="flex gap-4">
                                <Button variant="whatsapp" onClick={() => window.open('https://wa.me/4917669495526', '_blank')}>
                                    {t('landing.mohamed.chatCta')}
                                </Button>
                                <Button variant="secondary" onClick={() => navigate('/about')}>
                                    {t('landing.mohamed.aboutCta')}
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


        </div >
    );
};

export default LandingPage;
