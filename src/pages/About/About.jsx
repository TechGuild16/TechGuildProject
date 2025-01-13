import React, { useEffect, useState } from "react";
import awardIcon from "../../Assets/awardIcon.png";
import Button from "../../Assets/Button.png";
import downbtn from "../../Assets/downBtn.png";
import facebook from "../../Assets/fb.png";
import linkedIn from "../../Assets/linkedIn.png";
import member_1 from "../../Assets/member-1.png";
import member_2 from "../../Assets/member-2.png";
import member_3 from "../../Assets/member-3.png";
import member_4 from "../../Assets/member-4.png";
import minusBtn from "../../Assets/minusbtn.png";
import plusBtn from "../../Assets/plusBtn.png";
import rightArrow from "../../Assets/rightArrow.png";
import serviceArrow from "../../Assets/serviceArrow.png";
import TestimonialImg_1 from "../../Assets/TestimonialImg-1.png";
import TestimonialImg_2 from "../../Assets/TestimonialImg-2.png";
import TestimonialImg_3 from "../../Assets/TestimonialImg-3.png";
import TestimonialImg_4 from "../../Assets/TestimonialImg-4.png";
import twitter from "../../Assets/twitter_icon.png";

// import cards from '../../Assets/Card.png';
import "./About.css";
const About = () => {
  //***********STATES************//
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      content: "CLIENTS",
      number: "200+",
    },
    {
      content: "PROJECTS",
      number: "280+",
    },
    {
      content: "HAPPY CLIENTS",
      number: "100%",
    },
    {
      content: "FOLLOWER",
      number: "420K",
    },
  ];
  const members = [
    {
      name: "JOHN SMITH",
      post: "Co-Founder & CEO",
      image: member_1,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
    },
    {
      name: "SARAH ADAMS",
      post: "Head of Design",
      image: member_2,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
    },
    {
      name: "EMILY JOHNSON",
      post: "Lead Web Developer",
      image: member_3,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
    },
    {
      name: "WILLIAM LEE",
      post: "Lead Backend Developer",
      image: member_4,
      fb: facebook,
      linkedIn: linkedIn,
      twitter: twitter,
    },
  ];
  const acheivements = [
    {
      month: "September 2023",
      header: "GLOBAL RECOGNITION FOR INNOVATIONS",
      para: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.",
    },
    {
      month: "March 2019",
      header: "INDUSTRY LEADERSHIP ACKNOWLEDGED",
      para: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.",
    },
    {
      month: "August 2015",
      header: "EXPENTIONS INTO INTERNATIONAL MARKETS",
      para: "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.",
    },
    {
      month: "January 2010",
      header: "PIONEERING THE DIGITAL FRONTIER",
      para: "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.",
    },
  ];
  const awards = [
    {
      dates: "Date. October 2020",
      icon: awardIcon,
      header: "DIGITAL EXCELLENCE AWARD",
      para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
    },
    {
      dates: "Date. October 2020",
      icon: awardIcon,
      header: "DIGITAL EXCELLENCE AWARD",
      para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
    },
    {
      dates: "Date. October 2020",
      icon: awardIcon,
      header: "DIGITAL EXCELLENCE AWARD",
      para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
    },
    {
      dates: "Date. October 2020",
      icon: awardIcon,
      header: "DIGITAL EXCELLENCE AWARD",
      para: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
    },
  ];
  const testimonials = [
    {
      id: 1,
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      image: TestimonialImg_1,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
      rightArrowImage: rightArrow,
    },
    {
      id: 2,
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      image: TestimonialImg_2,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
      rightArrowImage: rightArrow,
    },
    {
      id: 3,
      title: "WORKING WITH THE NEXGEN WAS A PLEASURE",
      description:
        "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      image: TestimonialImg_3,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
      rightArrowImage: rightArrow,
    },
    {
      id: 4,
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      description:
        "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      image: TestimonialImg_4,
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
      rightArrowImage: rightArrow,
    },
  ];
  const faqs = [
    {
      question: "How long does it take to complete a web development project?",
      answer:
        "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      answer:
        "Yes, we have experience in handling large-scale projects with complex requirements.",
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      answer:
        "Absolutely! We specialize in integrating third-party APIs to enhance functionality.",
    },
    {
      question:
        "How do you ensure cross-platform compatibility for mobile apps?",
      answer:
        "We follow best practices to ensure your app works seamlessly across multiple platforms.",
    },
    {
      question: "What is your approach to user experience (UX) design?",
      answer:
        "We prioritize intuitive and user-friendly design to ensure a great user experience.",
    },
  ];
  const [activeQuestion, setActiveQuestions] = useState(null);

  const toggleContent = (index) => {
    setActiveQuestions(activeQuestion === index ? null : index);
  };
  // form handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
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
    console.log("Form Data Submitted:", formData);
  };

  // Mobile screen //
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container-fluid mt-3">
        {/*********************FIRST COMPONENT*******************/}
        <div className="row">
          <div className="col-md-7">
            <div
              className="col-12 rounded pt-5 mt-5 d-none d-md-block"
              style={{
                padding: "10px",
                backgroundColor: "var(--navbarColor)",
                height: "65vh",
              }}
            >
              <div className="d-flex ms-md-5 gap-4 mt-5 mt-md-5 justify-content-start align-items-center gap-4">
                <div className="text-center text-md-start">
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    ELEVATING BRANDS
                  </h1>
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    IN THE DIGITAL AGE
                  </h1>
                </div>
                <img
                  className="img-fluid mb-5"
                  src={Button}
                  alt="Button Image"
                />
              </div>
            </div>

            {/******** visible on small screen  *********/}

            <div
              className="col-12 rounded pt-4 h-100 d-md-none"
              style={{ backgroundColor: "var(--navbarColor)" }}
            >
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-start ms-4">
                <div className="text-center text-md-start ">
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    ELEVATING BRANDS
                  </h1>
                  <h1 className="fs-1" style={{ color: "var(--textColor)" }}>
                    IN THE DIGITAL AGE
                  </h1>
                </div>
                <img
                  className="img-fluid mb-5 mb-md-5"
                  src={Button}
                  alt="Button Image"
                />
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div
              className="col-md-12 rounded pt-5 pt-md-2 mt-3 mt-md-5"
              style={{ backgroundColor: "var(--navbarColor)", height: "65vh" }}
            >
              <div className="row">
                <div className="row">
                  {cards.map((item, index) => (
                    <div key={index} className="col-6 mb-0 mt-2">
                      <div
                        className="rounded d-flex justify-content-center align-items-center mx-2 mx-md-3 p-4 w-100 h-100"
                        style={{
                          backgroundColor: "var(--btnBackground)",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <p
                            className="pt-2 mb-0"
                            style={{ color: "var(--textColor)" }}
                          >
                            {item.content}
                          </p>
                          <h5
                            className="fs-1 mt-0"
                            style={{ color: "var(--aboutNumberColor)" }}
                          >
                            {item.number}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
                    <img className="mb-2" src={downbtn} alt="" />
                    <p className="fs-5" style={{ color: "var(--textColor)" }}>
                      KNOW MORE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*****************FIRST COMPONENT END*******************/}

        {/*********************SECOND COMPONENT*******************/}
        {/**************MEET OUR TEAM***************/}
        <div
          className="p-1 p-md-3 mt-5 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div
            className="d-flex justify-content-between align-items-center p-4 mt-1 rounded"
            style={{ backgroundColor: "var(--navbarColor)" }}
          >
            <h3 style={{ color: "var(--textColor)" }}>
              MEET THE BRILLIANT MINDS BEHIND NEXGEN
            </h3>
            <div className="d-none d-md-flex align-items-center gap-3">
              <img className="mb-2" src={serviceArrow} alt="" />
              <p style={{ color: "var(--textColor)" }}>ALL MEMBERS</p>
            </div>
          </div>

          <div className="container-fluid mt-3">
            <div className="row">
              {members
                .slice(0, showMore || !isMobile ? acheivements.length : 3)
                .map((member, index) => (
                  <div key={index} className="col-md-3">
                    <div
                      className="p-4 mt-2 rounded"
                      style={{
                        background:
                          "linear-gradient(to bottom, var(--btnBackground) 50%, var(--navbarColor) 50%)",
                        textAlign: "center",
                      }}
                    >
                      <h5
                        className="mt-2"
                        style={{ color: "var(--servicesText)" }}
                      >
                        {member.name}
                      </h5>
                      <p style={{ color: "var(--paragraphText)" }}>
                        {member.post}
                      </p>
                      <div className="text-center">
                        <img
                          className="w-100"
                          src={member.image}
                          alt={member.name}
                        />
                      </div>

                      {/* Social Media Icons */}
                      <div className="d-flex justify-content-center mt-3">
                        <span className="w-25">
                          <img src={member.fb} alt="Facebook" />
                        </span>
                        <span className="w-25">
                          <img src={member.twitter} alt="Twitter" />
                        </span>
                        <span className="w-25">
                          <img src={member.linkedIn} alt="LinkedIn" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="">
              <button
                className="d-md-block mt-4 d-md-none w-100 d-flex gap-2  p-2 justify-content-center align-items-center rounded backgroundColor"
                onClick={() => setShowMore(!showMore)}
                style={{
                  color: "var(--paragraphText)",
                  outline: "none",
                  border: "none",
                  transition: "ease-in-out 0.3s",
                }}
              >
                <img src={showMore ? rightArrow : downbtn} alt="" />
                {showMore ? "SHOW LESS" : "ALL MEMBERS"}
              </button>
            </div>
          </div>
        </div>
        {/*********************SECOND COMPONENT END*******************/}

        {/********************THIRD COMPONENT*********************/}
        {/************* OUR ACHIEVMENTS *************/}
        <div
          className="p-2 p-md-4 mt-3 mt-md-5 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div
            className="p-4 p-md-4 rounded d-flex justify-content-center align-items-center justify-content-md-start align-items-md-start"
            style={{ backgroundColor: "var(--navbarColor)" }}
          >
            <h3 className="" style={{ color: "var(--textColor)" }}>
              OUR ACHIEVMENTS
            </h3>
          </div>
          <div className="row">
            {acheivements
              .slice(0, showMore || !isMobile ? acheivements.length : 3)
              .map((acheivement, index) => (
                <div key={index} className="col-md-3 mt-2">
                  <div
                    className="mt-3 rounded w-100 h-100"
                    style={{ backgroundColor: "var(--navbarColor)" }}
                  >
                    <p
                      className="p-4 mb-2"
                      style={{ color: "var(--navbarLinksColor)" }}
                    >
                      {acheivement.month}
                    </p>
                    <div
                      className="d-flex p-4 justify-content-center align-items-center mb-2"
                      style={{
                        height: "20vh",
                        backgroundColor: "var(--btnBackground",
                      }}
                    >
                      <h5 style={{ color: "var(--textColor)" }}>
                        {acheivement.header}
                      </h5>
                    </div>
                    <p
                      className="p-4"
                      style={{ color: "var(--paragraphText)" }}
                    >
                      {acheivement.para}
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="d-block mt-4 d-md-none d-flex gap-2 w-100 p-2 justify-content-center align-items-center rounded backgroundColor">
            <button
              className="d-block d-md-none d-flex gap-2 w-100 p-2 justify-content-center align-items-center rounded backgroundColor"
              onClick={() => setShowMore(!showMore)}
              style={{
                color: "var(--paragraphText)",
                outline: "none",
                border: "none",
                transition: "ease-in-out 0.3s",
              }}
            >
              <img src={showMore ? rightArrow : downbtn} alt="" />
              {showMore ? "SHOW LESS" : "OUR ACHEIVEMENT"}
            </button>
          </div>
        </div>
        {/********************THIRD COMPONENT END*********************/}

        {/********************FOURTH COMPONENT*********************/}
        {/*****************AWARD AND RECOGNITIONS*******************/}

        <div
          className="p-3 mt-5 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div
            className="p-4 mb-3 rounded"
            style={{ backgroundColor: "var(--navbarColor)" }}
          >
            <h3 style={{ color: "var(--textColor)" }}>
              AWARDS AND RECOGNITIONS
            </h3>
          </div>
          <div className="row">
            {awards
              .slice(0, showMore || !isMobile ? awards.length : 3)
              .map((award, index) => (
                <div key={index} className="col-md-3">
                  <div
                    className="rounded"
                    style={{ backgroundColor: "var(--navbarColor)" }}
                  >
                    <div className="d-flex justify-content-between align-items-center p-3">
                      <p
                        className="p-2 rounded-pill"
                        style={{
                          backgroundColor: "var(--btnBackground)",
                          color: "var(--navbarLinksColor)",
                        }}
                      >
                        {award.dates}
                      </p>
                      <img
                        className="w-25"
                        style={{ width: "4vw" }}
                        src={award.icon}
                        alt=""
                      />
                    </div>
                    <div className="d-flex p-2 justify-content-center align-items-center">
                      <h5 style={{ color: "var(--textColor)" }}>
                        {award.header}
                      </h5>
                    </div>
                    <p
                      className="p-4"
                      style={{ color: "var(--paragraphText)" }}
                    >
                      {award.para}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div>
            <button
              className="d-block pt-2 pb-2 d-md-none w-100 d-flex gap-2 justify-content-center align-items-center rounded backgroundColor"
              onClick={() => setShowMore(!showMore)}
              style={{
                color: "var(--paragraphText)",
                outline: "none",
                border: "none",
                transition: "ease-in-out 0.3s",
              }}
            >
              <img src={showMore ? rightArrow : downbtn} alt="" />
              {showMore ? "SHOW LESS" : "ALL AWARDS AND RECOGNITIONS"}
            </button>
          </div>
        </div>
        {/********************FOURTH COMPONENT END*********************/}

        {/********************FIFTH COMPONENT**************************/}
        {/***********TESTIMONIALS************/}

        <div
          className="p-3 mt-3 mt-md-5 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div
            className="d-flex justify-content-between align-items-center p-4 mt-1 rounded"
            style={{ backgroundColor: "var(--navbarColor)" }}
          >
            <h3 style={{ color: "var(--textColor)" }}>TESTIMONIALS</h3>
            <div className="d-none d-md-flex align-items-center gap-3">
              <img className="mb-2" src={serviceArrow} alt="" />
              <p style={{ color: "var(--textColor)" }}>ALL TESTIMONIALS</p>
            </div>
          </div>

          <div className="row">
            {testimonials
              .slice(0, showMore || !isMobile ? testimonials.length : 3)
              .map((testimonial, index) => (
                <div key={index} className="col-md-3">
                  <div
                    className="mt-3 rounded"
                    style={{ backgroundColor: "var(--navbarColor)" }}
                  >
                    <div className="p-3">
                      <h5
                        className="pt-3 fs-5"
                        style={{ color: "var(--textColor)" }}
                      >
                        {testimonial.title}
                      </h5>
                      <p
                        className="fs-6 pt-3"
                        style={{ color: "var(--paragraphText)" }}
                      >
                        {testimonial.description}
                      </p>
                    </div>
                    <div
                      className="d-flex align-items-center justify-content-between gap-1 rounded"
                      style={{
                        backgroundColor: "var(--btnBackground)",
                        height: "20vh",
                      }}
                    >
                      <div className="w-75 d-flex align-items-center justify-content-center gap-2">
                        <img src={testimonial.image} alt="Testimonial_img" />
                        <div className="mt-3">
                          <h6
                            className="mb-0"
                            style={{ color: "var(--testimonilName)" }}
                          >
                            {testimonial.name}
                          </h6>
                          <p
                            className="mt-0"
                            style={{ color: "var(--navbarLinksColor)" }}
                          >
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <div className="w-25">
                        <img
                          className="w-75"
                          src={testimonial.rightArrowImage}
                          alt="Right Arrow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-3">
            <button
              className="d-block d-md-none d-flex gap-2 w-100 p-2 justify-content-center align-items-center rounded backgroundColor"
              onClick={() => setShowMore(!showMore)}
              style={{
                color: "var(--paragraphText)",
                outline: "none",
                border: "none",
                transition: "ease-in-out 0.3s",
              }}
            >
              <img src={showMore ? rightArrow : downbtn} alt="" />
              {showMore ? "LESS TESTIMONIAL" : "ALL TESTIMONIAL"}
            </button>
          </div>
          <div></div>
        </div>
        {/********************FIFTH COMPONENT END**************************/}

        {/********************SIXTH COMPONENT**************************/}
        {/*********FREQUENTLY ASKED QUESTIONS**********/}
        <div
          className="d-flex justify-content-between align-items-center  p-4 mt-5 rounded"
          style={{ backgroundColor: "var(--navbarColor)" }}
        >
          <h3 style={{ color: "var(--textColor)" }}>
            FREQUENTLY ASKED QUESTIONS
          </h3>
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
                        <p
                          className="fw-bold"
                          style={{ color: "var(--servicesText)" }}
                        >
                          {item.question}
                        </p>

                        {/* Answer Section with Transition */}
                        <div
                          style={{
                            maxHeight: activeQuestion === index ? "500px" : "0",
                            opacity: activeQuestion === index ? "1" : "0",
                            overflow: "hidden",
                            transition:
                              "max-height 0.3s ease, opacity 0.3s ease",
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
                  <div
                    className="card d-flex"
                    style={{ backgroundColor: "var(--navbarColor)" }}
                  >
                    <h4
                      className="p-4 mb-0"
                      style={{ color: "var(--textColor)" }}
                    >
                      Ask Your Question
                    </h4>
                    <form className="p-4" onSubmit={handleSubmit}>
                      <div>
                        <label
                          className="fs-5"
                          htmlFor=""
                          style={{ color: "var(--textColor)" }}
                        >
                          Name
                        </label>
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
                        <label
                          className="fs-5"
                          htmlFor=""
                          style={{ color: "var(--textColor)" }}
                        >
                          Email
                        </label>
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
                        <label
                          className="fs-5"
                          style={{ color: "var(--textColor)" }}
                        >
                          Your Question
                        </label>
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
                      <button
                        type="submit"
                        className="btn sendMessageBtn mt-3 p-2 fs-6"
                      >
                        Send Your Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/********************SIXTH COMPONENT END**************************/}
      </div>
    </>
  );
};
export default About;
