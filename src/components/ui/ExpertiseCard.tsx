import React, { useEffect, useRef } from 'react';
import { Cpu, Zap, Wrench } from 'lucide-react';

interface ExpertiseCardProps {
  name: string;
  description: string;
  applications: string[];
  icon: string;
  delay?: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ 
  name, 
  description, 
  applications,
  icon,
  delay = 0
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const getIcon = () => {
    switch (icon) {
      case 'cpu':
        return <Cpu size={40} className="text-primary" />;
      case 'zap':
        return <Zap size={40} className="text-primary" />;
      default:
        return <Wrench size={40} className="text-primary" />;
    }
  };

  return (
    <div 
      ref={cardRef}
      className="bg-gray-50 rounded-lg p-6 shadow-sm expertise-card"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4 transform transition-transform duration-300 hover:scale-110">
          {getIcon()}
        </div>
        <div>
          <h3 className="text-xl font-audiowide text-primary mb-2">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="font-audiowide text-sm text-primary-dark mb-2">APPLICATIONS</h4>
        <ul className="space-y-1">
          {applications.map((app, index) => (
            <li 
              key={index} 
              className="flex items-center text-gray-700 transform transition-transform duration-300 hover:translate-x-2"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
              <span>{app}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpertiseCard;