import React from "react";
import styleContact from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section className="pt-4">
        <div className={`${styleContact.contact} text-center pt-4 mb-3`}>
          <h2 className="fs-1 mb-3 fw-bolder ">CONATCT SECTION</h2>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className={styleContact.lineLeft}></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className={styleContact.lineRight}></div>
          </div>
            
            <form className="p-3 mt-5 w-50 m-auto ">
              <input
              placeholder="userName"
                type="text"
                name=""
                id=""
                className="w-100 py-3 my-3 form-control border-0 border-bottom shadow-none rounded "
              />
               <input
              placeholder="userAge"
                type="number"
                name=""
                id=""
                className="w-100 py-3 my-3 form-control border-0 border-bottom shadow-none rounded"
              />
               <input
              placeholder="userEmail"
                type="email"
                name=""
                id=""
                className="w-100 py-3 my-3 form-control border-0 border-bottom shadow-none rounded"
              />
               <input
              placeholder="Password"
                type="password"
                name=""
                id=""
                className="w-100 py-3 my-3 form-control border-0 border-bottom shadow-none rounded"
              />
            
            <button className=" border-0 p-2 rounded-1 mt-4 main-color d-block me-auto text-white">Send Message</button>
            </form>
            

         
        </div>
      </section>
    </>
  );
}
