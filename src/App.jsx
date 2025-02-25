import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigationbar/Navbar/Navbar.jsx";
import Footer from "./components/ServiceComponents/Footer/Footer.jsx";
import DynamicTitle from "./DynamicTitle.jsx";
import About from "./pages/About/About.jsx";
import Blog from "./pages/Blogs/Blogs.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import CaseStudy from "./pages/CaseStudy/CaseStudy.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Services from "./pages/Services/Services.jsx";
function App() {
  const navLinks = [
    { path: "/About", label: "ABOUT", className: "about" },
    { path: "/Services", label: "SERVICES", className: "service" },
    { path: "/Projects", label: "PROJECTS", className: "projects" },
    { path: "/CaseStudy", label: "CASE STUDY", className: "home" },
    { path: "/Blogs", label: "BLOGS", className: "blogs" },
    { path: "/contact", label: "CONTACT US", className: "contact" },
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <DynamicTitle />
        <Navbar
          brandName="TechGuild"
          brandLink="/"
          navLinks={navLinks}
          customClass="my-custom-navbar"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/CaseStudy" element={<CaseStudy />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Careers" element={<Careers />} /> */}
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
