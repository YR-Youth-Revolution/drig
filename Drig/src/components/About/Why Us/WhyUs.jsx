import React from 'react'
import why from '../../../../public/images/hut_image2.6a796d74ae5e292e31fa.webp'
import one from '/public/images/star-dark.png'

const WhyUs = () => {
  return (
    <>
     <div className="who-are-container">
        <div className="who-left why-left">
            <img src={why}alt="" />
        </div>
        <div className="who-right">
            <h3 class="buttonpro who-btn-h3 why-btn-h3"><span>Why Choose Us? </span></h3>
            <h2>Small Team. <span>Smart Minds.</span>  Standout Results</h2>
            <p>At Drig, we challenge ourselves to push our boundaries of excellence near perfection and propel the brand’s growth through the strategic incorporation of marketing strategies and tactics fuelling progress at each phase of the digital journey. </p>
            <ul className="who-list">
                <li><img src={one}/> Strategic & systematic approach-The seamless blend of well-planned, data-driven and creative storytelling </li>
                <li><img src={one}/>End-to-end management- From ideation to execution, the comprehensive marketing plan is enclosed. </li>
                <li><img src={one} />Flexible and scalable strategies- Tailor-made marketing solutions adjust the growth journey of the business.  </li>
                <li><img src={one} />Results-oriented- Emphasise dedicated efforts that are placed to continuously pay off for the success of the brand.  </li>
            </ul>
        </div>
     </div>
    
    </>
  )
}

export default WhyUs