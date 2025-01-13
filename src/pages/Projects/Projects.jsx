import React, { useEffect, useState } from "react";
import './Projects.css';
import cards from '../../Assets/Card.png';
import downbtn from '../../Assets/downBtn.png';
import Button from '../../Assets/Button.png';
import star from '../../Assets/Star.png';
import Ruler from '../../Assets/Ruler Pen.png';
import Shield from '../../Assets/Shield User.png';
import Stopwatch from '../../Assets/Stopwatch.png';
import vector from '../../Assets/Vector.png';
import Balloon from '../../Assets/Balloon.png';
import serviceArrow from '../../Assets/serviceArrow.png';
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
    const [activeQuestion, setActiveQuestions] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);


    // Toggle visibility of showcase Projects 
    const handleToggle = () => {
        setIsVisible(!isVisible);
    };



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
    const faqs = [
        {
            question: 'How long does it take to complete a web development project?',
            answer:
                "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
        },
        {
            question: 'Can you handle large-scale mobile app development projects?',
            answer: 'Yes, we have experience in handling large-scale projects with complex requirements.'
        },
        {
            question: 'Can you integrate third-party APIs into our mobile app?',
            answer: 'Absolutely! We specialize in integrating third-party APIs to enhance functionality.'
        },
        {
            question: 'How do you ensure cross-platform compatibility for mobile apps?',
            answer: 'We follow best practices to ensure your app works seamlessly across multiple platforms.'
        },
        {
            question: 'What is your approach to user experience (UX) design?',
            answer: 'We prioritize intuitive and user-friendly design to ensure a great user experience.'
        }
    ];
    const testimonials = [
        {
            id: 1,
            title: "NEXGEN TURNED OUR BUSINESS AROUND!",
            description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            image: TestimonialImg_1,
            name: "Sarah Thompson",
            position: "CEO of BlueBloom",
            rightArrowImage: rightArrow
        },
        {
            id: 2,
            title: "NEXGEN TURNED OUR BUSINESS AROUND!",
            description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            image: TestimonialImg_2,
            name: "Sarah Thompson",
            position: "CEO of BlueBloom",
            rightArrowImage: rightArrow
        },
        {
            id: 3,
            title: "WORKING WITH THE NEXGEN WAS A PLEASURE",
            description: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
            image: TestimonialImg_3,
            name: "Sarah Thompson",
            position: "CEO of BlueBloom",
            rightArrowImage: rightArrow
        },
        {
            id: 4,
            title: "NEXGEN TURNED OUR BUSINESS AROUND!",
            description: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
            image: TestimonialImg_4,
            name: "Sarah Thompson",
            position: "CEO of BlueBloom",
            rightArrowImage: rightArrow
        }
    ];

    const toggleContent = (index) => {
        setActiveQuestions(activeQuestion === index ? null : index);
    };

    // form handling 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
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
            <div className="container-fluid">
                {/*********************FIRST COMPONENT******************/}
                <div className="container-fluid mt-3 mt-md-5" style={{ minHeight: "50vh", borderRadius: "10px", backgroundColor: "var(--navbarColor)" }}>
                    <div className="row">
                        <div className="col-12 col-md-8 pt-3 md-pt-5 mt-2 md-mt-5">
                            <div className="d-flex flex-column flex-md-row justify-content-start align-items-center ms-0 ms-md-5 gap-4">
                                <div className="order-0 order-md-1 mt-md-5">
                                    <h1 style={{ color: "var(--textColor)" }}>EMPOWERING YOUR</h1>
                                    <h1 style={{ color: "var(--textColor)" }}>DGITAL VISION</h1>
                                </div>
                                <img className="img-fluid mb-3 mb-md-1 order-0 order-md-2" src={Button} alt="" />
                            </div>
                            <p className="d-flex align-items-center ms-4 w-75 ms-md-5" style={{ color: 'var( --paraText)', textAlign: 'justify' }}>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img className="w-100 h-100 p-3" style={{ width: "60vw" }} src={cards} alt="" />
                        </div>
                    </div>
                </div>
                {/*********************FIRST COMPONENT END******************/}

                {/*********************SECOND COMPONENT*********************/}
                {/* FEATURES OF OUR PROJECTS  */}
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

                {/*********************SECOND COMPONENT END*********************/}


                {/*********************THIRD COMPONENT START*********************/}

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
                <div className="p-2 mt-3 rounded d-md-none" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div
                        className="d-flex justify-content-between p-4 mt-2 mt-md-5 rounded d-block d-md-none"
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
                </div>

                <div>
                    {/* PROJECT SHOW CASE  */}

                    <div className="p-3 mt-3 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                        <div className="row">
                            <div className="col-md-4 mb-3 mb-md-1 order-1 order-md-0">
                                <div className="card p-3 pt-md-5 h-100" style={{ backgroundColor: 'var(--navbarColor)' }}>
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

                            <div className="col-12 col-md-4 mb-1 order-2 order-md-0">
                                <div className="card h-100" style={{ backgroundColor: 'var(--navbarColor)', height: '60vh' }}>
                                    <img src={projectImg} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: "8px" }} />
                                </div>
                            </div>

                            <div className="col-md-4 mb-1 d-none d-md-block">
                                <div className="row mb-2">
                                    <div className="col-md-12">
                                        <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '25vh' }}>
                                            <div className="mt-3">
                                                <p className="mx-3" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                                <div className="d-flex flex-wrap mx-3 gap-3">
                                                    <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>React Native</span>
                                                    <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Fire base</span>
                                                    <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Redux</span>
                                                    <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Rest API</span>
                                                    <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Mongodb</span>
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
                            <div className="col-md-4 mb-md-1 order-3 order-md-0">
                                <div className="card p-3 pt-md-5 h-100" style={{ backgroundColor: 'var(--navbarColor)' }}>
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
                                <div className="card h-100" style={{ backgroundColor: 'var(--navbarColor)', height: '60vh' }}>
                                    <img src={projectShowCase} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: "8px" }} />
                                </div>
                            </div>

                            <div className="col-md-4 mb-1  d-none d-md-block">
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

                    {/******************visible on small screen**************/}
                    <div className="p-3 mt-3 rounded d-md-none" style={{ border: "2px solid var(--navbarColor)", display: isVisible ? 'block' : 'none' }}>
                        <div className="col-md-4 mb-1 d-md-none">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '20vh' }}>
                                        <div className="mt-3">
                                            <p className="mx-3" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                            <div className="d-flex flex-wrap mx-4 gap-3">
                                                <span className="fs-6 w-50 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>React Native</span>
                                                <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Fire base</span>
                                                <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Redux</span>
                                                <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Rest API</span>
                                                <span className="fs-6 w-25 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>Mongodb</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--navbarColor)', height: '20vh' }}>
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
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--secondaryColor)', height: '5vh' }}>
                                        <h5>BOOK A CALL</h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 mb-1 d-md-none">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card" style={{ backgroundColor: 'var(--navbarColor)', height: '20vh' }}>
                                        <div className="mt-3">
                                            <p className="mx-3" style={{ color: "var(--color)" }}>TECHANICAL USED</p>
                                            <div className="d-flex flex-wrap mx-4 gap-3">
                                                <span className="fs-6 w-50 p-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: "var(--btnBackground)", borderRadius: '2rem', color: "var(--color)" }}>WordPress</span>
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
                                        <div className="d-flex  flex-column justify-content-center align-items-center gap-3">
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
                                    <div className="card d-flex justify-content-center align-items-center" style={{ backgroundColor: 'var(--secondaryColor)', height: '5vh' }}>
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

                {/*********************THIRD COMPONENT END*********************/}


                {/*********************FOURT COMPONENT START*********************/}
                {/***********TESTIMONIALS************/}

                <div className="p-3 mt-3 mt-md-5 rounded" style={{ border: "2px solid var(--navbarColor)" }}>
                    <div className="d-flex justify-content-between align-items-center p-4 mt-1 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                        <h3 style={{ color: "var(--textColor)" }}>TESTIMONIALS</h3>
                        <div className="d-none d-md-flex align-items-center gap-3">
                            <img className="mb-2" src={serviceArrow} alt="" />
                            <p style={{ color: "var(--textColor)" }}>ALL TESTIMONIALS</p>
                        </div>
                    </div>

                    <div className="row">
                        {testimonials.slice(0, showMore || !isMobile ? testimonials.length : 3).map((testimonial, index) => (
                            <div key={index} className="col-md-3">
                                <div className="mt-3 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                                    <div className="p-3">
                                        <h5 className="pt-3 fs-6" style={{ color: "var(--textColor)" }}>
                                            {testimonial.title}
                                        </h5>
                                        <p className="fs-6 pt-3" style={{ color: "var(--paragraphText)" }}>
                                            {testimonial.description}
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between gap-1 rounded" style={{ backgroundColor: "var(--btnBackground)", height: "20vh" }}>
                                        <div className="w-75 d-flex align-items-center justify-content-center gap-2">
                                            <img src={testimonial.image} alt="Testimonial_img" />
                                            <div className="mt-3">
                                                <h6 className="mb-0" style={{ color: "var(--testimonilName)" }}>
                                                    {testimonial.name}
                                                </h6>
                                                <p className="mt-0" style={{ color: "var(--navbarLinksColor)" }}>
                                                    {testimonial.position}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <img className="w-75" src={testimonial.rightArrowImage} alt="Right Arrow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button className="d-block d-md-none mt-2 w-100 gap-2  d-flex p-2 justify-content-center align-items-center rounded backgroundColor" onClick={() => setShowMore(!showMore)} style={{ color: "var(--paragraphText)", outline: "none", border: 'none', transition: "ease-in-out 0.3s" }}>
                            <img src={showMore ? rightArrow : downbtn} alt="" />
                            {showMore ? "LESS TESTIMONIAL" : "ALL TESTIMONIAL"}
                        </button>
                    </div>
                    <div>
                    </div>
                </div>

                {/*********************FOURT COMPONENT END*********************/}


                {/*********************FIFTH COMPONENT START*********************/}

                {/*********FREQUENTLY ASKED QUESTIONS**********/}

                <div className="d-flex justify-content-between align-items-center  p-4 mt-4 rounded" style={{ backgroundColor: "var(--navbarColor)" }}>
                    <h3 style={{ color: "var(--textColor)" }}>FREQUENTLY ASKED QUESTIONS</h3>
                    <div className="d-none d-md-flex  align-items-center gap-3">
                        <img className="mb-2" src={serviceArrow} alt="" />
                        <p style={{ color: "var(--textColor)" }}>VIEW ALL</p>
                    </div>
                </div>

                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-7">
                            <div>
                                {faqs.map((item, index) => (
                                    <div key={index} className="rounded backgroundColor">
                                        <div className="d-flex p-4 mb-2">
                                            <div className="w-100">
                                                <p className="fw-bold" style={{ color: "var(--servicesText)" }}>
                                                    {item.question}
                                                </p>

                                                {/* Answer Section with Transition */}
                                                <div
                                                    style={{
                                                        maxHeight: activeQuestion === index ? "500px" : "0",
                                                        opacity: activeQuestion === index ? "1" : "0",
                                                        overflow: "hidden",
                                                        transition: "max-height 0.3s ease, opacity 0.3s ease",
                                                    }}
                                                >
                                                    {activeQuestion === index && (
                                                        <p style={{ color: "var(--paragraphText)" }}>
                                                            {item.answer}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                {/* Plus/Minus Button */}
                                                <img
                                                    className="w-100"
                                                    src={activeQuestion === index ? minusBtn : plusBtn}
                                                    alt="toggle"
                                                    onClick={() => toggleContent(index)}
                                                    style={{ cursor: "pointer" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                        <div className="col-md-5">
                            <div className="row mb-2">
                                <div className="col-md-12">
                                    <div className="card d-flex" style={{ backgroundColor: 'var(--navbarColor)' }}>
                                        <h4 className="p-4 mb-0" style={{ color: "var(--textColor)" }}>Ask Your Question</h4>
                                        <form className="p-4" onSubmit={handleSubmit}>
                                            <div>
                                                <label className="fs-6" htmlFor="" style={{ color: "var(--textColor)" }}>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control mt-2 p-3"
                                                    placeholder="Enter your email"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                            </div>

                                            <div className="mt-3">
                                                <label className="fs-6" htmlFor="" style={{ color: "var(--textColor)" }}>Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control mt-2 p-3"
                                                    placeholder="Enter your email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                            </div>

                                            <div className="mt-3">
                                                <label className="fs-6" style={{ color: "var(--textColor)" }}>Your Question</label>
                                                <textarea
                                                    className="form-control border-none outline-none mt-3"
                                                    rows={3}
                                                    placeholder="Enter Your Question Here ..."
                                                    name="question"
                                                    value={formData.question}
                                                    onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                            </div>
                                            <button type="submit" className="btn sendMessageBtn mt-3 p-2 fs-6">
                                                Send Your Message
                                            </button>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/*********************FIFTH COMPONENT END*********************/}


            </div>


        </>
    )
}
export default Projects
