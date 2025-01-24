import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import downbtn from "../../../Assets/downBtn.png";
import rightArrow from "../../../Assets/rightArrow.png";
import "./howToApply.css";

const HowToApply = () => {
  //***********STATES************//
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const steps = [
    {
      step: "Step 01",
      title: "Explore Job Listings",
      description:
        "Visit our website's 'Careers' page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.",
    },
    {
      step: "Step 02",
      title: "Review Job Description",
      description:
        "Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.",
    },
    {
      step: "Step 03",
      title: "Prepare Your Application",
      description: "Before applying, ensure you have the following ready.",
    },
    {
      step: "Step 04",
      title: "Complete the Application",
      description:
        "Click the 'Apply Now' button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for.",
    },
    {
      step: "Step 05",
      title: "Upload Your Documents",
      description:
        "Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form.",
    },
    {
      step: "Step 06",
      title: "Submit Your Application",
      description:
        "Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the 'Submit' button to send it to our HR team.",
    },
    {
      step: "Step 07",
      title: "Application Review",
      description:
        "After the application deadline, our HR team will carefully review all applications. Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments.",
    },
    {
      step: "Step 08",
      title: "Interview Process",
      description:
        "If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location.",
    },
  ];

  return (
<<<<<<< HEAD
    <>
=======
    <div
      className="p-1 p-md-4 mt-3 mt-md-5 mx-3 rounded"
      style={{ border: "2px solid var(--navbarColor)"}}
    >
>>>>>>> origin/anuja
      <div
        className="p-2 p-md-4 mx-3 mt-3 mt-md-5 rounded apply-header"
        style={{ border: "2px solid var(--navbarColor)" }}
      >
        <div
          className="p-4 p-md-4 rounded d-flex justify-content-center align-items-center justify-content-md-start align-items-md-start"
          style={{ backgroundColor: "var(--navbarColor)" }}
        >
          <h3 className="" style={{ color: "var(--textColor)" }}>
            HOW TO APPLY
          </h3>
        </div>
        <div className="row">
          {steps
            .slice(0, showMore || !isMobile ? steps.length : 3)
            .map((acheivement, index) => (
              <div key={index} className="col-md-3 mt-2">
                <div
                  className="mt-3 rounded w-100 h-100"
                  style={{ backgroundColor: "var(--navbarColor)" }}
                >
                  <p
                    className="p-2 mb-2"
                    style={{ color: "var(--navbarLinksColor)" }}
                  >
                    {acheivement.step}
                  </p>
                  <div
                    className="d-flex p-4 justify-content-center align-items-center mb-2"
                    style={{
                      height: "20vh",
                      backgroundColor: "var(--btnBackground",
                    }}
                  >
                    <h5 style={{ color: "var(--textColor)" }}>
                      {acheivement.title}
                    </h5>
                  </div>
                  <p
                    className="p-2 p-md-4"
                    style={{ color: "var(--paragraphText)" }}
                  >
                    {acheivement.description}
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
    </>
  );
};

export default HowToApply;
