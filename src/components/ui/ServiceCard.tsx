import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  features: ServiceFeature[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
      <h3 className="text-2xl font-audiowide text-primary mb-6">{service.title}</h3>
      <p className="text-gray-700 mb-8 leading-relaxed">{service.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
          >
            <div className="flex items-center mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-white mr-3 group-hover:bg-primary transition-colors duration-300">
                <Check size={16} />
              </div>
              <h4 className="font-audiowide text-lg text-primary group-hover:text-primary-dark transition-colors duration-300">{feature.title}</h4>
            </div>
            <p className="text-gray-600 pl-11 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;