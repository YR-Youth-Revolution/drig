import React from 'react'
import './ServicesBanner.css'
import roof from '/public/images/STARTEGY.png'
import star from '/public/images/star-yellow.png'
import stardark from '/public/images/star-dark.png'
const ServicesBanner = () => { 
  return (
    <>
 <div className='aboutbanner-container'>
     <div className='aboutbanner-container-left'>
         <img src={roof} alt="" />
         {/* <div className='aboutbanner-container-windows'>
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
           
         </div> */}

     </div>
     <div className='aboutbanner-container-right'>
      <div className='star-bright'>
        <img src={star} alt="star-bright" />
        </div>
         <div className='aboutbanner-container-right-content'>
         <h3 class="buttonpro about-buttonpro"><span>Our Services</span></h3>
            <h1>Your brand amplified, <span>Your results maximised</span></h1>
            <p>Extraordinary marketing is what your brand needs. To help your company reach new heights, we develop growth strategies that are concrete, quantifiable, and impossible to halt.</p>
         </div>
     </div>
      <img className='stardark' src={stardark} alt="" />
  </div>
    </>
  )
}

export default ServicesBanner