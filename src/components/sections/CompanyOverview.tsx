import React from 'react';
import { Calendar, Zap, Trophy, Users } from 'lucide-react';

const CompanyOverview: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-audiowide mb-4">About Zenith Tek</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="bg-gray-100 p-4 md:p-8 rounded-lg relative">
              <img 
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Zenith Tek technology development" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              
              <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 bg-primary text-white p-4 md:p-6 rounded-lg shadow-lg max-w-[250px] md:max-w-xs">
                <h3 className="font-audiowide text-white md:text-xl mb-2 md:mb-3">Innovation Hub</h3>
                <p className="text-gray-100 text-sm md:text-base">
Our state-of-the-art facilities enable rapid prototyping and cutting-edge R&D for next-generation embedded systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h3 className="text-xl md:text-2xl font-audiowide mb-4 md:mb-6 text-primary-dark">Company Overview</h3>
            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
              Zenith Tek is a technology-driven company specializing in embedded systems, IoT solutions, 
              industrial automation and electronic product development. We provide end-to-end hardware 
              and software solutions, from concept to deployment, catering to a wide range of industries.
            </p>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              We offer innovative, high-quality, and cost-effective solutions for various industries, 
              helping businesses optimize their operations through cutting-edge technology.
            </p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start">
                <div className="bg-primary-light p-2 md:p-3 rounded-full text-white mr-3 md:mr-4">
                  <Calendar size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-audiowide text-base md:text-lg mb-1">Established</h4>
                  <p className="text-gray-600 text-sm md:text-base">March 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-light p-2 md:p-3 rounded-full text-white mr-3 md:mr-4">
                  <Zap size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-audiowide text-base md:text-lg mb-1">Innovative</h4>
                  <p className="text-gray-600 text-sm md:text-base">Cutting-edge solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-light p-2 md:p-3 rounded-full text-white mr-3 md:mr-4">
                  <Trophy size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-audiowide text-base md:text-lg mb-1">Excellence</h4>
                  <p className="text-gray-600 text-sm md:text-base">High-quality delivery</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-light p-2 md:p-3 rounded-full text-white mr-3 md:mr-4">
                  <Users size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-audiowide text-base md:text-lg mb-1">Expert Team</h4>
                  <p className="text-gray-600 text-sm md:text-base">Skilled engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;