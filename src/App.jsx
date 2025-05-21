import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CertificationsPage from "./CertificationsPage";
import TestimonialsPage from "./TestimonialsPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import PartnersPage from "./PartnersPage";
import BlogsPage from "./BlogsPage";

function App() {
  // Check if using custom domain (will be '/' in both dev and production with custom domain)
  const isCustomDomain = import.meta.env.VITE_CUSTOM_DOMAIN === 'true';
  const basename = isCustomDomain ? '/' : (import.meta.env.DEV ? '/' : '/beesbridge-remake');
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;