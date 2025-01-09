import React from "react";
import TestimonialImg_1 from "../../../Assets/TestimonialImg-1.png";
import TestimonialImg_2 from "../../../Assets/TestimonialImg-2.png";
import TestimonialImg_3 from "../../../Assets/TestimonialImg-3.png";
import TestimonialImg_4 from "../../../Assets/TestimonialImg-4.png";
import Arrow from "../../../Assets/arrowdown.png";
import rightArrow from "../../../Assets/arrowright.png";
import "./testimonials.css";

// TestimonialCard Component
const TestimonialCard = ({ title, description, imgSrc, name, position }) => {
  return (
    <div className="col-md-3 mb-4">
      <div
        className="rounded"
        style={{ backgroundColor: "var(--navbarColor)" }}
      >
        <div className="p-3">
          <h5 className="pt-3 fs-5" style={{ color: "var(--textColor)" }}>
            {title}
          </h5>
          <p className="fs-6 pt-3" style={{ color: "var(--paragraphText)" }}>
            {description}
          </p>
        </div>
        <div
          className="d-flex align-items-center justify-content-between gap-1 rounded"
          style={{
            backgroundColor: "var(--btnBackground)",
            height: "20vh",
          }}
        >
          <div className="w-75 d-flex align-items-center justify-content-center gap-2">
            <img src={imgSrc} alt="Testimonial" />
            <div className="mt-3">
              <h6 className="mb-0" style={{ color: "var(--testimonilName)" }}>
                {name}
              </h6>
              <p className="mt-0" style={{ color: "var(--navbarLinksColor)" }}>
                {position}
              </p>
            </div>
          </div>
          <div className="w-25">
            <img className="w-75" src={rightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
  const testimonials = [
    {
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      imgSrc: TestimonialImg_1,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
    },
    {
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      imgSrc: TestimonialImg_2,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
    },
    {
      title: "WORKING WITH THE NEXGEN WAS A PLEASURE",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      imgSrc: TestimonialImg_3,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
    },
    {
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      imgSrc: TestimonialImg_4,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
    },
  ];

  return (
    <>
      <div
        className="p-3 mt-5 rounded"
        style={{ border: "2px solid var(--navbarColor)" }}
      >
        <div
          className="d-flex justify-content-between p-2 mt-1 rounded"
          style={{ backgroundColor: "var(--navbarColor)" }}
        >
          <h3 style={{ color: "var(--textColor)" }}>TESTIMONIALS</h3>
          <div className="d-flex align-items-center gap-3">
            <img className="mb-2" src={Arrow} alt="Arrow" />
            <p style={{ color: "var(--textColor)" }}>ALL TESTIMONIALS</p>
          </div>
        </div>

        <div className="container-fluid mt-3">
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
