import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import downbtn from "../../../Assets/downBtn.png";
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
    <>
      <div className="container-fluid mt-3 apply-div">
        <div className="p-1 p-md-2 mt-md-1 rounded">
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
                    className="mt-1 mb-5 rounded w-100 h-100 position-relative card-div" // Added position-relative
                  >
                    <h6
                      className="p-1 mb-2"
                      style={{
                        color: "var(--navbarLinksColor)",
                        marginLeft: "18px",
                      }}
                    >
                      {acheivement.step}
                    </h6>
                    <div
                      className="d-flex align-items-center"
                      style={{
                        height: "13vh",
                        backgroundColor: "var(--btnBackground)",
                      }}
                    >
                      <h6
                        style={{
                          color: "var(--textColor)",
                          paddingLeft: "25px",
                        }}
                      >
                        {acheivement.title}
                      </h6>
                    </div>
                    <p
                      className="align-items-center p-4"
                      style={{
                        color: "var(--paragraphText)",
                        marginRight: "5px",
                      }}
                    >
                      {acheivement.description}
                    </p>

                    {/* Positioned at the bottom of the card */}
                    <div
                      className="d-flex align-items-center position-absolute"
                      style={{
                        bottom: "4px",
                        gap: "4px",
                      }}
                    >
                      <div>
                        <img
                          className="mb-1"
                          style={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "20px",
                          }}
                          src={downbtn}
                          alt=""
                        />
                      </div>
                      <p
                        className="fs-5"
                        style={{ color: "var(--textColor)", paddingTop: "8px" }}
                      >
                        KNOW MORE
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToApply;
