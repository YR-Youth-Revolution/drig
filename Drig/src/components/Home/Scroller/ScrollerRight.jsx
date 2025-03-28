import React from "react";
import "./Scroller.css";
import dark from "/public/images/star-yellow.png";

const ScrollerRight = () => {
  return (
    <div className="scroller-container rt-scroller">
      <div className="scroller-wrapper rt-wrapper">
        <h1 className="scroller-text rt-text">
        Brand Visibility <img className="star-dark" src={dark} />
        Lead Generation <img
            className="star-dark"
            src={dark}
          /> User Engagement <img className="star-dark" src={dark} /> Brand Visibility{" "}
          <img className="star-dark" src={dark} /> Lead Generation{" "}
          <img className="star-dark" src={dark} /> User Engagement{" "}
          <img className="star-dark" src={dark} /> Brand Visibility{" "}
          <img className="star-dark" src={dark} /> Lead Generation{" "}
          <img className="star-dark" src={dark} />
        </h1>
        <h1 className="scroller-text rt-text">
        User Engagement <img className="star-dark" src={dark} /> Brand Visibility{" "}
          <img className="star-dark" src={dark} /> Lead Generation{" "}
          <img className="star-dark" src={dark} /> User Engagement{" "}
          <img className="star-dark" src={dark} /> Brand Visibility{" "}
          <img className="star-dark" src={dark} /> Lead Generation{" "}
          <img className="star-dark" src={dark} /> User Engagement{" "}
          <img className="star-dark" src={dark} /> Brand Visibility{" "}
          <img className="star-dark" src={dark} />
        </h1>
      </div>
    </div>
  );
};

export default ScrollerRight;
