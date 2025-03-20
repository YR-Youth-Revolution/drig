import React from "react";
import "./HomeClients.css";
import logoone from "/public/images/AURIZ.png";
import logotwo from "/public/images/CHEF MN.png";
import logothree from "/public/images/COSMIC.png";
import logofour from "/public/images/EGCO.png";
import logofive from "/public/images/MUSICO.png";
import logosix from "/public/images/OG.png";
import logoseven from "/public/images/RKR.png";
import logoeight from "/public/images/STUDIO 24.png";

const HomeClients = () => {
  return (
    <>
      <div className="home-services-container">
        <div className="services-head-box">
          <div className="ser-left-box">
            <h3 class="buttonpro who-btn-h3">
              <span>Brand Collaboration</span>
            </h3>
            <h2>
              We worked with <br/>
              <span className="heighlights">100+</span>
              Companies
            </h2>
          </div>
          <div className="ser-right-box">
            <div className="contact-button">
              <a href="/contact">
                <button>
                  <span>VIEW ALL</span>
                </button>
              </a>
            </div>
          </div>

          <p className="home-services-bg-text">OURClients</p>
        </div>
      </div>

      <div className="clients-services-wrapper">
       <div className="client-logo-box">
         <img src={logoone} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logotwo} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logothree} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logofour} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logofive} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logosix} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logoseven} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logoeight} alt="" />
       </div>
      </div>
    </>
  );
};

export default HomeClients;
