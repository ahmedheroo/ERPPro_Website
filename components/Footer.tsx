import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: 'fa-twitter', href: '#' },
    { icon: 'fa-facebook-f', href: '#' },
    { icon: 'fa-linkedin-in', href: '#' },
    { icon: 'fa-instagram', href: '#' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#modules', label: 'Modules' },
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
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
              A complete ERP system designed to streamline your business operations and drive growth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
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
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                    <i className="fas fa-map-marker-alt w-5 mt-1 text-primary"></i>
                    <span>123 Business Rd, Suite 100, Business City, 12345</span>
                </li>
                 <li className="flex items-center">
                    <i className="fas fa-phone-alt w-5 text-primary"></i>
                    <span>+1 (555) 123-4567</span>
                </li>
                 <li className="flex items-center">
                    <i className="fas fa-envelope w-5 text-primary"></i>
                    <span>contact@erppro.com</span>
                </li>
            </ul>
            <div className="flex space-x-4">
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
           &copy; {new Date().getFullYear()} ERP Pro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;