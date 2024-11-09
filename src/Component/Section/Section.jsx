import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import style from "./Section.module.css";
import firstImf from "/border-from-flowers-petals.jpg";
import scnd from "/unnamed.jpg";
import thrd from "/unnamed3.jpg";

const Slider = () => {
  return (
    <section className={style.sliderContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >
        <SwiperSlide className={style.slide}>
          <div className={style.slideContent}>
            <img src={firstImf} alt="Slide 1" />
            <div className={style.slideTxt}>
              <h2>Текст для первого слайда</h2>
              <p>Описание для первого слайда.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <div className={style.slideContent}>
            <img src={scnd} alt="Slide 2" />
            <div className={style.slideTxt}>
              <h2>Текст для второго слайда</h2>
              <p>Описание для второго слайда.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <div className={style.slideContent}>
            <img src={thrd} alt="Slide 3" />
            <div className={style.slideTxt}>
              <h2>Текст для третьего слайда</h2>
              <p>Описание для третьего слайда.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
