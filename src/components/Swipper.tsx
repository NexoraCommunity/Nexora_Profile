"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import Image from "next/image";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";

export default function Swipper() {
  return (
    <>
      <Swiper
        cardsEffect={{
          perSlideOffset: 60,
          perSlideRotate: 5,
          rotate: false,
          slideShadows: true,
        }}
        slidesPerView={1}
        spaceBetween={10}
        
        effect={"cards"}
        grabCursor={true}
        navigation={false}
        modules={[EffectCards, Navigation]}
        className="mySwiper lg:w-[600px] lg:h-[320px] md:w-[450px] md:h-[240px] sm:w-[300px] sm:h-[160px] w-[240px] h-[150px]"
      >
        <SwiperSlide>
          <Image src={"/sourceImg/g3.jpg"} alt="g3" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g4.jpg"} alt="g4" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g2.jpg"} alt="g2" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g3.jpg"} alt="g3" fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g4.jpg"} alt="g4" fill />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
