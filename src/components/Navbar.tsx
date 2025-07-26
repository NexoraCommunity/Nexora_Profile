"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
    const [Toggle, SetToggle] = useState(false)
    return (
        <nav className='nav fixed flex justify-center w-full '>
            <div className='w-11/12  top-0 py-6  text-white flex justify-between items-center text-3xl mx-auto'>
                <div className='flex gap-3 items-center w-96 max-lg:hidden'>
                    <Link href={'#home'} className='p-2 px-6 bg-white/10 backdrop-blur-lg rounded-3xl'>HOME</Link>
                    <Link href={'#about'} className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>TENTANG KAMI</Link>
                </div>
                <h1>NEXORA<span className='text-[#56DFCF]'>.</span></h1>
                <div className='flex gap-3 items-center w-96 max-lg:hidden'>
                    <Link href={'#faq'} className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>FAQ</Link>
                    <Link href={'#gallery'} className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>GALLERY</Link>
                </div>
            </div>
            <div className='lg:w-96 right-0 w-full max-lg:top-0  absolute'>
                <button onClick={() => SetToggle(!Toggle)} className='absolute mt-6 right-10'><Image src={"/hamburger.png"} alt='oke' width={50} height={50} /></button>

                <div className={`${Toggle ? "" : "hidden"} max-lg:w-screen w-full bg-black h-auto  lg:pt-6 lg:right-5  absolute top-0 flex flex-col`}>
                    <div className='w-full border relative flex items-center justify-center border-white text-4xl py-7'>
                        <h1>More</h1>
                        <button onClick={() => SetToggle(!Toggle)} className='absolute right-5'><IoIosArrowDown /></button>
                    </div>
                    <div className='xl:hidden flex flex-col'>
                        <Link href={'#homr'} className='w-full border text-center border-white text-xl py-3'>Home</Link>
                        <Link href={'#about'} className='w-full border text-center border-white text-xl py-3'>Tentang Kami</Link>
                        <Link href={'#faq'} className='w-full border text-center border-white text-xl py-3'>Faq</Link>
                        <Link href={'#gallery'} className='w-full border text-center border-white text-xl py-3'>Gallery</Link>
                    </div>
                    <Link href={'#portfolio'} className='w-full border text-center border-white text-xl py-3'>Portfolio</Link>
                    <Link href={'#divisi'} className='w-full border text-center border-white text-xl py-3'>Divisi</Link>
                    <Link href={'#kontakkami'} className='w-full border text-center border-white text-xl py-3'>Kontak Kami</Link>
                </div>

            </div>

        </nav>
    )
}

export default Navbar