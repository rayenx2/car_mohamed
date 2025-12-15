import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCar, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Stock: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    // Determine language-specific message or default to English
    // Implementation note: Ideally this should come from translations or the sticky component logic, 
    // but here we follow the prompt's structure which implies generic handling or hardcoded values.
    // I will use a generic message here or the one from translations if available.
    // Given the prompt didn't specify the exact click handler logic for *this* button beyond "handleWhatsApp",
    // I'll replicate the logic to open the chat.
    window.open('https://wa.me/4917669495526', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:Iv.exportservice@gmail.com');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {t('stock.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('stock.availability.message')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-8 
                          flex items-center justify-center">
            <FaCar className="text-4xl text-primary-blue" />
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t('stock.contact.title')}
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('stock.contact.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-3 bg-whatsapp-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-2xl" />
              <span>{t('contact.whatsapp')}</span>
            </button>
            <button
              onClick={handleEmail}
              className="inline-flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaEnvelope className="text-xl" />
              <span>{t('contact.email')}</span>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              {t('stock.response.time')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
