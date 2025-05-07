import React from "react";
import mohit from "./assets/mohit.png";
import venkat from "./assets/venkat.png";
import logo from "./assets/logo.png";
import aboutImg1 from "./assets/beesbridge_about_image_1.jpg";
import aboutImg2 from "./assets/beesbridge_about_image_2.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const navLinks = [
  { name: "Home", to: "/" },
  {
    name: "About",
    submenu: [
      { name: "About Us", to: "/about" },
      { name: "Certifications", to: "/certifications" }
    ]
  },
  { name: "Company Testimonials", to: "#" },
  { name: "Services", to: "#" },
  { name: "Contact", to: "#" },
  { name: "Partners", to: "#" },
  { name: "Blogs", to: "#" },
];

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
      </section>

      {/* Company Heads */}
      <section className="company-heads fade-in stagger-1">
        <h2>Company Heads</h2>
        <div className="heads-grid">
          <div className="head-card">
            <img src={mohit} alt="Mohit Sauhta" className="headshot" />
            <h3>Mohit Sauhta</h3>
            <p className="head-title">Consulting Partner at Beesbridge LLC</p>
          </div>
          <div className="head-card">
            <img src={venkat} alt="Venkat Dasari" className="headshot" />
            <h3>Venkat Dasari</h3>
            <p className="head-title">Consulting Partner at Beesbridge LLC</p>
          </div>
        </div>
      </section>

      {/* About Description - Two Bubbles with Images */}
      <section className="about-description-section fade-in stagger-2">
        <div className="about-bubbles-row">
          <div className="about-bubble-with-image">
            <img src={aboutImg1} alt="Beesbridge About 1" className="about-bubble-img" />
            <div className="about-bubble-caption">Awesome kickoff to the kickoff! Met Arsalan Tavakoli who made Beesbridge a reality. Databricks company kickoff event.</div>
            <div className="about-bubble-text">
              Top companies across industry sectors work with our data management experts and cloud computing specialists to maximize the value of their data environments. We build scalable data engineering pipelines and robust analytics solutions. Leveraging our deep understanding of big data architecture and cloud computing concepts, we help enterprises reduce total cost of operations and realize revenue faster by shortening go-to-market timelines.
            </div>
          </div>
          <div className="about-bubble-with-image">
            <img src={aboutImg2} alt="Beesbridge About 2" className="about-bubble-img" />
            <div className="about-bubble-caption">Celebrating the launch of HealthVerity's "Runway" app, rearchitected and built by Beesbridge. Unveiled at HealthVerity's All Hands meeting in Philly. Powered by Databricks.</div>
            <div className="about-bubble-text">
              To ensure we provide the best engineering talent to our clients, we invest heavily in future technologies, platforms, and tooling to stay ahead of the competition. We are accredited partners with industry leaders in data warehousing, data lakehouse, and analytics. As trusted and experienced technology advisors, you can rely on us to help select the best-of-breed platforms and build next-generation solutions that will unleash the true value of your data.
            </div>
          </div>
        </div>
        <div className="about-bubble-small"><em>
          Beesbridge is headquartered in Charlotte, NC, USA, and Bengaluru, KA, India, and serves customers worldwide.
        </em></div>
      </section>

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