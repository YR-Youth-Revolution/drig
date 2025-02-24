import React from 'react';
import './Team.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const teamMembers = [
  {
    name: 'Chezhiyan Sathish',
    position: 'Senior Web Developer',
    image: '/images/Sathish G P.jpg', // Ensure these images exist in `public/images/`
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
  {
    name: 'Suwashi Gulgulia',
    position: 'SEO Specialist ',
    image: '../../../public/images/suwashi.jpg',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Gowri M',
    position: 'SEO Executive',
    image: '/images/gowri.jpg',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Dheebika',
    position: 'Content Writer',
    image: '../../../public/images/Dheebika.jpeg',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/'
  }
];

const Team = () => {
  return (
    <div className='team-container'>
      <div className='title-growth'>
        <h2 className='growth experts'>
          Our <span> Experts</span>
        </h2>
      </div>
      <div className='team-members-container'>
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
    </div>
  );
};

export default Team;
