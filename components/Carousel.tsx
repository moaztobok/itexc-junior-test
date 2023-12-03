'use client'
import React, { useEffect, useMemo, useRef } from 'react'
import { Testimonials as ImporteTestmonials } from '@/constants'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
const Carousel = () => {
  const Testimonials = useMemo(() => ImporteTestmonials, [ImporteTestmonials]);

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
      autoplay={{delay:3400, disableOnInteraction:false}}
    >
     {Testimonials.map((Testimonial,index)=> 
     {
     return(<SwiperSlide  key={index}>
        <div  className='flexCenter flex-col gap-4 select-none' >
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
     )} 
    </Swiper>
    </>
  )
}

export default Carousel