import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <h1>IT Services and IT Consulting</h1>
        <p>We build bridges for business</p>
        <Link to="/contact" className="cta-btn">Contact Us</Link>
      </header>

      {/* About Section */}
      <section className="about fade-in stagger-1">
        <h2>What is Beesbridge?</h2>
        <p>
          Beesbridge LLC is a boutique firm formed by passionate engineers who specialize in cloud computing, big data engineering, and analytics. We build bridges for the businesses by connecting the data silos formed due to massive growth in data volumes.
        </p>
        <div className="about-buttons">
          <Link to="/about" className="about-btn">Learn more about us!</Link>
          <Link to="/testimonials" className="about-btn">Customer testimonials</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services fade-in stagger-2">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Apache Spark</h3>
            <p>
              Our team is highly proficient in working with Apache Spark, the powerful open-source data processing engine for large-scale data processing. With our extensive experience in big data technologies, we are able to leverage the scalability and performance of Spark to efficiently process and analyze vast amounts of data in real-time. Our solutions utilizing Spark have been instrumental in driving actionable insights and decision-making for our clients across a range of industries. Whether you need to analyze streaming data, build machine learning models, or simply process large data sets, our team has the skills and knowledge to help you succeed with Apache Spark.
            </p>
          </div>
          <div className="service-card">
            <h3>Cloud & Data Engineering</h3>
            <p>
              We are highly skilled in cloud and data engineering, with extensive experience in designing, building, and maintaining robust data systems on cloud platforms. We have a deep understanding of the various cloud offerings and can help you choose the best fit for your needs. Whether you need to migrate your existing data infrastructure to the cloud, build a new data platform from scratch, or simply optimize your current setup, we have the expertise to help you succeed. We assure you that your data systems can handle the demands of your business. With our help, you can unlock the full potential of your data and drive better decision-making and business outcomes.
            </p>
          </div>
          <div className="service-card">
            <h3>Big Data</h3>
            <p>
              We are accustomed to working with big data, the massive amounts of structured and unstructured data that organizations generate in today's digital world. With our extensive experience in big data technologies, we are able to help our clients unlock insights and drive better business outcomes by efficiently processing, analyzing, and visualizing large data sets. Whether you need to build a big data platform, integrate with existing systems, or simply get started with big data analytics, we have the skills and knowledge to help you succeed. Our solutions are designed to be scalable, flexible, and cost-effective, ensuring that you can get the most value from your data.
            </p>
          </div>
        </div>
        <p className="and-more">And many more...</p>
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