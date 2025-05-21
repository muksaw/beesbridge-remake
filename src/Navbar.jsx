import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  {
    name: "About",
    submenu: [
      { name: "About Us", to: "/about" },
      { name: "Certifications", to: "/certifications" },
      { name: "Company Testimonials", to: "/testimonials" }
    ]
  },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" },
  { name: "Partners", to: "/partners" },
  { name: "Blogs", to: "/blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  useEffect(() => {
    // Only add scroll listener if we're on the homepage
    if (!isHomePage) {
      setScrolled(true); // Always show solid navbar on other pages
      return;
    }
    
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approx height)
      const heroHeight = 400; // Adjust based on your hero section height
      const isScrolled = window.scrollY > heroHeight;
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to set initial state
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, isHomePage]);
  
  return (
    <nav className={`navbar ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
      <Link to="/">
        <img src={logo} alt="Beesbridge Logo" className="logo" />
      </Link>
      <ul className="nav-links">
        {navLinks.map(link =>
          link.submenu ? (
            <li key={link.name} className="dropdown">
              <span className="nav-link">{link.name} <span className="dropdown-arrow">▼</span></span>
              <ul className="dropdown-menu">
                {link.submenu.map(sublink => (
                  <li key={sublink.name}>
                    <Link to={sublink.to}>{sublink.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.name}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
} 