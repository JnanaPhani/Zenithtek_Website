import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Loader2, MessageCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.subject) {
      toast.error('Please select a subject');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const timestamp = new Date().toLocaleString();

      await emailjs.send(
        'service_hq3giet',
        'template_u6d52gk',
        {
          ...formData,
          time: timestamp,
        },
        'l7i_51lonmf4ujGFh'
      );

      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData(initialFormData);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 bg-gray-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[24px] md:text-[34px] font-audiowide text-primary mb-6">Get In Touch</h2>
          <div className="w-[75px] h-[5.5px] bg-primary mx-auto mb-6"></div>
          <p className="max-w-[87%] mx-auto text-[18.7px] text-gray-600">
            Have a project in mind or want to learn more about our services? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-7">
            <div>
              <h3 className="text-[20.7px] font-audiowide text-primary mb-6">Contact Information</h3>
              <div className="space-y-[18.7px]">
                <div className="flex items-start group">
                  <Mail size={23.1} className="text-primary mr-[18.7px] mt-[5.8px]" />
                  <div>
                    <h4 className="font-audiowide text-[17.3px] mb-2">Email</h4>
                    <a href="mailto:contactus@zenithtek.in" className="text-gray-600 hover:text-primary">
                      contactus@zenithtek.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Phone size={23.1} className="text-primary mr-[18.7px] mt-[5.8px]" />
                  <div>
                    <h4 className="font-audiowide text-[17.3px] mb-2">Phone</h4>
                    <a href="tel:+918500408403" className="text-gray-600 hover:text-primary block">
                      +91 8500408403
                    </a>
                    <a href="tel:+917075046045" className="text-gray-600 hover:text-primary block">
                      +91 7075046045
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <MapPin size={23.1} className="text-primary mr-[18.7px] mt-[5.8px]" />
                  <div>
                    <h4 className="font-audiowide text-[17.3px] mb-2">Location</h4>
                    <a href="https://maps.google.com/?q=Zenith+Tek,Vijayawada,Andhra+Pradesh,India" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                      Zenith Tek Headquarters<br />Vijayawada, Andhra Pradesh, India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[20.7px] font-audiowide text-primary mb-6">Connect With Us</h3>
              <div className="flex space-x-[18.7px]">
                <a href="https://www.linkedin.com/company/zenith-tek/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <Linkedin size={27.7} />
                </a>
                <a href="https://www.instagram.com/zenith_tek/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <Instagram size={27.7} />
                </a>
                <a href="https://x.com/zenith_tek" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <Twitter size={27.7} />
                </a>
                <a href="https://wa.me/918500408403" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  <MessageCircle size={27.7} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[20.7px] font-audiowide text-primary mb-6">Let's Innovate Together</h3>
              <p className="text-gray-600 text-[16.2px]">
                Whether you're looking to develop a new product, optimize an existing system, or need consulting for your IoT project, our team is ready to help.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-[13.9px] shadow p-[27.7px]">
              <div className="mb-6">
                <label htmlFor="name" className="block font-audiowide text-primary mb-[5.8px]">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={isSubmitting} placeholder="Enter your name" className="w-full px-[13.9px] py-[11.6px] border border-gray-300 rounded focus:ring-primary focus:outline-none" />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block font-audiowide text-primary mb-[5.8px]">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} placeholder="Enter your email" className="w-full px-[13.9px] py-[11.6px] border border-gray-300 rounded focus:ring-primary focus:outline-none" />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block font-audiowide text-primary mb-[5.8px]">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} disabled={isSubmitting} className="w-full px-[13.9px] py-[11.6px] border border-gray-300 rounded focus:ring-primary focus:outline-none">
                  <option value="">Select a subject</option>
                  <option value="Embedded Systems">Embedded Systems</option>
                  <option value="IoT Solutions">IoT Solutions</option>
                  <option value="PCB Design">PCB Design</option>
                  <option value="R&D Services">R&D Services</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-audiowide text-primary mb-[5.8px]">Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} disabled={isSubmitting} rows={6} placeholder="Tell us about your project or inquiry" className="w-full px-[13.9px] py-[11.6px] border border-gray-300 rounded focus:ring-primary focus:outline-none resize-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-audiowide py-[13.9px] rounded hover:bg-primary-dark transition flex items-center justify-center">
                {isSubmitting ? (<><Loader2 size={20.7} className="animate-spin mr-2" /> Sending...</>) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};