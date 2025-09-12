import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

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
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('services.scenarios.title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* New vs Used */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {t('services.scenarios.new')} vs {t('services.scenarios.used')}
              </h3>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  {t('services.scenarios.new')}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• {t('services.scenarios.vat')}: 0% (export)</li>
                  <li>• {t('services.scenarios.coc')}: Included</li>
                  <li>• Full manufacturer warranty</li>
                  <li>• Latest specifications</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  {t('services.scenarios.used')}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• {t('services.scenarios.vat')}: 0% (export)</li>
                  <li>• {t('services.scenarios.coc')}: Available</li>
                  <li>• Condition report included</li>
                  <li>• Competitive pricing</li>
                </ul>
              </div>
            </div>

            {/* Private vs Commercial */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {t('services.scenarios.private')} vs {t('services.scenarios.commercial')}
              </h3>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  {t('services.scenarios.private')}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personal ID copy</li>
                  <li>• Proof of address</li>
                  <li>• Bank statement</li>
                  <li>• Simple process</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  {t('services.scenarios.commercial')}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Business letterhead with VAT ID</li>
                  <li>• Company registration</li>
                  <li>• Power of attorney</li>
                  <li>• Trade license</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logistics Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('services.logistics.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🚢</div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.sea')}
              </h3>
              <p className="text-gray-600 mb-4">
                Most cost-effective for large shipments
              </p>
              <div className="text-sm text-gray-500">
                {t('services.logistics.transitTime')}: 3-6 weeks
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.air')}
              </h3>
              <p className="text-gray-600 mb-4">
                Fastest delivery option available
              </p>
              <div className="text-sm text-gray-500">
                {t('services.logistics.transitTime')}: 3-7 days
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.transporter')}
              </h3>
              <p className="text-gray-600 mb-4">
                Door-to-door road transport
              </p>
              <div className="text-sm text-gray-500">
                {t('services.logistics.transitTime')}: 1-3 weeks
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Additional Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🛡️</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {t('services.logistics.insurance')}
                </h3>
                <p className="text-gray-600">
                  Comprehensive coverage during transit
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  {t('services.logistics.preDelivery')}
                </h3>
                <p className="text-gray-600">
                  Thorough inspection before shipping
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-2xl">📋</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Customs Documentation
                </h3>
                <p className="text-gray-600">
                  Complete paperwork handling
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🌍</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Worldwide Shipping
                </h3>
                <p className="text-gray-600">
                  Export to any destination
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DI-Auto Detailed Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Complete Process - Based on 20 Years of Experience
          </h2>
          
          <div className="space-y-8">
            {/* Step 1: Choose your car */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Choose your car</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Option A: Check our stock</h4>
                  <p className="text-gray-600">Browse our available vehicles that are ready for immediate export.</p>
                  
                  <h4 className="font-semibold text-gray-800">Option B: Choose from any German supplier</h4>
                  <p className="text-gray-600">Select a car from any supplier in Germany who offers net price + VAT.</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Option C: Talk to the seller</h4>
                  <p className="text-gray-600">Get information and price, then inform them your German partner company will buy the car.</p>
                  
                  <h4 className="font-semibold text-gray-800">Option D: Contact us</h4>
                  <p className="text-gray-600">Send us your details, company registration and ID. Tell us what car you want to buy.</p>
                </div>
              </div>
            </div>

            {/* Step 2: Check the offer */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">On your request, we check the offer (optional)</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Pre-check service</h4>
                  <p className="text-gray-600">We can pre-check the offer to verify availability and identify any potential issues. If the car is already sold, not available, or we cannot recommend it (due to unclear ownership or suspected accident damage), you don't have to pay anything.</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Physical inspection</h4>
                  <p className="text-gray-600">If nothing suspicious is found and you want to continue, we can physically inspect the car at the dealer. Our inspection takes a minimum of 2 hours and includes real-time photos.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Our Expertise</h4>
                <p className="text-green-800">We have 20 years of experience in buying, selling and exporting rare, exclusive sports and luxury cars, which we thoroughly check before we buy them.</p>
              </div>
            </div>

            {/* Step 3: Contract + Down payment */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Contract + Down payment</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">If you wanted a check and it was passed or you agree to buy this car without check, we will send you a purchase contract.</p>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Contract Structure</h4>
                  <p className="text-purple-800">The contract will be between us and you. We buy the car from the seller in full with VAT and you buy from us NET (without VAT).</p>
                </div>
                
                <p className="text-gray-700">In some cases we might ask you to pay 15% of the net purchase price* as down payment after you signed the contract.</p>
              </div>
            </div>

            {/* Step 4: Transport & Shipping */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  4
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Transport & International Shipping</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">You can use your preferred transport company or ask us to help to find one.</p>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Our Transport Service</h4>
                  <p className="text-orange-800">If you request: We can organize, for a fee, an insured transport (max 1mil. EUR), to bring your new car to your shipping company.</p>
                </div>
                
                <p className="text-gray-700">Before the car is loaded for transport, pay the remaining balance of the net purchase price +10% VAT deposit (19% if you are a private buyer or company younger than 3 years) to us.</p>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Important Note</h3>
              <p className="text-blue-800 text-lg">
                As soon as you can certify, your car has arrived in your country and we get a copy of the car's registration, we immediately send you the VAT deposit back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
