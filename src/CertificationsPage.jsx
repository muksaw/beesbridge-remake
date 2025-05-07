import React from "react";
import deAssociate from "./assets/databricksdataengineerassociate.png";
import deProfessional from "./assets/databricksdataengineerprofessionals.png";
import mlAssociate from "./assets/databricksmachinelearningassociate.png";
import genAI from "./assets/databricksgenaiassociate.png";
import aws from "./assets/AWS-Certified-Solutions-Architect-Professional_badge.69d82ff1b2861e1089539ebba906c70b011b928a.png";
import mlProfessional from "./assets/databricksmachinelearningprofessionals.png";
import azure from "./assets/azure-1-qlydstlm0utl644qih4hgmrvytb3zqcdqixjijnddo.png";
import nmsdc from "./assets/NMSDC_CERIFIED_2024-300x280.png";
import Navbar from "./Navbar";

export default function CertificationsPage() {
  return (
    <div>
      <Navbar />
      <section className="certifications-hero">
        <h1>Certifications</h1>
      </section>
      <hr />
      <section className="certifications-grid fade-in stagger-1">
        <div className="cert-row">
          <div className="cert-item">
            <img src={deAssociate} alt="Data Engineer Associate" />
            <div>15 Data Engineer Associates</div>
          </div>
          <div className="cert-item">
            <img src={deProfessional} alt="Data Engineer Professional" />
            <div>5 Data Engineer Professionals</div>
          </div>
          <div className="cert-item">
            <img src={mlAssociate} alt="Machine Learning Associate" />
            <div>4 Machine Learning Associates</div>
          </div>
          <div className="cert-item">
            <img src={genAI} alt="Generative AI Associate" />
            <div>2 Generative AI Associates</div>
          </div>
          <div className="cert-item">
            <img src={aws} alt="AWS Solution Architect Professional" />
            <div>1 AWS Solution Architect Professional</div>
          </div>
          <div className="cert-item">
            <img src={mlProfessional} alt="Machine Learning Professional" />
            <div>3 Machine Learning Professionals</div>
          </div>
        </div>
        <div className="cert-row single">
          <div className="cert-item">
            <img src={azure} alt="Azure Solution Architect Expert" />
            <div>1 Azure Solution Architect Expert</div>
          </div>
        </div>
      </section>
      <hr />
      <section className="certifications-nmsdc fade-in stagger-2">
        <div className="cert-item nmsdc-cert">
          <img src={nmsdc} alt="NMSDC Certified" className="nmsdc-badge" />
          <div className="nmsdc-title">Company Certified NMSDC MBE</div>
        </div>
      </section>
      <hr />
    </div>
  );
} 