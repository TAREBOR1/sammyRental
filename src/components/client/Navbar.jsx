import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { assets } from '../../assets/assets';
import { setDialog } from '../../redux/client/dialogSlice';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Apartments', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];

    const dispatch = useDispatch();
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 10 || location.pathname !== '/');
        };
        updateScroll(); // initial call
        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 lg:px-16 xl:px-24 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg py-3' : 'py-4 md:py-6'}`}>
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img
                        src={assets.sammyHome}
                        alt="logo"
                        className={`w-8 scale-150 origin-left h-auto transition-transform duration-300 ${isScrolled ? '' : ''}`}
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.path} className={`group flex flex-col text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                            {link.name}
                            <span className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'}`} />
                        </Link>
                    ))}
                </div>

                {/* Desktop Right Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <img src={assets.searchIcon} alt="search" className={`h-6 w-6 cursor-pointer transition duration-300 ${isScrolled ? 'invert' : ''}`} />
                    <button
                        onClick={() => dispatch(setDialog())}
                        className="bg-[#49B9FF]/50 text-white px-6 py-2 rounded-full transition duration-300 hover:bg-gray-800"
                    >
                        Login
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <img
                        src={assets.menuIcon}
                        alt="menu"
                        className={`h-6 w-6 cursor-pointer }`}
                        onClick={() => setIsMenuOpen(true)}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed  h-screen inset-0 z-[9999] bg-white overflow-auto p-4  flex flex-col items-center justify-center text-gray-800 transform transition-transform duration-400 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button
                    className="absolute top-5 left-5"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <img src={assets.closeIcon} alt="close menu" className="h-6 w-6" />
                </button>

                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-semibold hover:text-black"
                    >
                        {link.name}
                    </Link>
                ))}

                <button
                    onClick={() => {
                        dispatch(setDialog());
                        setIsMenuOpen(false);
                    }}
                    className="mt-6 bg-[#49B9FF]/50 text-white px-8 py-2.5 rounded-full"
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
