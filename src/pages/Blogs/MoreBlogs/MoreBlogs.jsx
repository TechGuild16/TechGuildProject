import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import arrow from "../../../Assets/Arrow.png";
import blog_2 from "../../../Assets/blog-img-2.png";
import blog_3 from "../../../Assets/blog-img-3.png";
import blog_4 from "../../../Assets/blog-img-4.png";

function MoreBlogs() {
  const cardsData = [
    {
      title: "Optimizing Mobile User Experience for Higher Conversions",
      text: "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
      img: blog_2,
    },
    {
      title: "Mastering the Art of Minimalistic Design",
      text: "Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...",
      img: blog_3,
    },
    {
      title: "The Psychology of Visual Design in Branding",
      text: "Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices...",
      img: blog_4,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 pt-2 p-1 ">
            <div className="card" style={{ backgroundColor: "#1A1A1A" }}>
              <img src={card.img} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title " style={{ color: "#F9EFEC" }}>
                  {card.title}
                </h5>
                <p className="card-text" style={{ color: "#B3B3B2" }}>
                  {card.text}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "3px" }}
                >
                  <div>
                    <img className="w-55" src={arrow} alt="Right Arrow" />
                  </div>
                  <div className="custom-h5 mt-2">
                    <h5 style={{ color: "#B3B3B2" }}>READ FULL BLOGS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoreBlogs;
