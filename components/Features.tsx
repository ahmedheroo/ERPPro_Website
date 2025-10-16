
import React from 'react';

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
  delay?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, delay = '0s' }) => (
  <div className="text-center p-6 fade-in" style={{ transitionDelay: delay }}>
    <div className="bg-primary/10 text-primary text-3xl w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
      <i className={`fas ${icon}`}></i>
    </div>
    <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    { icon: 'fa-cloud', title: 'Cloud-Based & Secure', description: 'Access your data anytime, anywhere with top-tier security protocols.' },
    { icon: 'fa-chart-line', title: 'Real-time Reports', description: 'Generate insightful reports and dashboards for better decision-making.' },
    { icon: 'fa-cogs', title: 'Easy Integration', description: 'Seamlessly connect with your favorite third-party applications.' },
    { icon: 'fa-desktop', title: 'User-friendly Interface', description: 'An intuitive and clean design that requires minimal training.' },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 fade-in">Powerful Features, Simple Interface</h2>
          <p className="text-gray-600 fade-in" style={{ transitionDelay: '0.2s' }}>
            Everything you need to run your business more efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={feature.title} {...feature} delay={`${index * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
