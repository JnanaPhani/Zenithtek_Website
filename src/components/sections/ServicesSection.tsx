import React, { useState } from 'react';
import { serviceData } from '../../data/serviceData';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-audiowide mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet the specific needs of your business.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceData.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm md:text-base font-audiowide ${
                activeTab === index
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {service.title.includes('R&D') ? 'R&D' : service.title.split('&')[0].trim()}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeTab === index 
                  ? 'opacity-100 translate-y-0 block'
                  : 'opacity-0 absolute pointer-events-none hidden'
              }`}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;