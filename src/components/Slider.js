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
  const { datos, limitData, cargando } = useAsync("https://amiiboapi.com/api/amiibo/?type=figure")

  useEffect(() => {
    if (!cargando && datos.length > 0 && amiibosState.length === 0) {
      const limitedData = limitData(10);
      setAmiibosState(limitedData);
    }

  }, [cargando, limitData, datos, amiibosState])

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