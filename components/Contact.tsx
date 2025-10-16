import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you shortly.');
  };

  const contactDetails = [
    {
      icon: 'fa-phone-alt',
      title: 'Phone',
      info: '+1 (555) 123-4567',
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      info: 'contact@erppro.com',
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Address',
      info: '123 Business Rd, Suite 100, Business City, 12345',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started with ERP Pro Today</h2>
            <p className="text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
              Ready to take control of your business operations? Fill out the form to request a demo or get in touch with our expert team.
            </p>
            <div className="mt-10 space-y-6">
              {contactDetails.map(detail => (
                <div key={detail.title} className="flex items-start text-left">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 text-accent rounded-full flex items-center justify-center">
                    <i className={`fas ${detail.icon} text-xl`}></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">{detail.title}</h3>
                    <p className="text-gray-300">{detail.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full fade-in" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl w-full max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-secondary mb-6">Request a Demo</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your business needs..." required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;