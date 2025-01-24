import React from "react";
import circle from "../../Assets/haflcircle.png";
import buttonLogo from "../../Assets/sassButton.png";
import sassImg from "../../Assets/sassImage.jpeg";
import shape from "../../Assets/Shape.png";
import CountDown from "../../components/BussinessCountDown/CountDown";
import ChooseTech from "../../components/ChooseTechGuild/ChooseTech";
import FaqSection from "../../components/FAQ section/FaqSection";
import OurHomeService from "../../components/OurHomeService/OurHomeService";
import OurWork from "../../components/OurWork/OurWork";
import MarqueeService from "../../components/ServiceComponents/MarqueeService";
import Testimonial from "../../components/ServiceComponents/Testimonial/Testimonial";
import HomeStats from "../../components/StatsPage/HomeStats";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 firstServiceContainer">
              <div className="">
                <div className="heading">
                  <h1 className="uppercase serviceTextColor d-flex align-items-center gap-4">
                    Partner with
                    <div className="d-flex align-items-center">
                      <div className="outerarrowcircle norespcircle">
                        <img src={circle} alt="" />
                      </div>
                    </div>
                  </h1>
                </div>
                <div className="headingtwo">
                  <h1 className="uppercase serviceTextColor">
                    Top-Tier Agencies
                  </h1>
                </div>
                <div className="d-flex align-items-center">
                  <div className="outerarrowcircle responsivelogo ">
                    <img src={circle} alt="" />
                  </div>
                </div>
                <div className="paragraph">
                  <p>
                    At TechGuild, we believe in the transformative power of
                    digital solutions. Our team of experts is dedicated to
                    helping businesses like yours thrive in the fast-paced
                    digital landscape.
                  </p>
                </div>
              </div>
              <div className="marquee">
                <MarqueeService />
              </div>
            </div>
            <div className="col-md-3 secondServiceContainer ">
              <img src={sassImg} className="sassImage" alt="" />
              <div className="callToActionHome">
                <div className="AboutTechGuild d-flex align-items-center justify-content-center">
                  <div className="">
                    <h5 className="uppercase pt-3">About Tech Guild</h5>
                    <p className="">Know More Us</p>
                  </div>
                </div>
              </div>
              <div className="sassButton">
                <div className="">
                  <img src={shape} className="" alt="" />
                </div>
                <img src={buttonLogo} className="sassimg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <HomeStats />
        <CountDown />
        <div className="footermarquee2">
          <MarqueeService />
        </div>
        <ChooseTech />
        <OurHomeService />
        <OurWork />
        <Testimonial />
        <FaqSection />
      </div>
    </div>
  );
};
export default Home;
