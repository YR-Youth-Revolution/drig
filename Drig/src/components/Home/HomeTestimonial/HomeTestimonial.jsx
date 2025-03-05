import React, { useRef } from "react";
import Slider from "react-slick";
import "./HomeTestimonial.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function HomeTestimonial() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    navigator: false,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="home-services-container">
        <div className="services-head-box">
          <div className="ser-left-box">
            <h3 class="buttonpro who-btn-h3">
              <span>Testimonial</span>
            </h3>
            <h2>
              What <span className="heighlights">Client Say</span> <br /> About
              Us!
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

          <p className="home-services-bg-text">Testimonial</p>
        </div>
      </div>

      <div className="slider-container">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <div>
            <div className="slider-box-rt">
              <div className="icon-box">
                <i class="fa-solid fa-quote-left"></i>
              </div>

              <div className="test-content">
                <p>
                Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.
                </p>
                <h3>- John Doe</h3>
                <h4>  CEO, Snacbox</h4>
              </div>
            </div>
          </div>

          <div>
            <div className="slider-box-rt">
              <div className="icon-box">
                <i class="fa-solid fa-quote-left"></i>
              </div>

              <div className="test-content">
                <p>
                Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.
                </p>
                <h3>- John Doe</h3>
                <h4>  CEO, Snacbox</h4>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-box-rt">
              <div className="icon-box">
                <i class="fa-solid fa-quote-left"></i>
              </div>

              <div className="test-content">
                <p>
                Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.
                </p>
                <h3>- John Doe</h3>
                <h4>  CEO, Snacbox</h4>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-box-rt">
              <div className="icon-box">
                <i class="fa-solid fa-quote-left"></i>
              </div>

              <div className="test-content">
                <p>
                Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.
                </p>
                <h3>- John Doe</h3>
                <h4>  CEO, Snacbox</h4>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-box-rt">
              <div className="icon-box">
                <i class="fa-solid fa-quote-left"></i>
              </div>

              <div className="test-content">
                <p>
                Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.
                </p>
                <h3>- John Doe</h3>
                <h4>  CEO, Snacbox</h4>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-box-rt">
              <div className="icon-box">
                <i class="fa-solid fa-quote-left"></i>
              </div>

              <div className="test-content">
                <p>
                Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.
                </p>
                <h3>- John Doe</h3>
                <h4>  CEO, Snacbox</h4>
              </div>
            </div>
          </div>
        </Slider>
        {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
      </div>
    </>
  );
}
export default HomeTestimonial;
