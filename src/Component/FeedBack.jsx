import React, { useState } from "react";
import Stars from "./Stars";

const ReviewData = [
    {id: "1",
    name: "Eifa",
    imgUrl: "../Images/EIFA.jpeg",
    review: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
];

const Reviews = ({ reviewContent, setReviewContent }) => {
  return (
    <section className="container p-0 review" id="review">
      <div className=" swiper-container review-slider">
        <div className="swiper-wrapper">
          {reviewContent.map((review, index) => (
            <div className="swiper-slide slide mt-4" key={index}>
              <div className="coustmer">
                <img src={review.imgUrl} alt="customers img" />
                <div className="coustmer-info">
                  <h3>{review.name}</h3>
                  <Stars />
                </div>
              </div>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewSection = () => {
  const [review, setReview] = useState("");
  const [reviewContent, setReviewContent] = useState(ReviewData);

  const userReview = (event) => {
    setReview(event.target.value);
  };

  const listofreview = () => {
    const newReview = {
      id: Math.random().toString(),
      name: "User", 
      imgUrl: "../Images/EHAAB.jpeg",
      review: review,
    };

    setReviewContent((oldReviewContent) => [newReview, ...oldReviewContent]);
    setReview("");
  };

  return (
    <div className="container review--section">
      <h3 className="sub-heading">Coustmer's Feed Back</h3>
      <h1 className="heading">Loved by some of our favorite people on earth</h1>

      {/* User Input Review */}
      <h1 className="review-heading">Your review</h1>
      <input
        className="review--input"
        id="review-box"
        type="text"
        placeholder="Your opinion"
        value={review}
        onChange={userReview}
      />
      <button className="butn review--btn mb-4" onClick={listofreview}>
        Post review
      </button>

      <Reviews reviewContent={reviewContent} setReviewContent={setReviewContent} />
    </div>
  );
};

export default ReviewSection;
