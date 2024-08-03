import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAsync } from '../hooks/useAsync';
import { Card } from './Card';

export const Slider = () => {
  // const amiibos = useContext("AmiibosContext")
  const [amiibosState, setAmiibosState] = useState([]);
  const { limitData, cargando } = useAsync("https://amiiboapi.com/api/amiibo/?type=figure")

  useEffect(() => {
    const limitedData = limitData(10);
    setAmiibosState(limitedData);

  }, [limitData])

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
        880: {
          slidesPerView: 3,
          spaceBetween: 200
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 70
        },
        1600: {
          slidesPerView: 5,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {
        cargando
          ?
          "Cargando"
          :
          amiibosState.map((element, index) => {
            return <SwiperSlide key={index}><Card element={element} /></SwiperSlide>
          })
      }
    </Swiper>
  )
}