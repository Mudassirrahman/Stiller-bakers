import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "10rem",
        }}
      >
        <div className="row d-flex justify-content-between">
          <div className="col-lg-4 col-md-4 col-12 d-flex flex-column justify-content-center order-lg-0 order-md-0 order-1 mt-4">
            <h1
              style={{
                fontSize: "calc(2.375rem + 1.5vw)",
              }}
            >
              Today's Special
            </h1>
            <h3  style={{
                fontSize: "calc(2rem + 1vw)",
              }}>cooked with love</h3>
            <p className=""  style={{
                fontSize: "calc(.7rem + 1vw)",
              }}>
              We source our quality ingredients from local suppliers and the
              world's most trusted brands. Food Safety Keeping our food and
              guests safe
            </p>
            <a href="#order">
              <button className="butn">order now</button>
            </a>
          </div>

          <div className="col-lg-8 col-md-8 col-12 order-lg-1 order-md-1 order-0">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item swiper-slide active">
                  <img
                    src="Images/menu7.jpg"
                    className="d-block w-100"
                    alt="today speacile dish"
                  />
                </div>
                <div className="carousel-item swiper-slide">
                  <img
                    src="Images/image2.jpeg"
                    className="d-block w-100"
                    alt="today speacile dish"
                  />
                </div>
                <div className="carousel-item swiper-slide">
                  <img
                    src="Images/menu9.jpg"
                    className="d-block w-100"
                    alt="today speacile dish"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
