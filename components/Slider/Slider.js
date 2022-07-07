import SlideComponent from "./SlideComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../../styles/Components/Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        // className={styles.swiper}
      >
        <SwiperSlide className={styles.swiper}>
          <SlideComponent />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <SlideComponent />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <SlideComponent />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <SlideComponent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
