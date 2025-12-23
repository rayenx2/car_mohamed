import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import NorthAfricanPattern from '../components/NorthAfricanPattern';
import {
  FaShip, FaPlane, FaTruck, FaShieldAlt, FaCheckCircle, FaGlobe,
  FaCar, FaSearch, FaFileContract, FaShippingFast, FaUser, FaBuilding,
  FaCarSide, FaUsers, FaInfoCircle, FaWhatsapp, FaMapMarkerAlt
} from 'react-icons/fa';
import { AccordionItem } from '../components/ui/Accordion';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Blue Gradient */}
      <section className="relative pt-32 pb-20 md:pt-40 bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden">
        <NorthAfricanPattern opacity={0.1} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {t('services.summary')}
          </p>
        </div>
      </section>

      {/* ==========================================
          SECTION 1: سيناريوهات التصدير - STATIC CARDS
      ========================================== */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <NorthAfricanPattern opacity={0.03} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('services.scenarios.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* CARD 1: New vs Used (Always Visible) */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCar className="text-2xl md:text-3xl text-blue-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {t('services.scenarios.new')} vs {t('services.scenarios.used')}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* NEW */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                    <FaCarSide className="text-lg text-blue-700" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">{t('services.scenarios.new')}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {t('services.scenarios.vat')}: 0% (export)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {t('services.scenarios.coc')}: Included
                      </span>
                    </li>
                    {getArray('services.scenarios.newBenefits').map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* USED */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                    <FaCar className="text-lg text-gray-600" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">{t('services.scenarios.used')}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {t('services.scenarios.vat')}: 0% (export)
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {t('services.scenarios.coc')}: Available
                      </span>
                    </li>
                    {getArray('services.scenarios.usedBenefits').map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 2: Individual vs Business (Always Visible) */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUsers className="text-2xl md:text-3xl text-blue-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {t('services.scenarios.private')} vs {t('services.scenarios.commercial')}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* INDIVIDUAL */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                    <FaUser className="text-lg text-blue-700" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">{t('services.scenarios.private')}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {getArray('services.scenarios.privateRequirements').map((req, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-gray-600 text-sm leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUSINESS */}
                <div>
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                    <FaBuilding className="text-lg text-gray-600" />
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">{t('services.scenarios.commercial')}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {getArray('services.scenarios.commercialRequirements').map((req, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0 text-sm" />
                        <span className="text-gray-600 text-sm leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logistics Options - Icon Containers */}
      <section className="py-16 bg-white relative overflow-hidden">
        <NorthAfricanPattern opacity={0.03} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('services.logistics.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sea Shipping */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShip className="text-5xl text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.logistics.sea')}</h3>
              <p className="text-gray-600 mb-3">
                {t('services.logistics.seaDescription')}
              </p>
              <p className="text-sm text-gray-500">
                {t('services.logistics.transitTime')}: 3-6 {t('services.logistics.timeUnits.weeks')}
              </p>
            </div>

            {/* Air Shipping */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPlane className="text-5xl text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.logistics.air')}</h3>
              <p className="text-gray-600 mb-3">
                {t('services.logistics.airDescription')}
              </p>
              <p className="text-sm text-gray-500">
                {t('services.logistics.transitTime')}: 3-7 {t('services.logistics.timeUnits.days')}
              </p>
            </div>

            {/* Land Transport */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTruck className="text-5xl text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.logistics.transporter')}</h3>
              <p className="text-gray-600 mb-3">
                {t('services.logistics.transporterDescription')}
              </p>
              <p className="text-sm text-gray-500">
                {t('services.logistics.transitTime')}: 1-3 {t('services.logistics.timeUnits.weeks')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: خدمات إضافية - STATIC GRID
      ========================================== */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <NorthAfricanPattern opacity={0.03} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('services.additionalServices.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {getArray('services.additionalServices.services').map((service, index) => {
              const icons = [FaShieldAlt, FaCheckCircle, FaFileContract, FaGlobe];
              const bgColors = ['bg-blue-100', 'bg-blue-100', 'bg-blue-100', 'bg-blue-100'];
              const iconColors = ['text-blue-700', 'text-blue-700', 'text-blue-700', 'text-blue-700'];
              const IconComponent = icons[index];

              return (
                <div key={service.key} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${bgColors[index]} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`text-xl ${iconColors[index]}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: عمليتنا الكاملة - ACCORDION
      ========================================== */}
      <section className="py-16 bg-white relative overflow-hidden">
        <NorthAfricanPattern opacity={0.03} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {t('services.process.title')}
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            من اختيار المركبات إلى التسليم النهائي، نقدم حلولاً شاملة لاحتياجاتك في تصدير السيارات.
          </p>

          <div className="space-y-4">

            {/* Step 1 */}
            <AccordionItem
              title={t('services.process.steps.chooseCar.title')}
              badge="1"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaSearch className="text-blue-700" />
                    {t('services.process.steps.chooseCar.optionA')}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('services.process.steps.chooseCar.optionADesc')}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-700" />
                    {t('services.process.steps.chooseCar.optionB')}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('services.process.steps.chooseCar.optionBDesc')}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaWhatsapp className="text-blue-700" />
                    {t('services.process.steps.chooseCar.optionC')}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('services.process.steps.chooseCar.optionCDesc')}
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaFileContract className="text-gray-600" />
                    {t('services.process.steps.chooseCar.optionD')}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('services.process.steps.chooseCar.optionDDesc')}
                  </p>
                </div>
              </div>
            </AccordionItem>

            {/* Step 2 */}
            <AccordionItem
              title={t('services.process.steps.checkOffer.title')}
              badge="2"
            >
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-700 p-4 rounded">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaSearch className="text-blue-700" />
                    {t('services.process.steps.checkOffer.physicalInspection')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('services.process.steps.checkOffer.physicalInspectionDesc')}
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-700 p-4 rounded">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <FaCheckCircle className="text-blue-700" />
                    {t('services.process.steps.checkOffer.preCheck')}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t('services.process.steps.checkOffer.preCheckDesc')}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-900 mb-2">{t('services.process.steps.checkOffer.expertise')}</h4>
                  <p className="text-blue-800 text-sm">
                    {t('services.process.steps.checkOffer.expertiseDesc')}
                  </p>
                </div>
              </div>
            </AccordionItem>

            {/* Step 3 */}
            <AccordionItem
              title={t('services.process.steps.contract.title')}
              badge="3"
            >
              <div className="bg-gray-50 border-l-4 border-gray-600 p-4 rounded">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('services.process.steps.contract.description')}
                </p>
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <FaFileContract className="text-gray-600" />
                  {t('services.process.steps.contract.structure')}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {t('services.process.steps.contract.structureDesc')}
                </p>
                <p className="text-gray-600 text-sm">
                  {t('services.process.steps.contract.downPayment')}
                </p>
              </div>
            </AccordionItem>

            {/* Step 4 */}
            <AccordionItem
              title={t('services.process.steps.transport.title')}
              badge="4"
            >
              <div className="bg-gray-50 border-l-4 border-gray-600 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FaTruck className="text-gray-600" />
                  {t('services.process.steps.transport.ourService')}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {t('services.process.steps.transport.ourServiceDesc')}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t('services.process.steps.transport.payment')}
                </p>
              </div>
            </AccordionItem>

            {/* Important Note */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <FaInfoCircle className="text-3xl text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t('services.process.steps.importantNote.title')}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t('services.process.steps.importantNote.description')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
