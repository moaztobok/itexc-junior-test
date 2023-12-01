import React from 'react'
import Button from './Button'
import { features } from '@/constants/index'
import Image from 'next/image'
import Features from './Features'
const HeroSection = () => {
  return (
    <main className='w-screen bg-bgColor h-[80vh] relative'
    >
      <div className='w-full lg:h-[90%]  grid place-items-center md:grid-flow-row'
      style={{background:'linear-gradient(270deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 100%),url(./Assets/images/Hero-background.png)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'contain',
      backgroundPosition:'right top'}}>
        <div className='max-container w-full px-10 md:min-h-[85vh] flex items-end align-bottom'>
          <div className='lg:w-[40%] h-full flex flex-col gap-8'>
          <h1 className='text-[3rem] md:text-[2.5rem]'>Feel Better about Finding <span className='blueBold'>Healthcase</span></h1>
          <p className='text-[1.2rem] md:text-[1rem]'>Healththy 24 Online ranks highest in telehealth satisfaction among direct-to-consumer brands.
          </p>
          <Button variant={'orange-fill'} title='Get Started' type='button'/>
          </div>
        </div>
        <Features/>
      </div>
    </main>
  )
}


export default HeroSection