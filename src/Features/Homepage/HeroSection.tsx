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
                <h1 className='relative z-50 xl:text-8xl sm:text-6xl max-sm:text-5xl text-center mx-10 text-white'>Coding Together<br /> <span className='text-[#00FFAD]'> Growing</span> For The <span className='text-[#00FFAD]'>Better</span></h1>
            </div>
            <div className='absolute bottom-8 w-full  z-50 text-white md:px-20 px-5 lg:text-xl text-xs flex justify-between'>
                <div className='w-full flex justify-between max-sm:hidden'>
                    <p >nexora.com</p>
                    <p>copyright to nexora 2024/2025</p>
                </div>
                <div className='lg:text-2xl text-lg  gap-5 flex items-center absolute left-0 w-full -translate-y-10 max-sm:-translate-y-16 flex-col'>
                    <h1>SCROLL DOWN</h1>
                    <IoIosArrowDown className='text-4xl' />
                </div>
            </div>
        </section>
    )
}

export default HeroSection