import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Swipe.scss";
const Slider = ({ image, title, text }) => {
  return (
    <>
      <img src={image} alt=" " />
      <div className="slider-container__panel">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="button-primary"> Learn More </button>
      </div>
    </>
  );
};

export default Slider;
