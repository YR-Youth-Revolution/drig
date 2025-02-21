import React from "react";
import "./Scroller.css";
import dark from '/public/images/star-dark.png';

const Scroller = () => {
  return (
    <div className="scroller-container">
      <div className="scroller-wrapper">
        <h1 className="scroller-text">Branding <img className="star-dark" src={dark} /> Graphic Design <img className="star-dark" src={dark} /> Search Engine Optimisation <img className="star-dark" src={dark} /> Content marketing <img className="star-dark" src={dark} /> PPC Campaigns <img className="star-dark" src={dark} /> Social Media Marketing <img className="star-dark" src={dark} /> Website design & development <img className="star-dark" src={dark} /> E-commerce <img className="star-dark" src={dark} />
        </h1>       
        <h1 className="scroller-text">Branding <img className="star-dark" src={dark} /> Graphic Design <img className="star-dark" src={dark} /> Search Engine Optimisation <img className="star-dark" src={dark} /> Content marketing <img className="star-dark" src={dark} /> PPC Campaigns <img className="star-dark" src={dark} /> Social Media Marketing <img className="star-dark" src={dark} /> Website design & development <img className="star-dark" src={dark} /> E-commerce <img className="star-dark" src={dark} />
        </h1>       
      </div>
    </div>
  );
};

export default Scroller;
