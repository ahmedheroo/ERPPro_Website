
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-4 leading-tight fade-in">
            Empower Your Business with ERP Pro
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 fade-in" style={{ transitionDelay: '0.2s' }}>
            Manage employees, attendance, payroll, and HR — all in one place.
          </p>
          <div className="flex justify-center space-x-4 fade-in" style={{ transitionDelay: '0.4s' }}>
            <a href="#pricing" className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </a>
            <a href="#demo" className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg border border-gray-200">
              See Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
