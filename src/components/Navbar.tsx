"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const [Toggle, SetToggle] = useState(false)
    return (
        <nav className='nav fixed flex justify-center w-full py-6'>
            <div className='w-11/12  top-0  text-white flex justify-between items-center text-3xl mx-auto'>
                <div className='flex gap-3 items-center w-96 max-lg:hidden'>
                    <button className='p-2 px-6 bg-white/10 backdrop-blur-lg rounded-3xl'>HOME</button>
                    <button className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>TENTANG KAMI</button>
                </div>
                <h1>NEXORA<span className='text-[#56DFCF]'>.</span></h1>
                <div className='flex gap-3 items-center w-96 max-lg:hidden'>
                    <button className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>FAQ</button>
                    <button className='p-2 px-6 bg-white/10 backdrop-blur-lg  rounded-3xl'>GALLERY</button>
                </div>
            </div>
            <div className='right-10  w-96 absolute'>
                <button onClick={() => SetToggle(!Toggle)} className='absolute z-10 right-0'><Image src={"/hamburger.png"} alt='oke' width={50} height={50} /></button>

                <div className={`bg-black  ${Toggle ? "" : "hidden"} translate-x-5 relative z-0`}>
                    <button className='w-full border border-white text-4xl py-7'>More</button>
                    <div className='xl:hidden'>
                        <button className='w-full border border-white text-4xl py-3'>Home</button>
                        <button className='w-full border border-white text-4xl py-3'>Tentang Kami</button>
                        <button className='w-full border border-white text-4xl py-3'>Faq</button>
                        <button className='w-full border border-white text-4xl py-3'>Gallery</button>
                    </div>
                    <button className='w-full border border-white text-4xl py-3'>Portfolio</button>
                    <button className='w-full border border-white text-4xl py-3'>Divisi</button>
                    <button className='w-full border border-white text-4xl py-3'>Kontak Kami</button>
                </div>

            </div>

        </nav>
    )
}

export default Navbar