import React, { useState } from 'react';
import ExpertiseCard from '../ui/ExpertiseCard';
import { microcontrollerData } from '../../data/microcontrollerData';

const ExpertiseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'wifi', label: 'Wi-Fi/BLE' },
    { id: 'lowpower', label: 'Low Power' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'arm', label: 'ARM-based' }
  ];
  
  const filteredMicrocontrollers = activeFilter === 'all' 
    ? microcontrollerData 
    : microcontrollerData.filter(mcu => mcu.categories.includes(activeFilter));

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-audiowide mb-4">Our Expertise in Microcontrollers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in designing and developing solutions using a wide range of microcontrollers and platforms.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Expertise cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMicrocontrollers.map((mcu, index) => (
            <ExpertiseCard 
              key={index}
              name={mcu.name}
              description={mcu.description}
              applications={mcu.applications}
              icon={mcu.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;