import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import GetApp from '@/components/GetApp'
import FindDoctor from '@/components/FindDoctor'
import Visits from '@/components/Visits'
import HospitalSearch from '@/components/HospitalSearch'
import TestimonialsSection from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import DoctorsSection from '@/components/DoctorsSection'
import ContactUs from '@/components/ContactUs'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <GetApp/>
      <FindDoctor/>
      <Visits/>
      <HospitalSearch/>
      <TestimonialsSection/>
      <FAQ/>
      <DoctorsSection/>
      <ContactUs/>
      <Map/>
      <Footer/>
    </>
  )
}

export default page