import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import photo01 from "../../public/assets/img/photo/photo01.jpg";
import photo02 from "../../public/assets/img/photo/photo02.jpg";
import photo05 from "../../public/assets/img/photo/photo05.jpg";
import photo06 from "../../public/assets/img/photo/photo06.jpg";
import photo07 from "../../public/assets/img/photo/photo07.jpg";
import photo08 from "../../public/assets/img/photo/photo08.jpg";
import photo09 from "../../public/assets/img/photo/photo09.jpg";
import photo10 from "../../public/assets/img/photo/photo10.jpg";
import photo11 from "../../public/assets/img/photo/photo11.jpg";
import photo13 from "../../public/assets/img/photo/photo13.jpg";
import photo14 from "../../public/assets/img/photo/photo14.jpg";
import photo15 from "../../public/assets/img/photo/photo15.jpg";

const Photos = () => {
    return (
        <div className="box">
            <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">photo</h2>
            {/* <ul className="photo-grid" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <li style={{backgroundImage: `url(${photo02})`}}></li>
                <li style={{backgroundImage: `url(${photo01})`}}></li>
                <li style={{backgroundImage: `url(${photo15})`}}></li>
                <li style={{backgroundImage: `url(${photo06})`}}></li>
                <li style={{backgroundImage: `url(${photo05})`}}></li>
                <li style={{backgroundImage: `url(${photo11})`}}></li>
                <li style={{backgroundImage: `url(${photo08})`}}></li>
                <li style={{backgroundImage: `url(${photo10})`}}></li>
                <li style={{backgroundImage: `url(${photo09})`}}></li>
                <li style={{backgroundImage: `url(${photo07})`}}></li>
                <li style={{backgroundImage: `url(${photo13})`}}></li>
                <li style={{backgroundImage: `url(${photo14})`}}></li>
            </ul> */}
            <div className="photo-wrap" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={6}
                    loop={true}
                    pagination={true}
                    modules={[Pagination]}
                    className="photoSwiper"
                >
                    <SwiperSlide><img src={photo02} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo01} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo06} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo05} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo11} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo08} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo10} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo09} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo07} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo13} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={photo14} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Photos
