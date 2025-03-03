// import React from "react";
// import arrowup from "../../Assets/arrowup.png";
// import blogImage1 from "../../Assets/blog-img-1.png";
// import blogImage2 from "../../Assets/blog-img-2.png";
// import blogImage3 from "../../Assets/blog-img-3.png";
// import blogImage4 from "../../Assets/blog-img-4.png";
// import "./Blogs.css";
// import Testimonial from "./Testimonial/Testimonial";
// const Blog = () => {
//   return (
//     <>
//       <div className="BlogContainer">
//         <div className="ourBlogsHeading">
//           <h1>OUR BLOGS</h1>
//           <div className="blogsButton">
//             {["BUSINESS", "DESIGN", "DEVELOPMENT"].map((item, index) => {
//               return item === "DESIGN" ? (
//                 <button className="specialblogbtn" key={index}>
//                   {item}
//                 </button>
//               ) : (
//                 <button key={index}>{item}</button>
//               );
//             })}
//           </div>
//         </div>
//         <div className="divdierblogcontainer">
//           <div className="leftBlogContainer">
//             <img src={blogImage1} alt="" />
//           </div>
//           <div className="rightBlogContainer">
//             <div className="rightblogheading">
//               <h1>Web Design Trends Shaping 2024</h1>
//               <div className="blogbuttonerse pt-1">
//                 <div className="buttonerbloger1">
//                   <div>Category</div>
//                   <div className="dot"></div>
//                   <div>Design</div>
//                 </div>
//                 <div className="buttonerbloger1">
//                   <div>Read Time</div>
//                   <div className="dot"></div>
//                   <div>6 Mins</div>
//                 </div>
//                 <div className="buttonerbloger1">
//                   <div>Aurthor</div>
//                   <div className="dot"></div>
//                   <div>Laura Turner</div>
//                 </div>
//               </div>
//               <div className="larurablogpara">
//                 <p>
//                   Stay ahead of the design curve with insights into the latest
//                   web design trends. From immersive user experiences to bold
//                   color choices, explore the design elements that will dominate
//                   the digital landscape in 2023 and beyond.
//                 </p>
//               </div>
//               <div className="lastdiverbloger">
//                 <div className="d-flex align-items-center gap-2 pt-3">
//                   <img
//                     src={arrowup}
//                     style={{ transform: "rotate(45deg)" }}
//                     className="arrowavdsav"
//                     alt=""
//                   />
//                   <p className="arrowparagraase pt-2" style={{ color: "grey" }}>
//                     Read full blog
//                   </p>
//                 </div>
//                 <div className="d-flex align-items-center gap-2 pt-3">
//                   <p style={{ color: "white" }} className="pt-1 fdgd">
//                     Publish Date
//                   </p>
//                   <h1 style={{ fontSize: "1.5vw" }} className="seveef">
//                     7th February 2023
//                   </h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="blogcarder">
//           <div className="card1bloger">
//             <div className="imagecontainer">
//               <img src={blogImage2} alt="" />
//             </div>
//             <div className="blogcardersec">
//               <h2>Optimizing Mobile User Experience for Higher Conversions</h2>
//               <p>
//                 Mobile devices dominate digital interactions, making mobile user
//                 experience crucial for conversion rates. Explore mobile design
//                 best practices...
//               </p>
//             </div>
//             <div className="d-flex align-items-center gap-2 buttom-div">
//               <img
//                 src={arrowup}
//                 style={{ transform: "rotate(45deg)" }}
//                 className="arrowavdsav"
//                 alt=""
//               />
//               <p style={{ color: "#969696" }} className="readfullerbloer">
//                 READ FULL BLOG
//               </p>
//             </div>
//           </div>
//           <div className="card1bloger">
//             <div className="imagecontainer">
//               <img src={blogImage3} alt="" />
//             </div>
//             <div className="blogcardersec">
//               <h2>Optimizing Mobile User Experience for Higher Conversions</h2>
//               <p>
//                 Mobile devices dominate digital interactions, making mobile user
//                 experience crucial for conversion rates. Explore mobile design
//                 best practices...
//               </p>
//             </div>
//             <div className="d-flex align-items-center gap-2 ">
//               <img
//                 src={arrowup}
//                 style={{ transform: "rotate(45deg)" }}
//                 className="arrowavdsav"
//                 alt=""
//               />
//               <p style={{ color: "#969696" }} className="readfullerbloer">
//                 READ FULL BLOG
//               </p>
//             </div>
//           </div>
//           <div className="card1bloger">
//             <div className="imagecontainer">
//               <img src={blogImage4} alt="" />
//             </div>
//             <div className="blogcardersec">
//               <h2>Optimizing Mobile User Experience for Higher Conversions</h2>
//               <p>
//                 Mobile devices dominate digital interactions, making mobile user
//                 experience crucial for conversion rates. Explore mobile design
//                 best practices...
//               </p>
//             </div>
//             <div className="d-flex align-items-center gap-2 ">
//               <img
//                 src={arrowup}
//                 style={{ transform: "rotate(45deg)" }}
//                 className="arrowavdsav"
//                 alt=""
//               />
//               <p style={{ color: "#969696" }} className="readfullerbloer">
//                 READ FULL BLOG
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Testimonial />
//     </>
//   );
// };
// export default Blog;

import React from "react";
import arrowup from "../../Assets/arrowup.png";
import blogImage1 from "../../Assets/blog-img-1.png";
import blogImage2 from "../../Assets/blog-img-2.png";
import blogImage3 from "../../Assets/blog-img-3.png";
import blogImage4 from "../../Assets/blog-img-4.png";
import "./Blogs.css";
import Testimonial from "./Testimonial/Testimonial";

const blogPosts = [
  {
    image: blogImage2,
    title: "Optimizing Mobile User Experience for Higher Conversions",
    description:
      "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
  },
  {
    image: blogImage3,
    title: "Optimizing Mobile User Experience for Higher Conversions",
    description:
      "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
  },
  {
    image: blogImage4,
    title: "Optimizing Mobile User Experience for Higher Conversions",
    description:
      "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
  },
];

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
            <img src={blogImage1} alt="Blog Main" />
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
                  <img src={arrowup} className="arrowavdsav" alt="Arrow" />
                  <p className="arrowparagraase pt-2">Read full blog</p>
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
        <div className="blogcarder">
          {blogPosts.map((post, index) => (
            <div className="card1bloger" key={index}>
              <div className="imagecontainer">
                <img src={post.image} alt="Blog" />
              </div>
              <div className="blogcardersec">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
              <div className="d-flex align-items-center gap-2 buttom-div">
                <img src={arrowup} className="arrowavdsav" alt="Arrow" />
                <p
                  style={{ color: "#969696", marginTop: "10px" }}
                  className="readfullerbloer"
                >
                  READ FULL BLOG
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default Blog;
