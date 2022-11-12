import { React, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../../../styles/components/Swipe.scss";
import Slider from "./Slider.js";
const Swipe = ({ promotionsData }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  console.log(promotionsData);
  return (
    <div className="swiper">
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        speed={600}
		breakpoints={{
			700: { slidesPerView: 2},
			1440: {slidesPerView: 3}
		  }}
		  spaceBetween={40}
        slidesPerView={1}
        loop={true}
        className={"swiper-container"}
        onInit={swiper => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {promotionsData.map((promotion, key) => {
          return (
            <SwiperSlide className="slider-container">
              <Slider
                image={promotion.coverPhoto.url}
                title={promotion.title}
                text={promotion.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="swiper__button-prev" ref={swiperNavPrevRef}>
        {" "}
        &#x2039;
      </button>
      <button className="swiper__button-next" ref={swiperNavNextRef}>
        {" "}
        &#x203a;
      </button>
    </div>
  );
};
export default Swipe;
