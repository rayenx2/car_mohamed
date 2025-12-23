import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCar, FaCalendarAlt, FaGlobe, FaUserTie } from 'react-icons/fa';

const TrustStrip: React.FC = () => {
    const { t, language } = useLanguage();

    const stats = [
        {
            icon: FaCar,
            value: '1000+',
            label: language === 'ar' ? 'سيارة مُصدرة' : 'Cars Exported',
            color: 'blue'
        },
        {
            icon: FaCalendarAlt,
            value: '+20',
            label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience',
            color: 'blue'
        },
        {
            icon: FaGlobe,
            value: '50+',
            label: language === 'ar' ? 'دولة نخدمها' : 'Countries Served',
            color: 'blue'
        },
        {
            icon: FaUserTie,
            value: '100%',
            label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction',
            color: 'blue'
        }
    ];

    const colorClasses = {
        blue: 'text-blue-700'
    };

    return (
        <section className="bg-white py-8 md:py-12 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const colorClass = colorClasses[stat.color as keyof typeof colorClasses];
                        return (
                            <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                        <Icon className={`text-xl md:text-2xl ${colorClass}`} />
                                    </div>
                                </div>
                                <div className={`text-2xl md:text-4xl font-bold mb-1 ${colorClass}`}>
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
