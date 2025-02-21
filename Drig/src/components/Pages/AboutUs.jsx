import React from 'react'
import AboutBanner from '../About/Banner/AboutBanner'
import '../../index.css'
import Header from '../Home/Header/Header'
import Values from '../About/Values/Values'
import Mission from '../About/Mission/Mission'

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
   
   </>
  )
}

export default AboutUs