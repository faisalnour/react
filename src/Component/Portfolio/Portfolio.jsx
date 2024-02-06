import React from 'react'
import stylePort from './Portfolio.module.css'
import poert1 from '../../assests/img/poert1.png'
import poert2 from '../../assests/img/port2.png' 
import poert3 from '../../assests/img/port3.png' 

export default function Portfolio() {
  return (
    <section className={`${stylePort.port} pb-4`}>
        <div className="container">
        <div className="about-content text-center pt-5 mb-3">
                <h2 className="fs-1 mb-3 fw-bolder mb-3">
                  PORTFOLIO COMPONENT
                </h2>
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <div className={stylePort.lineLeft}></div>
                  <i className="fa-solid fa-star mx-3"></i>
                  <div className={stylePort.lineRight}></div>
                </div>
              </div>
          <div className="row g-5">
           
             
          <div className="col-md-4">
            <div className="content position-relative overflow-hidden">
                <img src={poert1} className="w-100 rounded-2 " alt="" />
                <div className={`${stylePort.layer} d-flex justify-content-center align-items-center rounded-2  `}>
            <i class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
           
          </div>
          <div className="col-md-4">
            <div className="content position-relative overflow-hidden">
                <img src={poert2} className="w-100 rounded-2 " alt="" />
                <div className={`${stylePort.layer} d-flex justify-content-center align-items-center rounded-2  `}>
            <i class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
           
          </div>
          <div className="col-md-4">
            <div className="content position-relative overflow-hidden">
                <img src={poert3} className="w-100 rounded-2 " alt="" />
                <div className={`${stylePort.layer} d-flex justify-content-center align-items-center rounded-2  `}>
            <i class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
           
          </div>
          <div className="col-md-4">
            <div className="content position-relative overflow-hidden">
                <img src={poert1} className="w-100 rounded-2 " alt="" />
                <div className={`${stylePort.layer} d-flex justify-content-center align-items-center rounded-2  `}>
            <i class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
           
          </div>
          <div className="col-md-4">
            <div className="content position-relative overflow-hidden">
                <img src={poert2} className="w-100 rounded-2 " alt="" />
                <div className={`${stylePort.layer} d-flex justify-content-center align-items-center rounded-2  `}>
            <i class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
           
          </div>
          <div className="col-md-4">
            <div className="content position-relative overflow-hidden">
                <img src={poert3} className="w-100 rounded-2 " alt="" />
                <div className={`${stylePort.layer} d-flex justify-content-center align-items-center rounded-2  `}>
            <i class="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
           
          </div>
          </div>
        </div>
      </section>
  )
}
