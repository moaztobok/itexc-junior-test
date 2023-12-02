import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

const GetApp = () => {
  return (
    <section className='w-full flexCenter bg-blueColor text-bgColor px-10'
    style={{backgroundImage:'url(./Assets/images/blueTexture.png)'}}>
      <div className='max-container flex flex-row font-light py-12 gap-8 flex-wrap'>
      <div className='max-w-[60%] md:max-w-full '>
        <h2 className='title text-[40px] font-semibold'>Get the app</h2>
        <h3 className='text-[24px]'>Rated 4.9 out of 5 by more than 150k reviewers.</h3>
        <p className=''>Register in the app and be ready to see a doctor, therapist or psychiatrist anytime, anywhere. Available for iPhone and Android.</p>
      </div>
      <div className='flex flex-col justify-items-end gap-4 auto'>
          <div className='flex flex-row gap-2'>
            <Image className='lg:w-full'  src='/Assets/icons/App-Store.svg' alt='app-store' width={150} height={50}/>
            <Image className='lg:w-full' src='/Assets/icons/Google-play.svg' alt='google-play' width={150} height={50}/>
          </div>
          <div className='flex flex-row gap-2 font-semibold justify-end items-center text-xl'>
            <p>4.9</p>
            <Image src='/Assets/icons/star.svg' alt='star' width={20} height={20}/>
            <Image src='/Assets/icons/star.svg' alt='star' width={20} height={20}/>
            <Image src='/Assets/icons/star.svg' alt='star' width={20} height={20}/>
            <Image src='/Assets/icons/star.svg' alt='star' width={20} height={20}/>
            <Image src='/Assets/icons/star.svg' alt='star' width={20} height={20}/>
          </div>
          <p className='flex flex-row gap-2 justify-end '>
          190.7k Rating
          </p>
      </div>
      </div>
    </section>
  )
}

export default GetApp