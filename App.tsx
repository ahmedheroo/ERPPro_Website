import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import Features from './components/Features';
import DemoPreview from './components/DemoPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check if the section is more than 50% visible
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                setActiveSection(entry.target.id);
            }
        });
    }, {
        // Trigger when the section is in the middle of the screen
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0.5
    });

    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });

    return () => sections.forEach(section => {
        if (section.id) {
            observer.unobserve(section);
        }
    });
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse [animation-delay:0.2s]"></div>
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse [animation-delay:0.4s]"></div>
          <span className="text-2xl font-semibold text-secondary ml-4">ERP Pro</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Modules />
        <Features />
        <DemoPreview />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;