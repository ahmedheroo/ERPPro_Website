import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you shortly.');
  };

  const contactDetails = [
    {
      icon: 'fa-phone-alt',
      title: t('contact_phone_title'),
      info: t('contact_phone_info'),
    },
    {
      icon: 'fa-envelope',
      title: t('contact_email_title'),
      info: t('contact_email_info'),
    },
    {
      icon: 'fa-map-marker-alt',
      title: t('contact_address_title'),
      info: t('contact_address_info'),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact_title')}</h2>
            <p className="text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
              {t('contact_subtitle')}
            </p>
            <div className="mt-10 space-y-6">
              {contactDetails.map(detail => (
                <div key={detail.title} className="flex items-start text-left">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 text-accent rounded-full flex items-center justify-center">
                    <i className={`fas ${detail.icon} text-xl`}></i>
                  </div>
                  <div className="ltr:ml-4 rtl:mr-4">
                    <h3 className="text-lg font-semibold text-white">{detail.title}</h3>
                    <p className="text-gray-300">{detail.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full fade-in" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-secondary mb-6">{t('contact_form_title')}</h3>
              <div className="mb-4 text-left">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('form_name')}</label>
                <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors" />
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('form_email')}</label>
                <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors" />
              </div>
              <div className="mb-6 text-left">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('form_message')}</label>
                <textarea id="message" rows={4} placeholder={t('form_message_placeholder')} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                {t('send_message')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;