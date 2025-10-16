import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const DemoPreview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 fade-in">{t('demo_title')}</h2>
          <p className="text-gray-600 fade-in" style={{ transitionDelay: '0.2s' }}>
            {t('demo_subtitle')}
          </p>
        </div>
        <div className="fade-in" style={{ transitionDelay: '0.4s' }}>
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4 border-b pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <img src="https://picsum.photos/seed/erppro/1200/700" alt="ERP Pro Dashboard" className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreview;
