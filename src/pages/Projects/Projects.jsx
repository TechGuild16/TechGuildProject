import React from "react";
import './Projects.css';
import cards from '../../Assets/Card.png';
import Button from '../../Assets/Button.png';
import star from '../../Assets/Star.png';
import Ruler from '../../Assets/Ruler Pen.png';
import Shield from '../../Assets/Shield User.png';
import Stopwatch from '../../Assets/Stopwatch.png';
import vector from '../../Assets/Vector.png';
import Balloon from '../../Assets/Balloon.png';
import Arrow from '../../Assets/Arrow.png';
import rightArrow from '../../Assets/rightArrow.png';
import minusBtn from '../../Assets/minusbtn.png';
import plusBtn from '../../Assets/plusBtn.png';
import projectShowCase from '../../Assets/projectShowCaseImg.png';
import projectImg from '../../Assets/projectImg.png';
import Team_1 from '../../Assets/Image-1.png';
import Team_2 from '../../Assets/Image-2.png';
import Team_3 from '../../Assets/Image-3.png';
import Team_4 from '../../Assets/Image-4.png';
import Team_5 from '../../Assets/Image-5.png';
import TestimonialImg_1 from '../../Assets/TestimonialImg-1.png';
import TestimonialImg_2 from '../../Assets/TestimonialImg-2.png';
import TestimonialImg_3 from '../../Assets/TestimonialImg-3.png';
import TestimonialImg_4 from '../../Assets/TestimonialImg-4.png';


const Projects = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container-fluid mt-5" style={{ minHeight: "50vh", borderRadius: "10px", backgroundColor: "var(--navbarColor)" }}>
                    <div className="row">
                        <div className="col-8 pt-5 mt-5" style={{ padding: "10px" }}>
                            <div className="d-flex justify-content-start align-items-center ms-5 gap-4">
                                <h1 className="text-white">EMPOWERING YOUR</h1>
                                <img src={Button} alt="" />
                            </div>
                            <h1 className="d-flex align-items-center ms-5 text-white">DGITAL VISION</h1>
                            <p className="d-flex align-items-center ms-5" style={{ color: 'var( --paraText)' }}>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your <br /> unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we <br /> deliver exceptional results that elevate your online presence.</p>
                        </div>
                        <div className="col-4" style={{ padding: "10px" }}>
                            <img className="w-100 h-100 p-5" style={{ width: "60vw" }} src={cards} alt="" />
                        </div>
                    </div>
                </div>

                <div className="p-3 mt-5 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="text-white p-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                        <h3>KEY FEATURES OF OUR PROJECTS</h3>
                    </div>

                    <div className="container-fluid mt-3">
                        <div className="row">

                            <div className="col-md-3 mb-4">
                                <div className="p-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <img className="p-2 rounded" style={{ border: "1px solid var(--border)" }} src={star} alt="" />
                                    <h5 className="mt-5" style={{ color: "var(--servicesText" }}>STRATEGIC PLANNING</h5>
                                    <p style={{ color: "var(--paragraphText)" }}>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives.</p>
                                </div>
                            </div>


                            <div className="col-md-3 mb-4">
                                <div className="p-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <img className="p-2 rounded" style={{ border: "1px solid var(--border)" }} src={Ruler} alt="" />
                                    <h5 className="mt-5" style={{ color: "var(--servicesText" }}>CUSTOMIZED SOLUTION</h5>
                                    <p style={{ color: "var(--paragraphText)" }}>We believe in tailoring our services to suit each project's unique requirements, resulting in solutions.</p>
                                </div>
                            </div>


                            <div className="col-md-3 mb-4">
                                <div className="p-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <img className="p-2 rounded" style={{ border: "1px solid var(--border)" }} src={Shield} alt="" />
                                    <h5 className="mt-5" style={{ color: "var(--servicesText" }}>USER CENTRIC APPROACH</h5>
                                    <p style={{ color: "var(--paragraphText)" }}>Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.</p>
                                </div>
                            </div>


                            <div className="col-md-3 mb-4">
                                <div className="p-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <img className="p-2 rounded" style={{ border: "1px solid var(--border)" }} src={Stopwatch} alt="" />
                                    <h5 className="mt-5" style={{ color: "var(--servicesText" }}>TIMELY DELIVERY</h5>
                                    <p style={{ color: "var(--paragraphText)" }}>We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>


                <div className="d-flex justify-content-between p-4 mt-5 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                    <h3 style={{ color: "var(--textColor)" }}>PROJECTS SHOWCASE</h3>
                    <div class="d-flex">
                        <button className="mx-2 rounded p-3 font-weight-bold" style={{ backgroundColor: "var(--btnBackground)", outline: "none", border: "none", color: "var(--paragraphText)" }}>WEB DESIGN</button>
                        <button className="mx-2 rounded border-0 p-3 font-weight-bold" style={{ backgroundColor: "var(--secondaryColor)", outline: "none", color: "var(--navbarLinks)" }}>WEB DEVELOPMENT</button>
                        <button className="mx-2 rounded p-3 font-weight-bold" style={{ backgroundColor: "var(--btnBackground)", outline: "none", border: "none", color: "var(--paragraphText)" }}>MARKETING</button>
                    </div>
                </div>


                <div className="p-3 mt-3 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="row">
                        <div className="col-md-4 mb-1">
                            <div className="card p-4 pt-5" style={{ backgroundColor: 'var(--navbarColor)', height: '60vh' }}>
                                <div className="d-flex gap-5">
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img className="p-2 rounded mb-2" style={{ border: "1px solid var(--border)" }} src={vector} alt="" />
                                        <p className="fs-6" style={{ color: "var(--textColor)", fontSize: "12px" }}>ZENITH FITNESS APP</p>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img className="mb-2" src={Arrow} alt="" />
                                        <p style={{ color: "var(--textColor)", fontSize: "12px" }}>DETAILS</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center w-75 mt-3 pt-3 align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>Category <span className="fs-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="fs-6" style={{ color: "var(--color)" }}>Mobile App Development</span></p>
                                </div>
                                <div className="d-flex justify-content-center w-50 mt-3 pt-3 align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>Time Taken <span className="fs-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="fs-6" style={{ color: "var(--color)" }}>6 months</span></p>
                                </div>
                                <div className="mt-4">
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-1">
                            <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '60vh' }}>
                                <img src={projectShowCase} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: "8px" }} />
                            </div>
                        </div>

                        <div className="col-md-4 mb-1">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                        <div className="mt-3">
                                            <p className="mx-3" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                            <div className="d-flex flex-wrap mx-3 gap-2">
                                                <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>React Native</span>
                                                <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Firebase</span>
                                                <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Redux</span>
                                                <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>REST API</span>
                                                <span className="fs-6 w-25 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>MongoDB</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>
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
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--secondaryColor)', height: '10vh' }}>
                                        <h5>BOOK A CALL</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="p-3 mt-3 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="row">
                        <div className="col-md-4 mb-1">
                            <div className="card p-4 pt-5" style={{ backgroundColor: 'var(--navbarColor)', height: '60vh' }}>
                                <div className="d-flex gap-5">
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img className="p-2 rounded mb-2" style={{ border: "1px solid var(--border)" }} src={Balloon} alt="" />
                                        <p className="fs-6" style={{ color: "var(--textColor)", fontSize: "12px" }}>A-AURA ECOMMERCE</p>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                        <img className="mb-2" src={Arrow} alt="" />
                                        <p style={{ color: "var(--textColor)", fontSize: "12px" }}>DETAILS</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center w-75 mt-3 pt-3 align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>Category <span className="fs-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="fs-6" style={{ color: "var(--color)" }}>Web Design & Development</span></p>
                                </div>
                                <div className="d-flex justify-content-center w-50 mt-3 pt-3 align-items-center" style={{ backgroundColor: "var(--btnBackground)", height: '8vh', borderRadius: "2rem" }}>
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>Time Taken <span className="fs-6" style={{ color: "var(--secondaryHoverColor)" }}> . </span> <span className="fs-6" style={{ color: "var(--color)" }}>3 months</span></p>
                                </div>
                                <div className="mt-4">
                                    <p className="fs-6" style={{ color: "var(--paragraphText)" }}>A complete overhaul of a corporate website to enhance its brand identity and user experience.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-1">
                            <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '60vh' }}>
                                <img src={projectImg} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: "8px" }} />
                            </div>
                        </div>

                        <div className="col-md-4 mb-1">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                        <div className="mt-3">
                                            <p className="mx-3" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
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
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>
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
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--secondaryColor)', height: '10vh' }}>
                                        <h5>BOOK A CALL</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/***********TESTIMONIALS************/}

                <div className="p-3 mt-5 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="d-flex justify-content-between align-items-center p-4 mt-1 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                        <h3 style={{ color: "var(--textColor)" }}>TESTIMONIALS</h3>
                        <div className="d-flex align-items-center gap-3">
                            <img className="mb-2" src={Arrow} alt="" />
                            <p style={{ color: "var(--textColor)" }}>ALL TESTIMONIALS</p>
                        </div>
                    </div>

                    <div className="container-fluid mt-3">
                        <div className="row">
                            <div className="col-md-3 mb-4">
                                <div className="rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <div className="p-3">
                                        <h5 className="pt-3 fs-5" style={{ color: "var(--textColor)" }}>NEXGEN TURNED OUR BUSSINESS AROUND!</h5>
                                        <p className="fs-6 pt-3" style={{ color: "var(--paragraphText)" }}>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-1 rounded" style={{ backgroundColor: "var(--btnBackground)", height: "20vh" }}>
                                        <div className="w-75 d-flex align-items-center justify-content-center gap-2">
                                            <img src={TestimonialImg_1} alt="Testimonial_img" />
                                            <div className="mt-3">
                                                <h6 className="mb-0" style={{ color: "var(--testimonilName)" }}>Sarah Thompson</h6>
                                                <p className="mt-0" style={{ color: "var(--navbarLinksColor)" }}>CEO of BlueBloom</p>
                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <img className="w-75" src={rightArrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <div className="p-3">
                                        <h5 className="pt-3 fs-5" style={{ color: "var(--textColor)" }}>NEXGEN TURNED OUR BUSSINESS AROUND!</h5>
                                        <p className="fs-6 pt-3" style={{ color: "var(--paragraphText)" }}>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-1 rounded" style={{ backgroundColor: "var(--btnBackground)", height: "20vh" }}>
                                        <div className="w-75 d-flex align-items-center justify-content-center gap-2">
                                            <img src={TestimonialImg_2} alt="Testimonial_img" />
                                            <div className="mt-3">
                                                <h6 className="mb-0" style={{ color: "var(--testimonilName)" }}>Sarah Thompson</h6>
                                                <p className="mt-0" style={{ color: "var(--navbarLinksColor)" }}>CEO of BlueBloom</p>
                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <img className="w-75" src={rightArrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <div className="p-3">
                                        <h5 className="pt-3 fs-5" style={{ color: "var(--textColor)" }}>WORKING WITH THE NEXGEN WAS A PLEASURE</h5>
                                        <p className="fs-6 pt-3" style={{ color: "var(--paragraphText)" }}>Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-1 rounded" style={{ backgroundColor: "var(--btnBackground)", height: "20vh" }}>
                                        <div className="w-75 d-flex align-items-center justify-content-center gap-2">
                                            <img src={TestimonialImg_3} alt="Testimonial_img" />
                                            <div className="mt-3">
                                                <h6 className="mb-0" style={{ color: "var(--testimonilName)" }}>Sarah Thompson</h6>
                                                <p className="mt-0" style={{ color: "var(--navbarLinksColor)" }}>CEO of BlueBloom</p>
                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <img className="w-75" src={rightArrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4">
                                <div className="rounded" style={{ backgroundColor: "var(--navbarColor)" }} >
                                    <div className="p-3">
                                        <h5 className="pt-3 fs-5" style={{ color: "var(--textColor)" }}>NEXGEN TURNED OUR BUSSINESS AROUND!</h5>
                                        <p className="fs-6 pt-3" style={{ color: "var(--paragraphText)" }}>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-1 rounded" style={{ backgroundColor: "var(--btnBackground)", height: "20vh" }}>
                                        <div className="w-75 d-flex align-items-center justify-content-center gap-2">
                                            <img src={TestimonialImg_4} alt="Testimonial_img" />
                                            <div className="mt-3">
                                                <h6 className="mb-0" style={{ color: "var(--testimonilName)" }}>Sarah Thompson</h6>
                                                <p className="mt-0" style={{ color: "var(--navbarLinksColor)" }}>CEO of BlueBloom</p>
                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <img className="w-75" src={rightArrow} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

                {/*********FREQUENTLY ASKED QUESTIONS**********/}

                <div className="d-flex justify-content-between align-items-center  p-4 mt-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                    <h3 style={{ color: "var(--textColor)" }}>FREQUENTLY ASKED QUESTIONS</h3>
                    <div className="d-flex align-items-center gap-3">
                        <img className="mb-2" src={Arrow} alt="" />
                        <p style={{ color: "var(--textColor)" }}>VIEW ALL</p>
                    </div>
                </div>

                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                        <div className="mt-3">
                                            <div className="d-flex p-4 gap-2">
                                                <div className="w-100">
                                                    <p className="fw-bold" style={{ color: "var(--servicesText)" }}>How long does it take to complete a web development project?</p>
                                                    <p style={{ color: "var(--paragraphText)" }}>The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.</p>
                                                </div>
                                                <div>
                                                    <img className="w-100" src={minusBtn} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>
                                        <div className="mt-3">
                                            <div className="d-flex p-4 align-items-center justify-content-between gap-2">
                                                <div className="w-100">
                                                    <p className="fw-bold" style={{ color: "var(--servicesText)" }}>How long does it take to complete a web development project?</p>
                                                </div>
                                                <div className="mb-2">
                                                    <img className="w-100" src={plusBtn} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>

                                    </div>

                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>

                                    </div>

                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: '18vh' }}>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="col-md-5">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: "60vh" }}>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Projects
