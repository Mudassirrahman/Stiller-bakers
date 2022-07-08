import React from "react";
import Stars from "./Stars";

export default function Revies(props){
    return(<>
        <section className="review" id="review">
   <div className=" swiper-container review-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide">
        <div className="coustmer">
          <img src={props.imgsrc} alt="customers img" />
          <div className="coustmer-info">
          <h3>{props.name}</h3>
              <Stars />
          </div>
        </div>
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      </div>
      </div>
      </section>
    </> 
    )
}