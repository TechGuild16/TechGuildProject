// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import "./howToApply.css";

// const HowToApply = () => {
//   const steps = [
//     {
//       step: "Step 01",
//       title: "Explore Job Listings",
//       description:
//         "Visit our website's 'Careers' page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.",
//     },
//     {
//       step: "Step 02",
//       title: "Review Job Description",
//       description:
//         "Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.",
//     },
//     {
//       step: "Step 03",
//       title: "Prepare Your Application",
//       description: "Before applying, ensure you have the following ready.",
//     },
//     {
//       step: "Step 04",
//       title: "Complete the Application",
//       description:
//         "Click the 'Apply Now' button on the job listing page to access our online application form. Fill in your personal information, contact details, and the position you are applying for.",
//     },
//     {
//       step: "Step 05",
//       title: "Upload Your Documents",
//       description:
//         "Attach your resume, cover letter, and portfolio (if applicable) in their respective fields on the application form.",
//     },
//     {
//       step: "Step 06",
//       title: "Submit Your Application",
//       description:
//         "Double-check all the information you provided to ensure accuracy and completeness. Once you are satisfied with your application, click the 'Submit' button to send it to our HR team.",
//     },
//     {
//       step: "Step 07",
//       title: "Application Review",
//       description:
//         "After the application deadline, our HR team will carefully review all applications. Shortlisted candidates will be contacted for further evaluation, which may include interviews and assessments.",
//     },
//     {
//       step: "Step 08",
//       title: "Interview Process",
//       description:
//         "If you are selected for an interview, we will reach out to schedule a suitable date and time. Interviews may be conducted in-person or virtually, depending on the position and your location.",
//     },
//   ];

//   return (
//     <div className="Maindiv-join">
//       <div className="OurServiceHeading d-flex align-items-center justify-content-between">
//         <h1 className="uppercase">how to apply</h1>
//       </div>
//       <div className="mt-3 row">
//         {steps.map((step, index) => (
//           <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
//             <div className="join-card-apply">
//               <div className="join-card-body">
//                 <h5 className="join-card-title">{step.step}</h5>
//                 <h6 className="join-card-subtitle mb-2">{step.title}</h6>
//                 <p className="join-card-text">{step.description}</p>
//                 <h4>know more</h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowToApply;

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./howToApply.css";

const HowToApply = () => {
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
    <div className="apply-Main-div">
      <div className="OurServiceHeading d-flex align-items-center justify-content-between">
        <h1 className="uppercase">Join Our Team at NexGen</h1>
      </div>
      <div className="row w-100 m-1">
        {steps.map((steps, index) => (
          <div key={index} className="col-md-3">
            <div
              className="mt-3 rounded"
              style={{ backgroundColor: "var(--navbarColor)" }}
            >
              <p
                className="p-1 mb-1"
                style={{ color: "var(--navbarLinksColor)" }}
              >
                {steps.step}
              </p>
              <div
                className="d-flex p-4 justify-content-center align-items-center mb-2"
                style={{
                  height: "14vh",
                  backgroundColor: "var(--btnBackground",
                }}
              >
                <h5 style={{ color: "var(--textColor)" }}>{steps.title}</h5>
              </div>
              <p className="p-2" style={{ color: "var(--paragraphText)" }}>
                {steps.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToApply;
