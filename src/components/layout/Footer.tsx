import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, MessageCircle} from 'lucide-react';
import { LogoFooter } from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <LogoFooter />
            <p className="mt-4 text-gray-200">
              Technology-driven company specializing in embedded systems, IoT solutions, industrial automation and electronic product development.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.linkedin.com/company/zenith-tek/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://www.instagram.com/zenith_tek/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://x.com/zenith_tek" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={28} />
              </a>
              <a 
                href="https://wa.me/918500408403" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <MessageCircle size={28} />
              </a>
              {/* <a href="https://x.com/zenith_tek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/zenith_tek/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors duration-300">
                <Instagram size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 font-audiowide text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-200 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-200 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#capabilities" className="text-gray-200 hover:text-white transition-colors duration-300">Core Capabilities</a></li>
              <li><a href="#expertise" className="text-gray-200 hover:text-white transition-colors duration-300">Our Expertise</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-4 font-audiowide text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300">Embedded Systems</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300">IoT Solutions</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300">PCB Design</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300">Power Management</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300">R&D Solutions</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300">Technical Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4 font-audiowide text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:contactus@zenithtek.in" className="text-gray-200 hover:text-white transition-colors duration-300">
                  contactus@zenithtek.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917702462893" className="text-gray-200 hover:text-white transition-colors duration-300">
                    +91 7702462893
                  </a>
                  <a href="tel:+918500408403" className="text-gray-200 hover:text-white transition-colors duration-300">
                    +91 8500408403
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-200">
                  Zenith Tek, Vijayawada, Andhra Pradesh, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zenith Tek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;