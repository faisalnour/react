import React from "react";
import styleHome from "./Home.module.css";
import img from "../../assests/img/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className={`${styleHome.bgHome} pt-5 mt-5`}>
        <div className="d-flex justify-content-center flex-column align-items-center text-white">
          <img
            src={img}
            alt="avatar"
            className={`${styleHome.imgSrc} mb-3 mt-5 `}
          />
          <h2 className="$fs-1 mb-3 fw-bolder mb-3">START FRAMEWORK</h2>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className={styleHome.lineLeft}></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className={styleHome.lineRight}></div>
          </div>
          <div className="pb-5">
            Graphic Artist - Web Designer - Illustrator
          </div>
        </div>
      </div>
    </>
  );
}
