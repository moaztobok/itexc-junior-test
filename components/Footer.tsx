'use client';
import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='flexCenter w-screen p-10 relative'>
        <div className='max-container flex flex-col flex-1  gap-10'>
            <div className='flex gap-20 md:flex-col'>
                {
                    footerLinks.map((link)=>
                    <ul className='flex flex-col' key={link.subject}>
                        <p className='font-semibold'>{link.subject}</p>
                        {link.links.map((link)=>
                        <Link key={link.name}  href={link.url} className='text-fontAccentColor hover:underline'>
                            {link.name}
                        </Link>)}
                    </ul>)
                }
                <ul className='flex items-center flex-col gap-2'>
                <p className='font-semibold'>Download the application</p>
                <div className='flex gap-2'>
                <Link href='/'>
                <Image className='w-full h-auto'  src='/Assets/icons/App-Store.svg' alt='app-store' width={100} height={50}/>
                </Link>
                <Link href='/'>
                <Image className='w-full h-auto' src='/Assets/icons/Google-play.svg' alt='google-play' width={100} height={50}/>
                </Link>
                </div>
                </ul>
            </div>
            <p>
            Healthy 2023 ©   
            </p>
        </div>
        <div className='aspect-square absolute bottom-10 right-20 hover:opacity-50 duration-200'
        onClick={()=>{window.scrollTo(0,0)}}>
                <Image className='w-full h-auto' src='/Assets/icons/back-to-top.svg' alt='back-to-top' width={50} height={50}/>
        </div>
    </section>
  )
}

export default Footer