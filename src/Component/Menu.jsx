import React from "react"
import Stars from "./Stars"



export default function Menu(props){

  
    return(<>
        <section className="container menu" id="menu">
   <div className="box-container">
     <div className="box">
       <div className="image">
         <img src={props.imgsrc} alt="dish img"/>
         <a  className="fas fa-heart"></a>
       </div>
       <div className="menu-content">
         <Stars/>
         <h3>tasty & healthy fresh food</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptates!</p>
         <a  className="butn">click for more</a>
         <span className="price"></span>
       </div>
     </div>
     </div>
     </section>
    </>)
}