import React from "react";
import Testimonial from "../../components/AboutPage/AboutTestimonial/Testimonial";
import FAndQ from "../../components/AboutPage/FAndQ/FAndQ";
import ProjectHeader from "../../components/ProjectsPage/ProjectHeader/ProjectHeader";
import ProjectShowCase from "../../components/ProjectsPage/ProjectShowCase/ProjectShowCase";
import Service from "../../components/ProjectsPage/Services/Service";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="container-fluid">
        <ProjectHeader />
        <Service />
        <ProjectShowCase />
        <Testimonial />
        <FAndQ />
      </div>
    </>
  );
};
export default Projects;
