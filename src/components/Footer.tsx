import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
	const { t } = useLanguage();
	const currentYear = new Date().getFullYear();

	const WHATSAPP_NUMBER = '4917669495526';
	const EMAIL_ADDRESS = 'Iv.exportservice@gmail.com';

	const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I would like to inquire about your car export service.')}`;
	const emailHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent('Car Export Inquiry')}`;

	return (
		<footer className="bg-gray-50 border-t border-gray-200" aria-labelledby="site-footer">
			<div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
				{/* Contact CTAs - Prominent Section */}
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.title') || 'Get in Touch'}</h2>
					<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
						Ready to start your car export journey? Contact us for personalized assistance and expert guidance.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href={whatsappHref}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
						>
							<span className="mr-3">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
									<path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.14 1.6 5.94L0 24l6.22-1.62c1.73.95 3.7 1.45 5.78 1.45 6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.35ZM12 22c-1.9 0-3.69-.5-5.27-1.45l-.38-.22-3.12.81.83-3.04-.25-.4A9.92 9.92 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.35-7.42c-.29-.15-1.7-.84-1.97-.94-.27-.1-.47-.15-.68.15-.2.29-.78.94-.95 1.14-.17.2-.35.22-.64.07-.29-.15-1.2-.44-2.28-1.41-.84-.75-1.41-1.67-1.58-1.95-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.94-2.25-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.26.49 1.69.63.71.23 1.36.2 1.88.12.57-.08 1.7-.7 1.94-1.38.24-.69.24-1.28.17-1.41-.07-.13-.26-.2-.55-.35Z" />
								</svg>
							</span>
							<span>{t('home.hero.cta.whatsapp') || 'WhatsApp Us'}</span>
						</a>
						<a
							href={emailHref}
							className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
						>
							<span className="mr-3">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
									<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.236l7.386 6.148a1 1 0 0 0 1.228 0L20 8.236V18H4Z" />
								</svg>
							</span>
							<span>{t('home.contactStrip.email') || 'Email Us'}</span>
						</a>
					</div>
				</div>

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
							<div className="flex items-center gap-3">
								<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>Germany - Worldwide Export</span>
							</div>
							<div className="flex items-center gap-3">
								<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span>Mon - Fri: 9:00 - 18:00 CET</span>
							</div>
							<div className="flex items-center gap-3">
								<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
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
							<NavLink to="/faq" className="block text-gray-600 hover:text-blue-600 transition-colors">
								{t('nav.faq')}
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
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.14 1.6 5.94L0 24l6.22-1.62c1.73.95 3.7 1.45 5.78 1.45 6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.35ZM12 22c-1.9 0-3.69-.5-5.27-1.45l-.38-.22-3.12.81.83-3.04-.25-.4A9.92 9.92 0 0 1 2 12C2 6.49 6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm5.35-7.42c-.29-.15-1.7-.84-1.97-.94-.27-.1-.47-.15-.68.15-.2.29-.78.94-.95 1.14-.17.2-.35.22-.64.07-.29-.15-1.2-.44-2.28-1.41-.84-.75-1.41-1.67-1.58-1.95-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.94-2.25-.24-.58-.48-.5-.68-.51h-.58c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.26.49 1.69.63.71.23 1.36.2 1.88.12.57-.08 1.7-.7 1.94-1.38.24-.69.24-1.28.17-1.41-.07-.13-.26-.2-.55-.35Z" />
							</svg>
						</a>
						<a href={emailHref} className="text-gray-400 hover:text-blue-600 transition-colors">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
								<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.236l7.386 6.148a1 1 0 0 0 1.228 0L20 8.236V18H4Z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}