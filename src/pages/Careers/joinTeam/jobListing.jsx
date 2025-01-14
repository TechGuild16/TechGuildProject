import React from "react";
import "./joblisting.css";
const JobListings = () => {
  const jobs = [
    {
      title: "WEB DESIGNER",
      salary: "$45,000 - $65,000 per year",
      experience: "1+ year",
      deadline: "30/06/2025",
      skills:
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise",
    },
    {
      title: "MOBILE APP DEVELOPER",
      salary: "$55,000 - $75,000 per year",
      experience: "2+ years",
      deadline: "15/10/2025",
      skills:
        "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging",
    },
    {
      title: "DIGITAL MARKETING SPECIALIST",
      salary: "$50,000 - $65,000 per year",
      experience: "3+ years",
      deadline: "20/11/2025",
      skills:
        "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise",
    },
    {
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
      <div className="container-fluid mt-3">
        <div
          className="p-1 p-md-4 mt-3 mt-md-5 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
        <div
className="d-flex justify-content-between align-items-center p-4 mt-1 rounded"
style={{ backgroundColor: "var(--navbarColor)" }}
>
<h3 style={{ color: "var(--textColor)" }}>
 JOIN OUR TEAM AT NEXGEN
</h3>
</div>
<div className="container-fluid mt-3">
<div className="row mt-1 g-4">
{jobs.map((job, index) => (
<div key={index} className="col-md-6">
<div className="text-white p-4 rounded small-div">
  <div className="card-body">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="card-title">{job.title}</h5>
      <button className="btn btn-sm btn-outline-light">
        VIEW DETAILS
      </button>
    </div>

    <div className="mb-3">
      <div className="d-flex justify-content-between small mb-2">
        <span
          className="py-1 rounded time-line description"
          style={{ color: "#B3B3B2" }}
        >
          Salary:{" "}
          <span style={{ color: "#E6E6E6" }}>{job.salary}</span>
        </span>
        <span
          className="px-2 py-1 rounded time-line description"
          style={{ color: "#B3B3B2" }}
        >
          Experience:{" "}
          <span style={{ color: "#E6E6E6" }}>{job.experience}</span>
        </span>
      </div>
      <div className="small">
        <span
          className="px-2 py-1 rounded time-line description"
          style={{ color: "#B3B3B2" }}
        >
          Deadline:{" "}
          <span style={{ color: "#E6E6E6" }}>{job.deadline}</span>
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
