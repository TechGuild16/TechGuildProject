import React from "react";
import "./About.css";
import AboutHeader from "../../components/AboutPage/ABoutHeader/AboutHeader";
import OurTeam from "../../components/AboutPage/OurTeam/OurTeam";
import OurAchievment from "../../components/AboutPage/OurAchievment/OurAchievment";
import AwardsAndRecongnition from "../../components/AboutPage/AwardsAndRecognitions/AwardsAndRecongnition";
import Testimonial from "../../components/AboutPage/AboutTestimonial/Testimonial";
import FAndQ from "../../components/AboutPage/FAndQ/FAndQ";
// import cards from '../../Assets/Card.png';
const About = () => {
  return (
    <>
      <div className="container-fluid mt-3 about-page-padding">
           <AboutHeader/>
           <OurTeam/>
           <OurAchievment/>
           <AwardsAndRecongnition/>
           <Testimonial/>
           < FAndQ/>
      </div>
    </>
  );
};
export default About;
