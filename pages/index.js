import HeadComponent from "../components/HeadComponent";
import SlideComponent from "../components/SlideComponent";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../styles/Slider.module.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
  return (
    <>
      <HeadComponent title="Wilando" />

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

      <main>
        <h1>Witamy w świece unikalnych technologij dekoru!</h1>
        <p>
          Chcesz dodać w swoje życie barw czy inspiracji? Wyróżnić swoje
          mieszkanie lub miejsce pracy? Zapraszamy do współpracy z naszym
          zespołem Wilando. Prezentujemy Wam nową możliwość dekorowania ścian i
          innych powierzchni za pomocą pionowej drukarki. Teraz logo Waszej
          firmy, zdjęcie rodzinne, pejzaż lub znany na całym świece obraz może
          ozdobić ściany Waszego domu, biura, restauracji czy innego
          pomieszczenia. Jedynym ograniczeniem jest twoja własna wyobrażnia.
        </p>
      </main>
    </>
  );
}
