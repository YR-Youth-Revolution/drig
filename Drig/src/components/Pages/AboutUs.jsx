import React from 'react'
import AboutBanner from '../About/Banner/AboutBanner'
import '../../index.css'
import Header from '../Home/Header/Header'
import Values from '../About/Values/Values'
import Mission from '../About/Mission/Mission'
import WhyUs from '../About/Why Us/WhyUs'
import Team from '../About/Team/Team'
import Footer from '../Home/Footer/Footer'
import HomeTestimonial from '../Home/HomeTestimonial/HomeTestimonial'

const AboutUs = () => {
  return (
   <>
    <div className="header-section">
      <Header/>
     </div>
   <section className='about-banner-section'>
    <AboutBanner/>
   </section>
   <section className='values-section'>
    <Values/>
   </section>
   <section className='mission-section'>
    <Mission/>
   </section>
   <section className='whyus-section'>
    <WhyUs/>
   </section>
   <section className='team-section'>
    <Team/>
   </section>
   <div className="home-services-section">
      <HomeTestimonial />
      </div>
     <div className="footer-section">
      <Footer />
      </div>
   </>
  )
}

export default AboutUs