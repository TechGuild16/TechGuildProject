import React, { useEffect, useState } from 'react';
import './ProjectShowCase';

import downbtn from '../../../Assets/downBtn.png';

import vector from '../../../Assets/Vector.png';
import Balloon from '../../../Assets/Balloon.png';
import serviceArrow from '../../../Assets/serviceArrow.png';
import rightArrow from '../../../Assets/arrowup.png';
import projectShowCase from '../../../Assets/projectShowCaseImg.png';
import projectImg from '../../../Assets/projectImg.png';
import Team_1 from '../../../Assets/Image-1.png';
import Team_2 from '../../../Assets/Image-2.png';
import Team_3 from '../../../Assets/Image-3.png';
import Team_4 from '../../../Assets/Image-4.png';
import Team_5 from '../../../Assets/Image-5.png';

const ProjectShowCase = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility of showcase Projects 
    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    // Mobile screen //
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
            {/* This block is visible on medium and larger screens */}
            <div
                className="d-flex justify-content-between p-4 mt-5 rounded d-none d-md-flex"
                style={{ backgroundColor: "var(--navbarColor)" }}
            >
                <h3 style={{ color: "var(--textColor)" }}>PROJECTS SHOWCASE</h3>
                <div className="d-flex">
                    <button
                        className="mx-2 rounded p-3 font-weight-bold"
                        style={{
                            backgroundColor: "var(--btnBackground)",
                            outline: "none",
                            border: "none",
                            color: "var(--paragraphText)",
                        }}
                    >
                        WEB DESIGN
                    </button>
                    <button
                        className="mx-2 rounded border-0 p-3 font-weight-bold"
                        style={{
                            backgroundColor: "var(--secondaryColor)",
                            outline: "none",
                            color: "var(--navbarLinks)",
                        }}
                    >
                        WEB DEVELOPMENT
                    </button>
                    <button
                        className="mx-2 rounded p-3 font-weight-bold"
                        style={{
                            backgroundColor: "var(--btnBackground)",
                            outline: "none",
                            border: "none",
                            color: "var(--paragraphText)",
                        }}
                    >
                        MARKETING
                    </button>
                </div>
            </div>

            {/* This block is for buttons and will show on small screens */}
           
                <div
                    className="d-flex justify-content-between p-4 mt-4 mt-md-5 rounded d-block d-md-none"
                    style={{ backgroundColor: "var(--navbarColor)" }}
                >
                    <h3 style={{ color: "var(--textColor)" }}>PROJECTS SHOWCASE</h3>
                </div>
                <div className="d-flex d-md-none overflow-auto mt-3" style={{ whiteSpace: 'nowrap' }}>
                    <button
                        className="mx-2 rounded p-3 font-weight-bold"
                        style={{
                            backgroundColor: "var(--btnBackground)",
                            outline: "none",
                            border: "none",
                            color: "var(--paragraphText)",
                        }}
                    >
                        WEB DESIGN
                    </button>
                    <button
                        className="mx-2 rounded border-0 p-3 font-weight-bold"
                        style={{
                            backgroundColor: "var(--secondaryColor)",
                            outline: "none",
                            color: "var(--navbarLinks)",
                        }}
                    >
                        WEB DEVELOPMENT
                    </button>
                    <button
                        className="mx-2 rounded p-3 font-weight-bold"
                        style={{
                            backgroundColor: "var(--btnBackground)",
                            outline: "none",
                            border: "none",
                            color: "var(--paragraphText)",
                        }}
                    >
                        MARKETING
                    </button>
                </div>
           

            <div>
                {/* PROJECT SHOW CASE  */}

                <div className="p-3 mt-3 mt-md-2 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-1 order-2 order-md-0">
                            <div className="rounded p-3 pt-md-5 h-100 w-100" style={{ backgroundColor: 'var(--navbarColor)' }}>
                                <div className="d-flex gap-5">
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img className="p-2 rounded mb-2" style={{ border: "1px solid var(--border)" }} src={vector} alt="" />
                                        <p className="fs-6" style={{ color: "var(--textColor)", fontSize: "12px" }}>ZENETH FITNESS APP</p>
                                    </div>
                                    <div className="d-none d-md-flex justify-content-start align-items-center gap-2">
                                        <img className="mb-2" src={serviceArrow} alt="" />
                                        <p style={{ color: "var(--textColor)", fontSize: "12px" }}>DETAILS</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center w-100 mt-3 pt-3 align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="font-size-12" style={{ color: "var(--paragraphText)" }}>Category <span className="font-size-12 fs-md-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="font-size-12 fs-md-6" style={{ color: "var(--color)" }}>Mobile App Development</span></p>
                                </div>
                                <div className="d-flex justify-content-center w-75  mt-3 pt-3 pt align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="font-size-12" style={{ color: "var(--paragraphText)" }}>Time Taken<span className="font-size-12 fs-md-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="font-size-12 fs-md-6" style={{ color: "var(--color)" }}>6 months</span></p>
                                </div>
                                <div className="mt-3">
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.</p>
                                </div>
                                <div className="d-md-none d-flex justify-content-start align-items-center gap-2">
                                    <img className="mb-2" src={serviceArrow} alt="" />
                                    <p className="fs-6" style={{ color: "var(--textColor)", fontSize: "12px" }}>DETAILS</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-2 order-1 order-md-0">
                            <div className="h-100 w-100 rounded" style={{ backgroundColor: 'var(--navbarColor)', height: '60vh' }}>
                                <img src={projectImg} alt="project Image" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: "8px" }} />
                            </div>
                        </div>

                        <div className="col-md-4 mb-1 d-none d-md-block">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="rounded" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                        <div>
                                            <p className="mx-3 pt-2" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                            <div className="d-flex flex-wrap mx-3 gap-3">
                                                <span className="fs-6 w-25 p-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>React Native</span>
                                                <span className="fs-6 w-25 p-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Fire base</span>
                                                <span className="fs-6 w-25 p-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Redux</span>
                                                <span className="fs-6 w-25 p-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Rest API</span>
                                                <span className="fs-6 w-25 p-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Mongodb</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center align-items-center rounded" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>
                                        <div className="d-flex justify-content-center align-items-center gap-3">
                                            <h5 style={{ color: "var(--color)", fontSize: "14px" }}>TEAM MEMBERS</h5>
                                            <div className="d-flex gap-1">
                                                <div><img className="w-100" src={Team_1} alt="" /></div>
                                                <div><img className="w-100" src={Team_2} alt="" /></div>
                                                <div><img className="w-100" src={Team_3} alt="" /></div>
                                                <div><img className="w-100" src={Team_4} alt="" /></div>
                                                <div><img className="w-100" src={Team_5} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <div className="rounded d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--secondaryColor)', height: '10vh' }}>
                                        <h5>BOOK A CALL</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="p-3 mt-3 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="row">
                        <div className="col-md-4 mb-md-1 order-3 order-md-0">
                            <div className="rounded mt-2 p-3 pt-md-5 h-100 w-100" style={{ backgroundColor: 'var(--navbarColor)' }}>
                                <div className="d-flex gap-5">
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img className="p-2 rounded " style={{ border: "1px solid var(--border)" }} src={Balloon} alt="" />
                                        <p className="fs-6" style={{ color: "var(--textColor)", fontSize: "12px" }}>A-AURA ECOMMERCE</p>
                                    </div>
                                    <div className="d-none d-md-flex justify-content-start align-items-center gap-2">
                                        <img className="mb-2" src={serviceArrow} alt="" />
                                        <p style={{ color: "var(--textColor)", fontSize: "12px" }}>DETAILS</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center w-100 mt-3 pt-3 align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="fs-6 " style={{ color: "var(--paragraphText)" }}>Category <span className="font-size-12 fs-md-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="fs-6" style={{ color: "var(--color)" }}>Web Design & Development</span></p>
                                </div>
                                <div className="d-flex justify-content-center w-75 mt-3 pt-3 align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>Time Taken <span className="fs-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="fs-6" style={{ color: "var(--color)" }}>3 months</span></p>
                                </div>
                                <div className="mt-4">
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>A complete overhaul of a corporate website to enhance its brand identity and user experience.</p>
                                </div>
                                <div className="d-md-none d-flex justify-content-start align-items-center gap-2">
                                    <img className="mb-2" src={serviceArrow} alt="" />
                                    <p className="fs-6" style={{ color: "var(--textColor)", fontSize: "12px" }}>DETAILS</p>
                                </div>
                            </div>
                        </div>

                        <div className=" col-md-4 mb-1">
                            <div className="h-100 w-100" style={{ backgroundColor: 'var(--navbarColor)' }}>
                                <img src={projectShowCase} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: "8px" }} />
                            </div>
                        </div>

                        <div className="col-md-4 mb-1  d-none d-md-block">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="rounded" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                        <p className="mx-3 pt-2" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                        <div className="d-flex flex-wrap mx-3 gap-2">
                                            <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>WordPress</span>
                                            <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>PHP</span>
                                            <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>HTML5</span>
                                            <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>CSS3</span>
                                            <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>JAVASCRIPT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center align-items-center rounded" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>
                                        <div className="d-flex justify-content-center align-items-center gap-3">
                                            <h5 style={{ color: "var(--color)", fontSize: "14px" }}>TEAM MEMBERS</h5>
                                            <div className="d-flex gap-1">
                                                <div><img className="w-100" src={Team_1} alt="" /></div>
                                                <div><img className="w-100" src={Team_2} alt="" /></div>
                                                <div><img className="w-100" src={Team_3} alt="" /></div>
                                                <div><img className="w-100" src={Team_4} alt="" /></div>
                                                <div><img className="w-100" src={Team_5} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-center align-items-center rounded" style={{ backgroundColor: 'var(--secondaryColor)', height: '10vh' }}>
                                        <h5>BOOK A CALL</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/******************visible on small screen**************/}
                <div className="p-2 mt-3 rounded d-md-none" style={{ border: "2px solid var(--navbarColor)", display: isVisible ? 'block' : 'none' }}>
                    <div className="col-md-4 mb-1 d-md-none">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="mt-2 pt-3 rounded" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                    <p className="mx-3" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                    <div className="d-flex flex-wrap mx-4 gap-2">
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>React Native</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Fire base</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Redux</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Rest API</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Mongodb</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="d-flex rounded pt-3 justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: '20vh' }}>
                                    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                                        <h5 style={{ color: "var(--color)", fontSize: "14px" }}>TEAM MEMBERS</h5>
                                        <div className="d-flex gap-1">
                                            <div><img className="w-100" src={Team_1} alt="" /></div>
                                            <div><img className="w-100" src={Team_2} alt="" /></div>
                                            <div><img className="w-100" src={Team_3} alt="" /></div>
                                            <div><img className="w-100" src={Team_4} alt="" /></div>
                                            <div><img className="w-100" src={Team_5} alt="" /></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <div className="d-flex justify-content-center align-items-center rounded" style={{ backgroundColor: 'var(--secondaryColor)', height: '5vh' }}>
                                    <h5>BOOK A CALL</h5>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 mb-1 d-md-none">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="mt-1 pt-3 rounded" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                    <p className="mx-3" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                    <div className="d-flex flex-wrap mx-4 gap-3">
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>HTML5</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>CSS3</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>JAVASCRIPT</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>WordPress</span>
                                        <span className="fs-6 p-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>PHP</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="d-flex pt-3 flex-column rounded justify-content-center align-items-center gap-3" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>
                                    <h5 style={{ color: "var(--color)", fontSize: "14px" }}>TEAM MEMBERS</h5>
                                    <div className="d-flex gap-1">
                                        <div><img className="w-100" src={Team_1} alt="" /></div>
                                        <div><img className="w-100" src={Team_2} alt="" /></div>
                                        <div><img className="w-100" src={Team_3} alt="" /></div>
                                        <div><img className="w-100" src={Team_4} alt="" /></div>
                                        <div><img className="w-100" src={Team_5} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex rounded justify-content-center align-items-center" style={{ backgroundColor: 'var(--secondaryColor)', height: '5vh' }}>
                                    <h5>BOOK A CALL</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <button onClick={handleToggle} className="d-block d-md-none d-flex gap-3 p-2 mt-3 justify-content-center align-items-center rounded  w-100 backgroundColor" style={{ color: "var(--paragraphText)", outline: "none", border: 'none', transition: "ease-in-out 0.3s" }}>
                        <img src={isVisible ? rightArrow : downbtn} alt="" />
                        {isVisible ? "VIEW LESS" : "VIEW ALL"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectShowCase;
