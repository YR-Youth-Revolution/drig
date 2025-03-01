import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./AllServices.css";
import Drig1 from "/public/images/fav.png";
import Drig2 from "/public/images/fav.png";

const AllServices = () => {
  return (
    <div className="all-services-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>01 Branding</Accordion.Header>
          <Accordion.Body>
            <div className="accordion-content">
              <div className="accordion-text">
                <p>
                  Building a memorable brand more than a good one is more
                  important. At YR Media, we make sure to turn heads with the
                  right infusion of visually appealing aesthetics and
                  strategically sounding brand messaging. Whether you are
                  starting from the surface or requiring just a makeover for
                  your existing brand identity, we keep you rest assured with
                  top-notch built-in branding approaches.
                  <br />
                  <br />
                  Unsturdy branding elements? Not on our watch. We construct
                  iconic brands that dominate their markets, captivate
                  consumers, and endure for generations.
                </p>
                <div className="button-box">
                <a href="/contact">
                  <button>
                    <span>View More</span>
                  </button>
                </a>
                </div>
              </div>
              <div className="accordion-image">
                <img src={Drig1} alt="Service 1" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>02 Website development</Accordion.Header>
          <Accordion.Body>
            <div className="accordion-content">
              <div className="accordion-text">
                <p>
                  We care for the basics: Your website serves more than just
                  being a digital portfolio. It's the commercial engine, the
                  salesperson, and the marketing guru all rolled into one for
                  your brand. Here at YR Media, we design and develop
                  high-performance digital experiences that draw in visitors,
                  keep them engaged, and ultimately lead to sales.
                  <br />
                  <br />
                  We help you build a website that operates with lightning
                  speed, multi-functionality features and results accurately
                  optimised.
                </p>

                <div className="button-box">
                  <a href="/contact">
                    <button>
                      <span>View More</span>
                    </button>
                  </a>
                </div>
              </div>
              <div className="accordion-image">
                <img src={Drig2} alt="Service 2" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AllServices;
