import React from "react";
import "./HomeTeam.css";
import Team from "../../../../public/images/Team.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeTeam = () => {
  return (
    <>
      <div className="home-services-container">
        <div className="services-head-box">
          <div className="ser-left-box">
            <h3 class="buttonpro who-btn-h3">
              <span>Our Team</span>
            </h3>
            <h2>
            Meet with Our  <br/> <span className="heighlights">Expert Team</span>
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

          <p className="home-services-bg-text">OurTeam</p>
        </div>
      </div>

      <div className="team-wrapper">
       <div className="team-box">
        <div className="team-image-box">
          <img src={Team} alt="" />
          
        </div> 
        <div className="team-image-content-box">
          <h3>Yazhini</h3>
          <p>Web Developer</p>
       </div>
        </div>
        <div className="team-box">
        <div className="team-image-box">
          <img src={Team} alt="" />
        </div> 
        <div className="team-image-content-box">
          <h3>Yazhini</h3>
          <p>Web Developer</p>
       </div>
        </div><div className="team-box">
        <div className="team-image-box">
          <img src={Team} alt="" />
        </div> 
        <div className="team-image-content-box">
          <h3>Yazhini</h3>
          <p>Web Developer</p>
       </div>
        </div>
      </div>
    </>
  );
};

export default HomeTeam;
