import React from "react";
import "../../Contact/contact.css";

const ContactBanner = () => {
  return (
    <div className="contact-banner-container">
     
      <div>
        <video width="600" autoPlay loop muted>
          <source src="/images/coffee_table.f6f1d86703ff04457362.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="contact-banner-content">
      <div className='aboutbanner-container-right-content'>
         <h3 className="buttonpro about-buttonpro"><span>Get in Touch With Us</span></h3>
            <h1>Contact <span>Us</span></h1>
            <p>We need to talk. Together we let’s make bigger wins 

Couldn’t get an answer to that one burning question? Don’t hesitate to reach out to us.  </p>
         </div>
      </div>
    </div>
  );
};

export default ContactBanner;
