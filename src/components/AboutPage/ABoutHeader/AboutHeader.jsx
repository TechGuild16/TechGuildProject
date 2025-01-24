import React from 'react'
import './AboutHeader.css'

import halfcircle from '../../../Assets/haflcircle.png';
import Button from "../../../Assets/Button.png";
import downbtn from "../../../Assets/downBtn.png";
const AboutHeader = () => {
  const cards = [
    {
      content: "CLIENTS",
      number: "200+",
    },
    {
      content: "PROJECTS",
      number: "280+",
    },
    {
      content: "HAPPY CLIENTS",
      number: "100%",
    },
    {
      content: "FOLLOWER",
      number: "420K",
    },
  ];
  return (
    <>
      
      <div className="row">
          <div className="col-md-7">
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
                    ELEVATING BRANDS
                  </h1>
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    IN THE DIGITAL AGE
                  </h1>
                </div>
                <img
                  className="img-fluid mb-5"
                  src={halfcircle}
                  alt="Button Image"
                />
              </div>
            </div>

            {/******** visible on small screen  *********/}

            <div
              className="col-12 rounded pt-4 h-100 d-md-none"
              style={{ backgroundColor: "var(--navbarColor)" }}
            >
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-start ms-4">
                <div className="text-center text-md-start ">
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    ELEVATING BRANDS
                  </h1>
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    IN THE DIGITAL AGE
                  </h1>
                </div>
                <img
                  className="img-fluid mb-5 mb-md-5"
                  src={halfcircle}
                  alt="Button Image"
                />
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div
              className="col-md-12 rounded pt-5 pt-md-2 mt-3 mt-md-5"
              style={{ backgroundColor: "var(--navbarColor)", height: "64vh" }}
            >
              <div className="row">
                <div className="row">
                  {cards.map((item, index) => (
                    <div key={index} className="col-6 mb-0 mt-2">
                      <div
                        className="rounded d-flex justify-content-center align-items-center mx-2 mx-md-3 p-4 w-100 h-100"
                        style={{
                          backgroundColor: "var(--btnBackground)",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <p
                            className="pt-2 mb-0"
                            style={{ color: "var(--textColor)" }}
                          >
                            {item.content}
                          </p>
                          <h5
                            className="fs-1 mt-0"
                            style={{ color: "var(--aboutNumberColor)" }}
                          >
                            {item.number}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
                    <img className="mb-2" src={downbtn} alt="" />
                    <p className="fs-5" style={{ color: "var(--textColor)" }}>
                      KNOW MORE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default AboutHeader
