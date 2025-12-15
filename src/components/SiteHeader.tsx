import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import menuBtn from '../assets/siteHeader/menuBtn.png';

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const { t, isRTL } = useLanguage();
    const menuRef = useRef<HTMLUListElement>(null);
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
        <div className='w-full bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Top Row - Logo, Title, Language Selector */}
                <div className='flex items-center justify-between py-4'>
                    {/* Logo and Company Name */}
                    <div className='flex items-center gap-3 flex-shrink-0'>
                        <NavLink to='/' style={{ color: 'black' }}>
                            <div className='flex items-center gap-3'>
                                <img src={encodeURI('/WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg')} alt='IV Export Service logo' className='h-20 sm:h-24 lg:h-32 w-auto'
                                    onError={(e) => {
                                        const img = e.currentTarget as HTMLImageElement;
                                        if (!img.dataset.fallbackTried) {
                                            img.dataset.fallbackTried = '1';
                                            img.src = '/iv-export-logo.png';
                                        } else {
                                            img.src = '/logo-black.svg';
                                        }
                                    }} />
                                <div className='hidden sm:block'>
                                    <h2 className='font-bebasFont text-xl sm:text-2xl lg:text-3xl font-thin text-gray-900'>IV EXPORT SERVICE</h2>
                                    <p className='font-bebasFont font-thin text-sm lg:text-base text-gray-600'>International Vehicle Export</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
                        onClick={toggleMenu}
                        ref={buttonRef}
                        aria-label='Toggle navigation menu'
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Language Selector */}
                    <div className='hidden sm:block'>
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Mobile Company Name */}
                <div className='sm:hidden text-center pb-4'>
                    <h2 className='font-bebasFont text-lg font-thin text-gray-900'>IV EXPORT SERVICE</h2>
                    <p className='font-bebasFont font-thin text-sm text-gray-600'>International Vehicle Export</p>
                </div>

                {/* Mobile Language Selector */}
                <div className='sm:hidden flex justify-center pb-4'>
                    <LanguageSwitcher />
                </div>

                {/* Navigation Bar */}
                <div className='w-full border-t border-gray-200'>
                    <ul className={`w-full
                        ${menuOpen ? 'siteHeader__navbar--shown' : 'siteHeader__navbar--hidden'}
                        lg:block lg:opacity-100
                        lg:flex lg:flex-row lg:justify-center lg:items-center lg:border-t-0`}
                        ref={menuRef}
                    >
                        <NavLink onClick={() => window.innerWidth < 1024 && hideMenu()} to='/' >
                            <li className='siteHeader__li lg:mx-4 lg:py-2 lg:transition-colors'>
                                <span className={`siteHeader__li__span hover:text-blue-600 transition-colors ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>{t('nav.home')}</span>
                            </li>
                        </NavLink>
                        <NavLink onClick={() => window.innerWidth < 1024 && hideMenu()} to='/about' >
                            <li className='siteHeader__li lg:mx-4 lg:py-2 lg:transition-colors'>
                                <span className={`siteHeader__li__span  ${location.pathname === '/about' && 'text-gray-300'}`}>{t('nav.about')}</span>
                            </li>
                        </NavLink>
                        <NavLink onClick={() => window.innerWidth < 1024 && hideMenu()} to='/stock' >
                            <li className='siteHeader__li lg:mx-4 lg:py-2 lg:transition-colors'>
                                <span className={`siteHeader__li__span  ${location.pathname === '/stock' && 'text-gray-300'}`}>{t('nav.stock')}</span>
                            </li>
                        </NavLink>
                        <NavLink onClick={() => window.innerWidth < 1024 && hideMenu()} to='/services' >
                            <li className='siteHeader__li lg:mx-4 lg:py-2 lg:transition-colors'>
                                <span className={`siteHeader__li__span  ${location.pathname === '/services' && 'text-gray-300'}`}>{t('nav.services')}</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}