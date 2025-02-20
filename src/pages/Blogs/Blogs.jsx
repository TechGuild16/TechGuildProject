import React from "react";
import arrow from "../../Assets/Arrow.png";
import blog_1 from "../../Assets/blog-img-1.png";
import MoreBlogs from "./MoreBlogs/MoreBlogs.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";

const Blogs = () => {
  const data = [
    { label: "Category", value: "• Design" },
    { label: "Read Time", value: "• 6 Mins" },
    { label: "Author", value: "• Laura Turner" },
  ];

  return (
    <>
      <div className="container-fluid mt-1 mt-md-4">
        <div
          className="p-3 rounded"
          style={{ border: "2px solid var(--navbarColor)" }}
        >
          <div
            className="d-flex justify-content-between p-4 mt-1 rounded d-none d-md-flex"
            style={{ backgroundColor: "var(--navbarColor)" }}
          >
            <h3 className="mt-2" style={{ color: "var(--textColor)" }}>
              OUR BLOGS
            </h3>
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
                BUSINESS
              </button>
              <button
                className="mx-2 rounded border-0 p-3 font-weight-bold"
                style={{
                  backgroundColor: "var(--secondaryColor)",
                  outline: "none",
                  color: "var(--navbarLinks)",
                }}
              >
                DESIGN
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
                DEVELOPMENT
              </button>
            </div>
          </div>

          {/* Featured Blog Section - Hidden on mobile */}
          <div className="d-none d-md-block">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={blog_1}
                  alt="Blog"
                  style={{
                    marginTop: "2vh",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div
                  className="p-3 col-md-12 rounded pt-5 pt-md-2 mt-3 mt-md-3"
                  style={{
                    backgroundColor: "var(--navbarColor)",
                    height: "66vh",
                  }}
                >
                  <div className="p-2 rounded-3">
                    <div className="container">
                      <h1
                        className="display-6 mb-5 mt-4"
                        style={{ color: "#F9EFEC" }}
                      >
                        WEB DESIGN TRENDS SHAPING 2024
                      </h1>

                      <div className="d-flex gap-4 mb-5 text-secondary">
                        {data.map((item, index) => (
                          <div
                            key={index}
                            className="d-flex align-items-center"
                            style={{
                              border: "2px solid transparent",
                              borderRadius: "24px",
                              backgroundColor: "#1f1f1f",
                              padding: "8px 12px",
                              gap: "6px",
                            }}
                          >
                            <span className="me-2">{item.label}</span>
                            <span className="text-white">{item.value}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-secondary mb-5">
                        Stay ahead of the design curve with insights into the
                        latest web design trends. From immersive user
                        experiences to bold color choices, explore the design
                        elements that will dominate the digital landscape in
                        2023 and beyond.
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "3px" }}
                        >
                          <div>
                            <img
                              style={{ height: "40px", width: "40px" }}
                              src={arrow}
                              alt="Right Arrow"
                            />
                          </div>
                          <div className="custom-h5 mt-2">
                            <h5 style={{ color: "#B3B3B2" }}>
                              READ FULL BLOGS
                            </h5>
                          </div>
                        </div>

                        <div className="text-secondary">
                          Published Date{" "}
                          <span className="text-white">7TH FEBRUARY 2023</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <MoreBlogs />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Testimonial />
      </div>
    </>
  );
};

export default Blogs;
