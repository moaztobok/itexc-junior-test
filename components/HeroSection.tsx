import React from 'react'
import Button from './Button'
import Features from './Features'
const HeroSection = () => {
  return (
    <main className='w-screen bg-bgColor min-h-[80vmin] relative flexCenter md:flex-col'
    style={{background:'linear-gradient(270deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) 100%),url(./Assets/images/Hero-background.png)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'contain',
      backgroundPosition:'right top'}}>
        <div className='max-container w-full paddingH flex h-full mb-40 md:mt-72'>
          <div className='lg:w-[40%] h-full flex flex-col gap-8 justify-center'>
          <h1 className='text-[3rem] md:text-[2.5rem]'>Feel Better about Finding <span className='blueBold'>Healthcare</span></h1>
          <p className='text-[1.2rem] md:text-[1rem]'>Healththy 24 Online ranks highest in telehealth satisfaction among direct-to-consumer brands.
          </p>
          <Button variant={'orange-fill'} title='Get Started' type='button' onClick={()=>{}}/>
          </div>
        </div>
      <Features/>
    </main>
  )
}


export default HeroSection