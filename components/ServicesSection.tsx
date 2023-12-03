import Image from 'next/image'
import React from 'react'
import { Services } from '@/constants'
import Link from 'next/link'
const ServicesSection = () => {
  return (
    <section className='max-container paddingH w-full  flexCenter flex-row-reverse md:flex-col my-10'>
    <div className='lg:w-auto py-10 flex flex-col gap-5'>
      <h2 className='title'>Why Choosing <span className='decorated blueBold'>Healthy 24.</span></h2>
      <p>
      Meet with an urgent care doctor in minutes, 24/7.Schedule a session with a <Link href='https://doctorondemand.com/what-we-treat/mental-health/' className='underline'>therapist or psychiatrist </Link>this week.
      </p>
      <ul className='flex flex-col gap-3'>
        {Services.map((service,index)=>
          <li className='flex gap-3' key={index}><img  alt='check' width={15} height={15} src='./Assets/icons/check.svg'/><p>{service}</p></li>
        )}
      </ul>
    </div>
    <div className='flexCenter lg:w-2/3 py-20'>
        <Image src='/Assets/images/peopleHugging.png' alt='about-image' width={500} height={500}/>
    </div>
  </section>
  )
}

export default ServicesSection