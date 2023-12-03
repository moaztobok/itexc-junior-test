import Carousel from './Carousel';
const TestimonialsSection = () => {
    
  return (
    <section className='lg:min-h-screen flexCenter py-20 overflow-hidden'
    style={{backgroundImage:'url(./Assets/images/testimonial-background.png)',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'}}>
        <div className='lg:max-container flexCenter lg:flex-1 flex-col bg-bgColor lg:px-20 py-10  relative'>
            <div className='flexCenter flex-col gap-4 text-center font-semibold'>
                <p className='text-orangeColor py-4 px-10 border-orangeColor border-b-2'>Testimonial</p>
                <h2 className=' text-[1.5rem]'>You're in safe hands</h2>
            </div>
            <div className='w-full overflow-x-hidden-hidden'>
                <div className='paddingH text-center lg:max-w-[1440px] md:max-w-[664px] sm:max-w-[366px] py-5'>
                <Carousel/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection