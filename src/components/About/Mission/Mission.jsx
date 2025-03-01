import React, { useState } from 'react'
import './Mission.css'
import star from '../../../../public/images/star-yellow.png'


const Mission = () => {
  const [activeBox, setActiveBox] = useState(0); // Default to the first accordion

  const boxes = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "We help businesses stand out amidst the intensifying competing online space, with strategic and innovative marketing solutions that deliver measurable success.  ",
      image: "../../../../public/images/hut_image2.6a796d74ae5e292e31fa.webp",
    },
    {
      id: 2,
      title: "Our Vision ",
      description:
        "To strengthen businesses scale seamlessly in the ever-evolving digital landscape by building stable & powerful online identities driving sustained success.  ",
image:"../../../../public/images/hut_image2.6a796d74ae5e292e31fa.webp",
    },
    {
      id: 3,
      title: "Our Values ",
      description:
        "Innovation & Creativity - Think not just out, but beyond the box- We take great pride in bringing unique content or campaigns to the table that are quite refreshing and achieve breakthrough results.",
        image:"../../../../public/images/hut_image2.6a796d74ae5e292e31fa.webp",
    },
   
  ];



  return (
    <div className="exclusive-container">
    <div className='title-growth'>
    <h2 className='growth'>Growth <span> Trajectory</span></h2>
     
    </div>
      <div className="acc-box">
        <div className="right-container">
       
          <div className="accordion">
            {boxes.map((box, index) => (
              <div
                key={box.id}
                className={`accordion-item ${
                  activeBox === index ? "active" : ""
                }`}
              >
                <h2
                  className={`accordion-title ${
                    activeBox === index ? "active-heading" : ""
                  }`}
                  onClick={() => setActiveBox(index === activeBox ? null : index)} e
                >
                  {box.title}
                </h2>
                <div
                  className={`accordion-description ${
                    activeBox === index ? "visible" : ""
                  }`}
                >
                  {box.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="left-container">
          {activeBox !== null && (
            <div className="image-container">
              <img
                src={boxes[activeBox].image}
                alt={boxes[activeBox].title}
                className="active-image"
              />
            </div>
          )}
        </div>
      </div>
      <div className='abt-growth-star'>
      <img className='growth-star' src={star} alt="star-bright" />
      </div>
    </div>
  );
};
export default Mission