import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';

function Carousel() {
  return (
    <div>
    <div className='container'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://mcdonalds.com.pk/wp-content/uploads/2023/07/knowledge-platform-h-2023.png'/></SwiperSlide>
        <SwiperSlide><img src='https://mcdonalds.com.pk/wp-content/uploads/2023/07/McCrispy-Banner-Desktop.png.png'/></SwiperSlide>
        <SwiperSlide><img src='https://mcdonalds.com.pk/wp-content/uploads/2023/06/MasterCard-Slide-Desktop.png'/></SwiperSlide>
        <SwiperSlide><img src='https://mcdonalds.com.pk/wp-content/uploads/2023/08/chicken-tenders-banner-Desktop.png'/></SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default Carousel
