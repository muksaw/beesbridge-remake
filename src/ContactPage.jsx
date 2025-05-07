import React, { useState } from "react";
import Navbar from "./Navbar";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:admin@beesbridge.us?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Navbar />
      
      {/* Contact Header */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Our team is readily available to ensure that your data reaches its full potential
        </p>
      </section>

      <div className="contact-content">
        {/* Contact Information */}
        <section className="contact-info fade-in stagger-1">
          <h2>Our Info</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>EMAIL</h3>
              <a href="mailto:admin@beesbridge.us">admin@beesbridge.us</a>
            </div>
            <div className="info-item">
              <h3>PERSONAL EMAILS</h3>
              <a href="mailto:msauhta@beesbridge.us">msauhta@beesbridge.us</a>
              <a href="mailto:vdasari@beesbridge.us">vdasari@beesbridge.us</a>
            </div>
            <div className="info-item">
              <h3>PHONE NUMBER</h3>
              <a href="tel:980-333-9920">980-333-9920</a>
            </div>
            <div className="info-item">
              <h3>LOCATION</h3>
              <p>Charlotte, NC, USA</p>
              <p>Bengaluru, KA, India</p>
            </div>
          </div>
          <a 
            href="https://www.linkedin.com/company/beesbridge-llc/about/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="linkedin-btn"
          >
            Visit our LinkedIn
          </a>
        </section>

        {/* Contact Form */}
        <section className="contact-form fade-in stagger-2">
          <h2>Send an Email</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Link to="/">
          <img src={logo} alt="Beesbridge Logo" className="footer-logo" />
        </Link>
        <p>Beesbridge LLC. All rights reserved.</p>
      </footer>
    </div>
  );
} 