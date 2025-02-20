import React from "react";
import './Projects.css';
import ProjectHeader from "../../components/ProjectsPage/ProjectHeader/ProjectHeader";
import Service from "../../components/ProjectsPage/Services/Service";
import ProjectShowCase from "../../components/ProjectsPage/ProjectShowCase/ProjectShowCase";
import Testimonial from "../../components/AboutPage/AboutTestimonial/Testimonial";
import FAndQ from "../../components/AboutPage/FAndQ/FAndQ";

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
    )
}
export default Projects;
