import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 fade-in">
            <h2 className="text-3xl font-bold text-secondary mb-4">{t('about_title')}</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('about_p1')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about_p2')}
            </p>
          </div>
          <div className="md:w-1/2 fade-in" style={{ transitionDelay: '0.2s' }}>
            <img src="https://picsum.photos/id/1074/600/400" alt="Business meeting" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;