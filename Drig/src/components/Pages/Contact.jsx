import React from 'react'
import '../../index.css'
import Header from '../Home/Header/Header'
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