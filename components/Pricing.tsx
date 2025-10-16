import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface PricingPlanProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ plan, price, description, features, isPopular = false, delay = '0s' }) => {
  const { t } = useLanguage();
  return (
    <div className={`rounded-xl p-8 border transition-all duration-300 transform hover:-translate-y-2 fade-in ${isPopular ? 'bg-secondary text-white border-primary shadow-2xl relative' : 'bg-white border-gray-200 shadow-lg'}`} style={{ transitionDelay: delay }}>
      {isPopular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-white font-semibold text-sm px-4 py-1 rounded-full">{t('most_popular')}</div>}
      
      <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-secondary'}`}>{plan}</h3>
      <p className={`mb-6 ${isPopular ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      
      <div className="text-4xl font-extrabold mb-4">
        {price}
        <span className={`text-base font-medium ${isPopular ? 'text-gray-400' : 'text-gray-500'}`}>/ {t('plan_price_period')}</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <i className={`fas fa-check-circle ltr:mr-3 rtl:ml-3 ${isPopular ? 'text-accent' : 'text-green-500'}`}></i>
            {feature}
          </li>
        ))}
      </ul>
      
      <a href="#contact" className={`w-full text-center block font-semibold py-3 rounded-full transition-colors ${isPopular ? 'bg-white text-secondary hover:bg-gray-200' : 'bg-primary text-white hover:bg-opacity-90'}`}>
        {t('choose_plan')}
      </a>
    </div>
  );
}


const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const plans = [
    {
      plan: t('plan_basic_name'), price: t('plan_basic_price'), description: t('plan_basic_desc'), 
      features: [t('plan_basic_feat1'), t('plan_basic_feat2'), t('plan_basic_feat3'), t('plan_basic_feat4')]
    },
    {
      plan: t('plan_pro_name'), price: t('plan_pro_price'), description: t('plan_pro_desc'), 
      features: [t('plan_pro_feat1'), t('plan_pro_feat2'), t('plan_pro_feat3'), t('plan_pro_feat4'), t('plan_pro_feat5')], 
      isPopular: true
    },
    {
      plan: t('plan_ent_name'), price: t('plan_ent_price'), description: t('plan_ent_desc'), 
      features: [t('plan_ent_feat1'), t('plan_ent_feat2'), t('plan_ent_feat3'), t('plan_ent_feat4')]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 fade-in">{t('pricing_title')}</h2>
          <p className="text-gray-600 fade-in" style={{ transitionDelay: '0.2s' }}>
            {t('pricing_subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan key={plan.plan} {...plan} delay={`${index * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;