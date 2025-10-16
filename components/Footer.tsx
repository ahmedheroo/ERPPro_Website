import React from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: 'fa-twitter', href: '#' },
    { icon: 'fa-facebook-f', href: '#' },
    { icon: 'fa-linkedin-in', href: '#' },
    { icon: 'fa-instagram', href: '#' },
  ];

  const quickLinks = [
    { href: '#home', label: t('nav_home') },
    { href: '#modules', label: t('nav_modules') },
    { href: '#features', label: t('nav_features') },
    { href: '#pricing', label: t('nav_pricing') },
    { href: '#contact', label: t('nav_contact') },
  ];

  const legalLinks = [
    { href: '#', label: t('footer_privacy') },
    { href: '#', label: t('footer_terms') },
  ];

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <a href="#home">
              <Logo textColor="text-white" />
            </a>
            <p className="text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer_quick_links')}</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer_legal')}</h3>
            <ul className="space-y-3">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer_get_in_touch')}</h3>
            <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                    <i className="fas fa-map-marker-alt w-5 mt-1 text-primary"></i>
                    <span className="ltr:ml-2 rtl:mr-2">{t('contact_address_info')}</span>
                </li>
                 <li className="flex items-center">
                    <i className="fas fa-phone-alt w-5 text-primary"></i>
                    <span className="ltr:ml-2 rtl:mr-2">{t('contact_phone_info')}</span>
                </li>
                 <li className="flex items-center">
                    <i className="fas fa-envelope w-5 text-primary"></i>
                    <span className="ltr:ml-2 rtl:mr-2">{t('contact_email_info')}</span>
                </li>
            </ul>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map(link => (
                <a 
                  key={link.icon} 
                  href={link.href} 
                  className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label={link.icon.replace('fa-', '')}
                >
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500">
           &copy; {new Date().getFullYear()} {t('brand_name')}. {t('footer_copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;