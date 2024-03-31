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
import LazyLoadingImage from "../common/LazyLoadingImage";

const Photos = () => {
    const images = [
        {key: 'photo02', src: photo02},
        {key: 'photo01', src: photo01},
        {key: 'photo06', src: photo06},
        {key: 'photo05', src: photo05},
        {key: 'photo11', src: photo11},
        {key: 'photo08', src: photo08},
        {key: 'photo10', src: photo10},
        {key: 'photo09', src: photo09},
        {key: 'photo07', src: photo07},
        {key: 'photo13', src: photo13},
        {key: 'photo14', src: photo14},
    ]
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
                    {
                        images.map((image: {key: string, src: any}) => (
                            <SwiperSlide key={image.key}>
                                <LazyLoadingImage
                                    src={image.src}
                                    onError={(e: React.ChangeEvent<HTMLImageElement>) => {
                                        e.target.onerror = null; // 에러 핸들러 무한 루프 방지
                                        e.target.src = photo02 // 이미지 로드 실패 시 p.image 사용
                                        e.target.width = 380;
                                        e.target.height = 380;
                                    }}
                                    placeholderImg={image.src}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Photos
