import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-4 leading-tight fade-in">
            {t('hero_title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 fade-in" style={{ transitionDelay: '0.2s' }}>
            {t('hero_subtitle')}
          </p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse fade-in" style={{ transitionDelay: '0.4s' }}>
            <a href="#pricing" className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              {t('get_started')}
            </a>
            <a href="#demo" className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg border border-gray-200">
              {t('see_demo')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;