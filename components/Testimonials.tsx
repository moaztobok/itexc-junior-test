'use client'
import React, { useEffect, useRef } from 'react'
import { Testimonials } from '@/constants'
import { Swiper, SwiperSlide ,useSwiper } from 'swiper/react';

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
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
//

const TestimonialsSection = () => {
    const swiper = useSwiper();
    const swiperRef = useRef();
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
    <section className='lg:min-h-screen flexCenter py-10 overflow-hidden'
    style={{backgroundImage:'url(./Assets/images/testimonial-background.png)',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'}}>
        <div className='lg:max-container flexCenter lg:flex-1 flex-col bg-bgColor lg:px-20 py-10  relative'>
        <button className='absolute top-1/2 left-28' onClick={handlePrevSlide}><Image alt='left-btn' src='/Assets/icons/left-btn.svg' height={15} width={15} /></button>
        <button className='absolute top-1/2 right-28'onClick={handleNextSlide}><Image alt='right-btn' src='/Assets/icons/right-btn.svg' height={15} width={15}/></button>
            <div className='flexCenter flex-col gap-4 text-center font-semibold'>
                <p className='text-orangeColor py-4 px-10 border-orangeColor border-b-2'>Testimonial</p>
                <h2 className=' text-[1.5rem]'>You're in safe hands</h2>
            </div>
            <div className='w-full overflow-x-hidden-hidden'>
                <div className='paddingH text-center lg:max-w-[1440px] md:max-w-[664px] sm:max-w-[366px] py-5'>
                <Swiper
      ref={swiperRef}          
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{delay:5000, disableOnInteraction:true}}
      loop={true}
    >
     {Testimonials.map((Testimonial)=>
     <SwiperSlide>
        <div className='flexCenter flex-col gap-4'>
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection