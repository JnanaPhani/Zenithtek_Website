import React, { useEffect, useRef } from 'react';
import { Cpu, WifiIcon, CircuitBoard, FlaskConical } from 'lucide-react';

const CoreCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'Embedded Systems Development',
      description: 'Custom microcontroller-based solutions, firmware development, and real-time embedded applications.',
      icon: <Cpu size={48} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
      features: [
        'Custom microcontroller solutions',
        'Firmware development',
        'Real-time embedded applications',
        'Low-power designs'
      ]
    },
    {
      title: 'IoT Solutions & Automation',
      description: 'Smart home, Industrial IoT, energy monitoring and cloud integration solutions.',
      icon: <WifiIcon size={48} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
      features: [
        'Smart home applications',
        'Industrial IoT solutions',
        'Energy monitoring systems',
        'Cloud integration services'
      ]
    },
    {
      title: 'PCB Design & Prototyping',
      description: 'Custom PCB design, rapid prototyping and electronic product development.',
      icon: <CircuitBoard size={48} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
      features: [
        'Custom PCB design',
        'Rapid prototyping',
        'Electronic product development',
        'Circuit optimization'
      ]
    },
    {
      title: 'R&D & Product Development',
      description: 'Hardware-Software Integration, AI-based embedded Solutions and technical Consulting.',
      icon: <FlaskConical size={48} className="text-primary group-hover:scale-110 transition-transform duration-300" />,
      features: [
        'Hardware-software integration',
        'AI-based embedded solutions',
        'Technical consulting',
        'Full product lifecycle support'
      ]
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

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

    const cards = sectionRef.current?.querySelectorAll('.expertise-card');
    cards?.forEach(card => {
      observer.observe(card);
    });

    return () => {
      cards?.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="capabilities" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-audiowide mb-4">Our Core Capabilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leveraging our expertise across multiple domains to deliver comprehensive technology solutions.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="expertise-card group bg-white rounded-lg p-6 shadow-md transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                {capability.icon}
              </div>
              <h3 className="text-xl font-audiowide text-center mb-4 group-hover:text-primary transition-colors duration-300">{capability.title}</h3>
              <p className="text-gray-600 text-center mb-6 group-hover:text-gray-800 transition-colors duration-300">{capability.description}</p>
              <ul className="space-y-2">
                {capability.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-primary transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;