import React from "react";
import "./HomeServices.css";
import branding from '/public/images/Brand.png'
import GD from '/public/images/Graphics-Design.png'
import SEO from '/public/images/Seo.png'
import Website from '/public/images/WEB HOSTING.png'
import Content from '/public/images/content.png'
import Personal from '/public/images/PERFORMANCE.png'



const HomeServices = () => {
  return (
    <>
      <div className="home-services-container">
        <div className="services-head-box">
          <div className="ser-left-box">
            <h3 className="buttonpro who-btn-h3">
              <span>What we offer</span>
            </h3>
            <h2>
            We <span className="heighlights">Provide Marketing Solutions</span> that count, helping your business scale and leap forward.</h2>
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

          <p className="home-services-bg-text st-ser">Services</p>
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
            We don’t just build brands—we craft identities that captivate and command attention. Through 100% custom branding, we create attention-grabbing logos, compelling brand stories, resonant messaging, and visually appealing designs that leave a lasting impression.
            </p>
          </div>
        </div>
        </div>
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">Performance Marketing</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={GD}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            Guesswork isn’t our strategy. With data-backed campaigns, we deliver over 5X leads and 3X conversions while reducing wasted ad spend by 50%.
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
            <img className="b-img" src={SEO}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            We don’t just chase rankings—we dominate them. Our data-driven and content-focused SEO strategies ensure your business climbs the search rankings and stays at the top.
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
            <img className="b-img" src={Content}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            We don’t just write—we make your brand unmissable. From website content that converts to engaging social captions, high-ranking blogs, and persuasive ad text, we craft high-value content that puts your business in the spotlight.
            </p>
          </div>
        </div>
        </div>
        <div className="ser-t-full">
        <div className="home-services-box">
          <div className="ser-title">
            <h2 className="b-title">Social Media Marketing</h2>
          </div>
          <div className="ser-img">
            <img className="b-img" src={Personal}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            Likes are great, but conversions are better. We create high-impact campaigns that drive over 15X engagement and 10X conversion rates.
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
            <img className="b-img" src={Website}  />
          </div>
          <div className="ser-content">
            <p className="b-content">
            From sleek UI/UX design to mobile responsiveness, we ensure high-functioning websites that elevate your brand presence and drive business growth.
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
