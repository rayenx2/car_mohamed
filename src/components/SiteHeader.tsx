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
    const buttonRef = useRef<HTMLImageElement>(null);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    const hideMenu = useCallback(() => {
        setMenuOpen(false);
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
        <div className='w-full relative
        lg:h-auto lg:py-4
        xl:w-[1200px] mx-auto text-17 font-semibold overflow-visible bg-white/95 backdrop-blur-md shadow-sm'>

            {/* Logo and Company Name */}
            <div className={`block w-full max-w-xs my-1 mx-auto py-1 px-0 pr-20
                sm:max-w-none sm:inline-block sm:w-[450px] sm:inline-block sm:ml-8 sm:pr-24
                lg:p-0 lg:my-0 lg:mb-4 lg:pr-28
                ${isRTL ? 'sm:ml-0 sm:mr-8 lg:pr-0 lg:pl-28' : ''}`}
            >
                <NavLink to='/' style={{color: 'black'}}>
                    <div className='flex items-center justify-center sm:justify-start gap-3'>
                        <img src={encodeURI('/WhatsApp Image 2025-08-19 à 16.31.08_eeee4154.jpg')} alt='IV Export Service logo' className='h-10 w-auto'
                             onError={(e) => {
                                 const img = e.currentTarget as HTMLImageElement;
                                 if (!img.dataset.fallbackTried) {
                                     img.dataset.fallbackTried = '1';
                                     img.src = '/iv-export-logo.png';
                                 } else {
                                     img.src = '/logo-black.svg';
                                 }
                             }} />
                        <h2 className='p-0 pt-2 text-center font-bebasFont text-4xl font-thin sm:inline-block sm:pl-0'>IV EXPORT SERVICE</h2>
                    </div>
                </NavLink>
                <p className='p-0 text-center font-bebasFont font-thin text-lg lg:'>International Vehicle Export</p>
            </div>

            {/* Navigation Bar - Clean and integrated */}
            <div className='w-full lg:mt-4'>
                <ul className={`w-full
                    ${menuOpen ? 'siteHeader__navbar--shown' : 'siteHeader__navbar--hidden'}
                    lg:block lg:opacity-100
                    lg:flex lg:flex-row lg:justify-center lg:items-center`}
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

            {/* Header Actions */}
            <div className='flex items-center justify-end space-x-4 mt-4 lg:mt-0'>
                {/* Menu button - positioned for better mobile UX */}
                <img 
                    className='block lg:hidden h-5 w-5 cursor-pointer'
                    src={menuBtn}
                    onClick={toggleMenu}
                    ref={buttonRef}
                    alt='Toggle navigation menu'
                    onError={(e) => {
                        console.warn('Menu button image failed to load');
                        e.currentTarget.style.display = 'none';
                    }}
                />
            </div>

            {/* Language Selector - Top Right Corner */}
            <div className='language-switcher-container'>
                <LanguageSwitcher />
            </div>
        </div>
    )
}