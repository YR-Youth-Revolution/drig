import React from 'react'
import './AboutBanner.css'
import roof from '../../../../public/images/roof.webp'
import i1 from '../../../../public/images/i1.webp'
import i2 from '../../../../public/images/i2.webp'
import i3 from '../../../../public/images/hut_image2.6a796d74ae5e292e31fa.webp'
const AboutBanner = () => {
  return (
    <>
 <div className='aboutbanner-container'>
     <div className='aboutbanner-container-left'>
         <img src={roof} alt="" />
         <div className='aboutbanner-container-windows'>
            <div className='aboutbanner-container-windows-left'>
             <div className='aboutbanner-container-windows-top'>
               <img src={i1}alt="" />
             </div>
             <div className='aboutbanner-container-windows-bottom'>
               <img src={i3} alt="" />
             </div>
            </div>
            <div className='aboutbanner-container-windows-right'>
               <img src={i2} alt="" />
            </div>
         </div>
     </div>
     <div className='aboutbanner-container-right'>
         <video src=""></video>
         <div className='aboutbanner-container-right-content'>
            <h3>About Drig</h3>
            <h1>Strategic <span>digital journey-</span> Your Secret growth conspiracy </h1>
            <p>We dream your biggest dream and we envision its potential future- More than any regular marketing agency, we strive hard to be your undeniable digital growth partners in a dynamic digital landscape. With the intent of helping businesses seize their space in the competing digital world, we construct solution-centric and result-oriented marketing strategies that give you an edge over the competitive advantage. Whether you are starting with a digital profile for a startup, or requiring tactical marketing solutions for a growing company, we are a one-stop destination for all your marketing requirements.  </p>
         </div>
         <video src=""></video>
     </div>
  </div>
    </>
  )
}

export default AboutBanner