import Link from 'next/link'
import React from 'react'
import {illnesses} from '@/constants/index'
import Image from 'next/image'
const Visits = () => {
  return (
    <section className='min-h-screen bg-blueishColor flexCenter py-10'>
        <div className='max-container flexCenter flex-col gap-10'>
            <div className='flexCenter flex-col gap-4 p-5'>
            <h2 className='title blueBold'>We're here for you</h2>
            <p className='text-fontAccentColor max-w-2xl text-center'>Visits start at $79 for a 15 min consultation, or could be free depending on your insurance. See <Link href='https://doctorondemand.com/about-us/cost/' className='underline'>costs</Link> for more information.</p>
            </div>
            <div className='flex flexCenter flex-wrap lg:p-10 gap-20'>
                {illnesses.map((ill,index)=>
                <div key={index} className='bg-bgColor p-8 w-[300px] aspect-[3/2] '>
                    <div className='w-full flexBetween'>
                        <p className='font-semibold text-lg'>{ill.name}</p> <Image src='/Assets/icons/orange-link.svg'  alt='link' width={25} height={25}/>
                    </div>
                    <ul className='list-disc px-4 py-4'>
                        {ill.symptoms.map((sym)=>
                        <li key={sym}>
                        {sym}
                        </li>)}
                    </ul>
                </div>)}
            </div>
        </div>
    </section>
  )
}

export default Visits