import React, { useEffect, useState } from 'react';
import awardIcon from "../../../Assets/awardIcon.png";
import downbtn from "../../../Assets/downBtn.png";
import rightArrow from "../../../Assets/rightArrow.png";

const AwardsAndRecongnition = () => {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

     // Mobile screen //
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
    const awards = [
        {
          dates: "Date. October 2020",
          icon: awardIcon,
          header: "DIGITAL EXCELLENCE AWARD",
          para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
        },
        {
          dates: "Date. October 2020",
          icon: awardIcon,
          header: "DIGITAL EXCELLENCE AWARD",
          para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
        },
        {
          dates: "Date. October 2020",
          icon: awardIcon,
          header: "DIGITAL EXCELLENCE AWARD",
          para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
        },
        {
          dates: "Date. October 2020",
          icon: awardIcon,
          header: "DIGITAL EXCELLENCE AWARD",
          para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
        },
      ];
  return (
    <>
        <div
          className="p-3 mt-3 mt-md-5 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div
            className="p-4 mb-3 rounded"
            style={{ backgroundColor: "var(--navbarColor)" }}
          >
            <h3 style={{ color: "var(--textColor)" }}>
              AWARDS AND RECOGNITIONS
            </h3>
          </div>
          <div className="row">
            {awards
              .slice(0, showMore || !isMobile ? awards.length : 3)
              .map((award, index) => (
                <div key={index} className="col-md-3">
                  <div
                    className="rounded"
                    style={{ backgroundColor: "var(--navbarColor)" }}
                  >
                    <div className="d-flex justify-content-between align-items-center p-3">
                      <p
                        className="p-2 rounded-pill"
                        style={{
                          backgroundColor: "var(--btnBackground)",
                          color: "var(--navbarLinksColor)",
                        }}
                      >
                        {award.dates}
                      </p>
                      <img
                        className="w-25"
                        style={{ width: "4vw" }}
                        src={award.icon}
                        alt=""
                      />
                    </div>
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <h5 style={{ color: "var(--textColor)" }}>
                        {award.header}
                      </h5>
                    </div>
                    <p
                      className="p-4"
                      style={{ color: "var(--paragraphText)" }}
                    >
                      {award.para}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div>
            <button
              className="d-block pt-2 pb-2 d-md-none w-100 d-flex gap-2 justify-content-center align-items-center rounded backgroundColor"
              onClick={() => setShowMore(!showMore)}
              style={{
                color: "var(--paragraphText)",
                outline: "none",
                border: "none",
                transition: "ease-in-out 0.3s",
              }}
            >
              <img src={showMore ? rightArrow : downbtn} alt="" />
              {showMore ? "SHOW LESS" : "ALL AWARDS AND RECOGNITIONS"}
            </button>
          </div>
        </div>
    </>
  )
}

export default AwardsAndRecongnition
