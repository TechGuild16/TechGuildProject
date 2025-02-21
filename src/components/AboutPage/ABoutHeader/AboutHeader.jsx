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
          <div className="col-md-7 about-header">
            <div
              className="col-12 rounded pt-5 mt-3 d-none d-md-block"
              style={{
                padding: "10px",
                backgroundColor: "var(--navbarColor)",
               
              }}
            >
              <div className="about-header-box">
                <div className="text-center text-md-start d-flex gap-3 ">
                  <div className="">

                  <h1 className="" style={{ color: "var(--textColor)" }}>
                    ELEVATING BRANDS
                  </h1>
                  <h1 className="" style={{ color: "var(--textColor)" }}>
                    IN THE DIGITAL AGE
                  </h1>
                  </div>
                  <div className="">

                <img
                  className="img-fluid aboutcircleimage"
                  src={halfcircle}
                  alt="Button Image"
                  />
                  </div>
                </div>
              </div>
            </div>

            {/******** visible on small screen  *********/}

             <div
              className="col-12 rounded pt-4 h-100 w-100 d-md-none "
              style={{ backgroundColor: "var(--navbarColor)" }}
            >
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-start ">
                <div className="text-center  mx-3">
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    ELEVATING BRANDS
                  </h1>
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    IN THE DIGITAL AGE
                  </h1>
                </div>
                <img
                  className="img-fluid mb-5 mb-md-5 mx-2"
                  src={halfcircle}
                  alt="Button Image"
                />
              </div>
            </div>
          </div>

          <div className="col-md-5  aboutmarginfix ">
            <div
              className="col-md-12 rounded pt-3 p-md-3 mt-0 mt-md-3"
              style={{ backgroundColor: "var(--navbarColor"}}
            >
            
                <div className="row">
                  {cards.map((item, index) => (
                    <div key={index} className="col-6 mb-2 mt-0 about-card-section">
                      <div
                        className="rounded d-flex justify-content-center align-items-center p-2 p-md-2 mx-2"
                        style={{
                          backgroundColor: "var(--btnBackground)",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <p
                            className="pt-0 pt-md-2 mb-0"
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
                  <div className="d-flex justify-content-center align-items-center pt-md-1 pt-0 gap-2">
                    <img className="mb-2 mb-md-0" src={downbtn} alt="" />
                    <p className="fs-5" style={{ color: "var(--textColor)" }}>
                      KNOW MORE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
       


      
    </>
  )
}

export default AboutHeader

