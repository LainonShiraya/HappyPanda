import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Swipe.scss";
import Slider from "./Slider.js";
import ImageMandalorian from "../../assets/food/burger.jpeg";
import ImageJamesBond from "../../assets/food/pasta.jpeg";
import HarryPotter from "../../assets/food/pizza.jpeg";
import Burger2 from "../../assets/food/burger2.jpeg";

const Swipe = () => {
  return (
    <div className="swiper">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        speed={600}
        slidesPerView={2}
        loop
        className={"swiper-container"}
      >
        <SwiperSlide className="slider-container">
          <Slider
            image={ImageMandalorian}
            title={"Mandalorian"}
            text={"Premium playing cards. This is the Way."}
          />
        </SwiperSlide>
        <SwiperSlide className="slider-container">
          <Slider
            image={ImageJamesBond}
            title={"James Bond"}
            text={
              "Premium playing cards inspired by the legendary film series."
            }
          />
        </SwiperSlide>
        <SwiperSlide className="slider-container">
          <Slider
            image={HarryPotter}
            title={"Harry Potter"}
            text={
              "Wands Ready! Premium playing cards by theory11, inspider by the Wizarding World. "
            }
          />
        </SwiperSlide>
        <SwiperSlide className="slider-container">
          <Slider
            image={Burger2}
            title={"Harry Potter"}
            text={
              "Wands Ready! Premium playing cards by theory11, inspider by the Wizarding World. "
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;

//  Pexels images
