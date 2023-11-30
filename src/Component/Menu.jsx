import React from "react";
import Stars from "./Stars";
import Menuimg from "../ImgComponents/MenuImg";

export default function Menu() {
  return (
    <>
      <section className="container menu" id="menu">
        <div className="row d-flex justify-content-between">
        {Menuimg.map((props) => (
          <div className="menu-box-container col-lg-4 col-md-3 col-sm-6 col-12 ">
            <div className="box">
              <div className="image">
                <img src={props.imgurl} alt="dish img" />
                <a className="fas fa-heart"></a>
              </div>
              <div className="menu-content">
                <Stars />
                <h3>tasty & healthy fresh food</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, voluptates!
                </p>
                <a className="butn">click for more</a>
                <span className="price"></span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </>
  );
}
