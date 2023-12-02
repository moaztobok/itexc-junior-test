"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { Questions } from '@/constants'
import Button from './Button';
const FAQ = () => {
    const [show,setShow]= useState<number>(0)

  return (
    <section className='w-screen min-h-screen flexCenter bg-bgColor md:py-10'>
        <div className='max-container flex paddingH md:flex-col'>
            <div className='w-full flex flex-col gap-8 py-10'>
                <div className='flex flex-row gap-2'><Image src='/Assets/icons/Chat.svg' width={50} height={50} alt='FAQ'/><p className='title'>FAQ</p></div>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                </p>
                <ul>   
                {Questions.map((question,index)=>
                <li key={index}
                onClick={()=>(setShow(index))}>
                <div className="flex flex-col ">
                <div className={`flexBetween py-4 text-bgColor align-middle justify-center px-8 mt-2
                ${index===show ?'bg-darkColor': 'border border-fontAccentColor rounded-md text-darkColor '}`}>
                <div className="flex flex-col justify-center align-middle font-roboto font-bold ">
                    <p><span className='text-orangeColor font-semibold'>0{index+1} : </span>{question.question}</p>
                </div>
                <svg className={`${index === show ? 'fill-bgColor rotate-180 duration-500' :'fill-darkColor'}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M19.3336 9.66703V10.3336C19.3336 10.7018 19.0352 11.0003 18.667 11.0003H11.0003V18.667C11.0003 19.0351 10.7018 19.3336 10.3336 19.3336H9.66702C9.29882 19.3336 9.00032 19.0351 9.00032 18.667V11.0003H1.33366C0.965473 11.0003 0.666992 10.7018 0.666992 10.3336V9.66703C0.666992 9.29883 0.965473 9.00033 1.33366 9.00033H9.00032V1.33365C9.00032 0.965463 9.29882 0.666992 9.66702 0.666992H10.3336C10.7018 0.666992 11.0003 0.965463 11.0003 1.33365V9.00033H18.667C19.0352 9.00033 19.3336 9.29883 19.3336 9.66703Z"/>
                </svg>
                </div>
                <div className={`border border-fontAccentColor rounded-b-md overflow-hidden ${index==show ?'animate-extend': 'max-h-0 border-none animate-contract'}`}
                ><p className='font-poppins font-medium p-5'>{question.answer}</p> </div> 
                </div>
                </li>)}
                </ul>

            </div>
            <div className='flexCenter w-full'>
                    <div className='flex flex-col relative lg:max-w-[65%] blue-gradient'>
                        <Image className='w-full h-[300px] object-cover' alt='doctor' src='/Assets/images/doctor-hands.png' width={300} height={300}/>
                        <div className='flex flex-col p-10 gap-7 text-bgColor text-[1.1rem] lg:max-w-[80%]'>
                            <p className='font-semibold'>Still have a question?</p>
                            <p className='font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button title='Contact us' variant='white-fill' type='button'/>
                        </div>
                        <Image className='absolute bottom-5 right-5' src='Assets/icons/vector-doctor.svg' width={80} height={100} alt='doctor' />
                    </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ