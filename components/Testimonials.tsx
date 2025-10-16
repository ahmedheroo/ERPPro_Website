
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  delay?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatar, delay = '0s' }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary fade-in" style={{ transitionDelay: delay }}>
    <p className="text-gray-600 italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold text-secondary">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    { quote: 'ERP Pro has transformed our HR processes. What used to take days now takes minutes. It\'s a game-changer for our productivity.', name: 'Sarah Johnson', role: 'HR Manager, TechSolutions Inc.', avatar: 'https://picsum.photos/seed/person1/100/100' },
    { quote: 'The real-time reporting is incredibly powerful. We can now make informed decisions faster than ever before. Highly recommended!', name: 'Michael Chen', role: 'CEO, Innovate Co.', avatar: 'https://picsum.photos/seed/person2/100/100' },
    { quote: 'Finally, an ERP that doesn\'t require a steep learning curve. The interface is clean, intuitive, and our team loves it.', name: 'Jessica Williams', role: 'Operations Director, BuildRight', avatar: 'https://picsum.photos/seed/person3/100/100' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 fade-in">Trusted by Businesses Worldwide</h2>
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
