import React from "react";
import "./Scroller.css";
import dark from "/public/images/star-yellow.png";

const ScrollerRight = () => {
  return (
    <div className="scroller-container rt-scroller">
      <div className="scroller-wrapper rt-wrapper">
        <h1 className="scroller-text rt-text">
          Drig.Digital <img className="star-dark" src={dark} /> 
          Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} />
        </h1>
        <h1 className="scroller-text rt-text">
          Drig.Digital <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} /> Drig.Digital{" "}
          <img className="star-dark" src={dark} />
        </h1>
      </div>
    </div>
  );
};

export default ScrollerRight;
