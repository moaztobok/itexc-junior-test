import Image from 'next/image'
import React from 'react'
import Button from './Button'

const FindDoctor = () => {
  return (
    <section className='max-container paddingH w-full min-h-screen flexCenter flex-row md:flex-col my-10'>
    <div className='py-10 flex flex-col gap-5 lg:max-w-[50%]'>
      <h2 className='title'>Find The Best doctor you need</h2>
      <p >
      From rashes to colds, stress management to diabetes management, individual treatment plans are created around you. Our medical and mental health providers work together, keeping your personal journey protected and connected.
      </p>
      <Button title='Get Started' variant='blue-outline' type='button' onClick={()=>{}} />
    </div>
    <div className='flexCenter  py-20'>
        <Image src='/Assets/images/best-doctor-image.png' alt='about-image' width={500} height={500}/>
    </div>
  </section>
  )
}

export default FindDoctor