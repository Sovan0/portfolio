import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import menu from "../../img/menu.png"
import portofolio1 from "../../img/portofolio1.png"
import spline from "../../img/spline.png"
import sharpei from "../../img/sharpei.png"
import portofolio2 from "../../img/portofolio2.png"
import 'swiper/css';

const portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">

        {/*---- heading ----*/}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/*---- slider ----*/}
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={sharpei} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={spline} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={portofolio1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={portofolio2} alt="" />
            </SwiperSlide>            
            <SwiperSlide>
                <img src={menu} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default portfolio