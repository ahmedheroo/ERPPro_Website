import React from 'react';

interface ModuleCardProps {
  icon: string;
  title: string;
  description: string;
  isComingSoon?: boolean;
  delay?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon, title, description, isComingSoon = false, delay = '0s' }) => (
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
        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1 transform translate-x-1/4 -translate-y-1/4 rotate-45 z-10">
          SOON
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
          More details will be available soon.
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

const Modules: React.FC = () => {
  const modules = [
    { icon: 'fa-users', title: 'Employees Management', description: 'Centralize employee data and manage your entire workforce.' },
    { icon: 'fa-clock', title: 'Attendance Tracking', description: 'Monitor employee check-in/out times with real-time accuracy.' },
    { icon: 'fa-money-bill-wave', title: 'Payroll Management', description: 'Automate payroll processing, tax calculations, and salary slips.' },
    { icon: 'fa-sitemap', title: 'Human Resources', description: 'Streamline HR tasks from recruitment to performance reviews.' },
    { icon: 'fa-calculator', title: 'Accounting', description: 'Full financial management and reporting.', isComingSoon: true },
    { icon: 'fa-boxes-stacked', title: 'Inventory', description: 'Track stock levels, orders, and sales in real-time.', isComingSoon: true },
    { icon: 'fa-diagram-project', title: 'Projects', description: 'Plan, execute, and monitor projects efficiently.', isComingSoon: true },
  ];

  return (
    <section id="modules" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 fade-in">All-in-One Business Solution</h2>
          <p className="text-gray-600 fade-in" style={{ transitionDelay: '0.2s' }}>
            ERP Pro integrates all your essential business functions into one seamless system.
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
