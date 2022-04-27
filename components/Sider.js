import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import styles from "../styles/Slider.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
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
        className={styles.slider}
      >
        <SwiperSlide>
          <div className={styles.sliderImg}>
            <Image priority src="/logo-wilando2.jpg" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderImg}>
            <Image src="/logo-wilando2.jpg" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.sliderImg}>
            <Image src="/logo-wilando2.jpg" layout="fill" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
