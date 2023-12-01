'use client';
import React, { useState , useEffect} from 'react'
import {Links} from '@/constants/index'
import Link from 'next/link'
import Image from 'next/image'
const NavBar = () => {

    const [showMenu,setShowMenu] =useState<Boolean>(false);

    useEffect(()=>{
        if(showMenu){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    },)
  return (
    <nav className='h-[10vh] w-full bg-red-500 flexBetween max-container py-5 paddingH'>
        <Image alt='logo' src='./Assets/icons/healthy24Logo.svg' width={200} height={100}/>
            <div className='flexCenter gap-10 font-medium md:hidden '>
            {
                Links.map((link, index) =>
                <Link key={index} href={link.url} className='active:text-orangeColor duration-200 cursor-pointer'>
                {link.title}
                </Link>)
            }
            </div>
            <div className='grid grid-flow-col items-center gap-5 md:hidden'>
                <Image alt='callIcon' src='/Assets/icons/Calling.svg' width={30} height={30}></Image>
                <div className='flex flex-col'>
                    <p className='text-[0.8rem] text-fontAccentColor'>Service disponible</p>
                    <p className='font-semibold'>0453 628 125</p>
                </div>           
            </div>
            <button className='lg:hidden'
            onClick={()=>{setShowMenu(true)}}>
                <Image src='/Assets/icons/hamburger-menu.svg' alt='menuButton' width={30} height={30}/>        
            </button>

            <div className='absolute h-screen w-[80%] shadow-2xl top-0 right-0 bg-bgColor flex flex-col py-10 p-5 gap-10 z-50 duration-200'
            style={{transform:`translateX(${showMenu ? '0%' : '100%' })`}}>
                <div className='flexBetween'>
                <Image alt='logo' src='./Assets/icons/healthy24Logo.svg' width={100} height={50}/>
                <button
                onClick={()=>{setShowMenu(false)}}>
                <Image src='/Assets/icons/close-icon.svg' alt='menuButton' width={20} height={20}/>        
                </button>
                </div>
                <div className='flex flex-col text-[1.5rem] gap-5'>
                {
                    Links.map((link, index) =>
                    <Link key={index} href={link.url} className='duration-200 active:text-orangeColor cursor-pointer'>
                    {link.title}
                    </Link>)
                }
                </div>
                <div className='grid grid-flow-col items-center grid-cols-[35px_auto] gap-3'>
                <Image alt='callIcon' src='/Assets/icons/Calling.svg' width={30} height={30}></Image>
                <div className='flex flex-col'>
                    <p className='text-[0.8rem] text-fontAccentColor'>Service disponible</p>
                    <p className='font-semibold'>0453 628 125</p>
                </div>           
            </div>
            </div>
    </nav>
  )
}

export default NavBar