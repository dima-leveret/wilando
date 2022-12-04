import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../styles/Components/Slider.module.css";
import { Typography } from "./Typography";
import { GiBrickWall } from "react-icons/gi";
import { MdWallpaper } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import Link from "next/link";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className={styles.swiper}>
          <div className={styles.slide}>
            <GiBrickWall className={styles.icon} />
            <div className={styles.slideContainer}>
              <Typography
                styleVariant="headingLarge"
                markedFragment="Dekoracja"
                children="ścian"
                heading
              />
              <Typography
                styleVariant="textPrimary"
                children="SZYBKO. JAKOŚCIOWO. BEZ PRZYGOTOWAŃ"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <div className={styles.slide}>
            <MdWallpaper className={styles.icon} />
            <div className={styles.slideContainer}>
              <Typography
                styleVariant="headingLarge"
                markedFragment="Druk"
                children="nas płótnie"
                heading
              />
              <Typography
                styleVariant="textPrimary"
                children="STWÓRZ WŁASNY OBRAZ NA PŁÓTNIE"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <div className={styles.slide}>
            <TfiGallery className={styles.icon} />
            <div className={styles.slideContainer}>
              <Typography
                styleVariant="headingLarge"
                markedFragment="Zobacz"
                children="naszą galerię"
                heading
              />
              <div className={styles.textAndBtn}>
                <Typography
                  styleVariant="textPrimary"
                  children="PRZYKŁADY KTÓRE JUZ ZOSTAŁY ZREALIZOWANE"
                />
                <Link href="/gallery">
                  <a>Przejść do galerii</a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
