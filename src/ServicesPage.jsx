import React from "react";
import Navbar from "./Navbar";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Data Warehousing",
    description: "The company has a strong track record in data warehousing, with extensive experience in designing, building, and maintaining data warehouses for a wide range of clients. Our team is knowledgeable in the latest data warehousing technologies and can help you choose the best solution for your needs. Whether you need to migrate your existing data warehouse to the cloud, build a new data warehouse from scratch, or simply optimize your current setup, we have the expertise to help you succeed. We can ensure that you can get the most value from your data and drive better decision-making and business outcomes."
  },
  {
    title: "Business Intelligence",
    description: "We are highly efficient in business intelligence, with a deep understanding of how to use data and analytics to drive better decision-making and business outcomes. We have extensive experience in designing, building, and maintaining business intelligence solutions for a wide range of clients across industries. Whether you need to build a new business intelligence platform, integrate with existing systems, or simply get started with data analytics, we have the skills and knowledge to help you succeed. Our solutions are designed to be user-friendly, flexible, and cost-effective, ensuring that you can get the most value from your data and make informed decisions that drive your business forward."
  },
  {
    title: "Data Streaming",
    description: "In today's fast-paced digital world, real-time data is more important than ever. That's where our team's expertise in data streaming comes into play. With extensive experience in building and maintaining data streaming pipelines, we can help you harness the power of real-time data to drive better business outcomes. Whether you need to process streaming data in real-time, build machine learning models on streaming data, or simply get started with data streaming, we have the skills and knowledge to help you succeed. Our solutions are designed to be scalable, fault-tolerant, and cost-effective, ensuring that you can make the most of your data in real-time. Don't let your data become stale – let us help you stream your data to success."
  },
  {
    title: "Big Data",
    description: "Artificial intelligence has the power to transform businesses, and our team has the talent to help you harness it. With a wealth of experience in building and deploying machine learning models, we can help you use predictive analytics to drive better business outcomes. You may need to build a machine learning model from scratch, integrate with existing systems, or simply get started with machine learning, all of which we have the skills and knowledge to help you succeed. We will make sure that you can get the most value from your data and make the most of machine learning's predictive capabilities. Let us help you unlock the power of artificial intelligence and drive your business to new heights."
  }
];

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      
      {/* Services Header */}
      <section className="services-header">
        <h1>Our Services</h1>
        <p className="services-subtitle">
          We utilize future technologies, platforms, and tools to stay ahead of the competitors
        </p>
      </section>

      {/* Services Grid */}
      <section className="services-grid fade-in">
        {services.map((service, index) => (
          <div key={index} className="service-bubble">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
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