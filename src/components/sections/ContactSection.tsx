import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Loader2,
  MessageCircle,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.subject) {
      toast.error("Please select a subject");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xbjvylkd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(
          "Message sent successfully! We will get back to you soon."
        );
        setFormData(initialFormData);
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative z-10">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-audiowide text-primary mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-audiowide text-primary mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <Mail
                    size={24}
                    className="text-primary mr-6 mt-1 group-hover:scale-110 transition-transform duration-300"
                  />
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
                  <Phone
                    size={24}
                    className="text-primary mr-6 mt-1 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-audiowide text-lg mb-2">Phone</h4>
                    <a
                      href="tel:+917702462893"
                      className="text-gray-600 hover:text-primary transition-colors duration-300 block"
                    >
                      +91 7702462893
                    </a>
                    <a
                      href="tel:+918500408403"
                      className="text-gray-600 hover:text-primary transition-colors duration-300 block"
                    >
                      +91 8500408403
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <MapPin
                    size={24}
                    className="text-primary mr-6 mt-1 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-audiowide text-lg mb-2">Location</h4>
                    <a
                      href="https://maps.google.com/?q=Zenith+Tek,Vijayawada,Andhra+Pradesh,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      Zenith Tek Headquarters
                      <br />
                      Vijayawada, Andhra Pradesh
                      <br />
                      India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-audiowide text-primary mb-6">
                Connect With Us
              </h3>
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
              <h3 className="text-2xl font-audiowide text-primary mb-6">
                Let's Innovate Together
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Whether you're looking to develop a new product, optimize an
                existing system, or need consulting for your IoT project, our
                team of experts is ready to help.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Reach out to us today and let's discuss how we can turn your
                ideas into reality!
              </p>
            </div>
          </div>

          <div className="relative z-20">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-10 relative"
            >
              <div className="mb-8 relative">
                <label
                  htmlFor="name"
                  className="block font-audiowide text-primary mb-3"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 bg-white disabled:bg-gray-100 relative z-10"
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  style={{ touchAction: "manipulation" }}
                />
              </div>

              <div className="mb-8 relative">
                <label
                  htmlFor="email"
                  className="block font-audiowide text-primary mb-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 bg-white disabled:bg-gray-100 relative z-10"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  style={{ touchAction: "manipulation" }}
                />
              </div>

              <div className="mb-8 relative">
                <label
                  htmlFor="subject"
                  className="block font-audiowide text-primary mb-3"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 bg-white appearance-none disabled:bg-gray-100 relative z-10"
                  disabled={isSubmitting}
                  style={{ touchAction: "manipulation" }}
                >
                  <option value="">Select a subject</option>
                  <option value="Embedded Systems">Embedded Systems</option>
                  <option value="IoT Solutions">IoT Solutions</option>
                  <option value="PCB Design">PCB Design</option>
                  <option value="R&D Services">R&D Services</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="mb-8 relative">
                <label
                  htmlFor="message"
                  className="block font-audiowide text-primary mb-3"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 resize-none bg-white disabled:bg-gray-100 relative z-10"
                  placeholder="Tell us about your project or inquiry"
                  disabled={isSubmitting}
                  style={{ touchAction: "manipulation" }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-audiowide py-4 px-6 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center relative z-10"
                style={{ touchAction: "manipulation" }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
