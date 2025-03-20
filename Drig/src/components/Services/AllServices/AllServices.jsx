import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./AllServices.css";
import Drig1 from "/public/images/Brand.png";
import Drig2 from "/public/images/WEB HOSTING.png";
import Drig3 from "/public/images/Graphics-Design.png";
import Drig4 from "/public/images/Seo.png";
import Drig5 from "/public/images/content.png";


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
        <Accordion.Item eventKey="2">
          <Accordion.Header>03 Social Media Marketing </Accordion.Header>
          <Accordion.Body>
            <div className="accordion-content">
              <div className="accordion-text">
                <p>
                Let's face it: The social media game is not about being scroll-worthy. The key for us is to build takeaways through social media messages thereby converting your followers into devoted consumers. We design daring social media campaigns based on facts that attract followers, strengthen relationships, and produce tangible benefits for businesses. 
                  <br />
                  <br />
                  Our team of social butterflies help your brand stand out and dominate in a crowded marketplace, with well-equipped social media strategies kept in place.
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
                <img src={Drig3} alt="Service 2" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>04 Search Engine Optimization</Accordion.Header>
          <Accordion.Body>
            <div className="accordion-content">
              <div className="accordion-text">
                <p>
                In the end, it’s always the results that speak: Being completely present is paramount to mere existence within the online sphere. Straight up, your rival is winning if your website isn't ranking. At YR Media, we don’t take the SEO game just for effect. With our data-driven, high-impact SEO strategies, all you can see is a winning edge with your rankings, organic traffic, and conversion rates.
                  <br />
                  <br />
                  We are here to co-create a master plan that will favour elevating your brand to its rightful place of destination at the top by outshining it with increasing traffic and conversions.
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
                <img src={Drig4} alt="Service 2" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>05 Content Writing</Accordion.Header>
          <Accordion.Body>
            <div className="accordion-content">
              <div className="accordion-text">
                <p>
                Content isn’t just a word game: We care for words that speak through your audience together. Through our content plan, we aim to tell your story wrapped in a compelling narrative that leaves a lasting impact. At YR Media, we don't do things the dull way, we make it as lively as possible through the seamless integration of creativity, research and thoughtful strategy. Through the creation of content that is bold, strategic, and results-driven, we make it hard for people to ignore your brand.
                  <br />
                  <br />
                  We have a way with our words. Be it SEO-optimised blogs, social media captions that are captivating and ad copies that convert, our team of experts make sure to address all your needs from the core.
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
                <img src={Drig5} alt="Service 2" />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AllServices;
