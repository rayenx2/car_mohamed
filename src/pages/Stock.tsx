import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCar, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import NorthAfricanPattern from '../components/NorthAfricanPattern';

const Stock: React.FC = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/4917669495526', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:Iv.exportservice@gmail.com');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Blue Gradient */}
      <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden">
        <NorthAfricanPattern opacity={0.1} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('stock.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t('stock.availability.message')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative overflow-hidden">
        <NorthAfricanPattern opacity={0.03} />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100 relative overflow-hidden">
            {/* Subtle Pattern in White Card too? Optional but nice. Let's stick to Hero for now as per "watermark" usually being background */}

            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-8 
                          flex items-center justify-center relative z-10">
              <FaCar className="text-4xl text-primary-blue" />
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800 relative z-10">
              {t('stock.contact.title')}
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto relative z-10">
              {t('stock.contact.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
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

            <div className="mt-12 pt-8 border-t border-gray-200 relative z-10">
              <p className="text-sm text-gray-500">
                {t('stock.response.time')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stock;
