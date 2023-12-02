import { contactInfo } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Form from './Form'

const ContactUs = () => {
  return (
    <section className='min-h-screen flexCenter'>
        <div className='max-container flex flex-1 md:flex-col paddingH gap-7 py-10'>
            <div className='w-full flex flex-col gap-8'>
            <h2 className='title text-blueColor'>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Form/>
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='font-semibold text-blueColor text-[1.4rem]'>Available also on :</h2>
                    {contactInfo.map((contact, index) => 
                    <>
                    <div key={index} className='grid lg:w-[500px] max-w-[500px] grid-cols-[50px_auto] place-content-start'>
                        <div className='p-1'>
                        <Image src={contact.icon} alt='email' width={25} height={25} />
                        </div>
                        <div className='flex flex-col'>
                        <p className='font-semibold text-[1.25rem]'>{contact.contact}</p>
                        <p className='text-fontAccentColor w-[300px]'>{contact.desc}</p>
                        </div>
                    </div>
                    <div className='w-5/6 border-b-2 border-fontAccentColor'></div>
                    </>
                    )}
            </div>

        </div>
    </section>
  )
}

export default ContactUs