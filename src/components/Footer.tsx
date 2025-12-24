import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock, FaGlobe } from 'react-icons/fa';

import NorthAfricanPattern from './NorthAfricanPattern';

export default function Footer() {
	const { t, language } = useLanguage();
	const currentYear = new Date().getFullYear();

	const WHATSAPP_NUMBER = '4917669495526';
	const EMAIL_ADDRESS = 'Iv.exportservice@gmail.com';

	const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I would like to inquire about your car export service.')}`;
	const emailHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent('Car Export Inquiry')}`;

	return (
		<footer className="bg-gray-50 border-t border-gray-200" aria-labelledby="site-footer">
			{/* Contact CTAs - Prominent Section */}
			<section className="relative py-24 bg-deep-blue text-white overflow-hidden">
				<NorthAfricanPattern opacity={0.1} />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						{t('footer.cta.title') || (language === 'ar' ? 'جاهز لاستيراد سيارتك القادمة؟' : 'Ready to Import Your Next Car?')}
					</h2>
					<p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
						{t('footer.cta.description') || (language === 'ar'
							? 'تواصل معنا اليوم واحصل على استشارة مجانية. فريقنا جاهز لمساعدتك في إيجاد السيارة المثالية.'
							: 'Contact us today for a free consultation. Our team is ready to help you find the perfect car.')}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center bg-whatsapp-green hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg group"
						>
							<FaWhatsapp className="text-2xl mr-3 group-hover:animate-pulse" />
							<span>{t('cta.whatsapp.action') || (language === 'ar' ? 'ابدأ المحادثة عبر واتساب' : 'Start WhatsApp Chat')}</span>
						</a>
						<a
							href={emailHref}
							className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm group"
						>
							<FaEnvelope className="text-2xl mr-3" />
							<span>{t('cta.email.action') || (language === 'ar' ? 'راسلنا عبر البريد' : 'Email Us')}</span>
						</a>
					</div>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info - Spans 2 columns */}
					<div className="md:col-span-2">
						<NavLink to="/" className="inline-flex items-center gap-3 font-bold text-xl text-blue-600 mb-4">
							<img
								src={encodeURI('/WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg')}
								alt="IV Export Service"
								className="h-10 w-10 rounded-lg bg-white p-1 shadow-md"
								onError={(e) => {
									const img = e.currentTarget as HTMLImageElement;
									if (!img.dataset.fallbackTried) {
										img.dataset.fallbackTried = '1';
										img.src = '/iv-export-logo.png';
									} else {
										img.src = '/logo-black.svg';
									}
								}}
							/>
							<span>IV EXPORT SERVICE</span>
						</NavLink>
						<p className="text-gray-600 mb-6 max-w-md">
							Your trusted partner for premium car export from Germany. Professional service, secure logistics, and worldwide shipping expertise.
						</p>
						<div className="space-y-3 text-sm text-gray-600">
							<div className="flex items-start gap-3">
								<FaMapMarkerAlt className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
								<div>
									<p className="font-semibold text-gray-900">Mohamed Zouinkhi</p>
									<p>Hudekamp 15, 23558 Lübeck</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<FaGlobe className="h-5 w-5 text-blue-600" />
								<span>Germany - Worldwide Export</span>
							</div>
							<div className="flex items-center gap-3">
								<FaClock className="h-5 w-5 text-blue-600" />
								<span>Mon - Fri: 9:00 - 18:00 CET</span>
							</div>
							<div className="flex items-center gap-3">
								<FaPhone className="h-5 w-5 text-blue-600" />
								<span>+49 176 69495526</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
						<div className="space-y-3 text-sm">
							<NavLink to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
								{t('nav.services')}
							</NavLink>
							<NavLink to="/stock" className="block text-gray-600 hover:text-blue-600 transition-colors">
								{t('nav.stock')}
							</NavLink>
							<NavLink to="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
								{t('nav.about')}
							</NavLink>
						</div>
					</div>

					{/* Legal */}
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
						<div className="space-y-3 text-sm">
							<a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
								{t('footer.legal.privacy')}
							</a>
							<a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
								{t('footer.legal.imprint')}
							</a>
							<a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">
								{t('footer.legal.cookies')}
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-gray-600">
						© {currentYear} IV EXPORT SERVICE. All rights reserved.
					</p>
					<div className="flex gap-4 mt-4 md:mt-0">
						<a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
							<FaWhatsapp className="h-5 w-5" />
						</a>
						<a href={emailHref} className="text-gray-400 hover:text-blue-600 transition-colors">
							<FaEnvelope className="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>
		</footer >
	);
}