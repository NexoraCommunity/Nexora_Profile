import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const HeroSection = () => {
    return (
        <section id='home' className='h-screen relative w-full'>
            <div className='absolute top-0 bg-gradient-to-t from-transparent via-20% via-transparent to-80% to-[#060606] h-1/2 z-50 w-full '>
            </div>
            <div className='absolute  translate-y-20 bg-gradient-to-b from-transparent via-40% via-transparent to-80% to-[#060606] bottom-0 h-1/2 z-50 w-full '>
            </div>
            <div className='absolute top-0 h-full w-full z-30 flex justify-center items-center'>
                <Image alt='hero-img' className='object-cover brightness-75' fill src={"/hero.avif"} />
                <h1 className='relative z-50 xl:text-8xl text-6xl text-center mx-10 text-white'>CODING TOGETHER<br /> <span className='text-[#00FFAD]'> GROWING</span> FOR THE <span className='text-[#00FFAD]'>BETTER</span></h1>
            </div>
            <div className='absolute bottom-0 w-full  z-50 text-white px-20 lg:text-xl text-sm flex justify-between'>
                <p className='max-lg:hidden w-96  text-start'>nexora.com</p>
                <div className='text-2xl gap-5 flex items-center w-full -translate-y-10 flex-col'>
                    <h1>SCROLL DOWN</h1>
                    <IoIosArrowDown className='text-4xl' />
                </div>
                <p className='max-lg:hidden w-96 text-end'>copyright to nexora 2024/2025</p>
            </div>
        </section>
    )
}

export default HeroSection