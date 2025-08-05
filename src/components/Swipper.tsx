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
        className="mySwiper w-full max-w-[337px] h-[200px] sm:max-w-[450px] sm:h-[270px] lg:max-w-[600px] lg:h-[360px]"
      >
        <SwiperSlide>
          <Image src={"/sourceImg/g3.jpg"} alt="g3" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g4.jpg"} alt="g4" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g2.jpg"} alt="g2" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g3.jpg"} alt="g3" fill className="object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={"/sourceImg/g4.jpg"} alt="g4" fill className="object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
