import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='flexCenter w-screen p-10'>
        <div className='max-container flex flex-col flex-1  gap-10'>
            <div className='flex gap-20 md:flex-col'>
                {
                    footerLinks.map((link,index)=>
                    <ul className='flex flex-col' key={index}>
                        <p className='font-semibold'>{link.subject}</p>
                        {link.links.map((link)=>
                        <Link href={link.url} className='text-fontAccentColor hover:underline'>
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
    </section>
  )
}

export default Footer