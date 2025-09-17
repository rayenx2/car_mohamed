import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { NavLink } from 'react-router-dom';
import { FaCar, FaGlobe, FaUsers, FaBuilding, FaUser, FaFlag, FaLightbulb } from 'react-icons/fa';

const Home: React.FC = () => {
  const { t, getArray } = useLanguage();

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your car export service";
    const whatsappUrl = `https://wa.me/4917669495526?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = "Car Export Service Inquiry";
    const body = "Hi, I'm interested in your car export service. Please provide more information.";
    const mailtoUrl = `mailto:Iv.exportservice@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="pt-20">
      {/* Hero Section - Based on Image 2 Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Content Area */}
            <div className="space-y-8">
              <div className="space-y-6">
                                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                   IV Export Service has the solution for you
                 </h1>
                 <p className="text-xl text-gray-600 leading-relaxed">
                   20 years of experience to provide the best services
                 </p>
                
                                 {/* Benefits List */}
                 <div className="space-y-3">
                   <div className="flex items-center gap-3">
                     <svg className="h-5 w-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-gray-700">Buy net without VAT in Germany</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <svg className="h-5 w-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-gray-700">Professional car evaluation & inspection</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <svg className="h-5 w-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-gray-700">Scam protection & secure transactions</span>
                   </div>
                   <div className="flex items-center gap-3">
                     <svg className="h-5 w-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                     <span className="text-gray-700">International shipping & logistics</span>
                   </div>
                 </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink
                  to="/stock"
                  className="btn-hero-primary"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Check Our Stock
                </NavLink>
                
                <button
                  onClick={handleWhatsApp}
                  className="btn-hero-secondary"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.14 1.6 5.94L0 24l6.22-1.62c1.73.95 3.7 1.45 5.78 1.45 6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.35ZM12 22c-1.9 0-3.69-.5-5.27-1.45l-.38-.22-3.12.81.83-3.04-.25-.4A9.92 9.92 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.35-7.42c-.29-.15-1.7-.84-1.97-.94-.27-.1-.47-.15-.68.15-.2.29-.78.94-.95 1.14-.17.2-.35.22-.64.07-.29-.15-1.2-.44-2.28-1.41-.84-.75-1.41-1.67-1.58-1.95-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.94-2.25-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.26.49 1.69.63.71.23 1.36.2 1.88.12.57-.08 1.7-.7 1.94-1.38.24-.69.24-1.28.17-1.41-.07-.13-.26-.2-.55-.35Z" />
                  </svg>
                  WhatsApp Us
                </button>
              </div>

                             {/* Trust Indicators */}
               <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                 <div className="text-center">
                   <div className="hero-stat">20+</div>
                   <div className="hero-stat-label">Years Experience</div>
                 </div>
                 <div className="text-center">
                   <div className="hero-stat">1000+</div>
                   <div className="hero-stat-label">Cars Exported</div>
                 </div>
                 <div className="text-center">
                   <div className="hero-stat">50+</div>
                   <div className="hero-stat-label">Partner Carriers</div>
                 </div>
               </div>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              <div className="relative z-10 hero-card">
                <div className="aspect-[4/3] hero-card-bg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto">
                      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-800">Premium German Cars</h3>
                      <p className="text-gray-600">Ready for worldwide export</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl transform rotate-3 scale-105"></div>
            </div>
          </div>
                 </div>
       </section>

       {/* DI-Auto Process Explanation */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">
               With our 20 years of experience, we know how difficult and time consuming it can be to buy a car online
             </h2>
             <p className="text-lg text-gray-600 max-w-4xl mx-auto">
               To buy a car net in Germany can be even more difficult. We offer our expertise to you, evaluate, check, inspect the car and buy it for you.
             </p>
           </div>

           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
               <div className="bg-blue-50/40 p-6 rounded-lg">
                 <h3 className="text-xl font-semibold text-blue-900 mb-3">We guarantee that you receive the car in the condition you were promised.</h3>
                 <p className="text-blue-800">
                   Our thorough inspection process ensures you get exactly what you expect, with detailed condition reports and real-time photos.
                 </p>
               </div>
               
               <div className="bg-green-50/40 p-6 rounded-lg">
                 <h3 className="text-xl font-semibold text-green-900 mb-3">We will do everything to protect your financial transactions and beware you of scam deals.</h3>
                 <p className="text-green-800">
                   Your security is our priority. We handle all transactions securely and protect you from fraudulent sellers.
                 </p>
               </div>

               <div className="bg-purple-50/40 p-6 rounded-lg">
                 <h3 className="text-xl font-semibold text-purple-900 mb-3">If you are a private person looking for your dream car online, we will make sure you get what you want.</h3>
                 <p className="text-purple-800">
                   No matter if an order car, new car or pre-used vehicle. Please mind, even as a private, you will need to pay VAT in your country, not in Germany.
                 </p>
               </div>
             </div>

             <div className="space-y-6">
               <div className="text-center">
                 <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-2">We will sell the car for the net price to you.</h3>
                 <p className="text-gray-600">Otherwise, you will pay VAT in Germany and your country.</p>
               </div>

               <div className="text-center">
                 <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact us.</h3>
                 <p className="text-gray-600">Ready to start your car export journey? Get in touch with our experts.</p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Why Choose Us */}
     <section className="py-20 bg-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t('home.whyChooseUs.title')}
          </h2>
                                                                                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {getArray('home.whyChooseUs.cards').map((card: any, index: number) => (
                 <div key={card.key} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-all duration-300">
                   <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                     {card.key === 'car' ? (
                       <FaCar className="text-2xl text-blue-600" />
                     ) : card.key === 'export' ? (
                       <FaGlobe className="text-2xl text-green-600" />
                     ) : (
                       <FaUsers className="text-2xl text-purple-600" />
                     )}
                   </div>
                   <h3 className="text-xl font-semibold mb-4 text-gray-800">{card.title}</h3>
                   <ul className="text-left space-y-3">
                     {Array.isArray(card.benefits) && card.benefits.map((benefit: string, benefitIndex: number) => (
                       <li key={benefitIndex} className="flex items-start">
                         <svg className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                         <span className="text-gray-600 text-sm leading-relaxed">{benefit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
        </div>
      </section>

      {/* How It Works - DI-Auto Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              4 easy steps to get your desired car net in Germany
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">Choose your car</h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p><span className="font-medium text-gray-800">A.</span> Check our stock if we have what you want.</p>
                    <p><span className="font-medium text-gray-800">B.</span> Choose a car from any supplier in Germany, who offers net price + VAT.</p>
                    <p><span className="font-medium text-gray-800">C.</span> Talk to the seller, get your information and price and tell him your German partner company will buy the car.</p>
                    <p><span className="font-medium text-gray-800">D.</span> Contact us and send us your details, company registration and ID. Tell us what car you want to buy.</p>
                  </div>
                  <div className="mt-6">
                    <NavLink
                      to="/stock"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Check our Stock
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">On your request, we check the offer (optional)</h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p><span className="font-medium text-gray-800">A.</span> If you request, we can pre-check the offer. If we find out, that the car is already sold, not available or for some reason we cannot recommend to buy it (due to unclear ownership, or we suspect the car had an accident) then you don't have to pay anything.</p>
                    <p><span className="font-medium text-gray-800">B.</span> If we find nothing suspicious and you want to continue with the purchase of this car, you can book us to check it physically direct at the dealer.</p>
                  </div>
                  <div className="mt-6">
                    <NavLink
                      to="/services"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      See how we check the car
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">Contract + Down payment</h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>If you wanted a check and it was passed or you agree to buy this car without check, we will send you a purchase contract.</p>
                    <p>The contract will be between us and you. We buy the car from the seller in full with VAT and you buy from us NET (without VAT).</p>
                    <p>In some cases we might ask you to pay 15% of the net purchase price* as down payment after you signed the contract.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-700">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">Transport & International Shipping</h3>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                    <p>You can use your preferred transport company or ask us to help to find one.</p>
                    <p>If you request: We can organize, for a fee, an insured transport (max 1mil. EUR), to bring your new car to your shipping company.</p>
                    <p>Before the car is loaded for transport, pay the remaining balance of the net purchase price +10% VAT deposit (19% if you are a private buyer or company younger than 3 years) to us.</p>
                  </div>
                  <div className="mt-6">
                    <NavLink
                      to="/services"
                      className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                    >
                      See price list
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50/40 p-6 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Note</h3>
              <p className="text-blue-800">
                As soon as you can certify, your car has arrived in your country and we get a copy of the car's registration, we immediately send you the VAT deposit back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t('home.whoWeServe.title')}
          </h2>
                                                                                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {getArray('home.whoWeServe.cards').map((card: any, index: number) => (
                 <div key={card.key} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-8 text-center hover:shadow-md transition-all duration-300 cursor-pointer">
                   <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-full flex items-center justify-center">
                     {card.key === 'internationalDealers' ? (
                       <FaBuilding className="text-2xl text-indigo-600" />
                     ) : card.key === 'privateBuyers' ? (
                       <FaUser className="text-2xl text-blue-600" />
                     ) : (
                       <FaFlag className="text-2xl text-red-600" />
                     )}
                   </div>
                   <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
                   <p className="text-gray-600 leading-relaxed">{card.description}</p>
                 </div>
               ))}
             </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t('home.problemsWeSolve.title')}
          </h2>
                                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getArray('home.problemsWeSolve.list').map((problem: string, index: number) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full flex items-center justify-center">
                    <FaLightbulb className="text-xl text-yellow-600" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Featured Stock */}
      <section className="py-20 bg-gray-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('home.featuredStock.title')}
            </h2>
            <NavLink
              to="/stock"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('home.featuredStock.seeAll')}
            </NavLink>
          </div>
          
          {/* Sample Featured Cars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">🚗 Featured Car {index}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Premium Vehicle</h3>
                  <p className="text-gray-600 text-sm mb-3">Available for export</p>
                  <button
                    onClick={() => window.location.href = '/stock'}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">{t('home.trustStrip.yearsInBusiness')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">{t('home.trustStrip.carsExported')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">{t('home.trustStrip.partnerCarriers')}</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Strip */}
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {t('home.contactStrip.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📱</span>
              {t('home.contactStrip.whatsapp')}
            </button>
            <button
              onClick={handleEmail}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <span className="mr-2">✉️</span>
              {t('home.contactStrip.email')}
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
