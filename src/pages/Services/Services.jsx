import React from "react";
import arrow from "../../Assets/arrow.png";
import circle from "../../Assets/haflcircle.png";
import sassImg from "../../Assets/servicePageSass.png";
import FaqSection from "../../components/FAQ section/FaqSection";
import MarqueeService from "../../components/ServiceComponents/MarqueeService";
import OurService from "../../components/ServiceComponents/OurService/OurService";
import SucessStory from "../../components/ServiceComponents/SuccessStories/SucessStory";
import Testimonial from "../../components/ServiceComponents/Testimonial/Testimonial";
import "./Services.css";
const Services = () => {
  return (
    <div className="service-container " >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 firstServiceContainer serviceer2"  id="serviceContainer1">
            <div className="">
              <div className="heading">
                <h1 className="uppercase serviceTextColor d-flex align-items-center gap-4">
                  our comprehensive
                  <div className="d-flex align-items-center">
                    <div className="outerarrowcircle norespcircle">
                      <img src={circle} alt="" />
                    </div>
                  </div>
                </h1>
              </div>
              <div className="headingtwo">
                <h1 className="uppercase serviceTextColor">
                  Digital Solutions
                </h1>
              </div>
              <div className="d-flex align-items-center">
                <div className="outerarrowcircle responsivelogo ">
                  <img src={circle} alt="" />
                </div>
              </div>
              <div className="paragraph">
                <p className="serviceparaG">
                  At NexGen, we offer a comprehensive suite of digital solutions
                  designed to propel your business to new heights in the digital
                  realm. With a team of skilled professionals, cutting-edge
                  technologies, and a passion for innovation
                </p>
              </div>
            </div>
            <div className="marquee">
              <MarqueeService />
            </div>
          </div>
          <div className="col-md-3 secondServiceContainer ">
            <img src={sassImg} className="sassImage" alt="" />
            <div className="callToActionService">
              <div className="Servicebuttons d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <img src={arrow} alt="" />
                  <h3>View Blog</h3>
                </div>
                <div className="">
                  <h3>Web Development</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurService />
      <SucessStory />
      <Testimonial />
      <FaqSection />
    </div>
  );
};

export default Services;
