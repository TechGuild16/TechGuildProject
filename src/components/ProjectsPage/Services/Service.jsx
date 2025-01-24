import React, { useEffect, useState } from 'react';
import star from '../../../Assets/Star.png';
import Ruler from '../../../Assets/Ruler Pen.png';
import Shield from '../../../Assets/Shield User.png';
import Stopwatch from '../../../Assets/Stopwatch.png';
import downbtn from '../../../Assets/downBtn.png';
import rightArrow from '../../../Assets/rightArrow.png';
const Service = () => {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const services = [
        {
            id: 1,
            image: star,
            title: "STRATEGIC PLANNING",
            description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives."
        },
        {
            id: 2,
            image: Ruler,
            title: "CUSTOMIZED SOLUTION",
            description: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions."
        },
        {
            id: 3,
            image: Shield,
            title: "USER CENTRIC APPROACH",
            description: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces."
        },
        {
            id: 4,
            image: Stopwatch,
            title: "TIMELY DELIVERY",
            description: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality."
        }
    ];

    //Mobile screen //
        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };
    
            window.addEventListener('resize', handleResize);
            handleResize();
    
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
  return (
    <>
       <div className="p-1 mt-3 mt-md-5 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="text-white p-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                        <h3>KEY FEATURES OF OUR PROJECTS</h3>
                    </div>
                    <div className="container-fluid mt-3">
                        <div className="row">
                            <div className="row">
                                {services.slice(0, showMore || !isMobile ? services.length : 3).map((service, index) => (
                                    <div key={index} className="col-12 ms-2 ms-md-0 col-md-3 mb-2">
                                        <div className="p-4 w-100 h-100 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                                            <img className="p-2 rounded" style={{ border: "1px solid var(--border)" }} src={service.image} alt={service.title} />
                                            <h5 className="mt-5" style={{ color: "var(--servicesText)" }}>{service.title}</h5>
                                            <p style={{ color: "var(--paragraphText)" }}>{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <button className="d-block gap-2 d-md-none d-flex p-2 w-100 justify-content-center align-items-center rounded  backgroundColor" onClick={() => setShowMore(!showMore)} style={{ color: "var(--paragraphText)", outline: "none", border: 'none', transition: "ease-in-out 0.3s" }}>
                                    <img src={showMore ? rightArrow : downbtn} alt="" />
                                    {showMore ? "VIEW LESS" : "ALL SERVICES"}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
    </>
  )
}

export default Service
