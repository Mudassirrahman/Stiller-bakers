import React, { useState } from "react";
import list from "../Data";
import Stars from "./Stars";

const Dishes = ({ item, handleClick }) => {
  return (
    <>
      <section className=" container mt-5">
        <div>
          <h3 className="sub-heading"> our dishes</h3>
          <h1 className="heading">popular dishes</h1>
        </div>
        <div className="row d-flex justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-center">
          {list.map((item) => (
            <section className="col-lg-3 col-md-4 col-sm-6 col-12  box-container mt-3">
              <img className="dish-img" src={item.img} alt="dish-img" />
              <h3 className="dishes-text"> {item.title}</h3>
              <Stars />
              <span className="price">{item.price} pkr</span>
              <a
                className="butn menu-dish-btn"
                onClick={() => handleClick(item)}
              >
                add to cart
              </a>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default Dishes;
