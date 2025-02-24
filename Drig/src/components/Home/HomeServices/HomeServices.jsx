import React from "react";
import "./HomeServices.css";
import branding from '/public/images/branding.png'


const HomeServices = () => {
  return (
    <>
      <div className="home-services-container">
        <div className="services-head-box">
          <div className="ser-left-box">
            <h3 class="buttonpro who-btn-h3">
              <span>What we offer</span>
            </h3>
            <h2>
              We provide end-to-end customized{" "}
              <span className="heighlights">digital marketing & branding</span>{" "}
              solutions{" "}
            </h2>
          </div>
          <div className="ser-right-box">
            <div className="contact-button">
              <a href="/contact">
                <button>
                  <span>VIEW ALL</span>
                </button>
              </a>
            </div>
          </div>

          <p className="home-services-bg-text">Services</p>
        </div>
      </div>

      <div className="home-services-wrapper">
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">Branding</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={branding}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            From crafting compelling foundational branding elements to sculpting consistent brand messaging through visual aesthetics and storytelling, we build a brand that speaks and connects.
            </p>
          </div>
        </div>
        </div>
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">Graphic Design</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={branding}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            From logos to social media creatives, & brochures to billboards we leave no stone unturned in delivering eye-catching designs reflecting brand identity and while giving life to all your imaginations and mental images.
            </p>
          </div>
        </div>
        </div>
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">Search Engine Optimisation</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={branding}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            We ensure your business laddering up the search engine rankings through the integration of data and content-driven strategies thereby helping your business to stand out amidst the competition.
            </p>
          </div>
        </div>
        </div>
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">Content Marketing</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={branding}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            We boost your brand authority with high-value content with captivating messaging. From website content to social media captions, and blogs to ad copies, we weave your brand story into a compelling narrative.
            </p>
          </div>
        </div>
        </div>
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">PPC Campaigns</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={branding}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            We make sure each click creates value for your business employing lead generation and maximising the ROI returns. Be it Google or social media ads, our impeccable targeted ad strategies help your business soar with the right traffic.
            </p>
          </div>
        </div>
        </div>
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">Website Design & Development</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={branding}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            From sleek UI/UX design to mobile responsiveness, we envision your website running with high functionality and performance to elevate your brand presence and fuelling business growth.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
