import React from "react";
import arrow from "../../../Assets/Arrow.png";
import img_1 from "../../../Assets/join-icon-01.png";
import img_2 from "../../../Assets/join-icon-02.png";
import img_3 from "../../../Assets/join-icon-03.png";
import img_4 from "../../../Assets/join-icon-04.png";
import "./joblisting.css";
const JobListings = () => {
  const jobs = [
    {
      img: img_1,
      title: "WEB DESIGNER",
      salary: "$45,000 - $65,000 per year",
      experience: "1+ year",
      deadline: "30/06/2025",
      skills:
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise",
    },
    {
      img: img_2,
      title: "MOBILE APP DEVELOPER",
      salary: "$55,000 - $75,000 per year",
      experience: "2+ years",
      deadline: "15/10/2025",
      skills:
        "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging",
    },
    {
      img: img_3,
      title: "DIGITAL MARKETING SPECIALIST",
      salary: "$50,000 - $65,000 per year",
      experience: "3+ years",
      deadline: "20/11/2025",
      skills:
        "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise",
    },
    {
      img: img_4,
      title: "PROJECT MANAGER",
      salary: "$60,000 - $80,000 per year",
      experience: "5+ years",
      deadline: "05/12/2025",
      skills:
        "Strong organizational and communication skills, ability to manage project timelines and resources, experience in project management methodologies",
    },
  ];

  return (
    <>
      <div className="container-fluid mt-3 job-main-div">
        <div
          className="p-md-2 mt-md-3 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div className="d-flex justify-content-between align-items-center p-4 rounded nav-div">
            <h3 style={{ color: "var(--textColor)" }}>
              JOIN OUR TEAM AT NEXGEN
            </h3>
          </div>
          <div className="mt-1">
            <div className="row mt-1 g-2">
              {jobs.map((job, index) => (
                <div key={index} className="col-md-6">
                  <div className="text-white p-4 rounded small-div">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex">
                          <img style={{ width: "40px" }} src={job.img} alt="" />
                          <h5
                            style={{ marginTop: "10px", paddingLeft: "6px" }}
                            className="card-title"
                          >
                            {job.title}
                          </h5>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "4px" }}
                        >
                          <div className="domain-img">
                            <img
                              className="w-20"
                              src={arrow}
                              alt="Right Arrow"
                              style={{ width: "40px", paddingLeft: "2px" }} // Adjusted width and added padding
                            />
                          </div>
                          <div className="mt-2">
                            <h5 style={{ color: "#B3B3B2" }}>VIEW MORE</h5>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="d-flex justify-content-between small mb-2">
                          <span
                            className="py-1 rounded time-line description"
                            style={{ color: "#B3B3B2" }}
                          >
                            Salary:{" "}
                            <span style={{ color: "#E6E6E6" }}>
                              {job.salary}
                            </span>
                          </span>
                          <span
                            className="px-2 py-1 rounded time-line description"
                            style={{ color: "#B3B3B2" }}
                          >
                            Experience:{" "}
                            <span style={{ color: "#E6E6E6" }}>
                              {job.experience}
                            </span>
                          </span>
                        </div>
                        <div className="small">
                          <span
                            className="px-2 py-1 rounded time-line description"
                            style={{ color: "#B3B3B2" }}
                          >
                            Deadline:{" "}
                            <span style={{ color: "#E6E6E6" }}>
                              {job.deadline}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h6>SKILLS</h6>
                        <p className="small" style={{ color: "#B3B3B2" }}>
                          {job.skills}
                        </p>
                      </div>

                      <button
                        className="btn btn-block w-100"
                        style={{
                          backgroundColor: "#e9967a",
                          color: "white",
                          border: "none",
                        }}
                      >
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobListings;
