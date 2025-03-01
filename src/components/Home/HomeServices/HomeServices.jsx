import React from 'react'
import './HomeServices.css'

const HomeServices = () => {
  return (
    <>
     
     <div className="home-services-container">
        <div className="services-head-box">
            <div className="ser-left-box">
            <h3 class="buttonpro who-btn-h3"><span>What we offer</span></h3>
             <h2>We provide end-to-end customized<span>digital marketing & branding</span> solutions  </h2>
            </div>
            <div className="ser-right-box">
            <div className="contact-button">
            <a href="/contact">
              <button>
                <span>MORE ABOUT DRIG</span>
              </button>
            </a>
          </div>     
            </div>

        <p className="home-services-bg-text">Services</p>
        </div>
        
        <div className="home-services-wrapper">

        </div>
     </div>    
    
    
    
    </>
  )
}

export default HomeServices