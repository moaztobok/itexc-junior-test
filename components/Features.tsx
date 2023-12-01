import { features } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='flex w-[60%] md:w-full lg:absolute bg-blueColor bottom-[-50px] md:flex-col lg:mt-10 md:overflow-hidden'>
    {features.map((feature,index)=>
    <div key={index} className={`lg:w-1/4  grid grid-flow-row grid-rows-[80px_50px] md:w-full place-items-center text-bgColor z-10 text-center flex-col  h-fu py-10 px-5 gap-2 ${index===2 ? 'selected' : '' }`}>
      <Image src={feature.image} alt='feature image' width={75} height={75}/>       
      <p className='mb-auto text-center'>{feature.desc}</p>
    </div>)}
  </div>
  )
}

export default Features