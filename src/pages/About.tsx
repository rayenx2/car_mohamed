import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
    FaAward, FaShieldAlt, FaGlobe, FaUsers, FaCar, FaHandshake,
    FaCheckCircle, FaTruck, FaFileContract,
    FaPercentage, FaGlobeAmericas, FaSearch
} from 'react-icons/fa';
import NorthAfricanPattern from '../components/NorthAfricanPattern';

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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Blue Gradient */}
            <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden">
                <NorthAfricanPattern opacity={0.1} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('about.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                        {t('about.hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Our Story - Clean Layout */}
            <section className="py-16 bg-white relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-50 border-l-4 border-blue-700 rounded-lg p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                                <FaAward className="text-4xl text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">{t('about.story.title')}</h2>
                        </div>

                        <div className="prose prose-lg max-w-none space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                {t('about.story.description1')}
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                {t('about.story.description2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics - Icon Containers */}
            <section className="py-16 bg-gray-50 relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaPercentage className="text-3xl text-blue-700" />
                            </div>
                            <div className="text-4xl font-bold text-blue-700 mb-2">{t('about.stats.secure')}</div>
                            <div className="text-sm text-gray-600">{t('about.stats.secureLabel')}</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaGlobeAmericas className="text-3xl text-blue-700" />
                            </div>
                            <div className="text-4xl font-bold text-blue-700 mb-2">{t('about.stats.countries')}</div>
                            <div className="text-sm text-gray-600">{t('about.stats.countriesLabel')}</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaCar className="text-3xl text-blue-700" />
                            </div>
                            <div className="text-4xl font-bold text-blue-700 mb-2">{t('about.stats.vehicles')}</div>
                            <div className="text-sm text-gray-600">{t('about.stats.vehiclesLabel')}</div>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaUsers className="text-3xl text-blue-700" />
                            </div>
                            <div className="text-4xl font-bold text-blue-700 mb-2">{t('about.stats.clients')}</div>
                            <div className="text-sm text-gray-600">{t('about.stats.clientsLabel')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Blue Icons */}
            <section className="py-16 bg-white relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                        {t('about.values.title')}
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaUsers className="text-5xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.values.service.title')}</h3>
                            <p className="text-gray-600 text-sm">
                                {t('about.values.service.description')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-5xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.values.quality.title')}</h3>
                            <p className="text-gray-600 text-sm">
                                {t('about.values.quality.description')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaGlobe className="text-5xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.values.expertise.title')}</h3>
                            <p className="text-gray-600 text-sm">
                                {t('about.values.expertise.description')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaShieldAlt className="text-5xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.values.trust.title')}</h3>
                            <p className="text-gray-600 text-sm">
                                {t('about.values.trust.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Pillars - Colored Cards */}
            <section className="py-16 bg-gray-50 relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                        {t('about.foundation.title')}
                    </h2>
                    <p className="text-center text-gray-600 mb-12">
                        {t('about.foundation.description')}
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {getArray('about.foundation.pillars').map((pillar, index) => {
                            const icons = [FaCar, FaHandshake, FaTruck];
                            const bgColors = ['bg-blue-100', 'bg-blue-100', 'bg-blue-100'];
                            const iconColors = ['text-blue-700', 'text-blue-700', 'text-blue-700'];
                            const IconComponent = icons[index];

                            return (
                                <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow">
                                    <div className={`w-16 h-16 ${bgColors[index]} rounded-full flex items-center justify-center mb-6`}>
                                        <IconComponent className={`text-3xl ${iconColors[index]}`} />
                                    </div>
                                    <p className="text-gray-700 font-semibold leading-relaxed">
                                        {pillar}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-16 bg-white relative overflow-hidden">
                <NorthAfricanPattern opacity={0.03} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
                        {t('about.services.title')}
                    </h2>
                    <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
                        {t('about.services.description')}
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {getArray('about.services.features').map((feature, index) => {
                            const icons = [FaSearch, FaFileContract, FaTruck, FaUsers];
                            const IconComponent = icons[index];

                            return (
                                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="text-xl text-gray-600" />
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


        </div>
    );
}