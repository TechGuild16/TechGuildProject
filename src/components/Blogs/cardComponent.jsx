import React from "react";
import arrowup from "../../Assets/arrowup.png";
import blogImage2 from "../../Assets/blog-img-2.png";
import blogImage3 from "../../Assets/blog-img-3.png";
import blogImage4 from "../../Assets/blog-img-4.png";
import "./cardComponent.css";

const blogs = [
  {
    id: 1,
    image: blogImage2,
    title: "Optimizing Mobile User Experience for Higher Conversions",
    description:
      "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
  },
  {
    id: 2,
    image: blogImage3,
    title: "Optimizing Mobile User Experience for Higher Conversions",
    description:
      "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
  },
  {
    id: 3,
    image: blogImage4,
    title: "Optimizing Mobile User Experience for Higher Conversions",
    description:
      "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
  },
];

const CardComponent = () => {
  return (
    <>
      <div className="blogcarder">
        {blogs.map((blog) => (
          <div className="card1bloger" key={blog.id}>
            <div className="imagecontainer">
              <img src={blog.image} alt="" />
            </div>
            <div className="blogcardersec">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
            <div className="d-flex align-items-center gap-2 buttom-div">
              <img
                src={arrowup}
                style={{ transform: "rotate(45deg)" }}
                className="arrowavdsav"
                alt=""
              />
              <p style={{ color: "#969696" }} className="readfullerbloer">
                READ FULL BLOG
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardComponent;
