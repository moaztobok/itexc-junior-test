import Image from 'next/image'
import React from 'react'
import Button from './Button'

const HospitalSearch = () => {
  return (
    <section className='w-screen min-h-screen bg-bgColor flexCenter'>
        <div className='flexCenter flex-row flex-wrap w-full max-container'>
            <div className='lg:max-w-[50%] justify-start relative'>
                <Image src='/Assets/images/hospital-search-image.png' alt='hospital' width={600} height={600}/>
                <div className='grid grid-cols-[40px_auto] w-[250px] p-4 gap-3 absolute lg:-right-10 bottom-24 bg-bgColor shadow-BlueShadow'>
                <div className='rounded-full flexCenter bg-blueColor aspect-square'>
                    <Image src='/Assets/icons/plus-hand.svg' alt='plus-hand' width={24} height={24}/>  
                </div>
                <div>
                    <p className='text-sm font-semibold'>Quality over Quantity</p>
                    <div className='flex flex-row'>
                    <Image src='/Assets/icons/rounded-star.svg' alt='rounded-star' width={16} height={16}/>
                    <Image src='/Assets/icons/rounded-star.svg' alt='rounded-star' width={16} height={16}/> 
                    <Image src='/Assets/icons/rounded-star.svg' alt='rounded-star' width={16} height={16}/> 
                    <Image src='/Assets/icons/rounded-star.svg' alt='rounded-star' width={16} height={16}/> 
                    <Image src='/Assets/icons/rounded-star.svg' alt='rounded-star' width={16} height={16}/> 
 
                    </div>
                </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:max-w-[40%] lg:pl-16 paddingH'>
                <h2 className='text-blueColor title font-normal'>Search the Nearest hospital from you</h2>
                <p>Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi menyediakan pelayanan paripurna (komprehensif).</p>
                <Button title='Search' variant='orange-fill' type='button' onClick={()=>{}}/>
            </div>
        </div>
    </section>
  )
}

export default HospitalSearch