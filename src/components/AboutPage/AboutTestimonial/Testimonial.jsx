import React, { useEffect, useState } from 'react';
import downbtn from "../../../Assets/downBtn.png";
import rightArrow from "../../../Assets/rightArrow.png";
import serviceArrow from "../../../Assets/serviceArrow.png";
import TestimonialImg_1 from "../../../Assets/TestimonialImg-1.png";
import TestimonialImg_2 from "../../../Assets/TestimonialImg-2.png";
import TestimonialImg_3 from "../../../Assets/TestimonialImg-3.png";
import TestimonialImg_4 from "../../../Assets/TestimonialImg-4.png";

const Testimonial = () => {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

     const testimonials = [
        {
          id: 1,
          title: "NEXGEN TURNED OUR BUSINESS AROUND!",
          description:
            "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
          image: TestimonialImg_1,
          name: "Sarah Thompson",
          position: "CEO of BlueBloom",
          rightArrowImage: rightArrow,
        },
        {
          id: 2,
          title: "NEXGEN TURNED OUR BUSINESS AROUND!",
          description:
            "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
          image: TestimonialImg_2,
          name: "Sarah Thompson",
          position: "CEO of BlueBloom",
          rightArrowImage: rightArrow,
        },
        {
          id: 3,
          title: "WORKING WITH THE NEXGEN WAS A PLEASURE",
          description:
            "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
          image: TestimonialImg_3,
          name: "Sarah Thompson",
          position: "CEO of BlueBloom",
          rightArrowImage: rightArrow,
        },
        {
          id: 4,
          title: "NEXGEN TURNED OUR BUSINESS AROUND!",
          description:
            "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
          image: TestimonialImg_4,
          name: "Sarah Thompson",
          position: "CEO of BlueBloom",
          rightArrowImage: rightArrow,
        },
      ];

      // Mobile screen //
        useEffect(() => {
          const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
          };
      
          window.addEventListener("resize", handleResize);
          handleResize();
      
          return () => window.removeEventListener("resize", handleResize);
        }, []);
    return (
        <>
            <div
                className="p-3 mt-3 mt-md-5 rounded"
                style={{ border: "2px solid var(--navbarColor)" }}
            >
                <div
                    className="d-flex justify-content-between align-items-center p-4 mt-1 rounded"
                    style={{ backgroundColor: "var(--navbarColor)" }}
                >
                    <h3 style={{ color: "var(--textColor)" }}>TESTIMONIALS</h3>
                    <div className="d-none d-md-flex align-items-center gap-3">
                        <img className="mb-2" src={serviceArrow} alt="" />
                        <p style={{ color: "var(--textColor)" }}>ALL TESTIMONIALS</p>
                    </div>
                </div>

                <div className="row">
                    {testimonials
                        .slice(0, showMore || !isMobile ? testimonials.length : 3)
                        .map((testimonial, index) => (
                            <div key={index} className="col-md-3">
                                <div
                                    className="mt-3 rounded"
                                    style={{ backgroundColor: "var(--navbarColor)" }}
                                >
                                    <div className="p-3">
                                        <h5
                                            className="pt-3 fs-5"
                                            style={{ color: "var(--textColor)" }}
                                        >
                                            {testimonial.title}
                                        </h5>
                                        <p
                                            className="fs-6 pt-3"
                                            style={{ color: "var(--paragraphText)" }}
                                        >
                                            {testimonial.description}
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
                                            <img src={testimonial.image} alt="Testimonial_img" />
                                            <div className="mt-3">
                                                <h6
                                                    className="mb-0"
                                                    style={{ color: "var(--testimonilName)" }}
                                                >
                                                    {testimonial.name}
                                                </h6>
                                                <p
                                                    className="mt-0"
                                                    style={{ color: "var(--navbarLinksColor)" }}
                                                >
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <img
                                                className="w-75"
                                                src={testimonial.rightArrowImage}
                                                alt="Right Arrow"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="mt-3">
                    <button
                        className="d-block d-md-none d-flex gap-2 w-100 p-2 justify-content-center align-items-center rounded backgroundColor"
                        onClick={() => setShowMore(!showMore)}
                        style={{
                            color: "var(--paragraphText)",
                            outline: "none",
                            border: "none",
                            transition: "ease-in-out 0.3s",
                        }}
                    >
                        <img src={showMore ? rightArrow : downbtn} alt="" />
                        {showMore ? "LESS TESTIMONIAL" : "ALL TESTIMONIAL"}
                    </button>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Testimonial
