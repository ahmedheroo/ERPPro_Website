import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ModuleCardProps {
  icon: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
  delay?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon, title, description, isComingSoon = false, delay = '0s' }) => {
  const { t } = useLanguage();
  return (
    <div 
      className={`p-8 rounded-xl shadow-lg transition-all duration-300 transform fade-in ${
        isComingSoon 
          ? 'bg-gray-100 relative group' 
          : 'bg-white hover:shadow-2xl hover:-translate-y-2 hover:scale-105'
      }`} 
      style={{ transitionDelay: delay }}
    >
      {isComingSoon && (
        <>
          <div className="absolute top-0 ltr:right-0 rtl:left-0 bg-accent text-white text-xs font-bold px-4 py-1 transform ltr:translate-x-1/4 rtl:-translate-x-1/4 -translate-y-1/4 ltr:rotate-45 rtl:-rotate-45 z-10">
            {t('coming_soon')}
          </div>
          <div className="absolute bottom-full ltr:left-1/2 rtl:right-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 mb-2 w-max px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
            {t('coming_soon_details')}
          </div>
        </>
      )}
      <div className={`text-4xl mb-4 ${isComingSoon ? 'text-gray-400' : 'text-primary'}`}>
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isComingSoon ? 'text-gray-500' : 'text-secondary'}`}>{title}</h3>
      <p className={`${isComingSoon ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
};


const Modules: React.FC = () => {
  const { t } = useLanguage();
  const modules = [
    { icon: 'fa-users', title: t('module_employees_title'), description: t('module_employees_desc') },
    { icon: 'fa-clock', title: t('module_attendance_title'), description: t('module_attendance_desc') },
    { icon: 'fa-money-bill-wave', title: t('module_payroll_title'), description: t('module_payroll_desc') },
    { icon: 'fa-sitemap', title: t('module_hr_title'), description: t('module_hr_desc') },
    { icon: 'fa-calculator', title: t('module_accounting_title'), description: t('module_accounting_desc'), isComingSoon: true },
    { icon: 'fa-boxes-stacked', title: t('module_inventory_title'), description: t('module_inventory_desc'), isComingSoon: true },
    { icon: 'fa-diagram-project', title: t('module_projects_title'), description: t('module_projects_desc'), isComingSoon: true },
  ];

  return (
    <section id="modules" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 fade-in">{t('modules_title')}</h2>
          <p className="text-gray-600 fade-in" style={{ transitionDelay: '0.2s' }}>
            {t('modules_subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <ModuleCard key={module.title} {...module} delay={`${index * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
