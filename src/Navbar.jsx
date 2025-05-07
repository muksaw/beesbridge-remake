import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

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
  return (
    <nav className="navbar">
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