import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { ArrowRight, BrainCircuit as Circuit, Cpu, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const gradientStyle = {
    backgroundImage: `linear-gradient(
      ${135 + mousePosition.x * 10}deg,
      rgba(8, 95, 99, ${0.9 + mousePosition.y * 0.1}) 0%,
      rgba(10, 117, 123, ${0.85 + mousePosition.x * 0.15}) 50%,
      rgba(6, 70, 73, ${0.95 + mousePosition.y * 0.05}) 100%
    )`,
  };

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={gradientStyle}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.2 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.1,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 }
            }
          },
          retina_detect: true
        }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8" style={parallaxStyle}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Cpu size={20} className="text-accent" />
              <span className="text-sm font-medium">Innovative Technology Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-audiowide leading-tight">
              <span className="text-white">Transforming Ideas into</span>
              <span className="text-accent block mt-2">Digital Reality</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-lg">
              Specializing in embedded systems, IoT solutions, and electronic product development 
              for the industries of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="group inline-flex items-center px-6 py-3 bg-accent text-primary font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="group inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-white/20"
              >
                Contact Us
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6" style={parallaxStyle}>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 group">
                  <Circuit size={40} className="text-accent mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="font-audiowide text-2xl text-white mb-2">8+</h3>
                  <p className="text-gray-200">MCU Platforms</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 group mt-12">
                  <Zap size={40} className="text-accent mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="font-audiowide text-2xl text-white mb-2">100%</h3>
                  <p className="text-gray-200">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 group">
                  <Cpu size={40} className="text-accent mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="font-audiowide text-2xl text-white mb-2">3x</h3>
                  <p className="text-gray-200">Faster Deployment</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 hover:scale-105 group mt-12">
                  <Circuit size={40} className="text-accent mb-4 transform transition-transform duration-300 group-hover:rotate-12" />
                  <h3 className="font-audiowide text-2xl text-white mb-2">24/7</h3>
                  <p className="text-gray-200">Technical Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
