import React, { useEffect, useState } from 'react'
import downbtn from "../../../Assets/downBtn.png";
// import rightArrow from "../../../Assets/rightArrow.png";
import arrowup from '../../../Assets/arrowup.png';
import './OurAchievment.css'
// import arrowup from '../../../Assets/arrowup.png';
import './OurAchievment.css'
const OurAchievment = () => {

  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const acheivements = [
    {
      month: "September 2023",
      header: "GLOBAL RECOGNITION FOR INNOVATIONS",
      para: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.",
    },
    {
      month: "March 2019",
      header: "INDUSTRY LEADERSHIP ACKNOWLEDGED",
      para: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.",
    },
    {
      month: "August 2015",
      header: "EXPENTIONS INTO INTERNATIONAL MARKETS",
      para: "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.",
    },
    {
      month: "January 2010",
      header: "PIONEERING THE DIGITAL FRONTIER",
      para: "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.",
    },
  ];
  return (
    <>
      <div
        className="p-1 p-md-1 marginTop rounded"
        style={{ border: "2px solid var(--navbarColor)" }}
      >
        <div
          className="d-flex justify-content-between align-items-center p-4 rounded about-acheivement-member"
          style={{ backgroundColor: "var(--navbarColor)" }}
        >
         <h3 className="about-title">
            OUR ACHEIVMENTS
          </h3>
        </div>
        <div className="row">
          {acheivements
            .slice(0, showMore || !isMobile ? acheivements.length : 3)
            .map((acheivement, index) => (
              <div key={index} className="col-md-3 mt-1 mt-md-2 mb-2 mb-md-0">
                <div
                  className="mt-1 mt-md-2 rounded our-acheivement-box"
                  style={{ backgroundColor: "var(--navbarColor)" }}
                >
                  <p
                    className="p-2 mb-2"
                    style={{ color: "var(--navbarLinksColor)" }}
                  >
                    {acheivement.month}
                  </p>
                  <div
                    className="d-flex p-4 justify-content-center align-items-center mb-2"
                    style={{backgroundColor: "var(--btnBackground"}}
                  >
                    <h5 className='ourAchievment-header' style={{ color: "var(--textColor)" }}>
                      {acheivement.header}
                    </h5>
                  </div>
                  <p 
                    className="p-4 ourAchievment-para"
                    style={{ color: "var(--paragraphText)" }}
                  >
                    {acheivement.para}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="d-block mt-4 d-md-none d-flex gap-2 w-100 p-2 justify-content-center align-items-center rounded backgroundColor">
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
            <img src={showMore ? arrowup : downbtn} alt="" />
            {showMore ? "SHOW LESS" : "OUR ACHEIVEMENT"}
          </button>
        </div>
      </div>
    </>
  )
}

export default OurAchievment
