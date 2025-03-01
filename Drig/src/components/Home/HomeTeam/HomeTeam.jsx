import React from "react";
import "./HomeTeam.css";
import Team from "../../../../public/images/Team.png";
import '@fortawesome/fontawesome-free/css/all.min.css';



const teamMembers = [
  {
    name: 'Chezhiyan Sathish',
    position: 'Senior Web Developer',
    image: '/images/Sathish G P.jpg', 
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Dhivya Sankar',
    position: 'Junior Web Developer',
    image: '/images/Dhivya-Yrmedia.png',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Kaviya',
    position: 'SMM',
    image: '/images/Kaviya-yr-media.png',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  },
];

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

      <div className='team-members-container home-team-con'>
        {teamMembers.map((member, index) => (
          <div className='team-members-column' key={index}>
            <div className='team'>
              <div className='team-img'>
                <img src={member.image} alt={member.name} />
                <div className='team-details'>
                  <span>{member.position}</span>
                  <h6>{member.name}</h6>
                </div>
              </div>
              <div className='team-social'>
                <div className='team-social-tap'>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="team-wrapper">
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
      </div> */}
    </>
  );
};

export default HomeTeam;
