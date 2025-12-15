import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppSticky: React.FC = () => {
    const { language } = useLanguage();

    const messages = {
        en: "Hello! I'm interested in your car export services. Can you provide more information?",
        ar: "مرحباً! أنا مهتم بخدمات تصدير السيارات الخاصة بكم. هل يمكنكم تقديم المزيد من المعلومات؟",
        fr: "Bonjour! Je suis intéressé par vos services d'exportation de voitures. Pouvez-vous fournir plus d'informations?",
        es: "¡Hola! Estoy interesado en sus servicios de exportación de automóviles. ¿Pueden proporcionar más información?"
    };

    const handleClick = () => {
        // Default to English if language not found
        const message = encodeURIComponent(messages[language as keyof typeof messages] || messages['en']);
        window.open(`https://wa.me/4917669495526?text=${message}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-[1000] w-16 h-16 bg-whatsapp-green hover:bg-green-700 
                 rounded-full shadow-2xl flex items-center justify-center
                 transition-all duration-300 hover:scale-110 animate-pulse-subtle group"
            aria-label="Contact via WhatsApp"
        >
            <div className="absolute inset-0 bg-whatsapp-green rounded-full animate-ping opacity-75"></div>
            <FaWhatsapp className="text-white text-3xl relative z-10" />

            {/* Tooltip (Optional, kept from previous version for better UX if desired, or removed if strictly following prompt. 
          The prompt didn't strictly forbid it, but provided a simpler component. I will stick to the prompt's cleaner version but kept the Z-index higher).
      */}
        </button>
    );
};

export default WhatsAppSticky;
