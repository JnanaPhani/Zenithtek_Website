import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import CompanyOverview from "./components/sections/CompanyOverview";
import CoreCapabilities from "./components/sections/CoreCapabilities";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import { Contact as ContactSection } from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";
import AdminDashboard from "./components/admin/AdminDashboard";
import { initSmoothScroll } from "./utils/initSmoothScroll";

function MainLayout() {
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
        <ExpertiseSection />
        <ServicesSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
