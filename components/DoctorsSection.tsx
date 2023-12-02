import Image from 'next/image'
import React from 'react'

const DoctorsSection = () => {
  return (
    <section className='flexBetween flex-col h-[50vh] w-full bg-darkGray paddingH py-10 relative'>
        <div className='flexBetween text-center flex-col lg:max-w-[35%]'>
            <div className='flex flex-col'>
            <h2 className='title'>Our secret to great virtual care is great doctors</h2>
            <p className='text-fontAccentColor'>Board-certified | Top 5% of medical specialists in the world | +90% satisfaction rating</p>
            </div>
        </div>
            <img className='w-full absolute bottom-0' src='/Assets/images/doctors-image.png' alt='doctors'/>
    </section>
  )
}

export default DoctorsSection