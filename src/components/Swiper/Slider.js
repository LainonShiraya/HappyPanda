import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../styles/components/Swipe.scss";
//import Image from "../../assets/food/sushi-banner.png";
const Slider = ({ image, title, text }) => {
  const Image = require(`../../assets/food/${image}`);
  console.log(Image);
  return (
    <div className="slider-slider-container">
      <img src={Image} alt="testing" />
      <div className="slider-container__panel">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="button-primary"> Check out! </button>
      </div>
    </div>
  );
};

export default Slider;
