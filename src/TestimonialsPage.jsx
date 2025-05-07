import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import navdeep from "./assets/navdeep_headshot.jpg";
import jim from "./assets/jim_headshot.jpg";
import anfisa from "./assets/anfisa_headshot.jpg";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: `"I would highly recommend Beesbridge, a data engineering firm that specializes in building scalable, and high-performance data infrastructure. They have a proven track record of delivering innovative solutions that enable businesses to unlock the full potential of their data. Recently, they helped us implement Next Generation Architecture for Delta Lake using Databricks running on both AWS and Azure, and we were extremely pleased with the results. They brought a wealth of expertise and knowledge to the project and were able to quickly identify the best approach for our unique needs. Their team worked closely with us throughout the project, ensuring that we were kept up-to-date on progress and providing regular status reports."`,
    name: "Navdeep Alam",
    title: "CTO, Abacus Insights",
    image: navdeep
  },
  {
    text: `"It has been a pleasure to work with Beesbridge LLC on a number of large scale data initiatives for a variety of health care applications.  Beesbridge specializes in optimizing both performance and costs for petabyte scale workloads using the latest in big data technologies including Snowflake, Databricks, and Hadoop in addition to more legacy relational (including columnar) database technologies.  They also have considerable experience with Lucene-based engines including Elasticsearch, MongoDB, and Solr.  Their approach to engineering complex data systems allows for near immediate return on your consulting dollar investment.  You bring the Beesbridge team in when you are facing complex, multimodal data challenges and want to be able to demonstrate value to demanding business stakeholders.  They possess a deep understanding of cost drivers with at scale data processes having multiple complex pipelines and have the right competencies to troubleshoot existing workloads in order to provide the best solutions for your use cases.  Finally, the Beesbridge team are consummate consulting professionals.  They attack problems, iterate quickly to solution, remain flexible, and keep communication open during the engineering process.  I would strongly recommend Beesbridge for any big data initiative that you are either looking to optimize or building net new."`,
    name: "Jim McKeown",
    title: "SVP, IT, IQVIA",
    image: jim
  },
  {
    text: `"Healthverity is currently in month 5 of the journey to replatform our existing data systems with Beesbridge. When we started the initiative in July and communicated that MVP will be done by the end of year, there were doubts if such aggressive deadline can be met. We haven't reached the end of the year yet, but the amount of work that has been completed so far is impressive. With only 5 people in the team Beesbridge is making impressive progress. At this point the confidence in the new data platform is very high across the organization. Performance tests are showing that we can expect AWS cost cut up to 10x, and it is huge win. Team is very result oriented, and invested in delivery best of the art engineering, such as fully automated resilient pipelines, meta data driven configuration, event driven orchestration. Stream chunking of the staging files. Completely automated infrastructure with exfiltration. Data governance and lineage with PII masking, ML -based mapping of the incoming files. Not mentioning that team is implementing and utilizing Databricks best practices, sharing experience and lesson learns on many other clients. Team is also very experienced with healthcare data use cases, and their technical experience is quite relevant to Healthverity. Very happy with Beesbrige so far and highly recommend this team!"`,
    name: "Anfisa Kaydak",
    title: "VP, Data Product & Engineering, Health Verity",
    image: anfisa
  }
];

export default function TestimonialsPage() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [expandedStates, setExpandedStates] = useState({});
  const testimonialRef = useRef(null);

  const prevTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setShowContent(false);
      
      // Wait for content to disappear before changing index
      setTimeout(() => {
        setIndex((index - 1 + testimonials.length) % testimonials.length);
        // Wait a bit before showing new content
        setTimeout(() => {
          setShowContent(true);
        }, 20);
      }, 150);
    }
  };

  const nextTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setShowContent(false);
      
      // Wait for content to disappear before changing index
      setTimeout(() => {
        setIndex((index + 1) % testimonials.length);
        // Wait a bit before showing new content
        setTimeout(() => {
          setShowContent(true);
        }, 20);
      }, 150);
    }
  };

  // Handle transition end
  useEffect(() => {
    if (showContent) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [showContent]);

  const toggleExpand = () => {
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div>
      <Navbar />
      <section className="testimonials-hero">
        <h1>Company Testimonials</h1>
        <p className="testimonials-subtitle">Real stories from satisfied clients: What they're saying about our company</p>
      </section>
      <section className="testimonial-carousel fade-in stagger-1">
        <button className="carousel-arrow left" onClick={prevTestimonial} aria-label="Previous testimonial">&#8592;</button>
        <div className="testimonial-container">
          <div 
            ref={testimonialRef}
            className={`testimonial-card ${isTransitioning ? 'transitioning' : ''}`}
          >
            <img src={testimonials[index].image} alt={testimonials[index].name} className="testimonial-headshot" />
            <div className="testimonial-client">
              <span className="testimonial-name">{testimonials[index].name}</span>
              <span className="testimonial-title">{testimonials[index].title}</span>
            </div>
            <div className={`testimonial-text-container ${expandedStates[index] ? 'expanded' : ''}`}>
              <blockquote className="testimonial-text">{testimonials[index].text}</blockquote>
              <button className="read-more-btn" onClick={toggleExpand}>
                {expandedStates[index] ? 'Show less' : 'Read more...'}
              </button>
            </div>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={nextTestimonial} aria-label="Next testimonial">&#8594;</button>
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