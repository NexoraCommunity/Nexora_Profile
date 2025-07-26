import Navbar from '@/components/Navbar'
import About from '@/Features/Homepage/About'
import Gallery from '@/Features/Homepage/Gallery'
import HeroSection from '@/Features/Homepage/HeroSection'
import Portfolio from '@/Features/Homepage/Portfolio'
import React, { useState } from 'react'

const page = () => {
  return (
    <div className=' w-full bg-white text-white'>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Gallery />
    </div>
  )
}

export default page