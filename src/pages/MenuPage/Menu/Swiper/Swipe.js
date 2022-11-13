import { React, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Swipe.scss";
const Swipe = ({ promotionsData }) => {
  console.log(promotionsData);
  return (
    <div className="swiper-big">
      <Swiper
        modules={[Navigation, EffectFade]}
        speed={600}
		breakpoints={{
			700: { slidesPerView: 1.5},
			1440: {slidesPerView: 2.5}
		  }}
		  spaceBetween={20}
        slidesPerView={1.3}
        className={"swiper-big-container"}
		loop={true}
      >
        {promotionsData.map((promotion, key) => {
          return (
            <SwiperSlide className="slider-big-container">
			   <img src={promotion.coverPhoto.url} alt="Loading..." />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Swipe;
