'use client'
import Navbar from '@/components/Navbar'
import About from '@/Features/Homepage/About'
import HeroSection from '@/Features/Homepage/HeroSection'
import Portfolio from '@/Features/Homepage/Portfolio'
import React, { useState } from 'react'

const page = () => {
  return (
    <div className=' w-full bg-white'>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
    </div>
  )
}

export default page