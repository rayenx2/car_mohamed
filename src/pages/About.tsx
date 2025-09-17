import React from 'react';
import { FaAward, FaShieldAlt, FaGlobe, FaUsers, FaCar, FaHandshake, FaCheckCircle, FaTruck, FaFileContract, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function About() {
    return (
        <div className="pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About <span className="text-blue-600">IV Export Service</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Your trusted partner in premium vehicle exports with over 20 years of expertise, 
                        delivering excellence in every transaction across the globe.
                    </p>
                </div>

                {/* Company Overview */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 mb-16 border border-blue-100">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-lg text-gray-700 mb-4">
                                <span className="font-bold text-blue-600">IV EXPORT SERVICE</span> (formerly DI-Auto) 
                                was born from a passion for motoring, where experience and knowledge about cars 
                                has been passed down from generation to generation.
                            </p>
                            <p className="text-gray-700">
                                We have built our reputation on trust, expertise, and delivering exactly what we promise. 
                                Our commitment to excellence has made us a leading name in premium vehicle exports worldwide.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaAward className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">20+ Years</h3>
                            <p className="text-gray-600">of Excellence</p>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaUsers className="text-2xl text-green-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
                        <p className="text-gray-600">Satisfied Clients</p>
                    </div>
                    
                    <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCar className="text-2xl text-blue-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
                        <p className="text-gray-600">Vehicles Exported</p>
                    </div>
                    
                    <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaGlobe className="text-2xl text-purple-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                        <p className="text-gray-600">Countries Served</p>
                    </div>
                    
                    <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt className="text-2xl text-orange-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                        <p className="text-gray-600">Secure Transactions</p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaHandshake className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Integrity</h3>
                            <p className="text-gray-600">
                                Individual, honest and fair approach to each client, ensuring transparent 
                                transactions and building lasting relationships.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-2xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                            <p className="text-gray-600">
                                Thorough vehicle inspection and strict selection criteria ensure every car 
                                meets our high standards for quality and reliability.
                            </p>
                        </div>
                        
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaTruck className="text-2xl text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Reach</h3>
                            <p className="text-gray-600">
                                Secure global logistics and comprehensive export services to deliver 
                                your vehicle safely to any destination worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Business Foundation */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 mb-16 border border-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Business Foundation</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Standards</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                                    <span>Fully documented usage and service history</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                                    <span>Accident-free vehicles with factory warranty</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                                    <span>Exclusively domestic, authorized dealer purchases</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <FaFileContract className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                    <span>Thorough vehicle inspection before purchase</span>
                                </li>
                                <li className="flex items-start">
                                    <FaFileContract className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                    <span>Strict selection criteria and quality control</span>
                                </li>
                                <li className="flex items-start">
                                    <FaFileContract className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                    <span>All vehicles are our property before sale</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Services Overview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50/40 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">Net Export Service</h3>
                            <p className="text-blue-800 mb-4">
                                We sell cars at net prices, saving you from paying VAT in both Germany and your country. 
                                This approach provides significant cost savings for our clients.
                            </p>
                            <p className="text-blue-800 font-semibold">
                                Even as a private individual, you only pay VAT in your country, not in Germany.
                            </p>
                        </div>
                        
                        <div className="bg-green-50/40 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-green-900 mb-4">Car Exchange Program</h3>
                            <p className="text-green-800 mb-4">
                                Comprehensive approach to vehicle exchange including brand consultation, 
                                vehicle search, trade-in options, and favorable financing solutions.
                            </p>
                            <p className="text-green-800 font-semibold">
                                We provide end-to-end support for both companies and private individuals.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Export Journey?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Contact us today and experience the difference that 20 years of expertise makes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="mailto:Iv.exportservice@gmail.com" 
                            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            <FaEnvelope className="mr-2" />
                            Email Us
                        </a>
                        <a 
                            href="tel:+4917669495526" 
                            className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                            <FaPhone className="mr-2" />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}