import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/80' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`nav-link relative text-gray-600 hover:text-primary transition-colors py-1 ${activeSection === link.href.substring(1) ? 'text-primary font-semibold active' : ''}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105">
            Request Demo
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-secondary focus:outline-none z-50 relative">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-transform duration-300`}></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-40 transform mobile-menu ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 py-4">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-2xl font-medium text-gray-600 hover:text-primary transition-colors ${activeSection === link.href.substring(1) ? 'text-primary' : ''}`}>
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)} 
            className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all">
            Request Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;