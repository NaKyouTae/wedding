import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";

const Photos = () => {
    return (
        <div className="box">
            <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">photo</h2>
            <div className="photo-wrap" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out" data-aos-duration="800">
                <Swiper
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    spaceBetween={16}
                    loop={true}
                    className="photoSwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                {/* <div className="swiper photoSwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">Slide 1</div>
                                    <div className="swiper-slide">Slide 2</div>
                                    <div className="swiper-slide">Slide 3</div>
                                    <div className="swiper-slide">Slide 4</div>
                                    <div className="swiper-slide">Slide 5</div>
                                    <div className="swiper-slide">Slide 6</div>
                                    <div className="swiper-slide">Slide 7</div>
                                    <div className="swiper-slide">Slide 8</div>
                                    <div className="swiper-slide">Slide 9</div>
                                </div>
                            </div> */}
            </div>
        </div>
    )
}

export default Photos
