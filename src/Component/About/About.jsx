import React from "react";
import styleAbout from "./About.module.css";

export default function About() {
  return (
    <>
      <section
        className={`${styleAbout.bgAbout}  d-flex justify-content-center align-items-center flex-column `}
      >
        <h2 className="fs-1 mb-3 fw-bolder mb-3 text-white text-center ">
          ABOUT COMPONENT
        </h2>
        <div className="d-flex justify-content-center align-items-center mb-3 ">
          <div className={styleAbout.lineLeft}></div>
          <i className="fa-solid fa-star mx-3 text-white "></i>
          <div className={styleAbout.lineRight}></div>
        </div>
        <div className="container">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <div className={styleAbout.aboutContent}>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <div className={styleAbout.aboutContent}>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
