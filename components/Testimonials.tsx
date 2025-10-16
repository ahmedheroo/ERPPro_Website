import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  delay?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatar, delay = '0s' }) => (
  <div className="bg-white p-8 rounded-lg shadow-md ltr:border-l-4 rtl:border-r-4 border-primary fade-in" style={{ transitionDelay: delay }}>
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full ltr:mr-4 rtl:ml-4" />
      <div>
        <p className="font-bold text-secondary">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const testimonials = [
    { quote: t('testimonial1_quote'), name: t('testimonial1_name'), role: t('testimonial1_role'), avatar: 'https://picsum.photos/seed/person1/100/100' },
    { quote: t('testimonial2_quote'), name: t('testimonial2_name'), role: t('testimonial2_role'), avatar: 'https://picsum.photos/seed/person2/100/100' },
    { quote: t('testimonial3_quote'), name: t('testimonial3_name'), role: t('testimonial3_role'), avatar: 'https://picsum.photos/seed/person3/100/100' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 fade-in">{t('testimonials_title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} delay={`${index * 0.15}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
