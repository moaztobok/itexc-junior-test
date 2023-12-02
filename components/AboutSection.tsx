import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section className='max-container paddingH w-full min-h-screen flexCenter flex-row md:flex-col'>
      <div className='lg:w-1/2 py-10 flex flex-col gap-5'>
        <h2 className='title'>About <span className='blueBold decorated'>Healthy 24.</span></h2>
        <p>
        With 24/7 access to online doctors, psychiatrists, psychologists, therapists and other medical experts, care is always available, anytime and anywhere. Select and see your favorite providers again and again, right from your smartphone, tablet or computer.
        </p>
        <p>
        Better yet, Doctor On Demand is a covered benefit for over 98 million Americans by their health plan or employer. It’s free to sign up and easy to check your coverage when you register.
        </p>
      </div>
      <div className='flex justify-end lg:w-1/2 py-20'>
        <div className='relative'>
          <Image src='/Assets/images/plants.png' alt='about-image' width={400} height={600}/>
          <div className='bg-blueColor blue-gradient absolute px-10 py-8 text-[2rem] font-semibold flexCenter lg:left-[-100px] md:left-[15%] bottom-[-50px]'>
              <span className='decorated text-bgColor'>Healthy 24.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection