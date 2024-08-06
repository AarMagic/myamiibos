import React, { useContext, useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Card } from './Card';
import { AmiibosContext } from '../context/AmiibosContext';
import { useArray } from '../hooks/useArray';

export const Slider = () => {
  const amiibos = useContext(AmiibosContext)
  const [slicerData, setSlicerData] = useState([])
  const { data, setData, limitData } = useArray({
    data: [],
    separation: 50
  })

  useEffect(() => {
    if (amiibos.length > 0 && Array.isArray(amiibos)) {
      setData(amiibos)
    }
  }, [amiibos])

  useEffect(() => {
    if (data.length > 0) {
        const dataReduced = limitData(10);
        console.log(dataReduced)
        setSlicerData(dataReduced);
    }
}, [data]);


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
        !slicerData
          ? "Cargando..."
          : slicerData.map((element, index) => (
            <SwiperSlide key={index}>
              <Card element={element} />
            </SwiperSlide>
          ))
      }
    </Swiper>
  )
}