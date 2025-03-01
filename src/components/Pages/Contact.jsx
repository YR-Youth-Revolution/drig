import React from 'react'
import AboutBanner from '../About/Banner/AboutBanner'
import '../../index.css'
import Header from '../Home/Header/Header'
import Values from '../About/Values/Values'
import Mission from '../About/Mission/Mission'
import WhyUs from '../About/Why Us/WhyUs'
import Team from '../Team/Team'
import ContactBanner from '../Contact/Contact-banner/Contact-banner'
import ContactDetails from '../Contact/Contact Details/Contact-details'

const ContactUs = () => {
  return (
   <>
    <div className="header-section">
      <Header/>
     </div>
   <section className='contact-banner-section'>
    <ContactBanner/>
   </section>
   <section className='contact-details-section'>
    <ContactDetails/>
   </section>
 
   </>
  )
}

export default ContactUs