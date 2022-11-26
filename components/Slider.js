import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../styles/Components/Slider.module.css";
import { Heading, Text } from "./Typography";
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
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className={styles.swiper}>
          <div className={styles.slide}>
            <GiBrickWall className={styles.icon} />
            <div className={styles.slideContainer}>
              <Heading
                markedFragment="Dekoracja"
                heading="ścian"
                large={true}
              />
              <Text text="SZYBKO. JAKOŚCIOWO. BEZ PRZYGOTOWAŃ" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <div className={styles.slide}>
            <MdWallpaper className={styles.icon} />
            <div className={styles.slideContainer}>
              <Heading
                markedFragment="Druk"
                heading="nas płótnie"
                large={true}
              />
              <Text text="STWÓRZ WŁASNY OBRAZ NA PŁÓTNIE" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <div className={styles.slide}>
            <TfiGallery className={styles.icon} />
            <div className={styles.slideContainer}>
              <Heading
                markedFragment="Zobacz"
                heading="naszą galerię"
                large={true}
              />
              <div className={styles.textAndBtn}>
                <Text text="PRZYKŁADY KTÓRE JUZ ZOSTAŁY ZREALIZOWANE" />
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
