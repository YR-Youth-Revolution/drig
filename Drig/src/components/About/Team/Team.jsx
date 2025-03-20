import React from "react";
import "./Team.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const teamMembers = [
  {
    name: "Chezhiyan Sathish",
    position: "Senior Web Developer",
    image: "/images/Sathish G P.jpg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kaviya",
    position: "Social Media Manager",
    image: "/images/Kaviya-yr-media.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Gopi Venkat S R",
    position: "Social Media Manager",
    image: "/public/images/Gopi.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Christy Merin Skariah",
    position: "Social Media Manager",
    image: "/public/images/christy.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Suwashi Gulgulia",
    position: "SEO Specialist ",
    image: "/images/suwashi.jpg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Gowri M",
    position: "SEO Executive",
    image: "/images/gowri.jpg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Dheebika",
    position: "Content Writer",
    image: "/images/Dheebika.jpeg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Keerthivasan S",
    position: "Performance Marketer",
    image: "/public/images/Keerthivasan.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Santhosh S",
    position: "Graphic Designer",
    image: "/public/images/santhosh.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Poovarasan",
    position: "Graphic Designer",
    image: "/public/images/poovarasan.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sivaraman C",
    position: "Graphic Designer",
    image: "/public/images/siva.jpeg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Balaji Velan",
    position: "Visual Designer",
    image: "/public/images/balaji.jpg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kishore M",
    position: "Operations Manager",
    image: "/public/images/kishore.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Pratosh S",
    position: "Operations Manager",
    image: "/public/images/Prathosh-yr-Media.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Dinesh Kumar R",
    position: "Operations Manager",
    image: "/public/images/Dinesh-yr.png",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shameem Afroza H S",
    position: "HR Specialist",
    image: "/public/images/shaheem.jpeg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kalpana S",
    position: "Accountant",
    image: "/public/images/kalpana.jpg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Anand S",
    position: "Photographer",
    image: "/public/images/anand.jpeg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Harish R",
    position: "Creative Director",
    image: "/public/images/harish.jpeg",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  }
];

const Team = () => {
  return (
    <div className="team-container">
      <div className="title-growth">
        <h2 className="growth experts">
          Our <span> Experts</span>
        </h2>
      </div>
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <div className="team-members-column" key={index}>
            <div className="team">
              <div className="team-img">
                <img src={member.image} alt={member.name} />
                <div className="team-details">
                <h6>{member.name}</h6>
                  <span>{member.position}</span>
                  
                </div>
              </div>
              <div className="team-social">
                <div className="team-social-tap">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
