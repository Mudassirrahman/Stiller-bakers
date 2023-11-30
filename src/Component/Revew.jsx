import React, { useState } from "react";

const Revew = () => {
  const [review, setReview] = useState("");
  const [reviewContent, setReviewContent] = useState([]);

  const userreview = (event) => {
    setReview(event.target.value);
  };
  const listofreview = () => {
    setReviewContent((oldreview) => {
      return [...oldreview, review];
    });
  };
  return (
    <>
      <div className="container review--section">
      <div>
      <h3 className="sub-heading"> coustmer's Feed Back</h3>
        <h1 className="heading">
          loved by some of our favourite people on earth{" "}
        </h1>
      </div>
        <h1 className="review-heading">your review</h1>
        <br />
        <input
          className="review--input"
          id="review-box"
          type="text"
          placeholder="your opinion "
          onChange={userreview}
        />
        <br />
        <button className="butn review--btn" onClick={listofreview}>
          post review
        </button>
        <ul className="list-unstyled">
          <li>
            {reviewContent.map((reviews) => {
              return <li className="coustmer-rew">{reviews}</li>;
            })}
          </li>
        </ul>
      </div>
    </>
  );
};
export default Revew;
