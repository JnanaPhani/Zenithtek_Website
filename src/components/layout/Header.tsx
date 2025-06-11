import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoPrimary } from "../ui/Logo";
import { handleSmoothScroll } from "../../utils/smoothScroll";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Capabilities", href: "#capabilities", id: "capabilities" },
    { label: "Expertise", href: "#expertise", id: "expertise" },
    { label: "Services", href: "#services", id: "services" },
    // { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${
        isScrolled ? "shadow-md py-2" : "py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="hover:opacity-90 transition-opacity duration-300"
            >
              <LogoPrimary />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="font-aldrich text-sm lg:text-base text-primary hover:text-primary-dark transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="font-aldrich text-sm lg:text-base px-4 lg:px-5 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md absolute w-full left-0 top-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, item.id);
                    setIsOpen(false);
                  }}
                  className="font-aldrich text-primary hover:text-primary-dark transition-colors duration-300 py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  handleSmoothScroll(e, "contact");
                  setIsOpen(false);
                }}
                className="font-aldrich px-5 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300 text-center mt-2"
              >
                Get in Touch
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
