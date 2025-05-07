import React from "react";
import Navbar from "./Navbar";
import logo from "./assets/logo.png";
import microsoft from "./assets/microsoft_logo.png";
import databricks from "./assets/databricks_logo.png";
import aws from "./assets/aws_logo.png";
import thoughtspot from "./assets/thoughtspot_logo.jpeg";
import dbt from "./assets/dbt_logo.png";
import fivetran from "./assets/fivetran_logo.png";
import healthverity from "./assets/healthverity_logo.jpg";
import abacusinsights from "./assets/abacus_insights_logo.jpg";
import synthesized from "./assets/synthesized_logo.png";
import { Link } from "react-router-dom";

const partners = [
  { name: "Microsoft", image: microsoft },
  { name: "Databricks", image: databricks },
  { name: "AWS", image: aws },
  { name: "ThoughtSpot", image: thoughtspot },
  { name: "dbt", image: dbt },
  { name: "Fivetran", image: fivetran },
  { name: "HealthVerity", image: healthverity },
  { name: "Abacus Insights", image: abacusinsights },
  { name: "Synthesized", image: synthesized },
];

export default function PartnersPage() {
  return (
    <div>
      <Navbar />
      <section className="partners-header">
        <h1>Partners</h1>
        <p className="partners-subtitle">
          Partnering for growth and innovation: Advancing together with industry leaders.
        </p>
      </section>
      <div className="partners-intro-bubble">
        Our partnerships with top-tier technology companies ensure that our solutions stay at the forefront of innovation and security.
      </div>
      <section className="partners-grid fade-in">
        {partners.map((partner) => (
          <div className="partner-bubble" key={partner.name}>
            <img src={partner.image} alt={partner.name + ' logo'} className="partner-logo" />
            <div className="partner-name">{partner.name}</div>
          </div>
        ))}
      </section>
      <footer className="footer">
        <Link to="/">
          <img src={logo} alt="Beesbridge Logo" className="footer-logo" />
        </Link>
        <p>Beesbridge LLC. All rights reserved.</p>
      </footer>
    </div>
  );
} 