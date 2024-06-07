import React from "react";
import "./movieSwiper.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { API_URL } from "../../constant";

function MovieSwiper({ slides, slideChange }) {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]} // Removed extra comma
        className="movieSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={`${API_URL}/poster/${slide.poster}`}
              alt="Preview Image"
              onClick={() => slideChange(slide.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MovieSwiper;
