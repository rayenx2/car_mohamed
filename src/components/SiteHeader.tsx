import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import menuBtn from '../assets/siteHeader/menuBtn.png';

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { t, isRTL } = useLanguage();
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    function toggleMenu() {
        const isOpen = !menuOpen;
        setMenuOpen(isOpen);
        // Prevent scrolling when menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }

    const hideMenu = useCallback(() => {
        setMenuOpen(false);
        document.body.style.overflow = 'unset';
    }, []);

    // Handle Scroll for shrinking header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // useEffect below closes menu whenever sth not being NavBar is clicked
    useEffect(() => {
        function handler(e: MouseEvent) {
            // Only proceed if both refs are properly initialized and menu is open
            if (menuOpen && menuRef.current && buttonRef.current) {
                const target = e.target as Node;
                if (!menuRef.current.contains(target) && !buttonRef.current.contains(target)) {
                    hideMenu();
                }
            }
        }

        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [hideMenu, menuOpen]);

    return (
        <header className={`
            fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md 
            transition-all duration-300
            ${isScrolled ? 'h-16 shadow-lg' : 'h-20 sm:h-24 shadow-sm'}
        `}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center'>
                {/* Top Row - Logo, Title, Language Selector */}
                <div className='flex items-center justify-between'>
                    {/* Logo and Company Name */}
                    <div className='flex items-center gap-3 flex-shrink-0'>
                        <NavLink to='/' style={{ color: 'black' }} onClick={hideMenu}>
                            <div className='flex items-center gap-3'>
                                <img
                                    src={encodeURI('/WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg')}
                                    alt='IV Export Service logo'
                                    className={`
                                        w-auto transition-all duration-300
                                        ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16 lg:h-20'}
                                    `}
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
                                <div className='block'>
                                    <h2 className={`
                                        font-bebasFont font-thin text-gray-900 transition-all duration-300
                                        ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl lg:text-3xl'}
                                    `}>
                                        IV EXPORT SERVICE
                                    </h2>
                                    <p className={`
                                        font-bebasFont font-thin text-gray-600 hidden sm:block
                                        ${isScrolled ? 'text-xs' : 'text-sm lg:text-base'}
                                    `}>
                                        International Vehicle Export
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>

                    {/* Desktop Navigation & Language */}
                    <div className="hidden lg:flex items-center gap-8">
                        <nav>
                            <ul className="flex gap-6">
                                <NavLink to='/' >
                                    <li className={`text-base font-medium hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'}`}>{t('nav.home')}</li>
                                </NavLink>
                                <NavLink to='/about' >
                                    <li className={`text-base font-medium hover:text-blue-600 transition-colors ${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'}`}>{t('nav.about')}</li>
                                </NavLink>
                                <NavLink to='/stock' >
                                    <li className={`text-base font-medium hover:text-blue-600 transition-colors ${location.pathname === '/stock' ? 'text-blue-600' : 'text-gray-700'}`}>{t('nav.stock')}</li>
                                </NavLink>
                                <NavLink to='/services' >
                                    <li className={`text-base font-medium hover:text-blue-600 transition-colors ${location.pathname === '/services' ? 'text-blue-600' : 'text-gray-700'}`}>{t('nav.services')}</li>
                                </NavLink>
                            </ul>
                        </nav>
                        <div className='border-l pl-6 border-gray-200'>
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
                        onClick={toggleMenu}
                        ref={buttonRef}
                        aria-label='Toggle navigation menu'
                    >
                        <svg className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`
                fixed inset-x-0 top-[64px] bg-white shadow-lg border-t border-gray-100 lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
            `} ref={menuRef}>
                <div className="p-4 space-y-4 h-[calc(100vh-64px)] overflow-y-auto">
                    <nav>
                        <ul className="space-y-4">
                            <NavLink onClick={hideMenu} to='/' className="block">
                                <li className={`text-lg font-medium p-3 rounded-lg hover:bg-gray-50 ${location.pathname === '/' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}>
                                    {t('nav.home')}
                                </li>
                            </NavLink>
                            <NavLink onClick={hideMenu} to='/about' className="block">
                                <li className={`text-lg font-medium p-3 rounded-lg hover:bg-gray-50 ${location.pathname === '/about' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}>
                                    {t('nav.about')}
                                </li>
                            </NavLink>
                            <NavLink onClick={hideMenu} to='/stock' className="block">
                                <li className={`text-lg font-medium p-3 rounded-lg hover:bg-gray-50 ${location.pathname === '/stock' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}>
                                    {t('nav.stock')}
                                </li>
                            </NavLink>
                            <NavLink onClick={hideMenu} to='/services' className="block">
                                <li className={`text-lg font-medium p-3 rounded-lg hover:bg-gray-50 ${location.pathname === '/services' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}>
                                    {t('nav.services')}
                                </li>
                            </NavLink>
                        </ul>
                    </nav>

                    <div className="border-t border-gray-100 pt-6">
                        <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider font-semibold">Language / اللغة</p>
                        <div className="flex justify-start">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}