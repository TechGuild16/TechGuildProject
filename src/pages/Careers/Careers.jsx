import React from "react";
import arrow from "../../Assets/arrowdown.png";
import circle from "../../Assets/startAProject.png";
import "./Careers.css";
import HowToApply from "./HowToApply/howToApply.jsx";
import JobListings from "./joinTeam/jobListing";
import Testimonials from "./Testimonials/testimonials.jsx";
const Careers = () => {
  return (
    <>
      <div className="career-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 firstcareerContainer">
              <div className="">
                <div className="heading">
                  <h1 className="uppercase careerTextColor d-flex align-items-center gap-4">
                    Unlock Your Potential
                    <div className="d-flex align-items-center">
                      <div className="outerarrowcircle norespcircle">
                        <img src={circle} alt="" />
                      </div>
                    </div>
                  </h1>
                </div>
                <div className="headingtwo">
                  <h1 className="uppercase careerTextColor">
                    in the Digital World
                  </h1>
                </div>
                <div className="d-flex align-items-center">
                  <div className="outerarrowcircle responsivelogo ">
                    <img src={circle} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 secondcareerContainer ">
              <div class=" m-4 align-items-center">
                <div className="heading uppercase">
                  <h1>At NexGen</h1>
                </div>
                <span className="paragraph">
                  We believe in fostering a dynamic and collaborative work
                  environment that empowers our team members to excel in their
                  respective fields. Join us to be part of a passionate and
                  innovative team dedicated to crafting exceptional digital
                  solutions for clients across the globe. We are committed to
                  nurturing talent, encouraging professional growth, and
                  creating a workplace where creativity thrives.
                </span>
              </div>

              {/* <img src={sassImg} className="sassImage" alt="" /> */}
              <div className="callToActioncareer">
                <div className="careerbuttons d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={arrow} alt="" />
                    <h3 className="uppercase">Know more</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3"></div>
      <JobListings />
      <div className="mt-3">
        <HowToApply />
      </div>
      <div className="mt-3">
        <Testimonials />
      </div>
    </>
  );
};
export default Careers;
