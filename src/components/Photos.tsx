import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import photo01 from "../assets/img/photo/photo01.jpg";
import photo02 from "../assets/img/photo/photo02.jpg";
import photo05 from "../assets/img/photo/photo05.jpg";
import photo06 from "../assets/img/photo/photo06.jpg";
import photo07 from "../assets/img/photo/photo07.jpg";
import photo08 from "../assets/img/photo/photo08.jpg";
import photo09 from "../assets/img/photo/photo09.jpg";
import photo10 from "../assets/img/photo/photo10.jpg";
import photo11 from "../assets/img/photo/photo11.jpg";
import photo13 from "../assets/img/photo/photo13.jpg";
import photo14 from "../assets/img/photo/photo14.jpg";

const Photos = () => {
    return (
        <div className="box">
            <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">photo</h2>
            <div className="photo-wrap" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={16}
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}
                    className="photoSwiper"
                >
                    <SwiperSlide><img src={photo01} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo02} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo05} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo06} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo08} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo07} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo09} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo10} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo11} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo13} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo14} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Photos
