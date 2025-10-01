import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ukFlag from '../image/Flag_of_the_United_Kingdom..png';
import saudiFlag from '../image/Flag_of_Saudi_Arabia.svg.png';
import franceFlag from '../image/Flag_of_France.svg.png';
import spainFlag from '../image/Flag_of_Spain.svg.png';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: 'En', flag: ukFlag },
    { code: 'ar', name: 'Ar', flag: saudiFlag },
    { code: 'fr', name: 'Fr', flag: franceFlag },
    { code: 'es', name: 'Es', flag: spainFlag },
  ] as const;

  const handleLanguageChange = (langCode: 'en' | 'ar' | 'fr' | 'es') => {
    console.log('Language change requested:', langCode);
    setLanguage(langCode);
    // Force a small delay to ensure state updates
    setTimeout(() => {
      console.log('Language changed to:', langCode);
    }, 100);
  };

  return (
    <div className="px-4 py-2">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        {languages.map((lang, index) => (
          <React.Fragment key={lang.code}>
            <button
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center space-x-2 px-2 py-1 rounded transition-colors duration-200 ${
                language === lang.code 
                  ? 'text-gray-900 bg-gray-100 border border-gray-300' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
              aria-label={`Switch to ${lang.name}`}
            >
              <img 
                src={lang.flag} 
                alt={`${lang.name} flag`}
                className="w-5 h-4 object-cover rounded-sm"
              />
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
            {index < languages.length - 1 && (
              <span className="text-gray-400 text-sm">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
