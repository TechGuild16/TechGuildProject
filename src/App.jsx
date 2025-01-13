import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navigationbar/Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Services from './pages/Services/Services.jsx';
import Projects from './pages/Projects/Projects.jsx';
import About from './pages/About/About.jsx';
import Careers from './pages/Careers/Careers.jsx';
import Blog from './pages/Blogs/Blogs.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import CaseStudy from './pages/CaseStudy/CaseStudy.jsx';
import Footer from './components/ServiceComponents/Footer/Footer.jsx';
import DynamicTitle from './DynamicTitle.jsx';
import React from 'react';
function App() {
  // Now navbar is an reusable component u can send link according to your need
  const navLinks = [
    { path: "/Services", label: "SERVICES", className: "service" },
    { path: "/CaseStudy", label: "CASE STUDY", className: "home" },
    { path: "/About", label: "ABOUT", className: "about" },
    { path: "/Careers", label: "CAREERS", className: "careers" },
    { path: "/Blogs", label: "BLOGS", className: "blogs" },
    { path: "/Projects", label: "PROJECTS", className: "projects" },
    { path: "/ContactUs", label: "CONTACT US", className: "projects" },
]
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
            <Route path='/' element={<Home/>}/>
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/CaseStudy' element={<CaseStudy/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Careers' element={<Careers/>}/>
            <Route path='/Blogs' element={<Blog/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
