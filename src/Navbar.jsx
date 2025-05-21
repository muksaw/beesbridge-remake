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

// Store scroll positions for visited pages
const scrollPositions = new Map();

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approx height)
      const heroHeight = 200;
      const isScrolled = window.scrollY > heroHeight;
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Save scroll position for current page
      scrollPositions.set(location.pathname, window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Handle page navigation
    if (scrollPositions.has(location.pathname)) {
      // If we've visited this page before, restore its scroll position
      window.scrollTo(0, scrollPositions.get(location.pathname));
    } else {
      // If this is a new page, start at the top
      window.scrollTo(0, 0);
    }
    
    // Run once on mount to set initial state
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, location.pathname]);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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