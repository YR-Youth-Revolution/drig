import React from 'react'
import "./Footer.css"
import footerlogo from '../../../../public/images/Drig-White-Logo.png'

const Footer = () => {
  return (
    <>
      <div className="footer-container">

        <div className="footer-left-box">
            <div className="footer-logo">
                <img src={footerlogo} alt="" />
            </div>
            <p className='footer-text'>We are the creative hub and the digital powerhouse for brands of all sizes and scale. At DRIG, we are the brains pulling the strength of the brand, dynamic vigour behind the buzz and the strategic force catapulting your ROI.</p>
            <div className="social-platform">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
            
        </div>
        <div className="footer-middle-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-right-box">
            <h3>Let`s talk</h3>
            <br/>
            <div className="contact-info">
                <p>Drig Digital, Adayar, Chennai</p>
                <hr className='footer-line' />
                <br/><br/>
                <p>+91 9342598057</p>
                <hr className='footer-line' />
                <br/><br/>
                <p>info@drig.digital</p>
            </div>
        </div>
      </div>

      <div className="copyright-container">
        <p>&copy; 2025 Drig Digital. All rights reserved.</p>
      </div>
    
    
    </>
  )
}

export default Footer