import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import Container from '../components/design-system/Container';
import Button from '../components/design-system/Button';
import SectionCard from '../components/design-system/SectionCard';
import IconContainer from '../components/design-system/IconContainer';
import NorthAfricanPattern from '../components/NorthAfricanPattern';
import TrustStrip from '../components/TrustStrip';

import { FaCar, FaCheckCircle, FaWhatsapp, FaHandshake, FaGlobeAfrica, FaShippingFast, FaFileContract, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import HeroCarousel from '../components/HeroCarousel';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import useVideoAutoplay from '../hooks/useVideoAutoplay';

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
        <>
            <Helmet>
                <title>Export Cars from Germany | International Vehicle Shipping to Tunisia Algeria Morocco | BMW Mercedes Audi Export Service</title>
                <meta name="description" content="Professional car export service from Germany to North Africa and worldwide. Export BMW, Mercedes, Audi, Porsche, VW to Tunisia, Algeria, Morocco. Complete documentation, customs clearance, international shipping. 20+ years experience, 1000+ vehicles exported. Contact +49 176 69495526" />
                <meta name="keywords" content="export cars from Germany, car export service, vehicle export international, export BMW, export Mercedes, export Audi, car export Tunisia, car export Algeria, car export Morocco, German car export, luxury car export, premium vehicle export, international car shipping, vehicle export specialist, car export company, export used cars, car export documentation, vehicle customs clearance, car shipping worldwide, North Africa car export, MENA car export" />
                <link rel="canonical" href="https://ivexportservice.com/" />
            </Helmet>
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

                {/* BRANDS WE EXPORT */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <NorthAfricanPattern opacity={0.03} />
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Premium German Car Brands We Export
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We source and export all major German and European vehicle brands directly from the German market at competitive prices.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                            {[
                                { brand: 'BMW', models: '3 Series, 5 Series, X5, X3, 7 Series' },
                                { brand: 'Mercedes-Benz', models: 'C-Class, E-Class, S-Class, GLC, GLE' },
                                { brand: 'Audi', models: 'A4, A6, Q5, Q7, A8' },
                                { brand: 'Porsche', models: 'Cayenne, Macan, Panamera, 911' },
                                { brand: 'Volkswagen', models: 'Golf, Passat, Tiguan, Touareg' },
                            ].map((item) => (
                                <div key={item.brand} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                                    <FaCar className="text-3xl text-blue-700 mx-auto mb-3" />
                                    <h3 className="font-bold text-gray-900 mb-2">{item.brand} Export</h3>
                                    <p className="text-xs text-gray-500">{item.models}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 mt-8 text-sm">
                            Plus: Opel, Ford, Renault, Peugeot, and all European brands available for export.
                        </p>
                    </Container>
                </section>

                {/* TARGET MARKETS */}
                <section className="py-20 bg-gray-50 relative overflow-hidden">
                    <NorthAfricanPattern opacity={0.03} />
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Export Cars to North Africa &amp; Worldwide
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We specialize in exporting vehicles to North Africa, the MENA region, and worldwide destinations with complete logistics support.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                { country: '🇹🇳 Tunisia', desc: 'Regular car exports to Tunisia with full customs clearance and documentation support.' },
                                { country: '🇩🇿 Algeria', desc: 'Specialized vehicle import services for Algeria including all regulatory compliance.' },
                                { country: '🇲🇦 Morocco', desc: 'Premium German cars exported to Morocco with door-to-door delivery options.' },
                            ].map((market) => (
                                <div key={market.country} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{market.country}</h3>
                                    <p className="text-gray-600 text-sm">{market.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 mt-8 text-sm">
                            Also serving: Middle East, West Africa, Eastern Europe, and all international destinations.
                        </p>
                    </Container>
                </section>

                {/* FAQ SECTION */}
                <section className="py-20 bg-white relative overflow-hidden">
                    <NorthAfricanPattern opacity={0.03} />
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions About Car Export
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Everything you need to know about exporting cars from Germany.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                {
                                    q: 'How to export cars from Germany?',
                                    a: 'Exporting cars from Germany involves selecting a vehicle, completing export documentation, customs clearance, and arranging international shipping. At IV Export Service, we handle the complete process for you — from sourcing the car to delivering it to your destination.'
                                },
                                {
                                    q: 'How much does it cost to export a car from Germany?',
                                    a: 'Export costs depend on the vehicle type, destination country, and shipping method (sea freight, air freight, or land transport). Contact us for a free, personalized quote tailored to your specific requirements.'
                                },
                                {
                                    q: 'Can I export used cars from Germany?',
                                    a: 'Yes! We specialize in exporting both new and used German vehicles internationally. All vehicles are thoroughly inspected before export to ensure quality and compliance with destination country regulations.'
                                },
                                {
                                    q: 'What documents are needed to export a car?',
                                    a: 'Required documents typically include the vehicle title, export customs declaration, certificate of conformity (COC), and shipping documents. We handle all export paperwork on your behalf to ensure a smooth, hassle-free process.'
                                },
                            ].map((faq, idx) => (
                                <details key={idx} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden group">
                                    <summary className="cursor-pointer px-6 py-5 font-semibold text-gray-900 hover:bg-gray-100 transition-colors flex justify-between items-center">
                                        <span>{faq.q}</span>
                                        <FaCheckCircle className="text-blue-600 opacity-0 group-open:opacity-100 transition-opacity flex-shrink-0 ml-4" />
                                    </summary>
                                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </Container>
                </section>

            </div >

        </>
    );
};

export default LandingPage;
