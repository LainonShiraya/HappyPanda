import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../styles/components/Swipe.scss";
const Slider = ({ image, title, text }) => {
  return (
    <div className="slider-slider-container">
      <img src={image} alt=" " />
      <div className="slider-container__panel">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="button-primary"> Check out! </button>
      </div>
    </div>
  );
};

export default Slider;
