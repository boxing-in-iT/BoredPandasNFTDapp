import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay, EffectCards } from "swiper";

import img1 from "../../../assets/Story/1.png";
import img4 from "../../../assets/Story/2.png";
import img5 from "../../../assets/Story/3.png";
import img6 from "../../../assets/Story/4.png";
import img7 from "../../../assets/Story/5.png";
import img8 from "../../../assets/Story/6.png";
import img9 from "../../../assets/Story/7.png";

const Container = styled.div`
  width: 30vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    width: 60vw;
    height: 60vh;
  }

  @media (max-width: 48em) {
    width: 40vw;
    height: 35vh;
  }

  @media (max-width: 30em) {
    width: 80vw;
    height: 20vh;

    z-index: -100;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 40vw;
    height: auto;

    border-radius: 15px;
  }
`;

const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[Navigation, Autoplay, EffectCards]}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="img" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
