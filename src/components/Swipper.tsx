'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import Image from 'next/image';

// import required modules
import { EffectCards, Navigation } from 'swiper/modules';


export default function Swipper() {
  return (
    <>
      <Swiper
        cardsEffect= {{
          perSlideOffset : 60,
          perSlideRotate: 5,
          rotate: false,
          slideShadows: true
        }
        }
        effect={'cards'}
        grabCursor={true}
        navigation={true}
        modules={[EffectCards, Navigation]}
        className="mySwiper w-[600px] h-[320px]"
      >
        <SwiperSlide>
          <Image src={"/sourceImg/g3.jpg"} alt='g3' fill />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={"/sourceImg/g4.jpg"} alt='g4' fill />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={"/sourceImg/g2.jpg"} alt='g2' fill />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={"/sourceImg/g3.jpg"} alt='g3' fill />
        </SwiperSlide>
        <SwiperSlide >
          <Image src={"/sourceImg/g4.jpg"} alt='g4' fill />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
