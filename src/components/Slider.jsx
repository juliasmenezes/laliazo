import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-cards';

import './Slider.css';


import { EffectCards } from 'swiper/modules';

export default function Slider({ children }) {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      > {children}
      </Swiper>
    </>
  );
}
