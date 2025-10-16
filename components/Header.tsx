import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { language, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: t('nav_home') },
    { href: '#modules', label: t('nav_modules') },
    { href: '#features', label: t('nav_features') },
    { href: '#pricing', label: t('nav_pricing') },
    { href: '#contact', label: t('nav_contact') },
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
  
  const handleLangChange = (lang: 'en' | 'ar') => {
    changeLanguage(lang);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false); // also close mobile menu if open
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/80' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`nav-link text-sm font-medium transition-all duration-300 border-b-2 py-2 ${
                  activeSection === link.href.substring(1)
                  ? 'text-primary border-primary font-semibold'
                  : 'text-gray-600 border-transparent hover:text-primary hover:border-primary/50'
                }`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              {/* Language Switcher */}
              <div className="relative">
                  <button 
                      onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                      className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                      aria-haspopup="true"
                      aria-expanded={isLangMenuOpen}
                      type="button"
                  >
                      <i className="fas fa-globe"></i>
                      <span>{language.toUpperCase()}</span>
                      <i className={`fas fa-chevron-down text-xs transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  {isLangMenuOpen && (
                      <div 
                          className="absolute top-full ltr:right-0 rtl:left-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-1"
                          onMouseLeave={() => setIsLangMenuOpen(false)}
                      >
                          <a href="#" onClick={(e) => { e.preventDefault(); handleLangChange('en'); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-gray">English (EN)</a>
                          <a href="#" onClick={(e) => { e.preventDefault(); handleLangChange('ar'); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-light-gray">العربية (AR)</a>
                      </div>
                  )}
              </div>
              <a href="#contact" className="hidden md:inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105 whitespace-nowrap">
                  {t('request_demo')}
              </a>
          </div>


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
      <div className={`md:hidden fixed top-0 ltr:right-0 rtl:left-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-40 transform mobile-menu ${isMenuOpen ? 'ltr:translate-x-full rtl:-translate-x-full' : 'ltr:translate-x-0 rtl:translate-x-0'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 py-4">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className={`text-2xl font-medium text-gray-600 hover:text-primary transition-colors ${activeSection === link.href.substring(1) ? 'text-primary font-semibold' : ''}`}>
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)} 
            className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all">
            {t('request_demo')}
          </a>
          <div className="border-t border-gray-200 w-3/4 pt-6 flex justify-center items-center space-x-4">
             <button onClick={() => handleLangChange('en')} className={`font-medium ${language === 'en' ? 'text-primary' : 'text-gray-500'}`}>EN</button>
             <div className="h-4 w-px bg-gray-300"></div>
             <button onClick={() => handleLangChange('ar')} className={`font-medium ${language === 'ar' ? 'text-primary' : 'text-gray-500'}`}>AR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;