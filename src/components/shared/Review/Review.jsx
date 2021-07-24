import React from "react";
import Testimonial from "../../../assets/images/testimonial-landingpages.jpg";

const Review = (props) => {
  return (
    <div className="border-2 border-gray-200 rounded-t-xl rounded-b-xl w-60 h-80">
      <div className="absolute left-20 md:left-24 xl:left-40 mt-7 w-64 2xl:left-24 2xl:mx-96">
        <img src={Testimonial} alt="testimoni" />
      </div>
    </div>
  );
};

export default Review;
