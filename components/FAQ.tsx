import Image from 'next/image'
import Button from './Button';
import Accordion from './Accordion';
const FAQ = () => {

  return (
    <section className='w-screen min-h-screen flexCenter bg-bgColor md:py-10'>
        <div className='max-container flex paddingH md:flex-col'>
            <div className='w-full flex flex-col gap-8 py-10'>
                <div className='flex flex-row gap-2'><Image src='/Assets/icons/Chat.svg' width={50} height={50} alt='FAQ'/><p className='title'>FAQ</p></div>
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
                </p>
                <Accordion/>

            </div>
            <div className='flexCenter w-full'>
                    <div className='flex flex-col relative lg:max-w-[65%] blue-gradient'>
                        <Image className='w-full h-[300px] object-cover' alt='doctor' src='/Assets/images/doctor-hands.png' width={300} height={300}/>
                        <div className='flex flex-col p-10 gap-7 text-bgColor text-[1.1rem] lg:max-w-[80%]'>
                            <p className='font-semibold'>Still have a question?</p>
                            <p className='font-roboto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button title='Contact us' variant='white-fill' type='button'/>
                        </div>
                        <Image className='absolute bottom-5 right-5' src='Assets/icons/vector-doctor.svg' width={80} height={100} alt='doctor' />
                    </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ