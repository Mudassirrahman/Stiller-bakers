import React, { useState } from "react";

export default function Order() {
  const [contactInfo, setContactInfo] = useState({name:"",num:"",order:"",extra:"",cnt:"",date:"",adress:"",msg:"",tnc:""});
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
  };

  function submitInfo (){
    console.log(contactInfo);
  }

  return (
    <>
      <section className="container order mt-5 mb-5 " id="order">
        <h3 className="sub-heading">order now</h3>
        <h1 className="heading"> free and fast</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputbox row">
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>your name</span>
              <input type="text" name="name" placeholder="enter your name" value={contactInfo.name} onChange={handleChange} required />
            </div>
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>your number</span>
              <input type="number" name="num" placeholder="your number" value={contactInfo.num} onChange={handleChange} required/>
            </div>
          </div>
          <div className="inputbox row">
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>your order</span>
              <input type="text" name="order" placeholder="enter food name" value={contactInfo.order} onChange={handleChange} required/>
            </div>
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>Want to add something else?</span>
              <input type="text" placeholder="extra with food" name="extra" value={contactInfo.extra} onChange={handleChange} required />
            </div>
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>Quantity</span>
              <input type="text" placeholder="how many orders" name="cnt" value={contactInfo.cnt} onChange={handleChange} required/>
            </div>
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>date and time</span>
              <input type="datetime-local" name="date" value={contactInfo.date} onChange={handleChange} required />
            </div>
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>your adress</span>
              <textarea type="text" placeholder="enter your adress" cols="30" rows="10" name="adress" value={contactInfo.adress} onChange={handleChange}></textarea>
            </div>
            <div className="input col-lg-6 col-md-6 col-sm-6 col-12">
              <span>your massage</span>
              <textarea type="text" placeholder="enter your massage" cols="30" rows="10" name="msg" value={contactInfo.msg} onChange={handleChange}></textarea>
            </div>
          </div>
          <input type="checkbox" name="tnc" value={contactInfo.tnc} onChange={(e) =>
              setContactInfo({ ...contactInfo
              , tnc: e.target.checked })} required /> <span className="trms">Accpt terms and conditions</span>
          <button type="submit" className="butn">order now</button>
        </form>
      </section>
    </>
  );
}
