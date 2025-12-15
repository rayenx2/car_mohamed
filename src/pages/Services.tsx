import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaShip, FaPlane, FaTruck, FaShieldAlt, FaCheckCircle, FaFileAlt, FaGlobe, FaCar, FaSearch, FaFileContract, FaShippingFast } from 'react-icons/fa';
import IconContainer from '../components/design-system/IconContainer';

const Services: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.summary')}
          </p>
        </div>

        {/* Export Scenarios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('services.scenarios.title')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* New vs Used */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                {t('services.scenarios.new')} vs {t('services.scenarios.used')}
              </h3>

              <div className="bg-blue-50/40 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-center text-blue-900 mb-4">
                  {t('services.scenarios.new')}
                </h4>
                <ul className="space-y-2 text-blue-800 text-center">
                  <li>• {t('services.scenarios.vat')}: 0% (export)</li>
                  <li>• {t('services.scenarios.coc')}: Included</li>
                  {getArray('services.scenarios.newBenefits').map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50/40 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-center text-green-900 mb-4">
                  {t('services.scenarios.used')}
                </h4>
                <ul className="space-y-2 text-green-800 text-center">
                  <li>• {t('services.scenarios.vat')}: 0% (export)</li>
                  <li>• {t('services.scenarios.coc')}: Available</li>
                  {getArray('services.scenarios.usedBenefits').map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Private vs Commercial */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
                {t('services.scenarios.private')} vs {t('services.scenarios.commercial')}
              </h3>

              <div className="bg-purple-50/40 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-center text-purple-900 mb-4">
                  {t('services.scenarios.private')}
                </h4>
                <ul className="space-y-2 text-purple-800 text-center">
                  {getArray('services.scenarios.privateRequirements').map((requirement, index) => (
                    <li key={index}>• {requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50/40 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-center text-orange-900 mb-4">
                  {t('services.scenarios.commercial')}
                </h4>
                <ul className="space-y-2 text-orange-800 text-center">
                  {getArray('services.scenarios.commercialRequirements').map((requirement, index) => (
                    <li key={index}>• {requirement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logistics Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('services.logistics.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50/40 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <IconContainer icon={<FaShip />} variant="primary" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                {t('services.logistics.sea')}
              </h3>
              <p className="text-blue-800 mb-4">
                {t('services.logistics.seaDescription')}
              </p>
              <div className="text-sm text-blue-700">
                {t('services.logistics.transitTime')}: 3-6 weeks
              </div>
            </div>

            <div className="bg-green-50/40 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <IconContainer icon={<FaPlane />} variant="whatsapp" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-900">
                {t('services.logistics.air')}
              </h3>
              <p className="text-green-800 mb-4">
                {t('services.logistics.airDescription')}
              </p>
              <div className="text-sm text-green-700">
                {t('services.logistics.transitTime')}: 3-7 days
              </div>
            </div>

            <div className="bg-orange-50/40 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <IconContainer icon={<FaTruck />} variant="secondary" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">
                {t('services.logistics.transporter')}
              </h3>
              <p className="text-orange-800 mb-4">
                {t('services.logistics.transporterDescription')}
              </p>
              <div className="text-sm text-orange-700">
                {t('services.logistics.transitTime')}: 1-3 weeks
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            {t('services.additionalServices.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getArray('services.additionalServices.services').map((service, index) => {
              const icons = [FaShieldAlt, FaCheckCircle, FaFileAlt, FaGlobe];
              const colors = ['blue', 'green', 'orange', 'purple'];
              const IconComponent = icons[index];
              const color = colors[index];

              return (
                <div key={service.key} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-${color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`text-xl text-${color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DI-Auto Detailed Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('services.process.title')}
          </h2>

          <div className="space-y-8">
            {/* Step 1: Choose your car */}
            <div className="bg-blue-50/40 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl font-bold mr-6 border border-blue-200">
                  <FaCar className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">{t('services.process.steps.chooseCar.title')}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">{t('services.process.steps.chooseCar.optionA')}</h4>
                  <p className="text-gray-600">{t('services.process.steps.chooseCar.optionADesc')}</p>

                  <h4 className="font-semibold text-gray-800">{t('services.process.steps.chooseCar.optionB')}</h4>
                  <p className="text-gray-600">{t('services.process.steps.chooseCar.optionBDesc')}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">{t('services.process.steps.chooseCar.optionC')}</h4>
                  <p className="text-gray-600">{t('services.process.steps.chooseCar.optionCDesc')}</p>

                  <h4 className="font-semibold text-gray-800">{t('services.process.steps.chooseCar.optionD')}</h4>
                  <p className="text-gray-600">{t('services.process.steps.chooseCar.optionDDesc')}</p>
                </div>
              </div>
            </div>

            {/* Step 2: Check the offer */}
            <div className="bg-green-50/40 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl font-bold mr-6 border border-green-200">
                  <FaSearch className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold text-green-900">{t('services.process.steps.checkOffer.title')}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">{t('services.process.steps.checkOffer.preCheck')}</h4>
                  <p className="text-gray-600">{t('services.process.steps.checkOffer.preCheckDesc')}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">{t('services.process.steps.checkOffer.physicalInspection')}</h4>
                  <p className="text-gray-600">{t('services.process.steps.checkOffer.physicalInspectionDesc')}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">{t('services.process.steps.checkOffer.expertise')}</h4>
                <p className="text-green-800">{t('services.process.steps.checkOffer.expertiseDesc')}</p>
              </div>
            </div>

            {/* Step 3: Contract + Down payment */}
            <div className="bg-purple-50/40 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl font-bold mr-6 border border-purple-200">
                  <FaFileContract className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-900">{t('services.process.steps.contract.title')}</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">{t('services.process.steps.contract.description')}</p>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{t('services.process.steps.contract.structure')}</h4>
                  <p className="text-purple-800">{t('services.process.steps.contract.structureDesc')}</p>
                </div>

                <p className="text-gray-700">{t('services.process.steps.contract.downPayment')}</p>
              </div>
            </div>

            {/* Step 4: Transport & Shipping */}
            <div className="bg-orange-50/40 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-2xl font-bold mr-6 border border-orange-200">
                  <FaShippingFast className="text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold text-orange-900">{t('services.process.steps.transport.title')}</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">{t('services.process.steps.transport.description')}</p>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">{t('services.process.steps.transport.ourService')}</h4>
                  <p className="text-orange-800">{t('services.process.steps.transport.ourServiceDesc')}</p>
                </div>

                <p className="text-gray-700">{t('services.process.steps.transport.payment')}</p>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{t('services.process.steps.importantNote.title')}</h3>
              <p className="text-blue-800 text-lg">
                {t('services.process.steps.importantNote.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
