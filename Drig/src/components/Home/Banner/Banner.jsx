import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="home-banner-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/images/Banner-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="banner-content">
        <h3 className="buttonpro"><span>Drig Digital</span></h3>
        <h1>Driving <span className="heighlights">100+ brand success</span> stories with execution-first, impactful <span className="heighlights">digital strategies.</span></h1>
        <p>100+ Brands Transformed. 80% Higher Visibility. 5X More Sales. Let’s make your brand’s journey seamless and fail-proof.</p>
        
        <div className="button-box">
          {/* <a href="/contact">
            <button>
              <span>2x Your Business</span>
            </button>
          </a> */}
          <a className="swipe" href="/contact">
            Get Started <span className="container">
              <svg height="34px" width="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
