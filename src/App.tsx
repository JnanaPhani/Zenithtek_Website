import React, { useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import CompanyOverview from "./components/sections/CompanyOverview";
import CoreCapabilities from "./components/sections/CoreCapabilities";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import { Contact as ContactSection } from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import { initSmoothScroll } from "./utils/initSmoothScroll";

function App() {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CompanyOverview />
        <CoreCapabilities />
  <WhyChooseUs />
        <ExpertiseSection />
        <ServicesSection />
      
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
