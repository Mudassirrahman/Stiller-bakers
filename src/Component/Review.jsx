import React from "react";
import Stars from "./Stars";

const reviewData = [
  {
    id: "1",
    name: "Ehab",
    imgUrl: "../Images/EHAAB.jpeg",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "1",
    name: "Eifa",
    imgUrl: "../Images/EIFA.jpeg",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "1",
    name: "Dawood",
    imgUrl: "../Images/DAWOOD.jpeg",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Revies() {
  return (
    <>
      <section className="container p-0 review" id="review">
        <div className=" swiper-container review-slider">
          <div className="swiper-wrapper">
            {reviewData.map((props) => (
              <div className="swiper-slide slide">
                <div className="coustmer">
                  <img src={props.imgUrl} alt="customers img" />
                  <div className="coustmer-info">
                    <h3>{props.name}</h3>
                    <Stars />
                  </div>
                </div>
                <p>{props.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
