'use client'
import Navbar from '@/components/Navbar'
import About from '@/Features/Homepage/About'
import HeroSection from '@/Features/Homepage/HeroSection'
import React, { useState } from 'react'

const page = () => {
  return (
    <div className=' w-full bg-white'>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  )
}

export default page