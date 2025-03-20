import React from 'react'
import './Values.css'
import gif1 from '../../../../public/images/LEFT CHAR.svg'
import gif2 from '../../../../public/images/RIGHT CHAR.svg'
import v1 from '../../../../public/images/v1.webp'
import v2 from '../../../../public/images/v2.webp'
import v3 from '../../../../public/images/v3.webp'
import v4 from '../../../../public/images/v4.webp'
import v1h from '../../../../public/images/v1-hover.gif'
import v2h from '../../../../public/images/v2-hover.gif'
import v3h from '../../../../public/images/v3-hover.gif'
import v4h from '../../../../public/images/v4-hover.gif'

const Values = () => {
  return (
    <>
    <div className='values-container'>
    <div className='values-container-left'>
        <img src={gif1} alt="gif" />
    </div>
    <div className='values-container-center'>
        <div className='values-container-center-heading'>
        <h3 class="buttonpro about-btn-h3"><span>This is Us</span></h3>
        <h2>Years of creating value to <span> businesses</span></h2>
        </div>
        <div className='values-container-center-values'>
            <div className='values'>
                <div className='values-hover'>
                <img className='v1' src={v1} alt="" />
                <img className='v1h' src={v1h} alt="" />
                </div>
                <h3>100+</h3>
            
                <p>Clients<br/> Served</p>
            </div>
            <div className='values'>
                <div className='values-hover'>
                <img className='v1' src={v2} alt="" />
                <img className='v1h' src={v2h} alt="" />
                </div>
                <h3>1M+</h3>
            
                <p>People Impacted Through Campaigns</p>
            </div>
            <div className='values'>
                <div className='values-hover'>
                <img className='v1' src={v3} alt="" />
                <img className='v1h' src={v3h} alt="" />
                </div>
                <h3>25+</h3>
            
                <p>Diverse Industries Served</p>
            </div>
            <div className='values'>
                <div className='values-hover'>
                <img className='v1' src={v4} alt="" />
                <img className='v1h' src={v4h} alt="" />
                </div>
                <h3>15K+</h3>
            
                <p>Creatives Produced for Clients</p>
            </div>
        </div>
    </div>
    <div className='values-container-right'>
        <img src={gif2} alt="" />
    </div>




    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Values