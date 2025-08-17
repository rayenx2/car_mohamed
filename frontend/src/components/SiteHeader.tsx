import { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import menuBtn from '../assets/siteHeader/menuBtn.png';    
import phoneIcon from '../assets/contact/phoneIcon.png';    

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
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
        xl:w-[1200px] mx-auto text-17 font-semibold'>

            {/* Logo and Company Name */}
            <div className='block w-full max-w-xs my-1 mx-auto py-1 px-0
                sm:max-w-none sm:inline-block sm:w-[450px] sm:inline-block sm:ml-8
                lg:p-0 lg:my-0 lg:mb-4'
            >
                <NavLink to='/' style={{color: 'black'}}>
                    <h2 className='p-0 pt-2 text-center font-bebasFont text-4xl font-thin
                        sm:inline-block sm:pl-8'
                    >ALFA MOTORS</h2>
                </NavLink>
                <p className='p-0 text-center font-bebasFont font-thin text-lg
                lg:'
                >Center for Selected Domestic Premium Brand Cars</p>
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
                            <span className={`siteHeader__li__span  ${location.pathname === '/' && 'text-gray-300'}`}>Home</span>
                        </li>
                    </NavLink>
                    <NavLink onClick={() => window.innerWidth < 1024 && hideMenu()} to='/about' > 
                         <li className='siteHeader__li lg:mx-4 lg:py-2 lg:transition-colors'>
                             <span className={`siteHeader__li__span  ${location.pathname === '/about' && 'text-gray-300'}`}>About Us</span>
                         </li>
                    </NavLink>
                    <NavLink onClick={() => window.innerWidth < 1024 && hideMenu()} to='/financing' > 
                        <li className='siteHeader__li lg:mx-4 lg:py-2 lg:transition-colors'>
                            <span className={`siteHeader__li__span  ${location.pathname === '/financing' && 'text-gray-300'}`}>Financing</span>
                        </li>
                    </NavLink> 
                    <NavLink onClick={() => window.innerWidth < 1024 && hideMenu()} to='/contact' > 
                        <li className='siteHeader__li lg:mx-4 lg:py-2 lg:transition-colors'>
                            <span className={`siteHeader__li__span  ${location.pathname === '/contact' && 'text-gray-300'}`}>Contact</span>
                        </li>
                    </NavLink>
                </ul>
            </div>

            {/* Menu button - positioned for better mobile UX */}
            <img 
                className='block mx-auto mb-3 h-5 w-5 cursor-pointer
                sm:inline-block sm:float-right sm:mr-4 sm:mt-4
                lg:hidden'
                src={menuBtn}
                onClick={toggleMenu}
                ref={buttonRef}
                alt='Toggle navigation menu'
                onError={(e) => {
                    console.warn('Menu button image failed to load');
                    e.currentTarget.style.display = 'none';
                }}
            />

            {/* Phone number with an icon */}
            {/* <div className='SiteHeader__phoneData hidden relative mt-3 mr-1
            sm:hidden
            md:float-right md:inline-block'>
                <img className='inline-block h-4' src={phoneIcon} alt="Find premium class car" />
                <p className='inline-block h-4 px-2'>+48 505 964 955</p>
            </div> */}
        </div>
    )
}