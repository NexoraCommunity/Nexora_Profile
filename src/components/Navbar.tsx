"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
    const [Toggle, SetToggle] = useState(false)
    return (
        <nav className='nav fixed flex justify-center w-full'>
            <div className='w-11/12  top-0 py-6  text-white  z-10 text-3xl  flex justify-between items-start mx-auto'>
                <div className={`flex justify-between relative  flex-grow  items-center duration-300`}>
                    <div className='flex gap-3 items-start w-96 max-lg:hidden'>
                        <Link href={'#home'} className='p-2 px-6 bg-white/10 backdrop-blur-lg rounded-3xl'>HOME</Link>
                        <Link href={'#about'} className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>TENTANG KAMI</Link>
                    </div>
                    <h1 className='mx-20'>NEXORA<span className='text-[#56DFCF] '>.</span></h1>
                    <div className='flex gap-3 items-start w-96 max-lg:hidden'>
                        <Link href={'#faq'} className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>FAQ</Link>
                        <Link href={'#gallery'} className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>GALLERY</Link>
                    </div>
                </div>
                <div className={`${Toggle ? "scale-x-100 lg:w-96 w-full" : "w-0 h-0"} ease-in-out lg:relative absolute scale-x-0  duration-300 origin-right  lg:-right-5 max-lg:left-0 top-0 z-10    flex flex-col`}>
                    <div className='w-full border relative flex items-center bg-black justify-center border-white text-5xl py-8'>
                        <h1>More</h1>
                        <button onClick={() => SetToggle(!Toggle)} className='absolute right-5'><IoIosArrowDown className={`${Toggle ? "rotate-0" : "rotate-180"} duration-300`} /></button>
                    </div>
                    <div className={`${Toggle ? "scale-y-100" : "scale-y-0 "}  ease-in-out bg-black flex flex-col  origin-top duration-500`}>
                        <div className='xl:hidden flex flex-col'>
                            <Link href={'#homr'} className='w-full border text-center border-white text-2xl py-6'>Home</Link>
                            <Link href={'#about'} className='w-full border text-center border-white text-2xl py-6'>Tentang Kami</Link>
                            <Link href={'#faq'} className='w-full border text-center border-white text-2xl py-6'>Faq</Link>
                            <Link href={'#gallery'} className='w-full border text-center border-white text-2xl py-6'>Gallery</Link>
                        </div>
                        <Link href={'#portfolio'} className='w-full border text-center border-white text-2xl py-6'>Portfolio</Link>
                        <Link href={'#divisi'} className='w-full border text-center border-white text-2xl py-6'>Divisi</Link>
                        <Link href={'#kontakkami'} className='w-full border text-center border-white text-2xl py-6'>Kontak Kami</Link>
                    </div>
                </div>

                <div className='absolute mt-6 right-10 z-0 top-0'>
                    <button onClick={() => SetToggle(!Toggle)}><Image src={"/hamburger.png"} alt='oke' width={50} height={50} /></button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar