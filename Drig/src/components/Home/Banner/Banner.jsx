import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="home-banner-container">
        <div className="banner-content">
            <h3 class="buttonpro"><span>Drig Digital</span></h3>
            <h1>Driving <span className="heighlights">brand success</span> stories with transformative and impactful <span className="heighlights">digital strategies</span></h1>
            <p>Reuniting the power of creativity, data, strategy and technology to deliver expert-led and made-to-measure marketing solutions.</p>
            <div className="button-box">
            <a href="/contact">
              <button>
                <span>2x Your Bussiness</span>
              </button>
            </a>
            
            <a class="swipe">Get Started <span class="container"><svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg></span> </a>

            </div>
            
        </div>
      </div>
    </>
  );
};

export default Banner;
