import React from "react";
import "./HomeCaseStudy.css";
import logos from "/public/images/star-yellow.png";
import work from "../../../../public/images/portfolio-work.png";

const HomeCaseStudy = () => {
  return (
    <>
      <div className="home-services-container">
        <div className="services-head-box">
          <div className="ser-left-box">
            <h3 class="buttonpro who-btn-h3">
              <span>Case Study</span>
            </h3>
            <h2>
            Explore Our Creative  <br/> <span className="heighlights">Case Study</span> Showcase
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

          <p className="home-services-bg-text">casestudy</p>
        </div>
      </div>

      <div className="case-study-wrapper">
       <div className="case-study-box">
        <div className="case-study-image-box">
          <img src={work} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Marketing Agency Website Design</h3>
          <p>Web Design & Development</p>
       </div>
        </div>
       <div className="case-study-box">
        <div className="case-study-image-box">
           <img src={work} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Marketing Agency Website Design</h3>
          <p>Web Design & Development</p>
       </div>
        </div>
       <div className="case-study-box">
        <div className="case-study-image-box">
           <img src={work} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Marketing Agency Website Design</h3>
          <p>Web Design & Development</p>
       </div>
        </div>
       <div className="case-study-box">
        <div className="case-study-image-box">
           <img src={work} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Marketing Agency Website Design</h3>
          <p>Web Design & Development</p>
       </div>
        </div>
      
      </div>
    </>
  );
};

export default HomeCaseStudy;
