import React from 'react';
import { Settings, Zap, Users, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Settings size={40} className="text-white transition-transform duration-300 group-hover:rotate-180" />,
      title: 'Custom-Tailored Solutions',
      description: 'We offer flexible and customized hardware and firmware development to meet unique client needs.'
    },
    {
      icon: <Zap size={40} className="text-white transition-transform duration-300 group-hover:scale-125" />,
      title: 'Focus on Innovation & Power Efficiency',
      description: 'Specializing in low-power designs, we ensure optimized solutions for wearable tech, remote IoT devices, and battery-powered applications.'
    },
    {
      icon: <Users size={40} className="text-white transition-transform duration-300 group-hover:scale-110" />,
      title: 'Diverse Expertise',
      description: 'From ESP32 to EPSON, we design embedded solutions optimized for performance, power efficiency, and scalability.'
    },
    {
      icon: <Clock size={40} className="text-white transition-transform duration-300 group-hover:rotate-45" />,
      title: 'Strong R&D and Technical Consulting',
      description: 'Our commitment to continuous innovation and research ensures cutting-edge solutions for emerging technologies.'
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-audiowide mb-4 text-white">Why Choose Zenith Tek?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We're committed to excellence, innovation, and delivering outstanding value to our clients.
          </p>
          <div className="w-20 h-1 bg-white mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-primary-dark rounded-lg p-6 shadow-lg border border-primary-light transform transition-all duration-300 hover:-translate-y-2 hover:bg-primary-light hover:shadow-xl cursor-pointer"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary-light p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-audiowide text-center mb-4 text-white group-hover:text-accent transition-colors duration-300">{reason.title}</h3>
              <p className="text-gray-200 text-center group-hover:text-white transition-colors duration-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;