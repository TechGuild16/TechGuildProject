import React, { useEffect, useState } from 'react'
import './OurTeam.css'
import github from "../../../Assets/Group 3.png";
import linkedIn from "../../../Assets/linkedIn.png";
import insta from "../../../Assets/twitter.png";
import member_1 from "../../../Assets/member-1.png";
import member_2 from "../../../Assets/member-2.png";
import member_3 from "../../../Assets/member-3.png";
import member_4 from "../../../Assets/member-4.png";
import serviceArrow from "../../../Assets/serviceArrow.png";
import downbtn from "../../../Assets/downBtn.png";
import rightArrow from "../../../Assets/rightArrow.png";
import arrowup from '../../../Assets/arrowup.png';
const OurTeam = () => {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const members = [
    {
      name: "JOHN SMITH",
      post: "Co-Founder & CEO",
      image: member_1,
      github: github,
      linkedIn: linkedIn,
      insta: insta,
    },
    {
      name: "SARAH ADAMS",
      post: "Head of Design",
      image: member_2,
      github: github,
      linkedIn: linkedIn,
      insta: insta,
    },
    {
      name: "EMILY JOHNSON",
      post: "Lead Web Developer",
      image: member_3,
      github: github,
      linkedIn: linkedIn,
      insta: insta,
    },
    {
      name: "WILLIAM LEE",
      post: "Lead Backend Developer",
      image: member_4,
      github: github,
      linkedIn: linkedIn,
      insta: insta,
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
        className="p-1 p-md-2 marginTop rounded"
        style={{ border: "2px solid var(--navbarColor)" }}
      >
        <div
          className="d-flex justify-content-between align-items-center p-4 mt-1 rounded about-team-member"
          style={{ backgroundColor: "var(--navbarColor)" }}
        >
          <h3 style={{ color: "var(--textColor)" }}>
            MEET THE BRILLIANT MINDS BEHIND TECHGUID
          </h3>
          <div className="d-none d-md-flex align-items-center gap-3">
            <img className="mb-2" src={serviceArrow} alt="" />
            <p style={{ color: "var(--textColor)" }}>ALL MEMBERS</p>
          </div>
        </div>

        <div className="container-fluid p-2 m-0">
          <div className="row">
            {members
              .slice(0, showMore || !isMobile ? members.length : 3)
              .map((member, index) => (
                <div key={index} className="col-md-3">
                  <div
                    className="p-4 mt-2 about-cards"
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


                    <div className="d-flex justify-content-center gap-3 mt-3">
                      <span className="">
                        <img  style={{width:"3.5vw"}} src={member.linkedIn} alt="LinkedIn" />
                      </span>
                      <span className="">
                        <img  style={{width:"3.5vw"}} src={member.github} alt="Github" />
                      </span>
                      <span className="">
                        <img  style={{width:"3.5vw"}} src={member.insta} alt="Twitter" />
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
              <img src={showMore ? arrowup : downbtn} alt="" />
              {showMore ? "SHOW LESS" : "ALL MEMBERS"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam

