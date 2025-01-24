import React from "react";
import arrow from "../../Assets/arrowdown.png";
import circle from "../../Assets/startAProject.png";
import "./Careers.css";
import HowToApply from "./HowToApply/howToApply.jsx";
import JobListings from "./joinTeam/jobListing";
import Testimonials from "./Testimonial/Testimonial.jsx";

const Careers = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="career-container ">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-md-8 col-12 firstcareerContainer">
              <div className="heading h-100">
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
                <div className="outerarrowcircle responsivelogo">
                  <img src={circle} alt="" />
=======
      <div className="container-fluid mt-3">

        <div className="row">
          <div className="col-md-8">
            <div
              className="col-12 rounded pt-5 mt-5 d-none d-md-block"
              style={{
                padding: "10px",
                backgroundColor: "var(--navbarColor)",
                height: "65vh",
              }}
            >
              <div className="d-flex ms-md-5 gap-4 mt-5 mt-md-5 justify-content-start align-items-center gap-4">
                <div className="text-center text-md-start">
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    UNLOCK YOUR POTENTIAL
                  </h1>
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    IN THE DIGITAL WORLD
                  </h1>
>>>>>>> origin/anuja
                </div>
                <img
                  className="img-fluid mb-5"
                  src={circle}
                  alt=""
                />
              </div>
            </div>
<<<<<<< HEAD

            <div className="col-md-4 col-12 secondcareerContainer">
              <div className="m-4 align-items-center">
                <div className="heading uppercase">
                  <h1>At NexGen</h1>
                </div>
                <span className="paragraph ">
                  We believe in fostering a dynamic and collaborative work
                  environment that empowers our team members to excel in their
                  respective fields. Join us to be part of a passionate and
                  innovative team dedicated to crafting exceptional digital
                  solutions for clients across the globe. We are committed to
                  nurturing talent, encouraging professional growth, and
                  creating a workplace where creativity thrives.
                </span>
              </div>

              <div className="callToActioncareer mt-3">
                <div className="careerbuttons d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <img src={arrow} alt="" />
                    <h3 className="uppercase">Know more</h3>
=======
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div
              className="col-md-12 rounded pt-5 pt-md-2 mt-3 mt-md-5"
              style={{ backgroundColor: "var(--navbarColor)", height: "70vh" }}
            >
              <div className="row">
                <div className="p-2">
                  <h1 className="mx-4" style={{ color: "var(--servicesText)" }}>At NexGen</h1>
                  <p className="p-4" style={{ color: "var(--paragraphText)" }}>
                    We believe in fostering a dynamic and collaborative work
                    environment that empowers our team members to excel in their
                    respective fields. Join us to be part of a passionate and
                    innovative team dedicated to crafting exceptional digital
                    solutions for clients across the globe. We are committed to
                    nurturing talent, encouraging professional growth, and
                    creating a workplace where creativity thrives.
                  </p>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <img className="mb-2" src={arrow} alt="" />
                    <p className="fs-5" style={{ color: "var(--textColor)" }}>
                      KNOW MORE
                    </p>
>>>>>>> origin/anuja
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/******** visible on small screen  *********/}

        <div
          className="col-12 rounded pt-4 h-100 d-md-none"
          style={{ backgroundColor: "var(--navbarColor)" }}
        >
          <div className="d-flex flex-column flex-md-row justify-content-start align-items-start ms-4">
            <div className="text-center text-md-start ">
              <h1 className="fs-2" style={{ color: "var(--textColor)" }}>
                UNLOCK YOUR POTENTIAL
              </h1>
              <h1 className="fs-2" style={{ color: "var(--textColor)" }}>
                IN THE DIGITAL WORLD
              </h1>
            </div>
            <img
              className="img-fluid mb-5 mb-md-5"
              src={circle}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 d-md-none">
            <div
              className="col-md-12 rounded pt-5 pt-md-2 mt-3 mt-md-5"
              style={{ backgroundColor: "var(--navbarColor)", height: "70vh" }}
            >
              <div className="row">
                <div className="p-2">
                  <h1 className="mx-4" style={{ color: "var(--servicesText)" }}>At NexGen</h1>
                  <p className="p-4" style={{ color: "var(--paragraphText)" }}>
                    We believe in fostering a dynamic and collaborative work
                    environment that empowers our team members to excel in their
                    respective fields. Join us to be part of a passionate and
                    innovative team dedicated to crafting exceptional digital
                    solutions for clients across the globe. We are committed to
                    nurturing talent, encouraging professional growth, and
                    creating a workplace where creativity thrives.
                  </p>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <img className="mb-2" src={arrow} alt="" />
                    <p className="fs-5" style={{ color: "var(--textColor)" }}>
                      KNOW MORE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>





      <div className="mt-3">
        <JobListings />

      </div>
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
