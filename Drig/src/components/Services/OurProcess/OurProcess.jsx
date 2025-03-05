import React from 'react'
import './OurProcess.css'
import processone from '../../../../public/images/discovery.png'
import processtwo from '../../../../public/images/cooperation.png'
import processthree from '../../../../public/images/innovation.png'
import processfour from '../../../../public/images/success.png'

const OurProcess = () => {
  return (
    <>
      <div className="our-process-container">
        <div className="process-left-con">
            <div className="process-head-box">
              <h3 className='buttonpro who-btn-h3 pt-process' style={{width: "22%"}}><span>Our Process</span></h3>
              <p>Explore the intricate gears of Drig Digital, where our strategy meets creativity, wisdom, and significant years of expertise, to help your brand constantly hit the ground amidst the competitive marketspace.</p>
            </div>
        </div>
        <div className="process-right-con">
            <div className="process-content-box">
                <div className="process-icon">
                    <img src={processone} alt="" />
                </div>
                <h4>Discovery and Research</h4>
                <p>We don’t give ourselves space for assumptions and speculations. Our first step is to gain an understanding of your brand's DNA, which includes comprehension of your objectives, competitors, and target audience. Moving forward, we lay very strong groundwork by involving significant hours of a detailed market study comprising all the fascinating discoveries in line with the moving industry trends, and audience expectations.</p>
            </div>
            <div className="process-content-box">
                <div className="process-icon">
                    <img src={processtwo} alt="" />
                </div>
                <h4>Creation & Execution</h4>
                <p>The next stage is where we roll up our sleeves to construct a rock-solid strategy that is fit to perfection and execution. At this stage, we make a detailed and impeccable plan sequencing all the movement of actions that are set to be in place. We don't just build; we develop, polish, and deliver with effect, whether it's a dazzling website, a high-ranking SEO approach, or a social media campaign that completely changes the game.</p>
            </div>
            <div className="process-content-box">
                <div className="process-icon">
                    <img src={processthree} alt="" />
                </div>
                <h4>Continuous Tracking & Monitoring</h4>
                <p>We don’t have a laid-back attitude once the wheels are set in motion- rather the go-getters who make things happen. It is not enough for us at YR Media to simply build and launch; we keep a constant check on everything. Staring and evaluating each component carefully, we also keep testing and optimizing them to guarantee that your brand is constantly one step ahead of the competition. We are in the relentless pursuit of maximising the values of your brand by attending detailed moments of fine-tuning.</p>
            </div>
            <div className="process-content-box">
                <div className="process-icon">
                    <img src={processfour} alt="" />
                </div>
                <h4>Sustained Success & Scaling Across </h4>
                <p>Winning has to be consistent- We are not keen on overnight victories, but what we focus on is building and future-proofing your success in the long run. Our expert team tends to read between the lines of your business progress so that we quickly get into scaling mode backed by a rock-solid presence of your marketing and branding efforts. As a leading digital marketing agency, we power up your brand by being solution driven.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default OurProcess