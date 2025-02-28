import React, { useState } from 'react';
import minusBtn from "../../../Assets/minusbtn.png";
import plusBtn from "../../../Assets/plusBtn.png";
import serviceArrow from "../../../Assets/serviceArrow.png";
import './FAndQ.css'

const FAndQ = () => {

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
    return (
        <>
            <div className="d-flex justify-content-between align-items-center  p-4 mt-4 mt-md-5  rounded  frequently-member" style={{ backgroundColor: "var(--navbarColor)" }}>
                <h3 style={{ color: "var(--textColor)" }}>FREQUENTLY ASKED QUESTIONS</h3>
                <div className="d-none d-md-flex  align-items-center gap-3">
                    <img className="mb-2" src={serviceArrow} alt="" />
                    <p style={{ color: "var(--textColor)" }}>VIEW ALL</p>
                </div>
            </div>

            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-7">
                        <div className='about-FandQuestion'>
                            {faqs.map((item, index) => (
                                <div key={index} className="rounded backgroundColor">
                                    <div className="d-flex p-4 mb-2">
                                        <div className="w-100">
                                            <p className="fw-bold pt-2" style={{ color: "var(--servicesText)" }}>
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
                                <div className="rounded  about-FandQ" style={{ backgroundColor: 'var(--navbarColor)' }}>
                                    <h4 className="p-2 mb-0 mt-2 mt-md-0 mx-2" style={{ color: "var(--textColor)" }}>Ask Your Question</h4>

                                    <form className="p-4" onSubmit={handleSubmit}>
                                        <div className="row mb-4">
                                            <div className='col-md-6'>
                                                <input
                                                    type="text"
                                                    className="fAndQ-input-form form-control mt-2 p-3"
                                                    placeholder="Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                            </div>

                                            <div className='col-md-6'>
                                                <input
                                                    type="email"
                                                    className="fAndQ-input-form form-control mt-2 p-3"
                                                    placeholder="Enter your email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className='col-md-6'>
                                                <input
                                                    type="text"
                                                    className="fAndQ-input-form form-control mt-2 p-3"
                                                    placeholder="Our Business"
                                                    name="name"
                                                    value={formData.ourBussiness}
                                                    onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                            </div>

                                            <div className='col-md-6'>
                                                <input
                                                    type="text"
                                                    className="fAndQ-input-form form-control mt-2 p-3"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    style={{ fontSize: "18px" }}
                                                />
                                            </div>
                                        </div>

                                        <div className="">
                                            <select className="p-3 form-control fAndQ-input-form" name="option"
                                             value={formData.option} onChange={handleChange}>
                                                <option value="">Select a Query</option>
                                                <option value="option1">Agency Side Support</option>
                                                <option value="option2">Client Side Support</option>
                                                <option value="option3">Technical Support</option>
                                                <option value="option3">Other Support</option>
                                            </select>
                                        </div>

                                        <div className="mt-3">
                                            <textarea
                                                className="fAndQ-input-form  form-control border-none outline-none mt-3"
                                                rows={3}
                                                placeholder="Enter Your Question Here ..."
                                                name="question"
                                                value={formData.question}
                                                onChange={handleChange}
                                                style={{ fontSize: "18px" }}
                                            />
                                        </div>
                                        <button className="rounded w-100 mt-3 p-2 p-md-2 fw-bold" type="submit" style={{ backgroundColor: "var(--secondaryColor)", outline: "none", border: "none", color: "var(--navbarColor)" }} >
                                            SEND YOUR MESSAGE
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 


                </div>
            </div>
        </>
    )
}

export default FAndQ
