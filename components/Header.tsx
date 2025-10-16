import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#modules', label: 'Modules' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home">
          <Logo />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-primary transition-colors">{link.label}</a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-block bg-primary text-white font-semibold px-5 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
          Request Demo
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-secondary focus:outline-none">
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary transition-colors">{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
            Request Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;