import SlideComponent from "./SlideComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../styles/Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideComponent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideComponent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
