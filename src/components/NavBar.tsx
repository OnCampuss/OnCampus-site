import React, { useState, useEffect } from 'react';
import { Home, Info, List, Mail, Download, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowNavbar(currentScrollY <= lastScrollY);
        setLastScrollY(currentScrollY);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 w-full bg-base4 bg-opacity-90 text-white px-4 py-2 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} z-10`}>
            <div className="flex justify-between items-center">
                <a href="#home" className="font-title text-2xl">OnCampus</a>
                <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
                <ul className="hidden sm:flex space-x-4 font-title">
                    <li>
                        <a href="#home" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                            <Home className="mr-2" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#sobre" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                            <Info className="mr-2" /> Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#funcionalidades" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                            <List className="mr-2" /> Funcionalidades
                        </a>
                    </li>
                    <li>
                        <a href="#contato" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                            <Mail className="mr-2" /> Contato
                        </a>
                    </li>
                    <li>
                        <a href="#download" className="px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300 flex items-center">
                            <Download className="mr-2" /> Download
                        </a>
                    </li>
                </ul>
            </div>
            {isMenuOpen && (
                <ul className="flex flex-col sm:hidden space-y-2 mt-4 font-title">
                    <li>
                        <a href="#home" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                            <Home className="inline mr-2" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#sobre" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                            <Info className="inline mr-2" /> Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#funcionalidades" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                            <List className="inline mr-2" /> Funcionalidades
                        </a>
                    </li>
                    <li>
                        <a href="#contato" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                            <Mail className="inline mr-2" /> Contato
                        </a>
                    </li>
                    <li>
                        <a href="#download" onClick={toggleMenu} className="block px-3 py-2 rounded hover:bg-decorativa1 hover:text-white transition-colors duration-300">
                            <Download className="inline mr-2" /> Download
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
