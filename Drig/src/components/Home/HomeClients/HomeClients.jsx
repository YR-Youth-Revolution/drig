import React from "react";
import "./HomeClients.css";
import logos from "/public/images/star-yellow.png";

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
         <img src={logos} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logos} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logos} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logos} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logos} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logos} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logos} alt="" />
       </div>
       <div className="client-logo-box">
         <img src={logos} alt="" />
       </div>
      </div>
    </>
  );
};

export default HomeClients;
