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
import { useTranslation } from "next-i18next";

const Slider = () => {
  const { t } = useTranslation();

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
                markedFragment={t("slider:slider-title-1-1")}
                children={t("slider:slider-title-1-2")}
                heading
              />
              <Typography
                styleVariant="textPrimary"
                children={t("slider:slider-text-1")}
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
                markedFragment={t("slider:slider-title-2-1")}
                children={t("slider:slider-title-2-2")}
                heading
              />
              <Typography
                styleVariant="textPrimary"
                children={t("slider:slider-text-2")}
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
                markedFragment={t("slider:slider-title-3-1")}
                children={t("slider:slider-title-3-2")}
                heading
              />
              <div className={styles.textAndBtn}>
                <Typography
                  styleVariant="textPrimary"
                  children={t("slider:slider-text-3")}
                />
                <Link href="/gallery">
                  <a>{t("slider:slider-btn-text")}</a>
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
