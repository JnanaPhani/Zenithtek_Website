import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-audiowide text-primary mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Have a project in mind or want to learn more about our services? We'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-audiowide text-primary mb-8">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start group">
                  <Mail size={24} className="text-primary mr-6 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-audiowide text-lg mb-2">Email</h4>
                    <a 
                      href="mailto:contactus@zenithtek.in" 
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      contactus@zenithtek.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <Phone size={24} className="text-primary mr-6 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-audiowide text-lg mb-2">Phone</h4>
                    <a 
                      href="tel:+917702462893" 
                      className="text-gray-600 hover:text-primary transition-colors duration-300 block"
                    >
                      +91 8500408403 
                    </a>
                    <a 
                      href="tel:+918500408403" 
                      className="text-gray-600 hover:text-primary transition-colors duration-300 block"
                    >
                      +91 7702462893
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group md:col-span-2">
                  <MapPin size={24} className="text-primary mr-6 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-audiowide text-lg mb-2">Location</h4>
                    <a 
                      href="https://maps.google.com/?q=Zenith+Tek,Vijayawada,Andhra+Pradesh,India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      Zenith Tek Headquarters<br />
                      Vijayawada, Andhra Pradesh<br />
                      India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-audiowide text-primary mb-6">Connect With Us</h3>
              <div className="flex space-x-8">
                <a 
                  href="https://www.linkedin.com/company/zenith-tek/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-dark transition-colors duration-300 transform hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="https://www.instagram.com/zenith_tek/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-dark transition-colors duration-300 transform hover:scale-110"
                >
                  <Instagram size={28} />
                </a>
                <a 
                  href="https://x.com/zenith_tek" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-dark transition-colors duration-300 transform hover:scale-110"
                >
                  <Twitter size={28} />
                </a>
                <a 
                  href="https://wa.me/918500408403" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-dark transition-colors duration-300 transform hover:scale-110"
                >
                  <MessageCircle size={28} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-audiowide text-primary mb-6">Let's Innovate Together</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Whether you're looking to develop a new product, optimize an existing system, or need consulting for your IoT project, our team of experts is ready to help.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Reach out to us today and let's discuss how we can turn your ideas into reality!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
