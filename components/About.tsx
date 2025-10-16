
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 fade-in">
            <h2 className="text-3xl font-bold text-secondary mb-4">What is ERP Pro?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ERP Pro is a comprehensive, cloud-based Enterprise Resource Planning system designed to streamline your business operations. Our mission is to provide an intuitive, powerful, and scalable solution that integrates all your core processes into a single, unified platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From managing your workforce to tracking finances, ERP Pro empowers you to make smarter, data-driven decisions, boost productivity, and drive growth.
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
