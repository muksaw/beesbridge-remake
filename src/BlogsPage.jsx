import React from "react";
import Navbar from "./Navbar";
import logo from "./assets/logo.png";
import usingAirbyteThumb from "./assets/using_airbytes_blog_thumbnail.png";
import drivingDataThumb from "./assets/driving_data_usbability_thumbnail.png";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    author: "Venkat Dasari",
    date: "Nov 20 2022",
    title: "Using Airbyte with Rest API",
    excerpt: "FYI. Not about building a Rest API Custom Connector!!! If you are here you must have already know how to setup Airbyte on your local or on AWS or on Azure etc. I want to talk a little bit about kicking off Airbyte via Rest API. If there is a UI why do i need to use REST? Well, for a reason, we do not h…",
    link: "https://blog.devgenius.io/using-airbyte-with-rest-api-2e65c180ee80",
    thumbnail: usingAirbyteThumb
  },
  {
    id: 2,
    author: "Navdeep Alam and Mohit Sauhta",
    date: "May 30, 2023",
    title: "Driving Data Usability for Health Plans through Simplified Data Quality Enforcement with Databricks",
    excerpt: "Faced with clinician shortages, an aging population, and stagnant health outcomes, the healthcare industry has the potential to greatly benefit from disruptive technologies such as artificial …",
    link: "https://www.databricks.com/blog/driving-data-usability-health-plans-through-simplified-data-quality-enforcement-databricks",
    thumbnail: drivingDataThumb
  }
];

export default function BlogsPage() {
  return (
    <div>
      <Navbar />
      <section className="blogs-header">
        <h1>Blogs</h1>
        <p className="blogs-subtitle">
          Keep up with our blogs: Read our thought-provoking insights and commentary.
        </p>
      </section>
      <section className="blogs-list fade-in">
        {articles.map(article => (
          <article className="blog-article-horizontal" key={article.id}>
            <div className="blog-thumb-container">
              <div className="blog-thumb-bubble">
                <img src={article.thumbnail} alt={article.title + ' thumbnail'} className="blog-thumbnail-horizontal" />
              </div>
            </div>
            <div className="blog-divider" />
            <div className="blog-content-horizontal">
              <div className="blog-meta-horizontal">
                <span className="blog-author-horizontal">{article.author}</span>
                <span className="blog-date-horizontal">{article.date}</span>
              </div>
              <h2 className="blog-title-horizontal">{article.title}</h2>
              <p className="blog-excerpt-horizontal">{article.excerpt}</p>
              <div className="blog-btn-row-horizontal">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="blog-readmore-btn-horizontal">Read More!</a>
              </div>
            </div>
          </article>
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