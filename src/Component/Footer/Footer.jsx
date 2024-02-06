import React from "react";
import styleFooter from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={`${styleFooter.footer} `}>
      <div className="container">
          <div className="row ">
              <div className="col-md-4 p-3">
                <div className="footer-content text-center">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>

              <div className="col-md-4 p-3">
                <div className="footer-content text-center">
                  <h3>AROUND THE WEB</h3>
                  <div>
                    <div className="icon">
                      <i className="fa-brands fa-facebook mx-1 icon" />
                      <i className="fa-brands fa-twitter mx-1 icon" />
                      <i className="fa-brands fa-linkedin-in mx-1 icon" />
                      <i className="fa-solid fa-globe mx-1 icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="footer-content text-center">
                    <h3>ABOUT FREELANCER</h3>
                    <p>
                      Freelance is a free to use, licensed Bootstrap theme created
                      by Route
                    </p>
                </div>
              </div>
          </div>
      </div>
     
      </footer>
      <div className={`${styleFooter.cr} text-center text-white`}>
          <p className="pt-2">Copyright © Your Website 2024</p>
      </div>
    </>
  );
}
