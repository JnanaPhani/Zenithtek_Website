import React, { useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { LogoFooter } from "../ui/Logo";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

// Custom Link Component for better click handling
const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-gray-200 hover:text-white transition-colors duration-300 cursor-pointer py-2 px-1 block w-full hover:bg-primary-dark/20 rounded"
    style={{ touchAction: "manipulation" }}
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: Add any post-loading logic here
  }, []);

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative overflow-hidden z-10">
      {/* <Particles
        id="tsparticles-footer"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.1 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.05,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        }}
        // className="absolute inset-0 pointer-events-none"
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      /> */}

      <div className="absolute inset-0 h-full w-full z-0 pointer-events-none overflow-hidden">
  <Particles
    id="tsparticles-footer"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: { enable: false },
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        opacity: { value: 0.1 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.05,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    }}
    className="h-full w-full"
  />
</div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <LogoFooter />
            <p className="mt-4 text-gray-200">
              Technology-driven company specializing in embedded systems, IoT
              solutions, industrial automation and electronic product
              development.
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
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative z-20">
            <h3 className="text-xl mb-4 font-audiowide text-white">
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <FooterLink href="#home">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="#about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="#capabilities">Our Capabilities</FooterLink>
              </li>
              <li>
                <FooterLink href="#expertise">Our Expertise</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">Services</FooterLink>
              </li>
              <li>
                <FooterLink href="#contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="relative z-20">
            <h3 className="text-xl mb-4 font-audiowide text-white">
              Our Services
            </h3>
            <ul className="space-y-1">
              <li>
                <FooterLink href="#services">Embedded Systems</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">IoT Solutions</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">PCB Design</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">Power Management</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">R&D Solutions</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">Technical Consulting</FooterLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative z-20">
            <h3 className="text-xl mb-4 font-audiowide text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <a
                  href="mailto:contactus@zenithtek.in"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  contactus@zenithtek.in
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+918500408403"
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    +91 8500408403
                  </a>
                  <a
                    href="tel:+917702462893"
                    className="text-gray-200 hover:text-white transition-colors duration-300"
                  >
                    +91 7702462893
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
          <p>
            &copy; {new Date().getFullYear()} Zenith Tek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;