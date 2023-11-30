import React, { useState } from "react";
import list from "../Data";
import Stars from "./Stars";

const  DishesOne = ({item, handleClick})=> {
  
  return (
    <>
      <section className=" container dishes-one">
      <div className="d-flex justify-content-between flex-wrap">
        {list.map((item) => (
          <section className="dishes" >
        <div className="box-container">
        <div className="box">
                 <a href="#" className="fas fa-heart"></a>
                 <a href="#" className="fas fa-eye"></a>
                 <img className="dish-img" src={item.img}   alt="dish-img" />
                 <h3 className="dishes-text"> {item.title}</h3>
                 <Stars />
                 <span className="price">{item.price} pkr</span>
                 <a  className="butn menu-dish-btn" onClick={() => handleClick(item)}  > add to cart</a>
       </div>
       </div>
       </section>
         
        ))}
        </div>
      </section>
    </>
  );
}

export default DishesOne