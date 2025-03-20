import React from "react";
import "./HomeCaseStudy.css";
import logos from "/public/images/star-yellow.png";
import work1 from "../../../../public/images/Meal-Maven.jpg";
import work4 from "../../../../public/images/vermilo-case-study.jpg";
import work3 from "../../../../public/images/Seo-Case-Study.png";
import work2 from "../../../../public/images/Branding-case-study.jpg";

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
          <img src={work1} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Future-ready, scalable- Breaking through with high performing & sales-driven websites

          </h3>
          <p>Web Design & Development</p>
       </div>
        </div>
       <div className="case-study-box">
        <div className="case-study-image-box">
           <img src={work2} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Branding made bold & memorable- How we built a<br/> standout identity </h3>
          <p>Graphic Design</p>
       </div>
        </div>
       <div className="case-study-box">
        <div className="case-study-image-box">
           <img src={work3} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Dominated search volume and rankings-  List of our SEO success stories</h3>
          <p>Search Engine Optimisation</p>
       </div>
        </div>
       <div className="case-study-box">
        <div className="case-study-image-box">
           <img src={work4} alt="" />
        </div> 
        <div className="case-study-content-box">
          <h3>Social media play book- Our winning formula to generate 200% engagement and 2X higher conversions</h3>
          <p>Social Media Marketing</p>
       </div>
        </div>
      
      </div>
    </>
  );
};

export default HomeCaseStudy;
