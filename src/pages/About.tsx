import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaAward, FaShieldAlt, FaGlobe, FaUsers, FaCar, FaHandshake, FaCheckCircle, FaTruck, FaFileContract, FaPhone, FaEnvelope } from 'react-icons/fa';
import IconContainer from '../components/design-system/IconContainer';

export default function About() {
    const { t, getArray, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <div className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading translations...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t('about.hero.title')}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {t('about.hero.subtitle')}
                    </p>
                </div>

                {/* Company Overview */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 mb-16 border border-blue-100">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                {t('about.story.description1')}
                            </p>
                            <p className="text-gray-700">
                                {t('about.story.description2')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <IconContainer icon={<FaAward />} variant="primary" size="lg" className="w-32 h-32 text-4xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">{t('about.stats.clients')}</div>
                        <div className="text-gray-600">{t('about.stats.clientsLabel')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">{t('about.stats.vehicles')}</div>
                        <div className="text-gray-600">{t('about.stats.vehiclesLabel')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">{t('about.stats.countries')}</div>
                        <div className="text-gray-600">{t('about.stats.countriesLabel')}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-600 mb-2">{t('about.stats.secure')}</div>
                        <div className="text-gray-600">{t('about.stats.secureLabel')}</div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('about.values.title')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <IconContainer icon={<FaShieldAlt />} variant="primary" size="lg" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.trust.title')}</h3>
                            <p className="text-gray-600">{t('about.values.trust.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <IconContainer icon={<FaGlobe />} variant="whatsapp" size="lg" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.expertise.title')}</h3>
                            <p className="text-gray-600">{t('about.values.expertise.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <IconContainer icon={<FaCheckCircle />} variant="secondary" size="lg" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.quality.title')}</h3>
                            <p className="text-gray-600">{t('about.values.quality.description')}</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <IconContainer icon={<FaUsers />} variant="secondary" size="lg" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('about.values.service.title')}</h3>
                            <p className="text-gray-600">{t('about.values.service.description')}</p>
                        </div>
                    </div>
                </div>

                {/* Business Foundation */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-16 border border-gray-100">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t('about.foundation.title')}</h2>
                    <p className="text-lg text-gray-700 text-center mb-8 max-w-4xl mx-auto">
                        {t('about.foundation.description')}
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {getArray('about.foundation.pillars').map((pillar, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {index === 0 && <FaCar className="text-2xl text-blue-600" />}
                                    {index === 1 && <FaHandshake className="text-2xl text-blue-600" />}
                                    {index === 2 && <FaTruck className="text-2xl text-blue-600" />}
                                </div>
                                <p className="text-gray-700">{pillar}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Overview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">{t('about.services.title')}</h2>
                    <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
                        {t('about.services.description')}
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {getArray('about.services.features').map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaFileContract className="text-xl text-green-600" />
                                </div>
                                <p className="text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
                    <p className="text-xl mb-8 opacity-90">
                        {t('about.cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+4917669495526"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                        >
                            <FaPhone className="mr-2" />
                            {t('about.cta.phone')}
                        </a>
                        <a
                            href="mailto:Iv.exportservice@gmail.com"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors"
                        >
                            <FaEnvelope className="mr-2" />
                            {t('about.cta.email')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}