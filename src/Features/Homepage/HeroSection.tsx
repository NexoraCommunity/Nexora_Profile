import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section id='home' className='h-screen relative w-full'>
            <div className='absolute top-0 bg-gradient-to-t from-transparent via-20% via-transparent to-80% to-[#060606] h-1/2 z-50 w-full '>
            </div>
            <div className='absolute  translate-y-14 bg-gradient-to-b from-transparent via-40% via-transparent to-80% to-[#060606] bottom-0 h-1/2 z-50 w-full '>
            </div>
            <div className='absolute top-0 h-full w-full z-30 flex justify-center items-center'>
                <Image alt='hero-img' className='object-cover brightness-75' fill src={"/hero.avif"} />
                <h1 className='relative z-50 xl:text-8xl text-6xl text-center mx-10 text-white'>CODING TOGETHER<br /> <span className='text-[#00FFAD]'> GROWING</span> FOR THE <span className='text-[#00FFAD]'>BETTER</span></h1>
            </div>
        </section>
    )
}

export default HeroSection