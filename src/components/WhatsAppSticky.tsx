import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppSticky: React.FC = () => {
    const { language, t } = useLanguage();

    const messages = {
        en: "Hello! I'm interested in your car export services.",
        ar: "مرحباً! أنا مهتم بخدمات تصدير السيارات.",
        fr: "Bonjour! Je suis intéressé par vos services.",
        es: "¡Hola! Estoy interesado en sus servicios."
    };

    const handleClick = () => {
        const message = encodeURIComponent(messages[language as keyof typeof messages] || messages['en']);
        const phoneNumber = '4917669495526';
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="
                fixed z-50
                w-14 h-14 md:w-16 md:h-16
                bg-green-600 hover:bg-green-700
                rounded-full
                shadow-2xl hover:shadow-green-600/50
                flex items-center justify-center
                transition-all duration-300 hover:scale-110
                animate-pulse-subtle
                bottom-20 right-4
                md:bottom-8 md:right-8
            "
            style={{
                bottom: 'calc(5rem + env(safe-area-inset-bottom))',
                right: 'calc(1rem + env(safe-area-inset-right))'
            }}
            aria-label={t('whatsapp.contact') || "Contact on WhatsApp"}
        >
            <FaWhatsapp className="text-white text-2xl md:text-3xl" />
        </button>
    );
};

export default WhatsAppSticky;
