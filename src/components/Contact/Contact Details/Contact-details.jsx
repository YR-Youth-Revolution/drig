import React from 'react'

const ContactDetails = () => {
  return (
   <>
<div className='contact-details-container'>


    <div className='contact-box'>
    <div className='contact-box-details'>
    <span className="contact-icon">
    <i class="fa-solid fa-phone"></i></span>
    <h4 className="contact-title">Phone</h4>
    <span><a className="contact-list" href="tel:+123456789000">+91 93425 98057</a></span>
    <span><a className="contact-list" href="tel:+123356688000">+91 93425 98057</a></span>
    </div>
    </div>


    <div className='contact-box'>
    <div className='contact-box-details'>
    <span className="contact-icon">
    <i class="fa-solid fa-envelope"></i></span>
    <h4 className="contact-title">Email</h4>
    <span><a className="contact-list" href="mailto:info@procus.com">info@yrmedia.in</a></span>
    <span><a className="contact-list" href="mailto:support@procus.com">info@yrmedia.in</a></span>
    </div>
    </div>

    <div className='contact-box'>
    <div className='contact-box-details'>
    <span className="contact-icon">
    <i class="fa-solid fa-location-dot"></i></span>
    <h4 className="contact-title">Location</h4>
    <span className="contact-list">Old No 30, New, 55, Teachers Colony,
    </span>
    <span className="contact-list">Venkata Rathinam Nagar, Adyar,</span>
    <span className="contact-list">Chennai, Tamil Nadu 600020</span>
    </div>
    </div>





</div>

<div className="contact-form-container">
      <div className="contact-box form-contact-box">
        <div className="contact-box-details">
          <h2 className="contact-title">Get in Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" required />
            <input type="email" placeholder="Your Email" className="form-input" required />
            <textarea placeholder="Your Message" className="form-textarea" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>


    <div className='map-container'>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5451437324427!2d80.2548726!3d13.000918699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526768579b99b7%3A0xac5f5d72f2db1758!2sYR%20Media!5e0!3m2!1sen!2sin!4v1740803546364!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
   </>
  )
}

export default ContactDetails