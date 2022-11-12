import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../../../styles/components/Swipe.scss";
const Slider = ({ image, title, text }) => {
  return (
    <div className="slider-slider-container">
      <img src={image} alt="Loading..." />
      <div className="slider-container__panel">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="button-primary"> Check out! </button>
      </div>
    </div>
  );
};

export default Slider;
