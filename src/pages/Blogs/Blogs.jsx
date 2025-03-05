import React from "react";
import arrowup from "../../Assets/arrowup.png";
import blogImage1 from "../../Assets/blog-img-1.png";
import CardComponent from "../../components/Blogs/cardComponent";
import "./Blogs.css";
import Testimonial from "./Testimonial/Testimonial";

const Blog = () => {
  return (
    <>
      <div className="BlogContainer">
        <div className="ourBlogsHeading">
          <h1>OUR BLOGS</h1>
          <div className="blogsButton">
            {["BUSINESS", "DESIGN", "DEVELOPMENT"].map((item, index) => (
              <button
                key={index}
                className={item === "DESIGN" ? "specialblogbtn" : ""}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="divdierblogcontainer">
          <div className="leftBlogContainer">
            <img src={blogImage1} alt="" />
          </div>
          <div className="rightBlogContainer">
            <div className="rightblogheading">
              <h1>Web Design Trends Shaping 2024</h1>
              <div className="blogbuttonerse pt-1">
                <div className="buttonerbloger1">
                  <div>Category</div>
                  <div className="dot"></div>
                  <div>Design</div>
                </div>
                <div className="buttonerbloger1">
                  <div>Read Time</div>
                  <div className="dot"></div>
                  <div>6 Mins</div>
                </div>
                <div className="buttonerbloger1">
                  <div>Author</div>
                  <div className="dot"></div>
                  <div>Laura Turner</div>
                </div>
              </div>
              <div className="larurablogpara">
                <p>
                  Stay ahead of the design curve with insights into the latest
                  web design trends. From immersive user experiences to bold
                  color choices, explore the design elements that will dominate
                  the digital landscape in 2023 and beyond.
                </p>
              </div>
              <div className="lastdiverbloger">
                <div className="d-flex align-items-center gap-2 pt-3">
                  <img
                    src={arrowup}
                    style={{ transform: "rotate(45deg)" }}
                    className="arrowavdsav"
                    alt=""
                  />
                  <p className="arrowparagraase pt-2" style={{ color: "grey" }}>
                    Read full blog
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 pt-3">
                  <p style={{ color: "white" }} className="pt-1 fdgd">
                    Publish Date
                  </p>
                  <h1 style={{ fontSize: "1.5vw" }} className="seveef">
                    7th February 2023
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardComponent />
      </div>
      <Testimonial />
    </>
  );
};

export default Blog;
