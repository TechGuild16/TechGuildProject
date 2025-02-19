import React from "react";
import arrow from "../../../../Assets/ServiceArrow.png";
const TestimonialCard = ({
  heading,
  desc,
  personName,
  personDesignation,
  personImage,
}) => {
  return (
    <div className="testimonialCardWrapper">
      <div className="testimonialCardContent">
        <h4 className="testimonialheading">{heading}</h4>
        <p className="testimonialdescription">{desc}</p>
      </div>
      <div className="bottomTestimonialDiv d-flex align-items-center ">
        <div className="d-flex align-items-center gap-2 ">
          <div className="testimonilaImage">
            <img src={personImage} alt="" />
          </div>
          <div className="testimonialPersonDetails">
            <h5>{personName}</h5>
            <p>{personDesignation}</p>
          </div>
          <div className="testimonialArrow">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
