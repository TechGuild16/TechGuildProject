import React, { useEffect, useState } from 'react'
import './OurTeam.css'
import facebook from "../../../Assets/fb.png";
import linkedIn from "../../../Assets/linkedIn.png";
import twitter from "../../../Assets/twitter_icon.png";
import member_1 from "../../../Assets/member-1.png";
import member_2 from "../../../Assets/member-2.png";
import member_3 from "../../../Assets/member-3.png";
import member_4 from "../../../Assets/member-4.png";
import serviceArrow from "../../../Assets/serviceArrow.png";
import downbtn from "../../../Assets/downBtn.png";
import rightArrow from "../../../Assets/rightArrow.png";

const OurTeam = () => {
 const [showMore, setShowMore] = useState(false);
 const [isMobile, setIsMobile] = useState(false);  

  const members = [
    {
      name: "JOHN SMITH",
      post: "Co-Founder & CEO",
      image: member_1,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
    },
    {
      name: "SARAH ADAMS",
      post: "Head of Design",
      image: member_2,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
    },
    {
      name: "EMILY JOHNSON",
      post: "Lead Web Developer",
      image: member_3,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
    },
    {
      name: "WILLIAM LEE",
      post: "Lead Backend Developer",
      image: member_4,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
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
          className="p-1 p-md-2 mt-3 mt-md-5 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div
            className="d-flex justify-content-between align-items-center p-4 mt-1 rounded"
            style={{ backgroundColor: "var(--navbarColor)" }}
          >
            <h3 style={{ color: "var(--textColor)" }}>
              MEET THE BRILLIANT MINDS BEHIND NEXGEN
            </h3>
            <div className="d-none d-md-flex align-items-center gap-3">
              <img className="mb-2" src={serviceArrow} alt="" />
              <p style={{ color: "var(--textColor)" }}>ALL MEMBERS</p>
            </div>
          </div>

          <div className="container-fluid mt-3">
            <div className="row">
              {members
                .slice(0, showMore || !isMobile ?members.length : 3)
                .map((member, index) => (
                  <div key={index} className="col-md-3">
                    <div
                      className="p-4 mt-2 rounded"
                      style={{
                        background:
                          "linear-gradient(to bottom, var(--btnBackground) 50%, var(--navbarColor) 50%)",
                        textAlign: "center",
                      }}
                    >
                      <h5
                        className="mt-2"
                        style={{ color: "var(--servicesText)" }}
                      >
                        {member.name}
                      </h5>
                      <p style={{ color: "var(--paragraphText)" }}>
                        {member.post}
                      </p>
                      <div className="text-center">
                        <img
                          className="w-100"
                          src={member.image}
                          alt={member.name}
                        />
                      </div>

                      {/* Social Media Icons */}
                      <div className="d-flex justify-content-center mt-3">
                        <span className="w-25">
                          <img src={member.fb} alt="Facebook" />
                        </span>
                        <span className="w-25">
                          <img src={member.twitter} alt="Twitter" />
                        </span>
                        <span className="w-25">
                          <img src={member.linkedIn} alt="LinkedIn" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="">
              <button
                className="d-md-block mt-4 d-md-none w-100 d-flex gap-2  p-2 justify-content-center align-items-center rounded backgroundColor"
                onClick={() => setShowMore(!showMore)}
                style={{
                  color: "var(--paragraphText)",
                  outline: "none",
                  border: "none",
                  transition: "ease-in-out 0.3s",
                }}
              >
                <img src={showMore ? rightArrow : downbtn} alt="" />
                {showMore ? "SHOW LESS" : "ALL MEMBERS"}
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default OurTeam

