'use client'
import React, { useEffect, useRef } from 'react'
import { Testimonials } from '@/constants'
import { Swiper, SwiperRef, SwiperSlide ,useSwiper } from 'swiper/react';

//swiper imports 
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import 'swiper/css/pagination'; // Import Swiper pagination styles
import 'swiper/css/effect-coverflow'; // Import Swiper coverflow effect styles
import 'swiper/css/effect-fade'; // Import Swiper fade effect styles
import 'swiper/css/effect-cube'; // Import Swiper cube effect styles
import 'swiper/css/effect-flip'; // Import Swiper flip effect styles
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import 'swiper/css/scrollbar'; // Import Swiper scrollbar styles
import 'swiper/css/thumbs'; // Import Swiper thumbs styles
import 'swiper/css/zoom'; // Import Swiper zoom styles
import 'swiper/css/keyboard'; // Import Swiper keyboard control styles
import 'swiper/css/mousewheel'; // Import Swiper mousewheel control styles
import 'swiper/css';

import Image from 'next/image';
const Carousel = () => {
    const swiper = useSwiper();
    const swiperRef = useRef<SwiperRef>(null);
    useEffect(() => {
        if (swiperRef.current) {
          swiperRef.current.swiper.init();
        }
      }, []);
    
      const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      };
    
      const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slidePrev();
        }
      };
  return (
    <>
        <button className='absolute top-1/2 left-28 z-30 md:hidden' onClick={handlePrevSlide}><Image alt='left-btn' src='/Assets/icons/left-btn.svg' height={15} width={15} /></button>
        <button  className='absolute top-1/2 right-28 z-30 md:hidden'onClick={handleNextSlide}><Image alt='right-btn' src='/Assets/icons/right-btn.svg' height={15} width={15}/></button>
    <Swiper
      ref={swiperRef}          
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay:3400, disableOnInteraction:false}}
    >
     {Testimonials.map((Testimonial)=>
     <SwiperSlide key={Testimonial.name}>
        <div className='flexCenter flex-col gap-4 select-none' >
            {/* Star Rating */}
            <div className='flexCenter flex-row gap-1
            '>             
                    {(() => {
                        const stars = [];
                        for (let i = 0; i < Testimonial.rating; i++) {
                          stars.push(<Image src='/Assets/icons/yellow-star.svg' alt='star' width={25} height={25}/>);
                        }
                        return stars;
                      })()}          
            </div>
            <p className='lg:max-w-[70%]'>
                {Testimonial.desc}
            </p>
            <Image src={Testimonial.avatar} width={50} height={50} alt='avatar' className='rounded-full object-cover'/>
            <div className='flexCenter flex-col'>
                      <p className='font-semibold'>{Testimonial.name}</p>
                      <p>{Testimonial.position}</p>
            </div>
        </div>
     </SwiperSlide>)} 
    </Swiper>
    </>
  )
}

export default Carousel