import React, { useContext, useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAsync } from '../hooks/useAsync';
import { Card } from './Card';
import { AmiibosContext } from '../context/AmiibosContext';
import { useArray } from '../hooks/useArray';

export const Slider = () => {
  const amiibos = useContext(AmiibosContext)
  const [amiibosState, setAmiibosState] = useState([]);
  const {limitArray} = useArray(amiibos)

  useEffect(() => {
    if (amiibosState.length <= 0) {
      const limitedData = limitArray(10);
      setAmiibosState(limitedData)
    }      
  }, [amiibosState, limitArray])

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        388: {
          slidesPerView: 2,
          spaceBetween: 300
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        940: {
          slidesPerView: 3,
          spaceBetween: 80
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 50
        },
        1540: {
          slidesPerView: 4,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {
         !amiibosState
          ? "Cargando..."
          : amiibosState.map((element, index) => (
            <SwiperSlide key={index}>
              <Card element={element} />
            </SwiperSlide>
          ))
      }
    </Swiper>
  )
}