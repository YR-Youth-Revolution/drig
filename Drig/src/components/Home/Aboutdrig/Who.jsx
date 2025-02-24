import React from 'react'
import "./Who.css"
import Drig from '/public/images/fav.png'
import one from '/public/images/star-dark.png'
import NumberCounter from 'number-counter';

const Who = () => {
  return (
    <>
     <div className="who-are-container">
        <div className="who-left">
            <img src={Drig} alt="" />
        </div>
        <div className="who-right">
            <h3 class="buttonpro who-btn-h3"><span>Who we are</span></h3>
            <h2>We are a <span className="heighlights">Full Stacked</span> creative digital marketing agency</h2>
            <p>With a bunch of creative nerds, domain experts and strategists, your brand is about to experience accelerated growth, steady advancement and lasting success.</p>
            <ul className="who-list">
                <li><img src={one} /> Creativity is sparked by innovation.</li>
                <li><img src={one} /> Self-assured strategic steps.</li>
                <li><img src={one} /> Strategies powered through data and analytics.</li>
            </ul>
            <div className="contact-button">
            <a href="/contact">
              <button>
                <span>MORE ABOUT DRIG</span>
              </button>
            </a>
          </div>
        </div>
     </div>
     {/* <div className="values-container">
      <div className="run-counter-yr">
      <NumberCounter end={25} delay={4}/>
      <h3>Years Of Experiences</h3>
      </div>
      <div className="run-counter-yr">
      <NumberCounter end={25} delay={4}/>
      <h3>Years Of Experiences</h3>
      </div>
      <div className="run-counter-yr">
      <NumberCounter end={25} delay={4}/>
      <h3>Years Of Experiences</h3>
      </div>
      <div className="run-counter-yr">
      <NumberCounter end={25} delay={4}/>
      <h3>Years Of Experiences</h3>
      </div>
       
     </div> */}
    
    </>
  )
}

export default Who